import { Router } from 'express';
const postRouter = Router();
import upload from '../middlewares/imageUploadMiddleware.js';
import {createPost, getAllPosts, editPost, getPostById, deletePost, getPostForEditing, handleLikes} from '../controllers/postControllers.js';


postRouter.post('/createpost',upload.single('image'),createPost);
postRouter.get('/posts',getAllPosts);
postRouter.get('/getpostbyid/:postId/:userId',getPostById);
postRouter.get('/getpostforediting/:postId',getPostForEditing);
postRouter.put('/editpost/:id',upload.single('image'),editPost);
postRouter.delete('/deletepost/:id',deletePost);

// likes
postRouter.put('/likepost/:postId/:userId',handleLikes);

export default postRouter;