"use client";

import { useState } from "react";

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";
import { LiquidSwitch } from "@/components/ui/glasscn/liquid-switch";
import { Card } from "@/components/ui/card";

export function LiquidSwitchDemo() {
  const [notifications, setNotifications] = useState(true);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Liquid Switch</CardTitle>
        <CardDescription>A simple toggle built with liquid border.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between rounded-3xl border border-black/8 bg-black/[0.02] px-4 py-3 dark:border-white/8 dark:bg-white/[0.03]">
          <div className="space-y-1">
            <p className="text-sm font-medium">Push notifications</p>
            <p className="text-sm text-muted-foreground">Plain inner fill with the liquid-glass border treatment.</p>
          </div>
          <LiquidSwitch checked={notifications} onCheckedChange={setNotifications} />
        </div>
      </CardContent>
    </Card>
  );
}
