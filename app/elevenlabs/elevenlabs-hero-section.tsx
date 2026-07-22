import Image from "next/image";

import { ElevenLabsAudioIntro } from "./elevenlabs-audio-intro";
import { ElevenLabsGreeting } from "./elevenlabs-greeting";

export function ElevenLabsHeroSection({ audioSrc }: { audioSrc?: string }) {
  return (
    <section
      className="relative flex h-dvh snap-start items-center justify-center overflow-hidden bg-[#fdfcfc] px-6 pt-16 text-black"
      aria-label="ElevenLabs application introduction"
    >
      <div className="elevenlabs-orb elevenlabs-orb-orange absolute -left-[15vw] top-[10vh] size-[52vw] min-h-80 min-w-80" />
      <div className="elevenlabs-orb elevenlabs-orb-blue absolute -right-[18vw] bottom-[-14vw] size-[56vw] min-h-96 min-w-96" />
      <div className="absolute inset-x-0 top-0 h-px bg-black/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-2 text-[10px] tracking-[0.2em] text-black/50 uppercase sm:text-xs">
          Application / Alex Kostyniuk
        </p>
        <ElevenLabsGreeting />

        <div className="relative my-3 size-[min(42vw,13rem)] overflow-hidden rounded-full border border-black/10 bg-[#efeeeb] shadow-[0_28px_70px_rgba(50,42,34,0.15)] sm:my-4 sm:size-[14rem]">
          <Image
            src="/application-profile.jpeg"
            alt="Alex Kostyniuk"
            fill
            loading="eager"
            sizes="(max-width: 640px) 42vw, 224px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-orange-200/10" />
        </div>

        <p className="max-w-xl text-balance text-lg leading-snug tracking-[-0.025em] sm:text-xl">
          I build products people can understand, enjoy, and trust.
        </p>
        <div className="mt-3 sm:mt-4">
          <ElevenLabsAudioIntro audioSrc={audioSrc} />
        </div>
      </div>
    </section>
  );
}
