import React, { useState } from 'react';

const MODES = ['Timeline', 'Storyboard', 'Export'];

const MOCK_CLIPS = [
  {
    id: 'intro',
    name: 'Intro sequence',
    duration: '00:25',
    description: 'Logo reveal and cold open hook.',
  },
  {
    id: 'main',
    name: 'Main teaching block',
    duration: '34:10',
    description: 'Core content for the masterclass.',
  },
  {
    id: 'qa',
    name: 'Q&A segment',
    duration: '14:20',
    description: 'Audience questions and live interaction.',
  },
  {
    id: 'cta',
    name: 'Call-to-action',
    duration: '01:30',
    description: 'Invite to book a call / join program.',
  },
];

const ASPECT_RATIOS = [
  { id: '9:16', label: '9:16 Vertical' },
  { id: '16:9', label: '16:9 Wide' },
  { id: '1:1', label: '1:1 Square' },
];

const LEFT_TABS = ['Clips', 'Templates', 'Audio'];

export default function VideoStudioPanel() {
  const [mode, setMode] = useState('Timeline');
  const [selectedClipId, setSelectedClipId] = useState('intro');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [leftTab, setLeftTab] = useState('Clips');
  const [timelineZoom, setTimelineZoom] = useState(50);

  const selectedClip = MOCK_CLIPS.find((c) => c.id === selectedClipId) ?? MOCK_CLIPS[0];

  return (
    <div className="space-y-4">
      {/* Header */}
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold">Video Studio</h1>
          <p className="text-sm text-gray-400 max-w-2xl">
            CapCut-style workspace to prepare intros, promo clips and replay highlights
            for your JBAlive events. Now with a clear uploaded-video preview so you can
            see what you&apos;re editing.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-2 text-[11px] md:items-end">
          <div className="flex gap-2">
            {MODES.map((m) => {
              const active = m === mode;
              return (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={[
                    'px-3 py-1.5 rounded-full border',
                    active
                      ? 'border-indigo-500 bg-indigo-600/20 text-indigo-200'
                      : 'border-gray-700 text-gray-300 hover:border-indigo-500',
                  ].join(' ')}
                >
                  {m}
                </button>
              );
            })}
          </div>
          <div className="flex gap-2 text-[10px] text-gray-500">
            <span>Aspect:</span>
            {ASPECT_RATIOS.map((ar) => {
              const active = ar.id === aspectRatio;
              return (
                <button
                  key={ar.id}
                  onClick={() => setAspectRatio(ar.id)}
                  className={[
                    'px-2 py-0.5 rounded-full border',
                    active
                      ? 'border-indigo-500 bg-indigo-600/20 text-indigo-200'
                      : 'border-gray-700 text-gray-300 hover:border-indigo-500',
                  ].join(' ')}
                >
                  {ar.id}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Top toolbar (CapCut-style) */}
      <div className="rounded-xl border border-gray-800 bg-[#050814] px-3 py-2 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
            ⟲ Undo
          </button>
          <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
            ⟳ Redo
          </button>
          <span className="mx-2 h-4 w-px bg-gray-800" />
          <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
            ✂ Split
          </button>
          <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
            𝑆 Speed
          </button>
          <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
            ✎ Text
          </button>
          <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
            ✨ Filters
          </button>
          <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
            🧠 AI Cut (soon)
          </button>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <div className="flex items-center gap-1">
            <span>Snap</span>
            <input type="checkbox" className="accent-indigo-500" defaultChecked />
          </div>
          <div className="flex items-center gap-1">
            <span>Timeline zoom</span>
            <input
              type="range"
              min={10}
              max={100}
              value={timelineZoom}
              onChange={(e) => setTimelineZoom(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* Main editor card */}
      <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-4 text-sm">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* LEFT: Clips / Templates / Audio */}
          <div className="w-full space-y-3 lg:w-1/4">
            <div className="flex gap-1 text-[11px] border-b border-gray-800 pb-1">
              {LEFT_TABS.map((tab) => {
                const active = tab === leftTab;
                return (
                  <button
                    key={tab}
                    onClick={() => setLeftTab(tab)}
                    className={[
                      'px-2 py-1 rounded-md',
                      active
                        ? 'bg-indigo-600/20 text-indigo-200'
                        : 'text-gray-400 hover:text-gray-200',
                    ].join(' ')}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {leftTab === 'Clips' && (
              <>
                {/* Upload area */}
                <div className="rounded-md border border-dashed border-gray-700 bg-[#050814] p-3 text-[11px] text-gray-500">
                  Drag &amp; drop clips here or click &ldquo;Upload&rdquo;. This will later
                  import real media files for each event.
                </div>

                {/* NEW: Uploaded clip preview panel */}
                <div className="rounded-md border border-gray-800 bg-[#050814] p-3 space-y-2 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Uploaded clip preview</span>
                    <span className="text-[10px] text-gray-500">
                      Source video (not the full edit)
                    </span>
                  </div>
                  <div className="mt-1 rounded-md bg-black h-32 flex flex-col">
                    <div className="flex-1 flex items-center justify-center text-[10px] text-gray-500">
                      This is where the uploaded video file for &ldquo;{selectedClip.name}&rdquo;
                      will display once connected.
                    </div>
                    <div className="h-7 border-t border-gray-800 flex items-center justify-between px-2 text-[10px] text-gray-300 bg-[#050814]">
                      <div className="flex items-center gap-1">
                        <button className="px-1.5 py-0.5 rounded border border-gray-700 hover:border-indigo-500">
                          ▶
                        </button>
                        <span className="text-gray-500">Source preview</span>
                      </div>
                      <span className="text-gray-400">00:00 / {selectedClip.duration}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500">
                    Think of this as the raw footage viewer. The big preview in the middle
                    is your edited timeline output.
                  </p>
                </div>

                {/* Clip list */}
                <div className="space-y-1">
                  {MOCK_CLIPS.map((clip) => {
                    const active = clip.id === selectedClipId;
                    return (
                      <button
                        key={clip.id}
                        onClick={() => setSelectedClipId(clip.id)}
                        className={[
                          'w-full text-left px-3 py-2 rounded-md text-xs transition-colors',
                          active
                            ? 'bg-indigo-600/20 border border-indigo-500 text-indigo-100'
                            : 'bg-[#050814] border border-gray-700 text-gray-300 hover:border-indigo-500',
                        ].join(' ')}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{clip.name}</span>
                          <span className="text-[10px] text-gray-400">{clip.duration}</span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-[10px] text-gray-500">
                          {clip.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {leftTab === 'Templates' && (
              <div className="space-y-2 text-[11px] text-gray-400">
                <p className="text-xs text-gray-300">Templates (coming soon)</p>
                <div className="rounded-md border border-dashed border-gray-700 bg-[#050814] p-3 space-y-2">
                  <p>• Launch promo (vertical 9:16)</p>
                  <p>• Webinar replay highlight (16:9)</p>
                  <p>• Social teaser (under 30s)</p>
                  <p className="pt-1 text-[10px] text-gray-500">
                    These will become one-click templates that auto-apply cuts, text and
                    layouts for different event types.
                  </p>
                </div>
              </div>
            )}

            {leftTab === 'Audio' && (
              <div className="space-y-2 text-[11px] text-gray-400">
                <p className="text-xs text-gray-300">Audio library (coming soon)</p>
                <div className="rounded-md border border-dashed border-gray-700 bg-[#050814] p-3 space-y-1">
                  <p>• Clean mic recording</p>
                  <p>• Soft background music</p>
                  <p>• Punchy intro sting</p>
                  <p className="pt-1 text-[10px] text-gray-500">
                    You&apos;ll be able to adjust levels, duck music under voice and
                    preview audio mixes here.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* CENTER: Preview + timeline */}
          <div className="flex-1 space-y-3">
            {/* MAIN EDIT PREVIEW */}
            <div className="rounded-lg border border-gray-800 bg-black flex flex-col">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-800 bg-[#050814] text-[11px] text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Timeline preview</span>
                  <span className="text-[10px] text-gray-500">
                    Edited output (what viewers will see)
                  </span>
                </div>
                <span className="text-[10px] text-gray-500">
                  Source: {selectedClip.name} • {aspectRatio}
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center text-[11px] text-gray-500">
                This area will show the combined, edited video (timeline output) once
                media playback is wired in.
              </div>
              <div className="h-10 border-t border-gray-800 flex items-center justify-between px-3 text-[11px] text-gray-300 bg-[#050814]">
                <div className="flex items-center gap-2">
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    ▶ Play
                  </button>
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    ⏮ In
                  </button>
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    ⏭ Out
                  </button>
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    0.5x
                  </button>
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    1x
                  </button>
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    2x
                  </button>
                </div>
                <div className="text-gray-400">
                  00:00 / {selectedClip.duration}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-lg border border-gray-800 bg-[#050814] p-3 space-y-2 text-[11px] text-gray-400">
              <div className="flex items-center justify-between">
                <span>Multi-track timeline</span>
                <span className="text-gray-500">
                  Zoom: {timelineZoom}% • Total ~50:00
                </span>
              </div>

              <div className="space-y-1">
                {/* Video */}
                <div className="grid grid-cols-[80px,1fr] gap-2 items-center">
                  <div className="text-[10px] text-gray-500">Video 1</div>
                  <div className="h-7 rounded-md bg-gradient-to-r from-indigo-700/60 via-indigo-500/40 to-indigo-700/60 flex items-center px-2 gap-1">
                    <span className="bg-black/40 rounded-sm px-1 py-0.5">Intro</span>
                    <span className="bg-black/40 rounded-sm px-1 py-0.5">Main</span>
                    <span className="bg-black/40 rounded-sm px-1 py-0.5">Q&amp;A</span>
                    <span className="bg-black/40 rounded-sm px-1 py-0.5">CTA</span>
                  </div>
                </div>

                {/* Overlays */}
                <div className="grid grid-cols-[80px,1fr] gap-2 items-center">
                  <div className="text-[10px] text-gray-500">Overlays</div>
                  <div className="h-5 rounded-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 flex items-center px-2 gap-1">
                    <span className="bg-black/30 rounded-sm px-1 py-0.5">Lower thirds</span>
                    <span className="bg-black/30 rounded-sm px-1 py-0.5">Segment labels</span>
                  </div>
                </div>

                {/* Text track */}
                <div className="grid grid-cols-[80px,1fr] gap-2 items-center">
                  <div className="text-[10px] text-gray-500">Text</div>
                  <div className="h-4 rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 flex items-center px-2 gap-1">
                    <span className="bg-black/50 rounded-sm px-1 py-0.5">Hook line</span>
                    <span className="bg-black/50 rounded-sm px-1 py-0.5">CTA overlay</span>
                  </div>
                </div>

                {/* Audio */}
                <div className="grid grid-cols-[80px,1fr] gap-2 items-center">
                  <div className="text-[10px] text-gray-500">Audio</div>
                  <div className="h-4 rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 flex items-center px-2 gap-1">
                    <span className="bg-black/50 rounded-sm px-1 py-0.5">Mic</span>
                    <span className="bg-black/50 rounded-sm px-1 py-0.5">Music bed</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    + Split clip
                  </button>
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    + Add marker
                  </button>
                  <button className="px-2 py-1 rounded-md border border-gray-700 hover:border-indigo-500">
                    Auto captions (soon)
                  </button>
                </div>
                <div className="text-[10px] text-gray-500">
                  In a future version, these tracks will be draggable and editable, like in
                  CapCut or other NLEs.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Inspector */}
          <div className="w-full space-y-3 lg:w-1/4">
            <div className="rounded-lg border border-gray-800 bg-[#050814] p-3 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Clip details</span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-gray-500">
                  Inspector
                </span>
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <label className="block text-[11px] text-gray-400">Name</label>
                  <input
                    type="text"
                    value={selectedClip.name}
                    readOnly
                    className="w-full rounded-md bg-[#030714] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[11px] text-gray-400">Duration</label>
                  <input
                    type="text"
                    value={selectedClip.duration}
                    readOnly
                    className="w-full rounded-md bg-[#030714] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[11px] text-gray-400">In / Out points</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value="00:00"
                      readOnly
                      className="w-1/2 rounded-md bg-[#030714] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none"
                    />
                    <input
                      type="text"
                      value={selectedClip.duration}
                      readOnly
                      className="w-1/2 rounded-md bg-[#030714] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] text-gray-400">Playback speed</label>
                  <select className="w-full rounded-md bg-[#030714] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none">
                    <option>0.5x (slow)</option>
                    <option defaultValue="selected">1x (normal)</option>
                    <option>1.5x</option>
                    <option>2x</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] text-gray-400">Volume</label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={80}
                    className="w-full"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] text-gray-400">Usage</label>
                  <div className="rounded-md bg-[#030714] border border-gray-700 px-2 py-2 text-[11px] text-gray-300 space-y-1">
                    <p>• Launch Masterclass – main replay</p>
                    <p>• Promo clip for social (shortened)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t border-gray-800 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">Tags</span>
                  <button className="text-[10px] text-indigo-400 hover:text-indigo-300">
                    Edit
                  </button>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="rounded-full bg-indigo-600/20 px-2 py-0.5 text-indigo-200">
                    intro
                  </span>
                  <span className="rounded-full bg-gray-700/60 px-2 py-0.5 text-gray-100">
                    replay
                  </span>
                  <span className="rounded-full bg-gray-700/60 px-2 py-0.5 text-gray-100">
                    promo
                  </span>
                </div>
              </div>
            </div>

            {mode === 'Export' && (
              <div className="rounded-lg border border-gray-800 bg-[#050814] p-3 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Export presets</span>
                  <span className="text-[10px] text-gray-500">Coming soon</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Choose output formats optimised for where your clips will live.
                </p>
                <ul className="space-y-1 text-[11px] text-gray-400">
                  <li>• TikTok / Reels (9:16, under 60s)</li>
                  <li>• YouTube Shorts (9:16, under 60s)</li>
                  <li>• YouTube Replay (16:9, full length)</li>
                  <li>• LinkedIn teaser (square, under 30s)</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-3 text-[11px]">
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 font-semibold">
              Save workspace
            </button>
            <button className="px-3 py-1.5 rounded-full border border-gray-700 hover:border-indigo-500">
              Export current sequence
            </button>
          </div>
          <div className="text-gray-500">
            Left: source upload & preview • Middle: edited timeline preview • Right: clip
            inspector. When you&apos;re ready, we can plug in real video playback.
          </div>
        </div>
      </div>
    </div>
  );
}
