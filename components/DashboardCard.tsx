type Tone = "blue" | "green" | "yellow" | "purple";

const tones: Record<Tone, string> = {
  blue: "bg-navy-50 text-navy-700 dark:bg-navy-950 dark:text-navy-200",
  green: "bg-success/10 text-success",
  yellow: "bg-warm/20 text-warning",
  purple: "bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-300",
};

export function DashboardCard({
  title,
  value,
  caption,
  icon,
  tone,
}: {
  title: string;
  value: string;
  caption: string;
  icon: React.ReactNode;
  tone: Tone;
}) {
  return (
    <article className="card-surface">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <p className="mt-3 text-3xl font-black tracking-tight text-navy-950 dark:text-white">
            {value}
          </p>
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${tones[tone]}`}>
          {icon}
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">{caption}</p>
    </article>
  );
}
