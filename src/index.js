import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './pages/Main/index'; //Remover depois
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
