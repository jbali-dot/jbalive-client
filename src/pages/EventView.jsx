import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const EventView = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("jbalive_events");
    if (!stored) return;
    const list = JSON.parse(stored);
    const found = list.find((e) => e.id === eventId);
    setEvent(found || null);
  }, [eventId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header with nav, same as other pages */}
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
          {!event ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-300">
              <h1 className="text-xl font-semibold text-slate-50 mb-2">
                Event not found
              </h1>
              <p>
                This event could not be loaded. It may have been removed or you
                might be opening this link from a different browser than the one
                that created it in this MVP version.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                In a future version, event details will be loaded from a central
                backend, so they&apos;re available to anyone with the link.
              </p>
              <Link
                to="/"
                className="mt-4 inline-flex rounded-full bg-indigo-500 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-400"
              >
                Go back home
              </Link>
            </div>
          ) : (
            <>
              <section className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                  Live event
                </p>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {event.title}
                </h1>
                <p className="text-sm text-slate-300">
                  {event.date} • {event.time} • Hosted by {event.hostName}
                </p>
              </section>

              <section className="grid gap-6 md:grid-cols-[2fr,1.1fr] md:items-start">
                {/* Video / stream area */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 md:p-4">
                  {event.streamUrl ? (
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-black">
                      <iframe
                        src={event.streamUrl}
                        title={event.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="aspect-video flex items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950 text-xs text-slate-400">
                      No stream URL provided yet. The host can configure a
                      YouTube Live, Vimeo or custom player link in the
                      dashboard.
                    </div>
                  )}
                  {event.description && (
                    <p className="mt-4 text-sm text-slate-200">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-4 text-sm text-slate-300">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <h2 className="text-sm font-semibold text-slate-100 mb-2">
                      Event details
                    </h2>
                    <p className="text-xs text-slate-300">
                      This is a JBAlive event page. In the full platform,
                      attendees will be able to chat, respond to polls and ask
                      questions alongside the main stream.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
                    <p className="font-semibold text-slate-100 mb-1">
                      Powered by JBAlive
                    </p>
                    <p>
                      JBAlive helps creators, consultants and brands run
                      professional, on-brand virtual events without needing a
                      separate tech team or production studio.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default EventView;

