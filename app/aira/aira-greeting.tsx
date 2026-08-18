"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName =
  "text-balance text-[clamp(2.7rem,6.4vw,6rem)] leading-[0.9] font-semibold tracking-[-0.055em]";

export function AiraGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Aira.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#29292D]"
      text={`Good ${dayTime}, Aira.`}
      emphasizedWords={["Aira"]}
      underlineWord="Aira"
      underlineShimmerColors={["#29292D", "#4a4a52", "#29292D"]}
      lineBreakBefore="Aira"
    />
  );
}
