"use client";

import { Bell } from "lucide-react";

export function NotificationBell({ count = 0 }: { count?: number }) {
  return (
    <button
      type="button"
      className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-navy-800 shadow-sm transition hover:bg-navy-50 dark:border-slate-800 dark:bg-slate-900 dark:text-navy-100 dark:hover:bg-navy-950"
      aria-label={`${count} unread notifications`}
    >
      <Bell className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-danger px-1 text-[10px] font-black text-white dark:border-slate-900">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
