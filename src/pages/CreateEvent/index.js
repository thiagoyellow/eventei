import React from 'react';
import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import '../../styles/responsive.css';
import '../CreateEvent/index.css'

export function CreateEvent() {
    

    const { register, handleSubmit } = useForm();
    const onSubmit = (e) => {
        console.log(e)
    }


    return (
        <>
         <div id="page-create-event">
        <Header />
                <form className="createevent" action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Cadastro de Evento</h1>
    
                    <fieldset>
                            <legend>
                                <h2>Dados do evento</h2>
                            </legend>
    
                            <div className="field">
                                <label htmlFor="file">Imagem do evento</label>
                                <input type="file" {...register("file")} required />
                            </div>
    
                            <div className="field">
                                <label htmlFor="name">Nome do evento</label>
                                <input type="text" {...register("name")} required />
                            </div>
    
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" {...register("address")} required />
                                </div>
                                <div className="field">
                                    <label htmlFor="complement">Numero/Complemento</label>
                                    <input type="text" {...register("complement")} required />
                                </div>
                            </div>
    
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="uf">Estado</label>
                                        <input type="text" {...register("uf")} required />
    
                                    <input type="hidden" name="state" />
                                </div>
    
                                <div className="field">
                                    <label htmlFor="city">Cidade</label>
                                    <input type="text" {...register("city")} required />
                                </div>
    
                            </div>
    
                            <div className="field-group">
                                    <div className="field">
                                        <label htmlFor="date">Data</label>
                                        <input type="date" {...register("date")} />
                                    </div>
    
                                <div className="field">
                                    <label htmlFor="time">Horário</label>
                                    <input type="time" {...register("time")} />
                                </div>
                                    
                                <div className="field">
                                    <label htmlFor="price">Valor do Ingresso</label>
                                    <input type="price" {...register("price")} type="number" placeholder="R$" />
                                </div>
                            </div>
                    </fieldset>
    
                    <fieldset>
                        <legend>
                            <h2>Tipo de evento</h2>
                        </legend>
    
                        <div className="items-grid">
                            <li data-id="1">
                                <img src="/assets/show.png" alt="show" />
                                <span>Show Musical</span>
                            </li>
    
                            <li data-id="2"  {...register("2")}>
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
                        
                        <input type="hidden" name="items" />

                    </fieldset>
    
    
                    <button type="submit">Cadastrar evento</button>
                </form>
            </div>
        </>
           
        )
}