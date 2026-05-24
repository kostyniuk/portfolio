import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";
import { Experience } from "@/features/experience/components/experience";
import { Contributions } from "@/features/contributions/contributions";
import { Preference } from "@/features/preferences/components/preference";
import { MainPageLayout } from "./main-page";

export default function Page() {
  return (
    <MainPageLayout>
      <section id="about" className="scroll-mt-28 sm:scroll-mt-32">
        <Bio />
        <Socials />
        <Interests />
      </section>
      <Projects />
      <Experience />
      <Contributions />
      <Preference />
      <Education />
    </MainPageLayout>
  );
}
