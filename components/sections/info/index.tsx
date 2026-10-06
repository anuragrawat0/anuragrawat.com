"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Check,
  Clock3,
  Copy,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { CurrentLocalTime } from "./current-local-time";

type InfoItem = {
  icon: LucideIcon;
  value: string;
  href?: string;
  copyValue?: string;
  ariaLabel?: string;
  timeZone?: string;
};

const info: InfoItem[] = [
  {
    icon: BriefcaseBusiness,
    value: "Freelancer",
  },
  {
    icon: MapPin,
    value: "Dehradun, Uttarakhand, India",
    href: "https://www.google.com/maps/search/?api=1&query=Dehradun%2C%20Uttarakhand%2C%20India",
    ariaLabel: "Location: Dehradun, Uttarakhand, India",
  },
  {
    icon: Clock3,
    value: "Local time",
    timeZone: "Asia/Kolkata",
  },
  {
    icon: Phone,
    value: "+91 8532809407",
    href: "tel:+918532809407",
    copyValue: "+91 8532809407",
  },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : "Copy phone number"}
      title={copied ? "Copied" : "Copy"}
      onClick={copyToClipboard}
      className="inline-flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-opacity hover:bg-muted hover:text-foreground focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:opacity-100 group-has-focus-visible:opacity-100 pointer-coarse:opacity-100"
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}

export function InfoSection() {
  return (
    <section className="relative ">
      <div className="relative z-10 grid gap-x-4 gap-y-2.5 p-4 sm:grid-cols-2">
        {info.map((item, index) => {
          const Icon = item.icon;

          if (item.timeZone) {
            return (
              <CurrentLocalTime
                key={item.value}
                timeZone={item.timeZone}
              />
            );
          }

          return (
            <div
              key={item.value}
              className={`group flex items-center gap-4 font-mono text-sm ${
                index % 2 === 1 ? "sm:pl-2" : ""
              }`}
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-border/50 ring-offset-1 ring-offset-background">
                <Icon className="size-4" aria-hidden="true" />
              </div>

              <p className="flex min-w-0 items-center text-balance">
                {item.href ? (
                  <a
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="link no-underline underline-offset-4 hover:underline focus-visible:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>

              {item.copyValue && <CopyButton value={item.copyValue} />}
            </div>
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 hidden w-px -translate-x-2.25 border-r border-dashed border-border sm:block"
      />
    </section>
  );
}
