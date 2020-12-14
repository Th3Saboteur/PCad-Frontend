import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams} from 'react-router-dom';
import api from '../../Services/api';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './style.css';

function Ad(){

    const history = useHistory();
    const {id} = useParams(); 
    const initAd = { 
        desc: '', 
        id: '',
        info: '',
        marca: '',
        nome: '',
        price: 0,
        tipo: '',
    }
    const [ad, setAd] = useState(initAd); 

    useEffect(()=>{ //Ao carregar o componente 
        api.get(`/ads/show/${id}`).then(response=>{
            setAd(...response.data);
        });
    }, []);

    function teste(){
        alert("Funcionou!!!");
    }

    function cart(){
        const cart = {user:"5f8f2ca0", ad: ad.id};
        console.log("Usuario: " + cart.user + "Ad: "+ cart.ad);
        api.post('/carts/create', cart).then(response=>{
            history.push(`/ad/${ad.id}`);
        })
    }

    return(
        <div>
            <Header/>

            <div className="container-geral">
                <h1 className="titulo">{ad.tipo} {ad.marca} {ad.info}</h1>
                <div className="container-interno">
                    <img id="imagem" src="logo.png"></img>
                    <div className="container-lateral">
                        <p>{ad.desc}</p>
                        <h3>Vendedor: {ad.nome}</h3>
                        <div className="actions">
                            <h2>R$ {ad.price}</h2>
                            <img className="adicionar" src="shopping-cart-plus.png" onClick={cart}></img>
                            <Link className="comprar" onClick={teste}>Comprar</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        

    );

}

export default Ad;

