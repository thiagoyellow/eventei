import React from 'react';

import '../../styles/responsive.css';
import '../CreateEvent/index.css'

export function CreateEvent() {
    return (
        <div id="page-create-event">
        <div class="content">
            <header>
                <h3>Eventei<strong> .</strong></h3>
                <a href="/">
                    <span></span>
                    Voltar para home
                </a>
            </header>

           <form action="">
               <h1>Cadastro de Evento</h1>

               <fieldset>
                    <legend>
                        <h2>Dados do evento</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome do evento</label>
                        <input type="text" name="name"/>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="address">Endereço</label>
                            <input type="text" name="address"/>
                        </div>
                        <div className="field">
                            <label htmlFor="address2">Numero/Complemento</label>
                            <input type="text" name="address2"/>
                        </div>
                    </div>

                    
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="state">Estado</label>
                            <select name="uf">
                                <option value="">Selecione o estado</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" disabled>
                                <option value="">Selecione a cidade</option>
                            </select>
                        </div>

                    </div>

               </fieldset>


               <button type="submit">Cadastrar evento</button>
           </form>
        </div>
    </div>
    )
}