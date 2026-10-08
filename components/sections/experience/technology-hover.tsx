"use client";

import { useState } from "react";

import {
  technologyIcons,
  type TechnologyName,
} from "./technology-icons";

type TechnologyHoverProps = {
  name: TechnologyName;
};

export function TechnologyHover({
  name,
}: TechnologyHoverProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative inline-flex items-center rounded-full border border-border bg-muted p-1 text-xs text-muted-foreground shadow-sm transition-shadow duration-300 hover:shadow-md"
      style={{
        zIndex: hovered ? 20 : 1,
      }}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        <span className="h-4 w-4">
          {technologyIcons[name]}
        </span>
      </span>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateColumns: hovered ? "1fr" : "0fr",
          opacity: hovered ? 1 : 0,
        }}
      >
        <span
          className="overflow-hidden whitespace-nowrap transition-[padding] duration-300"
          style={{
            paddingLeft: hovered ? "4px" : "0px",
            paddingRight: hovered ? "7px" : "0px",
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}