import express from 'express';
const googleRouter = express.Router();
import { googleAuthentication } from "../controllers/googleAuthControllers.js";

googleRouter.post('/auth/google',googleAuthentication);

export default googleRouter;