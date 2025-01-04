import express from 'express';
const userRouter = express.Router();
import {getUserById} from '../controllers/userControllers.js';

userRouter.get('/getuserbyid/:userid',getUserById);
export default router;