import express from 'express'
import orders from '../models/orders'
const router = express.Router()

router.route('/get/orders/:id')
.get((req, res)=> {
    res.send('hello')
})


router.route('/get/orders/')
.post((req, res)=> {
    const {
        productName, productType, 
        productBrand, productDesc, 
        productGender, productPrice, productImage, amount} = req.body;

        const newProduct = new orders({productName, productType, productBrand, productDesc, productGender, productPrice, productImage, amount})
        newProduct.save()
        .then(resData => {
            res.status(200).json(resData)
        })
        .catch(err => res.status(500).json({error: err.message}))
})

export default router