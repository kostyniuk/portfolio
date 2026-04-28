import { Kbd } from "@/components/ui/kbd";
import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";
import { Experience } from "@/features/experience/components/experience";
import { AppleHelloEffectEnglish } from "@/components/apple-hello-effect/apple-hello-effect-english";
import { Contributions } from "@/features/contributions/contributions";

export default function Page() {
  return (
    <>
      <div className="mt-8 flex flex-col items-center text-center font-mono text-xs gap-4 sm:mt-0">
        <div className="flex text-center items-baseline text-muted-foreground">
          (Press <Kbd className="mx-1">d</Kbd> to toggle dark mode)
        </div>
        <AppleHelloEffectEnglish className={"text-foreground"} loop loopDelay={2000} />
      </div>
      <Bio />
      <Socials />
      <Projects />
      <Experience />
      <Contributions />
      <Interests />
      <Education />
    </>
  );
}
