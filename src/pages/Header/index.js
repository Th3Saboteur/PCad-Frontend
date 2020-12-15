import React, { useEffect } from 'react'; 
import './style.css';
import {Link, useHistory} from 'react-router-dom';

function Header() { 
    const history = useHistory(); 

    function user (){
        alert ("Usuário já Logado!");
    }

    function pesquisar(){
        var tag = document.getElementById('search-bar').value;
        var select = document.getElementById('search-sel');
        var campo =  select.options[select.selectedIndex].value;
        if(tag !== '') history.push(`/search/${campo}/${tag}`);
        history.go(0);
    }

    return (    
        <header className="header">
            <Link className="link" onClick={()=>history.push('/')}>
            <figure id="logo-fig">
                 <img id="logo-img" src="/logo.png"></img>
                <figcaption id="logo-cap">PCad</figcaption>
             </figure>
            </Link>
            <select id="search-sel" className="search-sel">
                <option value="tipo" selected>Tipo</option>
                <option value="marca">Marca</option>
                <option value="info">Info</option>
            </select> 
            <input id="search-bar" name="search-bar" className="search-bar"></input>
            <Link className="link" onClick={pesquisar}>
                <figure className="icone" id="search">
                    <img className="icone-img" src="/search.png"></img>
                    <figcaption className="icone-cap" >Procurar</figcaption>
                </figure>
            </Link>
            <Link className="link" onClick={()=>history.push('/new/ad')}>
            <figure className="icone" id="add">
                <img className="icone-img" src="/add.png"></img>
                <figcaption className="icone-cap" >Anunciar</figcaption>
            </figure>
            </Link>
            
            <figure className="icone" id="shopping-cart" onClick={()=>history.push('/shopping-cart')}>
                <img className="icone-img" src="/shopping-cart.png"></img>
                <figcaption className="icone-cap" >Carrinho</figcaption>
            </figure>
            <figure className="icone" id="user" onClick={user}>
                <img className="icone-img" src="/user.png"></img>
                <figcaption className="icone-cap">Login</figcaption>
            </figure>
        </header>
    );
}

export default Header;