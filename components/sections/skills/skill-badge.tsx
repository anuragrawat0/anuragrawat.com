import type { IconType } from "react-icons";

type SkillBadgeProps = {
  name: string;
  icon: IconType;
  href?: string;
};

export function SkillBadge({
  name,
  icon: Icon,
  href,
}: SkillBadgeProps) {
  const content = (
    <>
      <span className="text-muted-foreground transition-colors group-hover:text-foreground">
        <Icon className="size-4" aria-hidden="true" />
      </span>

      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground whitespace-nowrap">
        {name}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex min-w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[8px] border-2 border-border bg-transparent px-2 py-1 transition-all duration-300 hover:border-foreground/25 hover:bg-muted hover:text-foreground select-none"
      >
        {content}
      </a>
    );
  }

  return (
    <span className="group relative flex min-w-fit cursor-default items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-border bg-transparent px-2 py-1 transition-all duration-300 select-none">
      {content}
    </span>
  );
}