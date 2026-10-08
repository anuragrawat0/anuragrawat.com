"use client";

import { BriefcaseBusiness, ChevronsUpDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { TechnologyHover } from "./technology-hover";

const technologies = [
  "React",
  "TypeScript",
  "PostgreSQL",
  "Docker",
] as const;

export function ExperienceEntry() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative px-3 py-5">
      {/* Continuous timeline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[34px] left-[43px] top-[34px] w-px bg-border"
      />

      {/* Experience trigger */}
      <button
        type="button"
         onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="
          group relative block w-full rounded-lg text-left
          outline-none
          before:absolute
          before:-inset-y-1
          before:left-[3.5rem]
          before:right-0
          before:-z-1
          before:rounded-lg
          before:transition-colors
          before:duration-300
          before:ease-out
           hover:before:bg-rose-50/35
           dark:hover:before:bg-rose-950/10
          focus-visible:before:ring-2
          focus-visible:before:ring-ring/50
        "
      >
        <div className="flex items-start justify-between gap-6 px-2 py-2">
          {/* Left side */}
          <div className="flex min-w-0 flex-1 items-start gap-4">
            {/* Freelancing icon */}
            <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-[10px] border-2 border-border bg-background p-[2px]">
              <div className="flex size-full items-center justify-center rounded-[8px] border border-border text-muted-foreground">
                <BriefcaseBusiness
                  className="size-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Title */}
            <div className="flex min-w-0 flex-col gap-1 pt-0.5">
              <h3 className="truncate text-[1.2rem] font-medium leading-tight">
                Freelance
              </h3>

              <p className="text-base text-muted-foreground">
                Full-Stack Developer
              </p>

              <div className="mt-1 flex -space-x-1">
                {technologies.map((technology) => (
                  <TechnologyHover
                    key={technology}
                    name={technology}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex shrink-0 items-start gap-3">
            <div className="flex flex-col items-end gap-1 text-right">
              <p className="text-base font-medium">
                Uttarakhand, India (Remote)
              </p>

              <p className="text-base text-muted-foreground">
                Sep, 2025 - Jan, 2026
              </p>

              {/* Expand icon */}
              <motion.span
                className="mt-0.5 flex size-4 items-center justify-center text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                animate={{
                  rotate: open ? 180 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
                aria-hidden="true"
              >
                <ChevronsUpDown className="size-4" />
              </motion.span>
            </div>
          </div>
        </div>
      </button>

      {/* Expandable bullets */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          height: {
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          },
          opacity: {
            duration: 0.2,
          },
        }}
        className="overflow-hidden"
      >
        <ul className="ml-[74px] mt-4 list-disc space-y-4 pl-3 text-[1.05rem] font-medium leading-7 text-muted-foreground">
          <li className="ps-2">
            Built a scalable design system for consistency
            and efficiency.
          </li>

          <li className="ps-2">
            Built an order management website with
            real-time delivery tracking.
          </li>

          <li className="ps-2">
            Developed an e-commerce site for bird&apos;s
            nest products.
          </li>

          <li className="ps-2">
            Created a map to display monitoring station
            data.
          </li>
        </ul>
      </motion.div>

      {/* Looking for next opportunity */}
      <div className="relative mt-5 ml-2 flex items-center gap-4">
        {/* Question mark box */}
        <div
          className="
            opportunity-glow
            relative
            z-10
            flex
            size-11
            shrink-0
            items-center
            justify-center
            rounded-[10px]
            border
            border-border
            bg-background
            p-[2px]
          "
        >
          <div className="flex size-full items-center justify-center rounded-[8px] border border-border bg-background text-xl font-semibold text-foreground">
            ?
          </div>
        </div>

          <div className="flex items-center">
            <p className="text-[1.2rem] font-medium leading-tight">
              Looking for my next opportunity
            </p>
          </div>
      </div>
    </div>
  );
}
