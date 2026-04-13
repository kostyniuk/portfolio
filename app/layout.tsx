import { Arvo, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "./header";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next/types";
import { ScrollProgress } from "@/components/scroll-progress";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const arvo = Arvo({ subsets: ["latin"], weight: "700", variable: "--font-blog-title" });

export const metadata: Metadata = {
  title: "Alex Kostyniuk",
  description: "My portfolio. Built with Next.js, shadcn/ui, React Bits, and Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-mono", geist.variable, arvo.variable)} // Rewrite default css font for the block/whole page
    >
      <body>
        <ThemeProvider>
          {" "}
          <TooltipProvider>
            <Header />
            <ScrollProgress />
            <div className="min-h-dvh px-0 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
              <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-3 py-6 text-sm leading-loose sm:px-6 sm:py-8 lg:p-8">
                {children}
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
