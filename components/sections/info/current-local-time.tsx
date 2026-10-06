"use client";

import { useEffect, useId, useState } from "react";

type ClockIds = {
  time: string;
  diff: string;
  hands: string;
};

type CurrentLocalTimeProps = {
  timeZone: string;
};

export function CurrentLocalTime({ timeZone }: CurrentLocalTimeProps) {
  const uid = useId();
  const ids = {
    time: `local-time-${uid}`,
    diff: `local-time-diff-${uid}`,
    hands: `local-time-hands-${uid}`,
  };
  const [timeString, setTimeString] = useState("");
  const [diffText, setDiffText] = useState("");
  const [handsPath, setHandsPath] = useState(() => clockHandsPath(12, 0));

  useEffect(() => {
    const updateTime = () => {
      const { time, hour, minute, diff } = computeClock(timeZone);

      setTimeString(time);
      setHandsPath(clockHandsPath(hour, minute));
      setDiffText(diff);
    };

    updateTime();
    const interval = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="group flex items-center gap-4 font-mono text-sm">
      <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-border/50 ring-offset-1 ring-offset-background">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-4"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            id={ids.hands}
            d={handsPath}
            suppressHydrationWarning
          />
        </svg>
      </div>

      <p className="flex min-w-0 items-center text-balance">
        <span id={ids.time} suppressHydrationWarning>
          {timeString}
        </span>
        <span
          id={ids.diff}
          className="ml-2 text-muted-foreground"
          aria-hidden="true"
          suppressHydrationWarning
        >
          {diffText}
        </span>
      </p>

      <InlineScript html={getInlineScript(timeZone, ids)} />
    </div>
  );
}

function clockHandsPath(hour: number, minute: number) {
  const h = hour % 12;
  const round = (value: number) => Math.round(value * 1000) / 1000;
  const minuteAngle = (minute / 60) * 2 * Math.PI;
  const hourAngle = ((h + minute / 60) / 12) * 2 * Math.PI;
  const hx = round(12 + 3.6 * Math.sin(hourAngle));
  const hy = round(12 - 3.6 * Math.cos(hourAngle));
  const mx = round(12 + 6 * Math.sin(minuteAngle));
  const my = round(12 - 6 * Math.cos(minuteAngle));

  return `M12 12 L${hx} ${hy} M12 12 L${mx} ${my}`;
}

function computeClock(timeZone: string) {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);
  const hour = parseInt(time, 10);
  const minute = parseInt(time.slice(3), 10);
  const viewerOffset = -now.getTimezoneOffset();
  const targetOffset =
    (new Date(now.toLocaleString("en-US", { timeZone })).getTime() -
      new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) /
    60_000;
  const hoursDiff = Math.abs(targetOffset - viewerOffset) / 60;
  const diff =
    hoursDiff < 1
      ? " // same time"
      : ` // ${Math.floor(hoursDiff)}h ${targetOffset > viewerOffset ? "ahead" : "behind"}`;

  return { time, hour, minute, diff };
}

function runClockScript(
  timeZone: string,
  ids: ClockIds,
  compute: typeof computeClock,
  handsPath: typeof clockHandsPath,
) {
  try {
    const { time, diff, hour, minute } = compute(timeZone);
    const timeElement = document.getElementById(ids.time);
    const diffElement = document.getElementById(ids.diff);
    const handsElement = document.getElementById(ids.hands);

    if (timeElement) timeElement.textContent = time;
    if (diffElement) diffElement.textContent = diff;
    if (handsElement) handsElement.setAttribute("d", handsPath(hour, minute));
  } catch {
    // The React effect remains the fallback if the pre-hydration script fails.
  }
}

function getInlineScript(timeZone: string, ids: ClockIds) {
  return `(${runClockScript.toString()})(${JSON.stringify(timeZone)},${JSON.stringify(ids)},${computeClock.toString()},${clockHandsPath.toString()})`;
}

function InlineScript({ html }: { html: string }) {
  return <script dangerouslySetInnerHTML={{ __html: html }} />;
}
