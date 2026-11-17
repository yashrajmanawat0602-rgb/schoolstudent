import { UserRound } from "lucide-react";

export function UserProfile({
  name = "Demo Parent",
  role = "PARENT",
}: {
  name?: string;
  role?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 text-sm font-black text-navy-700 dark:bg-navy-900 dark:text-navy-100">
        <UserRound className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-extrabold text-navy-950 dark:text-white">{name}</p>
        <p className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
}
