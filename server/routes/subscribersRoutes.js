import Router from "express";
const subscribersRouter = Router();
import { subscribe, unsubscribe } from "../controllers/subscribersControllers.js";

subscribersRouter.post("/subscribe", subscribe);
subscribersRouter.post("/unsubscribe", unsubscribe);

export default subscribersRouter;