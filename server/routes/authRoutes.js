import express from 'express';
const router = express.Router();
import {test,registerUser,loginUser,getProfile, logoutUser, verifyEmail} from '../controllers/authControllers.js';


router.get('/', test);

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/profile',getProfile);
router.post('/logout',logoutUser);
router.post('/verifyemail/:token',verifyEmail);
export default router;