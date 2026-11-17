"use client";

import { Search } from "lucide-react";

export function SearchBar({ placeholder = "Search" }: { placeholder?: string }) {
  return (
    <label className="relative block w-full sm:max-w-xs">
      <span className="sr-only">{placeholder}</span>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        placeholder={placeholder}
        className="min-h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-ink outline-none transition placeholder:text-slate-400 focus:border-sky focus:bg-white focus:ring-4 focus:ring-sky/10 dark:border-slate-800 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900"
      />
    </label>
  );
}
