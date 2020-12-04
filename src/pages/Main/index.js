import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/header'
import './style.css';

function Main() { 

    return (
        <div id="main">
            <Header/>

            <h2>Conteudo aqui</h2>

            <footer>
                <h2>(DD)XXXX-XXXX</h2>
                <div id="sociais">

                </div>
            </footer>
        </div>
    );
}
  
export default Main;