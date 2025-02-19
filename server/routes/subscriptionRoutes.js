import Router from "express";
import { checkout, getPaymentList } from "../controllers/subscriptionController.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/azampay/checkout", checkout);
subscriptionRouter.get('/getallpayments',getPaymentList);

export default subscriptionRouter;