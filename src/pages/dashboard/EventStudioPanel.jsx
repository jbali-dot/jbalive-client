import React, { useState } from 'react';

const STEPS = [
  { id: 'brief', label: 'Event brief' },
  { id: 'branding', label: 'Branding & assets' },
  { id: 'layout', label: 'Page layout' },
  { id: 'runOfShow', label: 'Run of show' },
];

export default function EventStudioPanel() {
  const [activeStep, setActiveStep] = useState('brief');

  const stepIndex = STEPS.findIndex((s) => s.id === activeStep);
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  return (
    <div className="space-y-5">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold">Event Studio (co-build)</h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          A guided workspace where you and the JBAlive team (or your team) can design
          a custom event experience together — from brief and branding to layout,
          page background and run-of-show.
        </p>
      </header>

      {/* Steps tabs */}
      <div className="flex flex-wrap gap-2 text-[11px]">
        {STEPS.map((step, index) => {
          const isActive = step.id === activeStep;
          const isDone = index < stepIndex;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={[
                'px-3 py-1.5 rounded-full border flex items-center gap-2',
                isActive
                  ? 'border-indigo-500 bg-indigo-600/20 text-indigo-200'
                  : isDone
                  ? 'border-emerald-500/70 bg-emerald-600/10 text-emerald-200'
                  : 'border-gray-700 text-gray-300 hover:border-indigo-500',
              ].join(' ')}
            >
              {isDone && <span>✓</span>}
              <span>{index + 1}.</span>
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>

      {/* Progress */}
      <div className="space-y-1 text-[11px] text-gray-400">
        <div className="flex justify-between">
          <span>Co-build progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
          <div
            className="h-1.5 rounded-full bg-indigo-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main grid */}
      <div className="grid gap-4 lg:grid-cols-[1.1fr,2.2fr,1.2fr]">
        {/* LEFT: Step summary */}
        <div className="space-y-3 text-sm">
          <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-3 space-y-2">
            <h2 className="text-xs font-semibold text-gray-100">Co-build checklist</h2>
            <ul className="text-[11px] text-gray-400 space-y-1">
              <li>
                {stepIndex >= 0 ? '✓' : '•'} Define event brief &amp; audience
              </li>
              <li>
                {stepIndex >= 1 ? '✓' : '•'} Upload logos, banners &amp; brand colors
              </li>
              <li>
                {stepIndex >= 2 ? '✓' : '•'} Choose layout &amp; page background
              </li>
              <li>
                {stepIndex >= 3 ? '✓' : '•'} Finalise run-of-show and CTAs
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#050814] p-3 space-y-2 text-[11px] text-gray-400">
            <div className="text-xs text-gray-300">Who is this for?</div>
            <p>
              Use Event Studio for higher-stakes events: launches, flagship webinars,
              virtual summits and private trainings where you want the experience to
              feel like a show, not a meeting.
            </p>
          </div>
        </div>

        {/* CENTER: Active step content */}
        <div className="space-y-4 text-sm">
          {activeStep === 'brief' && <BriefStep />}
          {activeStep === 'branding' && <BrandingStep />}
          {activeStep === 'layout' && <LayoutStep />}
          {activeStep === 'runOfShow' && <RunOfShowStep />}
        </div>

        {/* RIGHT: Live collaboration & notes */}
        <div className="space-y-3 text-sm">
          <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-3 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Live co-build session</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.16em]">
                Collaboration
              </span>
            </div>
            <p className="text-[11px] text-gray-400">
              Share this with your team and the JBAlive co-host before the session.
            </p>

            <div className="space-y-2 mt-1">
              <div className="space-y-1">
                <div className="text-[11px] text-gray-400">Preferred date &amp; time</div>
                <input
                  type="text"
                  placeholder="e.g. Thursday 15:00 CET"
                  className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none focus:border-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-gray-400">Call link (Zoom / Meet)</div>
                <input
                  type="text"
                  placeholder="Paste your Zoom/Meet link or leave for JBAlive to provide."
                  className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <button className="mt-2 w-full px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-[11px] font-semibold">
              Request / confirm co-build session
            </button>

            <p className="text-[10px] text-gray-500 mt-1">
              In the future this will connect to a real booking link, assign a producer
              and attach the session to this event.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#050814] p-3 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Session notes</span>
              <span className="text-[10px] text-gray-500">Shared during call</span>
            </div>
            <textarea
              rows={8}
              placeholder="Capture decisions, copy ideas and last-minute changes here during the co-build session."
              className="w-full rounded-md bg-[#030714] border border-gray-700 px-2 py-2 text-[11px] text-gray-100 outline-none resize-none focus:border-indigo-500"
            />
            <p className="text-[10px] text-gray-500">
              Later this can sync to the event’s internal notes and be visible to your
              team only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----- Step components ----- */

function BriefStep() {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-4">
      <h2 className="text-sm font-semibold text-gray-100">1. Event brief</h2>
      <p className="text-xs text-gray-400 max-w-xl">
        Give the JBAlive team enough context to help you shape the page and experience:
        who&apos;s attending, why this event matters and what you want people to do next.
      </p>

      <div className="grid gap-3 md:grid-cols-2 text-xs">
        <div className="space-y-1">
          <label className="block text-gray-300">Working title</label>
          <input
            type="text"
            placeholder="e.g. Launch Masterclass: From Idea to Live Event"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-gray-300">Primary CTA</label>
          <input
            type="text"
            placeholder="e.g. Book a strategy call, Join the program, Get the replay"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 text-xs">
        <div className="space-y-1">
          <label className="block text-gray-300">Ideal attendees</label>
          <textarea
            rows={3}
            placeholder="Who is this for? What stage are they at? What problems are they trying to solve?"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none resize-none focus:border-indigo-500"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-gray-300">Key promise / outcome</label>
          <textarea
            rows={3}
            placeholder="What will attendees walk away with? What transformation or result do you promise?"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none resize-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="space-y-1 text-xs">
        <label className="block text-gray-300">Positioning notes</label>
        <textarea
          rows={3}
          placeholder="Is this a free lead-gen event, a paid workshop, or part of a launch sequence? Any competitors or reference events we should know about?"
          className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none resize-none focus:border-indigo-500"
        />
      </div>
    </div>
  );
}

function BrandingStep() {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-4">
      <h2 className="text-sm font-semibold text-gray-100">2. Branding &amp; assets</h2>
      <p className="text-xs text-gray-400 max-w-xl">
        Collect everything needed to make the event page look on-brand: logos, colors,
        fonts, hero visuals and background imagery.
      </p>

      <div className="grid gap-3 md:grid-cols-2 text-xs">
        {/* Logos */}
        <div className="space-y-2">
          <label className="block text-gray-300">Logos</label>
          <div className="rounded-md border border-dashed border-gray-700 bg-[#050814] p-3 space-y-2 text-[11px] text-gray-500">
            <p>
              Drag &amp; drop your primary and alternate logos here. In the future, this
              will store them in your media library and make them available across all
              events.
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-[11px] font-semibold">
                Upload logo
              </button>
              <button className="px-3 py-1.5 rounded-full border border-gray-700 hover:border-indigo-500 text-[11px]">
                Choose from library
              </button>
            </div>
          </div>
        </div>

        {/* Hero banner */}
        <div className="space-y-2">
          <label className="block text-gray-300">Hero banner / key visual</label>
          <div className="rounded-md border border-dashed border-gray-700 bg-[#050814] p-3 space-y-2 text-[11px] text-gray-500">
            <p>
              Upload a hero image or share a reference. The JBAlive team can help adapt
              it to fit the event page layout and background treatment.
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-[11px] font-semibold">
                Upload hero image
              </button>
              <button className="px-3 py-1.5 rounded-full border border-gray-700 hover:border-indigo-500 text-[11px]">
                Choose from library
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Colors & fonts */}
      <div className="grid gap-3 md:grid-cols-3 text-xs">
        <div className="space-y-1">
          <label className="block text-gray-300">Primary brand color</label>
          <input
            type="text"
            placeholder="#4F46E5 or &quot;Indigo&quot;"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-gray-300">Accent color</label>
          <input
            type="text"
            placeholder="#F97316 or &quot;Orange highlight&quot;"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-gray-300">Preferred font style</label>
          <input
            type="text"
            placeholder="e.g. Sans-serif, similar to Inter"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Brand references */}
      <div className="space-y-1 text-xs">
        <label className="block text-gray-300">Brand guidelines / references</label>
        <textarea
          rows={3}
          placeholder="Link to a brand guide, website, or past landing page you like. Note any must-use or must-avoid elements."
          className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none resize-none focus:border-indigo-500"
        />
      </div>
    </div>
  );
}

