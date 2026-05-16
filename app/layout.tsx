import { Arvo, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "./header";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next/types";
import { ScrollProgress } from "@/components/scroll-progress";
import { Footer } from "./footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const arvo = Arvo({ subsets: ["latin"], weight: "700", variable: "--font-blog-title" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.a13x.space"),
  title: {
    default: "Alex Kostyniuk — Team Lead & Fullstack Engineer",
    template: "%s | Alex Kostyniuk",
  },
  description:
    "Team Lead at AMFG, Stockholm. Open Source contributor. Creator of GlassCN (glass components for shadcn/ui), Mellow Lines (code animation studio), LeeHireMe (best CV builder).",
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
    title: "Alex Kostyniuk — Team Lead & Fullstack Software Engineer",
    description:
      "Team Lead at AMFG, Stockholm. Open Source contributor. Creator of GlassCN (glass components for shadcn/ui), Mellow Lines (code animation studio), LeeHireMe (best CV builder).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Kostyniuk — Team Lead & Fullstack Software Engineer",
    description:
      "Team Lead at AMFG, Stockholm. Open Source contributor. Creator of GlassCN (glass components for shadcn/ui), Mellow Lines (code animation studio), LeeHireMe (best CV builder).",
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
      className={cn("antialiased", fontMono.variable, "font-mono", geist.variable, arvo.variable)} // Rewrite default css font for the block/whole page
    >
      <body>
        <ThemeProvider>
          {" "}
          <TooltipProvider>
            <Header />
            <ScrollProgress />
            <div className="flex min-h-dvh flex-col">
              <div className="flex-1 px-0 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
                <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-3 py-6 text-sm leading-loose sm:px-6 sm:py-8 lg:p-8">
                  {children}
                </div>
              </div>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
