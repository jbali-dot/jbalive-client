import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = React.useState("monthly"); // "monthly" | "yearly"

  const isYearly = billingPeriod === "yearly";

  const formatPrice = (monthlyPrice) => {
    if (!isYearly) return `€${monthlyPrice}`;
    const yearly = monthlyPrice * 12 * 0.8; // 20% off
    return `€${Math.round(yearly)}`;
  };

  const periodLabel = isYearly ? "per year (20% off)" : "per month";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
          {/* Page Header */}
          <section className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Simple, transparent pricing for serious events
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Start small, grow into bigger launches and recurring webinar series.
              Switch plans as your audience and event calendar expands.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-3 pt-3">
              <span className={`text-xs md:text-sm ${!isYearly ? "text-slate-50" : "text-slate-400"}`}>
                Monthly
              </span>
              <button
                type="button"
                onClick={() =>
                  setBillingPeriod((prev) =>
                    prev === "monthly" ? "yearly" : "monthly"
                  )
                }
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-800 px-1 transition"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-indigo-500 shadow-md transition ${
                    isYearly ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-xs md:text-sm ${isYearly ? "text-slate-50" : "text-slate-400"}`}>
                Yearly
              </span>
              <span className="text-[11px] md:text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/40 rounded-full px-2 py-0.5">
                Save 20% on yearly plans
              </span>
            </div>
          </section>

          {/* Pricing Grid */}
          <section className="grid gap-6 md:grid-cols-4">
            {/* Starter */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                For testing ideas
              </p>

              <div className="mt-4">
                <p className="text-3xl font-bold">€0</p>
                <p className="text-slate-400 text-xs">Forever free</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-300 flex-1">
                <li>✔ Host 1 event per month</li>
                <li>✔ Up to 50 live attendees</li>
                <li>✔ Branded registration page</li>
                <li>✔ Live chat</li>
                <li>✔ Standard JBAlive branding</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl border border-slate-700 py-2.5 text-center text-sm hover:border-indigo-400 hover:text-indigo-200 transition"
              >
                Get started free
              </Link>
            </div>

            {/* Pro (Highlighted) */}
            <div className="rounded-2xl border border-indigo-500 bg-slate-900 p-6 shadow-xl shadow-indigo-500/20 scale-105 flex flex-col relative overflow-hidden">
              <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-indigo-500/20 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <h3 className="text-lg font-semibold">Pro</h3>
                <span className="text-[11px] bg-indigo-500/20 text-indigo-200 px-2.5 py-1 rounded-full">
                  Most popular
                </span>
              </div>

              <div className="mt-4 relative z-10">
                <p className="text-3xl font-bold">
                  {formatPrice(29)}
                </p>
                <p className="text-slate-400 text-xs">{periodLabel}</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-200 flex-1">
                <li>✔ Unlimited events</li>
                <li>✔ Up to 500 live attendees</li>
                <li>✔ Custom branding & colours</li>
                <li>✔ Email reminders & basic automations</li>
                <li>✔ Full engagement tools (chat, Q&amp;A roadmap)</li>
                <li>✔ Replays hosted inside JBAlive</li>
                <li>✔ Access to Video Studio for highlight clips</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl bg-indigo-500 py-2.5 text-center text-sm font-medium hover:bg-indigo-400 transition relative z-10"
              >
                Upgrade to Pro
              </Link>

              <p className="mt-2 text-[11px] text-slate-400 relative z-10">
                Ideal for regular webinars, launches and live trainings.
              </p>
            </div>

            {/* Business */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
              <h3 className="text-lg font-semibold">Business</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                For growing teams
              </p>

              <div className="mt-4">
                <p className="text-3xl font-bold">{formatPrice(79)}</p>
                <p className="text-slate-400 text-xs">{periodLabel}</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-300 flex-1">
                <li>✔ Up to 2,000 live attendees</li>
                <li>✔ Backstage & green room</li>
                <li>✔ Priority streaming routing</li>
                <li>✔ CRM / email tool integrations (roadmap)</li>
                <li>✔ Multi-host & team access</li>
                <li>✔ Advanced analytics & export</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl border border-slate-700 py-2.5 text-center text-sm hover:border-indigo-400 hover:text-indigo-200 transition"
              >
                Talk about Business
              </Link>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
              <h3 className="text-lg font-semibold">Enterprise</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                For large audiences
              </p>

              <div className="mt-4">
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-slate-400 text-xs">Bespoke packages</p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-slate-300 flex-1">
                <li>✔ Unlimited attendees (per agreement)</li>
                <li>✔ White-label / custom domain options</li>
                <li>✔ Dedicated onboarding & support</li>
                <li>✔ Deeper integrations & SSO (roadmap)</li>
                <li>✔ Custom SLAs and reporting</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl border border-indigo-500 text-indigo-300 py-2.5 text-center text-sm hover:bg-indigo-500/10 transition"
              >
                Contact sales
              </Link>
            </div>
          </section>

          {/* Comparison section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold md:text-xl">
                Compare plans at a glance
              </h2>
              <p className="hidden md:block text-xs text-slate-400">
                All plans include secure streaming, core event pages and live chat.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70">
              <table className="min-w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-300">
                    <th className="px-4 py-3 font-medium">Feature</th>
                    <th className="px-4 py-3 font-medium">Starter</th>
                    <th className="px-4 py-3 font-medium">Pro</th>
                    <th className="px-4 py-3 font-medium">Business</th>
                    <th className="px-4 py-3 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-800/60">
                    <td className="px-4 py-3 text-slate-300">Events per month</td>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">Unlimited</td>
                    <td className="px-4 py-3">Unlimited</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                  <tr className="border-t border-slate-800/60">
                    <td className="px-4 py-3 text-slate-300">Max live attendees</td>
                    <td className="px-4 py-3">50</td>
                    <td className="px-4 py-3">500</td>
                    <td className="px-4 py-3">2,000</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="border-t border-slate-800/60">
                    <td className="px-4 py-3 text-slate-300">Custom branding</td>
                    <td className="px-4 py-3">Limited</td>
                    <td className="px-4 py-3">Full</td>
                    <td className="px-4 py-3">Full</td>
                    <td className="px-4 py-3">Full</td>
                  </tr>
                  <tr className="border-t border-slate-800/60">
                    <td className="px-4 py-3 text-slate-300">Video Studio access</td>
                    <td className="px-4 py-3">Basic</td>
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">Advanced</td>
                    <td className="px-4 py-3">Advanced</td>
                  </tr>
                  <tr className="border-t border-slate-800/60">
                    <td className="px-4 py-3 text-slate-300">Analytics & exports</td>
                    <td className="px-4 py-3">Summary</td>
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">Advanced</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="border-t border-slate-800/60">
                    <td className="px-4 py-3 text-slate-300">Dedicated support</td>
                    <td className="px-4 py-3">Email only</td>
                    <td className="px-4 py-3">Priority email</td>
                    <td className="px-4 py-3">Priority + calls</td>
                    <td className="px-4 py-3">Account manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom Section / CTA + FAQ */}
          <section className="grid gap-6 md:grid-cols-[1.3fr,1fr] items-start">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold md:text-xl">
                Not sure which plan is right for you?
              </h2>
              <p className="text-sm text-slate-300">
                If your events are still in the “testing” stage, you can start on
                Starter or Pro and grow from there. If you&apos;re planning a flagship
                launch or a large campaign, it&apos;s usually worth talking to us about
                Business or Enterprise so we can map out the right approach.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-400 transition"
                >
                  Talk to the team
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2 text-sm hover:border-indigo-400 hover:text-indigo-200 transition"
                >
                  Explore the dashboard
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-slate-100">Common questions</p>
              <p>
                <span className="font-semibold text-slate-100">Can I change plans?</span>{" "}
                Yes. You&apos;ll be able to upgrade as your events grow.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Is there a free trial?</span>{" "}
                The Starter plan lets you test the full flow with 1 event per month.
              </p>
              <p>
                <span className="font-semibold text-slate-100">Do you offer help with setup?</span>{" "}
                For Business and Enterprise, we can support your first major event
                and help set up your event studio.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Shared footer */}
      <Footer />
    </div>
  );
};

export default Pricing;

