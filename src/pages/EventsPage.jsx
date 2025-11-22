import { useState } from 'react';
import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/events/EventCard';
import CreateEventModal from '../components/events/CreateEventModal';

export default function EventsPage() {
  const { events, addEvent, removeEvent } = useEvents();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopyLink = (eventId) => {
    const url = `${window.location.origin}/events/${eventId}`;
    navigator.clipboard.writeText(url).catch((err) => {
      console.error('Failed to copy link', err);
    });
  };

  const handleViewEvent = (eventId) => {
    const url = `${window.location.origin}/events/${eventId}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Your events</h2>
          <p className="text-xs text-gray-400 mt-1">
            Each event has a public link you can share with your audience.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
        >
          Create new event
        </button>
      </div>

      {events.length === 0 ? (
        <div className="border border-dashed border-gray-700 rounded-2xl p-8 text-center text-sm text-gray-400">
          You don&apos;t have any events yet. Click{' '}
          <span className="text-indigo-400 font-medium">
            Create new event
          </span>{' '}
          to add your first one.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onView={() => handleViewEvent(event.id)}
              onCopyLink={() => handleCopyLink(event.id)}
              onDelete={() => removeEvent(event.id)}
            />
          ))}
        </div>
      )}

      <CreateEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={addEvent}
      />
    </div>
  );
}
