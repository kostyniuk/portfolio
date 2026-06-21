import type { Metadata } from "next";

import { Header } from "@/app/header";
import { SpriteField } from "@/components/sprite-field";
import { LovableAnimatedText } from "./lovable-animated-text";
import { LovableGreeting } from "./lovable-greeting";

export const metadata: Metadata = {
  title: "Lovable Application",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LovablePage() {
  return (
    <>
      <Header />
      <main className="h-dvh overflow-y-auto scroll-smooth snap-y snap-mandatory">
        <section className="relative h-dvh snap-start overflow-hidden bg-[#1c1c1c]" aria-label="Lovable Application">
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
          <LovableGreeting
            className="absolute bottom-[calc(50%_+_13.5rem)] left-1/2 w-[min(90vw,48rem)] -translate-x-1/2 text-center text-xl font-normal tracking-normal text-white sm:text-4xl"
          />
          <img
            src="/lovable/me.png"
            alt="Alex"
            data-slot="lovable-portrait"
            className="lovable-portrait absolute h-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <LovableAnimatedText
            className="absolute left-1/2 top-[calc(50%_+_13.5rem)] w-[min(90vw,48rem)] -translate-x-1/2 text-center text-3xl font-normal tracking-normal text-white"
            text="Scroll down to see the reasons why we're a perfect fit"
            startDelayMs={450}
            staggerMs={10}
          />
        </section>
        <section className="relative h-dvh snap-start overflow-hidden bg-black">
          <SpriteField
            src="/lovable/lovable-logo-icon.svg"
            size={42}
            density={0.85}
            speed={0.2}
            background="#000000"
            pushRadius={170}
            pushForce={5000}
          />
        </section>
      </main>
    </>
  );
}
