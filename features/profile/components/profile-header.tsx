"use client";

import ShinyText from "@/components/ShinyText";
import Image from "next/image";
import { useTheme } from "next-themes";
import ElectricBorder from "@/components/ElectricBorder";
import colors from "tailwindcss/colors";

import { useSound } from "@/hooks/use-sound";
import { thrusterFire004Sound } from "@/lib/thruster-fire-004";

function ProfileHeader() {
  const { resolvedTheme } = useTheme();
  const [play, { stop }] = useSound(thrusterFire004Sound, { volume: 0.5 });

  return (
    <>
      <ElectricBorder
        color={colors.orange[500]}
        speed={0.75}
        chaos={0.08}
        className="w-50 h-50 rounded-full object-cover"
        borderRadius={100}
      >
        <Image
          src="/profile.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-full object-cover"
          onMouseOver={() => play()}
          onMouseOut={() => stop()}
        />
      </ElectricBorder>

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
    </>
  );
}

export { ProfileHeader };
