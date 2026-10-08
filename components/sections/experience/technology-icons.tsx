import type { ReactNode } from "react";

export type TechnologyName =
  | "React"
  | "TypeScript"
  | "PostgreSQL"
  | "Docker";

export const technologyIcons: Record<TechnologyName, ReactNode> = {
  React: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="12" rx="9.5" ry="3.7" />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9.5"
        ry="3.7"
        transform="rotate(120 12 12)"
      />
      <circle
        cx="12"
        cy="12"
        r="1.4"
        fill="currentColor"
      />
    </svg>
  ),

  TypeScript: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="2"
        fill="currentColor"
      />
      <text
        x="12"
        y="16.4"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        TS
      </text>
    </svg>
  ),

  PostgreSQL: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.2 4.7c1.9-2 7.7-2 9.6 0 1.4 1.5 1.4 4.1.9 6.2-.3 1.5-1.2 2.8-2.2 3.6-.2 1.6-.5 3.1-1.5 4.1-.8.8-2.2 1-3 .1-.4-.4-.6-1-.7-1.6-.7.4-1.7.7-2.4.2-.8-.6-.6-1.9 0-2.6-.9-.5-1.8-1.2-2.4-2.2-.8-1.4-1-3.7-.6-5.5.3-1.1.8-1.8 2.3-2.3Zm.8 2c-.8.4-1.2 1.2-1.4 2.3-.3 1.5-.1 3.2.5 4.2.5.8 1.1 1.2 2.2 1.6l.9.3-.7.7c-.4.4-.7 1.1-.4 1.4.2.2.8-.1 1.2-.4l1.6-1.1-.1 1.7c0 .9.2 1.7.6 1.9.4.2.9 0 1.1-.2.6-.6.8-1.9 1-3.5l.1-.5.4-.3c1-.7 1.8-1.9 2.1-3.1.5-1.9.4-4.1-.5-5.1-1.4-1.6-6.9-1.6-8.6.1Z" />
    </svg>
  ),

  Docker: (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="3" y="9" width="4" height="4" rx="0.7" />
      <rect x="8" y="9" width="4" height="4" rx="0.7" />
      <rect x="13" y="9" width="4" height="4" rx="0.7" />
      <rect x="8" y="4" width="4" height="4" rx="0.7" />
      <rect x="13" y="4" width="4" height="4" rx="0.7" />
      <rect x="18" y="9" width="3" height="4" rx="0.7" />
      <path d="M3 14.2c2.1 2.7 5.1 4 9.1 4 4.3 0 7.7-1.6 9.1-4.7-1.3.4-2.5.3-3.4-.1-1.4.5-2.8.4-4-.2-1.7.7-3.4.7-5 0-1.9.7-3.9.5-5.8-.6Z" />
    </svg>
  ),
};