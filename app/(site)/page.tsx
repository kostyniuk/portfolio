import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";
import { Experience } from "@/features/experience/components/experience";
import { Contributions } from "@/components/ui/contributions";
import { Preference } from "@/features/preferences/components/preference";
import { MainPageLayout } from "@/app/main-page";

export default function Page() {
  return (
    <MainPageLayout>
      <div className="page-reveal">
        <section id="about" className="scroll-mt-navigation-scroll-margin">
          <Bio />
          <Socials />
          <Interests />
        </section>
        <Projects />
        <Experience />
        <Contributions />
        <Preference />
        <Education />
      </div>
    </MainPageLayout>
  );
}
