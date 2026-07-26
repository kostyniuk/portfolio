import { Project } from "@/features/projects/components/projects";
import { BadgeAsLink } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "lucide-react";
import type { CSSProperties } from "react";

interface PreviewProjectProps extends Project {
  index: number;
}

function PreviewProject({ label, link, Icon, description, features, source, index }: PreviewProjectProps) {
  return (
    <article
      className="project-article py-8"
      // Names the scroll timeline this project's video attaches to. The
      // `view-timeline-inset` that decides when the hand-off lands lives with
      // the animation in globals.css.
      style={{ viewTimelineName: `--project-${index}` } as CSSProperties}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {Icon && <Icon className="size-10" />}
          <p className="text-base font-medium tracking-tight text-foreground">{label}</p>
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
    </article>
  );
}

export type { PreviewProjectProps };
export { PreviewProject };
