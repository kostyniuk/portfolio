"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(2.7rem,6.4vw,6rem)] leading-[0.9] font-medium tracking-[-0.06em]";

export function ResendGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Resend.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-white"
      text={`Good ${dayTime}, Resend.`}
      emphasizedWords={["Resend"]}
      underlineWord="Resend"
      underlineShimmerColors={["#ffffff", "#a0a0a0", "#ffffff"]}
      lineBreakBefore="Resend"
    />
  );
}
