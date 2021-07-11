import mongoose from 'mongoose'
const Schema = mongoose.Schema

const orders  = new Schema({
    cart: {type: Object},
    sessionId: {type: String},
    paymentIntent: {type: String, required: true},
    shippingInfo: {type: Object, required: true},
    amountTotal: {type: Number, required: true },
    paymentStatus: {type: String, required: true },
    author: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        name: String,
        email: String
    },
}, {timestamps: true})

export default mongoose.model('orders', orders)