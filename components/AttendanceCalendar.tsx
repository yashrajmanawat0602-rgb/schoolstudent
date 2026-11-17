export function AttendanceCalendar() {
  const days = ["P", "P", "P", "A", "P", "P", "L", "P", "P", "P", "P", "P", "P", "A"];

  return (
    <div className="card-surface">
      <div className="mb-4">
        <h3 className="card-title">Attendance preview</h3>
        <p className="card-caption">Calendar component shell for Phase 1.</p>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className={`flex h-9 items-center justify-center rounded-lg text-xs font-black ${
              day === "P"
                ? "bg-success/10 text-success"
                : day === "A"
                  ? "bg-danger/10 text-danger"
                  : "bg-warm/20 text-warning"
            }`}
            aria-label={`Day ${index + 1}: ${day}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
