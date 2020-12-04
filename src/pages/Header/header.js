import React from 'react';
import './header.css';

function Header() { 
    return (    
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
            <figure id="user">
                <img src="user.png" alt="user"></img>
                <figcaption>
                    <select>
                        <option value="">Minha Conta</option>
                        <option value="odelo">Meus Anuncios</option>
                        <option value="marca">Sair</option>
                    </select>
                </figcaption>
            </figure>
        </header>
    );
}

export default Header;