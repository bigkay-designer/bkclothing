import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const products = new Schema({
    productName: String,
    productType: String,
    productBrand: String,
    productDesc: String,
    productGender: String,
    productPrice: Number,
    productImage: String
})

export default mongoose.model('products', products)