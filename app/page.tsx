import { Kbd } from "@/components/ui/kbd";
import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";
import { Experience } from "@/features/experience/components/experience";
import { AppleWelcomeEffectEnglish } from "@/components/apple-hello-effect/apple-welcome-effect-english";
import { Contributions } from "@/features/contributions/contributions";
import { Preference } from "@/features/preferences/components/preference";

export default function Page() {
  return (
    <>
      <div className="mt-8 flex flex-col items-center text-center font-mono text-xs gap-4 sm:mt-0">
        {/* <AppleWelcomeEffectEnglish className={"text-foreground"} loop loopDelay={2000} /> */}
      </div>
      <Bio />
      <Socials />
      <Projects />
      <Experience />
      <Contributions />
      <Interests />
      <Preference />
      <Education />
    </>
  );
}
