import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Event() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + '/events/' + id)
      .then(res => setEvent(res.data))
  }, [id])

  if (!event) return <div>Loading...</div>

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-3">
        <div className="aspect-video bg-black rounded-2xl flex items-center justify-center text-white">
          {/* Placeholder for WebRTC/Player */}
          <div>Live Player Placeholder</div>
        </div>
        <div className="p-4 bg-white rounded-2xl shadow">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-600">This is a placeholder event. Replace with real data.</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-3">Live Chat (Mock)</h2>
        <div className="h-64 border rounded-xl p-2 overflow-auto text-sm text-gray-600">
          Coming soon…
        </div>
      </div>
    </div>
  )
}
