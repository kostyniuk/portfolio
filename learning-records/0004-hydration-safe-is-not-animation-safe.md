# Hydration-safe is not animation-safe

The learner identified that a two-pass client-only value can be React-correct while still visually wrong: a visible fallback may begin an entrance animation before the real browser value arrives. Future lessons about hydration should distinguish markup equality from animation lifecycle timing, and prefer gating animated reveals when placeholder content would be noticeable.
