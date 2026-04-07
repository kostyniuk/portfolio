import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Inline SVG noise texture — simulates the micro-grain of real frosted glass.
 * No external file needed, renders as a tiny repeating pattern.
 */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

type FrostGlassVariant = "clear" | "frosted" | "subtle";

interface FrostGlassProps extends React.ComponentProps<"div"> {
  /** The frost intensity preset.
   *
   * - `clear`   — Apple iOS-style: low blur, high saturation, background stays visible (default)
   * - `frosted` — Heavier frosted glass, background becomes soft shapes
   * - `subtle`  — Barely-there frost, ideal for inline or small elements
   */
  variant?: FrostGlassVariant;
  /** Whether to render the fine noise/grain overlay. Default `true`. */
  noise?: boolean;
}

/**
 * ### How it works
 *
 * The "clear" frost look (like Apple's iOS) comes from three tricks stacked together:
 *
 * 1. **`backdrop-saturate` before `backdrop-blur`** — pumps up the color vibrancy of
 *    the content behind the glass *before* blurring it. This is why the background
 *    looks vivid instead of muddy. The CSS `backdrop-filter` chain applies left→right.
 *
 * 2. **Low blur radius** — `16px` instead of `40–80px`. Keeps shapes and colors
 *    recognizable instead of dissolving them into blobs.
 *
 * 3. **Visible but translucent tint + noise** — the background color is ~40-60% in
 *    light mode (enough to *see* the glass surface) and ~20-30% in dark mode.
 *    A fractal noise SVG at 3% opacity adds the micro-grain texture of real glass.
 *
 * ```
 * MORE CLEAR ←—————————————→ MORE FROSTED
 * blur:       4px    8px    16px    40px
 * saturate:   200%   190%   150%    120%
 * bg opacity: 30%    45%    60%     75%
 * ```
 */
function FrostGlass({ variant = "clear", noise = true, className, children, ...props }: FrostGlassProps) {
  const variantStyles: Record<FrostGlassVariant, string> = {
    // iOS-style: minimal blur, boosted saturation, glass panel clearly visible
    clear: [
      "backdrop-blur-[2px] backdrop-saturate-[1.9]",
      "bg-white/[0.25] dark:bg-black/[0.25]",
      "border border-white/[0.5] dark:border-white/[0.12]",
      "shadow-[0_1px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.2)]",
    ].join(" "),

    // Heavier frosted glass — glass is prominent, background is soft shapes
    frosted: [
      "backdrop-blur-[16px] backdrop-saturate-[1.6]",
      "bg-white/[0.55] dark:bg-black/[0.35]",
      "border border-white/[0.4] dark:border-white/10",
      "shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]",
    ].join(" "),

    // Light frost for inline / small elements
    subtle: [
      "backdrop-blur-[4px] backdrop-saturate-[1.5]",
      "bg-white/[0.3] dark:bg-white/[0.06]",
      "border border-black/[0.05] dark:border-white/[0.08]",
      "shadow-sm",
    ].join(" "),
  };

  return (
    <div
      data-slot="frost-glass"
      data-variant={variant}
      className={cn("relative overflow-hidden transition-all duration-300", variantStyles[variant], className)}
      {...props}
    >
      {/* Noise texture overlay — simulates micro-grain of real frosted glass */}
      {noise && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-[0.03] mix-blend-overlay dark:opacity-[0.04]"
          style={{ backgroundImage: NOISE_SVG }}
        />
      )}
      {children}
    </div>
  );
}

export { FrostGlass };
export type { FrostGlassProps, FrostGlassVariant };
