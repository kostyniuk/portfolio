import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { NekoClosingSection } from "./neko-closing-section";
import { NekoFitSection } from "./neko-fit-section";
import { NekoHeroSection } from "./neko-hero-section";
import { NekoScanRail } from "./neko-scan-rail";

export const metadata: Metadata = {
  title: "Neko Health Application",
  description: "Alex Kostyniuk's application for Lead Software Engineer, Product Engineering at Neko Health.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NekoPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#f4f6f6]/45 text-[#1e2a2d] [&_button]:text-[#1e2a2d] [&_svg]:!text-[#1e2a2d]"
      />
      <main className="neko-scan-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#f4f6f6]">
        <NekoHeroSection />
        <NekoFitSection />
        <ApplicationHowIWorkSection />
        <NekoClosingSection portfolioHref={MAIN_SITE_URL} />
        <NekoScanRail />
      </main>
    </>
  );
}
