"use client";

import { cn } from "@/lib/utils";

const GLOW_DURATION = 3.4;

function GlowBorder({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden p-px", className)}>
      {/* Spinning bar — tall & narrow, clipped by overflow-hidden to trace the border */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-foreground/90 to-transparent"
        style={{
          animation: `glow-spin ${GLOW_DURATION}s linear infinite`,
        }}
      />
      {/* Inner fill covers everything except the 1px border gap */}
      <div className="absolute inset-px bg-background" />
    </div>
  );
}

export { GlowBorder };
