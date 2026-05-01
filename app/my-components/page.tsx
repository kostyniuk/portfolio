"use client";

import { CardTitle } from "@/components/ui/liquid-metal-card";
import { LiquidSwitchDemo } from "@/components/demos/liquid-switch-demo";
import { LiquidBadgeDemo } from "@/components/demos/liquid-badge-demo";
import { AppleWatchDemo } from "@/components/demos/apple-watch-demo";
import { LiquidTextDemo } from "@/components/demos/liquid-text-demo";

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
  return (
    <main className="min-h-screen bg-background px-4 py-12 sm:px-6">
      <CardTitle className="text-4xl mb-4">Liquid Glass</CardTitle>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <LiquidSwitchDemo />
        <LiquidBadgeDemo />
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
        <AppleWatchDemo />
        <LiquidTextDemo />
      </div>
    </main>
  );
}

export default MyComponents;
