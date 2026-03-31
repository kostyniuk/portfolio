"use client";
import { KPILogoWhite, KPILogoBlack } from "@/components/icons/education-icons";

function Education() {
  return (
    <div>
      <h1>Education</h1>
      <KPILogoBlack className="dark:hidden" />
      <KPILogoWhite className="hidden dark:block" />
    </div>
  );
}

export { Education };
