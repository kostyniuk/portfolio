import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { Header } from "@/app/header";
import { MAIN_SITE_URL } from "@/lib/site";
import { ElevenLabsClosingSection } from "./elevenlabs-closing-section";
import { ElevenLabsFitSection } from "./elevenlabs-fit-section";
import { ElevenLabsHeroSection } from "./elevenlabs-hero-section";
import { ElevenLabsHowIWorkSection } from "./elevenlabs-how-i-work-section";

export const metadata: Metadata = {
  title: "ElevenLabs Application",
  description: "Alex Kostyniuk's application to ElevenLabs.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ElevenLabsPage() {
  const introAudioPath = "/elevenlabs/introduction.mp3";
  const hasIntroAudio = existsSync(join(process.cwd(), "public", introAudioPath));

  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-white/75 text-black [&_button]:text-black [&_svg]:!text-black"
      />
      <main className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#fdfcfc]">
        <ElevenLabsHeroSection audioSrc={hasIntroAudio ? introAudioPath : undefined} />
        <ElevenLabsFitSection />
        <ElevenLabsHowIWorkSection />
        <ElevenLabsClosingSection portfolioHref={MAIN_SITE_URL} />
      </main>
    </>
  );
}
