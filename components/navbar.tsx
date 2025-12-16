"use client";
import { ThemeToggleButton } from "./themeToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  return (
    <nav className="p-6 flex justify-end">
      <ThemeToggleButton theme={resolvedTheme as "light" | "dark"} />
    </nav>
  );
}

