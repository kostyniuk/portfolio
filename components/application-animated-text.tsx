import { Fragment } from "react";

import { UNDERLINE_SHIMMER_MS } from "@/components/animated-headline/constants";
import { RotateAppearance } from "@/components/animated-headline/rotate-appearance";
import { ShinyUnderline } from "@/components/animated-headline/shiny-underline";
import { cn } from "@/lib/utils";

function normalizeWord(word: string) {
  return word.replace(/[^\p{L}\p{N}]+/gu, "");
}

/** Index where `phrase` starts as consecutive words inside `words`, or -1. */
function findPhraseStart(words: string[], phrase: string[]) {
  if (!phrase.length) return -1;
  for (let start = 0; start + phrase.length <= words.length; start += 1) {
    if (phrase.every((part, offset) => normalizeWord(words[start + offset]) === part)) return start;
  }
  return -1;
}

export function ApplicationAnimatedText({
  as: Component = "h2",
  className,
  contentClassName,
  text,
  emphasizedWords = [],
  underlineWord,
  underlinePhrase,
  underlineShimmerColors,
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
  /** Underlines several consecutive words as one run, for multi-word brand names. */
  underlinePhrase?: string;
  underlineShimmerColors?: string[];
  lineBreakBefore?: string;
  startDelayMs?: number;
  staggerMs?: number;
}) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const emphasized = new Set(emphasizedWords);
  const phrase = underlinePhrase ? underlinePhrase.trim().split(/\s+/).map(normalizeWord).filter(Boolean) : [];
  const phraseStart = findPhraseStart(words, phrase);
  const phraseEnd = phraseStart === -1 ? -1 : phraseStart + phrase.length - 1;

  const nodes = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const normalizedWord = normalizeWord(word);
    const lineBreak =
      normalizedWord === lineBreakBefore ? (
        <span aria-hidden className="h-0 basis-full" key={`break-${index}`} />
      ) : null;

    if (index === phraseStart) {
      const run = words.slice(phraseStart, phraseEnd + 1);

      nodes.push(
        <Fragment key={`phrase-${index}`}>
          {lineBreak}
          <span className="relative inline-flex items-baseline gap-x-[0.28em]">
            {run.map((runWord, runIndex) => (
              <RotateAppearance key={`${runWord}-${runIndex}`} delayMs={startDelayMs + (index + runIndex) * staggerMs}>
                <span className={cn(emphasized.has(normalizeWord(runWord)) && "font-extrabold")}>{runWord}</span>
              </RotateAppearance>
            ))}
            <ShinyUnderline
              replayKey={index}
              shimmerColors={underlineShimmerColors}
              shimmerDurationMs={UNDERLINE_SHIMMER_MS}
              repeat
              className="h-[2px]"
            />
          </span>
        </Fragment>,
      );
      index = phraseEnd;
      continue;
    }

    nodes.push(
      <Fragment key={`${word}-${index}`}>
        {lineBreak}
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
                shimmerColors={underlineShimmerColors}
                shimmerDurationMs={UNDERLINE_SHIMMER_MS}
                repeat
                className="h-[2px]"
              />
            ) : null}
          </span>
        </RotateAppearance>
      </Fragment>,
    );
  }

  return (
    <Component className={className} style={{ perspective: 1200 }}>
      <span className={cn("flex flex-wrap items-baseline justify-center gap-x-[0.28em] gap-y-2", contentClassName)}>
        {nodes}
      </span>
    </Component>
  );
}
