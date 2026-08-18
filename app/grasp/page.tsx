import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { GraspClosingSection } from "./grasp-closing-section";
import { GraspFitSection } from "./grasp-fit-section";
import { GraspHeroSection } from "./grasp-hero-section";
import { GraspRunRail } from "./grasp-run-rail";

export const metadata: Metadata = {
  title: "Grasp Application",
  description: "Alex Kostyniuk's application for Software Engineer - Fullstack at Grasp.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraspPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#f5f5f5]/80 text-[#1a1a1a] [&_button]:text-[#1a1a1a] [&_svg]:!text-[#1a1a1a]"
      />
      <main className="grasp-run-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#f5f5f5]">
        <GraspHeroSection />
        <GraspFitSection />
        <ApplicationHowIWorkSection />
        <GraspClosingSection portfolioHref={MAIN_SITE_URL} />
        <GraspRunRail />
      </main>
    </>
  );
}
