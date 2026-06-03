export function AuthCard() {
  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        Auth module
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-slate-950">
        Sign-in and sign-up screens belong here.
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Keep login flows, guards, and auth-only UI inside this module so the
        layout and landing page stay isolated.
      </p>
    </section>
  );
}
