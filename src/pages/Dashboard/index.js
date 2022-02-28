import './index.css';
import '../../styles/global.css'

import ButtonSearch from '../../components/Modal';

export function Dashboard() {
    return (
    <>
        <div id="page-home">
            <div class="content">
                    <header>
                        <h3>Eventei<strong> .</strong></h3>
                        <a href="/criar-evento">
                            <span></span>
                            Cadastre um novo evento
                        </a>
                    </header>

                <main>
                    <h1>Seu marketplace de eventos</h1>

                    <p>Ajudamos pessoas a encontrarem eventos de forma eficiente</p>

                    <a href="/eventos" >
                        <span></span>
                        <strong>Pesquisar próximos eventos</strong>
                    </a>
                </main>
            </div>
        </div>
        <ButtonSearch />
    </>
)
}

