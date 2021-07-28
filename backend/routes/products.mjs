import express from 'express'
import products from '../models/productsModal.mjs'
const router = express.Router()

// gender based router
router.route('/get/all/:gender').get( async(req, res) => {
    try{
        const currentProducts = await products.find({productGender: req.params.gender}).sort({_id: -1})
        res.status(200).json(currentProducts)
    }catch (err){
        res.status(500).json({error: err.message})
    }
})

// more product details router
router.route('/get/product/:name/:id').get( async (req, res) => {
  try{
    const getProductById = await products.findOne({productName: req.params.name, _id: req.params.id})
    res.status(200).json(getProductById)
  }catch(err){
    res.status(500).json({error: err.message})
  }
})

// post product router
router.route('/product/post').post((req, res)=> {
  const {
    productName, productType, 
    productBrand, productDesc, 
    productGender, productPrice, productImage, productCategory} = req.body;
      
  const newProduct = new products({productName, productType,productCategory, productBrand, productDesc, productGender, productPrice, productImage})
  newProduct.save()
  .then(resData => {
      res.status(200).json(resData)
  })
  .catch(err => res.status(500).json({error: err.message}))
})


///// specific product by title
router.route('/get/:productName').get( async(req, res) => {
  try{
      const currentProducts = await products.find({productCategory: req.params.productName}).sort({_id: -1})
      res.status(200).json(currentProducts)
  }catch (err){
      res.status(500).json({error: err.message})
  }
})

export default router