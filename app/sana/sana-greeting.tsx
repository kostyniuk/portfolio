"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(2.8rem,6.6vw,6.2rem)] leading-[0.9] font-medium tracking-[-0.06em]";

export function SanaGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Sana.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#f5f4f2]"
      text={`Good ${dayTime}, Sana.`}
      emphasizedWords={["Sana"]}
      underlineWord="Sana"
      underlineShimmerColors={["#ff8a5c", "#c084fc", "#7dd3fc"]}
      lineBreakBefore="Sana"
    />
  );
}
