import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import webhook from '../routes/webhook'
// Import routes
import products from '../routes/products'
import stripeRoute from '../routes/StripeRoute'
import orders from '../routes/orders'

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
app.use(express.json({
    verify: (req, res, buffer)=> req.rawBody = buffer,
}));
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: true}))

// Using Routes
app.use('/api/products/', products)
app.use('/', stripeRoute)
app.use('/api/', orders)
app.use('/', webhook)

// Webhook

app.get('*', (req, res)=>{
    res.status(404).send('you visited the wrong page')
})

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
