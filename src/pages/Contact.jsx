import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 space-y-8">
          {/* Hero */}
          <section className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-indigo-400 md:text-4xl">
              Let&apos;s talk about your next virtual event.
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Whether you&apos;re planning a product launch, webinar series or internal
              town hall, share a bit about what you&apos;re working on and we&apos;ll
              follow up with specific ideas, options and next steps.
            </p>
          </section>

          {/* Contact options overview */}
          <section className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-300">
                Sales &amp; demos
              </p>
              <p className="mt-2 text-slate-200">
                Explore how JBAlive can support your launches, webinars or client
                events.
              </p>
              <p className="mt-2 text-slate-400">
                Ideal if you&apos;re evaluating platforms or planning a flagship event.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-300">
                Support &amp; questions
              </p>
              <p className="mt-2 text-slate-200">
                Already using JBAlive or in the onboarding phase? We&apos;re here to help.
              </p>
              <p className="mt-2 text-slate-400">
                Great for practical questions, setup guidance or clarifying workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-300">
                Partnerships
              </p>
              <p className="mt-2 text-slate-200">
                Agencies, consultants or platforms interested in partnering with JBAlive.
              </p>
              <p className="mt-2 text-slate-400">
                Share a bit about your audience and what collaboration could look like.
              </p>
            </div>
          </section>

          {/* Main contact layout */}
          <section className="grid gap-6 md:grid-cols-[2fr,1.2fr]">
            {/* Contact form */}
            <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="grid gap-4 md:grid-cols-2">
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
              </div>

              <div className="grid gap-4 md:grid-cols-2">
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
                    Estimated audience size
                  </label>
                  <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400">
                    <option>Up to 50</option>
                    <option>50 – 200</option>
                    <option>200 – 500</option>
                    <option>500 – 2,000</option>
                    <option>2,000+</option>
                  </select>
                </div>
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
                  <option>Community / member sessions</option>
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
                  placeholder="Tell us about your event, goals, timing and any tools you already use..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-md hover:bg-indigo-400 transition"
              >
                Send message
              </button>

              <p className="text-[11px] text-slate-400">
                We aim to respond within 1–2 business days. For urgent technical issues,
                please flag that clearly in your message.
              </p>
            </form>

            {/* Sidebar */}
            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <h2 className="text-sm font-semibold text-slate-100 mb-2">
                  Prefer to book directly?
                </h2>
                <p className="text-xs text-slate-300 mb-3">
                  Skip the form and jump straight into our calendar for a live walkthrough.
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

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300 space-y-1.5">
                <p className="font-semibold text-slate-100">Other ways to reach us</p>
                <p>Email: contact@jbalive.com (placeholder)</p>
                <p>
                  Learn more about the team behind JBAlive at{" "}
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

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-slate-100">What to include in your message</p>
                <ul className="space-y-1">
                  <li>• Type of event (launch, webinar, training, etc.)</li>
                  <li>• Approximate audience size and locations</li>
                  <li>• Ideal dates / time frame</li>
                  <li>• What success would look like for you</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Simple FAQ / expectations */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4 text-xs md:text-sm text-slate-300">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm md:text-base font-semibold text-slate-100">
                What happens after you contact us?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-100 mb-1">1. Quick review</p>
                <p>
                  We read through your message, check the context and make sure the right
                  person from our side sees it.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100 mb-1">2. Follow-up</p>
                <p>
                  You&apos;ll receive a reply with clarifying questions, suggestions, or a
                  link to book a more detailed call.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100 mb-1">3. Next steps</p>
                <p>
                  If there&apos;s a fit, we&apos;ll work with you to map out your first event
                  or onboarding plan inside JBAlive.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Shared footer */}
      <Footer />
    </div>
  );
};

export default Contact;

