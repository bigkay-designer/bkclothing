import mongoose from 'mongoose'
const Schema = mongoose.Schema

const orders  = new Schema({
    cart: {type: Object, required: true},
    productData: {type: Object, required: true},
    sessionId: {type: String, required: true},
    paymentIntent: {type: String, required: true},
    shippingInfo: {type: Object, required: true},
    amountTotal: {type: Number, required: true }
}, {timestamps: true})

export default mongoose.model('orders', orders)