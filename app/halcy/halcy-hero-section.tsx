import Image from "next/image";

import { HalcyGreeting } from "./halcy-greeting";
import { HalcyLogotype, HalcyWordmark } from "./halcy-mark";

/** The collaborative state the posting worries about: one trip, four people, edited at once. */
const ITINERARY = [
  { step: "Lofoten, late June", detail: "Anna created the trip", time: "Mon", state: "locked" },
  { step: "Flights held, 4 seats", detail: "Payment split 4 ways", time: "Mon", state: "held" },
  { step: "Cabin in Reine", detail: "Erik swapped the hotel", time: "Tue", state: "edited" },
  { step: "Hike + kayak day", detail: "Two people voting", time: "Tue", state: "open" },
  { step: "Ferry back to Bodø", detail: "Auto-added from route", time: "Wed", state: "ok" },
];

export function HalcyHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#0f2426] px-5 pt-24 pb-16 text-[#f2f2ec] sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Halcy application introduction"
    >
      <div className="halcy-horizon absolute -top-[18vw] -right-[10vw] size-[52vw] min-h-80 min-w-80" />
      <div className="halcy-horizon absolute -bottom-[22vw] -left-[12vw] size-[44vw] min-h-80 min-w-80" />
      <div className="halcy-map absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] text-[#abc8ca]/75 uppercase sm:text-[11px]">
            <HalcyLogotype className="h-3.5 text-[#f2f2ec]" />
            <HalcyWordmark className="text-[10px] text-[#f2f2ec]/85" />
            <span className="h-3 w-px bg-[#abc8ca]/30" />
            Senior Engineer
            <span className="h-3 w-px bg-[#abc8ca]/30" />
            Application / Alex Kostyniuk
          </p>

          <HalcyGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-[#f2f2ec]/65 sm:text-xl">
            I have been at AMFG six years, junior to team lead. It is a manufacturing platform, factories plan and run
            production on it. I lead three engineers and still write code every week.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-[#abc8ca]/70 uppercase sm:text-[11px]">
            Tech/Team Lead · TypeScript across the stack · Stockholm, hybrid
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-[#abc8ca]/12 bg-[#153033] shadow-[0_30px_80px_rgba(6,20,21,0.45)]">
            <Image
              src="/application-profile.jpeg"
              alt="Alex Kostyniuk"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 88vw, 448px"
              className="object-cover object-[center_45%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,rgba(15,36,38,0.9),transparent)]" />
            <p className="absolute bottom-3 left-4 text-[9px] tracking-[0.22em] text-[#f2f2ec]/75 uppercase">
              Traveller 001 / Candidate
            </p>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-[#abc8ca]/12 bg-[#132b2d] shadow-[0_16px_50px_rgba(6,20,21,0.35)]">
            <div className="flex items-center justify-between gap-3 border-b border-[#abc8ca]/10 px-4 py-2.5">
              <p className="text-[9px] tracking-[0.22em] text-[#abc8ca]/70 uppercase">Shared itinerary</p>
              <p className="font-mono text-[9px] text-[#f2f2ec]/30">4 editors, live</p>
            </div>

            <ul>
              {ITINERARY.map(({ step, detail, time, state }, index) => (
                <li
                  key={step}
                  className="halcy-itinerary-row flex items-center gap-3 border-b border-[#abc8ca]/8 px-4 py-2 last:border-b-0"
                  style={{ animationDelay: `${index * 130}ms` }}
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-[#abc8ca]" />
                  <p className="min-w-0 flex-1 truncate text-[11px] font-medium">{step}</p>
                  <p className="hidden min-w-0 shrink truncate text-[10px] text-[#f2f2ec]/40 sm:block">{detail}</p>
                  <p className="w-14 shrink-0 text-right font-mono text-[9px] tracking-[0.1em] text-[#abc8ca]/80 uppercase">
                    {state}
                  </p>
                  <p className="w-8 shrink-0 text-right font-mono text-[9px] text-[#f2f2ec]/25">{time}</p>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-3 border-t border-[#abc8ca]/10 px-4 py-2.5">
              <p className="text-[10px] text-[#f2f2ec]/40">Four people editing one plan. That is the hard part.</p>
              <span className="shrink-0 text-[9px] tracking-[0.14em] text-[#abc8ca] uppercase">Synced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
