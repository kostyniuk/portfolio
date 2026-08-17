import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { SanaClosingSection } from "./sana-closing-section";
import { SanaFitSection } from "./sana-fit-section";
import { SanaHeroSection } from "./sana-hero-section";
import { SanaSignalRail } from "./sana-signal-rail";

export const metadata: Metadata = {
  title: "Sana Application",
  description: "Alex Kostyniuk's application for Fullstack Product Engineer (Learn & Agents) at Sana.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SanaPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#0b0b0d]/70 text-white [&_button]:text-white [&_svg]:!text-white"
      />
      <main className="sana-signal-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#0b0b0d]">
        <SanaHeroSection />
        <SanaFitSection />
        <ApplicationHowIWorkSection />
        <SanaClosingSection portfolioHref={MAIN_SITE_URL} />
        <SanaSignalRail />
      </main>
    </>
  );
}
