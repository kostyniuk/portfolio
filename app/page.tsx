import { Kbd } from "@/components/ui/kbd";
import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";
import { Experience } from "@/features/experience/components/experience";

export default function Page() {
  return (
    <div className="min-h-dvh px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 rounded-[2rem] border border-border/40 bg-card/95 p-6 text-sm leading-loose shadow-xl ring-1 ring-foreground/5 backdrop-blur-sm sm:p-8 dark:ring-foreground/10">
        <div className="text-center font-mono text-xs text-muted-foreground">
          (Press <Kbd className="mx-1">d</Kbd> to toggle dark mode)
        </div>
        <Bio />
        <Socials />
        <Projects />
        <Experience />
        <Interests />
        <Education />
      </div>
    </div>
  );
}
