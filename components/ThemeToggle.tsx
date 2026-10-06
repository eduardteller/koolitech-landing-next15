"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

// The no-flash script in app/layout.tsx applies the stored choice (or the
// OS preference) before first paint; this button flips and stores it.
const STORAGE_KEY = "theme";

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const isDark = () => document.documentElement.classList.contains("dark");

const ThemeToggle = () => {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Storage blocked — the choice just won't persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      className="inline-flex items-center gap-2 rounded-lg border border-ink px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-primary-tint"
    >
      {dark ? (
        <Sun size={14} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon size={14} strokeWidth={2} aria-hidden="true" />
      )}
      {dark ? "Hele režiim" : "Tume režiim"}
    </button>
  );
};

export default ThemeToggle;
