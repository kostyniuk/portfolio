import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { SpotifyMark } from "./spotify-mark";

export function SpotifyClosingSection({ portfolioHref = "/" }: { portfolioHref?: string }) {
  return (
    <section
      className="elevenlabs-hints-trigger relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#b8a7ff] px-6 text-[#121212]"
      aria-label="Spotify application closing"
    >
      <div className="absolute top-[-24vw] right-[-12vw] size-[58vw] rounded-full bg-[#1ed760]" />
      <div className="absolute bottom-[-45vw] left-[-12vw] size-[58vw] rounded-full bg-[#121212]" />

      <div className="relative z-10 flex w-full max-w-[58rem] flex-col items-center text-center">
        <SpotifyMark className="mb-8 size-14 text-[#121212] sm:mb-10 sm:size-20" />
        <p className="w-full max-w-[38rem] text-balance text-[clamp(2rem,4.75vw,4.25rem)] leading-[0.98] font-medium tracking-[-0.055em]">
          Let&apos;s make rights feel as simple as pressing play.
        </p>
        <GlassBadge
          glassVariant="liquid"
          className="mt-7 h-auto border border-black/10 bg-white/35 px-5 py-3 text-sm text-black shadow-[0_12px_36px_rgba(20,20,20,0.08)] sm:mt-8"
        >
          Spotify × Alex
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
