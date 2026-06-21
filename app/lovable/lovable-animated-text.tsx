import { UNDERLINE_SHIMMER_MS } from "@/components/animated-headline/constants";
import { RotateAppearance } from "@/components/animated-headline/rotate-appearance";
import { ShinyUnderline } from "@/components/animated-headline/shiny-underline";
import { cn } from "@/lib/utils";

const emphasizedWords = new Set(["Alex", "Lovable"]);

export function LovableAnimatedText({
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
      <span className="flex flex-wrap items-baseline justify-center gap-x-[0.28em] gap-y-2 text-white/85">
        {words.map((word, index) => (
          <RotateAppearance key={index} delayMs={startDelayMs + index * staggerMs}>
            <span
              className={cn(
                emphasizedWords.has(word) && "font-extrabold text-white",
                word === "Lovable" && "relative inline-block",
              )}
            >
              {word}
              {word === "Lovable" ? (
                <ShinyUnderline replayKey={index} shimmerDurationMs={UNDERLINE_SHIMMER_MS} repeat className="h-[2px]" />
              ) : null}
            </span>
          </RotateAppearance>
        ))}
      </span>
    </Component>
  );
}
