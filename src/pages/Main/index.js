import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Main() { 
    return (
      <div id="main">
        <header>
            <img id="logo" src="logo.png" alt="logo"></img> 
            <select>
                <option value="tipo">Tipo</option>
                <option value="odelo">Modelo</option>
                <option value="marca">Marca</option>
            </select>
            <input name="search-bar"></input>
            <figure>
                <img src="search.png"></img>
                <figcaption>Procurar</figcaption>
            </figure>
            <figure>
                <img src="add.png"></img>
                <figcaption>Anunciar</figcaption>
            </figure>
            <figure>
                <img src="shopping-cart.png"></img>
                <figcaption>Carrinho</figcaption>
            </figure>
            <figure>
                <img src="user.png" alt="user"></img>
                <figcaption>Sair</figcaption>
            </figure>
        </header>
      </div>
    );
}
  
export default Main;