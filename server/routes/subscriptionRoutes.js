import Router from "express";
import { subscriptionPlan, checkout } from "../controllers/subscriptionController.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/subscription", subscriptionPlan);
subscriptionRouter.post("/azampay/checkout", checkout);

export default subscriptionRouter;