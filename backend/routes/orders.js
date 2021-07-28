import express from 'express'
import Orders from '../models/ordersModel'
const router = express.Router()

router.route('/get/orders/:id')
.get(async (req, res)=> {
    
    try{
        const orderHistory = await Orders.find({sessionId: req.params.id})
        res.status(200).json(orderHistory)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})



router.route('/order/post/:id')
.put(async (req, res)=> {
    const {cart, author} = req.body
    try{

        await Orders.findOneAndUpdate({sessionId: req.params.id}, {
             $addToSet:{
                 cart: cart,
                 author: author
             } 
         })
        .then((resData)=>{
            res.status(200).json(resData)
        })
        
    }catch(error){
        res.status(400).json({error: error.message})

    }

})


export default router