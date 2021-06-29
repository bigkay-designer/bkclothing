import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import Stripe from 'stripe'
import Orders from '../models/orders'
const stripe = new Stripe(process.env.STRIPE_SECRET)
const router = express.Router()
router.route('/stripe/charge')
.post(async (req, res)=>{
    const YOUR_DOMAIN = 'http://localhost:3000';

    const {line_items,customer_email, total, cart} = req.body
    if(!line_items){
        return res.status(400).json({error: "missing required session"})
    }
    try{
        stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: 'payment',
            line_items,
            customer_email,
            success_url: `${YOUR_DOMAIN}/success?{CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/canceled`,
            shipping_address_collection: {allowed_countries: ['GB', 'US']}

        }, (err, charge) => {
            if(err) res.status(400).json({error: "error occured"})
            
            const order = new Orders ({
                cart: cart,
                total: total,
                paymentId: charge.id,
                orderId: charge.payment_intent
            })

            order.save((err, resData)=> {
                if(err) res.status(400).json({error: "error occured"})
                res.status(200).json({orderHistory: resData, sessionId: resData.paymentId, orderId:charge.payment_intent})
            })
        })


    }catch (error){
        console.log(error)
        res.status(400).json({error: "error occured"})
    }
})

export default router