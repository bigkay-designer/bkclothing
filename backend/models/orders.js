import mongoose from 'mongoose'
const Schema = mongoose.Schema

const orders  = new Schema({
    productName: String,
    productType: String,
    productBrand: String,
    productDesc: String,
    productGender: String,
    productPrice: Number,
    productImage: String,
    amount: Number
}, {timestamps: true})

export default mongoose.model('orders', orders)