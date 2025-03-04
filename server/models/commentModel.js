import mongoose from "mongoose";
import { Schema } from "mongoose";
import userModel from "./userModel.js";

const commentSchema = new mongoose.Schema(
    {
        postId:{
            required: true,
            type:Schema.Types.ObjectId,
        },
        userId:{
            required: true,
            type:Schema.Types.ObjectId,
            ref:userModel
        },
        userComment:String,

    },
    {
        timestamps:true
    }
);

const commentModel = mongoose.model('comments',commentSchema);

export default commentModel;