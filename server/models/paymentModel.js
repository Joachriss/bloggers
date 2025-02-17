import mongoose from "mongoose";
import userModel from "./userModel.js";

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending",
    },
    paymentId: {
        type: String,
        required: true,
    },
});

const paymentModel = mongoose.model('payment',paymentSchema);

export default paymentModel;