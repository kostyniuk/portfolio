"use client";

import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName =
  "text-balance text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.94] font-medium tracking-[-0.06em]";

export function ElevenLabsGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          ElevenLabs.
        </span>
      </h1>
    );
  }

  return (
    <h1 className={greetingClassName}>
      Good {dayTime},
      <br />
      ElevenLabs.
    </h1>
  );
}
