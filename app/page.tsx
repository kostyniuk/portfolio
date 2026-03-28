import { Bio } from "@/features/profile/components/bio";
import { PreviewProject } from "@/features/projects/components/project-preview";
import { Projects } from "@/features/profile/components/projects";
import { Socials } from "@/features/profile/components/socials";

export default function Page() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-8 min-h-dvh w-1/2 bg-foreground/2 text-sm leading-loose p-8 max-w-172 overflow-scroll">
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <Bio />
        <Socials />
        <Projects />
        <PreviewProject />
      </div>
    </div>
  );
}
