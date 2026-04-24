"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LiquidMetal, LiquidMetalProps } from "@paper-design/shaders-react";

import { cn } from "@/lib/utils";

type ShaderProps = Omit<LiquidMetalProps, "className" | "style" | "shape">;

type LiquidMetalCardProps = React.ComponentProps<typeof Card> & Partial<ShaderProps>;

function LiquidMetalCard({
  className,
  children,
  speed = 0.6,
  repetition = 4,
  softness = 0.5,
  shiftRed = 0.3,
  shiftBlue = 0.3,
  distortion = 0,
  contour = 0,
  angle = 45,
  scale = 8,
  offsetX = 0.1,
  offsetY = -0.1,
  ...props
}: LiquidMetalCardProps) {
  return (
    <Card
      data-slot="liquid-metal-card"
      className={cn(
        "relative overflow-hidden ring-0 rounded-4xl *:data-[slot=card-action]:z-10 *:data-[slot=card-content]:z-10 *:data-[slot=card-description]:z-10 *:data-[slot=card-footer]:z-10 *:data-[slot=card-header]:z-10 *:data-[slot=card-title]:z-10",
        className,
      )}
      {...props}
    >
      <LiquidMetal
        className="pointer-events-none absolute inset-0 rounded-4xl"
        shape="none"
        speed={speed}
        repetition={repetition}
        softness={softness}
        shiftRed={shiftRed}
        shiftBlue={shiftBlue}
        distortion={distortion}
        contour={contour}
        angle={angle}
        scale={scale}
        offsetX={offsetX}
        offsetY={offsetY}
      />
      <div className="pointer-events-none absolute inset-0.75 rounded-[calc(var(--radius-4xl)-3px)] bg-card inset-shadow-lg" />
      {children}
    </Card>
  );
}

export { LiquidMetalCard, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