function LayoutStep() {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-4">
      <h2 className="text-sm font-semibold text-gray-100">3. Page layout &amp; background</h2>
      <p className="text-xs text-gray-400 max-w-xl">
        Choose how the event page should be structured and how it should feel visually:
        layout, sections and background treatment.
      </p>

      {/* Layout style & sections */}
      <div className="grid gap-3 md:grid-cols-2 text-xs">
        <div className="space-y-2">
          <label className="block text-gray-300">Layout style</label>
          <div className="space-y-1">
            <label className="flex items-center gap-2">
              <input type="radio" name="layoutStyle" defaultChecked className="accent-indigo-500" />
              <span>Conversion-focused (short, punchy, strong CTA)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="layoutStyle" className="accent-indigo-500" />
              <span>Story-driven (more copy, narrative arc)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="layoutStyle" className="accent-indigo-500" />
              <span>Detailed (for technical / B2B audiences)</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-300">Sections to include</label>
          <div className="space-y-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-indigo-500" />
              <span>Hero with title, date and CTA</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-indigo-500" />
              <span>Who this is for / outcomes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-indigo-500" />
              <span>Speakers &amp; host section</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              <span>Agenda / breakdown by segment</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              <span>Social proof (logos, testimonials)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-500" />
              <span>FAQ for objections</span>
            </label>
          </div>
        </div>
      </div>

      {/* Page background customization */}
      <div className="grid gap-3 md:grid-cols-[1.7fr,1.3fr] text-xs">
        <div className="space-y-2">
          <label className="block text-gray-300">Page background style</label>
          <p className="text-[11px] text-gray-400">
            Decide how the event page should feel behind the content — clean light,
            cinematic dark, gradient or a branded background image.
          </p>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="bgStyle" defaultChecked className="accent-indigo-500" />
              <span>Solid color background</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Hex code (e.g. #050814)"
                className="rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none focus:border-indigo-500 col-span-2"
              />
              <button className="rounded-md border border-gray-700 bg-gradient-to-br from-indigo-500 to-purple-600 text-[10px] text-gray-100 px-2 py-1">
                Use brand color
              </button>
            </div>

            <label className="flex items-center gap-2 pt-1">
              <input type="radio" name="bgStyle" className="accent-indigo-500" />
              <span>Gradient background</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="From color"
                className="rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none focus:border-indigo-500"
              />
              <input
                type="text"
                placeholder="To color"
                className="rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-[11px] text-gray-100 outline-none focus:border-indigo-500"
              />
            </div>

            <label className="flex items-center gap-2 pt-1">
              <input type="radio" name="bgStyle" className="accent-indigo-500" />
              <span>Background image</span>
            </label>
            <div className="rounded-md border border-dashed border-gray-700 bg-[#050814] p-3 space-y-2">
              <p className="text-[11px] text-gray-500">
                Upload a subtle texture or background image to sit behind your content.
                We usually recommend something soft and low-contrast.
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-[11px] font-semibold">
                  Upload background image
                </button>
                <button className="px-3 py-1.5 rounded-full border border-gray-700 hover:border-indigo-500 text-[11px]">
                  Choose from library
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Concept preview */}
        <div className="space-y-2">
          <label className="block text-gray-300">Concept preview</label>
          <div className="rounded-lg border border-gray-800 bg-[#050814] p-3 text-[11px] text-gray-400 space-y-2">
            <div className="text-xs text-gray-300">Wireframe preview (conceptual)</div>
            <p>
              In a future version, this area will show a live preview of your event page
              with the chosen background, layout and hero assets applied.
            </p>
            <div className="mt-2 rounded-md bg-gradient-to-br from-indigo-950 via-[#050814] to-purple-900 border border-gray-800 h-24 flex items-center justify-center text-[10px] text-gray-300">
              Event page preview placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RunOfShowStep() {
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0B1020] p-4 space-y-4">
      <h2 className="text-sm font-semibold text-gray-100">4. Run of show</h2>
      <p className="text-xs text-gray-400 max-w-xl">
        Map out what happens from T-10 minutes to the final CTA: who&apos;s speaking,
        what&apos;s on screen, and how you transition between segments.
      </p>

      <div className="grid gap-3 md:grid-cols-2 text-xs">
        <div className="space-y-2">
          <label className="block text-gray-300">High-level flow</label>
          <textarea
            rows={5}
            placeholder="e.g. 10 min warm-up &amp; chat, 5 min intro, 25 min teaching, 10 min case study, 15 min Q&amp;A, 5 min CTA and next steps."
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none resize-none focus:border-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-300">Roles &amp; responsibilities</label>
          <textarea
            rows={5}
            placeholder="Host, co-host, producer, chat moderator, closer. Who does what and when? Any handoffs we should coordinate?"
            className="w-full rounded-md bg-[#050814] border border-gray-700 px-2 py-1 text-gray-100 outline-none resize-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <label className="block text-gray-300">Key moments &amp; cues</label>
        <div className="grid gap-2 md:grid-cols-3">
          <div className="rounded-md border border-gray-800 bg-[#050814] p-2 space-y-1">
            <div className="text-[11px] text-gray-400">Opening hook</div>
            <p className="text-[11px] text-gray-500">
              How do we grab attention in the first 30–60 seconds?
            </p>
          </div>
          <div className="rounded-md border border-gray-800 bg-[#050814] p-2 space-y-1">
            <div className="text-[11px] text-gray-400">Transition to offer</div>
            <p className="text-[11px] text-gray-500">
              What bridge do we use from teaching to the invitation / CTA?
            </p>
          </div>
          <div className="rounded-md border border-gray-800 bg-[#050814] p-2 space-y-1">
            <div className="text-[11px] text-gray-400">Close &amp; next steps</div>
            <p className="text-[11px] text-gray-500">
              What do we want attendees to do immediately after the event?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
