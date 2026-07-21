"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { cn } from "@/lib/utils";
import { ElevenLabsMark } from "./elevenlabs-mark";

const WAVEFORM = [10, 18, 28, 14, 38, 26, 48, 32, 20, 42, 56, 34, 22, 46, 30, 18, 40, 28, 16, 34, 12];

export function ElevenLabsAudioIntro({ audioSrc }: { audioSrc?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    const updateDuration = () => setDuration(audio.duration || 0);
    const stop = () => setIsPlaying(false);
    const play = () => setIsPlaying(true);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", stop);
    audio.addEventListener("pause", stop);
    audio.addEventListener("play", play);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", stop);
      audio.removeEventListener("pause", stop);
      audio.removeEventListener("play", play);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || !audioSrc) return;

    if (audio.paused) await audio.play();
    else audio.pause();
  };

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds <= 0) return "--:--";
    return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {audioSrc ? <audio ref={audioRef} src={audioSrc} preload="metadata" /> : null}

      <button
        type="button"
        onClick={togglePlayback}
        disabled={!audioSrc}
        className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-4 disabled:cursor-default"
        aria-label={
          audioSrc ? (isPlaying ? "Pause introduction" : "Play introduction") : "Introduction audio coming soon"
        }
      >
        <GlassBadge
          className="h-auto gap-2 px-3 py-2.5 text-xs text-black sm:gap-3 sm:px-4 sm:py-3 sm:text-sm"
          surfaceClassName="bg-white/55 shadow-[0_12px_40px_rgba(20,20,20,0.08)]"
        >
          <span className="grid size-8 place-items-center rounded-full bg-black text-white transition-transform group-enabled:group-hover:scale-105">
            {isPlaying ? (
              <Pause className="size-3.5 fill-current" />
            ) : (
              <Play className="ml-0.5 size-3.5 fill-current" />
            )}
          </span>
          <ElevenLabsMark className="size-5" />
          <span>{audioSrc ? "Voiced by ElevenLabs" : "Voice coming soon"}</span>
          {audioSrc ? <span className="text-black/45">{formatTime(duration)}</span> : null}
        </GlassBadge>
      </button>

      <div
        className={cn("elevenlabs-waveform flex h-14 items-center justify-center gap-1", isPlaying && "is-playing")}
        aria-hidden="true"
      >
        {WAVEFORM.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="block w-1 rounded-full bg-black/75"
            style={{
              height,
              animationDelay: `${index * -45}ms`,
              opacity: Math.max(0.25, index / WAVEFORM.length) + progress * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
