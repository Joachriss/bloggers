import {Router} from "express";
const commentRouter = Router();
import { createComment, getComments } from "../controllers/commentControllers.js";

commentRouter.post('/createcomment',createComment);
commentRouter.get('getcomments',getComments);


export default commentRouter;