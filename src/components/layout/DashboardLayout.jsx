import React from 'react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'events', label: 'Events' },
  { id: 'eventStudio', label: 'Event Studio' },
  { id: 'videoStudio', label: 'Video Studio' },
  { id: 'mediaLibrary', label: 'Media Library' },
  { id: 'settings', label: 'Settings' },
];

export default function DashboardLayout({ activeMenu, onMenuClick, children }) {
  return (
    <div className="min-h-screen bg-[#050814] text-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-gray-800 bg-[#050814] flex flex-col">
        <div className="px-4 py-4 border-b border-gray-800">
          <div className="text-sm font-semibold">JBAlive Dashboard</div>
          <div className="text-[11px] text-gray-500">Manage your live experiences</div>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 text-sm">
          {MENU_ITEMS.map((item) => {
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onMenuClick(item.id)}
                className={[
                  'w-full text-left px-3 py-2 rounded-lg transition-colors',
                  isActive
                    ? 'bg-indigo-600/20 text-indigo-300'
                    : 'text-gray-300 hover:bg-gray-800/60',
                ].join(' ')}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="px-4 py-3 border-t border-gray-800 text-[11px] text-gray-500">
          Logged in as<br />
          <span className="text-gray-300">Joshua Benjamin Ali</span>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 border-b border-gray-800 flex items-center justify-between px-4 bg-[#050814]/95 backdrop-blur">
          <div className="text-xs text-gray-400">
            {activeMenu === 'overview' && 'Overview of your JBAlive workspace'}
            {activeMenu === 'events' && 'Create, manage and share your events'}
            {activeMenu === 'eventStudio' && 'Design your event pages with JBAlive'}
            {activeMenu === 'videoStudio' && 'Prepare and edit event videos'}
            {activeMenu === 'mediaLibrary' && 'Manage your logos, banners and media'}
            {activeMenu === 'settings' && 'Workspace and account settings'}
          </div>
          <div className="flex items-center gap-3 text-[11px] text-gray-400">
            <span className="hidden md:inline">Where Business Meets Broadcast</span>
            <Link
              to="/"
              className="px-3 py-1.5 rounded-full border border-gray-700 hover:border-indigo-500 hover:text-indigo-200"
            >
              ← Back to website
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
