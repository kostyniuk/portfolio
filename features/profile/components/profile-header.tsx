"use client";

import ShinyText from "@/components/ShinyText";
import { useTheme } from "next-themes";

function ProfileHeader() {
  const { resolvedTheme } = useTheme();
  console.log({ resolvedTheme });

  return (
    <ShinyText
      text="Alex Kostyniuk, 26"
      speed={2}
      delay={0}
      color={resolvedTheme === "dark" ? "#b5b5b5" : "#716b67"}
      shineColor={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
      spread={120}
      direction="left"
      yoyo={false}
      pauseOnHover={false}
      disabled={false}
      className="text-xl"
    />
  );
}

export { ProfileHeader };
