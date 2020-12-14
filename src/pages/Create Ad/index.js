import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';
import api from '../../Services/api';

function CreateAd() { 

    const history = useHistory();
    const initAd = { //Usuário default para ser salvo
        user: 'c1270065',
        tipo: '',
        marca: '',
        info: '',
        price: 0,
        desc: ''
    }
    const [ad, setAd] = useState(initAd);

    async function onSubmit(ev){
        ev.preventDefault();
        await api.post('/ads/create', ad).then((response)=>{
            history.push('/');
        });
        alert("Anunciado com sucesso!");
    }

    function onChange(ev){ //Função para ação de mudança de campos
        const {name, value} = ev.target; //Captura o campo e seu respectivo valor
        setAd({...ad, [name]:value}) 
    }

    return (
      <div id="create-ad">
        <h1>Anuncie Seu Produto :)</h1>
        <form onSubmit={onSubmit}>
            <div className="input">
                <strong>Tipo</strong>
                <input name="tipo" onChange={onChange}></input>
            </div>  
            <div className="input">
                <strong>Marca</strong>
                <input name="marca" onChange={onChange}></input>
            </div>
            <div className="input">
                <strong>Informações</strong>
                <input name="info" onChange={onChange}></input>
            </div>
            <div className="input">
                <strong>Preço</strong>
                <input name="price" onChange={onChange}></input>
            </div>
            <div className="input">
                <strong>Descrição</strong>
                <textarea name="desc" onChange={onChange}></textarea>
            </div>
            <div className="actions">
                <Link onClick={()=>history.push('/')}>
                    <button className="button">Cancelar</button> 
                </Link>
                <button className="button" type="submit">Anunciar</button>
            </div>
        </form>
      </div>
    );
}
  
export default CreateAd;