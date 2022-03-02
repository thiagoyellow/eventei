import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Event {
  id: number;
  file: string;
  name: string;
  address: string;
  complement: string;
  uf: string;
  city: string;
  date: string;
  time: string;
  price: number;
  type: string;
}

interface EventsProviderProps {
  children: ReactNode;
}

export const EventsContext = createContext<Event[]>([]);

export function EventsProvider({ children }: EventsProviderProps) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
      api.get('/events')
      .then(response => setEvents(response.data.events))
  }, []);

  return (
    <EventsContext.Provider value={events}>
      { children }
    </EventsContext.Provider>
  )
}
