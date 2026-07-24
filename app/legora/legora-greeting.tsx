"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName =
  "text-balance text-[clamp(2.35rem,5.4vw,5rem)] leading-[0.92] font-medium tracking-[-0.065em]";

export function LegoraGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Legora.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="text-black"
      text={`Good ${dayTime}, Legora team.`}
      emphasizedWords={["Legora"]}
      underlineWord="Legora"
      lineBreakBefore="Legora"
    />
  );
}
