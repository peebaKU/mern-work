import express from "express"
import morgan from "morgan"
import cors from "cors"
import mongoose from "mongoose"
import { ServerApiVersion ,MongoClient} from "mongodb"
import {blogRouter} from "./route/blog"

require("dotenv").config()

const app = express()


//connect cloud database
mongoose.connect(process.env.DATABASE,{
}).then(()=>console.log("เชื่อมต่อสำเร็จ")).catch((err)=>console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',blogRouter)


const port =process.env.PORT
app.listen(port,()=>console.log(`start server in port ${port}`))