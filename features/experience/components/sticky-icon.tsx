"use client";

import { useSound } from "@/hooks/use-sound";
import { useSticky } from "@/hooks/use-sticky";
import { bong001Sound } from "@/lib/bong-001";
import { unlockAudioContext } from "@/lib/sound-engine";
import { type ReactNode, useEffect } from "react";

/**
 * Wraps a timeline icon with sticky-pin detection and a sound effect.
 *
 * Renders an invisible sentinel above the sticky icon — when the sentinel
 * scrolls past the sticky threshold, useSticky fires onPin and plays
 * the bong sound. See `use-sticky.ts` for how detection works.
 */
function StickyIcon({ children }: { children: ReactNode }) {
  const [play] = useSound(bong001Sound);
  const { sentinelRef } = useSticky({ onPin: play });

  // Unlock AudioContext on first user gesture (required by Firefox).
  // Chrome is lenient, but Firefox won't play audio from a context
  // created outside a gesture — see sound-engine.ts for details.
  useEffect(() => {
    const events = ["click", "touchstart", "keydown"] as const;
    for (const event of events) {
      document.addEventListener(event, unlockAudioContext, { once: true, passive: true });
    }
    return () => {
      for (const event of events) {
        document.removeEventListener(event, unlockAudioContext);
      }
    };
  }, []);

  return (
    <div className="h-full">
      <div ref={sentinelRef} />
      <div className="w-6 h-6 bg-foreground text-background rounded-full sticky top-20 relative z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export { StickyIcon };
