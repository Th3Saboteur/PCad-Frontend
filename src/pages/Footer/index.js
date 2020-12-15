import React from 'react';
import './style.css';

function Footer() { 

    return (
        <div id="footer">
            <footer>
                <h2>(73)98765-4321</h2>
                <h2>Contate-nos</h2>
                <div>
                    <img className="ico" src="/facebook.png"></img>
                    <img className="ico" src="/instagram.png"></img>
                    <img className="ico" src="/twitter.png"></img>
                </div>
                <div id="sociais">
                </div>
            </footer>
        </div>
    );
}
  
export default Footer;