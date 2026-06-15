"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Transition } from "motion/react";

/**
 * AnimatedHeadline — a faithful, dependency-light recreation of the x.ai hero effect.
 *
 * Three layered techniques:
 *  1. Word-by-word 3D flip-up reveal on mount — `perspective` on the parent + per-word
 *     `rotateX`/`translateY`, staggered.
 *  2. A rotating last word that swaps on a timer; the box (and its underline) resize to the
 *     measured width of each word — the part CSS alone can't do for arbitrary text.
 *  3. A gradient shimmer underline that draws on, then sends one shot of colour across a
 *     grey bar — and replays that shimmer every time the word changes (keyed remount).
 *
 * Honours `prefers-reduced-motion`: renders the final, settled state with no motion.
 */

export interface AnimatedHeadlineProps {
  /** The fixed words before the rotating slot, e.g. "Engineering things people love to". */
  prefix: string;
  /** The words the last slot cycles through, e.g. ["build", "design", "ship", "use"]. */
  words: string[];
  /** How long each rotating word is held, in ms. Default 2000 (x.ai's beat). */
  dwellMs?: number;
  /** Per-word flip-up stagger, in ms. Default 110. */
  staggerMs?: number;
  /** Colour stops for the shimmer band. Defaults to x.ai's indigo→yellow rainbow. */
  shimmerColors?: string[];
  className?: string;
}

const DEFAULT_SHIMMER = ["#6366f1", "#a855f7", "#ec4899", "#f97316", "#eab308"];

const FLIP_TRANSITION: Transition = { duration: 0.72, ease: [0.2, 0.72, 0.2, 1] };

export function AnimatedHeadline({
  prefix,
  words,
  dwellMs = 2000,
  staggerMs = 110,
  shimmerColors = DEFAULT_SHIMMER,
  className = "",
}: AnimatedHeadlineProps) {
  const reduceMotion = useReducedMotion();
  const prefixWords = prefix.trim().split(/\s+/);
  const [index, setIndex] = useState(0);
  const word = words[index] ?? "";

  // Measure the current word so the slot (and its underline) can resize to fit it.
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    if (measureRef.current) setWidth(measureRef.current.offsetWidth);
  }, [word]);

  // Begin rotating only after the headline has finished flipping up.
  useEffect(() => {
    if (reduceMotion || words.length <= 1) return;
    const revealMs = (prefixWords.length + 1) * staggerMs + 900;
    let rotateId: ReturnType<typeof setInterval> | undefined;
    const start = window.setTimeout(() => {
      rotateId = setInterval(() => setIndex((i) => (i + 1) % words.length), dwellMs);
    }, revealMs);
    return () => {
      window.clearTimeout(start);
      if (rotateId) clearInterval(rotateId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, words.length, dwellMs, staggerMs]);

  // Grey base + the moving rainbow band, as one gradient that is 400% the bar's width.
  const grey = "color-mix(in oklch, currentColor 28%, transparent)";
  const rainbow = shimmerColors.map((c, i) => `${c} ${40 + i * 5}%`).join(", ");
  const underlineGradient = `linear-gradient(90deg, ${grey} 0%, ${grey} 35%, ${rainbow}, ${grey} 65%, ${grey} 100%)`;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: staggerMs / 1000 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: "45%", rotateX: -40 },
    show: { opacity: 1, y: "0%", rotateX: 0, transition: FLIP_TRANSITION },
  };

  return (
    <motion.h2
      data-slot="animated-headline"
      className={`flex flex-wrap items-baseline gap-x-[0.28em] gap-y-2 font-medium leading-[1.18] tracking-tight ${className}`}
      style={{ perspective: 1200 }}
      variants={reduceMotion ? undefined : container}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? false : "show"}
    >
      {prefixWords.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
          variants={reduceMotion ? undefined : wordVariants}
        >
          {w}
        </motion.span>
      ))}

      {/* The rotating slot: flips up last with the rest, then cycles. */}
      <motion.span
        className="relative inline-block align-baseline"
        style={{ transformOrigin: "50% 100%" }}
        variants={reduceMotion ? undefined : wordVariants}
      >
        {/* width is set to the measured word width and CSS-transitions on each swap */}
        <span
          className="relative inline-block align-baseline"
          style={{
            width,
            transition: reduceMotion ? undefined : "width 0.4s cubic-bezier(0.2, 0.72, 0.2, 1)",
          }}
        >
          {/* spacer: in normal flow but invisible — provides the baseline and the measured width */}
          <span ref={measureRef} aria-hidden className="invisible whitespace-nowrap">
            {word}
          </span>

          {/* the visible word, clipped so it can slide in/out without disturbing layout */}
          <span className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={word}
                className="absolute inset-0 whitespace-nowrap"
                initial={reduceMotion ? false : { y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={reduceMotion ? undefined : { y: "-100%", opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.7, 0, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </AnimatePresence>
          </span>

          {/* Underline: grows on once, then a colour shot replays on every word change. */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -bottom-[0.08em] left-0 right-0 h-[3px] origin-left overflow-hidden rounded-full"
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.36, ease: "easeOut" }}
          >
            <span
              key={index}
              className="absolute inset-0 rounded-full"
              style={{
                backgroundImage: underlineGradient,
                backgroundSize: "400% 100%",
                backgroundPosition: "0% 50%",
                animation: reduceMotion ? undefined : "hero-underline-shimmer 1.5s linear",
              }}
            />
          </motion.span>
        </span>
      </motion.span>
    </motion.h2>
  );
}

export default AnimatedHeadline;
