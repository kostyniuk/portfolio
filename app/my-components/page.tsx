"use client";

import { useState } from "react";

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";
import { LiquidSwitch } from "@/components/ui/glasscn/liquid-switch";
import { Card } from "@/components/ui/card";
// import { PackageManagerProvider, CodeBlockCommand } from "@/components/ui/code-block-command";
// import { GlassCodeBlockCommand } from "@/components/ui/glasscn/glass-code-block-command";
// import { AlertTitle, AlertDescription } from "@/components/ui/alert";
// import { GlassAlert } from "@/components/ui/glasscn/glass-alert";
// import { CheckCircle2Icon } from "lucide-react";
import { LiquidText } from "@/components/ui/liquid-text";

// export function AlertDemo({ variant = "clear" }) {
//   return (
//     <GlassAlert glassVariant={variant} className="w-full max-w-md">
//       <CheckCircle2Icon />
//       <AlertTitle>Payment successful</AlertTitle>
//       <AlertDescription className={"text-foreground/80"}>
//         Your payment of $29.99 has been processed. A receipt has been sent to your email address.
//       </AlertDescription>
//     </GlassAlert>
//   );
// }

function MyComponents() {
  const [notifications, setNotifications] = useState(true);

  return (
    <main className="min-h-screen bg-background px-4 py-12 sm:px-6">
      <CardTitle className="text-4xl mb-4">Liquid Glass</CardTitle>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Liquid Switch</CardTitle>
            <CardDescription>A simple toggle built with liquid border.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-3xl border border-black/8 bg-black/[0.02] px-4 py-3 dark:border-white/8 dark:bg-white/[0.03]">
              <div className="space-y-1">
                <p className="text-sm font-medium">Push notifications</p>
                <p className="text-sm text-muted-foreground">
                  Plain inner fill with the liquid-glass border treatment.
                </p>
              </div>
              <LiquidSwitch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </CardContent>
        </Card>
        {/* <Card
          id="code-block-command"
          className="relative"
          style={{
            backgroundImage: "url('/flower-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] dark:bg-black/30" /> */}
        {/* <CardHeader className="relative z-10"> */}
        {/* <SectionTitle>Code Block Command</SectionTitle> */}
        {/* <SectionDescription>A tabbed command block for displaying package manager commands.</SectionDescription> */}
        {/* </CardHeader> */}
        {/* <CardContent className="relative z-10">
            <PackageManagerProvider>
              <div className="flex flex-col gap-3">
                <CodeBlockCommand
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
                <GlassCodeBlockCommand
                  glassVariant="frosted"
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
                <GlassCodeBlockCommand
                  glassVariant="clear"
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
                <GlassCodeBlockCommand
                  glassVariant="subtle"
                  prompt="Install Tailwind CSS and its Vite plugin"
                  npm="npm install tailwindcss @tailwindcss/vite"
                  pnpm="pnpm add tailwindcss @tailwindcss/vite"
                  yarn="yarn add tailwindcss @tailwindcss/vite"
                  bun="bun add tailwindcss @tailwindcss/vite"
                />
              </div>
            </PackageManagerProvider>
          </CardContent> */}
        {/* </Card> */}
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
        <Card>
          <CardHeader>
            <CardTitle>Liquid Text</CardTitle>
            <CardDescription>
              Shader-masked typography powered by the same gem smoke effect — wraps any string in an animated, metallic
              liquid-glass treatment.
            </CardDescription>
            <CardContent className="py-2">
              <LiquidText text="Alex" scale={5} />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}

export default MyComponents;
