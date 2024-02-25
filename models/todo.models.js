import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
 contant:{
    type:String,
    required:true
 },
 complete:{
    type:Boolean,
    default:false
 },
 createBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
 },
 subtodo:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"sub_todo"
 }]
})

const todo=mongoose.model('/todo',todoSchema)