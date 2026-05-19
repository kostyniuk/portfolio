"use client";

import type { TargetAndTransition } from "motion/react";
import { motion } from "motion/react";
import { type ComponentProps, useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
};

const strokes = [
  {
    label: "w first curve",
    d: "M 34 140 C 62 90 86 91 78 137",
    duration: 0.24,
    delay: 0,
  },
  {
    label: "w second curve",
    d: "M 78 137 C 72 172 96 171 114 137",
    duration: 0.24,
    delay: 0.18,
  },
  {
    label: "w third curve",
    d: "M 114 137 C 136 96 154 98 150 138",
    duration: 0.24,
    delay: 0.36,
  },
  {
    label: "w fourth curve",
    d: "M 150 138 C 146 176 179 165 175 108",
    duration: 0.28,
    delay: 0.54,
  },
  {
    label: "el",
    d: "M 175 108 C 192 176 238 132 240 128 C 219 72 183 121 209 157 C 218 169 261 175 313 72 C 313 72 337 20 319 17 C 298 13 281 85 281 136 C 281 166 298 177 347 139",
    duration: 1.3,
    delay: 0.78,
  },
  {
    label: "c",
    d: "M 383 122 C 329 77 340 172 385 163 C 393 159 416 137 430 147",
    duration: 0.64,
    delay: 1.9,
  },
  {
    label: "o",
    d: "M 430 147 C 444 109 492 99 506 126 C 522 157 489 180 459 166 C 430 146 438 114 471 112 C 492 104 507 125 533 118",
    duration: 0.86,
    delay: 2.42,
  },
  {
    label: "m",
    d: "M 533 119 Q 532.5 139.5 532 160 C 534 104 564 97 570 129 C 572 170 590 169 604 133 C 618 100 642 103 647 135 C 653 173 679 170 700 140",
    duration: 1,
    delay: 3.1,
  },
  {
    label: "e",
    d: "M 701 139 C 799 142 645 25 711 171 C 750 164 829 140 765 121",
    duration: 0.78,
    delay: 3.9,
  },
] as const;

export type AppleWelcomeEffectEnglishProps = Omit<
  ComponentProps<typeof motion.svg>,
  "speed" | "onAnimationComplete"
> & {
  /**
   * Animation speed multiplier (higher = faster).
   * @defaultValue 1
   */
  speed?: number;
  /**
   * Whether the animation should loop indefinitely.
   * @defaultValue false
   */
  loop?: boolean;
  /**
   * Delay in ms before the animation restarts when looping.
   * @defaultValue 1000
   */
  loopDelay?: number;
  /** Called when the full handwriting animation completes (fires every loop). */
  onAnimationComplete?: () => void;
};

export function AppleWelcomeEffectEnglish({
  className,
  speed = 1,
  loop = false,
  loopDelay = 1000,
  onAnimationComplete,
  ...props
}: AppleWelcomeEffectEnglishProps) {
  const [key, setKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const calc = (x: number) => x / speed;

  const handleAnimationComplete = useCallback(() => {
    onAnimationComplete?.();
    if (loop) {
      timeoutRef.current = setTimeout(() => setKey((k) => k + 1), loopDelay);
    }
  }, [loop, loopDelay, onAnimationComplete]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.svg
      key={key}
      className={cn("h-16", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 890 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>welcome</title>

      {strokes.map((stroke, index) => (
        <motion.path
          key={stroke.label}
          d={stroke.d}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(stroke.duration),
            ease: "easeInOut",
            delay: calc(stroke.delay),
            opacity: { duration: calc(0.32), delay: calc(stroke.delay) },
          }}
          onAnimationComplete={index === strokes.length - 1 ? handleAnimationComplete : undefined}
        />
      ))}
    </motion.svg>
  );
}
