import { SectionNav } from "@/components/section-nav";

function MainPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <SectionNav />
      <div>{children}</div>
    </div>
  );
}

export { MainPageLayout };
