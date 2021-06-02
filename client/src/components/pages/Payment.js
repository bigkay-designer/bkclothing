import React, {useState, useEffect} from 'react'
import CheckoutItems from './CheckoutItems'
import '../css/Payment.css'
import PaymentItems from './PaymentItems'
import { useStateValue } from '../contextApi/cartContext'
import { Button } from '@material-ui/core'
import Billing from './Billing'
function Payment() {
    const [newCart, setNewCart] = useState([])
    const [{cart}, dispatch] = useStateValue()
    
    useEffect(() => {
        let filterOldCart = cart.filter((elm,index,arr)=> arr.findIndex(item => elm.id === item.id && elm.productSize === item.productSize) === index)
        setNewCart(filterOldCart)
    }, [cart])
    return (
        <div className="payment">
            <div className="cart__items">
                <div className="title">
                    <h2>cart summary</h2>
                </div>
                <div className={`${cart.length >= 1 && "container"}`}>
                    {newCart.map((item, index) => (
                        <PaymentItems
                        key={index}
                        id={item.id}
                        productName={item.productName}
                        productPrice={item.productPrice}
                        image={item.productImage}
                        size={item.productSize}
                        quantity={item.productQuantity}
                        />
                        ))}
                </div>
            </div>
            <Billing />
        </div>
    )
}

export default Payment
