# Teaching Notes

## Lesson design preferences

- **Explain the "why" before the "how" (user feedback, 2026-06-09).** The first batch of series lessons (0003-0010) were demo-plus-code only and the user found them not informative enough. Every lesson must explain:
  - **The problem it solves** — what pain existed, what people did before the feature (JS hacks, libraries, workarounds).
  - **The idea / design intent** — the mental model the feature is built on, the desire it grants.
  - **Boundaries / trade-offs** — when to reach for it and when not, with a pointer to the neighboring primitive.
  - **Mission tie-in** — a concrete "On Your Portfolio" section connecting the feature to this workspace.
- Keep the interactive demos and quizzes; the prose wraps them, it doesn't replace them.
- Lessons carry prev/next/index navigation in a footer (`nav.lesson-nav`).
- Shared visual language: paper background `#faf8f2`, accent `#255fd7`, bordered white panels, big clamp() headline.
