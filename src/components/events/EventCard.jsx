export default function EventCard({ event, onView, onCopyLink, onDelete }) {
  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString()
    : 'No date';

  const statusLabel = event.status || 'scheduled';

  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0B1020] p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-sm md:text-base">
            {event.title || 'Untitled event'}
          </h3>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
            {event.description || 'No description added yet.'}
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-wide text-gray-400 border border-gray-700 rounded-full px-2 py-0.5">
          {statusLabel}
        </span>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <div>
          <div>
            {formattedDate} • {event.time || '--:--'}
          </div>
          <div className="mt-1">
            Host:{' '}
            <span className="text-gray-200">
              {event.host || 'JBAlive Host'}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onView}
            className="text-xs px-3 py-1 rounded-full border border-gray-700 hover:border-indigo-500 hover:text-indigo-300 transition"
          >
            View event page
          </button>
          <button
            onClick={onCopyLink}
            className="text-xs px-3 py-1 rounded-full border border-gray-700 hover:border-indigo-500 hover:text-indigo-300 transition"
          >
            Copy link
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onDelete}
          className="text-[11px] text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
