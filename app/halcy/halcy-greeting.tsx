"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(2.7rem,6.4vw,6rem)] leading-[0.9] font-medium tracking-[-0.06em]";

export function HalcyGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Halcy.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#f2f2ec]"
      text={`Good ${dayTime}, Halcy.`}
      emphasizedWords={["Halcy"]}
      underlineWord="Halcy"
      underlineShimmerColors={["#f2f2ec", "#abc8ca", "#f2f2ec"]}
      lineBreakBefore="Halcy"
    />
  );
}
