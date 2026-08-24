import Image from "next/image";

import { NekoGreeting } from "./neko-greeting";
import { NekoSymbol, NekoWordmark } from "./neko-mark";

/** One visit, under an hour: the readouts a member walks out with. */
const READOUTS = [
  { area: "Heart and circulation", detail: "Rhythm, pressure, stiffness", state: "In range" },
  { area: "Bloodwork", detail: "Lipids, glucose, inflammation", state: "In range" },
  { area: "Skin", detail: "Full-body mapping", state: "Reviewed" },
  { area: "Eyes and metabolism", detail: "Retina, body composition", state: "In range" },
];

export function NekoHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#f4f6f6] px-5 pt-24 pb-16 text-[#1e2a2d] sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Neko Health application introduction"
    >
      <div className="neko-wash absolute -top-[20vw] -right-[12vw] size-[50vw] min-h-80 min-w-80" />
      <div className="neko-wash absolute -bottom-[24vw] -left-[14vw] size-[46vw] min-h-80 min-w-80" />
      <div className="neko-dots absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] text-[#486970] uppercase sm:text-[11px]">
            <NekoSymbol className="text-[#486970]" />
            <NekoWordmark className="text-[11px]" />
            <span className="h-3 w-px bg-[#486970]/30" />
            Product Engineering
            <span className="h-3 w-px bg-[#486970]/30" />
            Application / Alex Kostyniuk
          </p>

          <NekoGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-[#1e2a2d]/70 sm:text-xl">
            I look for the architectural change that makes something ten times better rather than ten percent, and I
            have the receipts for it. Member-facing software is where that discipline actually shows.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-[#486970]/80 uppercase sm:text-[11px]">
            Lead Software Engineer · Full-stack · Stockholm
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-[#486970]/12 bg-[#e3e9ea] shadow-[0_30px_80px_rgba(30,42,45,0.14)]">
            <Image
              src="/application-profile.jpeg"
              alt="Alex Kostyniuk"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 88vw, 448px"
              className="object-cover object-[center_45%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,rgba(30,42,45,0.78),transparent)]" />
            <p className="absolute bottom-3 left-4 text-[9px] tracking-[0.22em] text-white/80 uppercase">
              Member 001 / Candidate
            </p>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-[#486970]/12 bg-white shadow-[0_16px_50px_rgba(30,42,45,0.08)]">
            <div className="relative flex items-center justify-between gap-3 border-b border-[#486970]/10 px-4 py-2.5">
              <p className="text-[9px] tracking-[0.22em] text-[#486970]/70 uppercase">Body scan</p>
              <p className="font-mono text-[10px] text-[#1e2a2d]/45 tabular-nums">00:47:12</p>
              <span className="neko-sweep pointer-events-none absolute inset-0" aria-hidden="true" />
            </div>

            <ul>
              {READOUTS.map(({ area, detail, state }, index) => (
                <li
                  key={area}
                  className="neko-readout flex items-center gap-3 border-b border-[#486970]/8 px-4 py-2 last:border-b-0"
                  style={{ animationDelay: `${200 + index * 160}ms` }}
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-[#486970]" />
                  <p className="min-w-0 flex-1 truncate text-[11px] font-medium">{area}</p>
                  <p className="hidden min-w-0 shrink truncate text-[10px] text-[#1e2a2d]/45 sm:block">{detail}</p>
                  <p className="w-16 shrink-0 text-right text-[9px] tracking-[0.1em] text-[#486970] uppercase">
                    {state}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-3 border-t border-[#486970]/10 px-4 py-2.5">
              <p className="text-[10px] text-[#1e2a2d]/45">Thousands of data points, one visit, before symptoms.</p>
              <span className="shrink-0 text-[9px] tracking-[0.14em] text-[#486970] uppercase">Done</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
