"use client";

import { ApplicationAnimatedText } from "@/components/application-animated-text";
import { useDayTime } from "@/hooks/use-day-time";

const greetingClassName = "text-balance text-[clamp(3rem,7vw,6.8rem)] leading-[0.88] font-semibold tracking-[-0.075em]";

export function SpotifyGreeting() {
  const dayTime = useDayTime();

  if (!dayTime) {
    return (
      <h1 className={greetingClassName} aria-hidden="true">
        <span className="invisible">
          Good afternoon,
          <br />
          Spotify.
        </span>
      </h1>
    );
  }

  return (
    <ApplicationAnimatedText
      as="h1"
      className={greetingClassName}
      contentClassName="justify-start text-[#121212]"
      text={`Good ${dayTime}, Spotify.`}
      emphasizedWords={["Spotify"]}
      lineBreakBefore="Spotify"
    />
  );
}
