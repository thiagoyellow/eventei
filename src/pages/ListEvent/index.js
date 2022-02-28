import React from 'react';
import { Header } from '../../components/Header';
import './index.css';
import '../../styles/global.css'
import '../../styles/responsive.css'

export function ListEvent() {

    return (
    <>
    <div id="page-search-results">
    <Header />
        <main>
            <h4>
                <strong> 2 eventos </strong> encontrados
            </h4>

            <div className="cards">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1520623868480-a56b943861ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Bloco do dev" />
                    <h1>Bloco do Dev</h1>
                    <h2>Segunda-feira, 07/03/2022 às 14:00</h2>
                    <h3>Festival</h3>
                    <p>
                        Rio do Sul, Santa Catarina <br />
                        Guilherme Gemballa, Jardim América <br />
                        Nº 260
                    </p>
                    <h4>R$ 60,00</h4>
                    <button>Comprar</button>
                </div>
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1564019796336-0e84bfb5deed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Brasil x argentina" />
                    <h1>Brasil x Argentina</h1>
                    <h2>Terça-feira, 08/03/2022 às 21:00</h2>
                    <h3>Esportes</h3>
                    <p>
                        Rio de Janeiro, RJ <br />
                        Av. Pres. Castelo Branco - Maracanã <br />
                        Portão 3
                    </p>
                    <h4>R$ 120,00</h4>
                    <button>Comprar</button>
                </div>
                
            </div>
        </main>

    </div>
    </>
    )
}       