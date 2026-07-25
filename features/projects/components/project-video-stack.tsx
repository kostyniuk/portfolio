import { Device } from "@/components/ui/device";
import { type Project } from "@/features/projects/components/projects";
import type { CSSProperties } from "react";

interface ProjectVideoStackProps {
  projects: (Project & { id: string })[];
}

/**
 * One sticky MacBook shared by every project. Each `<video>` is stacked
 * absolutely inside the device screen and wipes in as its matching text article
 * (see project-preview.tsx) scrolls through view, driven purely by CSS
 * scroll-timelines: the article names a `view-timeline`, this stack's videos
 * attach to it via `animation-timeline`, scoped together by the `timelineScope`
 * declared on the `<section>` in projects.tsx. See globals.css for the
 * `.project-video-stack` animation.
 *
 * Videos are painted in source order, so a video wiping on simply covers the
 * one before it — never a gap, and only the incoming video is ever animated.
 *
 * On lg the device comes to rest vertically centred rather than at the shared
 * 9rem nav offset. `top: 50vh` would pin its top edge to the middle, so the
 * 13rem backs off by roughly half the device's height — a constant, because the
 * height follows the column width and CSS has no way to halve it here; the
 * max-w cap on the grid keeps it close enough at every size. The `max(…, 5rem)`
 * stops it tucking under the fixed header on short windows, and `lg:-mt-12`
 * lifts its starting position out of the grid so the lid sits level with the
 * section label instead of the first article. None of this affects when videos
 * hand off — that is `--project-video-line` in globals.css.
 */
function ProjectVideoStack({ projects }: ProjectVideoStackProps) {
  return (
    <div className="sticky top-[calc(var(--navigation-scroll-margin)+1rem)] z-10 bg-background pb-4 lg:col-start-2 lg:row-start-1 lg:-mt-12 lg:self-start lg:top-[max(calc(50vh-13rem),5rem)] lg:bg-transparent lg:pb-0">
      {/* The shadow goes on the device artwork rather than the whole component:
          drop-shadow is a filter, and putting it on the wrapper would push five
          playing videos through it on every repaint. */}
      <Device variant="macbook" className="text-black [&>svg]:drop-shadow-2xl [&>svg]:drop-shadow-black/40">
        <div className="project-video-stack relative h-full w-full">
          {projects.map((project, index) => (
            <video
              key={project.id}
              src={project.videoHref}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ animationTimeline: `--project-${index}` } as CSSProperties}
            />
          ))}
        </div>
      </Device>
    </div>
  );
}

export { ProjectVideoStack };
