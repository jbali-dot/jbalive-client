import React, { useState } from "react";

const TABS = [
  { id: "account", label: "Account" },
  { id: "workspace", label: "Workspace & preferences" },
  { id: "notifications", label: "Notifications" },
  { id: "billing", label: "Billing" },
  { id: "danger", label: "Danger zone" },
];

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="space-y-5">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold text-slate-100">
          Settings
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Manage your JBAlive account, workspace preferences, notifications and billing.
          Most settings here are for structure and UI in the MVP – actual updates will
          be wired to a backend later.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 text-[11px]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={[
              "px-3 py-1.5 rounded-full border",
              activeTab === tab.id
                ? "border-indigo-500 bg-indigo-600/20 text-indigo-200"
                : "border-slate-700 text-slate-300 hover:border-indigo-500",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="rounded-2xl border border-slate-800 bg-[#050814] p-4 md:p-5">
        {activeTab === "account" && <AccountSettings />}
        {activeTab === "workspace" && <WorkspaceSettings />}
        {activeTab === "notifications" && <NotificationSettings />}
        {activeTab === "billing" && <BillingSettings />}
        {activeTab === "danger" && <DangerZone />}
      </div>
    </div>
  );
}

/* ---------------- ACCOUNT SETTINGS ---------------- */

function AccountSettings() {
  return (
    <div className="space-y-5 text-sm">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-slate-100">
          Account details
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Basic information about you as the account owner. In production, these
          settings will sync with your authentication provider (Clerk).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            Display name
          </label>
          <input
            type="text"
            defaultValue="Joshua Benjamin Ali"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500"
          />
          <p className="text-[11px] text-slate-500">
            This can be shown on event pages as the host name.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            Login email (read-only in MVP)
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-400 outline-none"
            readOnly
          />
          <p className="text-[11px] text-slate-500">
            Email &amp; password are managed by the auth provider (Clerk). In a later
            version, this will reflect your actual Clerk account email.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            Timezone
          </label>
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500">
            <option>Europe/Warsaw (CET)</option>
            <option>UTC</option>
            <option>Europe/London</option>
            <option>America/New_York</option>
          </select>
          <p className="text-[11px] text-slate-500">
            Used for displaying event times in your dashboard summary.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            Language
          </label>
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500">
            <option>English</option>
            <option>Polish (planned)</option>
          </select>
          <p className="text-[11px] text-slate-500">
            In the future, this will localise UI labels and system emails.
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-t border-slate-800 pt-4">
        <div className="text-[11px] text-slate-500 max-w-md">
          <p className="font-semibold text-slate-300 mb-1">Account security</p>
          <p>
            To update your email, password or two-factor authentication, this panel
            will link into the Clerk <span className="italic">Account / Security</span>{" "}
            screen in a later version.
          </p>
        </div>
        <button
          type="button"
          onClick={() => alert("In the full version this will open the account security page.")}
          className="rounded-full bg-slate-800 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-700"
        >
          Open account security (placeholder)
        </button>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => alert("In the full version this would save account changes.")}
          className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-500"
        >
          Save account changes
        </button>
      </div>
    </div>
  );
}

/* ---------------- WORKSPACE SETTINGS ---------------- */

function WorkspaceSettings() {
  return (
    <div className="space-y-5 text-sm">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-slate-100">
          Workspace &amp; appearance
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Settings that affect the whole JBAlive workspace – naming, branding and
          how the dashboard feels to use.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            Workspace name
          </label>
          <input
            type="text"
            defaultValue="JBAlive (JBA Consults)"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500"
          />
          <p className="text-[11px] text-slate-500">
            This can be shown in the dashboard header and future team sharing views.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            Default event type
          </label>
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500">
            <option>Live launch / masterclass</option>
            <option>Recurring webinar</option>
            <option>Internal training</option>
            <option>Private client session</option>
          </select>
          <p className="text-[11px] text-slate-500">
            Used as the default template when you create new events.
          </p>
        </div>
      </div>

      {/* Theme / UI density */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            Theme
          </label>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <button className="rounded-lg border border-indigo-500 bg-indigo-600/20 px-3 py-1.5">
              Dark (current)
            </button>
            <button className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 opacity-60 cursor-not-allowed">
              Light (coming soon)
            </button>
          </div>
          <p className="text-[11px] text-slate-500">
            JBAlive is optimised for dark mode today. Light mode can be added later.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-medium text-slate-300">
            UI density
          </label>
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-indigo-500">
            <option>Comfortable</option>
            <option>Compact</option>
          </select>
          <p className="text-[11px] text-slate-500">
            Conceptual setting – later this can control padding and font sizes.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => alert("In the full version this would save workspace preferences.")}
          className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-500"
        >
          Save workspace preferences
        </button>
      </div>
    </div>
  );
}

