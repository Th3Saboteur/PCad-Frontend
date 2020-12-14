import React, { useState, useEffect } from 'react';
import {Link, useHistory } from 'react-router-dom';
import api from '../../Services/api';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './style.css';

function Ad() {

    const history = useHistory();
    const [ads, setAds] = useState([]); //Usa função setUser para atualizar o iniUser

    useEffect(() => {
        api.get('/ads/list').then(response => {
            setAds(response.data);
        })
    }, []);

    return (

        <div id="container-geral">

            <Header />

            {ads.map(ad =>
                <Link key={ad.id} className="link" onClick={()=>history.push(`/ad/${ad.id}`)}>
                    <div className="ad">
                        <img id="foto" src="pieces.jpg" alt="imagem representativa"></img>
                        <div className="container-ad">
                            <div>
                                <h1 className="titulo">{ad.tipo} {ad.marca} {ad.info}</h1>
                                <div className="container-lateral">
                                    <div className="info">
                                        <h3 className="vendedor">Vendedor:  {ad.nome}</h3>
                                        <h2 className="preco">R$ {ad.price}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </Link>
            )}

            <Footer />

        </div>
    );
}

export default Ad;