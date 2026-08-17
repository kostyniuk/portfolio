import Image from "next/image";

import { HmGreeting } from "./hm-greeting";
import { CosWordmark, HmMark } from "./hm-mark";

const MATERIALS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "Headless CMS",
  "GitHub Actions",
  "AWS",
  "PostgreSQL",
];

export function HmHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#eceae4] px-5 pt-24 pb-16 text-[#111111] sm:px-8 lg:h-dvh lg:px-14"
      aria-label="COS application introduction"
    >
      <div className="hm-hairlines absolute inset-0" />
      <div className="absolute inset-y-0 left-0 w-[3px] bg-[#e50010]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="mb-7 flex items-center gap-3 text-[10px] tracking-[0.22em] text-black/50 uppercase sm:text-[11px]">
            <HmMark className="h-4 w-8 text-[#e50010]" />
            <span className="h-3 w-px bg-black/20" />
            Portfolio Brands
            <span className="h-3 w-px bg-black/20" />
            Application / Alex Kostyniuk
          </p>

          <HmGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-black/62 sm:text-xl">
            I build frontend with the same care COS puts into a garment: considered structure, nothing decorative left
            in, and finishing you notice only because everything feels right.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-black/45 uppercase sm:text-[11px]">
            Senior Frontend Engineer · Full-stack Range · Stockholm
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <figure className="border border-black/12 bg-[#f6f5f1] p-3 shadow-[0_30px_80px_rgba(17,17,17,0.09)] sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#dedbd3]">
              <Image
                src="/application-profile.jpeg"
                alt="Alex Kostyniuk"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 76vw, 384px"
                className="object-cover"
              />
            </div>

            <figcaption className="mt-4 flex items-end justify-between gap-4 border-t border-black/12 pt-3">
              <div>
                <p className="text-[9px] tracking-[0.22em] text-black/42 uppercase">Look 01 / Candidate</p>
                <p className="mt-1.5 text-lg font-light tracking-[-0.035em]">Alex Kostyniuk</p>
              </div>
              <CosWordmark className="pb-1 text-xs text-black/60" />
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-3 border-t border-black/12 bg-[#eceae4]/85 py-3 backdrop-blur-sm">
        <span className="shrink-0 pl-5 text-[9px] tracking-[0.22em] text-black/40 uppercase sm:pl-8">Materials</span>
        <div className="hm-ticker-mask flex-1">
          <div className="hm-ticker flex w-max gap-8 pr-8">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex gap-8" aria-hidden={pass === 1}>
                {MATERIALS.map((material) => (
                  <span key={material} className="text-[10px] tracking-[0.18em] text-black/55 uppercase">
                    {material}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
