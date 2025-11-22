import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import EventsPage from './EventsPage';

function ComingSoon({ title }) {
  return (
    <div className="h-full flex flex-col items-start justify-center gap-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-400 max-w-md">
        This section is not ready yet. It will soon let you manage{' '}
        <span className="text-gray-200">{title}</span> inside the JBAlive
        dashboard.
      </p>
      <p className="text-xs text-gray-500">
        For now, you can create and manage your events from the{' '}
        <span className="text-indigo-400 font-medium">Events</span> section.
      </p>
    </div>
  );
}

export default function Dashboard() {
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
        return <ComingSoon title="Event Studio" />;
      case 'videoStudio':
        return <ComingSoon title="Video Studio" />;
      case 'liveSessions':
        return <ComingSoon title="Live Sessions" />;
      case 'mediaLibrary':
        return <ComingSoon title="Media Library" />;
      case 'settings':
        return <ComingSoon title="Settings" />;
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
