import { ScrollProgress } from "@/components/scroll-progress";

import { Footer } from "../footer";
import { Header } from "../header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
