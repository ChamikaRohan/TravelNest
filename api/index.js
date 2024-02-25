import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MongoDB)
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