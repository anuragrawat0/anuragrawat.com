type SearchTriggerProps = {
  onClick: () => void;
};

export function SearchTrigger({ onClick }: SearchTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open portfolio search (Ctrl+K)"
      className="group/button inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full px-2.5 text-muted-foreground outline-none transition-all hover:bg-background hover:text-muted-foreground active:scale-[0.98] sm:border sm:border-border sm:bg-background sm:shadow-none"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="size-4"
      >
        <path
          d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>

      <span className="hidden items-center gap-1 sm:flex">
        <kbd className="inline-flex h-5 min-w-6 items-center justify-center rounded-sm bg-black/5 px-1 font-sans text-sm font-normal leading-none text-muted-foreground shadow-[inset_0_-1px_2px] shadow-black/10 dark:bg-white/10 dark:shadow-white/10">
          Ctrl
        </kbd>
        <kbd className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-black/5 px-1 font-sans text-sm font-normal leading-none text-muted-foreground shadow-[inset_0_-1px_2px] shadow-black/10 dark:bg-white/10 dark:shadow-white/10">
          K
        </kbd>
      </span>
    </button>
  );
}