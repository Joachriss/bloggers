import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    tittle: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date},
});

const postModel = model('posts',postSchema);

export default postModel;