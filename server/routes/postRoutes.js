import { Router } from 'express';
const postRouter = Router();
import upload from '../middlewares/imageUploadMiddleware.js';
import {createPost, getAllPosts, editPost, getPostById} from '../controllers/postControllers.js';


postRouter.post('/createpost',upload.single('image'),createPost);
postRouter.get('/posts',getAllPosts);
postRouter.get('/getpost/:id',getPostById);
postRouter.put('/editpost/:id',upload.single('image'),editPost);

export default postRouter;