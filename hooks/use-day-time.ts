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

// Read the clock once on mount. The greeting does not need to update while a
// visitor keeps the page open, so there is no external subscription.
const subscribe = () => () => {};

// The server cannot know the visitor's local clock. A stable null snapshot
// lets each consumer reserve its own layout until hydration completes.
const getServerSnapshot = (): DayTime | null => null;

/**
 * Returns the visitor's local time-of-day after hydration. Consumers should
 * render a size-matched placeholder while the value is null.
 */
export function useDayTime(): DayTime | null {
  return useSyncExternalStore(
    subscribe,
    () => getDayTime(new Date()),
    getServerSnapshot,
  );
}
