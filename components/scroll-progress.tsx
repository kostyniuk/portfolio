"use client";

import { motion, useScroll } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  console.log({ scrollYProgress });

  return (
    <motion.div
      className="fixed h-2 top-0 left-0 bg-foreground w-full origin-left z-2"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}

export { ScrollProgress };
