import { useState } from 'react';

export default function CreateEventModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [streamUrl, setStreamUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Date.now().toString();
    const newEvent = {
      id,
      title: title.trim(),
      description: description.trim(),
      date,
      time,
      streamUrl: streamUrl.trim(),
      host: 'Joshua Benjamin Ali',
      status: 'scheduled',
      createdAt: new Date().toISOString(),
    };

    onCreate(newEvent);
    onClose();

    setTitle('');
    setDate('');
    setTime('');
    setDescription('');
    setStreamUrl('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-lg rounded-2xl bg-[#050814] border border-gray-800 shadow-xl">
        <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-sm font-semibold">
            Create a new event
          </h2>
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-gray-200"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4 text-sm">
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Event title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Launch Masterclass, Live Q&A, Product Demo..."
              className="w-full rounded-xl bg-[#0B1020] border border-gray-700 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl bg-[#0B1020] border border-gray-700 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl bg-[#0B1020] border border-gray-700 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What is this session about? Who is it for? What will they learn?"
              rows={3}
              className="w-full rounded-xl bg-[#0B1020] border border-gray-700 px-3 py-2 text-sm outline-none focus:border-indigo-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Stream / video URL
            </label>
            <input
              value={streamUrl}
              onChange={(e) => setStreamUrl(e.target.value)}
              placeholder="YouTube Live / Vimeo / custom player embed URL"
              className="w-full rounded-xl bg-[#0B1020] border border-gray-700 px-3 py-2 text-sm outline-none focus:border-indigo-500"
            />
            <p className="mt-1 text-[11px] text-gray-500">
              For MVP, you can paste a YouTube Live link or any embeddable URL. Later this can become a native JBAlive player.
            </p>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-xl text-xs border border-gray-700 text-gray-300 hover:border-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Create event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
