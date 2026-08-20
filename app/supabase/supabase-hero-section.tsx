import Image from "next/image";

import { SupabaseGreeting } from "./supabase-greeting";
import { SupabaseSymbol, SupabaseWordmark } from "./supabase-mark";

/** The layered checks the posting asks someone to own, as a passing run. */
const CHECKS = [
  { name: "types", detail: "tsc, boundaries typed", time: "12s" },
  { name: "lint + format", detail: "oxlint, oxfmt", time: "3s" },
  { name: "unit + component", detail: "Vitest", time: "41s" },
  { name: "contract", detail: "MSW against the API", time: "18s" },
  { name: "migrations", detail: "Postgres, reversible", time: "22s" },
  { name: "a11y", detail: "axe on every route", time: "9s" },
  { name: "visual regression", detail: "Playwright snapshots", time: "1m 04s" },
];

const RUNNING = { name: "bundle size", detail: "budget: 180kb", time: "" };

export function SupabaseHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#1c1c1c] px-5 pt-24 pb-16 text-[#fbfbfb] sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Supabase application introduction"
    >
      <div className="supabase-grid absolute inset-0" />
      <div className="supabase-glow absolute -top-[18vw] -right-[10vw] size-[46vw] min-h-80 min-w-80" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] text-white/45 uppercase sm:text-[11px]">
            <SupabaseSymbol className="text-[#3ecf8e]" />
            <SupabaseWordmark className="text-xs text-white/80" />
            <span className="h-3 w-px bg-white/20" />
            Team Frontend
            <span className="h-3 w-px bg-white/20" />
            Application / Alex Kostyniuk
          </p>

          <SupabaseGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-white/60 sm:text-xl">
            I ship 0→1 and then keep earning the next version from the people using it. I treat types, tests, and CI as
            the thing that lets me and my agents move fast without breaking production.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-white/40 uppercase sm:text-[11px]">
            Frontend · Full-stack range · Remote from Stockholm
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="mb-3 flex items-center gap-3 px-1">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium tracking-[-0.01em]">
                feat(studio): ship it, then earn the next version
              </p>
              <p className="mt-0.5 text-[10px] text-white/40">alex-kostyniuk wants to merge into main</p>
            </div>
            <span className="shrink-0 rounded-full bg-[#3ecf8e]/15 px-2 py-1 text-[9px] tracking-[0.14em] text-[#3ecf8e] uppercase">
              Open
            </span>
          </div>

          {/* 5:4 with the focal point at 45% keeps the head centred instead of leaving a field of sky. */}
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 bg-[#161616] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <Image
              src="/application-profile.jpeg"
              alt="Alex Kostyniuk"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 88vw, 448px"
              className="object-cover object-[center_45%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),transparent)]" />
            <p className="absolute bottom-3 left-4 text-[9px] tracking-[0.22em] text-white/70 uppercase">
              Run 01 / Candidate
            </p>
          </div>

          <div className="mt-3 rounded-xl border border-white/10 bg-[#161616] p-3.5">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {CHECKS.map(({ name }, index) => (
                <div
                  key={name}
                  className="supabase-check flex items-center gap-2"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className="grid size-3.5 shrink-0 place-items-center rounded-full bg-[#3ecf8e] text-[#0f0f0f]">
                    <svg viewBox="0 0 10 10" className="size-2" aria-hidden="true">
                      <path
                        d="M2 5.2 4 7.2 8 3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="min-w-0 flex-1 truncate text-[10px] text-white/75">{name}</p>
                </div>
              ))}

              <div className="supabase-check flex items-center gap-2" style={{ animationDelay: "630ms" }}>
                <span className="supabase-spinner size-3.5 shrink-0 rounded-full border-2 border-white/15 border-t-[#3ecf8e]" />
                <p className="min-w-0 flex-1 truncate text-[10px] text-white/55">{RUNNING.name}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-2.5">
              <span className="shrink-0 text-[10px] tracking-[0.14em] text-[#3ecf8e] uppercase">7 passed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
