import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express();
app.use(cookieParser());

const PORT = 3000;

mongoose.connect(process.env.MONGODB)
    .then(()=>{
        console.log("Conected to MongoDB")
    })
    .catch((err)=>{
        console.log(err)
    })

app.listen(PORT, ()=>
{
    console.log("Server is running on port:3000!")
})

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

app.use((err, req, res, next)=>
{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});