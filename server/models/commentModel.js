import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        postId:{
            type:String,
            required: true,
        },
        userId:{
            type:String,
            required: true,
        },
        comments:String,

    },
    {
        timestamps:true
    }
);

const commentModel = mongoose.model('comments',commentSchema);

export default commentModel;