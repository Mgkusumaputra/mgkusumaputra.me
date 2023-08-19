"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <nav className="mb-12 text-base font-medium">
      <ul className="flex items-center gap-x-3">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-text-primary underline underline-offset-4" : "text-inactive"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`${
              pathname === "/portfolio"
                ? "text-text-primary underline underline-offset-4"
                : "text-inactive"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`${
              pathname === "/blog"
                ? "text-text-primary underline underline-offset-4"
                : "text-inactive"
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/guestbook"
            className={`${
              pathname === "/guestbook"
                ? "text-text-primary underline underline-offset-4"
                : "text-inactive"
            }`}
          >
            Guestbook
          </Link>
        </li>
      </ul>
    </nav>
  );
}
