import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const API = import.meta.env.VITE_API_URL

  useEffect(() => {
    axios.get(API + '/events').then(res => setEvents(res.data))
  }, [API])

  const createEvent = async () => {
    if (!title || !date) return alert('Title and date required')
    const res = await axios.post(API + '/events', { title, date })
    setEvents(prev => [res.data, ...prev])
    setTitle(''); setDate('')
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-white rounded-2xl shadow md:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Create Event</h2>
        <input className="w-full mb-3 border rounded-xl p-2" placeholder="Event title"
          value={title} onChange={e => setTitle(e.target.value)} />
        <input className="w-full mb-3 border rounded-xl p-2" type="datetime-local"
          value={date} onChange={e => setDate(e.target.value)} />
        <button onClick={createEvent} className="px-4 py-2 rounded-xl bg-sky-500 text-white w-full">
          Create
        </button>
      </div>

      <div className="p-6 bg-white rounded-2xl shadow md:col-span-2">
        <h2 className="text-lg font-semibold mb-4">Your Events</h2>
        <ul className="space-y-3">
          {events.map(ev => (
            <li key={ev.id} className="border rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">{ev.title}</div>
                <div className="text-xs text-gray-500">{new Date(ev.date).toLocaleString()}</div>
              </div>
              <Link className="text-sky-600 hover:underline" to={`/event/${ev.id}`}>Open</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
