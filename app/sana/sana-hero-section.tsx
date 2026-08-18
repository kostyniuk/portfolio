import Image from "next/image";

import { SanaGreeting } from "./sana-greeting";
import { SanaMark } from "./sana-mark";

/** A miniature agent run, standing in for the Agents side of the role. */
const TRACE = ["Define", "Retrieve", "Build", "Instrument"];

export function SanaHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#0b0b0d] px-5 pt-24 pb-16 text-[#f5f4f2] sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Sana application introduction"
    >
      <div className="sana-aurora sana-aurora-warm absolute -top-[22vw] -left-[14vw] size-[56vw] min-h-96 min-w-96" />
      <div className="sana-aurora sana-aurora-cool absolute -right-[16vw] -bottom-[26vw] size-[60vw] min-h-96 min-w-96" />
      <div className="sana-mesh absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] text-white/45 uppercase sm:text-[11px]">
            <SanaMark className="size-4 text-white/85" />
            Learn &amp; Agents
            <span className="h-3 w-px bg-white/20" />
            Application / Alex Kostyniuk
          </p>

          <SanaGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-white/60 sm:text-xl">
            I ship product end to end, from problem definition through UX, API, and instrumentation, and I have spent
            the last while building with agents rather than around them.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-white/40 uppercase sm:text-[11px]">
            Fullstack Product Engineer · 0→1 · Stockholm
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="sana-panel rounded-[1.75rem] p-3 sm:p-4">
            {/* 4:5 keeps close to the source photo's own 3:4, so the crop stays a portrait. */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#15151a]">
              <Image
                src="/application-profile.jpeg"
                alt="Alex Kostyniuk"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 84vw, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(11,11,13,0.8),transparent)]" />
              <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-3">
                <p className="text-[9px] tracking-[0.22em] text-white/75 uppercase">Run 01 / Candidate</p>
                <SanaMark className="size-3.5 text-white/70" />
              </div>
            </div>

            <ol className="mt-4 flex items-center justify-between gap-1 px-1">
              {TRACE.map((step, index) => (
                <li key={step} className="flex min-w-0 flex-1 items-center gap-1">
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span
                      className="sana-trace-dot size-1.5 shrink-0 rounded-full bg-white/70"
                      style={{ animationDelay: `${index * 320}ms` }}
                    />
                    <span className="truncate text-[9px] tracking-[0.14em] text-white/60 uppercase">{step}</span>
                  </span>
                  {index < TRACE.length - 1 ? <span className="h-px min-w-1 flex-1 bg-white/12" /> : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
