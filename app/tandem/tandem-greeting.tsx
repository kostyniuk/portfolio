"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(2.7rem,6.4vw,6rem)] leading-[0.9] font-medium tracking-[-0.055em]";

export function TandemGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Tandem.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-black"
      text={`Good ${dayTime}, Tandem.`}
      emphasizedWords={["Tandem"]}
      underlineWord="Tandem"
      underlineShimmerColors={["#0d0d0d", "#4a4a4a", "#0d0d0d"]}
      lineBreakBefore="Tandem"
    />
  );
}
