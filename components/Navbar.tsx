"use client";

import { Moon, ShieldCheck, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("schoolconnect-theme", next ? "dark" : "light");
    setDark(next);
  }

  useEffect(() => {
    const saved = localStorage.getItem("schoolconnect-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-paper/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label="SCHOOLCONNECT home">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-navy-700 text-white shadow-lg shadow-navy-700/20">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black tracking-[0.14em] text-navy-950 dark:text-white">
              SCHOOLCONNECT
            </span>
            <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
              One School. One Platform.
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-warm/50 bg-warm/15 px-3 py-1.5 text-xs font-bold text-warning sm:inline-flex">
            DEMO MODE
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-navy-800 transition hover:bg-navy-50 dark:border-slate-800 dark:bg-slate-900 dark:text-navy-100 dark:hover:bg-navy-950"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
