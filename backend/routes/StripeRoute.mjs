import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET)
const router = express.Router()

router.route('/stripe/charge')
.post(async (req, res)=>{
    const YOUR_DOMAIN = 'https://bkclothing-a57f8.web.app';

    const {line_items,customer_email, cart,} = req.body
    if(!line_items && !customer_email){
        return res.status(400).json({error: "missing required session"})
    }
    let session;
    try{
        session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: 'payment',
            line_items,
            customer_email,
            success_url: `${YOUR_DOMAIN}/success?{CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/canceled`,
            shipping_address_collection: {allowed_countries: ['GB', 'US']},
            metadata: {
                customer_email
            }
        });
        res.status(200).json({sessionId: session.id})

    }catch (error){
        console.log(error)
        res.status(400).json({error: "error occured"})
    }
})

export default router