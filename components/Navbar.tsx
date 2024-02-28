"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/themeToggle";

export default function Navbar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <nav className="flex items-center justify-between mb-12 text-base font-medium">
      <ul className="flex items-center gap-x-3">
        <li>
          <Link
            href="/"
            className={`relative pb-px ${
              pathname === "/"
                ? "text-secondary-foreground"
                : "text-muted-foreground"
            }`}
          >
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`relative pb-px ${
              pathname === "/portfolio"
                ? "text-secondary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`relative pb-px ${
              pathname === "/blog" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/guestbook"
            className={`relative pb-px ${
              pathname === "/guestbook"
                ? "text-secondary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Guestbook
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
