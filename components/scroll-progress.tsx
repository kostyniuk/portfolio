"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "motion/react";

const SQUARE_PX = 8; // w-2
const GAP_PX = 4; // gap-1

function CommitSquare({
  index,
  total,
  scrollYProgress,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const threshold = index / total;

  const opacity = useTransform(scrollYProgress, [threshold, threshold + 0.005], [0, 1]);
  const scale = useTransform(scrollYProgress, [threshold, threshold + 0.005], [0.3, 1]);

  return <motion.div style={{ opacity, scale }} className="h-2 w-2 shrink-0 rounded-[2px] bg-[#39d353]" />;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const recalculate = () => {
      // How many squares + gaps fit exactly into the container width?
      // total = n * SQUARE_PX + (n - 1) * GAP_PX  →  n = floor((width + GAP) / (SQUARE + GAP))
      setCount(Math.floor((el.offsetWidth + GAP_PX) / (SQUARE_PX + GAP_PX)));
    };

    recalculate();

    const ro = new ResizeObserver(recalculate);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed top-1.5 left-0 z-50 w-full select-none px-3">
      <div ref={containerRef} className="flex items-center gap-1">
        {Array.from({ length: count }, (_, i) => (
          <CommitSquare key={i} index={i} total={count} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}

export { ScrollProgress };
