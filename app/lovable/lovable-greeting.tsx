"use client";

import { LovableAnimatedText } from "./lovable-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

export function LovableGreeting({ className }: { className: string }) {
  const dayTime = useDayTime();

  // `dayTime` is null on the server and the first client render, so both sides
  // render an invisible placeholder and hydration succeeds. The reveal starts
  // only after the visitor's local time is known, so the greeting does not swap
  // words mid-animation.
  if (!dayTime) {
    return (
      <h2 className={className} aria-hidden="true" style={{ perspective: 1200 }}>
        <span className="invisible flex flex-wrap items-baseline justify-center gap-x-[0.28em] gap-y-2 text-white/85">
          Good afternoon Lovable team, I&apos;m Alex
        </span>
      </h2>
    );
  }

  const text = `Good ${dayTime} Lovable team, I'm Alex`;

  return <LovableAnimatedText className={className} text={text} />;
}
