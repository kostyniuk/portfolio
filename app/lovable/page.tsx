import type { Metadata } from "next";

import { Header } from "@/app/header";
import { MAIN_SITE_URL } from "@/lib/site";
import { LovableHeroSection } from "./lovable-hero-section";
import { LovableSpriteSection } from "./lovable-sprite-section";
import { LovableHintsSection } from "./lovable-header-hints";

export const metadata: Metadata = {
  title: "Lovable Application",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LovablePage() {
  return (
    <>
      <Header logoHref={MAIN_SITE_URL} />
      <main className="h-dvh overflow-y-auto scroll-smooth snap-y snap-mandatory">
        <LovableHeroSection />
        <LovableSpriteSection />
        <LovableHintsSection portfolioHref={MAIN_SITE_URL} />
      </main>
    </>
  );
}
