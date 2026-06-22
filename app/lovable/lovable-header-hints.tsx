import { GlassBadge } from "@/components/ui/glasscn/glass-badge";

export function LovableHintsSection({ portfolioHref = "/" }: { portfolioHref?: string }) {
  return (
    <section
      className="lovable-hints-trigger relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#1c1c1c]"
      aria-label="Header hints"
    >
      <div
        aria-hidden="true"
        className="absolute"
        style={{
          top: "calc(-75vw + 50vh)",
          left: "50%",
          width: "200vw",
          aspectRatio: "0.9917355371900827",
          transform: "translate3d(-50%, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="/lovable/pulse.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
          style={{ filter: "blur(4px)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <p className="w-[min(90vw,40rem)] text-center text-xl font-normal tracking-normal text-white sm:text-4xl">
          Let&apos;s build something{" "}
          <GlassBadge className="text-white text-xl sm:text-3xl font-bold px-4 py-4">Lovable</GlassBadge>{" "}
          <span className="font-bold">together!</span>
        </p>
        <p className="lovable-hints-fallback text-white/60">
          Go to{" "}
          <a href={portfolioHref} className="text-white underline underline-offset-4 hover:text-white/80">
            Portfolio
          </a>
        </p>
      </div>

      <div className="lovable-hints-overlay pointer-events-none fixed inset-0 z-50">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path
            d="M 190 370 C 60 280, 150 140, 400 50"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="lovable-header-hint-path"
          />
          <path
            d="M 1200 370 C 1330 200, 1030 80, 900 50"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="lovable-header-hint-path lovable-header-hint-path-delayed"
          />
        </svg>

        <div className="lovable-header-hint-label lovable-header-hint-label-portfolio absolute top-[41vh] left-[2vw] whitespace-nowrap text-[26px] font-bold text-white">
          Click to open Portfolio
        </div>

        <div className="lovable-header-hint-label lovable-header-hint-label-cv absolute top-[41vh] right-[2vw] whitespace-nowrap text-[26px] font-bold text-white">
          Click to Download CV
        </div>
      </div>
    </section>
  );
}
