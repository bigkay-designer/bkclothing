import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET)
// Import routes
import products from '../routes/products'

// port number and app function
const app = express()
const PORT = process.env.PORT || 5000

// Mongoose config
const uri = process.env.ATLAS_BKCLOTHING

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
const db = mongoose.connection
db.once("open", () => console.log("Connected to bkclothing DB"))

// app config
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// Using Routes
app.use('/api/products/', products)


///STRIPE
app.post('/stripe/charge', async (req, res) => {
    let {amount, id} = req.body
    console.log("Stripe.js | amount and id", amount, id )
    try{
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD",
            description: "bkclothing",
            payment_method: id,
            confirm: true
        });
        console.log("stripe.js | payment", payment)
        res.json({
            message: "Payment Success",
            success: true
        })

    }catch(error){
        console.log("stripe.js | error", error)
        res.json({
            message: 'payment failed',
            success: false,
        })
    }
})


app.get('*', (req, res)=>{
    res.status(404).send('you visited the wrong page')
})

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
