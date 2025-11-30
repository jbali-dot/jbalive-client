import React from "react";

export default function OverviewPanel() {
  // Static demo numbers for now – later these can come from a backend
  const stats = [
    {
      label: "Upcoming events",
      value: "3",
      sub: "Next event in 4 days",
    },
    {
      label: "Total registrations (last 30 days)",
      value: "148",
      sub: "Across 2 live sessions",
    },
    {
      label: "Avg. live attendance",
      value: "71%",
      sub: "From registered attendees",
    },
    {
      label: "Replay views",
      value: "96",
      sub: "People watching after live",
    },
  ];

  const upcomingEvents = [
    {
      title: "Launch Masterclass: From Idea to Live Event",
      date: "Tue, 9 April • 18:00 CET",
      type: "Flagship webinar",
      status: "Preparing",
      cta: "View event setup",
    },
    {
      title: "Onboarding Q&A for new clients",
      date: "Thu, 11 April • 14:00 CET",
      type: "Client training",
      status: "Confirmed",
      cta: "Run of show",
    },
    {
      title: "Monthly Community Call",
      date: "Mon, 15 April • 19:00 CET",
      type: "Community session",
      status: "Draft",
      cta: "Finish event page",
    },
  ];

  const actions = [
    {
      title: "Finish Event Studio brief for next launch",
      body: "You’ve outlined the topic already. Add your CTA, ideal attendees and outcomes so the page and run-of-show can be shaped properly.",
      tag: "Event Studio",
    },
    {
      title: "Upload brand assets to Media Library",
      body: "Logos, overlays and intro videos can be reused across events. Start a ‘JBAlive House Style’ collection to speed up builds.",
      tag: "Branding",
    },
    {
      title: "Create a replay page template",
      body: "Turn your best live session into a replay funnel with a clear next step: book a call, join a program or download a resource.",
      tag: "Replays",
    },
  ];

  const activity = [
    {
      time: "2h ago",
      title: "New test event created",
      detail: "“Launch Masterclass – JBAlive demo” was added to Events.",
    },
    {
      time: "Yesterday",
      title: "Pricing page updated",
      detail: "Plans and Stripe links updated on the public site.",
    },
    {
      time: "This week",
      title: "Dashboard panels added",
      detail: "Event Studio, Video Studio and Media Library structure created.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top header row */}
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
            Dashboard overview
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50 md:text-2xl">
            Welcome back, Joshua. Here&apos;s your JBAlive cockpit.
          </h1>
          <p className="mt-1 text-xs text-slate-400 md:text-sm max-w-2xl">
            Quickly see how your events are performing, what&apos;s coming up next,
            and where to focus when you jump into JBAlive.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Demo data – wired for future analytics
          </span>
        </div>
      </header>

      {/* STAT CARDS */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-[#050814] p-4 space-y-1"
          >
            <p className="text-[11px] text-slate-400">{stat.label}</p>
            <p className="text-2xl font-semibold text-slate-50">
              {stat.value}
            </p>
            <p className="text-[11px] text-slate-500">{stat.sub}</p>
          </div>
        ))}
      </section>

      {/* MIDDLE GRID: upcoming + recommended actions */}
      <section className="grid gap-4 lg:grid-cols-[1.6fr,1.4fr]">
        {/* Upcoming events */}
        <div className="rounded-2xl border border-slate-800 bg-[#050814] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-100">
                Upcoming & priority events
              </h2>
              <p className="text-[11px] text-slate-400">
                A snapshot of the sessions you&apos;re shaping next.
              </p>
            </div>
            <button className="rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-200 hover:border-indigo-500">
              Go to Events
            </button>
          </div>

          <div className="space-y-2">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-200 flex flex-col gap-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-[13px]">{event.title}</p>
                  <span className="rounded-full border border-indigo-500/50 bg-indigo-500/10 px-2 py-0.5 text-[10px] text-indigo-200">
                    {event.type}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">{event.date}</p>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        event.status === "Confirmed"
                          ? "bg-emerald-400"
                          : event.status === "Preparing"
                          ? "bg-amber-400"
                          : "bg-slate-500"
                      }`}
                    />
                    <span>{event.status}</span>
                  </div>
                  <button className="text-[11px] text-indigo-300 hover:text-indigo-200">
                    {event.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="pt-1 text-[10px] text-slate-500">
            Later, this section will sync with real events, registrations and
            host availability from your JBAlive backend.
          </p>
        </div>

        {/* Recommended actions */}
        <div className="rounded-2xl border border-slate-800 bg-[#050814] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-100">
                Recommended next actions
              </h2>
              <p className="text-[11px] text-slate-400">
                Small steps that move JBAlive closer to a production-ready stack.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {actions.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-slate-100">{item.title}</p>
                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] text-slate-300">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">{item.body}</p>
                <button className="mt-2 text-[11px] text-indigo-300 hover:text-indigo-200">
                  Open relevant panel
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM GRID: activity + roadmap */}
      <section className="grid gap-4 lg:grid-cols-[1.4fr,1.6fr]">
        {/* Activity */}
        <div className="rounded-2xl border border-slate-800 bg-[#050814] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">
              Recent activity (local demo)
            </h2>
            <span className="text-[10px] text-slate-500">
              Later: real audit log
            </span>
          </div>

          <div className="space-y-2">
            {activity.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs"
              >
                <div className="pt-0.5 text-[10px] text-slate-500 w-16 shrink-0">
                  {item.time}
                </div>
                <div className="space-y-1">
                  <p className="text-slate-100 font-medium">{item.title}</p>
                  <p className="text-[11px] text-slate-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap / “coming soon” */}
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-900/40 via-[#050814] to-sky-800/30 p-4 space-y-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Where this dashboard is heading
          </h2>
          <p className="text-[11px] text-slate-200 max-w-xl">
            Think of this as the control room for JBAlive. Over time, it can
            become the place where you:
          </p>

          <ul className="space-y-1.5 text-[11px] text-slate-100">
            <li>• See registrations, attendance and replay performance at a glance</li>
            <li>• Jump straight into Event Studio for high-stakes launches</li>
            <li>• Reuse intros, overlays and media from a central library</li>
            <li>• Tune your pricing, plans and upsell flows based on real data</li>
          </ul>

          <p className="pt-1 text-[10px] text-slate-300">
            For now, you&apos;re using a design-first demo version — perfect for
            pitching the vision, collecting feedback and planning the real
            implementation.
          </p>
        </div>
      </section>
    </div>
  );
}

