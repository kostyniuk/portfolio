import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GraspSymbol, GraspWordmark } from "./grasp-mark";

export function GraspClosingSection({ portfolioHref = "/" }: { portfolioHref?: string }) {
  return (
    <section
      className="elevenlabs-hints-trigger relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#1a1a1a] px-6 text-[#f5f5f5]"
      aria-label="Grasp application closing"
    >
      <div className="absolute inset-x-0 top-0 h-[6px] bg-[#f5f5f5]" />
      <div className="grasp-glow absolute -top-[18vw] -left-[14vw] size-[46vw] min-h-80 min-w-80" />
      <div className="grasp-glow absolute -right-[16vw] -bottom-[24vw] size-[50vw] min-h-80 min-w-80" />

      <div className="relative z-10 flex w-full max-w-[58rem] flex-col items-center text-center">
        <div className="mb-9 flex flex-col items-center gap-4 sm:mb-11">
          <GraspSymbol className="size-16 text-[#f5f5f5] sm:size-20" />
          <GraspWordmark className="text-sm text-[#f5f5f5] sm:text-base" />
        </div>

        <p className="w-full max-w-[40rem] text-balance text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.05em]">
          Let&apos;s automate the research the world still does by hand.
        </p>

        <GlassBadge
          glassVariant="liquid"
          className="mt-8 h-auto border border-white/12 px-5 py-3 text-sm tracking-[0.12em] text-white uppercase sm:mt-10"
          surfaceClassName="bg-white/10"
        >
          Grasp × Alex
        </GlassBadge>

        <p className="elevenlabs-hints-fallback mt-5 text-sm text-white/50 max-md:!block">
          Continue to my{" "}
          <a href={portfolioHref} className="text-white underline underline-offset-4 hover:text-white/70">
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
            stroke="#f5f5f5"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path"
          />
          <path
            d="M 1200 370 C 1330 200, 1030 80, 900 50"
            stroke="#f5f5f5"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path elevenlabs-header-hint-path-delayed"
          />
        </svg>

        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-portfolio absolute top-[41vh] left-[2vw] whitespace-nowrap text-[24px] font-bold text-[#f5f5f5]">
          Click to open Portfolio
        </div>
        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-cv absolute top-[41vh] right-[2vw] whitespace-nowrap text-[24px] font-bold text-[#f5f5f5]">
          Click to Download CV
        </div>
      </div>
    </section>
  );
}
