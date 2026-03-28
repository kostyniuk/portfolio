"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type SocialItemMotionProps = {
  children: ReactNode;
};

function SocialItemMotion({ children }: SocialItemMotionProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
}

export { SocialItemMotion };
