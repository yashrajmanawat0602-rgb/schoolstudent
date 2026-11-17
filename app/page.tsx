import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { StudentCard } from "@/components/StudentCard";
import { NotificationBell } from "@/components/NotificationBell";
import { SearchBar } from "@/components/SearchBar";
import { FilterPanel } from "@/components/FilterPanel";
import { DataTable } from "@/components/DataTable";

const demoStudents = [
  { name: "Aarav Sharma", className: "10-A", attendance: "94%", score: "88%" },
  { name: "Ananya Verma", className: "10-A", attendance: "97%", score: "92%" },
  { name: "Kabir Mehta", className: "9-B", attendance: "89%", score: "81%" },
];

const recentRows = [
  ["Mathematics", "Unit Test 2", "88%", "A"],
  ["Science", "Unit Test 2", "91%", "A+"],
  ["English", "Unit Test 2", "84%", "A"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-ink dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <Sidebar />

          <div className="min-w-0 space-y-8">
            <section className="paper-grid relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 sm:p-8 lg:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky/10 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-navy-700 dark:border-navy-800 dark:bg-navy-950 dark:text-navy-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    Modern school communication
                  </div>

                  <h1 className="max-w-3xl text-4xl font-black tracking-tight text-navy-950 dark:text-white sm:text-5xl lg:text-6xl">
                    Your Child&apos;s School Life, Connected.
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                    Marks. Attendance. Homework. Achievements. Everything in
                    one secure place.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a className="button-primary" href="#demo-dashboard">
                      Parent Login
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a className="button-secondary" href="#demo-dashboard">
                      Teacher Login
                    </a>
                    <a className="button-ghost" href="#demo-dashboard">
                      School Admin
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="inline-flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-success" />
                      Privacy-first architecture
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <ClipboardCheck className="h-4 w-4 text-success" />
                      Parent-friendly reports
                    </span>
                  </div>
                </div>

                <SchoolIllustration />
              </div>
            </section>

            <section id="demo-dashboard" className="space-y-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="section-kicker">DEMO PREVIEW</p>
                  <h2 className="section-title">A school dashboard built for clarity</h2>
                </div>
                <NotificationBell count={4} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <DashboardCard
                  title="Overall Performance"
                  value="88%"
                  caption="+4.2% from last exam"
                  icon={<TrendingUp className="h-5 w-5" />}
                  tone="blue"
                />
                <DashboardCard
                  title="Attendance"
                  value="94%"
                  caption="188 / 200 working days"
                  icon={<CalendarDays className="h-5 w-5" />}
                  tone="green"
                />
                <DashboardCard
                  title="Homework"
                  value="8 / 10"
                  caption="2 items need attention"
                  icon={<BookOpenCheck className="h-5 w-5" />}
                  tone="yellow"
                />
                <DashboardCard
                  title="Achievements"
                  value="12"
                  caption="3 added this month"
                  icon={<GraduationCap className="h-5 w-5" />}
                  tone="purple"
                />
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
                <div className="card-surface">
                  <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="card-title">Student overview</h3>
                      <p className="card-caption">
                        Fictional DEMO records for Green Valley Public School.
                      </p>
                    </div>
                    <SearchBar placeholder="Search students" />
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {demoStudents.map((student) => (
                      <StudentCard key={student.name} {...student} />
                    ))}
                  </div>
                </div>

                <FilterPanel />
              </div>

              <div className="card-surface overflow-hidden">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="card-title">Recent exam performance</h3>
                    <p className="card-caption">Demo data only.</p>
                  </div>
                  <div className="rounded-xl bg-success/10 px-3 py-1 text-xs font-bold text-success">
                    Improving
                  </div>
                </div>
                <DataTable
                  headers={["Subject", "Exam", "Percentage", "Grade"]}
                  rows={recentRows}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={<UsersRound className="h-5 w-5" />}
                  title="One connected school"
                  text="Admin, teacher and parent workflows share one clear source of truth."
                />
                <FeatureCard
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  title="Built for busy families"
                  text="Important updates are designed to be understood in seconds."
                />
                <FeatureCard
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Privacy by design"
                  text="Later phases will enforce server-side role and student-level authorization."
                />
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/70 px-4 py-8 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SCHOOLCONNECT. Demo interface — fictional data only.</p>
          <p>One School. One Platform. Complete Connection.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="card-surface">
      <div className="icon-tile mb-4">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function SchoolIllustration() {
  return (
    <div
      aria-label="Illustration of a connected school dashboard"
      role="img"
      className="relative mx-auto w-full max-w-md"
    >
      <svg viewBox="0 0 520 390" className="h-auto w-full" fill="none">
        <rect x="28" y="28" width="464" height="326" rx="28" className="fill-navy-50 dark:fill-navy-950" />
        <path d="M75 155L260 68L445 155" className="stroke-navy-700 dark:stroke-navy-300" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M104 151V302H416V151" className="fill-white stroke-navy-700 dark:fill-slate-900 dark:stroke-navy-300" strokeWidth="8" />
        <path d="M214 302V212C214 197 226 185 241 185H279C294 185 306 197 306 212V302" className="fill-navy-100 stroke-navy-700 dark:fill-navy-900 dark:stroke-navy-300" strokeWidth="8" />
        <rect x="135" y="182" width="52" height="52" rx="9" className="fill-sky/30 stroke-sky" strokeWidth="7" />
        <rect x="333" y="182" width="52" height="52" rx="9" className="fill-warm/30 stroke-warning" strokeWidth="7" />
        <path d="M104 302H416" className="stroke-navy-700 dark:stroke-navy-300" strokeWidth="10" strokeLinecap="round" />
        <circle cx="260" cy="68" r="18" className="fill-warm stroke-warning" strokeWidth="6" />
        <rect x="345" y="74" width="95" height="54" rx="16" className="fill-white stroke-slate-200 dark:fill-slate-800 dark:stroke-slate-700" />
        <path d="M364 101H421" className="stroke-success" strokeWidth="8" strokeLinecap="round" />
        <circle cx="363" cy="101" r="5" className="fill-success" />
      </svg>
    </div>
  );
}
