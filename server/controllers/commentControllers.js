import commentModel from "../models/commentModel.js"

const createComment = async (req,res,next) => {
    console.log(req.body);
    const {postId,userId,comments} = req.body;
    const comment = await commentModel.create({postId,userId,comments});
    console.log(comment);
    res.status(200).json({message:"Comment sent!"});
}

const getComments = () =>{

}

const getPostCommentsByPostId = async (req,res) => {
    const postId = req.params.postid;
    const comments = await commentModel.where(postId);
    res.json(comments);
    console.log(comments);
}

export {
    createComment,
    getComments,
    getPostCommentsByPostId
}