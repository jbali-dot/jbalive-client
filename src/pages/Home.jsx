import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top navigation */}
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


      {/* Main content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-900">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-16">
            {/* Left column */}
            <div className="flex-1 space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                Virtual events, without the technical stress
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
                Host virtual events people{" "}
                <span className="text-indigo-400">actually stay for.</span>
              </h1>

              <p className="max-w-xl text-sm text-slate-300 md:text-base">
                JBAlive is a modern, interactive virtual event, webinar and
                live-broadcast platform designed for coaches, consultants,
                agencies and creators who want professional-grade online events
                with zero technical complexity.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <Link
                  to="/contact"
                  className="rounded-full bg-indigo-500 px-5 py-2.5 font-medium text-white shadow-md hover:bg-indigo-400 transition"
                >
                  Book a 30-minute demo
                </Link>
                <Link
                  to="/pricing"
                  className="rounded-full border border-slate-700 px-5 py-2.5 text-slate-100 hover:border-indigo-400 hover:text-indigo-200 transition"
                >
                  View pricing
                </Link>
                <p className="w-full text-xs text-slate-400 md:w-auto">
                  No complex setup • No extra tools • Go live in minutes
                </p>
              </div>
            </div>

            {/* Right column – stats / preview card */}
            <div className="flex-1">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-indigo-500/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Next live event
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Launch Masterclass: From Idea to Live Event
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Ready to go live
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-300">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Backstage view
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-[11px]">
                    <div className="rounded-xl bg-slate-900/80 p-2">
                      <p className="text-slate-400">Speakers</p>
                      <p className="mt-1 text-slate-100">3 online</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/80 p-2">
                      <p className="text-slate-400">Registrations</p>
                      <p className="mt-1 text-slate-100">148</p>
                    </div>
                    <div className="rounded-xl bg-slate-900/80 p-2">
                      <p className="text-slate-400">Engagement</p>
                      <p className="mt-1 text-slate-100">High</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <p>Designed for launches, webinars and live trainings.</p>
                  <p className="text-slate-500">Powered by JBAlive</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="border-b border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                Built for people who turn ideas into live experiences
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                JBAlive is perfect for coaches, consultants, agencies and brands
                who want their virtual events to feel like a show, not just
                another meeting link.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  Coaches &amp; Consultants
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Deliver masterclasses, paid workshops, and group programs with
                  live interaction, replays and analytics built in.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  Agencies &amp; Service Providers
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Run client webinars, launches, and demos on a platform that
                  looks like part of your own service stack.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  Creators &amp; Brands
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Host community sessions, launches and live shows with pro
                  visuals, branded pages and audience engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems & why JBAlive */}
        <section className="border-b border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                Most virtual events feel boring, clunky and forgettable.
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                You&apos;ve seen it: shaky streams, low engagement, people
                dropping off after 10 minutes, hosts fighting with technology.
                Traditional meeting tools weren&apos;t built for premium,
                revenue-driving events.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Too many separate tools to glue together</li>
                <li>• Weak branding and generic viewer experience</li>
                <li>• No clear insights on who stayed, engaged or converted</li>
                <li>• Event replays get lost, never reused as content</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                JBAlive is built to fix that.
              </h3>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Everything inside JBAlive is designed around hosting strong,
                conversion-ready events — without a technical co-host or big
                production team.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• All-in-one platform: pages, live, engagement, replays</li>
                <li>• Clean, on-brand viewer experience for your audience</li>
                <li>• Backstage, green room and host controls</li>
                <li>• Analytics and insights your team can act on</li>
                <li>• Replays and clips ready to reuse as content</li>
              </ul>
              <Link
                to="/features"
                className="mt-4 inline-flex rounded-full border border-indigo-400 px-4 py-2 text-xs font-medium text-indigo-200 hover:bg-indigo-500/10 transition"
              >
                Explore all features
              </Link>
            </div>
          </div>
        </section>

        {/* Key capabilities */}
        <section className="border-b border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  Everything you need in one platform
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
                  JBAlive combines high-quality livestreaming, audience
                  engagement, branded pages, analytics and automated replays so
                  you don&apos;t have to manage five different tools.
                </p>
              </div>
              <Link
                to="/pricing"
                className="inline-flex rounded-full bg-indigo-500 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-400 md:text-sm"
              >
                See plans &amp; pricing
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Event pages
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-100">
                  Branded registration &amp; live pages
                </h3>
                <p className="mt-2 text-xs text-slate-300 md:text-sm">
                  Launch on-brand event pages with your logo, colors, copy and
                  speaker profiles — no extra landing page tool needed.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Live experience
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-100">
                  Backstage, host controls &amp; engagement
                </h3>
                <p className="mt-2 text-xs text-slate-300 md:text-sm">
                  Manage speakers in a green room, go live confidently and keep
                  the audience engaged with chat, polls, Q&amp;A and reactions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  After the event
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-100">
                  Replays, clips &amp; analytics
                </h3>
                <p className="mt-2 text-xs text-slate-300 md:text-sm">
                  Replays go live automatically, highlight clips are ready to
                  share, and analytics show who registered, attended and
                  engaged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Ready to host your next flagship event on JBAlive?
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
              Whether you&apos;re planning a launch, a recurring webinar
              series, or a private training, we&apos;ll walk you through how
              JBAlive can support your goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <Link
                to="/contact"
                className="rounded-full bg-indigo-500 px-5 py-2.5 font-medium text-white shadow-md hover:bg-indigo-400 transition"
              >
                Book a 30-minute demo
              </Link>
              <Link
                to="/pricing"
                className="rounded-full border border-slate-700 px-5 py-2.5 text-slate-100 hover:border-indigo-400 hover:text-indigo-200 transition"
              >
                Explore pricing
              </Link>
            </div>
            <p className="text-xs text-slate-400">
              Built by JBA Consults • Designed for growth-focused creators,
              agencies and brands.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} JBAlive. All rights reserved. Powered
            by JBA Consults.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/features"
              className="hover:text-indigo-300 transition"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="hover:text-indigo-300 transition"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="hover:text-indigo-300 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-indigo-300 transition"
            >
              Contact
            </Link>
            <a
              href="https://jba-consults.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition"
            >
              JBA Consults
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

