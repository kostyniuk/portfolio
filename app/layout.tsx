import { Arvo, Caveat, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next/types";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const arvo = Arvo({ subsets: ["latin"], weight: "700", variable: "--font-blog-title" });

const caveat = Caveat({ subsets: ["latin"], weight: "700", variable: "--font-lovable-hint" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a13x.space"),
  title: {
    default: "Alex Kostyniuk — Software Engineer & Team Lead at AMFG",
    template: "%s | Alex Kostyniuk",
  },
  description:
    "Open Source contributor. Creator of GlassCN (glass components for shadcn/ui), Mellow Lines (code animation studio), LeeHireMe (best CV builder).",
  keywords: [
    "Alex Kostyniuk",
    "Team Lead",
    "Fullstack Engineer",
    "Software Engineer",
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Next.js",
    "GlassCN",
    "Mellow Lines",
    "Stockholm",
    "AMFG",
  ],
  authors: [{ name: "Alex Kostyniuk", url: "https://www.a13x.space" }],
  creator: "Alex Kostyniuk",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alex Kostyniuk",
    title: "Alex Kostyniuk — Software Engineer & Team Lead at AMFG",
    description:
      "Open source contributor. Creator of GlassCN, Mellow Lines & LeeHireMe. TypeScript, React & Node.js. Located in Stockholm.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Kostyniuk — Software Engineer & Team Lead at AMFG",
    description:
      "Open source contributor. Creator of GlassCN, Mellow Lines & LeeHireMe. TypeScript, React & Node.js. Located in Stockholm.",
    creator: "@kostyniuk00",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
      className={cn("antialiased", geistMono.variable, "font-mono", geist.variable, arvo.variable, caveat.variable)} // Rewrite default css font for the block/whole page
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
