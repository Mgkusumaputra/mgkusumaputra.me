"use client";
import { MoonStar, Sun } from "lucide-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export interface ThemeToggleButtonProps {
  theme?: "light" | "dark";
  className?: string;
  onClick?: () => void;
}

export const ThemeToggleButton = ({
  theme = "light",
  className,
  onClick,
}: ThemeToggleButtonProps) => {
  const handleClick = useCallback(() => {
    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement("style");
    style.id = styleId;

    const css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: top 100};
          }
          @keyframes circle-expand {
            from {
              clip-path: circle(0% at 100% 0%);
            }
            to {
              clip-path: circle(150% at 100% 0%);
            }
          }
        }
      `;

    if (css) {
      style.textContent = css;
      document.head.appendChild(style);

      setTimeout(() => {
        const styleEl = document.getElementById(styleId);
        if (styleEl) {
          styleEl.remove();
        }
      }, 3000);
    }

    onClick?.();
  }, [onClick]);
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
      {theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <MoonStar className="h-5 w-5" />
      )}
    </button>
  );
};

export const useThemeTransition = () => {
  const startTransition = useCallback((updateFn: () => void) => {
    if ("startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);
  return { startTransition };
};

