import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { HmClosingSection } from "./hm-closing-section";
import { HmFitSection } from "./hm-fit-section";
import { HmHeroSection } from "./hm-hero-section";
import { HmSeamRail } from "./hm-seam-rail";

export const metadata: Metadata = {
  title: "H&M Group Application",
  description:
    "Alex Kostyniuk's application for Senior Software Engineer – Frontend (Portfolio Brands, COS) at H&M Group.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HmPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#eceae4]/80 text-black [&_button]:text-black [&_svg]:!text-black"
      />
      <main className="hm-lookbook-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#eceae4]">
        <HmHeroSection />
        <HmFitSection />
        <ApplicationHowIWorkSection />
        <HmClosingSection portfolioHref={MAIN_SITE_URL} />
        <HmSeamRail />
      </main>
    </>
  );
}
