"use client";

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";
import { Card } from "@/components/ui/card";
import { LiquidText } from "@/components/ui/liquid-text";

export function AppleWatchDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Apple Watch</CardTitle>
        <CardDescription>
          Pairs two stacked liquid-text numbers inside a compact card, mirroring the dense data readouts found on
          Apple Watch faces.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card id="alert" className="w-fit bg-background border p-2">
          <CardContent className="px-2 sm:px-2">
            <div className="flex flex-col gap-4">
              <LiquidText text="21" />
              <LiquidText text="57" />
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
