import { useEffect, useState } from 'react';

const STORAGE_KEY = 'jbalive_events';

function loadEventsFromStorage() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse events from localStorage', err);
    return [];
  }
}

function saveEventsToStorage(events) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch (err) {
    console.error('Failed to save events to localStorage', err);
  }
}

export function useEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(loadEventsFromStorage());
  }, []);

  useEffect(() => {
    saveEventsToStorage(events);
  }, [events]);

  const addEvent = (event) => {
    setEvents((prev) => [event, ...prev]);
  };

  const removeEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return { events, addEvent, removeEvent };
}
