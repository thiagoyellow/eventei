import { FormEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';
import { EventsContext } from '../../EventsContext.tsx';

import '../../styles/responsive.css';
import '../CreateEvent/index.css'

export function CreateEvent() {
    
    const { createEvent } = useContext(EventsContext);

    const [file, setFile] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState(0);
    const [checkbox, setCheckbox] = useState('');

    const history = useHistory();
    
    async function handleCreateNewEvent (event: FormEvent) {
        event.preventDefault();

       await createEvent({
            file,
            name,
            complement,
            uf,
            city,
            date,
            time,
            price,
            checkbox
        })


        // Limpar todos os campos após cadastrar os dados
        setFile('');
        setName('');
        setAddress('');
        setComplement('');
        setUf('');
        setCity('');
        setDate('');
        setTime('');
        setPrice(0);
        setCheckbox('');

        history.push('/eventos');
    }


    return (
    <>
    <div id="page-create-event">
    <Header />
        <form className="createevent" action="" onSubmit={handleCreateNewEvent}>
            <h1>Cadastro de Evento</h1>

            <fieldset>
                    <legend>
                        <h2>Dados do evento</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="file">Imagem do evento</label>
                        <input 
                            type="file" 
                            value={file} 
                            onChange={event => setFile(event.target.value)} 
                            required 
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="name">Nome do evento</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={event => setName(event.target.value)} 
                            required
                        /> 
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="address">Endereço</label>
                            <input 
                                type="text" 
                                value={address} 
                                onChange={event => setAddress(event.target.value)} 
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="complement">Numero/Complemento</label>
                            <input 
                                type="text"
                                value={complement} 
                                onChange={event => setComplement(event.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado</label>
                                <input 
                                    type="text" 
                                    value={uf} 
                                    onChange={event => setUf(event.target.value)} 
                                    required
                                />

                            <input type="hidden" name="state" />
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <input 
                                type="text"
                                value={city} 
                                onChange={event => setCity(event.target.value)} 
                                required
                            />
                        </div>

                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="date">Data</label>
                            <input 
                                type="date"
                                value={date} 
                                onChange={event => setDate(event.target.value)} 
                                required
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="time">Horário</label>
                            <input 
                                type="time" 
                                value={time} 
                                onChange={event => setTime(event.target.value)}
                                required
                            />
                        </div>
                            
                        <div className="field">
                            <label htmlFor="price">Valor do Ingresso</label>
                            <input 
                                type="price" 
                                value={price} 
                                onChange={event => setPrice(Number(event.target.value))} 
                                placeholder="R$" 
                                required
                            />
                        </div>
                    </div>
            </fieldset>

            <fieldset>
                <legend>
                    <h2>Tipo de evento</h2>
                </legend>

                <div className="items-grid">
                    <li>
                        <input 
                            type="checkbox" 
                            name="show musical" 
                            id="1" 
                            value={checkbox} 
                            onChange={event => setCheckbox(event.target.value)} 
                        />
                        <img src="/assets/show.png" alt="show" />
                        <span>Show Musical</span>
                    </li>

                    <li>
                        <input 
                            type="checkbox" 
                            name="apresentação" 
                            id="2" 
                            value={checkbox} 
                            onChange={event => setCheckbox(event.target.value)} 
                        />
                        <img src="/assets/apresentacao.png" alt="apresentacao" />
                        <span>Palestra</span>
                    </li>

                    <li>
                        <input 
                            type="checkbox" 
                            name="teatro" 
                            id="3" 
                            value={checkbox} 
                            onChange={event => setCheckbox(event.target.value)} 
                        />
                        <img src="/assets/teatro.png" alt="teatro" />
                        <span>Teatro</span>
                    </li>

                    <li>
                        <input 
                            type="checkbox" 
                            name="esportes" 
                            id="4" 
                            value={checkbox} 
                            onChange={event => setCheckbox(event.target.value)} 
                        />
                        <img src="/assets/esportes-com-bolas.png" alt="esportes" />
                        <span>Esportes</span>
                    </li>

                    <li>
                        <input 
                            type="checkbox" 
                            name="festival" 
                            id="5" 
                            value={checkbox} 
                            onChange={event => setCheckbox(event.target.value)} 
                        />
                        <img src="/assets/festival.png" alt="festival" />
                        <span>Festival</span>
                    </li>

                    <li>
                        <input 
                            type="checkbox" 
                            name="exposição" 
                            id="6" 
                            value={checkbox} 
                            onChange={event => setCheckbox(event.target.value)} 
                        />
                        <img src="/assets/exposição.png" alt="exposição" />
                        <span>Exposicao</span>
                    </li>

                </div>
                
                <input type="hidden" name="items" />

            </fieldset>

            <button type="submit">Cadastrar evento</button>
        </form>
    </div>
        </>
           
        )
}

