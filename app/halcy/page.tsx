import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { HalcyClosingSection } from "./halcy-closing-section";
import { HalcyFitSection } from "./halcy-fit-section";
import { HalcyHeroSection } from "./halcy-hero-section";
import { HalcyTripRail } from "./halcy-trip-rail";

export const metadata: Metadata = {
  title: "Halcy Application",
  description: "Alex Kostyniuk's application for Senior Engineer at Halcy.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HalcyPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#0f2426]/35 text-[#f2f2ec] [&_button]:text-[#f2f2ec] [&_svg]:!text-[#f2f2ec]"
      />
      <main className="halcy-trip-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#0f2426]">
        <HalcyHeroSection />
        <HalcyFitSection />
        <ApplicationHowIWorkSection />
        <HalcyClosingSection portfolioHref={MAIN_SITE_URL} />
        <HalcyTripRail />
      </main>
    </>
  );
}
