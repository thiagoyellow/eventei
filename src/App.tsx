import './index.css';
import Routes from './routes';
import { makeServer } from './services/mirage';
import './styles/responsive.css';
import { EventsProvider } from './EventsContext'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

export function Home() {

  return (
    <EventsProvider>
      <Routes />
    </EventsProvider>
  )
}

export default Home;


