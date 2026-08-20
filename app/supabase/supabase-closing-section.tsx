import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { SupabaseSymbol, SupabaseWordmark } from "./supabase-mark";

export function SupabaseClosingSection({ portfolioHref = "/" }: { portfolioHref?: string }) {
  return (
    <section
      className="elevenlabs-hints-trigger relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#3ecf8e] px-6 text-[#0f1f18]"
      aria-label="Supabase application closing"
    >
      <div className="absolute inset-x-0 top-0 h-[6px] bg-[#0f1f18]" />
      <div className="supabase-grid-dark absolute inset-0" />

      <div className="relative z-10 flex w-full max-w-[58rem] flex-col items-center text-center">
        <SupabaseSymbol className="mb-7 size-14 text-[#0f1f18] sm:mb-9 sm:size-20" />
        <p className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.22em] text-black/50 uppercase sm:mb-10">
          <SupabaseWordmark className="text-[10px]" />
          <span className="h-3 w-px bg-black/25" />
          Team Frontend
        </p>

        <p className="w-full max-w-[40rem] text-balance text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.05em]">
          Let&apos;s ship it in public, then let the users pick the next version.
        </p>

        <GlassBadge
          glassVariant="liquid"
          className="mt-8 h-auto border border-black/10 px-5 py-3 text-sm tracking-[0.12em] text-[#0f1f18] uppercase sm:mt-10"
          surfaceClassName="bg-white/25"
        >
          Supabase × Alex
        </GlassBadge>

        <p className="elevenlabs-hints-fallback mt-5 text-sm text-black/55 max-md:!block">
          Continue to my{" "}
          <a href={portfolioHref} className="text-black underline underline-offset-4 hover:text-black/65">
            portfolio
          </a>
        </p>
      </div>

      <div className="elevenlabs-hints-overlay pointer-events-none fixed inset-0 z-50 max-md:!hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 190 370 C 60 280, 150 140, 400 50"
            stroke="#0f1f18"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path"
          />
          <path
            d="M 1200 370 C 1330 200, 1030 80, 900 50"
            stroke="#0f1f18"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path elevenlabs-header-hint-path-delayed"
          />
        </svg>

        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-portfolio absolute top-[41vh] left-[2vw] whitespace-nowrap text-[24px] font-bold text-[#0f1f18]">
          Open Portfolio
        </div>
        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-cv absolute top-[41vh] right-[2vw] whitespace-nowrap text-[24px] font-bold text-[#0f1f18]">
          Download CV
        </div>
      </div>
    </section>
  );
}
