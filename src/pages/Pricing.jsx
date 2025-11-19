import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12">
          {/* Page Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Simple, transparent pricing
            </h1>
            <p className="text-slate-400 text-sm md:text-base">
              Choose a plan that fits your events, community and business needs.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-6 md:grid-cols-4">
            {/* Starter */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
              <h3 className="text-lg font-semibold">Starter</h3>
              <p className="mt-1 text-3xl font-bold">€0</p>
              <p className="text-slate-400 mb-5 text-sm">per month</p>

              <ul className="space-y-2 text-sm text-slate-300 flex-1">
                <li>✔ Host 1 event per month</li>
                <li>✔ Up to 50 attendees</li>
                <li>✔ Basic registration pages</li>
                <li>✔ Basic chat</li>
                <li>✔ Standard branding</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl border border-slate-700 py-2.5 text-center text-sm hover:border-indigo-400 hover:text-indigo-200 transition"
              >
                Get Started
              </Link>
            </div>

            {/* Pro (Highlighted) */}
            <div className="rounded-2xl border border-indigo-500 bg-slate-900 p-6 shadow-xl shadow-indigo-500/20 scale-105 flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Pro</h3>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <p className="mt-1 text-3xl font-bold">€29</p>
              <p className="text-slate-400 mb-5 text-sm">per month</p>

              <ul className="space-y-2 text-sm text-slate-300 flex-1">
                <li>✔ Unlimited events</li>
                <li>✔ Up to 500 attendees</li>
                <li>✔ Custom branding</li>
                <li>✔ Email reminders</li>
                <li>✔ Full engagement tools</li>
                <li>✔ Automated replays</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl bg-indigo-500 py-2.5 text-center text-sm font-medium hover:bg-indigo-400 transition"
              >
                Upgrade to Pro
              </Link>
            </div>

            {/* Business */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
              <h3 className="text-lg font-semibold">Business</h3>
              <p className="mt-1 text-3xl font-bold">€79</p>
              <p className="text-slate-400 mb-5 text-sm">per month</p>

              <ul className="space-y-2 text-sm text-slate-300 flex-1">
                <li>✔ Up to 2000 attendees</li>
                <li>✔ Backstage mode</li>
                <li>✔ Priority streaming</li>
                <li>✔ CRM integrations</li>
                <li>✔ Multi-host events</li>
                <li>✔ Analytics dashboard</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl border border-slate-700 py-2.5 text-center text-sm hover:border-indigo-400 hover:text-indigo-200 transition"
              >
                Choose Business
              </Link>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
              <h3 className="text-lg font-semibold">Enterprise</h3>
              <p className="mt-1 text-3xl font-bold">Custom</p>
              <p className="text-slate-400 mb-5 text-sm">per month</p>

              <ul className="space-y-2 text-sm text-slate-300 flex-1">
                <li>✔ Unlimited attendees</li>
                <li>✔ White-label solution</li>
                <li>✔ Dedicated support</li>
                <li>✔ API access</li>
                <li>✔ SSO options</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block w-full rounded-xl border border-indigo-500 text-indigo-300 py-2.5 text-center text-sm hover:bg-indigo-500/10 transition"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-14 text-center">
            <p className="text-sm text-slate-400">
              Need help choosing a plan?{" "}
              <Link
                to="/contact"
                className="text-indigo-300 hover:text-indigo-200"
              >
                Talk to our team.
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;

