"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";
import { LiquidBadge } from "@/components/ui/glasscn/liquid-badge";
import { Card } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";

export function LiquidBadgeDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liquid Badge</CardTitle>
        <CardDescription>A compact badge with liquid-glass tone.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Item
          variant="outline"
          className="rounded-3xl border-black/8 bg-black/[0.02] dark:border-white/8 dark:bg-white/[0.03]"
        >
          <Avatar size="lg">
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <ItemContent>
            <ItemHeader className="items-start">
              <div className="space-y-1">
                <ItemTitle>Vercel Design System</ItemTitle>
                <ItemDescription>
                  shadcn UI primitives with glassy status markers for product surfaces.
                </ItemDescription>
              </div>
            </ItemHeader>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <LiquidBadge variant="secondary">
                shadcn/ui
              </LiquidBadge>
              <LiquidBadge className="bg-emerald-500 text-white hover:bg-emerald-500">
                Vercel Ready
              </LiquidBadge>
              <LiquidBadge className="bg-red-500 text-white hover:bg-red-500">
                Preview Failed
              </LiquidBadge>
            </div>
          </ItemContent>
        </Item>
      </CardContent>
    </Card>
  );
}
