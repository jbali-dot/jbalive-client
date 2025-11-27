import React, { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import EventsPage from "./EventsPage";
import OverviewPanel from "./dashboard/OverviewPanel";
import EventStudioPanel from "./dashboard/EventStudioPanel";
import VideoStudioPanel from "./dashboard/VideoStudioPanel";
import MediaLibraryPanel from "./dashboard/MediaLibraryPanel";
import SettingsPanel from "./dashboard/SettingsPanel";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("overview");

  // Which field in Event Studio is asking for media? ("logo", "hero", "background", etc.)
  const [selectingMediaFor, setSelectingMediaFor] = useState(null);

  // Simple in-memory store of what Event Studio has chosen from the library
  const [eventStudioMedia, setEventStudioMedia] = useState({
    logo: null,
    hero: null,
    background: null,
  });

  const handleMenuClick = (menuKey) => {
    setActiveMenu(menuKey);
  };

  // Called from Event Studio when user clicks "Choose from library"
  const handleChooseFromLibrary = (targetField) => {
    // e.g. "logo", "hero", "background"
    setSelectingMediaFor(targetField);
    setActiveMenu("mediaLibrary");
  };

  // Called from Media Library when user clicks "Use this"
  const handleMediaSelected = (file) => {
    if (selectingMediaFor) {
      setEventStudioMedia((prev) => ({
        ...prev,
        [selectingMediaFor]: file,
      }));
    }

    // Clear selection mode and go back to Event Studio
    setSelectingMediaFor(null);
    setActiveMenu("eventStudio");
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "overview":
        return <OverviewPanel />;
      case "events":
        return <EventsPage />;
      case "eventStudio":
        return (
          <EventStudioPanel
            onChooseFromLibrary={handleChooseFromLibrary}
            mediaSelections={eventStudioMedia}
          />
        );
      case "videoStudio":
        return <VideoStudioPanel />;
      case "mediaLibrary":
        return (
          <MediaLibraryPanel
            selectingFor={selectingMediaFor}
            onMediaSelected={handleMediaSelected}
          />
        );
      case "settings":
        return <SettingsPanel />;
      default:
        return <OverviewPanel />;
    }
  };

  return (
    <DashboardLayout activeMenu={activeMenu} onMenuClick={handleMenuClick}>
      {renderContent()}
    </DashboardLayout>
  );
}

