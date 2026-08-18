import Image from "next/image";

import { GraspGreeting } from "./grasp-greeting";
import { GraspSymbol, GraspWordmark } from "./grasp-mark";

export function GraspHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#f5f5f5] px-5 pt-24 pb-16 text-[#1a1a1a] sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Grasp application introduction"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(rgba(26,26,26,0.05)_1px,transparent_1px)] [background-size:100%_9vh]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] uppercase sm:text-[11px]">
            <GraspSymbol className="text-[#1a1a1a]" />
            <GraspWordmark className="text-xs" />
            <span className="h-3 w-px bg-black/25" />
            Fullstack
            <span className="h-3 w-px bg-black/25" />
            Application / Alex Kostyniuk
          </p>

          <GraspGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-black/70 sm:text-xl">
            I build product across the full stack, TypeScript end to end, and I already work the way Grasp expects: AI
            coding tools pushed to their limit, with judgment, tests, and review holding the bar.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-black/55 uppercase sm:text-[11px]">
            Software Engineer · Fullstack · Stockholm
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center justify-center lg:max-w-lg">
          <div className="relative size-[min(64vw,18rem)] overflow-hidden rounded-full border border-black/10 bg-[#e8e8e8] shadow-[0_28px_70px_rgba(26,26,26,0.15)] sm:size-[22rem]">
            <Image
              src="/application-profile.jpeg"
              alt="Alex Kostyniuk"
              fill
              loading="eager"
              sizes="(max-width: 640px) 64vw, 352px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
