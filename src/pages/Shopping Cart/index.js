import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../Services/api';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './style.css';

function ShoppingCart() {

    const user = "5f8f2ca0";
    const history = useHistory();
    const [carts, setCarts] = useState([]); //Usa função setUser para atualizar o iniUser

    useEffect(() => {
        api.get(`/carts/list/${user}`).then(response => {
            setCarts(response.data);
        })
    }, []);

    async function handleDelete (user, ad){
        try{
            await api.delete(`/carts/delete/${user}/${ad}`); 
            setCarts(carts.filter(cart => cart.ad !== ad)); 
        }
        catch(err){
            alert("Erro ao tentar deletar item")
        }
    }

    function total(){
        var total = 0.0;
        carts.map(cart => total += cart.price)
        return total;
    }

    async function finalizar(){
        try{
            await api.delete(`/carts/delete/${user}`); 
            await carts.map(cart => api.delete(`/ads/delete/${cart.ad}`));
            alert("Compra Finalizada Com Sucesso :)");
            history.push('/');
        }
        catch(err){
            alert("Algo Inesperado Aconteceu :(")
        }
    }

    return (
        
        <div>

            <Header />

            <h1 id="carrinho">Carrinho</h1>

            {carts.map(cart=>
            <div>
                <div className="product">
                    <img id="imagem" alt="imagem representativa" src="pieces.jpg"></img>
                    <div className="container-lateral">
                        <h1 className="titulo">{cart.tipo} {cart.marca} {cart.info}</h1>
                        <div className="container-inferior">
                            <h3>Vendedor: {cart.vendedor}</h3>
                            <div className="container-inferior-direito">
                                <button className="remover" onClick={()=>handleDelete(cart.user, cart.ad)}>Remover</button>
                                <h2 className="price">R$ {cart.price}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>

            )}

            <div  className="container-final">
                <button className="finalizar" onClick={finalizar}>Finalizar Compra</button>
                <h2>Total R$ {total()}</h2>
            </div>

            <Footer />

        </div>
    );
}

export default ShoppingCart;