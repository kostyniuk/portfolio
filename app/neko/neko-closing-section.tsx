import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { NekoSymbol, NekoWordmark } from "./neko-mark";

export function NekoClosingSection({ portfolioHref = "/" }: { portfolioHref?: string }) {
  return (
    <section
      className="elevenlabs-hints-trigger relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#486970] px-6 text-white"
      aria-label="Neko Health application closing"
    >
      <div className="absolute inset-x-0 top-0 h-[6px] bg-white/85" />
      <div className="neko-dots-dark absolute inset-0" />

      <div className="relative z-10 flex w-full max-w-[58rem] flex-col items-center text-center">
        <NekoSymbol className="mb-7 h-14 w-[4.4rem] text-white sm:mb-9 sm:h-20 sm:w-[6.3rem]" />
        <p className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.22em] text-white/60 uppercase sm:mb-10">
          <NekoWordmark className="text-[10px]" />
          <span className="h-3 w-px bg-white/30" />
          Product Engineering
        </p>

        <p className="w-full max-w-[40rem] text-balance text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.05em]">
          Let&apos;s make prevention the normal way to stay well.
        </p>

        <GlassBadge
          glassVariant="liquid"
          className="mt-8 h-auto border border-white/15 px-5 py-3 text-sm tracking-[0.12em] text-white uppercase sm:mt-10"
          surfaceClassName="bg-white/12"
        >
          Neko Health × Alex
        </GlassBadge>

        <p className="elevenlabs-hints-fallback mt-5 text-sm text-white/60 max-md:!block">
          Continue to my{" "}
          <a href={portfolioHref} className="text-white underline underline-offset-4 hover:text-white/75">
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
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path"
          />
          <path
            d="M 1200 370 C 1330 200, 1030 80, 900 50"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path elevenlabs-header-hint-path-delayed"
          />
        </svg>

        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-portfolio absolute top-[41vh] left-[2vw] whitespace-nowrap text-[24px] font-bold text-white">
          Open Portfolio
        </div>
        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-cv absolute top-[41vh] right-[2vw] whitespace-nowrap text-[24px] font-bold text-white">
          Download CV
        </div>
      </div>
    </section>
  );
}
