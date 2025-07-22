"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#ff0066] bg-transparent text-[#ff0066]">
        <span className="sr-only">Loading theme toggle</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`
        relative inline-flex h-10 w-10 items-center justify-center rounded-lg
        border-2 border-[#ff0066] transition-colors duration-200
        ${theme === 'dark' 
          ? 'bg-[#ff0066] text-white hover:bg-[#ff3385] hover:border-[#ff3385]' 
          : 'bg-transparent text-[#ff0066] hover:bg-[#ff0066] hover:text-white'
        }
      `}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
} 