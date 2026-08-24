import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { ResendClosingSection } from "./resend-closing-section";
import { ResendFitSection } from "./resend-fit-section";
import { ResendHeroSection } from "./resend-hero-section";
import { ResendLogRail } from "./resend-log-rail";

export const metadata: Metadata = {
  title: "Resend Application",
  description: "Alex Kostyniuk's application for Product Engineer at Resend.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResendPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#0a0a0a]/35 text-white [&_button]:text-white [&_svg]:!text-white"
      />
      <main className="resend-log-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#0a0a0a]">
        <ResendHeroSection />
        <ResendFitSection />
        <ApplicationHowIWorkSection />
        <ResendClosingSection portfolioHref={MAIN_SITE_URL} />
        <ResendLogRail />
      </main>
    </>
  );
}
