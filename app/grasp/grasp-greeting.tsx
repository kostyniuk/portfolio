"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName =
  "text-balance text-[clamp(2.7rem,6.4vw,6rem)] leading-[0.9] font-semibold tracking-[-0.055em]";

export function GraspGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Grasp.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#1a1a1a]"
      text={`Good ${dayTime}, Grasp.`}
      emphasizedWords={["Grasp"]}
      underlineWord="Grasp"
      underlineShimmerColors={["#1a1a1a", "#5a5a5a", "#1a1a1a"]}
      lineBreakBefore="Grasp"
    />
  );
}
