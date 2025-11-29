import React from "react";

export default function SettingsPanel() {
  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <header className="space-y-1">
        <h1 className="text-xl font-semibold text-gray-100">
          Settings
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          Configure your JBAlive account, login details, workspace branding and
          platform preferences. Most of this is MVP-only for now, but it shows
          how the full settings center will look.
        </p>
      </header>

      {/* GRID LAYOUT */}
      <div className="grid gap-5 lg:grid-cols-[1.4fr,1.3fr]">
        {/* LEFT COLUMN – ACCOUNT & WORKSPACE */}
        <div className="space-y-4">
          {/* ACCOUNT DETAILS (LOGIN) */}
          <section className="rounded-xl border border-gray-800 bg-[#050814] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-gray-100">
                  Account details
                </h2>
                <p className="text-xs text-gray-400">
                  Manage your login email and basic profile information.
                </p>
              </div>
              <span className="text-[10px] rounded-full border border-indigo-500/40 bg-indigo-500/10 px-2 py-0.5 text-indigo-200 uppercase tracking-[0.16em]">
                Auth via Clerk
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2 text-xs">
              <div className="space-y-1">
                <label className="block text-gray-300">Display name</label>
                <input
                  type="text"
                  placeholder="e.g. Joshua Benjamin Ali"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
                <p className="text-[10px] text-gray-500">
                  Shown on the dashboard and future host views.
                </p>
              </div>
              <div className="space-y-1">
                <label className="block text-gray-300">Login email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
                <p className="text-[10px] text-gray-500">
                  Your JBAlive login email. In production this will sync with Clerk.
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 text-xs">
              <div className="space-y-1">
                <label className="block text-gray-300">Password</label>
                <input
                  type="password"
                  placeholder="••••••••••"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
                <p className="text-[10px] text-gray-500">
                  Placeholder only – real password changes will happen via Clerk&apos;s
                  secure flows.
                </p>
              </div>
              <div className="flex items-end">
                <button className="w-full rounded-full bg-indigo-600 px-3 py-1.5 text-[11px] font-semibold hover:bg-indigo-500">
                  Open secure account portal
                </button>
              </div>
            </div>

            <p className="text-[10px] text-gray-500">
              In a future release, clicking the button will open Clerk&apos;s hosted
              account management (change email, password, 2FA, etc.) while still
              keeping the branding consistent with JBAlive.
            </p>
          </section>

          {/* WORKSPACE & BRANDING – “PREVIOUS SETTINGS” STYLE */}
          <section className="rounded-xl border border-gray-800 bg-[#050814] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-gray-100">
                  Workspace &amp; branding
                </h2>
                <p className="text-xs text-gray-400">
                  Set the default look and feel for your events and pages.
                </p>
              </div>
              <span className="text-[10px] text-gray-500">
                Applies across all future events
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2 text-xs">
              <div className="space-y-1">
                <label className="block text-gray-300">Workspace name</label>
                <input
                  type="text"
                  placeholder="e.g. JBAlive Studio / JBA Consults"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-gray-300">Default sender name</label>
                <input
                  type="text"
                  placeholder="e.g. JBAlive Events Team"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3 text-xs">
              <div className="space-y-1">
                <label className="block text-gray-300">Primary brand color</label>
                <input
                  type="text"
                  placeholder="#4F46E5"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-gray-300">Accent color</label>
                <input
                  type="text"
                  placeholder="#F97316"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-gray-300">Preferred font</label>
                <input
                  type="text"
                  placeholder="e.g. Inter / sans-serif"
                  className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 text-xs">
              <div className="space-y-1">
                <label className="block text-gray-300">Default event layout</label>
                <select className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500">
                  <option>Conversion-focused (short & sharp)</option>
                  <option>Story-driven (more narrative)</option>
                  <option>Detailed (technical / B2B)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-gray-300">Default event background</label>
                <select className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500">
                  <option>Dark gradient (JBAlive style)</option>
                  <option>Light clean background</option>
                  <option>Brand image from library</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button className="rounded-full border border-gray-700 px-3 py-1.5 text-[11px] text-gray-300 hover:border-indigo-500">
                Reset to defaults
              </button>
              <button className="rounded-full bg-indigo-600 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-indigo-500">
                Save workspace settings
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN – PREFERENCES & NOTIFICATIONS */}
        <div className="space-y-4">
          {/* PLATFORM PREFERENCES (FROM OLD SETTINGS) */}
          <section className="rounded-xl border border-gray-800 bg-[#050814] p-4 space-y-3">
            <h2 className="text-sm font-semibold text-gray-100">
              Platform preferences
            </h2>
            <p className="text-xs text-gray-400">
              Timezone, language and default dashboard behavior.
            </p>

            <div className="space-y-3 text-xs">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="block text-gray-300">Timezone</label>
                  <select className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500">
                    <option>Europe/Warsaw (CET)</option>
                    <option>Europe/London (GMT)</option>
                    <option>US/Eastern</option>
                    <option>US/Pacific</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-gray-300">Language</label>
                  <select className="w-full rounded-md bg-[#030712] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500">
                    <option>English</option>
                    <option>Polish (coming soon)</option>
                    <option>Other languages (roadmap)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300 text-xs">
                  Default dashboard view
                </label>
                <div className="space-y-1">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="defaultDashboard" className="accent-indigo-500" defaultChecked />
                    <span>Overview (high-level stats & next events)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="defaultDashboard" className="accent-indigo-500" />
                    <span>Events list</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="defaultDashboard" className="accent-indigo-500" />
                    <span>Event Studio (for power users)</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* NOTIFICATIONS – FROM PREVIOUS SETTINGS */}
          <section className="rounded-xl border border-gray-800 bg-[#050814] p-4 space-y-3">
            <h2 className="text-sm font-semibold text-gray-100">
              Notifications
            </h2>
            <p className="text-xs text-gray-400">
              Decide what JBAlive should email you about.
            </p>

            <div className="space-y-2 text-xs">
              <label className="flex items-start gap-2">
                <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-500" />
                <span>
                  Send me a summary after each event
                  <span className="block text-[10px] text-gray-500">
                    Registrations, live attendance, average watch time and top engagement signals.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-500" />
                <span>
                  Notify me about low registration or show-up risk
                  <span className="block text-[10px] text-gray-500">
                    Early warning if an event is underperforming vs. typical benchmarks.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-0.5 accent-indigo-500" />
                <span>
                  Product updates &amp; roadmap
                  <span className="block text-[10px] text-gray-500">
                    Occasional updates when major features launch (Event Studio, replay hub, etc.).
                  </span>
                </span>
              </label>
            </div>
          </section>

          {/* BILLING PLACEHOLDER (OPTIONAL FROM OLD SETTINGS) */}
          <section className="rounded-xl border border-gray-800 bg-[#050814] p-4 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-gray-100">
                  Billing &amp; plan
                </h2>
                <p className="text-xs text-gray-400">
                  Manage your JBAlive plan and Stripe billing in the future.
                </p>
              </div>
              <span className="rounded-full border border-gray-700 px-2 py-0.5 text-[10px] text-gray-400">
                MVP placeholder
              </span>
            </div>

            <p className="text-[11px] text-gray-400">
              For now, plan changes are handled manually (or via the public pricing page
              and Stripe links). Later, this section will show your active plan, invoices
              and upgrade options directly inside the dashboard.
            </p>

            <button className="mt-2 w-full rounded-full border border-gray-700 px-3 py-1.5 text-[11px] text-gray-300 hover:border-indigo-500">
              Open billing portal (coming soon)
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

