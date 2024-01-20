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
    <LayoutGroup id="navbar">
      <nav className="mb-12 text-base font-medium">
        <ul className="flex items-center gap-x-3">
          <li>
            <Link
              href="/"
              className={`relative pb-px${
                pathname === "/"
                  ? "text-text-primary transition"
                  : "text-inactive"
              }`}
            >
              Home
              {pathname === "/" && (
                <motion.div
                  transition={{
                    type: "keyframes",
                    duration: 0.25,
                  }}
                  layoutId="navbar"
                  className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600"
                ></motion.div>
              )}
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
              {pathname === "/portfolio" && (
                <motion.div
                  transition={{
                    type: "keyframes",
                    duration: 0.25,
                  }}
                  layoutId="navbar"
                  className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600"
                ></motion.div>
              )}
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
              {pathname === "/blog" && (
                <motion.div
                  transition={{
                    type: "keyframes",
                    duration: 0.25,
                  }}
                  layoutId="navbar"
                  className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600"
                ></motion.div>
              )}
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
              {pathname === "/guestbook" && (
                <motion.div
                  transition={{
                    type: "keyframes",
                    duration: 0.25,
                  }}
                  layoutId="navbar"
                  className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600"
                ></motion.div>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </LayoutGroup>
  );
}
