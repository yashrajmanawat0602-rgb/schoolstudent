"use client";

import {
  BarChart3,
  Bell,
  BookOpenCheck,
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
  Home,
  Settings,
  UsersRound,
} from "lucide-react";
import { useState } from "react";

const items = [
  { label: "Overview", icon: Home },
  { label: "Students", icon: UsersRound },
  { label: "Marks", icon: BarChart3 },
  { label: "Attendance", icon: CalendarDays },
  { label: "Homework", icon: BookOpenCheck },
  { label: "Announcements", icon: Bell },
  { label: "Reports", icon: FileText },
  { label: "Timetable", icon: ClipboardList },
];

export function Sidebar() {
  const [active, setActive] = useState("Overview");

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-3 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-3 rounded-2xl bg-navy-50 p-4 dark:bg-navy-950">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy-700 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-navy-950 dark:text-white">
                Green Valley
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">DEMO SCHOOL</p>
            </div>
          </div>
        </div>

        <nav aria-label="Demo dashboard navigation" className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const selected = active === item.label;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(item.label)}
                className={`flex min-h-11 w-full items-center gap-3 rounded-2xl px-3 text-left text-sm font-bold transition ${
                  selected
                    ? "bg-navy-700 text-white shadow-md shadow-navy-700/10"
                    : "text-slate-600 hover:bg-navy-50 hover:text-navy-800 dark:text-slate-300 dark:hover:bg-navy-950 dark:hover:text-white"
                }`}
                aria-current={selected ? "page" : undefined}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
          <button
            type="button"
            className="flex min-h-11 w-full items-center gap-3 rounded-2xl px-3 text-left text-sm font-bold text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </div>
      </div>
    </aside>
  );
}
