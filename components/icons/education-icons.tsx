import type { ComponentType } from "react";

type EducationIconProps = {
  className?: string;
};

type EducationIcon = ComponentType<EducationIconProps>;

function KPILogoWhite({ className }: EducationIconProps) {
  return (
    <img
      src="/kpi-logo-white.png"
      alt="National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute'"
      width={200}
      className={className}
    />
  );
}

function KPILogoBlack({ className }: EducationIconProps) {
  return (
    <img
      src="/kpi-logo-black.png"
      alt="National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute'"
      width={200}
      className={className}
    />
  );
}

export { KPILogoWhite, KPILogoBlack };
export type { EducationIcon, EducationIconProps };
