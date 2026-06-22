"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function LovableHeaderHints() {
  const [animKey, setAnimKey] = useState(0);
  const [active, setActive] = useState(false);
  const replayTimerRef = useRef<number | null>(null);

  const trigger = useCallback(() => {
    if (replayTimerRef.current) {
      window.clearTimeout(replayTimerRef.current);
    }

    setActive(false);
    replayTimerRef.current = window.setTimeout(() => {
      setAnimKey((k) => k + 1);
      setActive(true);
    }, 80);
  }, []);

  useEffect(() => {
    return () => {
      if (replayTimerRef.current) {
        window.clearTimeout(replayTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Show header hints"
        onClick={trigger}
        className="lovable-header-hint-font fixed right-8 bottom-8 z-[60] rotate-[-2deg] cursor-pointer rounded-lg border-0 bg-[#DB5A2B] px-5 py-2 text-[22px] leading-none font-bold tracking-[0.01em] text-white shadow-[0_4px_14px_rgba(219,90,43,0.45)]"
      >
        ✦ header hints
      </button>

      {active && (
        <div key={animKey} className="pointer-events-none absolute inset-0 z-50">
          <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
            <path
              d="M 190 370 C 60 280, 150 140, 400 50"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="lovable-header-hint-path"
            />
            <path
              d="M 1200 370 C 1330 200, 1030 80, 890 50"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="lovable-header-hint-path lovable-header-hint-path-delayed"
            />
          </svg>

          <div className="lovable-header-hint-label lovable-header-hint-label-portfolio absolute top-[41vh] left-[2vw] whitespace-nowrap text-[26px] font-bold text-white">
            Click to open Portfolio
          </div>

          <div className="lovable-header-hint-label lovable-header-hint-label-cv absolute top-[41vh] right-[2vw] whitespace-nowrap text-[26px] font-bold text-white">
            Click to Download CV
          </div>
        </div>
      )}
    </>
  );
}
