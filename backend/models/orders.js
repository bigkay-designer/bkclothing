import mongoose from 'mongoose'
const Schema = mongoose.Schema

const orders  = new Schema({
    cart: {type: Object, required: true},
    total: {type: Number, required: true},
    paymentId: {type: String ,required: true}
}, {timestamps: true})

export default mongoose.model('orders', orders)