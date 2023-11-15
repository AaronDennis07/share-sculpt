require("express-async-errors")
const express = require('express')
const app = express()
const connectDB = require('./db/connectDB')
const authRoutes = require('./routes/authRoutes')
const errorHandlerMiddleware = require('./middleware/errorhandler')
app.use(express.json())
if(process.env.NODE_ENV==='DEV'){
    require('dotenv').config()
}
    
app.use('/api/v1/auth',authRoutes)

app.use(errorHandlerMiddleware)

connectDB(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DATABASE CONNECTED")
        app.listen(process.env.PORT,()=>{
            console.log(`LISTENING AT PORT ${process.env.PORT}`)
        })
    }).catch((err)=>{
        console.log(err)
        process.exit(0)
    })
