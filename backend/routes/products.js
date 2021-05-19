import express from 'express'
import products from '../models/products'
const router = express.Router()

router.route('/get').get( async(req, res) => {
    try{
        const currentProducts = await products.find(req.products).sort({_id: -1})
        res.status(200).json(currentProducts)
    }catch (err){
        res.status(500).json({error: err.message})
    }
})

router.route('/post').post((req, res)=> {
  const {
    productName, productType, 
    productBrand, productDesc, 
    productGender, productPrice, productImage} = req.body;

  const newProduct = new products({productName, productType, productBrand, productDesc, productGender, productPrice, productImage})
  newProduct.save()
  .then(resData => {
      res.status(200).json(resData)
  })
  .catch(err => res.status(500).json({error: err.message}))
})

export default router