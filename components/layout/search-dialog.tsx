"use client";
import * as React from "react";
import { Search } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const searchItems = [
  {
    title: "Home",
    description: "Go to the homepage",
    href: "/",
  },
  {
    title: "Projects",
    description: "View my projects",
    href: "/#projects",
  },
  {
    title: "Work",
    description: "View my experience",
    href: "/#work",
  },
  {
    title: "Blog",
    description: "Read my blog posts",
    href: "/#blog",
  },
];

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  function handleSelect(href: string) {
    onOpenChange(false);
    window.location.href = href;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        onEscapeKeyDown={()=> onOpenChange(false)}
        className="top-[20vh] max-w-[calc(100%-2rem)] translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-screen-sm"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search Portfolio</DialogTitle>

          <DialogDescription>
            Search across projects, work, and blog posts.
          </DialogDescription>
        </DialogHeader>

        <Command className="bg-popover font-sans">
          <div className="flex items-center gap-2 border-b border-border/60 px-3 py-3">
            <Search className="size-5 shrink-0 text-muted-foreground" />

            <CommandInput
              placeholder="Search portfolio"
              className="h-auto border-0 bg-transparent p-0 text-base outline-none"
            />

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close search"
              className="ml-auto hidden h-7 shrink-0 items-center rounded-md border border-border px-2 font-mono text-[0.65rem] text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              ESC
            </button>
          </div>

          <CommandList className="max-h-[min(28rem,60vh)] p-1">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigate">
              {searchItems.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.title} ${item.description}`}
                  onSelect={() => handleSelect(item.href)}
                  className="rounded-lg px-2.5 py-2"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-foreground">
                      {item.title}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>

          <div className="border-t border-border/60 px-3 py-2.5">
            <span className="text-xs text-muted-foreground">
              Search across my portfolio
            </span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
