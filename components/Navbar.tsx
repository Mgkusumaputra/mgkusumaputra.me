"use client";

import { LayoutGroup, motion } from "framer-motion";
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
            className={`relative pb-px${
              pathname === "/" ? "text-primary- transition" : "text-inactive"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`relative pb-px${
              pathname === "/portfolio"
                ? "text-text-primary transition"
                : "text-inactive"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`relative pb-px${
              pathname === "/blog"
                ? "text-text-primary transition"
                : "text-inactive"
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/guestbook"
            className={`relative pb-px${
              pathname === "/guestbook"
                ? "text-text-primary transition"
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
