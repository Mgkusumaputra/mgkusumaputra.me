"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useSettings } from "@/hooks/useSettings";
import type { Mode } from "@/contexts/settingsContext";
import {
  ThemeToggleButton,
  useThemeTransition,
} from "@/components/ui/shadcn-io/theme-toggle-button";
const ThemeTogglePositionsDemo = () => {
  const { setTheme } = useTheme();
  const { settings, updateSettings } = useSettings();
  const { startTransition } = useThemeTransition();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleThemeToggle = useCallback(() => {
    const newMode: Mode = settings.mode === "dark" ? "light" : "dark";

    startTransition(() => {
      const updatedSettings = {
        ...settings,
        mode: newMode,
        theme: {
          ...settings.theme,
          styles: {
            light: settings.theme.styles?.light || {},
            dark: settings.theme.styles?.dark || {},
          },
        },
      };
      updateSettings(updatedSettings);
      setTheme(newMode);
    });
  }, [settings, updateSettings, setTheme, startTransition]);
  const currentTheme =
    settings.mode === "system" ? "light" : (settings.mode as "light" | "dark");
  if (!mounted) {
    return null;
  }
  return (
    <div className="grid grid-cols-3 gap-4 p-8 max-w-md mx-auto">
      {/* Top row */}
      <div className="flex flex-col items-center gap-2">
        <ThemeToggleButton
          theme={currentTheme}
          onClick={handleThemeToggle}
          variant="circle"
          start="top-left"
        />
        <span className="text-xs text-muted-foreground">Top Left</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <ThemeToggleButton
          theme={currentTheme}
          onClick={handleThemeToggle}
          variant="circle"
          start="center"
        />
        <span className="text-xs text-muted-foreground">Center</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <ThemeToggleButton
          theme={currentTheme}
          onClick={handleThemeToggle}
          variant="circle"
          start="top-right"
        />
        <span className="text-xs text-muted-foreground">Top Right</span>
      </div>
      {/* Middle row - empty spaces for visual balance */}
      <div></div>
      <div></div>
      <div></div>
      {/* Bottom row */}
      <div className="flex flex-col items-center gap-2">
        <ThemeToggleButton
          theme={currentTheme}
          onClick={handleThemeToggle}
          variant="circle"
          start="bottom-left"
        />
        <span className="text-xs text-muted-foreground">Bottom Left</span>
      </div>

      <div></div>

      <div className="flex flex-col items-center gap-2">
        <ThemeToggleButton
          theme={currentTheme}
          onClick={handleThemeToggle}
          variant="circle"
          start="bottom-right"
        />
        <span className="text-xs text-muted-foreground">Bottom Right</span>
      </div>
    </div>
  );
};
export default ThemeTogglePositionsDemo;

