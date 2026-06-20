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
      <h2 className="absolute bottom-[calc(50%_+_13.5rem)] left-1/2 w-[min(90vw,48rem)] -translate-x-1/2 text-center text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        Hey Lovable team, I&apos;m Alex
      </h2>
      <img
        src="/lovable/me.png"
        alt="Alex"
        className="absolute h-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
      />
      <h2 className="absolute left-1/2 top-[calc(50%_+_13.5rem)] w-[min(90vw,48rem)] -translate-x-1/2 text-center text-2xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        Scroll down to see the reasons why we&apos;re a perfect fit
      </h2>
    </div>
  );
}
