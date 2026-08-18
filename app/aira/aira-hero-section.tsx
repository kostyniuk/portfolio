import Image from "next/image";

import { AiraGreeting } from "./aira-greeting";
import { AiraFrame, AiraWordmark } from "./aira-mark";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

/** A planner's week: crews down the side, visits across the days. left/width are percentages of the track. */
const CREWS = [
  {
    crew: "Crew 01",
    visits: [
      { label: "Install", left: 4, width: 26 },
      { label: "Service", left: 44, width: 18 },
    ],
  },
  {
    crew: "Crew 02",
    visits: [
      { label: "Survey", left: 18, width: 16 },
      { label: "Install", left: 52, width: 30 },
    ],
  },
  {
    crew: "Crew 03",
    visits: [
      { label: "Install", left: 8, width: 22 },
      { label: "Survey", left: 68, width: 20 },
    ],
  },
];

const STOPS = [8, 32, 58, 84];

export function AiraHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#FFAF51] px-5 pt-24 pb-16 text-[#29292D] sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Aira application introduction"
    >
      <div className="aira-halo absolute -top-[24vw] -right-[12vw] size-[54vw] min-h-96 min-w-96" />
      <div className="aira-halo absolute -bottom-[28vw] -left-[16vw] size-[50vw] min-h-80 min-w-80" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] uppercase sm:text-[11px]">
            <AiraFrame className="h-4 w-6 text-[#29292D]" />
            <AiraWordmark className="text-xs" />
            <span className="h-3 w-px bg-black/25" />
            Planning
            <span className="h-3 w-px bg-black/25" />
            Application / Alex Kostyniuk
          </p>

          <AiraGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-black/70 sm:text-xl">
            I build the dense, visual interfaces that operations teams live in all day—timelines, maps, and dashboards
            where the whole job is making a hard decision look obvious.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-black/55 uppercase sm:text-[11px]">
            Frontend Developer · Data-Dense UI · Stockholm
          </p>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <div className="rounded-[1.5rem] bg-[#29292D] p-4 text-[#f6f4ef] shadow-[0_30px_80px_rgba(41,41,45,0.32)] sm:p-5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[9px] tracking-[0.22em] text-white/50 uppercase">Planning board</p>
              <p className="text-[9px] tracking-[0.22em] text-[#FFAF51] uppercase">Week 34</p>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-1 border-b border-white/10 pb-2">
              {DAYS.map((day) => (
                <p key={day} className="text-[9px] tracking-[0.14em] text-white/40 uppercase">
                  {day}
                </p>
              ))}
            </div>

            <div className="mt-3 grid gap-2.5">
              {CREWS.map(({ crew, visits }, rowIndex) => (
                <div key={crew} className="flex items-center gap-3">
                  <p className="w-14 shrink-0 text-[9px] tracking-[0.12em] text-white/45 uppercase">{crew}</p>
                  <div className="relative h-6 flex-1 overflow-hidden rounded-md bg-white/6">
                    <div className="absolute inset-0 grid grid-cols-5">
                      {DAYS.map((day) => (
                        <span key={day} className="border-r border-white/6 last:border-r-0" />
                      ))}
                    </div>
                    {visits.map(({ label, left, width }, visitIndex) => (
                      <span
                        key={`${crew}-${label}-${visitIndex}`}
                        className="aira-visit absolute inset-y-1 grid place-items-center rounded bg-[#FFAF51] text-[8px] font-semibold tracking-[0.08em] text-[#29292D] uppercase"
                        style={{
                          left: `${left}%`,
                          width: `${width}%`,
                          animationDelay: `${(rowIndex * 2 + visitIndex) * 110}ms`,
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-[9px] tracking-[0.22em] text-white/40 uppercase">Route · by proximity</p>
              <div className="relative mt-3 h-5">
                <span className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 border-t border-dashed border-white/20" />
                {STOPS.map((left) => (
                  <span
                    key={left}
                    className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45"
                    style={{ left: `${left}%` }}
                  />
                ))}
                <span className="aira-route-marker absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFAF51]" />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-[#3a3a41]">
                <Image
                  src="/application-profile.jpeg"
                  alt="Alex Kostyniuk"
                  fill
                  loading="eager"
                  sizes="56px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] tracking-[0.22em] text-white/40 uppercase">Assigned</p>
                <p className="mt-1 text-sm font-semibold tracking-[-0.02em]">Alex Kostyniuk</p>
                <p className="text-[11px] text-white/45">React · TypeScript · Data-dense UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
