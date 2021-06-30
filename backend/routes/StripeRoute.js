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
    let session;
    try{
        session= await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: 'payment',
            line_items,
            customer_email,
            success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/canceled`,
            shipping_address_collection: {allowed_countries: ['GB', 'US']}

        });

        res.status(200).json({sessionId: session.id})

    }catch (error){
        console.log(error)
        res.status(400).json({error: "error occured"})
    }
})

export default router