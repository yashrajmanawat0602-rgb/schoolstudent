import { BookOpenCheck, Clock3 } from "lucide-react";

export function HomeworkCard({
  title = "Read Chapter 4 and complete practice questions",
  status = "Pending",
}: {
  title?: string;
  status?: "Completed" | "Pending" | "Overdue";
}) {
  const statusClass = {
    Completed: "bg-success/10 text-success",
    Pending: "bg-warm/20 text-warning",
    Overdue: "bg-danger/10 text-danger",
  }[status];

  return (
    <article className="card-surface">
      <div className="flex gap-3">
        <div className="icon-tile shrink-0">
          <BookOpenCheck className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="card-title">{title}</h3>
            <span className={`rounded-full px-2.5 py-1 text-xs font-black ${statusClass}`}>
              {status}
            </span>
          </div>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Clock3 className="h-3.5 w-3.5" />
            Due tomorrow
          </p>
        </div>
      </div>
    </article>
  );
}
