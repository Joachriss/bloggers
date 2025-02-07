import subscribersModel from "../models/subscribersModel.js";
import { sendSubscribedEmail, sendUnsubscribedEmail } from "../resend/sendEmail.js";

const subscribe = async (req,res) => {
    const {email,username} = req.body;
    const name = username;
    const subscriber = await subscribersModel.create({name,email});
    if(!subscriber){
        return res.status(400).json({message:"Failed to subscribe"});
    }

    await sendSubscribedEmail(name,email);

    res.status(201).json({message:"Subscribed successfully",subscriber});

} 

const unsubscribe = async (req,res) =>{
    const {email} = req.body;
    const subscriber = await subscribersModel.findOneAndUpdate({email},{$set:{isSubscribed : false}},{new:true});

    if (!subscriber) {
        return res.status(404).json({ error: "Subscriber not found" });
    }
    
    await sendUnsubscribedEmail(subscriber.name,email);

    res.status(200).json({ message: "Subscription updated", subscriber });

}

export {
    subscribe,unsubscribe
}