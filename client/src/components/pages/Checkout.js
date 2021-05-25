import React, { useState, useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../contextApi/cartContext'
import {getCartTotal} from '../reducers/cartReducer'
import CheckoutItems from './CheckoutItems'
import '../css/checkout.css'
function Checkout() {
    const [newCart, setNewCart] = useState([])
    const [{cart}, dispatch] = useStateValue()

    useEffect(() => {
        let filterOldCart = cart.filter((elm,index,arr)=> arr.findIndex(item => elm.id === item.id && elm.productSize === item.productSize) === index)
        setNewCart(filterOldCart)
    }, [cart])

    const removeFromCartHandler = (id, size) => {
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
            size:size
        })
    }
    return (
        <div className="checkout">
            <div className="title">
                <h2>my cart</h2>
                <CurrencyFormat 
                    renderText={(value)=>(
                        <h4>Total: {value} </h4 >
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                >
                </CurrencyFormat>
            </div>
            <div className="cart__items">
                {newCart.map(item => (
                        <CheckoutItems
                            id={item.id}
                            productName={item.productName}
                            productPrice={item.productPrice}
                            image={item.productImage}
                            size={item.productSize}
                            removeFromCartHandler={removeFromCartHandler}
                        />
                ))}
            </div>
        </div>
    )
}

export default Checkout
