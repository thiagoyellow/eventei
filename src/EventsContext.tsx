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

type EventInput = Omit<Event, 'id' >;  //para tirar a propriedade que eu não quero

interface EventsProviderProps {
  children: ReactNode;
}

interface EventsContextData {
  events: Event[];
  createEvent: (event: EventInput) => Promise<void>;
}

export const EventsContext = createContext<EventsContextData>(
  {} as EventsContextData 
);

export function EventsProvider({ children }: EventsProviderProps) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
      api.get('/events')
      .then(response => setEvents(response.data.events))
  }, []);

  async function createEvent(eventInput: EventInput) {
    const response = await api.post('/eventos',{
      ...eventInput,
      createdAt: new Date(),
    })
    const { event } = response.data;

    setEvents([
      ...events,
      event,
    ]);
  }

  return (
    <EventsContext.Provider value={{ events, createEvent}}>
      { children }
    </EventsContext.Provider>
  )
}
