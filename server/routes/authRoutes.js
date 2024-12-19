import express from 'express';
const router = express.Router();
import {test,registerUser,loginUser,getProfile} from '../controllers/authControllers.js';


router.get('/', test);

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/profile',getProfile);
export default router;