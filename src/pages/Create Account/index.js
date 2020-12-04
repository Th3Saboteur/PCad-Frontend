import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function CreateAccount() { 

    return (
      <div id="create-account">
        <h1>Crie Sua Conta :)</h1>
        <form>  
            <div id="line">
                <strong>Nome</strong>
                <input name="name"></input>
            </div>
            <div id="line">
                <strong>E-mail</strong>
                <input type="email" name="email"></input>
            </div>
            <div id="line">
                <strong>Senha</strong>
                <input type="password" name="password"></input>
            </div>
            <div id="line">
                <strong>Senha</strong>
                <input type="password" name="password"></input>
            </div>
        </form>
        <div className="actions">
            <a href="_self">Já tem uma conta? Login</a>
            <button className="button" type="submit">Criar</button>
        </div>
      </div>
    );
}
  
export default CreateAccount;