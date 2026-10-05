"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    const doc = document as Document & {
      startViewTransition?: (callback: () => void | Promise<void>) => {
        finished: Promise<void>;
      };
    };

    if (!doc.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    doc.startViewTransition(() => {
      setTheme(nextTheme);
    });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle mode"
      className="group/button relative inline-flex size-8 shrink-0 items-center justify-center rounded-[10px] border-none bg-transparent text-sm font-medium text-foreground outline-none transition-all hover:bg-muted active:scale-[0.98]"
    >
      <motion.svg
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
        className="size-4"
        initial={false}
        animate={{
          rotate: mounted && resolvedTheme === "dark" ? 180 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <path
          d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z"
          className="origin-center"
        />
      </motion.svg>
    </button>
  );
}