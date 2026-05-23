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

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const arvo = Arvo({ subsets: ["latin"], weight: "700", variable: "--font-blog-title" });

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
      className={cn("antialiased", geistMono.variable, "font-mono", geist.variable, arvo.variable)} // Rewrite default css font for the block/whole page
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <ScrollProgress />
            <div className="page-grid-shell flex min-h-dvh flex-col pt-20 sm:pt-24">
              <main className="flex-1">
                <div className="mx-auto flex w-full max-w-5xl flex-col px-3 py-6 text-sm leading-loose sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
