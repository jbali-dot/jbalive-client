import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const FeatureCard = ({ label, title, description, items }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col gap-3">
      {label && (
        <span className="inline-flex items-center rounded-full bg-indigo-500/10 text-indigo-300 px-3 py-1 text-[11px] font-medium">
          {label}
        </span>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
      {items && items.length > 0 && (
        <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <div className="min-h-screen bg-[#050814] text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Page intro */}
          <section className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything you need to host premium, conversion-focused events
            </h1>
            <p className="text-sm md:text-base text-slate-300">
              JBAlive brings together registration pages, live streaming, engagement tools,
              replays and analytics in one place – so you can focus on delivering a strong
              experience, not fighting with tech.
            </p>
          </section>

          {/* Top highlight strip */}
          <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-medium text-indigo-300 uppercase tracking-[0.16em]">
                Before the event
              </p>
              <h2 className="mt-2 text-lg font-semibold">
                Branded registration & event pages
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Launch event pages that look like part of your brand – with your logo,
                colours, copy, speakers and CTAs ready to go.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-medium text-indigo-300 uppercase tracking-[0.16em]">
                During the event
              </p>
              <h2 className="mt-2 text-lg font-semibold">
                Backstage, host controls & audience engagement
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Manage speakers, go live confidently, and keep your audience engaged with
                chat, Q&amp;A and more.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-medium text-indigo-300 uppercase tracking-[0.16em]">
                After the event
              </p>
              <h2 className="mt-2 text-lg font-semibold">
                Replays, clips & performance insights
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Replays go live automatically, highlight clips are ready to share, and
                analytics show who showed up and stayed engaged.
              </p>
            </div>
          </section>

          {/* Core feature grid */}
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Core platform features</h2>
              <p className="text-xs text-slate-400 max-w-md text-right hidden md:block">
                Designed for coaches, consultants, agencies and brands who want their
                virtual events to feel like a show – not just another meeting link.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                label="Event pages"
                title="Branded registration & live pages"
                description="Launch on-brand event pages with your logo, colour palette, copy and speaker profiles – no extra landing page tool needed."
                items={[
                  "Custom event URLs",
                  "Speaker bios and headshots",
                  "Agenda & key outcomes",
                  "Add your own CTAs and links",
                ]}
              />
              <FeatureCard
                label="Live room"
                title="Host, backstage & green room"
                description="Keep things under control with a backstage area for speakers, clear host controls and a clean viewer layout."
                items={[
                  "Backstage / green room for speakers",
                  "Host / co-host controls",
                  "Go live / end stream controls",
                  "Private host notes (coming soon)",
                ]}
              />
              <FeatureCard
                label="Engagement"
                title="Chat, Q&A & audience interaction"
                description="Make your sessions feel alive with lightweight but powerful engagement tools built for conversion-focused events."
                items={[
                  "Live chat and reactions",
                  "Q&A with upvoting (roadmap)",
                  "Pinned messages and links",
                  "Polls and quick feedback (roadmap)",
                ]}
              />
            </div>
          </section>

          {/* Video Studio + Media section */}
          <section className="grid gap-6 md:grid-cols-[1.3fr,1fr] items-start">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
              <p className="text-xs font-medium text-indigo-300 uppercase tracking-[0.16em]">
                Content & replays
              </p>
              <h2 className="text-xl font-semibold">Video Studio & replay workflow</h2>
              <p className="text-sm text-slate-300">
                Prepare intros, highlight clips and replay versions of your events in an
                interface inspired by tools like CapCut – but built specifically for
                launches, webinars and trainings.
              </p>

              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Upload long-form recordings and raw sessions</li>
                <li>• Mark intro, teaching blocks, Q&amp;A and CTA segments</li>
                <li>• Prepare short promo clips for social in a few steps</li>
                <li>• Keep content tied to each event inside JBAlive</li>
              </ul>

              <div className="mt-3 rounded-xl border border-slate-800 bg-black/40 p-4 text-xs text-slate-400">
                <p className="font-medium text-slate-200 mb-1">
                  What this looks like in the dashboard
                </p>
                <p>
                  Timeline-style editor for replay, with a separate preview for the
                  uploaded clip. In future, you&apos;ll be able to generate AI-powered cuts,
                  captions and templates for your flagship events.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
              <p className="text-xs font-medium text-indigo-300 uppercase tracking-[0.16em]">
                For your team
              </p>
              <h3 className="text-lg font-semibold">Event studio & media library</h3>
              <p className="text-sm text-slate-300">
                Centralize your visuals, overlays, background images and video assets for
                each event.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Upload logos, banners and backgrounds for each event</li>
                <li>• Save presets for &ldquo;launch&rdquo;, &ldquo;Q&amp;A&rdquo; and &ldquo;training&rdquo; layouts</li>
                <li>• Keep everything in one place for your team and clients</li>
              </ul>
              <Link
                to="/dashboard"
                className="inline-block mt-2 text-xs text-indigo-300 hover:text-indigo-200"
              >
                Explore the dashboard &rarr;
              </Link>
            </div>
          </section>

          {/* Reliability & support */}
          <section className="grid gap-6 md:grid-cols-2 items-start">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
              <p className="text-xs font-medium text-indigo-300 uppercase tracking-[0.16em]">
                Reliability
              </p>
              <h2 className="text-xl font-semibold">Built for launches & live campaigns</h2>
              <p className="text-sm text-slate-300">
                Events are too important to gamble on. JBAlive is designed around predictable launches and recurring sessions.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Clear rundown of upcoming and past events</li>
                <li>• Straightforward tech stack – no over-complication</li>
                <li>• Focus on what helps you go live with confidence</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
              <p className="text-xs font-medium text-indigo-300 uppercase tracking-[0.16em]">
                Support
              </p>
              <h2 className="text-xl font-semibold">Human support from the JBA team</h2>
              <p className="text-sm text-slate-300">
                Behind JBAlive is JBA Consults – a team used to helping clients run sales
                campaigns, webinars and customer-facing experiences.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Onboarding support for your first flagship event</li>
                <li>• Option to get done-with-you event studio setup</li>
                <li>• Feedback on your registration pages and flow</li>
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-1 text-xs text-indigo-300 hover:text-indigo-200"
              >
                Talk to us about your event &rarr;
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Shared footer */}
      <Footer />
    </div>
  );
};

export default Features;

