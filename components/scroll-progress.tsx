"use client";

import { motion, useScroll } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 w-full z-2 pointer-events-none">
      {/* Faint track so you can see where the bar lives */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-foreground/10" />

      {/* Progress bar — solid foreground, tracks scroll 1:1 (no spring lag). */}
      <motion.div
        className="relative h-0.5 origin-left overflow-hidden bg-foreground
          shadow-[0_0_6px_color-mix(in_oklch,var(--foreground)_35%,transparent)]"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </div>
  );
}

export { ScrollProgress };
