"use client";

import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cva, type VariantProps } from "class-variance-authority";
import { LiquidMetal } from "@paper-design/shaders-react";

import { cn } from "@/lib/utils";

const switchRootVariants = cva(
  "group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-black/10 outline-none select-none transition-[transform,box-shadow,opacity] duration-300 ease-out focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10",
  {
    variants: {
      size: {
        sm: "h-7 w-12 p-0.5",
        default: "h-8 w-14 p-1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const switchThumbVariants = cva(
  "relative z-10 inline-flex items-center justify-center rounded-full border border-foreground/10 bg-foreground shadow-[0_8px_16px_rgba(20,16,8,0.16),inset_0_1px_0_rgba(255,255,255,0.18)] transition-transform duration-300 ease-out will-change-transform dark:border-white/10 dark:shadow-[0_8px_18px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]",
  {
    variants: {
      size: {
        sm: "size-6 data-[checked]:translate-x-5",
        default: "size-6 data-[checked]:translate-x-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & VariantProps<typeof switchRootVariants>;

function Switch({ className, size, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root data-slot="switch" className={cn(switchRootVariants({ size }), className)} {...props}>
      <LiquidMetal
        className="pointer-events-none absolute inset-0 rounded-full opacity-70 transition-opacity duration-300 group-data-[checked]/switch:opacity-100"
        shape="none"
        speed={0.45}
        repetition={3}
        softness={0.6}
        shiftRed={0.2}
        shiftBlue={0.15}
        distortion={0.08}
        contour={0.2}
        angle={35}
        scale={5}
        offsetX={0.15}
        offsetY={-0.1}
      />
      <span className="pointer-events-none absolute inset-[1px] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(17,12,8,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.3)]" />
      <span className="pointer-events-none absolute inset-[3px] rounded-full bg-background shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors duration-300 group-data-[checked]/switch:bg-emerald-500 dark:bg-background dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:group-data-[checked]/switch:bg-emerald-500" />
      <span className="pointer-events-none absolute inset-[3px] rounded-full bg-foreground/[0.02] transition-colors duration-300 group-data-[checked]/switch:bg-transparent dark:bg-white/[0.02] dark:group-data-[checked]/switch:bg-transparent" />
      <span className="pointer-events-none absolute inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-data-[checked]/switch:opacity-100 group-data-[checked]/switch:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-6px_12px_rgba(5,46,22,0.16)] dark:group-data-[checked]/switch:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-6px_12px_rgba(0,0,0,0.2)]" />
      <SwitchPrimitive.Thumb className={switchThumbVariants({ size })}>
        <span className="pointer-events-none absolute inset-[1px] rounded-full bg-linear-to-b from-white/22 to-transparent dark:from-white/10" />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
export type { SwitchProps };
