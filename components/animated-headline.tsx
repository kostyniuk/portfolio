"use client";

import { DEFAULT_SHIMMER } from "./animated-headline/constants";
import { RotateAppearance } from "./animated-headline/rotate-appearance";
import { RotateWord } from "./animated-headline/rotate-word";
import { usePrefersReducedMotion } from "./animated-headline/use-prefers-reduced-motion";

export { RotateAppearance, type RotateAppearanceProps } from "./animated-headline/rotate-appearance";
export { RotateWord, type RotateWordProps } from "./animated-headline/rotate-word";
export { ShinyUnderline, type ShinyUnderlineProps } from "./animated-headline/shiny-underline";

export interface AnimatedHeadlineProps {
  /** The fixed words before the rotating slot, e.g. "Engineering things people love to". */
  prefix: string;
  /** The words the last slot cycles through, e.g. ["build", "design", "ship", "use"]. */
  words: string[];
  /** How long each rotating word is held, in ms. Default 2000 (x.ai's beat). */
  dwellMs?: number;
  /** Per-word flip-up stagger, in ms. Default 110. */
  staggerMs?: number;
  /** Colour stops for the shimmer band. Defaults to x.ai's indigo to yellow rainbow. */
  shimmerColors?: string[];
  className?: string;
}

export function AnimatedHeadline({
  prefix,
  words,
  dwellMs = 2000,
  staggerMs = 110,
  shimmerColors = DEFAULT_SHIMMER,
  className = "",
}: AnimatedHeadlineProps) {
  const reduceMotion = usePrefersReducedMotion();
  const prefixWords = prefix.trim().split(/\s+/).filter(Boolean);
  const revealMs = (prefixWords.length + 1) * staggerMs + 900;

  return (
    <h2
      data-slot="animated-headline"
      className={`flex flex-wrap items-baseline gap-x-[0.28em] gap-y-2 font-medium leading-[1.18] tracking-tight ${className}`}
      style={{ perspective: 1200 }}
    >
      {prefixWords.map((word, index) => (
        <RotateAppearance key={`${word}-${index}`} delayMs={index * staggerMs} reduceMotion={reduceMotion}>
          {word}
        </RotateAppearance>
      ))}

      <RotateAppearance
        className="relative inline-block align-baseline"
        delayMs={prefixWords.length * staggerMs}
        reduceMotion={reduceMotion}
      >
        <RotateWord
          words={words}
          dwellMs={dwellMs}
          startDelayMs={revealMs}
          reduceMotion={reduceMotion}
          shimmerColors={shimmerColors}
        />
      </RotateAppearance>
    </h2>
  );
}

export default AnimatedHeadline;
