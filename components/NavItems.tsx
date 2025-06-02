"use client";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Companions",
    href: "/companions",
  },
  {
    name: "Journey",
    href: "/my-journey",
  },
];

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 sm:gap-10">
      {navItems.map(({ name, href }) => (
      <Link
        href={href}
        key={name}
        className={cn(
        pathname === href ? "text-primary" : "text-muted-foreground",
        "font-semibold transition-colors hover:text-primary",
        )}
      >
        {name}
      </Link>
      ))}
    </nav>
  );
};

export default NavItems;
