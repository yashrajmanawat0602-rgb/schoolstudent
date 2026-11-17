export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 dark:bg-slate-800/80">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="whitespace-nowrap px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-500 dark:text-slate-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${row.join("-")}-${rowIndex}`}
              className="border-t border-slate-100 dark:border-slate-800"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className="whitespace-nowrap px-4 py-4 font-semibold text-slate-700 dark:text-slate-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
