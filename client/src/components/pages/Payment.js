// import React, {useState, useEffect} from 'react'
// import {loadStripe} from '@stripe/stripe-js'
// import CheckoutItems from './CheckoutItems'
// import '../css/Payment.css'
// import PaymentItems from './PaymentItems'
// import { useStateValue } from '../contextApi/cartContext'
// import { Button } from '@material-ui/core'
// import Billing from './Billing'
// import axios from 'axios'
// function Payment() {
//     const [newCart, setNewCart] = useState([])
//     const [{cart}, dispatch] = useStateValue()

//     const stripePromise = loadStripe("pk_test_51ITBiPDkKKCnsU3mzowRSuptSxuYu1YiPtFZfC0octwgDMKJj9uYHHxlwJFlCPSUBIATHHQjtc3MmuJGOkDQTEtp00X30SP1ZT");
    
//     useEffect(() => {
//         let filterOldCart = cart.filter((elm,index,arr)=> arr.findIndex(item => elm.id === item.id && elm.productSize === item.productSize) === index)
//         setNewCart(filterOldCart)
//     }, [cart])


//     ////
//     const handleClick = async (e) => {
//         e.preventDefault()
//         const stripe = await stripePromise
//         const response = await fetch ('http://localhost:5000/stripe/charge', {method: 'POST'})
//         const session = await response.json()

//         const result = await stripe.redirectToCheckout({
//             sessionId: session.id
//         })

//         if(result.error){
//             console.log(result.error)
//         }
//     }
//     return (
//         <div className="payment">
//             <div className="cart__items">
//                 <div className="title">
//                     <h2>cart summary</h2>
//                 </div>
//                 <div className={`${cart.length >= 1 && "container"}`}>
//                     {newCart.map((item, index) => (
//                         <PaymentItems
//                         key={index}
//                         id={item.id}
//                         productName={item.productName}
//                         productPrice={item.productPrice}
//                         image={item.productImage}
//                         size={item.productSize}
//                         quantity={item.productQuantity}
//                         />
//                         ))}
//                 </div>
//             </div>
//             <section>
//                 <button type="button" id="checkout-button" role="link" onClick={handleClick}>
//                     Checkout
//                 </button>
//             </section>
//         </div>
//     )
// }

// export default Payment
