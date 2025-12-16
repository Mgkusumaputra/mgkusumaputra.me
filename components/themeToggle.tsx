"use client";
import { MoonStar, Sun } from "lucide-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const ThemeToggleButton = ({
  theme = "light",
  className,
}: {
  theme?: "light" | "dark";
  className?: string;
}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleClick = useCallback(() => {
    // Only inject the style once
    if (!document.getElementById("theme-circle-animation")) {
      const style = document.createElement("style");
      style.id = "theme-circle-animation";
      style.textContent = `
        @keyframes circle-expand {
          from {
            clip-path: circle(0% at 100% 0%);
          }
          to {
            clip-path: circle(150% at 100% 0%);
          }
        }
        ::view-transition-old(root) { animation: none; }
        ::view-transition-new(root) { 
          animation: circle-expand 0.4s ease-out;
          transform-origin: top 100%;
        }
      `;
      document.head.appendChild(style);
    }

    if ("startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => {
        setTheme(isDark ? "light" : "dark");
      });
    } else {
      setTheme(isDark ? "light" : "dark");
    }
  }, [isDark, setTheme]);

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden transition-all",
        "cursor-pointer",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {isDark ? (
        <MoonStar className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-300" />
      )}
    </button>
  );
};

