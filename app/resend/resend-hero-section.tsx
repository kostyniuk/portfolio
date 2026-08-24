import Image from "next/image";

import { ResendGreeting } from "./resend-greeting";
import { ResendSymbol, ResendWordmark } from "./resend-mark";

/** The observability surface the posting asks for: what actually happened to one email. */
const EVENTS = [
  { event: "email.sent", detail: "api", time: "12:04:31.204", state: "200" },
  { event: "email.delivered", detail: "gmail.com", time: "12:04:33.019", state: "250" },
  { event: "email.opened", detail: "Stockholm, SE", time: "12:07:02.884", state: "ok" },
  { event: "webhook.delivered", detail: "POST /hooks/resend", time: "12:07:03.101", state: "200" },
  { event: "domain.verified", detail: "SPF, DKIM, DMARC", time: "yesterday", state: "ok" },
];

export function ResendHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#0a0a0a] px-5 pt-24 pb-16 text-white sm:px-8 lg:h-dvh lg:px-14"
      aria-label="Resend application introduction"
    >
      <div className="resend-hairlines absolute inset-0" />
      <div className="resend-fade absolute inset-x-0 bottom-0 h-1/3" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] text-white/45 uppercase sm:text-[11px]">
            <ResendSymbol className="text-white" />
            <ResendWordmark className="text-xs text-white/85" />
            <span className="h-3 w-px bg-white/20" />
            Product Engineer
            <span className="h-3 w-px bg-white/20" />
            Application / Alex Kostyniuk
          </p>

          <ResendGreeting />

          <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.02em] text-white/60 sm:text-xl">
            I care about how a product works and how it feels, in the same commit. Six years of shipping web products,
            most of it making complicated things look obvious.
          </p>

          <p className="mt-7 text-[10px] tracking-[0.2em] text-white/40 uppercase sm:text-[11px]">
            Product Engineer · TypeScript &amp; React · Remote, CET
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
            <Image
              src="/application-profile.jpeg"
              alt="Alex Kostyniuk"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 88vw, 448px"
              className="object-cover object-[center_45%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,rgba(10,10,10,0.85),transparent)]" />
            <p className="absolute bottom-3 left-4 text-[9px] tracking-[0.22em] text-white/70 uppercase">
              Candidate / one send
            </p>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
            <div className="flex items-center justify-between gap-3 border-b border-white/8 px-4 py-2.5">
              <p className="text-[9px] tracking-[0.22em] text-white/40 uppercase">Email log</p>
              <p className="font-mono text-[9px] text-white/30">re_4Xq...8fA</p>
            </div>

            <ul>
              {EVENTS.map(({ event, detail, time, state }, index) => (
                <li
                  key={event}
                  className="resend-log-row flex items-center gap-3 border-b border-white/6 px-4 py-2 last:border-b-0"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <span className="size-1 shrink-0 rounded-full bg-white/50" />
                  <p className="min-w-0 flex-1 truncate font-mono text-[10px] text-white/80">{event}</p>
                  <p className="hidden min-w-0 shrink truncate text-[10px] text-white/35 sm:block">{detail}</p>
                  <p className="w-10 shrink-0 text-right font-mono text-[9px] text-white/45">{state}</p>
                  <p className="w-20 shrink-0 text-right font-mono text-[9px] text-white/25 tabular-nums">{time}</p>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-3 border-t border-white/8 px-4 py-2.5">
              <p className="text-[10px] text-white/35">Delivered in 1.8s, and you can see exactly why.</p>
              <span className="shrink-0 text-[9px] tracking-[0.14em] text-white/50 uppercase">Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
