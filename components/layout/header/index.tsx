"use client";
import { useEffect, useState } from "react";
import { SearchDialog } from "@/components/layout/search-dialog";
import { HeaderNavigation } from "./navigation";
import { SearchTrigger } from "./search-trigger";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isShortcut) {
        event.preventDefault();
        setSearchOpen(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="relative h-15">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-border"
        />

        <div className="flex h-full items-center justify-between px-4">
          <HeaderNavigation />

          <div className="flex items-center">
            <SearchTrigger onClick={() => setSearchOpen(true)} />

            <div
              aria-hidden="true"
              className="ml-3 mr-1 h-5 w-px self-center bg-border"
            />

            <ThemeToggle />
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
