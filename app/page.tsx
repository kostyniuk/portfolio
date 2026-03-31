import { Kbd } from "@/components/ui/kbd";
import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";

export default function Page() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-8 min-h-dvh w-1/2 bg-foreground/2 text-sm leading-loose p-8 max-w-172 overflow-scroll">
        <div className="font-mono text-xs text-muted-foreground text-center">
          (Press <Kbd className="mx-1">d</Kbd> to toggle dark mode)
        </div>
        <Bio />
        <Socials />
        <Projects />
        <Interests />
        <Education />
      </div>
    </div>
  );
}
