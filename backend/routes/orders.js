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

export default router