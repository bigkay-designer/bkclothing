import React, {useState, useEffect} from 'react'
import CheckoutItems from './CheckoutItems'
import '../css/Payment.css'
import PaymentItems from './PaymentItems'
import { useStateValue } from '../contextApi/cartContext'
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
                <div className="container">
                    <div className="title">
                        <h2>shopping bag</h2>
                    </div>
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
        </div>
    )
}

export default Payment
