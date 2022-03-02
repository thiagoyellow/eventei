import Modal from 'react-modal';
import { useState } from 'react';
import '../../components/Modal/index.css';

Modal.setAppElement('#root')

export default function ButtonSearch() {
  const [ modalIsOpen, setIsOpen ] = useState(false)

      function handleOpenModal() {
        setIsOpen(true)
      }

      function handleCloseModal() {
        setIsOpen(false)
      }

    return (
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}> 
            <div id="modal2">
              <div class="content"> 
                <div class="header">
                  <h1> Próximos eventos </h1>
                  <a href="" onClick={handleCloseModal}>Fechar</a>
                </div>
              <form action="">
                  <label for="search">Cidade</label>
                  <div class="search field">
                      <input type="text" name="search" placeholder="Digite o nome da cidade"/>
                      <button>
                          <img src="./assets/search.svg" alt="buscar"/>
                      </button>
                  </div>
              </form>
          </div>
        </div>
      </Modal>
    )
}