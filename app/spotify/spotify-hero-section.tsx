import Image from "next/image";

import { SpotifyGreeting } from "./spotify-greeting";
import { SpotifyMark } from "./spotify-mark";

const BARS = [42, 68, 35, 84, 54, 76, 46, 92, 62, 38, 72, 50];

export function SpotifyHeroSection() {
  return (
    <section
      className="relative flex min-h-dvh snap-start items-center overflow-hidden bg-[#f4f4ee] px-5 py-24 text-[#121212] sm:px-8 lg:h-dvh lg:px-12"
      aria-label="Spotify application introduction"
    >
      <div className="absolute -top-[24vw] -right-[18vw] size-[62vw] rounded-full bg-[#1ed760] opacity-90" />
      <div className="absolute -bottom-[34vw] -left-[18vw] size-[60vw] rounded-full border-[7vw] border-[#b8a7ff]/55" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div>
          <p className="mb-6 flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase sm:text-xs">
            <SpotifyMark className="size-4 text-[#1ed760]" /> Application session / Alex Kostyniuk
          </p>
          <SpotifyGreeting />
          <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed tracking-[-0.025em] text-black/65 sm:text-xl">
            I build features across the stack. I care a lot about the UI, but I&apos;m just as comfortable following the
            work into backend services or the data behind them when that&apos;s what the feature needs.
          </p>
          <p className="mt-6 text-[10px] font-semibold tracking-[0.18em] text-black/45 uppercase sm:text-xs">
            Full-stack engineer · Frontend / Backend · Stockholm
          </p>
        </div>

        <div className="mx-auto w-full max-w-md lg:rotate-[2deg]">
          <div className="rounded-[2rem] bg-[#121212] p-4 text-white shadow-[0_35px_90px_rgba(18,18,18,0.28)] sm:p-5">
            <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-[#1ed760]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0_38%,rgba(18,18,18,0.14)_38%_52%,transparent_52%)]" />
              <div className="absolute inset-[10%] overflow-hidden rounded-full border-[10px] border-[#121212] bg-[#deded5] shadow-2xl sm:border-[14px]">
                <Image
                  src="/application-profile.jpeg"
                  alt="Alex Kostyniuk"
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 76vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="spotify-vinyl-groove absolute inset-[5%] rounded-full border border-black/15" />
            </div>

            <div className="flex items-end justify-between gap-5 px-1 pt-5">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-white/42 uppercase">Now building</p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.045em]">End-to-end features</p>
                <p className="mt-1 text-xs text-white/48">React · Backend · APIs · Data</p>
              </div>
              <div className="spotify-equalizer flex h-9 items-end gap-1" aria-hidden="true">
                {BARS.map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-1 rounded-full bg-[#1ed760]"
                    style={{ height: `${height}%`, animationDelay: `${index * -90}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
