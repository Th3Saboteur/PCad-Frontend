import React, { useState, useEffect } from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import api from '../../Services/api';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './style.css';

function Ad() {

    const history = useHistory();
    const {campo, tag} = useParams();
    const [ads, setAds] = useState([]); //Usa função setUser para atualizar o iniUser

    useEffect(() => {
        api.get(`ads/search/${campo}/${tag}`).then(response => {
            setAds(response.data);
        })
    }, []);

    if(ads.length === 0){
        return(
            <div>
                <div id="container-geral">
                    <Header />
                    <div className="teste">
                        <h2>Nada encontrado!</h2>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
    return (

        <div id="container-geral">

            <Header />
            <div className="teste">
            {ads.map(ad =>
            
                <Link key={ad.id} className="link" onClick={()=>history.push(`/ad/${ad.id}`)}>
                    <div className="container-ad">
                        <img id="imagem" src="/pieces.jpg" alt="imagem representativa"></img>
                        <div className="container-info">
                            <h1 id="titulo">{ad.tipo} {ad.marca} {ad.info}</h1>
                            <div className="container-detalhes">
                                <h3 id="vendedor">Vendedor: {ad.vendedor}</h3>
                                <h2 id="preco">R$ {ad.price}</h2>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </Link>
                
            )}
            
            </div>

            <Footer />

        </div>
    );
}

export default Ad;