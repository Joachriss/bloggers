import mongoose from "mongoose";
import { Schema } from "mongoose";
import postModel from "./postModel.js";
import userModel from "./userModel.js";

const commentSchema = new mongoose.Schema(
    {
        postId:{
            required: true,
            // type:Schema.Types.ObjectId,
            type:String
        },
        userId:{
            required: true,
            type:Schema.Types.ObjectId,
            ref:userModel
        },
        comments:String,

    },
    {
        timestamps:true
    }
);

const commentModel = mongoose.model('comments',commentSchema);

export default commentModel;