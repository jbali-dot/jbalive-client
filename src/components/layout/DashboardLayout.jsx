export default function DashboardLayout({ children, activeMenu, onMenuClick }) {
  const handleClick = (key) => {
    if (onMenuClick) {
      onMenuClick(key);
    }
  };

  const baseItemClasses =
    'w-full text-left px-3 py-2 rounded-xl text-sm transition';
  const activeClasses = 'bg-gray-800/80 text-gray-100 font-medium';
  const inactiveClasses = 'text-gray-300 hover:bg-gray-800/60';

  const isActive = (key) => activeMenu === key;

  return (
    <div className="min-h-screen bg-[#050814] text-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 bg-[#050814]/90 backdrop-blur flex flex-col">
        <div className="px-6 py-4 border-b border-gray-800">
          <div className="text-lg font-semibold tracking-tight">
            JBAlive
          </div>
          <div className="text-xs text-gray-400">
            Event Studio
          </div>
        </div>

        <nav className="mt-4 px-3 space-y-1 text-sm">
          <button
            className={
              baseItemClasses +
              ' ' +
              (isActive('dashboard') ? activeClasses : inactiveClasses)
            }
            onClick={() => handleClick('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={
              baseItemClasses +
              ' ' +
              (isActive('events') ? activeClasses : inactiveClasses)
            }
            onClick={() => handleClick('events')}
          >
            Events
          </button>
          <button
            className={
              baseItemClasses +
              ' ' +
              (isActive('eventStudio') ? activeClasses : inactiveClasses)
            }
            onClick={() => handleClick('eventStudio')}
          >
            Event Studio
          </button>
          <button
            className={
              baseItemClasses +
              ' ' +
              (isActive('videoStudio') ? activeClasses : inactiveClasses)
            }
            onClick={() => handleClick('videoStudio')}
          >
            Video Studio
          </button>
          <button
            className={
              baseItemClasses +
              ' ' +
              (isActive('liveSessions') ? activeClasses : inactiveClasses)
            }
            onClick={() => handleClick('liveSessions')}
          >
            Live Sessions
          </button>
          <button
            className={
              baseItemClasses +
              ' ' +
              (isActive('mediaLibrary') ? activeClasses : inactiveClasses)
            }
            onClick={() => handleClick('mediaLibrary')}
          >
            Media Library
          </button>
          <button
            className={
              baseItemClasses +
              ' ' +
              (isActive('settings') ? activeClasses : inactiveClasses)
            }
            onClick={() => handleClick('settings')}
          >
            Settings
          </button>
        </nav>

        <div className="mt-auto px-4 py-4 text-xs text-gray-500 border-t border-gray-800">
          Logged in as
          <div className="text-gray-300 font-medium">
            Joshua Benjamin Ali
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        <header className="px-8 pt-6 pb-4 border-b border-gray-800">
          <h1 className="text-2xl font-semibold">
            Welcome back, Joshua Benjamin.
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Create, manage and share your JBAlive events from one place.
          </p>
        </header>

        <div className="flex-1 px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
