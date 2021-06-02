import React, { useState, useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../contextApi/cartContext'
import {getCartTotal} from '../reducers/cartReducer'
import CheckoutItems from './CheckoutItems'

import '../css/checkout.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
function Checkout() {
    const [newCart, setNewCart] = useState([])
    const [{cart, cartTotal}, dispatch] = useStateValue()
    useEffect(() => {
        let filterOldCart = cart.filter((elm,index,arr)=> arr.findIndex(item => elm.id === item.id && elm.productSize === item.productSize) === index)
        setNewCart(filterOldCart)
    }, [cart])

    const removeFromCartHandler = (id, size) => {
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
            productSize:size
        })
    }

    const updateProductHandler = (id, index, inputVal, sizeVal) => {
        dispatch({
            type: "UPDATE_CART",
            item: {
                id: id,
                index: index,
                productQuantity:parseFloat(inputVal),
                productSize: sizeVal,
                
            }
        })
    }
    return (
        <div className="checkout">
            <div className="title">
                <h2>shopping bag</h2>
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
                <div className="btn">
                    {
                        cart.length >= 1 ? 
                        <Link to="/payment">
                            <Button>checkout</Button>
                        </Link>
                        :null
                    }
                </div>
            </div>
            <div className="cart__items">
                {newCart.map((item, index) => (
                        <CheckoutItems
                            key={index}
                            id={item.id}
                            index={index}
                            productName={item.productName}
                            productPrice={item.productPrice}
                            image={item.productImage}
                            size={item.productSize}
                            quantity={item.productQuantity}
                            removeFromCartHandler={removeFromCartHandler}
                            updateProductHandler={updateProductHandler}
                        />
                ))}
            </div>
            <div className="btn btn__bottom">
                {
                    cart.length >= 1 ? 
                    <Link to="/payment">
                        <Button>checkout</Button>
                    </Link>
                    :null
                }
            </div>
        </div>
    )
}

export default Checkout
