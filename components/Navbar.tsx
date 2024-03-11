"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/ui/themeToggle";

import { navbarLinks } from "@/constant/component";

export default function Navbar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <nav className="flex items-center justify-between mb-12 text-base font-medium">
      <ul className="flex items-center gap-x-3">
        {navbarLinks.map((item: any, key: number) => (
          <li key={key}>
            <Link
              href={item.href}
              className={`relative pb-px hover:text-secondary-foreground hover:underline hover:underline-offset-4 hover:transition-all ${
                pathname === item.href
                  ? "text-secondary-foreground underline underline-offset-4"
                  : "text-muted-foreground"
              }`}
            >
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
