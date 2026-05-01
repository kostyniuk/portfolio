"use client";

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";
import { Card } from "@/components/ui/card";
import { LiquidText } from "@/components/ui/liquid-text";

export function LiquidTextDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liquid Text</CardTitle>
        <CardDescription>
          Shader-masked typography powered by the same gem smoke effect — wraps any string in an animated, metallic
          liquid-glass treatment.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col py-2 gap-6">
        <div>
          <LiquidText text="Liquid Text" scale={9} />
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Use it as a title treatment for landing sections, profile cards, or compact branded surfaces.
        </p>
      </CardContent>
    </Card>
  );
}
