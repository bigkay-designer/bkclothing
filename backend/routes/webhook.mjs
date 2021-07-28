import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import Stripe from 'stripe'
import Orders from '../models/ordersModel.mjs'
const router = express.Router()
const stripe = new Stripe(process.env.STRIPE_SECRET)


router.route('/webhook')
.post(async(req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

      // Handle the event
      try{
        event = stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.WEBHOOK_SECRET);
      }catch(error){
        return res.status(400).send(`Webhook error ${error.message}`);
      }
      
      if(event.type === 'checkout.session.completed'){
        const session = event.data.object
        console.log('created session')
        const order = new Orders({
            cart: {},
            sessionId: session.id,
            paymentIntent: session.payment_intent,
            shippingInfo: session.shipping,
            amountTotal: session.amount_total,
            paymentStatus: session.payment_status,
            author: {}
        })
        order.save((err, resData)=> {
            if(err) res.status(400).json({error: `error occured ${err.message}`})
            console.log('saved to db')
            res.status(200).json(resData)
        })
      }
})


export default router
