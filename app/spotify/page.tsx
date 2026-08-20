import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { SpotifyClosingSection } from "./spotify-closing-section";
import { SpotifyFitSection } from "./spotify-fit-section";
import { SpotifyHeroSection } from "./spotify-hero-section";
import { SpotifySessionRail } from "./spotify-session-rail";

export const metadata: Metadata = {
  title: "Spotify Application",
  description: "Alex Kostyniuk's application for Frontend Engineer, Music (Rights Systems) at Spotify.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SpotifyPage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#f4f4ee]/80 text-black [&_button]:text-black [&_svg]:!text-black"
      />
      <main className="spotify-session-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#121212]">
        <SpotifyHeroSection />
        <SpotifyFitSection />
        <ApplicationHowIWorkSection />
        <SpotifyClosingSection portfolioHref={MAIN_SITE_URL} />
        <SpotifySessionRail />
      </main>
    </>
  );
}
