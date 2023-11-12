import mongoose from "mongoose";

export const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:{},
        required:true
    },
    auther:{
        type:String,
        default:"Admin"
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})