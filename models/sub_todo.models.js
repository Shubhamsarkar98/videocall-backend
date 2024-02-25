import mongoose from "mongoose";

const sub_todoSchema = new mongoose.Schema({
    contant: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

const sub_todo = ('sub_todo', sub_todoSchema)