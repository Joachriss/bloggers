import express from 'express';
const userRouter = express.Router();
import {getUserById,getUsers} from '../controllers/userControllers.js';

userRouter.get('/getusers',getUsers);
userRouter.get('/getuserbyid/:userid',getUserById);
export default userRouter;