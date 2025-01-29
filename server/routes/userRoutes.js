import express from 'express';
const userRouter = express.Router();
import {getUserById,getUsers,updateUser} from '../controllers/userControllers.js';
import userUpload from '../middlewares/userProfilePictureMiddleware.js';

userRouter.get('/getusers',getUsers);
userRouter.get('/getuserbyid/:userid',getUserById);
userRouter.put('/updateprofile/:userId',userUpload.single('image'),updateUser);

export default userRouter;