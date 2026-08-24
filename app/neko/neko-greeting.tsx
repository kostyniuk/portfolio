"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(2.7rem,6.4vw,6rem)] leading-[0.9] font-medium tracking-[-0.055em]";

export function NekoGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Neko Health.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#1e2a2d]"
      text={`Good ${dayTime}, Neko Health.`}
      emphasizedWords={["Neko", "Health"]}
      underlinePhrase="Neko Health"
      underlineShimmerColors={["#486970", "#9ebcc4", "#486970"]}
      lineBreakBefore="Neko"
    />
  );
}
