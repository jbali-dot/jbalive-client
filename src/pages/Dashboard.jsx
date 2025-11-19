import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  // Load events from localStorage on first render
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("jbalive_events");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("jbalive_events", JSON.stringify(events));
  }, [events]);

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    streamUrl: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.time) return;

    const id = Date.now().toString(); // simple unique id
    const newEvent = {
      id,
      title: form.title,
      date: form.date,
      time: form.time,
      description: form.description,
      streamUrl: form.streamUrl,
      createdAt: new Date().toISOString(),
      hostName: user?.fullName || user?.username || "Host",
    };

    const updated = [newEvent, ...events];
    setEvents(updated);
    setForm({
      title: "",
      date: "",
      time: "",
      description: "",
      streamUrl: "",
    });
  };

  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://jbalive.com";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header with nav */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-xs font-bold">
              JB
            </div>
            <span className="text-lg font-semibold tracking-tight">
              JBAlive
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <Link to="/" className="text-slate-300 hover:text-indigo-300">
              Home
            </Link>
            <Link
              to="/features"
              className="text-slate-300 hover:text-indigo-300"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-slate-300 hover:text-indigo-300"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-slate-300 hover:text-indigo-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-300 hover:text-indigo-300"
            >
              Contact
            </Link>
            <span className="text-indigo-300">Dashboard</span>
          </nav>
        </div>
      </header>

      {/* Main dashboard content */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
          {/* Welcome */}
          <section className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
              Dashboard
            </p>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              Welcome back{user?.firstName ? `, ${user.firstName}` : ""}.
            </h1>
            <p className="text-sm text-slate-300 md:text-base">
              Create, manage and share your JBAlive events from one place.
            </p>
          </section>

          {/* Create Event Form */}
          <section className="grid gap-6 md:grid-cols-[1.5fr,1.1fr] md:items-start">
            <form
              onSubmit={handleCreateEvent}
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h2 className="text-sm font-semibold text-slate-100 md:text-base">
                Create a new event
              </h2>
              <p className="text-xs text-slate-400 mb-2">
                Add a title, schedule and stream link. You&apos;ll get a shareable
                event page URL.
              </p>

              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Event title
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                  placeholder="Launch Masterclass, Live Q&A, Product Demo..."
                  required
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                  rows={3}
                  placeholder="What is this session about? Who is it for? What will they learn?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-200 mb-1">
                  Stream / video URL
                </label>
                <input
                  name="streamUrl"
                  value={form.streamUrl}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400"
                  placeholder="YouTube Live / Vimeo / custom player embed URL"
                />
                <p className="mt-1 text-[11px] text-slate-400">
                  For MVP, you can paste a YouTube Live link or any embeddable
                  URL. Later this can become a native JBAlive player.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-md hover:bg-indigo-400 transition"
              >
                Create event
              </button>
            </form>

            {/* Info / tips card */}
            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <h3 className="text-sm font-semibold text-slate-100 mb-2">
                  How this MVP works
                </h3>
                <p className="text-xs text-slate-300">
                  Right now, your events are stored in your browser
                  (localStorage) to give you the full flow: create an event,
                  get a URL, and see a public event page. In the next phase,
                  these can be saved to a real backend and shared across
                  accounts.
                </p>
              </div>
            </div>
          </section>

          {/* Events list */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-100 md:text-base">
                Your events
              </h2>
              <p className="text-xs text-slate-400">
                Each event has a public link you can share with your audience.
              </p>
            </div>

            {events.length === 0 ? (
              <p className="text-sm text-slate-400">
                No events yet. Create your first event using the form above.
              </p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {events.map((event) => {
                  const eventUrl = `${origin}/events/${event.id}`;
                  return (
                    <div
                      key={event.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-slate-50">
                          {event.title}
                        </h3>
                        <span className="text-[11px] text-slate-400">
                          {event.date} • {event.time}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-300 line-clamp-2">
                        {event.description || "No description provided."}
                      </p>
                      <p className="mt-2 text-[11px] text-slate-400">
                        Host: {event.hostName}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <Link
                          to={`/events/${event.id}`}
                          className="rounded-full bg-slate-800 px-3 py-1.5 text-xs text-slate-100 hover:bg-indigo-500/70"
                        >
                          View event page
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(eventUrl);
                          }}
                          className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200 hover:border-indigo-400"
                        >
                          Copy link
                        </button>
                      </div>
                      <p className="mt-2 text-[11px] text-slate-500 break-all">
                        {eventUrl}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

