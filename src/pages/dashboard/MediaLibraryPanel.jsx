import React from 'react';

export default function MediaLibraryPanel() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Media Library</h1>
      <p className="text-sm text-gray-400 max-w-2xl">
        A central place for your logos, overlays, intro videos and reusable media assets
        used across events.
      </p>

      <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs text-gray-300">Collections</div>
            <div className="text-[11px] text-gray-500">
              Group assets by client, show or campaign.
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold">
            New collection
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-3 text-[11px] text-gray-400">
          <div className="rounded-lg border border-dashed border-gray-700 bg-[#050814] p-3">
            Logos &amp; brand kit<br />
            — Primary logo<br />
            — Alternate logo<br />
            — Brand colors
          </div>
          <div className="rounded-lg border border-dashed border-gray-700 bg-[#050814] p-3">
            Overlays &amp; lower thirds<br />
            — Speaker name overlays<br />
            — Segment intro overlays
          </div>
          <div className="rounded-lg border border-dashed border-gray-700 bg-[#050814] p-3">
            Video assets<br />
            — Countdown timers<br />
            — Intro/outro bumpers<br />
            — Promo clips
          </div>
        </div>
      </div>
    </div>
  );
}
