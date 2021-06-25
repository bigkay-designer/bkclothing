import React, {useState} from 'react'
import axios from '../../containers/axios'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from '@material-ui/core';

function Billing() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [postcode, setPostcode] = useState('')
    const [city, setCity] = useState('')
        ////Stripe
    const stripe = useStripe();
    const elements = useElements();

    const submitHandler  = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        if(!error){
            console.log("stripe 23 | token generated", paymentMethod)
            // Send token to backend
            try{
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:5000/stripe/charge", {
                    amount: 990,
                    id: id,
                })
                console.log("stripe.js | data", response.data)
            }catch(error){

            }
        }else{
            console.log(error.message)
        }
    }
    return (
        <div className="billing__details">
            <div className="title">
                <h2>billing details</h2>
            </div>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="input__group">
                        <label htmlFor="name">first & last name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" required  />
                    </div>
                    <div className="input__group">
                        <label htmlFor="email">email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" required  />
                    </div>
                    <div className="address__group">
                        <div className="input__group postcode">
                            <label htmlFor="postcode">Zip/Postal code</label>
                            <input onChange={(e) => setPostcode(e.target.value)} type="text" required  />
                        </div>
                        <div className="input__group city">
                            <label htmlFor="city">city</label>
                            <input onChange={(e) => setCity(e.target.value)} type="text" required  />
                        </div>
                    </div>
                    <div className="payment__method">
                        <div className="title">
                            <h2>payment method</h2>
                        </div>
                        <div className="container">
                            <CardElement />
                        </div>
                    </div>
                    <div className="btn__form">
                        <Button type="submit">place order</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Billing
