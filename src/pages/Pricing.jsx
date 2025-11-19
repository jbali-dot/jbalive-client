import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-xs font-bold">
              JB
            </div>
            <span className="text-lg font-semibold tracking-tight">JBAlive</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/" className="text-slate-300 hover:text-indigo-300">
              Home
            </Link>
            <Link to="/features" className="text-slate-300 hover:text-indigo-300">
              Features
            </Link>
            <span className="text-indigo-300">Pricing</span>
            <Link to="/about" className="text-slate-300 hover:text-indigo-300">
              About
            </Link>
            <Link to="/contact" className="text-slate-300 hover:text-indigo-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 space-y-8">
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-indigo-400 md:text-4xl">
              Simple pricing that scales with your events
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Start with a single flagship event, then grow into recurring
              webinars, trainings and town halls. Choose the plan that fits your
              stage and adjust as you grow.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
              <h2 className="text-sm font-semibold md:text-base">Pilot Event</h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Perfect for testing JBAlive on one flagship event.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300 md:text-sm">
                <li>• 1 live event up to [X] attendees</li>
                <li>• Branded registration &amp; event page</li>
                <li>• Live chat, polls &amp; Q&amp;A</li>
                <li>• Basic analytics &amp; replay</li>
              </ul>
              <div className="mt-4 text-xs text-slate-400 md:text-sm">
                Talk to us about a pilot price.
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-500 bg-slate-900 p-5 flex flex-col shadow-lg shadow-indigo-500/20">
              <h2 className="text-sm font-semibold md:text-base">
                Growth Plan
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                For teams running recurring webinars, launches and internal
                events.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300 md:text-sm">
                <li>• [X] live events per month</li>
                <li>• Higher attendee limits</li>
                <li>• Advanced analytics &amp; exports</li>
                <li>• Multiple workspaces &amp; roles</li>
              </ul>
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center rounded-full bg-indigo-500 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-400 md:text-sm"
              >
                Talk to sales
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
              <h2 className="text-sm font-semibold md:text-base">
                Agency &amp; Enterprise
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Custom packages for agencies and larger organizations.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300 md:text-sm">
                <li>• Unlimited events &amp; higher tiers</li>
                <li>• White-label &amp; custom domains</li>
                <li>• Dedicated success &amp; SLAs</li>
                <li>• Security &amp; legal review</li>
              </ul>
              <Link
                to="/contact"
                className="mt-4 inline-flex justify-center rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-100 hover:border-indigo-400 hover:text-indigo-200 md:text-sm"
              >
                Request a custom quote
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Pricing;

