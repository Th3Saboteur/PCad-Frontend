import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Login() { 
    return (
      <div id="login">
        <h1>Login</h1>
        <form>
            <strong>E-mail</strong>
            <input type="email" name="email"></input>
            <strong>Senha</strong>
            <input type="password" name="password"></input>
        </form>
        <a href="_self">Esqueceu sua senha? Redefinir</a> 
        <div className="actions">
            <a href="_self">Não tem uma conta? Criar</a>
            <button className="button" type="submit">Logar</button>
        </div>
      </div>
    );
}
  
export default Login;