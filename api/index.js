import express from 'express'

const app = express();
const PORT = 3000;

app.listen(PORT, function(req,res)
{
    console.log("Server is running on port:3000!")
})