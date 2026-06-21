import type { Metadata } from "next";

import { RotateAppearance } from "@/components/animated-headline/rotate-appearance";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lovable Application",
  robots: {
    index: false,
    follow: false,
  },
};

const emphasizedWords = new Set(["Alex", "Lovable"]);

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
            <span key={word} className={cn(emphasizedWords.has(word) && "font-extrabold")}>
              {word}
            </span>
          </RotateAppearance>
        ))}
      </span>
    </Component>
  );
}

export default function LovablePage() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#1c1c1c]" aria-label="Lovable Application">
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
        className="absolute bottom-[calc(50%_+_13.5rem)] left-1/2 w-[min(90vw,48rem)] -translate-x-1/2 text-center text-xl font-normal tracking-normal text-white sm:text-4xl"
        text="Hey Lovable team, I'm Alex"
      />
      <img
        src="/lovable/me.png"
        alt="Alex"
        data-slot="lovable-portrait"
        className="lovable-portrait absolute h-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
      />
      <LovableAnimatedText
        className="absolute left-1/2 top-[calc(50%_+_13.5rem)] w-[min(90vw,48rem)] -translate-x-1/2 text-center text-3xl font-normal tracking-normal text-white"
        text="Scroll down to see the reasons why we're a perfect fit"
        startDelayMs={450}
        staggerMs={10}
      />
    </div>
  );
}
