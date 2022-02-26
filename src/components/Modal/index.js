import '../Modal/index.css'

export function Modal() {
  return (
        <div id="modal">
          <div class="content"> 
            <div class="header">
              <h1> Próximos eventos </h1>
              <a href="">Fechar</a>
            </div>
          <form action="">
              <label for="search">Cidade</label>
              <div class="search field">
                  <input type="text" name="search" />
                  <button>
                      <img src="./assets/search.svg" alt="buscar"/>
                  </button>
              </div>
          </form>
      </div>
    </div>
  )
}