import { useContext } from 'react';
import { Header } from '../../components/Header';
import { EventsContext } from '../../EventsContext';

import './index.css';
import '../../styles/global.css'
import '../../styles/responsive.css'


export function ListEvent() {
    const events = useContext(EventsContext);

 
    return (
    <>
    <div id="page-search-results">
    <Header />
        <main>
            <h4>
                <strong> 2 eventos </strong> encontrados
            </h4>

            <div className="cards">
                {events.map(event => {
                    return (
                        <div className="card" key={event.id}>
                            <input type="file" name="" id="">{event.file}</input>
                            <h1>{event.name}</h1>
                            <h2>
                                {new Intl.DateTimeFormat('pt-BR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                }).format(
                                    new Date(event.date)
                                )}
                            </h2>
                            <h3>{event.type}</h3>
                            <p>{event.address}</p>
                            <p>{event.complement}</p>
                            <h4>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(event.price)}
                            </h4>
                            <button>Comprar</button>
                        </div>
                    )
                })}
            </div>
        </main>

    </div>
    </>
    )
}       