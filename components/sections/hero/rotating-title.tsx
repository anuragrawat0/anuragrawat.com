"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type RotatingTitleProps = {
  titles: string[];
  interval?: number;
};

export function RotatingTitle({
  titles,
  interval = 5000,
}: RotatingTitleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (titles.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % titles.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [titles.length, interval]);

  if (!titles.length) return null;

  return (
    <div className="relative h-5 overflow-hidden text-sm text-foreground font-sans opacity-75">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={titles[index]}
          className="absolute inset-0 block"
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}