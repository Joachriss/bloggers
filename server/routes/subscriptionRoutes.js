import Router from "express";
import { checkout } from "../controllers/subscriptionController.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/azampay/checkout", checkout);

export default subscriptionRouter;