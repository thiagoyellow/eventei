import React from 'react';
import '../Form/index.css';

export default function CreateEventForm() {

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
            </div>
            <form action="">
                <h1>Cadastro de Evento</h1>

                <fieldset>
                        <legend>
                            <h2>Dados do evento</h2>
                        </legend>

                        <div className="field">
                            <label htmlFor="file">Imagem do evento</label>
                            <input type="file" name="file" required/>
                        </div>

                        <div className="field">
                            <label htmlFor="name">Nome do evento</label>
                            <input type="text" name="name" required/>
                        </div>

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="address">Endereço</label>
                                <input type="text" name="address" required/>
                            </div>
                            <div className="field">
                                <label htmlFor="address2">Numero/Complemento</label>
                                <input type="text" name="address2" required/>
                            </div>
                        </div>

                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="state">Estado</label>
                                    <input type="text" name="address2" required/>

                                <input type="hidden" name="state" />
                            </div>

                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input type="text" name="city" required/>
                            </div>

                        </div>


                        
                        {/* <div className="field-group">
                            <div className="field">
                                <label htmlFor="state">Estado</label>
                                <select name="uf" required>
                                    <option value="">Selecione o estado</option>
                                </select>

                                <input type="hidden" name="state" />
                            </div>

                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <select name="city" disabled required>
                                    <option value="">Selecione a cidade</option>
                                </select>
                            </div>

                        </div> */}

                        <div className="field-group">
                                <div className="field">
                                    <label htmlFor="date">Data</label>
                                    <input type="date" name="date"/>
                                </div>

                            <div className="field">
                                <label htmlFor="time">Horário</label>
                                <input type="time" name="time"/>
                            </div>
                                
                            <div className="field">
                                <label htmlFor="price">Valor do Ingresso</label>
                                <input type="price" name="price" type="number" placeholder="R$"/>
                            </div>
                        </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Tipo de evento</h2>
                    </legend>

                    <div className="items-grid">
                        <li data-id="1" class="selected">
                            <img src="/assets/show.png" alt="show" />
                            <span>Show Musical</span>
                        </li>

                        <li data-id="2">
                            <img src="/assets/apresentacao.png" alt="apresentacao" />
                            <span>Palestra</span>
                        </li>

                        <li data-id="3">
                            <img src="/assets/teatro.png" alt="teatro" />
                            <span>Teatro</span>
                        </li>

                        <li data-id="4">
                            <img src="/assets/esportes-com-bolas.png" alt="esportes" />
                            <span>Esportes</span>
                        </li>

                        <li data-id="5">
                            <img src="/assets/festival.png" alt="festival" />
                            <span>Festival</span>
                        </li>

                        <li data-id="6">
                            <img src="/assets/exposição.png" alt="exposição" />
                            <span>Exposicao</span>
                        </li>
                    </div>

                </fieldset>


                <button type="submit">Cadastrar evento</button>
            </form>
        </div>
    )
}