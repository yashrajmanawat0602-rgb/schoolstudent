import { Filter } from "lucide-react";

export function FilterPanel() {
  return (
    <section className="card-surface">
      <div className="mb-5 flex items-center gap-3">
        <div className="icon-tile">
          <Filter className="h-5 w-5" />
        </div>
        <div>
          <h3 className="card-title">Quick filters</h3>
          <p className="card-caption">Designed for permission-aware results.</p>
        </div>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="field-label">Class / Section</span>
          <select className="field-control" defaultValue="10-A">
            <option>10-A</option>
            <option>9-B</option>
          </select>
        </label>

        <label className="block">
          <span className="field-label">Academic Session</span>
          <select className="field-control" defaultValue="2026-27">
            <option>2026-27</option>
            <option>2025-26</option>
          </select>
        </label>

        <button type="button" className="button-primary w-full">
          Apply filters
        </button>
      </div>
    </section>
  );
}
