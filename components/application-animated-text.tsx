import { Fragment } from "react";

import { UNDERLINE_SHIMMER_MS } from "@/components/animated-headline/constants";
import { RotateAppearance } from "@/components/animated-headline/rotate-appearance";
import { ShinyUnderline } from "@/components/animated-headline/shiny-underline";
import { cn } from "@/lib/utils";

function normalizeWord(word: string) {
  return word.replace(/[^\p{L}\p{N}]+/gu, "");
}

export function ApplicationAnimatedText({
  as: Component = "h2",
  className,
  contentClassName,
  text,
  emphasizedWords = [],
  underlineWord,
  lineBreakBefore,
  startDelayMs = 0,
  staggerMs = 90,
}: {
  as?: "h1" | "h2";
  className: string;
  contentClassName?: string;
  text: string;
  emphasizedWords?: string[];
  underlineWord?: string;
  lineBreakBefore?: string;
  startDelayMs?: number;
  staggerMs?: number;
}) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const emphasized = new Set(emphasizedWords);

  return (
    <Component className={className} style={{ perspective: 1200 }}>
      <span
        className={cn(
          "flex flex-wrap items-baseline justify-center gap-x-[0.28em] gap-y-2",
          contentClassName,
        )}
      >
        {words.map((word, index) => {
          const normalizedWord = normalizeWord(word);

          return (
            <Fragment key={`${word}-${index}`}>
              {normalizedWord === lineBreakBefore ? (
                <span aria-hidden className="h-0 basis-full" />
              ) : null}
              <RotateAppearance delayMs={startDelayMs + index * staggerMs}>
                <span
                  className={cn(
                    emphasized.has(normalizedWord) && "font-extrabold",
                    normalizedWord === underlineWord && "relative inline-block",
                  )}
                >
                  {word}
                  {normalizedWord === underlineWord ? (
                    <ShinyUnderline
                      replayKey={index}
                      shimmerDurationMs={UNDERLINE_SHIMMER_MS}
                      repeat
                      className="h-[2px]"
                    />
                  ) : null}
                </span>
              </RotateAppearance>
            </Fragment>
          );
        })}
      </span>
    </Component>
  );
}
