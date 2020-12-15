import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import Header from '../Header/index';
import Carousel from '../Carousel/index';
import Footer from '../Footer/index';
import './style.css';


function Main() { 

    const [ads, setAds] = useState([]); //Usa função setUser para atualizar o iniUser

    useEffect(() => {
        api.get(`/ads/news`).then(response => {
            setAds(response.data);
        })
    }, []);

    return (
        <div id="main">
            
            <Header/>

            <div className="teste">
                <h1>Novidades</h1>
                <div className="novidade">
                    {ads.map(ad=>
                        <div className="ad">  
                            <img src="/pieces.jpg" className="imagem"></img>
                            <h2 className="nome">{ad.tipo} {ad.marca} {ad.info} </h2>
                        </div>
                    )}
                </div>
                
            </div>
            
            <Footer/>

        </div>
    );
}
  
export default Main;