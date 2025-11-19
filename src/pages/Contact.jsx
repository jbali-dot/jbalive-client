import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-indigo-400 md:text-4xl">
              Let&apos;s talk about your next virtual event.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Share a bit about what you&apos;re planning—whether it&apos;s a product
              launch, webinar series or internal town hall—and we&apos;ll follow up
              with concrete ideas and next steps.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-[2fr,1.2fr]">
            <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Full name
                </label>
                <input
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Work email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Company
                </label>
                <input
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  What are you planning?
                </label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400">
                  <option>Product launch</option>
                  <option>Webinars / demos</option>
                  <option>Internal town halls</option>
                  <option>Trainings / onboarding</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Message / details
                </label>
                <textarea
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                  rows={4}
                  placeholder="Tell us about your event, audience size, timeline..."
                />
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-md hover:bg-indigo-400 transition"
              >
                Send message
              </button>
            </form>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <h2 className="text-sm font-semibold text-slate-100 mb-2">
                  Prefer to book directly?
                </h2>
                <p className="text-xs text-slate-300 mb-3">
                  Skip the form and jump straight into our calendar.
                </p>
                <a
                  href="https://calendly.com/jbaconsults/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full justify-center rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-100 hover:border-indigo-400 hover:text-indigo-200"
                >
                  Book a 30-minute demo
                </a>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
                <p>Email: contact@jbalive.com (placeholder)</p>
                <p className="mt-1">
                  Or learn more at{" "}
                  <a
                    href="https://jba-consults.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-300 hover:text-indigo-200"
                  >
                    jba-consults.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;

