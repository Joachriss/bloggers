import { Schema, model } from 'mongoose';
import commentModel from './commentModel.js';
import userModel from './userModel.js';

const postSchema = new Schema({
    tittle: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    visibility: {type: String},
    viewedBy: [{ 
        type: Schema.Types.ObjectId,
        ref: userModel,
     }],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:commentModel
    }],
    image: { type: String, required: true },
},
{
    timestamps:true
}
);

const postModel = model('posts',postSchema);

export default postModel;