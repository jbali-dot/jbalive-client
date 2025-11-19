import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
<header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <Link to="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-xs font-bold">
        JB
      </div>
      <span className="text-lg font-semibold tracking-tight">
        JBAlive
      </span>
    </Link>
    <nav className="hidden md:flex items-center gap-5 text-sm">
      <Link to="/" className="text-slate-300 hover:text-indigo-300">
        Home
      </Link>
      <Link
        to="/features"
        className="text-slate-300 hover:text-indigo-300"
      >
        Features
      </Link>
      <Link
        to="/pricing"
        className="text-slate-300 hover:text-indigo-300"
      >
        Pricing
      </Link>
      <Link
        to="/about"
        className="text-slate-300 hover:text-indigo-300"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-slate-300 hover:text-indigo-300"
      >
        Contact
      </Link>
      <Link
        to="/dashboard"
        className="text-slate-300 hover:text-indigo-300"
      >
        Dashboard
      </Link>
    </nav>
  </div>
</header>

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 space-y-8">
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-indigo-400 md:text-4xl">
              Everything you need to run exceptional virtual events
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              JBAlive brings your full event workflow into one platform—from
              registration, backstage prep and live engagement to analytics and
              replays.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">
                Branded event experiences
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Create on-brand registration and event pages with your colors,
                logo and content sections for agenda, speakers and sponsors.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">
                Backstage &amp; green room
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Give speakers a real backstage to test audio/video, prepare and
                chat privately before going live.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">
                Live engagement tools
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Keep your audience active with chat, polls, Q&amp;A and
                reactions—without juggling multiple tools.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">
                Replays &amp; clips
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Turn every event into on-demand content and short clips for
                follow-up, social and internal portals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">
                Analytics &amp; exports
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                See registrations, attendance, drop-off and engagement. Export
                data to your CRM or marketing tools.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">
                Built for real teams
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Use workspaces, roles and permissions to support marketing, HR,
                sales and agencies in one account.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Features;

