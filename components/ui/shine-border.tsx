"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
}

function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  className,
  style,
  ...props
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          backgroundImage: `radial-gradient(transparent, transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          }, transparent, transparent)`,
          backgroundSize: "300% 300%",
          animation: `shine ${duration}s linear infinite`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: `${borderWidth}px`,
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]",
        className,
      )}
      {...props}
    />
  );
}

export { ShineBorder };