/* ---------------- NOTIFICATIONS ---------------- */

function NotificationSettings() {
  return (
    <div className="space-y-5 text-sm">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-slate-100">
          Notifications
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          Control which alerts you receive about registrations, live engagement
          and follow-up.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 text-xs">
        <div className="space-y-3">
          <p className="font-medium text-slate-200">Email notifications</p>

          <label className="flex items-start gap-2">
            <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-500" />
            <span>
              Registration summaries{" "}
              <span className="block text-[11px] text-slate-500">
                Receive a short email when someone registers for a flagship event.
              </span>
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-500" />
            <span>
              “Go live” reminders{" "}
              <span className="block text-[11px] text-slate-500">
                Reminder 30 minutes before your event is scheduled to start.
              </span>
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-0.5 accent-indigo-500" />
            <span>
              Daily recap{" "}
              <span className="block text-[11px] text-slate-500">
                One daily recap email for all events and key metrics.
              </span>
            </span>
          </label>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-slate-200">In-dashboard alerts</p>

          <label className="flex items-start gap-2">
            <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-500" />
            <span>
              New registration notifications{" "}
              <span className="block text-[11px] text-slate-500">
                Show subtle notifications in the dashboard when new attendees register.
              </span>
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input type="checkbox" defaultChecked className="mt-0.5 accent-indigo-500" />
            <span>
              Event health alerts{" "}
              <span className="block text-[11px] text-slate-500">
                In the future, this can surface low show-up rates or tech issues.
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => alert("In the full version this would save notification preferences.")}
          className="rounded-full bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-500"
        >
          Save notification settings
        </button>
      </div>
    </div>
  );
}

/* ---------------- BILLING ---------------- */

function BillingSettings() {
  return (
    <div className="space-y-5 text-sm">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-slate-100">
          Billing overview
        </h2>
        <p className="text-xs text-slate-400 max-w-xl">
          For now this is a static billing preview for the MVP. Later, this can read
          from your Stripe subscription and show real invoices and usage.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.5fr,1.2fr]">
        <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-200">Current plan</p>
              <p className="text-lg font-semibold text-slate-50">Pro (example)</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300">
              Active
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Unlimited events, up to 500 attendees per event, engagement tools and
            automated replays.
          </p>

          <div className="text-xs text-slate-300">
            <p>€29 / month</p>
            <p className="text-slate-500">Billed via Stripe (linked externally).</p>
          </div>

          <button
            type="button"
            onClick={() => alert("In the full version this would open the Stripe customer portal.")}
            className="mt-2 rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-100 hover:border-indigo-400"
          >
            Manage billing (placeholder)
          </button>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
          <p className="font-semibold text-slate-100">Usage snapshot (concept)</p>
          <ul className="space-y-1 text-slate-400">
            <li>• 3 active events this month</li>
            <li>• 148 registrations on latest launch</li>
            <li>• 2 upcoming live sessions scheduled</li>
          </ul>
          <p className="text-[11px] text-slate-500 mt-2">
            In the future, this card can show actual usage and soft limits based on your
            plan (registrations, concurrent events, team seats, etc.).
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DANGER ZONE ---------------- */

function DangerZone() {
  return (
    <div className="space-y-5 text-sm">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-red-400">Danger zone</h2>
        <p className="text-xs text-slate-400 max-w-xl">
          High-impact actions relating to your JBAlive workspace. In the MVP these are
          purely visual and do not delete anything.
        </p>
      </div>

      <div className="space-y-3 rounded-xl border border-red-900/60 bg-red-950/30 p-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-100">
              Cancel subscription (concept)
            </p>
            <p className="text-[11px] text-slate-400 max-w-md">
              Eventually this will connect to Stripe so users can cancel plans
              themselves. For now it&apos;s a placeholder so the flow is visible.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("This is a placeholder – no real subscription is cancelled.")}
            className="rounded-full border border-red-600 px-4 py-2 text-xs font-medium text-red-200 hover:bg-red-600/20"
          >
            Cancel subscription (placeholder)
          </button>
        </div>

        <div className="border-t border-red-900/60 pt-3 mt-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-100">
                Delete workspace (concept)
              </p>
              <p className="text-[11px] text-slate-400 max-w-md">
                In a real app this would archive or permanently delete the JBAlive
                workspace – including events, pages and media. Here it&apos;s just a
                visual representation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => alert("Nothing is actually deleted – this is a design-only placeholder.")}
              className="rounded-full border border-red-600 px-4 py-2 text-xs font-medium text-red-200 hover:bg-red-600/20"
            >
              Delete workspace (placeholder)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

