import commentModel from "../models/commentModel.js";
import mongoose from "mongoose";
import postModel from "../models/postModel.js";

const createComment = async (req,res,next) => {
    const {postId,userId,userComment} = req.body;
    const UserComment = await commentModel.create({postId,userId,userComment});
    await postModel.findByIdAndUpdate(postId,{$push:{comments:UserComment._id}});
    res.status(200).json({message:"Comment sent!"});
}

const getComments = async (req,res) =>{
    const comments = await commentModel.find().populate({path:'userId',select:'name'});
    res.json(comments);
}

const getPostCommentsByPostId = async (req,res) => {
    // RECEIVEING AND CONVERTING postid STRING INTO ObjectId DATA TYPE
    const postId = new mongoose.Types.ObjectId(String(req.params.postid));

    const comments = await commentModel.find({postId:postId}).populate('userId');
    res.json(comments);
}

export {
    createComment,
    getComments,
    getPostCommentsByPostId
}