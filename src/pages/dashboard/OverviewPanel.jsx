import React from 'react';

export default function OverviewPanel() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Overview</h1>
      <p className="text-sm text-gray-400 max-w-2xl">
        This overview will evolve into your control center: upcoming events, recent
        replays, and key metrics at a glance.
      </p>

      <div className="grid gap-4 md:grid-cols-3 text-sm">
        <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-1">
          <div className="text-xs text-gray-400">Upcoming events</div>
          <div className="text-2xl font-semibold">0</div>
          <div className="text-[11px] text-gray-500">
            Once you create events, they&apos;ll appear here.
          </div>
        </div>
        <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-1">
          <div className="text-xs text-gray-400">Registrations</div>
          <div className="text-2xl font-semibold">—</div>
          <div className="text-[11px] text-gray-500">
            Later this will connect to real analytics.
          </div>
        </div>
        <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-1">
          <div className="text-xs text-gray-400">Replays</div>
          <div className="text-2xl font-semibold">—</div>
          <div className="text-[11px] text-gray-500">
            Replays and clips will live here once the media layer is ready.
          </div>
        </div>
      </div>
    </div>
  );
}
