import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../contextApi/cartContext'
import {useStripe} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import CheckoutItems from './CheckoutItems'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import {fetchFromApi} from '../helpers'

import '../css/checkout.css'
function Checkout() {
    // History Router
    let history = useHistory()
    //Cart reducer
    const {cart, total, removeProduct, updateProduct, clearCart} = useContext(CartContext)

    // Stripe
    const stripe = useStripe()

    //// Stripe submit handler

    const stripeHandleClick = async (e) => {
        e.preventDefault()

        // Setting up line_items for stripe
        const line_items = cart.map(item => {
            return {
                quantity: item.productQuantity,
                price_data: {
                    currency: "usd",
                    unit_amount: item.productPrice * 100,
                    product_data: {
                        name: item.productName, 
                        images: [item.productImage], 
                    }
                }
            }
        })


        /// Fetching from Api
        await fetchFromApi('stripe/charge', {
            body: {line_items, cart,total}
        })
        .then((res)=> {
            const {sessionId} = res;
            const {error} = stripe.redirectToCheckout({sessionId})

            sessionStorage.setItem('stripe_session_id', sessionId)
            if(error){
                console.log(error)
            }
        })
        .catch(error => {
            console.log(error)
        }) 

    }

    return (
        <div className="checkout">
            <div className="title">
                {
                    cart.length ? 
                    <div>
                        <h2>shopping bag</h2>
                        <CurrencyFormat 
                            renderText={(value)=>(
                                <h4>Total: {value} </h4 >
                            )}
                            decimalScale={2}
                            value={total}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"£"}
                        >
                        </CurrencyFormat>
                    </div>
                    : 
                    <div>
                        <h2>Your Shopping Bag is Empty</h2>
                        <Button className="empty__bag__btn" onClick={()=> history.push('/')}>Continue shopping</Button>
                    </div>
                }
            </div>
            <div className="cart__items">
                {cart.map((item, index) => (
                        <CheckoutItems
                            key={index}
                            id={item.id}
                            index={index}
                            productName= {item.productName}
                            productType= {item.productType}
                            productBrand= {item.productBrand}
                            productDesc= {item.productDesc}
                            productPrice= {item.productPrice}
                            productImage= {item.productImage}
                            productSize= {item.productSize}
                            productQuantity={item.productQuantity}
                            removeProduct={removeProduct}
                            updateProduct={updateProduct}
                        />
                ))}
            </div>
            <div className="btn btn__bottom">
                {
                    cart.length >= 1 ? 
                    <>
                        <Button className="checkout__btn" type="button" role="link" onClick={stripeHandleClick} >checkout</Button>
                        <Button type="button" role="link" onClick={()=> clearCart()} >clear</Button>
                    </>
                    :null
                }
            </div>
        </div>
    )
}

export default Checkout
