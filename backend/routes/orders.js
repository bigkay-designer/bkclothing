import express from 'express'
import Orders from '../models/orders'
const router = express.Router()

router.route('/get/orders/:id')
.get(async (req, res)=> {
    try{
        const orderHistory = await Orders.find({paymentId: req.params.id})
        res.status(200).json({orderHistory})
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

router.route('/order/post')
.post((req, res)=> {
    const {cart, total, paymentId, payment_intent} = req.body
    const order = new Orders ({
        cart: cart,
        total: total,
        paymentId: paymentId,
        payment_intent: payment_intent
    })


    order.save((err, resData)=> {
        if(err) res.status(400).json({error: "error occured"})
        res.status(200).json({orderHistory: resData, sessionId: paymentId, payment_intent:payment_intent})
    })
})

export default router