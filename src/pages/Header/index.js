import React from 'react'; 
import './style.css';
import {Link, useHistory} from 'react-router-dom';

function Header() { 
    const history = useHistory();
    function teste (){
        alert ("Usuário já Logado!");
    }

    return (    
        <header className="header">
            <Link className="link" onClick={()=>history.push('/')}>
            <figure id="logo-fig">
                 <img id="logo-img" src="logo.png"></img>
                <figcaption id="logo-cap">PCad</figcaption>
             </figure>
            </Link>
                 
            <select className="search-sel">
                <option value="tipo">Tipo</option>
                <option value="modelo">Modelo</option>
                <option value="marca">Marca</option>
            </select>
            <input name="search-bar" className="search-bar"></input>
            <Link className="link" onClick={()=>history.push('/search')}>
                <figure className="icone" id="search" onClick={}>
                    <img className="icone-img" src="search.png"></img>
                    <figcaption className="icone-cap" >Procurar</figcaption>
                </figure>
            </Link>
            <Link className="link" onClick={()=>history.push('/new/ad')}>
            <figure className="icone" id="add">
                <img className="icone-img" src="add.png"></img>
                <figcaption className="icone-cap" >Anunciar</figcaption>
            </figure>
            </Link>
            
            <figure className="icone" id="shopping-cart" onClick={()=>history.push('/shopping-cart')}>
                <img className="icone-img" src="shopping-cart.png"></img>
                <figcaption className="icone-cap" >Carrinho</figcaption>
            </figure>
            <figure className="icone" id="user" onClick={teste}>
                <img className="icone-img" src="user.png"></img>
                <figcaption className="icone-cap">Login</figcaption>
            </figure>
        </header>
    );
}

export default Header;