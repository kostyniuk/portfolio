"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(2.6rem,6.4vw,6rem)] leading-[0.92] font-light tracking-[-0.055em]";

export function HmGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          COS.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#111111]"
      text={`Good ${dayTime}, COS.`}
      emphasizedWords={["COS"]}
      underlineWord="COS"
      underlineShimmerColors={["#e50010", "#ff3b3b", "#e50010"]}
      lineBreakBefore="COS"
    />
  );
}
