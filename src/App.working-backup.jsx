import { useState } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import EventsPage from './pages/EventsPage';

function DashboardView() {
  const [activeMenu, setActiveMenu] = useState('events');

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <p className="text-sm text-gray-400">
              This will later show a high-level overview of your upcoming
              events, registrations and performance. For now, go to{' '}
              <span className="text-indigo-400 font-medium">Events</span> to
              manage your sessions.
            </p>
          </div>
        );
      case 'events':
        return <EventsPage />;
      case 'eventStudio':
        return (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Event Studio (coming soon)</h2>
            <p className="text-sm text-gray-400 max-w-md">
              Here you will be able to design and customize event pages with
              logos, banners, and layout presets together with the JBAlive team.
            </p>
          </div>
        );
      case 'videoStudio':
        return (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Video Studio (coming soon)</h2>
            <p className="text-sm text-gray-400 max-w-md">
              This section will host CapCut-style editing tools for trimming,
              clipping and preparing pre-recorded event content.
            </p>
          </div>
        );
      case 'liveSessions':
        return (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Live Sessions (coming soon)</h2>
            <p className="text-sm text-gray-400 max-w-md">
              Join a live co-build session with the JBAlive team to set up your
              events, assets and run-of-show.
            </p>
          </div>
        );
      case 'mediaLibrary':
        return (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Media Library (coming soon)</h2>
            <p className="text-sm text-gray-400 max-w-md">
              A central place for your logos, overlays, intro videos and
              reusable media assets.
            </p>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Settings (coming soon)</h2>
            <p className="text-sm text-gray-400 max-w-md">
              Configure your JBAlive workspace, branding defaults and
              integrations.
            </p>
          </div>
        );
      default:
        return <EventsPage />;
    }
  };

  return (
    <DashboardLayout activeMenu={activeMenu} onMenuClick={setActiveMenu}>
      {renderContent()}
    </DashboardLayout>
  );
}

function MarketingView({ onOpenDashboard }) {
  return (
    <div className="min-h-screen bg-[#050814] text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-20 border-b border-gray-800 bg-[#050814]/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold tracking-tight">JBAlive</div>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-700 text-gray-400">
              Where Business Meets Broadcast
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <button className="text-gray-300 hover:text-white">Features</button>
            <button className="text-gray-300 hover:text-white">Pricing</button>
            <button className="text-gray-300 hover:text-white">About</button>
            <button className="text-gray-300 hover:text-white">Contact</button>
            <button
              onClick={onOpenDashboard}
              className="px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
            >
              Go to dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="mx-auto max-w-4xl px-4 py-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
            Go live. Engage. Convert.
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Host stunning virtual events without technical stress.
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl">
            JBAlive is your all-in-one platform to host virtual events, webinars,
            product launches and live broadcasts that look professional and
            convert viewers into clients.
          </p>
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            <button className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold">
              Start free
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-700 text-gray-200 hover:border-indigo-500">
              Book a demo
            </button>
            <button
              onClick={onOpenDashboard}
              className="px-4 py-2 rounded-full border border-gray-700 text-gray-200 hover:border-indigo-500"
            >
              Create your first event
            </button>
          </div>
          <p className="text-[11px] text-gray-500">
            No complicated setup • Custom branded event pages • HD streaming &amp;
            live chat • Automated replays • Analytics &amp; engagement insights
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 space-y-4">
          <div className="rounded-2xl border border-gray-800 bg-[#0B1020] p-4">
            <div className="text-xs text-gray-400 mb-2">Next live event</div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">
                  Launch Masterclass: From Idea to Live Event
                </div>
                <div className="text-xs text-green-400 mt-1">Ready to go live</div>
                <div className="text-[11px] text-gray-500 mt-1">
                  Backstage view • Speakers • Registrations • Engagement
                </div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>
                  <div className="text-gray-400">Speakers</div>
                  <div className="text-gray-100 font-semibold">3 online</div>
                </div>
                <div>
                  <div className="text-gray-400">Registrations</div>
                  <div className="text-gray-100 font-semibold">148</div>
                </div>
                <div>
                  <div className="text-gray-400">Engagement</div>
                  <div className="text-gray-100 font-semibold">High</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-6 text-xs text-gray-500 text-center">
        Built by JBA Consults • Designed for growth-focused creators, agencies and
        brands. © 2025 JBAlive. All rights reserved.
      </footer>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState('site'); // 'site' or 'dashboard'

  if (view === 'dashboard') {
    return <DashboardView />;
  }

  return <MarketingView onOpenDashboard={() => setView('dashboard')} />;
}
