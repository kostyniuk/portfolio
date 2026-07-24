import Image from "next/image";

import { LegoraGreeting } from "./legora-greeting";
import { LegoraMark } from "./legora-mark";

export function LegoraHeroSection() {
  return (
    <section
      className="relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#f7f7f3] px-6 pt-16 text-black"
      aria-label="Legora application introduction"
    >
      <div className="legora-orb legora-orb-green absolute -left-[16vw] top-[8vh] size-[54vw] min-h-80 min-w-80" />
      <div className="legora-orb legora-orb-gold absolute -right-[18vw] bottom-[-16vw] size-[57vw] min-h-96 min-w-96" />
      <div className="absolute inset-x-0 top-0 h-px bg-black/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-2 flex items-center gap-2 text-[10px] tracking-[0.2em] text-black/50 uppercase sm:text-xs">
          <LegoraMark className="size-3.5" /> Application / Alex Kostyniuk
        </p>
        <LegoraGreeting />

        <div className="relative my-3 size-[min(42vw,13rem)] overflow-hidden rounded-full border border-black/10 bg-[#e8e8e1] shadow-[0_28px_70px_rgba(35,55,44,0.15)] sm:my-4 sm:size-[14rem]">
          <Image
            src="/application-profile.jpeg"
            alt="Alex Kostyniuk"
            fill
            loading="eager"
            sizes="(max-width: 640px) 42vw, 224px"
            className="object-cover"
          />
        </div>

        <p className="max-w-xl text-balance text-lg leading-snug tracking-[-0.025em] sm:text-xl">
          I build AI features with a broad understanding of the models, tools, and engineering practices behind great
          AI applications.
        </p>
        <p className="mt-3 text-xs tracking-[0.14em] text-black/45 uppercase sm:mt-4">
          Software Engineer · AI Focus · Stockholm
        </p>
      </div>
    </section>
  );
}
