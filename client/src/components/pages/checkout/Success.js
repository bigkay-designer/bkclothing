import React, {useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'
import '../../css/success.css'
import { CheckCircle } from '@material-ui/icons'
import { CartContext } from '../../contextApi/cartContext'
function Success() {
    let history = useHistory()
    const {clearCart} = useContext(CartContext)
    useEffect(()=> {
        clearCart()
    }, [])
    return (
        <div className="success">
            <div className="container">
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
        </div>
    )
}

export default Success
