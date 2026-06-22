# Dual CSS triggers for independent entry and exit animation speeds

The learner built the header hints section end-to-end: started with JS IntersectionObserver + React state, then replaced it with a single `animation-trigger: play-backwards` (same speed both ways), then identified that the exit felt slow and asked whether CSS could solve it. The solution was two named `timeline-trigger`s — one covering the full on-screen range (`--hints`), one covering the exit-only range (`--hints-out`) — plus a fast opacity-fade on the overlay wrapper to visually dominate the exit while the draw-reversal runs invisibly underneath.

Key insight to carry forward: the "two properties on different triggers, different durations" pattern works because the properties are different (`stroke-dashoffset` vs `opacity`), so there's no animation precedence conflict. If both needed to animate the same property at different exit speeds, a second keyframe animation ordered last in the `animation` list would be required.

The learner also demonstrated that CSS cascade is DOM-based, not layout-based — a `position: fixed` child still inherits named triggers from its ancestor section, which is why the overlay could be fixed-positioned but still respond to the section's scroll triggers.
