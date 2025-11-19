import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top navigation */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-xs font-bold">
              JB
            </div>
            <span className="text-lg font-semibold tracking-tight">JBAlive</span>
          </div>

          <nav className="flex items-center gap-4 text-sm">
  <span className="text-indigo-300">Home</span>
  <Link to="/features" className="text-slate-300 hover:text-indigo-300">
    Features
  </Link>
  <Link to="/pricing" className="text-slate-300 hover:text-indigo-300">
    Pricing
  </Link>
  <Link to="/about" className="text-slate-300 hover:text-indigo-300">
    About
  </Link>
  <Link to="/contact" className="text-slate-300 hover:text-indigo-300">
    Contact
  </Link>
  <Link to="/dashboard" className="text-slate-300 hover:text-indigo-300">
    Dashboard
  </Link>
</nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 space-y-8">
          {/* Hero section */}
          <section>
            <h1 className="text-6xl font-bold tracking-tight text-indigo-400 md:text-4xl">
              Welcome to JBAlive
            </h1>
            <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
              This is your MVP skeleton. Use the dashboard to create events and
              share the event link with your audience. We&apos;ll evolve this
              into a full event platform UI.
            </p>
          </section>

          {/* API Health + Quick actions */}
          <section className="grid gap-6 md:grid-cols-[2fr,1.5fr]">
            {/* API Health / status card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold text-slate-100 md:text-base">
                API Health
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Keep an eye on the backend services that power your live
                events. Later, this card can show real-time status and metrics.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-slate-200">All systems operational</span>
              </div>
            </div>

            {/* Quick actions card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold text-slate-100 md:text-base">
                Quick Actions
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Jump straight into the areas you&apos;ll use the most.
              </p>

              <div className="mt-4 flex flex-col gap-3 text-sm">
                <Link
                  to="/dashboard"
                  className="rounded-full bg-indigo-500 px-4 py-2 text-center font-medium text-white shadow-md hover:bg-indigo-400 transition"
                >
                  Go to Dashboard
                </Link>
                <a
                  href="https://jba-consults.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-center text-slate-100 hover:border-indigo-400 hover:text-indigo-200 transition"
                >
                  Visit JBA Consults
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} JBAlive — MVP</span>
          <span className="text-slate-500">
            Built with React, Vite &amp; Tailwind
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;

