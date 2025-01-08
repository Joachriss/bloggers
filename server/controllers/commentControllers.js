import commentModel from "../models/commentModel.js";
import mongoose from "mongoose";
import ObjectId from 'mongodb';

const createComment = async (req,res,next) => {
    const {postId,userId,userComment} = req.body;
    const comment = await commentModel.create({postId,userId,userComment});
    res.status(200).json({message:"Comment sent!"});
}

const getComments = async (req,res) =>{
    const comments = await commentModel.find().populate('userId');
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