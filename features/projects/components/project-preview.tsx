"use client";

import { Project } from "@/features/projects/components/projects";
import { BadgeAsLink } from "@/components/ui/badge";
import { ArrowUpRightIcon, PlayIcon } from "lucide-react";
import { useRef, useState } from "react";

function PreviewProject({ label, link, Icon, description, features, source, videoHref }: Project) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  };

  const toggle = () => (videoRef.current?.paused ? play() : pause());

  return (
    <article className="grid gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.9fr)] lg:items-start">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {Icon && <Icon className="size-10" />}
          <p className="text-sm/relaxed font-medium text-foreground">{label}</p>
          <BadgeAsLink href={link} variant={"secondary"}>
            Website <ArrowUpRightIcon data-icon="inline-end" />
          </BadgeAsLink>
          <BadgeAsLink href={source} variant={"outline"}>
            Source <ArrowUpRightIcon data-icon="inline-end" />
          </BadgeAsLink>
        </div>
        <p className="text-xs/relaxed text-muted-foreground">{description}</p>
        <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/8 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 dark:border-white/10">
        <button
          type="button"
          aria-label={`${isPlaying ? "Pause" : "Play"} ${label} demo`}
          onPointerEnter={(e) => e.pointerType === "mouse" && play()}
          onPointerLeave={(e) => e.pointerType === "mouse" && pause()}
          onFocus={play}
          onBlur={pause}
          onClick={(e) => {
            const pointerType = (e.nativeEvent as PointerEvent).pointerType;
            if (pointerType === "touch" || pointerType === "pen") toggle();
          }}
          className="group/preview relative block w-full max-w-192 overflow-hidden rounded-md border border-white/8 outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-white/10"
        >
          <video
            ref={videoRef}
            src={`${videoHref}#t=0.1`}
            loop
            muted
            playsInline
            preload="metadata"
            className="h-auto w-full object-cover"
          />
          <span
            data-playing={isPlaying}
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-200 data-[playing=true]:opacity-0"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition-transform group-hover/preview:scale-110">
              <PlayIcon className="size-4 translate-x-px fill-current" />
            </span>
          </span>
        </button>
      </div>
    </article>
  );
}

export { PreviewProject };
