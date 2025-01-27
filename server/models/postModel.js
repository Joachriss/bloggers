import { Schema, model } from 'mongoose';
import commentModel from './commentModel.js';
import userModel from './userModel.js';

const postSchema = new Schema({
    tittle: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: userModel, required: true },
    visibility: {
        type: String,
        enum: ['public', 'private','none'],
        default: 'public',
    },
    viewedBy: [{ 
        type: Schema.Types.ObjectId,
        ref: userModel,
     }],
     likedBy: [{
        type: Schema.Types.ObjectId,
        ref: userModel,
     }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:commentModel
    }],
    editedBy:[{
        type: Schema.Types.ObjectId,
        ref:userModel
    }],
    image: { type: String, required: true },
},
{
    timestamps:true
}
);

const postModel = model('posts',postSchema);

export default postModel;