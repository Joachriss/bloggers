import commentModel from "../models/commentModel.js"

const createComment = async (req,res,next) => {
    const {postId,userId,comments} = req.body;
    const comment = await commentModel.create({postId,userId,comments});
    res.status(200).json({message:"Comment sent!"});
}

const getComments = async () =>{
    const comments = await commentModel.find();
    res.json(comments);
}

const getPostCommentsByPostId = async (req,res) => {
    const postId = req.params.postid;
    const comments = await commentModel.where(postId);
    res.json(comments);
}

export {
    createComment,
    getComments,
    getPostCommentsByPostId
}