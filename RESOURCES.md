# Modern CSS Animation Patterns Resources

## Knowledge

- [MDN: `sibling-index()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-index)
  Defines the function, its 1-based indexing behavior, and examples. Use for: syntax and mental model.
- [MDN: `sibling-count()`](https://developer.mozilla.org/en-US/docs/Web/CSS/sibling-count)
  Companion function for reading the number of sibling elements. Use for: length-aware timing patterns after `sibling-index()` is comfortable.
- [MDN: `animation-delay`](https://developer.mozilla.org/docs/Web/CSS/animation-delay)
  Defines positive and negative delays for CSS animations. Use for: timing behavior when staggering animation start times.
- [MDN: Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  Core guide to `@keyframes`, the `animation` shorthand, durations, timing functions, fill modes, and iteration. Use for: time-based animation fundamentals.
- [MDN: Using CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  Explains property interpolation between old and new states. Use for: choosing transitions when state changes are simple.
- [MDN: `@starting-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)
  Defines starting styles for entry transitions. Use for: animating elements from their first rendered style.
- [MDN: CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
  Overview of scroll and view progress timelines. Use for: linking animation progress to scrolling.
- [MDN: Scroll-driven animation timelines](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations/Timelines)
  Explains document, scroll progress, and view progress timelines. Use for: choosing `scroll()`, `view()`, or named timelines.
- [MDN: `animation-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-range)
  Defines where a scroll-driven animation attaches to its timeline. Use for: scroll-triggered enter/exit ranges.
- [MDN: View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
  Explains browser-managed transitions between document or app states. Use for: page/state transitions where the browser captures old and new snapshots.
- [MDN: CSS view transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/View_transitions)
  CSS-side guide for styling view-transition pseudo-elements. Use for: customizing view transition animations.
- [CSS Values and Units Module Level 5 draft: Tree counting functions](https://drafts.csswg.org/css-values-5/#tree-counting)
  Specification home for `sibling-index()` and `sibling-count()`. Use for: precise behavior and future-facing details.

## Wisdom (Communities)

- [CSS-Tricks Forums](https://css-tricks.com/forums/)
  Practical CSS discussion and troubleshooting. Use for: asking whether a pattern is robust enough for real sites.
- [Stack Overflow: `css-animations`](https://stackoverflow.com/questions/tagged/css-animations)
  Large searchable archive of animation problems. Use for: debugging browser-specific or timing-specific issues.
