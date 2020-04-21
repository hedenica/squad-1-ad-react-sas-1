import React from "react";
import CartItem from '../CartItem';
import './style.scss'

const ShoppingCart = ({ itens, value, closeShoppingCart }) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return(
        <aside className= "minicart__overlay">
            <div className= "minicart__modal" >
                <div className= "minicart__header">
                    <button
                      className= "button-close"
                      type= "button"
                      name= "close cart button"
                      onClick={closeShoppingCart}>
                      X
                    </button>
                    <span>
                        sacola({itens})
                    </span>
                </div>
                <div className= "minicart__content">
                    <ul className= "mincart__content-full">
                        {
                          arr.map(item => (
                            <CartItem
                              title="Teste"
                              price="12"
                              size="M"
                            />
                          ))
                        }
                    </ul>
                    <div className= "minicart__content-empty">
                        <span>
                            Seu carrinho está vazio :( 
                        </span>
                    </div>
                </div>
                <div className= "minicart__footer">
                    <div className= "minicart__footer__button">
                        <span className= "minicart__footer-full">
                            Subtotal R${value}
                        </span>
                        <a>
                        <span className="minicart__footer-empty">
                            Continuar comprando
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default ShoppingCart