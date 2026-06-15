"use client";

import { Card } from "@/components/ui/card";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";
import { AnimatedHeadline } from "@/components/animated-headline";

export function AnimatedHeadlineDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Animated Headline</CardTitle>
        <CardDescription>
          A recreation of x.ai&apos;s hero: words flip up in 3D one-by-one, the last word rotates on a ~2s beat, and a
          gradient underline grows on and sends a shot of colour across a grey bar — replaying on every word change.
          Built on the lessons in <code>lessons/0012–0014</code>.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 py-2">
        <div className="rounded-xl bg-gradient-to-br from-[#0e1116] to-[#1a2030] px-6 py-10 text-white">
          <AnimatedHeadline
            prefix="Frontier AI models for everything you"
            words={["build", "create", "discover", "imagine"]}
            className="text-2xl sm:text-3xl"
          />
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Drop it into a hero or section title. Honours <code>prefers-reduced-motion</code> by rendering the settled
          state with no motion.
        </p>
      </CardContent>
    </Card>
  );
}
