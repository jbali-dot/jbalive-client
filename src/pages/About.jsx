import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header */}
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
      <Link
        to="/sign-in"
        className="text-slate-300 hover:text-indigo-300"
      >
        Sign in
      </Link>
      <Link
        to="/sign-up"
        className="rounded-full border border-indigo-500 px-3 py-1 text-xs text-indigo-300 hover:bg-indigo-500/10"
      >
        Sign up
      </Link>
    </nav>
  </div>
</header>

      {/* Main */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
          {/* Hero / Founder section */}
          <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                About JBAlive
              </p>

              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Modern live events for people who want more than another meeting
                link.
              </h1>

              <p className="text-sm text-slate-300 md:text-base">
                JBAlive is a modern platform built for creators, consultants and
                brands who want more engaging, professional live events. We
                simplify the entire experience so you can focus on your message
                — not on fighting with technology.
              </p>

              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>• No complicated setup</li>
                <li>• No technical team needed</li>
                <li>• No expensive production studio</li>
              </ul>

              <p className="text-sm text-slate-300 md:text-base">
                Our mission is to help people share their knowledge, build
                communities and convert audiences through beautiful, interactive
                live experiences that actually feel worth showing up for.
              </p>
            </div>

            {/* Founder / image card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-4">
                {/* Replace this block with a real <img> when ready */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 text-lg font-bold">
                  JA
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    Joshua Benjamin Ali
                  </p>
                  <p className="text-xs text-slate-400">
                    Founder &amp; CEO, JBAlive / JBA Consults
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    JBAlive is designed to compete with leading virtual event
                    platforms — but with a more user-friendly experience and a
                    stronger focus on conversion, branding and engagement.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-300">
                <p className="font-semibold text-slate-100 mb-1">
                  Built from real client experience
                </p>
                <p>
                  The platform is informed by years of running sales calls,
                  webinars and trainings for clients at JBA Consults — not just
                  theoretical ideas about events.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & values */}
          <section className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                Our mission
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Help experts, teams and brands communicate with impact through
                live formats that feel premium, interactive and human.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                Our belief
              </p>
              <p className="mt-2 text-sm text-slate-200">
                If you&apos;re willing to show up live for your audience, the
                technology should empower you — not intimidate or distract you.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                Our focus
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Conversion, engagement and experience. Every event should look
                on-brand, feel interactive and drive a clear next step.
              </p>
            </div>
          </section>

          {/* What makes JBAlive different */}
          <section className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                What makes JBAlive different?
              </h2>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Many platforms are built for generic meetings. JBAlive is built
                for events that carry your brand, your strategy and your
                business goals. We combine the structure of an event platform
                with the mindset of a growth and sales organization.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Creator- and consultant-first product decisions</li>
                <li>• Designed around real event workflows, not just features</li>
                <li>• Strong emphasis on branding, structure and follow-up</li>
                <li>• Clear analytics to support sales and community-building</li>
              </ul>
            </div>

            {/* Visual / “image” column */}
            <div className="space-y-4">
              {/* You can later swap these for real screenshots */}
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-sky-500/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                  Event experience preview
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  Clean, on-brand event pages that feel closer to a live show
                  than a standard meeting link.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <p className="text-xs font-semibold text-slate-200">
                    Backstage &amp; green room
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Prepare speakers privately before going live.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <p className="text-xs font-semibold text-slate-200">
                    Audience view
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Focused viewing experience with engagement tools.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Backed by JBA Consults */}
          <section className="border border-slate-800 rounded-2xl bg-slate-900/60 p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-[1.3fr,1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  Backed by JBA Consults
                </p>
                <h2 className="mt-2 text-lg font-semibold md:text-xl">
                  Built by a team that actually runs sales, support and
                  training programs.
                </h2>
                <p className="mt-2 text-sm text-slate-300 md:text-base">
                  JBAlive is developed alongside{" "}
                  <a
                    href="https://jba-consults.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 hover:text-indigo-200"
                  >
                    JBA Consults
                  </a>
                  , a consulting and outsourcing company that works with clients
                  on sales, customer support and growth. That means JBAlive is
                  shaped by real conversations with teams who use live sessions
                  to drive business outcomes.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300">
                <p className="font-semibold text-slate-100 mb-1">
                  Where software meets service
                </p>
                <p>
                  Beyond the platform itself, we imagine a future where
                  customers can also tap into event strategy, moderation and
                  follow-up services through the JBA ecosystem.
                </p>
              </div>
            </div>
          </section>

          {/* Image-style gallery */}
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold md:text-xl">
                A platform that grows with your events
              </h2>
              <p className="hidden text-xs text-slate-400 md:block">
                Replace these blocks with real screenshots when you&apos;re
                ready.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Image placeholder 1 */}
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-500/30 via-slate-900 to-sky-400/30 p-4 flex flex-col justify-end">
                <p className="text-xs font-semibold text-slate-50">
                  Virtual event stage
                </p>
                <p className="mt-1 text-[11px] text-slate-100">
                  Visualize the main event view your audience will see.
                </p>
              </div>

              {/* Image placeholder 2 */}
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-500/30 p-4 flex flex-col justify-end">
                <p className="text-xs font-semibold text-slate-50">
                  Speaker &amp; host controls
                </p>
                <p className="mt-1 text-[11px] text-slate-100">
                  Imagine a clean, simple control panel for hosts and speakers.
                </p>
              </div>

              {/* Image placeholder 3 */}
              <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-sky-500/30 via-slate-900 to-emerald-400/30 p-4 flex flex-col justify-end">
                <p className="text-xs font-semibold text-slate-50">
                  Engagement &amp; analytics
                </p>
                <p className="mt-1 text-[11px] text-slate-100">
                  Highlight real-time engagement and post-event insights.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;

