import { Kbd } from "@/components/ui/kbd";
import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";
import { Experience } from "@/features/experience/components/experience";
import { AppleHelloEffectEnglish } from "@/components/apple-hello-effect/apple-hello-effect-english";

export default function Page() {
  return (
    <div className="min-h-dvh px-0 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-3 py-6 text-sm leading-loose backdrop-blur-sm sm:px-6 sm:py-8 lg:p-8">
        <div className="mt-8 flex flex-col items-center text-center font-mono text-xs gap-4 sm:mt-0">
          <div className="flex text-center items-baseline text-muted-foreground">
            (Press <Kbd className="mx-1">d</Kbd> to toggle dark mode)
          </div>
          <AppleHelloEffectEnglish className={"text-foreground/75"} loop loopDelay={2000} />
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
