"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Plays only the project that CSS is currently showing, from the start.
 *
 * CSS still owns the hand-off. This reads the line back off the articles'
 * resolved `view-timeline-inset`, so `--project-video-line` in globals.css stays
 * the single place deciding when a project becomes current — move it and the
 * video that plays moves with the video that shows. The observer's root is
 * collapsed to a zero-height band on that line, which makes exactly one article
 * intersect at a time: the articles are contiguous, so whichever one covers the
 * line is the current project.
 *
 * This exists only because CSS cannot reach `<video>` playback. It touches
 * nothing else — no visibility, no layout, no state. Without JS the wipe still
 * works; the videos just all keep looping.
 */
function ProjectVideoPlayback({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videos = Array.from(stackRef.current?.querySelectorAll("video") ?? []);
    const articles = Array.from(document.querySelectorAll<HTMLElement>(".project-article"));
    if (videos.length === 0 || articles.length === 0) return;

    // The first project owns the screen until the second takes over, so it is
    // the one left running before any article has reached the line.
    let current = 0;
    const playOnly = (index: number) => {
      if (index < 0 || index === current || !videos[index]) return;
      current = index;
      videos.forEach((video, i) => {
        if (i !== index) {
          video.pause();
          return;
        }
        video.currentTime = 0;
        // Muted autoplay is permitted, but play() still rejects if the element
        // is torn down mid-call.
        void video.play().catch(() => {});
      });
    };
    videos.forEach((video, i) => {
      if (i !== current) video.pause();
    });

    let observer: IntersectionObserver | undefined;
    const observe = () => {
      observer?.disconnect();
      const inset = Number.parseFloat(getComputedStyle(articles[0]).getPropertyValue("view-timeline-inset"));
      // Browsers without scroll-driven animations report nothing for the inset;
      // they never run the wipe either, so the midpoint is as good a guess as any.
      const line = Number.isFinite(inset) ? inset : window.innerHeight / 2;
      const below = Math.max(0, window.innerHeight - line - 1);
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) playOnly(articles.indexOf(entry.target as HTMLElement));
          }
        },
        { rootMargin: `${-Math.round(line)}px 0px ${-Math.round(below)}px 0px` },
      );
      for (const article of articles) observer.observe(article);
    };

    // The band is in pixels, so it has to be rebuilt when the viewport resizes.
    // Re-observing replays the current article, which playOnly ignores.
    observe();
    window.addEventListener("resize", observe);
    return () => {
      window.removeEventListener("resize", observe);
      observer?.disconnect();
    };
  }, []);

  return (
    <div ref={stackRef} className="project-video-stack relative h-full w-full">
      {children}
    </div>
  );
}

export { ProjectVideoPlayback };
