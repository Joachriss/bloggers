import {Router} from "express";
const commentRouter = Router();
import { createComment, getComments, getPostCommentsByPostId } from "../controllers/commentControllers.js";

commentRouter.post('/createcomment',createComment);
commentRouter.get('/getcomments',getComments);
commentRouter.get('/getpostcomments/:postid',getPostCommentsByPostId)


export default commentRouter;