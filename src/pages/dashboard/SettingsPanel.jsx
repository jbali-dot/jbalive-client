import React from 'react';

export default function SettingsPanel() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Settings</h1>
      <p className="text-sm text-gray-400 max-w-2xl">
        Workspace and account-level controls. This will later connect to real settings
        for branding, notifications and integrations.
      </p>

      <div className="grid gap-4 md:grid-cols-2 text-sm">
        <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-3">
          <h2 className="text-sm font-semibold text-gray-100">Branding defaults</h2>
          <p className="text-xs text-gray-400">
            Set default colors, logos and fonts that new events should inherit.
          </p>
        </div>
        <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-3">
          <h2 className="text-sm font-semibold text-gray-100">Integrations</h2>
          <p className="text-xs text-gray-400">
            Later this will connect JBAlive to your CRM, email platform and analytics
            tools.
          </p>
        </div>
      </div>
    </div>
  );
}
