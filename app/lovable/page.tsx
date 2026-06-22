import type { Metadata } from "next";

import { Header } from "@/app/header";
import { LovableHeroSection } from "./lovable-hero-section";
import { LovableSpriteSection } from "./lovable-sprite-section";
import { LovableHeaderHints } from "./lovable-header-hints";

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
      <Header />
      <main className="h-dvh overflow-y-auto scroll-smooth snap-y snap-mandatory">
        <LovableHeroSection />
        <LovableSpriteSection />
      </main>
    </>
  );
}
