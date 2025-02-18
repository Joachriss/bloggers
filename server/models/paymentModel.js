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
    expiresAt:{
        type: Date,
        default: null
    },
    plan:{
        type: String,
    },
    paymentId: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const paymentModel = mongoose.model('payment',paymentSchema);

export default paymentModel;