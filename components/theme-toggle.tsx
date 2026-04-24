"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { useSound } from "@/hooks/use-sound";
import { unlockAudioContext } from "@/lib/sound-engine";
import { switchOnSound } from "@/lib/switch-on";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [play] = useSound(switchOnSound, { volume: 0.5 });

  function toggleTheme(theme: string) {
    unlockAudioContext();
    play();
    if (!document.startViewTransition) {
      setTheme(theme);
      return;
    }

    document.startViewTransition(() => setTheme(theme));
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => toggleTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex size-8 cursor-pointer items-center justify-center rounded-full border border-black/[0.08] bg-black/[0.02] backdrop-blur-sm transition-colors duration-300 hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Sun className="size-4 text-foreground" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon className="size-4 text-foreground" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export { ThemeToggle };
