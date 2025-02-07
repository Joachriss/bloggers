import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    isSubscribed:{
        type:Boolean,
        default:true
    }
});

const subscribersModel = mongoose.model('Subscribers', subscriberSchema);

export default subscribersModel;