# SCHOOLCONNECT

**One School. One Platform. Complete Connection.**

SCHOOLCONNECT is a planned production-grade school management and parent communication platform for administrators, teachers, students and parents.

## Phase 1 status

Phase 1 intentionally contains only the application foundation and polished UI shell:

- Next.js App Router + React + TypeScript
- Tailwind CSS
- Responsive landing page
- Navbar and responsive sidebar
- Reusable dashboard cards and UI components
- Academic notebook visual system
- Light/dark mode toggle
- Accessible buttons, labels and navigation
- Demo UI data only; no real authentication or student records yet

Authentication, PostgreSQL/Prisma, authorization, uploads, reports and the remaining business modules are deliberately introduced in later phases.

## Technology choices

- **Next.js + React + TypeScript:** simple full-stack foundation with strong routing and type safety.
- **Tailwind CSS:** fast, consistent responsive styling without a large component framework.
- **Lucide React:** lightweight accessible icons.
- **PostgreSQL + Prisma:** planned for later phases because relational school data benefits from foreign keys, constraints and indexed queries.
- **Auth.js:** planned for Phase 2 for secure session handling.
- **Recharts:** planned for analytics in later phases.

## Requirements

- Node.js 20.9+ recommended
- npm 10+
- Git

No database is required to run Phase 1.

## Run locally

```bash
git clone <your-github-repository>
cd SCHOOLCONNECT
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

For Phase 1, the environment variables are configuration placeholders only. Never commit `.env.local`.

## Quality checks

```bash
npm run typecheck
npm run build
```

## Planned architecture

```text
/app          Routes and application pages
/components   Reusable UI components
/lib          Authentication, database and utilities
/prisma       Prisma schema and migrations
/tests        Unit/integration/end-to-end tests
/docs         Architecture and operational documentation
/scripts      Maintenance/import/deployment scripts
```

## Security direction

Future phases will enforce authorization on the server for every sensitive operation. Frontend role information will never be trusted for access control. Passwords will be hashed, sessions will use secure HTTP-only cookies, sensitive actions will be audited, uploads will be validated and stored outside the public web root, and rate limiting will protect authentication endpoints.

## Git workflow

Recommended branches:

```text
main
development
feature/parent-dashboard
feature/teacher-marks
feature/attendance
```

Use conventional commits:

```text
feat: add parent dashboard
fix: secure student authorization
test: add parent isolation test
docs: update deployment guide
```

## Demo data

The final product will contain an explicitly labeled DEMO environment with fictional school data such as:

- Green Valley Public School
- Aarav Sharma — 10-A
- Ananya Verma — 10-A
- Kabir Mehta — 9-B

No real student information should be committed.

## Development sequence

1. Setup and UI
2. Authentication and roles
3. Database
4. Admin
5. Teacher
6. Parent
7. Marks
8. Attendance
9. Homework
10. Announcements
11. Report cards
12. CSV import/export
13. Notifications
14. Security testing
15. Deployment
