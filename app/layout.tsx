import { Arvo, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "./header";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next/types";

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
            {children}
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
