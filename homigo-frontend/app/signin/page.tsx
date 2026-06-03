import Link from 'next/link';
import { AuthCard } from '../../modules/auth/auth-card';

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-blue-600">
              SIGN IN
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
              Welcome back
            </h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-blue-600">
            Back home
          </Link>
        </div>

        <AuthCard />
      </div>
    </main>
  );
}
