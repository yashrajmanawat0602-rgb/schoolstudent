import { CalendarCheck2, TrendingUp } from "lucide-react";

export function StudentCard({
  name,
  className,
  attendance,
  score,
}: {
  name: string;
  className: string;
  attendance: string;
  score: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-card dark:border-slate-800">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h4 className="truncate text-sm font-extrabold text-navy-950 dark:text-white">{name}</h4>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{className}</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-50 text-navy-700 dark:bg-navy-950 dark:text-navy-200">
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
            <CalendarCheck2 className="h-3 w-3" />
            Attendance
          </div>
          <p className="mt-1 text-sm font-black text-success">{attendance}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-2 dark:bg-slate-800">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Score</div>
          <p className="mt-1 text-sm font-black text-navy-700 dark:text-navy-200">{score}</p>
        </div>
      </div>
    </article>
  );
}
