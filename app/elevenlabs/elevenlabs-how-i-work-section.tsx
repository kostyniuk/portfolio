"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const STEPS = [
  { verb: "Listen", detail: "Start with people, context, and the real constraint." },
  { verb: "Understand", detail: "Reduce the noise until the problem becomes clear." },
  { verb: "Prototype", detail: "Make the idea tangible early and explore alternatives." },
  { verb: "Ship", detail: "Choose deliberately, polish what matters, and put it in use." },
  { verb: "Learn", detail: "Follow the signal back and make the next version better." },
];

export function ElevenLabsHowIWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0.48 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-dvh snap-start items-center overflow-hidden bg-[#080808] px-5 py-20 text-[#fdfcfc] sm:px-8"
      aria-labelledby="how-i-work-title"
    >
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:100%_9vh]" />
      <div className="absolute -top-36 left-[8%] size-96 rounded-full bg-[#ff6a3d]/10 blur-[110px]" />
      <div className="absolute -right-32 bottom-[-8rem] size-[30rem] rounded-full bg-[#506bff]/12 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-3 hidden text-xs tracking-[0.2em] text-white/42 uppercase sm:block">A continuous loop</p>
        <h2
          id="how-i-work-title"
          className="max-w-3xl text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.92] font-medium tracking-[-0.065em]"
        >
          How I work.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/52 sm:text-base">
          I begin by listening closely, reduce the problem to what matters, explore quickly, ship deliberately, and use
          the result to improve what comes next.
        </p>

        <div className="relative mt-10 sm:mt-16">
          <div className="absolute top-3 left-0 hidden h-px w-full bg-white/12 sm:block" />
          <div
            className={cn(
              "elevenlabs-process-signal absolute top-3 left-0 hidden h-px bg-[#ff6a3d] sm:block",
              active && "is-active",
            )}
          />
          <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-3">
            {STEPS.map(({ verb, detail }, index) => (
              <li
                key={verb}
                className={cn("elevenlabs-process-step flex gap-4 sm:block", active && "is-active")}
                style={{ transitionDelay: `${220 + index * 180}ms` }}
              >
                <span className="relative z-10 mt-1 block size-6 shrink-0 rounded-full border border-white/20 bg-[#080808] sm:mt-0">
                  <span className="absolute inset-[7px] rounded-full bg-white/75" />
                </span>
                <div className="sm:mt-6">
                  <p className="text-base font-semibold tracking-[-0.02em]">{verb}</p>
                  <p className="mt-1 max-w-48 text-xs leading-relaxed text-white/42 sm:mt-3">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex items-center gap-3 text-[10px] tracking-[0.16em] text-white/32 uppercase sm:mt-14">
          <span>Sound design with ElevenLabs</span>
          <span className="h-px flex-1 bg-white/10" />
          <span>Audio cues coming next</span>
        </div>
      </div>
    </section>
  );
}
