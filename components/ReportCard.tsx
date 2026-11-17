import { FileText } from "lucide-react";

export function ReportCard() {
  return (
    <section className="card-surface">
      <div className="flex items-center gap-3">
        <div className="icon-tile">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <h3 className="card-title">Digital report card</h3>
          <p className="card-caption">
            PDF generation will be connected to verified database data in a later phase.
          </p>
        </div>
      </div>
    </section>
  );
}
