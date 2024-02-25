import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
        }

    },{timestamps:true}
)

const user = mongoose.model('user', userSchema)