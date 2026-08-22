import Image from "next/image";

import { TandemGreeting } from "./tandem-greeting";
import { TandemSymbol, TandemWordmark } from "./tandem-mark";

/** The product in miniature: a consultation becoming a structured note the clinician signs. */
const NOTE_FIELDS = [
  { label: "Subjective", value: "Presenting complaint, history, duration" },
  { label: "Objective", value: "Vitals, examination findings" },
  { label: "Assessment", value: "Working diagnosis, differentials" },
  { label: "Plan", value: "Investigations, treatment, follow-up" },
];

const WAVE = [38, 64, 30, 82, 52, 74, 44, 90, 58, 36, 70, 48, 66, 34];

export function TandemHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#bef66f] px-5 pt-24 pb-16 text-black sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Tandem Health application introduction"
    >
      <div className="tandem-bloom absolute -top-[22vw] -right-[14vw] size-[52vw] min-h-80 min-w-80" />
      <div className="tandem-bloom absolute -bottom-[26vw] -left-[16vw] size-[48vw] min-h-80 min-w-80" />
      <div className="tandem-rule absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] text-black/60 uppercase sm:text-[11px]">
            <TandemSymbol className="text-black" />
            <TandemWordmark className="text-xs text-black" />
            <span className="h-3 w-px bg-black/25" />
            Software Engineer
            <span className="h-3 w-px bg-black/25" />
            Application / Alex Kostyniuk
          </p>

          <TandemGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-black/70 sm:text-xl">
            I build across the stack and take features from design to production. The work I am proudest of removed
            hours of admin from someone&apos;s day, which is the whole point of what you are building.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-black/55 uppercase sm:text-[11px]">
            Software Engineer · Full-stack · Stockholm
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-black/12 bg-[#e9efe1] shadow-[0_30px_80px_rgba(20,26,10,0.18)]">
            <Image
              src="/application-profile.jpeg"
              alt="Alex Kostyniuk"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 88vw, 448px"
              className="object-cover object-[center_45%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,rgba(10,12,6,0.82),transparent)]" />
            <p className="absolute bottom-3 left-4 text-[9px] tracking-[0.22em] text-white/80 uppercase">
              Visit 01 / Candidate
            </p>
          </div>

          <div className="mt-3 rounded-xl border border-black/10 bg-white p-4 shadow-[0_16px_50px_rgba(20,26,10,0.12)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[9px] tracking-[0.22em] text-black/50 uppercase">Ambient capture</p>
              <div className="tandem-wave flex h-4 items-end gap-[3px]" aria-hidden="true">
                {WAVE.map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-[3px] rounded-full bg-black"
                    style={{ height: `${height}%`, animationDelay: `${index * -90}ms` }}
                  />
                ))}
              </div>
            </div>

            <dl className="mt-3 grid gap-2 border-t border-black/10 pt-3">
              {NOTE_FIELDS.map(({ label, value }, index) => (
                <div
                  key={label}
                  className="tandem-note-line flex items-baseline gap-3"
                  style={{ animationDelay: `${300 + index * 160}ms` }}
                >
                  <dt className="w-20 shrink-0 text-[9px] tracking-[0.16em] text-black uppercase">{label}</dt>
                  <dd className="min-w-0 flex-1 truncate text-[11px] text-black/60">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-3 border-t border-black/10 pt-2.5 text-[10px] text-black/50">
              Drafted in seconds, reviewed and signed by the clinician.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
