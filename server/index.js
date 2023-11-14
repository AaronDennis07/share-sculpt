const express = require('express')
const app = express()
const {connectDB} = require('./db')
if(process.env.NODE_ENV==='DEV'){
    require('dotenv').config()
   
}
    
app.get("/",(req,res)=>{
    return res.json("hi")
})

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
