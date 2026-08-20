import type { Metadata } from "next";

import { Header } from "@/app/header";
import { ApplicationHowIWorkSection } from "@/components/application-how-i-work-section";
import { MAIN_SITE_URL } from "@/lib/site";
import { SupabaseCiRail } from "./supabase-ci-rail";
import { SupabaseClosingSection } from "./supabase-closing-section";
import { SupabaseFitSection } from "./supabase-fit-section";
import { SupabaseHeroSection } from "./supabase-hero-section";

export const metadata: Metadata = {
  title: "Supabase Application",
  description: "Alex Kostyniuk's application for Frontend Engineer on Team Frontend at Supabase.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupabasePage() {
  return (
    <>
      <Header
        logoHref={MAIN_SITE_URL}
        surfaceClassName="bg-[#0f0f0f]/35 text-white [&_button]:text-white [&_svg]:!text-white"
      />
      <main className="supabase-ci-scroll h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#1c1c1c]">
        <SupabaseHeroSection />
        <SupabaseFitSection />
        <ApplicationHowIWorkSection />
        <SupabaseClosingSection portfolioHref={MAIN_SITE_URL} />
        <SupabaseCiRail />
      </main>
    </>
  );
}
