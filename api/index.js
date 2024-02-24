import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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