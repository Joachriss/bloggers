import { Router } from 'express';
const postRouter = Router();
import upload from '../middlewares/imageUploadMiddleware.js';
import {createPost, getAllPosts} from '../controllers/postControllers.js';

postRouter.post('/createpost',upload.single('image'),createPost);
postRouter.get('/posts',getAllPosts)

export default postRouter;