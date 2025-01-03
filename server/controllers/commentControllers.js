import commentModel from "../models/commentModel.js"

const createComment = async (req,res,next) => {
    console.log(req.body);
    const {postId,userId,comments} = req.body;
    const comment = await commentModel.create({postId,userId,comments});
    console.log(comment);
    res.json(comment);
}

const getComments = () =>{

}

export {
    createComment,
    getComments
}