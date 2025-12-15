"use client";
import { useCallback } from "react";
import { ThemeToggleButton, useThemeTransition } from "./themeToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const { startTransition } = useThemeTransition();

  const isDark = resolvedTheme === "dark";

  const handleThemeToggle = useCallback(() => {
    startTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });
  }, [setTheme, isDark, startTransition]);
  return (
    <nav className="p-6 flex justify-end">
      <ThemeToggleButton
        onClick={handleThemeToggle}
        theme={resolvedTheme as "light" | "dark"}
      />
    </nav>
  );
}

