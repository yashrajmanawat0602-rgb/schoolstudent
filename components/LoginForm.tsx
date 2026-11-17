export function LoginForm({ role = "Parent" }: { role?: string }) {
  return (
    <form className="card-surface space-y-4" aria-label={`${role} login`}>
      <div>
        <label htmlFor="email" className="field-label">Email</label>
        <input id="email" type="email" autoComplete="email" className="field-control" placeholder="demo@example.com" />
      </div>
      <div>
        <label htmlFor="password" className="field-label">Password</label>
        <input id="password" type="password" autoComplete="current-password" className="field-control" placeholder="••••••••" />
      </div>
      <button type="submit" className="button-primary w-full">Continue as {role}</button>
      <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
        Phase 1 only: this form is a UI component and does not authenticate users.
      </p>
    </form>
  );
}
