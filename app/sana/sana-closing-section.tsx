import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { SanaMark } from "./sana-mark";

export function SanaClosingSection({ portfolioHref = "/" }: { portfolioHref?: string }) {
  return (
    <section
      className="elevenlabs-hints-trigger relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#f7f6f4] px-6 text-[#111111]"
      aria-label="Sana application closing"
    >
      <div className="sana-spectrum-wash absolute inset-x-0 top-0 h-[42vh]" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#ff8a5c,#c084fc,#7dd3fc)]" />

      <div className="relative z-10 flex w-full max-w-[58rem] flex-col items-center text-center">
        <SanaMark className="mb-8 size-14 text-[#111111] sm:mb-10 sm:size-20" />
        <p className="mb-8 text-[10px] tracking-[0.2em] text-black/45 uppercase sm:mb-10">Learn &amp; Agents</p>

        <p className="w-full max-w-[40rem] text-balance text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.0] font-medium tracking-[-0.055em]">
          Let&apos;s put agents to work on problems people actually have.
        </p>

        <GlassBadge
          glassVariant="liquid"
          className="mt-8 h-auto border border-black/10 px-5 py-3 text-sm text-black shadow-[0_12px_36px_rgba(20,20,20,0.08)] sm:mt-10"
          surfaceClassName="bg-white/65"
        >
          Sana × Alex
        </GlassBadge>

        <p className="elevenlabs-hints-fallback mt-5 text-sm text-black/50 max-md:!block">
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
            stroke="#111111"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path"
          />
          <path
            d="M 1200 370 C 1330 200, 1030 80, 900 50"
            stroke="#111111"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="elevenlabs-header-hint-path elevenlabs-header-hint-path-delayed"
          />
        </svg>

        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-portfolio absolute top-[41vh] left-[2vw] whitespace-nowrap text-[24px] font-bold text-black">
          Open Portfolio
        </div>
        <div className="elevenlabs-header-hint-label elevenlabs-header-hint-label-cv absolute top-[41vh] right-[2vw] whitespace-nowrap text-[24px] font-bold text-black">
          Download CV
        </div>
      </div>
    </section>
  );
}
