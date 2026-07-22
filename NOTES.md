# Teaching Notes

## Application page preferences

- Legora should reuse the full-viewport pacing and section structure of the ElevenLabs application.
- Reuse the global `/application-profile.jpeg` for application-page portraits; do not place shared portraits inside a company-specific folder or substitute `/profile.jpg`.
- Keep user-authored motivation copy as placeholders when requested instead of inventing final reasons.
- Application-page viewport animations should use CSS view timelines or timeline triggers, not React state and `IntersectionObserver`; keep client JavaScript only for behavior CSS cannot provide.

## Lesson design preferences

- **Explain the "why" before the "how" (user feedback, 2026-06-09).** The first batch of series lessons (0003-0010) were demo-plus-code only and the user found them not informative enough. Every lesson must explain:
  - **The problem it solves** — what pain existed, what people did before the feature (JS hacks, libraries, workarounds).
  - **The idea / design intent** — the mental model the feature is built on, the desire it grants.
  - **Boundaries / trade-offs** — when to reach for it and when not, with a pointer to the neighboring primitive.
  - **Mission tie-in** — a concrete "On Your Portfolio" section connecting the feature to this workspace.
- Keep the interactive demos and quizzes; the prose wraps them, it doesn't replace them.
- Lessons carry prev/next/index navigation in a footer (`nav.lesson-nav`).
- Shared visual language: paper background `#faf8f2`, accent `#255fd7`, bordered white panels, big clamp() headline.
- For component animation lessons, especially components using Motion, compare against plain CSS explicitly. Teach the ownership split: CSS for selector/keyframe/media-query/scroll effects; Motion for React lifecycle, keyed exits, measured values, prop-driven timing, and runtime reduced-motion decisions.
