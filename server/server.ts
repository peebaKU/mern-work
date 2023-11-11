import express from "express";
import morgan from "morgan"
import cors from "cors"
import mongoose from "mongoose"

require("dotenv").config()

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.get("*",(req,res)=>{
    res.json({
        data:"message from server"
    })
})

const port =process.env.PORT
app.listen(port,()=>console.log(`start server in port ${port}`))