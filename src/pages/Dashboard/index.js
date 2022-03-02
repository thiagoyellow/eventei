import './index.css';
import '../../styles/modal.css';
import '../../styles/global.css';

import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

export function Dashboard() {
    const [ modalIsOpen, setIsOpen ] = useState(false)

    function handleOpenModal() {
    setIsOpen(true)
    }

    function handleCloseModal() {
    setIsOpen(false)
    }

    return (
    <>
        <div id="page-home">
            <div className="content">
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

                    
                    <button type="button" onClick={handleOpenModal}>
                        <span></span>
                        <strong> Pesquisar próximos eventos</strong>
                    </button>
                    
                    
                </main>
            </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} overlayClassName="modal2" className="modal2"> 
        <div id="modal2">
            <div className="content"> 
                <div className="header">
                    <h1> Próximos eventos </h1>
                    <a href="" onClick={handleCloseModal}>Fechar</a>
                </div>
                <form action="">
                    <label htmlFor="search">Cidade</label>
                    <div className="search field">
                        <input type="text" name="search" placeholder="Digite o nome da cidade"/>
                        <a href="/eventos">
                            <button type="button" >
                                <img src="./assets/search.svg" alt="buscar"/>
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </Modal> 

    </>
)
}
