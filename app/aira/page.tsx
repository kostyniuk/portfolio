import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { AiraClosingSection } from "./aira-closing-section";
import { AiraFitSection } from "./aira-fit-section";
import { AiraHeroSection } from "./aira-hero-section";
import { AiraPlanRail } from "./aira-plan-rail";

export const metadata: Metadata = {
  title: "Aira Application",
  description: "Alex Kostyniuk's application for Frontend Developer – Planning at Aira.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AiraPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#FFAF51]/80 text-[#29292D] [&_button]:text-[#29292D] [&_svg]:!text-[#29292D]"
      />
      <main className="aira-plan-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#FFAF51]">
        <AiraHeroSection />
        <AiraFitSection />
        <ApplicationHowIWorkSection />
        <AiraClosingSection portfolioHref={MAIN_SITE_URL} />
        <AiraPlanRail />
      </main>
    </>
  );
}
