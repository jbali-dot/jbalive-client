import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const Features = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
          {/* Hero */}
          <section className="space-y-4 text-center md:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
              Platform Features
            </p>
            <div className="grid gap-4 md:grid-cols-[1.6fr,1.2fr] md:items-end">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Everything you need to host powerful, high-converting live
                  events.
                </h1>
                <p className="text-sm text-slate-300 md:text-base max-w-xl">
                  From the first registration to replay views, JBAlive gives you
                  a complete toolkit for running professional, on-brand live
                  events without needing a separate tech team.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/pricing"
                  className="inline-flex rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-indigo-400"
                >
                  View plans &amp; pricing
                </Link>
              </div>
            </div>
          </section>

          {/* Quick feature grid */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold md:text-xl">
              Core capabilities at a glance
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="HD & low-latency live streaming"
                description="Deliver smooth, stable streams for launches, webinars and trainings without jitter or long delays."
              />
              <FeatureCard
                title="Interactive audience tools"
                description="Use chat, polls, Q&A, reactions and raised hands to keep people engaged and active."
              />
              <FeatureCard
                title="Branded event pages"
                description="Generate registration and live event pages that look like your brand, not someone else’s software."
              />
              <FeatureCard
                title="Automated replays"
                description="Sessions are captured and turned into replays you can share, reuse and drive ongoing value from."
              />
              <FeatureCard
                title="Email reminders & notifications"
                description="Send confirmations, reminders and replay emails so people don’t forget or drop off."
              />
              <FeatureCard
                title="Analytics & insights"
                description="Understand who registered, who showed up, how long they stayed and how they engaged."
              />
            </div>
          </section>

          {/* Live streaming & event experience */}
          <section className="grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-start">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">
                Live streaming that feels smooth and professional
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                JBAlive is built to handle everything from intimate group
                trainings to large broadcasts. Streams are optimized for
                high-definition and low latency, so your audience experiences
                your event in real time — not 20 seconds behind.
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• High-definition video streaming</li>
                <li>• Low-latency experience for real-time interaction</li>
                <li>• Backstage / green room to prepare speakers before going live</li>
                <li>• Clean, focused viewer layout with no distractions</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-sky-500/20 p-4 text-sm text-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                Event experience preview
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Imagine a live stream layout where your content is front and
                center, with engagement tools and branding layered around it —
                built specifically for events that need to look and feel premium.
              </p>
            </div>
          </section>

          {/* Engagement */}
          <section className="grid gap-6 md:grid-cols-[1.6fr,1.2fr] md:items-start">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">
                Turn passive viewers into active participants
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                The difference between a forgettable webinar and a memorable
                live experience is interaction. JBAlive gives you tools to keep
                the room alive from the first minute to the last.
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Live chat for real-time conversation</li>
                <li>• Polls to take the room’s pulse and make decisions together</li>
                <li>• Structured Q&amp;A so the best questions rise to the top</li>
                <li>• Emoji reactions for instant feedback and energy</li>
                <li>• Raised-hand mode for more controlled participation</li>
              </ul>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100">
                  Engagement layer
                </p>
                <p className="mt-1">
                  Engagement tools sit alongside the main stream instead of
                  competing with it, so your content remains the focus while the
                  audience stays involved.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100">
                  Built for conversion
                </p>
                <p className="mt-1">
                  The more engaged people are during your event, the more likely
                  they are to take action at the end — whether that&apos;s
                  booking a call, buying a product or joining a program.
                </p>
              </div>
            </div>
          </section>

          {/* Event pages, branding, and replays */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold md:text-xl">
              Branded event pages, replays and follow-up — all in one flow
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Event landing pages
                </p>
                <p className="mt-2 text-slate-100">
                  Registration pages that look like your brand
                </p>
                <p className="mt-1 text-xs md:text-sm">
                  Add your title, description, speakers, schedule and brand
                  elements — without hiring a designer or using a separate
                  landing page tool.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Automated replays
                </p>
                <p className="mt-2 text-slate-100">
                  Turn every event into an asset
                </p>
                <p className="mt-1 text-xs md:text-sm">
                  Sessions are captured and made available as replays so your
                  audience can rewatch, and you can keep generating leads and
                  value long after the live session ends.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email reminders &amp; follow-up
                </p>
                <p className="mt-2 text-slate-100">
                  Make sure people show up and stay engaged
                </p>
                <p className="mt-1 text-xs md:text-sm">
                  Send branded confirmations, reminders and replay emails so
                  your events don&apos;t get forgotten in busy inboxes.
                </p>
              </div>
            </div>
          </section>

          {/* Integrations & analytics */}
          <section className="grid gap-6 md:grid-cols-[1.5fr,1.3fr] md:items-start">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">
                Integrate with the tools you already use
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                JBAlive is designed to plug into your existing stack, not
                replace it. Use integrations to sync contacts, trigger
                automations and keep your CRM up to date.
              </p>
              <ul className="mt-2 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                <li>• Zapier</li>
                <li>• HubSpot</li>
                <li>• Calendly</li>
                <li>• Google Calendar</li>
                <li>• Mailchimp</li>
                <li>• ...and more via webhooks</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-100">
                Analytics that show what&apos;s working
              </h3>
              <p className="text-sm text-slate-300">
                Go beyond vanity metrics. JBAlive gives you insight into how
                people actually experience your events.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Registrations and attendance rates</li>
                <li>• Average watch time and drop-off moments</li>
                <li>• Poll participation and Q&amp;A activity</li>
                <li>• Replay views and follow-up engagement</li>
              </ul>
              <p className="text-xs text-slate-400">
                Use this data to improve your content, adjust your offers and
                refine your event strategy over time.
              </p>
            </div>
          </section>

          {/* Reliability & security */}
          <section className="grid gap-6 md:grid-cols-2 md:items-start">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">
                Built on reliable, modern infrastructure
              </h2>
              <p className="text-sm text-slate-300 md:text-base">
                JBAlive is hosted on modern infrastructure with performance and
                reliability in mind, so your flagship events aren&apos;t left at
                the mercy of flimsy hosting.
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Deployed on Vercel with global CDN delivery</li>
                <li>• Protected and accelerated with Cloudflare</li>
                <li>• TLS encryption for secure connections</li>
                <li>• Designed to scale with your audience</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-100 mb-1">
                Enterprise-ready roadmap
              </p>
              <p>
                Higher tiers and enterprise plans can layer in white-label
                options, SSO, advanced permissions and deeper integrations —
                giving larger teams the control they need.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="border border-slate-800 rounded-2xl bg-slate-900/70 p-6 text-center space-y-3">
            <h2 className="text-lg font-semibold md:text-xl">
              See how these features work together in a real event flow.
            </h2>
            <p className="text-sm text-slate-300 md:text-base max-w-2xl mx-auto">
              Book a short walkthrough and we&apos;ll show you how to use
              JBAlive for your next launch, recurring webinar, training program
              or community event.
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
          </section>
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
    <p className="text-sm font-semibold text-slate-100">{title}</p>
    <p className="mt-2 text-xs md:text-sm">{description}</p>
  </div>
);

export default Features;

