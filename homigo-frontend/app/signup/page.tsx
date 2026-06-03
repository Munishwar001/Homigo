import Link from 'next/link';
import { Mic, ShieldCheck, Zap, Star } from 'lucide-react';
import { AuthCard } from '../../modules/auth/auth-card';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen">
      {/* ── LEFT: Brand panel (desktop only) ── */}
      <div
        className="hidden lg:flex lg:w-[44%] lg:flex-col lg:justify-between lg:p-12"
        style={{
          background:
            'radial-gradient(ellipse at 20% 60%, rgba(99,102,241,0.25) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(139,92,246,0.18) 0%, transparent 55%), #07080F',
        }}
      >
        {/* Top: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/30">
            H
          </div>

          <span className="text-lg font-bold text-white">Homigo</span>
        </Link>

        {/* Middle */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
            AI-powered home services
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white">
            Your home,
            <br />
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              one call away.
            </span>
          </h2>

          <p className="mt-4 max-w-sm text-base leading-7 text-slate-400">
            Join 10,000+ homeowners who book trusted professionals in seconds —
            just by speaking.
          </p>

          {/* Mic visual */}
          <div className="mt-10 flex items-center gap-5">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full">
              <div className="absolute inset-0 animate-ping rounded-full border border-indigo-400/20" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-600 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                <Mic className="h-7 w-7 text-white" aria-hidden />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Voice-first booking
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Speak your need — AI does the rest
              </p>
            </div>
          </div>

          {/* Trust stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { icon: Zap, value: '43s', label: 'Avg. booking time' },
              { icon: ShieldCheck, value: '500+', label: 'Verified pros' },
              { icon: Star, value: '4.8', label: 'Avg. rating' },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/8 bg-white/5 p-4 text-center backdrop-blur-sm"
              >
                <Icon className="mx-auto h-4 w-4 text-indigo-400" aria-hidden />
                <div className="mt-2 text-lg font-black text-white">
                  {value}
                </div>
                <div className="mt-0.5 text-[10px] leading-tight text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <Link
          href="/"
          className="text-sm text-slate-500 transition hover:text-slate-300"
        >
          ← Back to home
        </Link>
      </div>

      {/* ── RIGHT: Form panel ── */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#F5F3FF] px-4 py-12 sm:px-8 lg:px-12">
        {/* Mobile logo */}
        <Link href="/" className="mb-8 flex items-center gap-3 lg:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
            H
          </div>
          <span className="text-lg font-bold text-slate-900">Homigo</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Get started with Homigo in under a minute.
            </p>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-[0_8px_40px_rgba(99,102,241,0.1)]">
            <AuthCard />
          </div>
        </div>
      </div>
    </main>
  );
}
