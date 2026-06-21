"use client";

import { useSyncExternalStore } from "react";

export type DayTime = "morning" | "afternoon" | "evening" | "night";

function getDayTime(date: Date): DayTime {
  const hour = date.getHours();
  if (hour < 5) return "night";
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  if (hour < 22) return "evening";
  return "night";
}

// We read the clock once on mount rather than subscribing to it, so `subscribe`
// is a no-op that never fires a change.
const subscribe = () => () => {};

// Server snapshot: the server has no knowledge of the visitor's clock, so it
// renders the neutral "I don't know yet" value. Returning a stable reference
// keeps React from looping.
const getServerSnapshot = (): DayTime | null => null;

/**
 * Time of day is a client-only value. `useSyncExternalStore` returns the server
 * snapshot (null) during SSR and the first hydration render, so the markup
 * matches and hydration succeeds; React then reads the client snapshot and
 * re-renders safely with the visitor's real local time.
 *
 * This is the lint-clean, purpose-built form of the two-pass pattern that
 * `usePrefersReducedMotion` expresses with `useState` + `useEffect`.
 */
export function useDayTime(): DayTime | null {
  return useSyncExternalStore(
    subscribe,
    () => getDayTime(new Date()),
    getServerSnapshot,
  );
}
