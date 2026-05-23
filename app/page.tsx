import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/projects/components/projects";
import { Socials } from "@/features/profile/components/socials";
import { Interests } from "@/features/interests/components/interests";
import { Education } from "@/features/education/components/education";
import { Experience } from "@/features/experience/components/experience";
import { Contributions } from "@/features/contributions/contributions";
import { Preference } from "@/features/preferences/components/preference";

export default function Page() {
  return (
    <>
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
