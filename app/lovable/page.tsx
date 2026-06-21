import type { Metadata } from "next";

import { RotateAppearance } from "@/components/animated-headline/rotate-appearance";

export const metadata: Metadata = {
  title: "Lovable Background",
  robots: {
    index: false,
    follow: false,
  },
};

function LovableAnimatedText({
  as: Component = "h2",
  className,
  text,
  startDelayMs = 0,
  staggerMs = 90,
}: {
  as?: "h1" | "h2";
  className: string;
  text: string;
  startDelayMs?: number;
  staggerMs?: number;
}) {
  const words = text.trim().split(/\s+/).filter(Boolean);

  return (
    <Component className={className} style={{ perspective: 1200 }}>
      <span className="flex flex-wrap items-baseline justify-center gap-x-[0.28em] gap-y-2">
        {words.map((word, index) => (
          <RotateAppearance key={`${word}-${index}`} delayMs={startDelayMs + index * staggerMs}>
            {word}
          </RotateAppearance>
        ))}
      </span>
    </Component>
  );
}

export default function LovablePage() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#1c1c1c]" aria-label="Lovable background">
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
      <LovableAnimatedText
        className="absolute bottom-[calc(50%_+_13.5rem)] left-1/2 w-[min(90vw,48rem)] -translate-x-1/2 text-center text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl"
        text="Hey Lovable team, I'm Alex"
      />
      <img
        src="/lovable/me.png"
        alt="Alex"
        data-slot="lovable-portrait"
        className="absolute h-100 left-1/2 top-1/2 object-contain"
        style={{
          animation: "lovable-portrait-reveal 0.82s cubic-bezier(0.2, 0.72, 0.2, 1) 240ms both",
          transform: "translate3d(-50%, -50%, 0)",
          transformOrigin: "50% 82%",
        }}
      />
      <LovableAnimatedText
        className="absolute left-1/2 top-[calc(50%_+_13.5rem)] w-[min(90vw,48rem)] -translate-x-1/2 text-center text-2xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl"
        text="Scroll down to see the reasons why we're a perfect fit"
        startDelayMs={450}
      />
    </div>
  );
}
