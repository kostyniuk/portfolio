import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lovable Background",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LovablePage() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#1c1c1c]" aria-label="Lovable background">
      <div
        aria-hidden="true"
        className="absolute"
        style={{
          top: "calc(-75vw + 50vh)",
          left: "50%",
          width: "200vw",
          aspectRatio: "0.9917355371900827",
          transform: "translate3d(-50%, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="/lovable/pulse.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
          style={{ filter: "blur(4px)" }}
        />
      </div>
    </div>
  );
}
