import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { LegoraClosingSection } from "./legora-closing-section";
import { LegoraFitSection } from "./legora-fit-section";
import { LegoraHeroSection } from "./legora-hero-section";

export const metadata: Metadata = {
  title: "Legora Application",
  description: "Alex Kostyniuk's application for Frontend-Leaning Fullstack Engineer at Legora.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegoraPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#f7f7f3]/75 text-black [&_button]:text-black [&_svg]:!text-black"
      />
      <main className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#f7f7f3]">
        <LegoraHeroSection />
        <LegoraFitSection />
        <ApplicationHowIWorkSection />
        <LegoraClosingSection portfolioHref={MAIN_SITE_URL} />
      </main>
    </>
  );
}
