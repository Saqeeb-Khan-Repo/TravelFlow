// app/signup/page.tsx
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col" id="signUp">
      

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-xl space-y-8">
          {/* Heading */}
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400">
              GET STARTED
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Simple, transparent onboarding
            </h1>
            <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
              Create your TaskFlow workspace in minutes. Invite your team, ship
              features faster, and track everything from one unified dashboard.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950/90 to-zinc-900/80 p-6 lg:p-7 shadow-xl shadow-black/40 backdrop-blur">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-zinc-200"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Sarah"
                    className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-zinc-200"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Chen"
                    className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-zinc-200"
                >
                  Company name
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="TechStart Inc."
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-200"
                >
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-200"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Create a strong password"
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-3 text-xs text-zinc-400">
                <label className="inline-flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500"
                    required
                  />
                  <span>
                    I agree to the{" "}
                    <span className="text-zinc-200">Terms of Service</span> and{" "}
                    <span className="text-zinc-200">Privacy Policy</span>.
                  </span>
                </label>

                <label className="inline-flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span>
                    Keep me updated with product news, tips, and best practices.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-black hover:bg-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Sign UP
              </button>
            </form>

            <p className="mt-4 text-xs text-center text-zinc-500">
              Already using TaskFlow?{" "}
              <Link
                href="/login"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Log in instead
              </Link>
            </p>
          </div>

          {/* Small footer text */}
          <p className="text-[11px] text-center text-zinc-500">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </main>
    </div>
  );
}
