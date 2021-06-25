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
app.use(cors({origin: true}))

// Using Routes
app.use('/api/products/', products)


///STRIPE
app.post('/stripe/charge', async (req, res)=>{
    const YOUR_DOMAIN = 'http://localhost:3000';

    const {line_items, customer_email} = req.body

    if(!line_items){
        return res.status(400).json({error: "missing required session"})
    }
        let session;

        try{
            session= await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: 'payment',
                line_items,
                customer_email,
                success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${YOUR_DOMAIN}/canceled`,
                shipping_address_collection: {allowed_countries: ['GB', 'US']}

            });

            res.status(200).json({sessionId: session.id})

        }catch (error){
            console.log(error)
            res.status(400).json({error: "error occured"})
        }

})


app.get('*', (req, res)=>{
    res.status(404).send('you visited the wrong page')
})

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
