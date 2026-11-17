import { Megaphone } from "lucide-react";

export function AnnouncementCard({
  title = "Unit Test 2 timetable published",
  date = "17 Nov 2026",
}: {
  title?: string;
  date?: string;
}) {
  return (
    <article className="card-surface">
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-warm/20 text-warning">
          <Megaphone className="h-5 w-5" />
        </div>
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{date}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Demo announcement content. Real audience and permissions will be handled in later phases.
          </p>
        </div>
      </div>
    </article>
  );
}
