"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Al montar, leemos el tema que el script inline ya aplicó al <html>.
  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* almacenamiento no disponible */
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className={`flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-900/10 hover:text-zinc-900 dark:text-white/90 dark:hover:bg-white/15 dark:hover:text-white ${className}`}
    >
      {/* Evitamos parpadeo del icono hasta conocer el tema */}
      <span className={theme === null ? "opacity-0" : "opacity-100"}>
        {isDark ? (
          // Sol
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              strokeLinecap="round"
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            />
          </svg>
        ) : (
          // Luna
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
