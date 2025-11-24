import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import EventsPage from './EventsPage';
import OverviewPanel from './dashboard/OverviewPanel';
import EventStudioPanel from './dashboard/EventStudioPanel';
import VideoStudioPanel from './dashboard/VideoStudioPanel';
import MediaLibraryPanel from './dashboard/MediaLibraryPanel';
import SettingsPanel from './dashboard/SettingsPanel';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('overview');

  const renderContent = () => {
    switch (activeMenu) {
      case 'overview':
        return <OverviewPanel />;
      case 'events':
        return <EventsPage />;
      case 'eventStudio':
        return <EventStudioPanel />;
      case 'videoStudio':
        return <VideoStudioPanel />;
      case 'mediaLibrary':
        return <MediaLibraryPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <OverviewPanel />;
    }
  };

  return (
    <DashboardLayout activeMenu={activeMenu} onMenuClick={setActiveMenu}>
      {renderContent()}
    </DashboardLayout>
  );
}
