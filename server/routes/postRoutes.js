import { Router } from 'express';
const postRouter = Router();
import upload from '../middlewares/imageUploadMiddleware.js';
import {createPost, getAllPosts, editPost, getPostById, deletePost} from '../controllers/postControllers.js';


postRouter.post('/createpost',upload.single('image'),createPost);
postRouter.get('/posts',getAllPosts);
postRouter.get('/getpostbyid/:id',getPostById);
postRouter.put('/editpost/:id',upload.single('image'),editPost);
postRouter.delete('/deletepost/:id',deletePost);

export default postRouter;