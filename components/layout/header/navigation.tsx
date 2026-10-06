import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Work", href: "/#work" },
  { name: "Blog", href: "/#blog" },
];

export function HeaderNavigation() {
  return (
    <nav aria-label="Main navigation" className="flex items-center gap-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="font-sans text-sm font-medium tracking-wide text-foreground transition-opacity duration-200 hover:opacity-100 opacity-75"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}