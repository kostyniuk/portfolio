"use client";

import { useEffect, useRef, useState } from "react";

import { DEFAULT_SHIMMER, WORD_SWAP_MS } from "./constants";
import { ShinyUnderline } from "./shiny-underline";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface RotateWordProps {
  words: string[];
  dwellMs?: number;
  startDelayMs?: number;
  reduceMotion?: boolean | null;
  className?: string;
  shimmerColors?: string[];
  showUnderline?: boolean;
}

export function RotateWord({
  words,
  dwellMs = 2000,
  startDelayMs = 0,
  reduceMotion,
  className = "",
  shimmerColors = DEFAULT_SHIMMER,
  showUnderline = true,
}: RotateWordProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldReduceMotion = reduceMotion ?? prefersReducedMotion;
  const [index, setIndex] = useState(0);
  const [exitingWord, setExitingWord] = useState<string>();
  const [hasRotated, setHasRotated] = useState(false);
  const word = words[index] ?? "";

  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number>();
  const enterAnimation = shouldReduceMotion ? undefined : "hero-word-enter 0.42s cubic-bezier(0.7, 0, 0.3, 1) both";
  const exitAnimation = shouldReduceMotion ? undefined : "hero-word-exit 0.42s cubic-bezier(0.7, 0, 0.3, 1) both";

  useEffect(() => {
    if (measureRef.current) setWidth(measureRef.current.offsetWidth);
  }, [word]);

  useEffect(() => {
    if (index >= words.length) setIndex(0);
  }, [index, words.length]);

  useEffect(() => {
    if (shouldReduceMotion || words.length <= 1) return;

    const clearExitIdRef: { current?: number } = {};
    let rotateId: number | undefined;

    const rotate = () => {
      setIndex((currentIndex) => {
        const currentWord = words[currentIndex] ?? "";
        const nextIndex = (currentIndex + 1) % words.length;

        setExitingWord(currentWord);
        setHasRotated(true);
        if (clearExitIdRef.current) window.clearTimeout(clearExitIdRef.current);
        clearExitIdRef.current = window.setTimeout(() => setExitingWord(undefined), WORD_SWAP_MS);

        return nextIndex;
      });
    };

    const startId = window.setTimeout(() => {
      rotateId = window.setInterval(rotate, dwellMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startId);
      if (rotateId) window.clearInterval(rotateId);
      if (clearExitIdRef.current) window.clearTimeout(clearExitIdRef.current);
    };
  }, [shouldReduceMotion, words, dwellMs, startDelayMs]);

  return (
    <span
      data-slot="rotate-word"
      data-reduce-motion={shouldReduceMotion ? "" : undefined}
      className={`relative inline-block align-baseline ${className}`}
      style={{
        width,
        transition: shouldReduceMotion ? undefined : "width 0.4s cubic-bezier(0.2, 0.72, 0.2, 1)",
      }}
    >
      <span ref={measureRef} aria-hidden className="invisible whitespace-nowrap">
        {word}
      </span>

      <span data-slot="rotate-word-viewport" className="absolute inset-0 overflow-hidden">
        {exitingWord && exitingWord !== word ? (
          <span
            data-slot="rotate-word-item"
            data-state="exit"
            className="absolute inset-0 whitespace-nowrap"
            style={{ animation: exitAnimation }}
          >
            {exitingWord}
          </span>
        ) : null}

        <span
          key={word}
          data-slot="rotate-word-item"
          data-state={hasRotated ? "enter" : "settled"}
          className="absolute inset-0 whitespace-nowrap"
          style={{ animation: hasRotated ? enterAnimation : undefined }}
        >
          {word}
        </span>
      </span>

      {showUnderline ? (
        <ShinyUnderline replayKey={index} shimmerColors={shimmerColors} reduceMotion={shouldReduceMotion} />
      ) : null}
    </span>
  );
}
