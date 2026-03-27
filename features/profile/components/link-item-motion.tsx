"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type LinkItemMotionProps = {
  children: ReactNode;
};

function LinkItemMotion({ children }: LinkItemMotionProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
}

export { LinkItemMotion };
