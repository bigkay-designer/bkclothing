import express from 'express'
import Stripe from 'stripe'
const router = express.Router()
const stripe = new Stripe(process.env.STRIPE_SECRET)

router.route('/webhook')
.post((req, res) => {
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
        console.log('event data', session)
      }
      res.send()
})


export default router
