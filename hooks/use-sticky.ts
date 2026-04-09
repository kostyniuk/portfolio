import { useEffect, useRef } from "react";

type UseStickyOptions = {
  topOffset?: number;
  onPin?: () => void;
};

/**
 * Detects when a CSS `position: sticky` element becomes pinned.
 *
 * Place the returned `sentinelRef` on a zero-height element directly above
 * the sticky element. As the page scrolls, the sentinel moves with the
 * document flow while the sticky element stays fixed. An IntersectionObserver
 * watches the sentinel — when it scrolls past the sticky threshold, the
 * element has become pinned and `onPin` fires.
 *
 * Only fires on scroll-down (sentinel exits top of viewport).
 * Suppresses the initial observation on mount so already-pinned elements
 * don't trigger a false positive (e.g. page refreshed mid-scroll).
 */
export function useSticky({ topOffset = 40, onPin }: UseStickyOptions = {}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const suppressRef = useRef(true);
  const onPinRef = useRef(onPin);

  useEffect(() => {
    onPinRef.current = onPin;
  }, [onPin]);

  // Allow callbacks only after the initial observer fire has passed
  useEffect(() => {
    const timer = setTimeout(() => {
      suppressRef.current = false;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    // rootMargin shrinks the viewport top edge by topOffset, creating a
    // detection line at exactly the sticky threshold (e.g. top: 40px).
    // When the sentinel crosses above that line it becomes non-intersecting.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry || suppressRef.current) return;

        // Non-intersecting + above the threshold = scrolled past → pinned
        if (!entry.isIntersecting && entry.boundingClientRect.top < topOffset) {
          onPinRef.current?.();
        }
      },
      { rootMargin: `-${topOffset}px 0px 0px 0px`, threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.unobserve(sentinel);
  }, [topOffset]);

  return { sentinelRef };
}
