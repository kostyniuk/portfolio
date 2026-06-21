"use client";

import { type Key } from "react";

import { DEFAULT_SHIMMER, UNDERLINE_SHIMMER_MS } from "./constants";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface ShinyUnderlineProps {
  replayKey?: Key;
  shimmerColors?: string[];
  shimmerDurationMs?: number;
  repeat?: boolean;
  reduceMotion?: boolean | null;
  className?: string;
}

export function ShinyUnderline({
  replayKey,
  shimmerColors = DEFAULT_SHIMMER,
  shimmerDurationMs = UNDERLINE_SHIMMER_MS,
  repeat = false,
  reduceMotion,
  className = "",
}: ShinyUnderlineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldReduceMotion = reduceMotion ?? prefersReducedMotion;
  const grey = "color-mix(in oklch, currentColor 28%, transparent)";
  const rainbow = shimmerColors.map((color, index) => `${color} ${40 + index * 5}%`).join(", ");
  const underlineGradient = `linear-gradient(90deg, ${grey} 0%, ${grey} 35%, ${rainbow}, ${grey} 65%, ${grey} 100%)`;
  const revealAnimation = shouldReduceMotion ? undefined : "hero-underline-reveal 0.36s ease-out 0.5s both";
  const shimmerAnimation = shouldReduceMotion
    ? undefined
    : `hero-underline-shimmer ${shimmerDurationMs}ms linear ${repeat ? "infinite" : ""}`;

  return (
    <span
      aria-hidden
      data-slot="shiny-underline"
      className={`pointer-events-none absolute -bottom-[0.08em] left-0 right-0 h-[3px] origin-left overflow-hidden rounded-full ${className}`}
      style={{ animation: revealAnimation }}
    >
      <span
        key={replayKey}
        data-slot="shiny-underline-shimmer"
        className="absolute inset-0 rounded-full"
        style={{
          backgroundImage: underlineGradient,
          backgroundSize: "400% 100%",
          backgroundPosition: "0% 50%",
          animation: shimmerAnimation,
        }}
      />
    </span>
  );
}
