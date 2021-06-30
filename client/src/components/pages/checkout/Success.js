import React, {useEffect, useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'
import '../../css/success.css'
import { CheckCircle } from '@material-ui/icons'
import { CartContext } from '../../contextApi/cartContext'
import axios from 'axios';
import Order from './Order'
function Success() {
    let history = useHistory()
    const {clearCart} = useContext(CartContext)
    const [orderCart, setOrderCart] = useState([])
    const [orderId, setOrderId] = useState(null)
    const [total, setTotal] = useState(null)
    // Clear cart useEffect
    useEffect(()=> {
        clearCart()
    }, [])

    const sessionId = history.location.search.slice(1)

    // useEffect(()=> {
    //     axios.get(`http://localhost:5000/api/get/orders/${sessionId}`)
    //     .then(res => {
    //         const responseData = res.data.orderHistory[0]
    //         setOrderCart(responseData.cart)
    //         setOrderId(responseData.orderId)
    //         setTotal(responseData.total)
    //     })
    // }, [])
    return (
        <div className="success">
            <div className="container">
                <div className="success__content">
                    <div className="success__icon">
                        <CheckCircle />
                    </div>
                    <h1>Thank you for your order</h1>
                    <p>we are currently processing your order and will send you a confirmation email shortly!!</p>
                    <div className="btn">
                        <Button onClick={()=> history.push('/')}>
                        Continue shopping
                        </Button>
                    </div>
                </div>
                <div className="order">
                    <div className="order__title">
                        <h1>order</h1>
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
