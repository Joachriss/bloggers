import commentModel from "../models/commentModel.js";

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
    const postId = req.params.postid;
    const comments = await commentModel.find({postId:postId}).populate('userId');
    console.log(comments);
    res.json(comments);
}

export {
    createComment,
    getComments,
    getPostCommentsByPostId
}