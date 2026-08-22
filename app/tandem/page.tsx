import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { TandemClosingSection } from "./tandem-closing-section";
import { TandemFitSection } from "./tandem-fit-section";
import { TandemHeroSection } from "./tandem-hero-section";
import { TandemVisitRail } from "./tandem-visit-rail";

export const metadata: Metadata = {
  title: "Tandem Health Application",
  description: "Alex Kostyniuk's application for Software Engineer at Tandem Health.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TandemPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#fafaf9]/45 text-black [&_button]:text-black [&_svg]:!text-black"
      />
      <main className="tandem-visit-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#bef66f]">
        <TandemHeroSection />
        <TandemFitSection />
        <ApplicationHowIWorkSection />
        <TandemClosingSection portfolioHref={MAIN_SITE_URL} />
        <TandemVisitRail />
      </main>
    </>
  );
}
