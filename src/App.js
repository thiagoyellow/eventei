import './index.css';
import Routes from './routes'
import { makeServer } from './services/mirage/index.ts';
import './styles/responsive.css';
import  { EventsProvider }  from './EventsContext.tsx'

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function App() {

  return (
    <EventsProvider>
      <Routes />
    </EventsProvider>
  )
}

export default App;

