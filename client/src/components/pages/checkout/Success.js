import React, {useEffect, useContext, useState, useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'
import '../../css/success.css'
import { CheckCircle } from '@material-ui/icons'
import { CartContext } from '../../contextApi/cartContext'
import axios from 'axios';
import Order from './Order'
import { fetchFromApiPut } from '../../helpers'
function Success() {
    let history = useHistory()
    const {clearCart, cart} = useContext(CartContext)
    //address section
    const [address, setAddress] = useState([])
    const [customerName, setCustomerName] = useState('')
    //order sesction
    const [orderCart, setOrderCart] = useState([])
    const [orderId, setOrderId] = useState(null)
    // const [sessionId, setSessionId] = useState('')
    const [total, setTotal] = useState(null)
    // Clear cart useEffect
    const sessionIdUri = sessionStorage.getItem('stripe_session_id')

    // Cart update function

    const updateCart = useCallback (() => {
        const fetchData = async () => {
            await fetchFromApiPut(`api/order/post/${sessionIdUri}`, {
                body: {cart}
            })
            .then((res)=> {
                sessionStorage.setItem('success', 'paid')
                clearCart()
            })
            .catch(error => {
                console.log(`error from updateCart ${error}`)
            })
        }
       return  fetchData()
    }, [cart, sessionIdUri, clearCart])


    // get then update cart function
    const getData = useCallback(()=> {
        const fetchData = async () => {
            await axios.get(`http://localhost:5000/api/get/orders/${sessionIdUri}`)
            .then(res => {
                const resData = res.data[0];
                if(!resData) {
                    sessionStorage.removeItem('stripe_session_id')
                    sessionStorage.removeItem('success')
                    history.push('')
                };

                if(resData){

                    if(resData.paymentStatus === 'paid' && !resData.cart && resData ){
                        updateCart()
                    }
                    if(resData?.cart){
                        setOrderCart(resData?.cart[0])
                    }
                    setOrderId(resData.paymentIntent)
                    setTotal(resData.amountTotal / 100)
                    setAddress(resData.shippingInfo.address)
                    // setSessionId(resData.sessionId)
                    setCustomerName(resData.shippingInfo.name)
                }
            })
            .catch(error => console.log(`error from getData ${error}`))
        }
        fetchData()
    }, [sessionIdUri, updateCart, history])


    /// useEffect for database update function
    useEffect(()=> {
        getData()
    }, [getData])

    return (
        <div className="success">
            <div className="container">
                <div className="success__content">
                    <div className="success__icon">
                        <CheckCircle />
                    </div>
                    <h1>Thank you for your order <span>{customerName.split(' ')[0]}</span> </h1>
                    <p>we are currently processing your order and will send you a confirmation email shortly!!</p>
                    <div className="btn">
                        <Button onClick={()=> history.push('/')}>
                        Continue shopping
                        </Button>
                    </div>
                </div>
                <div className="address">
                    <div className="address__title">
                        <h2>shipping address</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>{customerName}</li>
                            <li>{address.line1}</li>
                            <li>{address.line2}</li>
                            <li className="postal__code">{address.postal_code}</li>
                            <li>{address.country}</li>
                            <li>{address.city}</li>
                            <li>{address.state}</li>
                        </ul>
                    </div>
                </div>
                <div className="order">
                    <div className="order__title">
                        <h2>order</h2>
                        <div className="content">
                            <div className="orderId">
                                <h3>order number</h3>
                                <p>{orderId}</p>
                            </div>
                            <div className="total">
                                <h3>total</h3>
                                <p>£{total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="order__content">
                        {orderCart.map((item, index) => (
                            <Order
                                key={index}
                                productName= {item.productName}
                                productType= {item.productType}
                                productBrand= {item.productBrand}
                                productDesc= {item.productDesc}
                                productPrice= {item.productPrice}
                                productImage= {item.productImage}
                                productSize= {item.productSize}
                                productQuantity={item.productQuantity}
                            />
                         ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success
