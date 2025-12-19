"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrowLeftIcon";
import { ThemeToggleButton } from "./themeToggle";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  return (
    <nav className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {pathname !== "/" && !pathname.startsWith("/writing/") && (
          <Link href="/" aria-label="Go home" className="cursor-pointer">
            <ArrowLeftIcon size={20} />
          </Link>
        )}

        {pathname.startsWith("/writing/") && (
          <Link
            href="/writing"
            aria-label="Back to writing"
            className="cursor-pointer text-sm text-secondary hover:opacity-75"
          >
            cd ../writing
          </Link>
        )}
      </div>

      <ThemeToggleButton theme={resolvedTheme as "light" | "dark"} />
    </nav>
  );
}

