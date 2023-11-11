import  express  from "express";

export const blogRouter = express.Router()

blogRouter.get('/blog',(req,res)=>{
    res.json({
        data:"Hello Route Blog"
    })
})


