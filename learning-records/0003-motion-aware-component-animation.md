# Motion-aware component animation

The learner asked to update the animation lessons for reusable components that use Motion, with explicit comparisons against what plain CSS can accomplish. Future animation teaching should not treat CSS and Motion as competing defaults. Instead, start by identifying which layer can observe the trigger and state:

- CSS owns selector-driven state, keyframes, media queries, scroll timelines, and decorative effects like the shiny underline.
- Motion owns React-aware animation state: keyed children, exit animations through `AnimatePresence`, measured values, prop-driven delays, and runtime reduced-motion decisions.
- Good reusable components can compose both: CSS for stable visual texture, React for data changes, and Motion for lifecycle choreography.
