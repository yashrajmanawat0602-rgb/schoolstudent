export function PerformanceChart() {
  const points = [42, 58, 54, 68, 72, 81, 88];

  return (
    <div className="card-surface">
      <div className="mb-5">
        <h3 className="card-title">Performance trend</h3>
        <p className="card-caption">Chart placeholder using the final Recharts component API.</p>
      </div>
      <div className="flex h-40 items-end gap-2 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
        {points.map((height, index) => (
          <div key={index} className="flex flex-1 items-end">
            <div
              className="w-full rounded-t-xl bg-navy-500/80"
              style={{ height: `${height}%` }}
              aria-label={`Exam ${index + 1}: ${height}%`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
