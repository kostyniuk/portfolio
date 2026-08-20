"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(2.7rem,6.4vw,6rem)] leading-[0.9] font-medium tracking-[-0.06em]";

export function SupabaseGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Supabase.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#fbfbfb]"
      text={`Good ${dayTime}, Supabase.`}
      emphasizedWords={["Supabase"]}
      underlineWord="Supabase"
      underlineShimmerColors={["#3ecf8e", "#6ee7b7", "#3ecf8e"]}
      lineBreakBefore="Supabase"
    />
  );
}
