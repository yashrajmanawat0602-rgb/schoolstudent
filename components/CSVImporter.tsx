import { FileSpreadsheet } from "lucide-react";

export function CSVImporter() {
  return (
    <section className="card-surface">
      <div className="flex items-center gap-3">
        <div className="icon-tile">
          <FileSpreadsheet className="h-5 w-5" />
        </div>
        <div>
          <h3 className="card-title">CSV / Excel importer</h3>
          <p className="card-caption">
            Preview, validate and import only valid rows in a future phase.
          </p>
        </div>
      </div>
    </section>
  );
}
