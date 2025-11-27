import React from "react";

const MOCK_MEDIA = [
  {
    id: "logo-jbalive",
    name: "JBAlive main logo",
    type: "image",
    category: "logo",
    note: "Primary dark background logo",
  },
  {
    id: "logo-light",
    name: "JBAlive light logo",
    type: "image",
    category: "logo",
    note: "Use on dark gradients",
  },
  {
    id: "hero-masterclass",
    name: "Launch Masterclass hero",
    type: "image",
    category: "hero",
    note: "Hero visual used for launch events",
  },
  {
    id: "bg-gradient-1",
    name: "Indigo gradient background",
    type: "image",
    category: "background",
    note: "Soft gradient suitable for main event page",
  },
  {
    id: "bg-texture-1",
    name: "Subtle noise texture",
    type: "image",
    category: "background",
    note: "Very soft grain for cinematic feel",
  },
];

export default function MediaLibraryPanel({ selectingFor, onMediaSelected }) {
  const labelMap = {
    logo: "logo",
    hero: "hero banner",
    background: "page background",
  };

  const friendlyTarget = selectingFor ? labelMap[selectingFor] || selectingFor : null;

  return (
    <div className="space-y-5">
      <header className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">Media Library</h1>
          <p className="text-sm text-gray-400 max-w-2xl">
            A central place for your logos, overlays, intro videos and reusable media
            assets used across events. For now this is a simple mock library so you can
            wire the Event Studio &quot;Choose from library&quot; flow.
          </p>
        </div>

        {friendlyTarget && (
          <div className="rounded-full border border-indigo-500/60 bg-indigo-500/10 px-3 py-1 text-[11px] text-indigo-200">
            Selecting asset for <strong>{friendlyTarget}</strong>
          </div>
        )}
      </header>

      {/* Collections / filter (visual only for now) */}
      <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-3 text-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-xs text-gray-300">Collections</div>
            <div className="text-[11px] text-gray-500">
              Group assets by client, show or campaign (future feature).
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-full bg-gray-800 text-xs text-gray-300 border border-gray-700 cursor-not-allowed">
            New collection (coming soon)
          </button>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full bg-gray-800/70 px-2.5 py-1 border border-gray-700 text-gray-200">
            All assets
          </span>
          <span className="rounded-full bg-gray-900 px-2.5 py-1 border border-gray-800 text-gray-400">
            Logos
          </span>
          <span className="rounded-full bg-gray-900 px-2.5 py-1 border border-gray-800 text-gray-400">
            Hero visuals
          </span>
          <span className="rounded-full bg-gray-900 px-2.5 py-1 border border-gray-800 text-gray-400">
            Backgrounds
          </span>
        </div>
      </div>

      {/* Asset grid */}
      <div className="rounded-xl border border-gray-800 bg-[#050814] p-4 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs text-gray-300">Assets</div>
            <div className="text-[11px] text-gray-500">
              Click &quot;Use this asset&quot; to send it back to the Event Studio.
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3 text-[11px] text-gray-400">
          {MOCK_MEDIA.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-800 bg-[#050814] p-3 space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-gray-200">{item.name}</span>
                  <span className="rounded-full bg-gray-900 border border-gray-700 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-gray-400">
                    {item.category}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500">{item.note}</p>
              </div>

              <button
                type="button"
                className="mt-2 w-full px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-[11px] font-semibold text-white"
                onClick={() => {
                  if (onMediaSelected) {
                    onMediaSelected(item);
                  }
                }}
              >
                Use this asset
              </button>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-gray-500">
          Later this can be powered by real uploads, folders and search. For now it lets
          you practice the Event Studio &rarr; Media Library &rarr; Event Studio flow.
        </p>
      </div>
    </div>
  );
}

