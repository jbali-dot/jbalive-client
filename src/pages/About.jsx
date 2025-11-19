import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
            <Link to="/pricing" className="text-slate-300 hover:text-indigo-300">
              Pricing
            </Link>
            <span className="text-indigo-300">About</span>
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
              We want virtual events to be worth showing up for.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              JBAlive was born from years of running sales calls, webinars and
              trainings for clients at JBA Consults. We saw how often virtual
              events felt like a chore—boring slides, low engagement, no clear
              outcome. JBAlive is our answer.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">Our belief</h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                Events should be measurable, on-brand and genuinely engaging.
                Your audience should feel like they&apos;re part of something
                live—not just watching slides drift by.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-sm font-semibold md:text-base">
                Backed by JBA Consults
              </h2>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                JBAlive is built by JBA Consults, a consulting and outsourcing
                company focused on sales, customer support and growth. We don&apos;t
                just ship software—we help you design and run programs that work.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;

