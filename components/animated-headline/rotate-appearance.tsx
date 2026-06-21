"use client";

import { type CSSProperties, type ReactNode } from "react";

import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface RotateAppearanceProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  reduceMotion?: boolean | null;
  style?: CSSProperties;
}

export function RotateAppearance({
  children,
  className = "inline-block",
  delayMs = 0,
  reduceMotion,
  style,
}: RotateAppearanceProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldReduceMotion = reduceMotion ?? prefersReducedMotion;

  return (
    <span
      data-slot="rotate-appearance"
      className={className}
      style={{
        transformOrigin: "50% 100%",
        animation: shouldReduceMotion ? undefined : "hero-word-reveal 0.72s cubic-bezier(0.2, 0.72, 0.2, 1) both",
        animationDelay: shouldReduceMotion ? undefined : `${delayMs}ms`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
