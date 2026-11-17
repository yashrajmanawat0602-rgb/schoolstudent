import { UploadCloud } from "lucide-react";

export function FileUploader() {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 text-center transition hover:border-sky hover:bg-sky/5 dark:border-slate-700 dark:bg-slate-800/50">
      <UploadCloud className="h-8 w-8 text-navy-600 dark:text-navy-300" />
      <span className="mt-3 text-sm font-extrabold text-navy-950 dark:text-white">
        Upload a file
      </span>
      <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        Validation and secure object storage are added in later phases.
      </span>
      <input type="file" className="sr-only" />
    </label>
  );
}
