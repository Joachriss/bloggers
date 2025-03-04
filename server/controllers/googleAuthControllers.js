import axios from "axios";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";


const googleAuthentication = async (req, res) => {
    try {
        const accessToken = req.body.accessToken;
        const userData = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        // check user in the database
        const user = await userModel.findOne({ email: userData.data.email });
        if (!user) {
            // create new user
            const user = await userModel.create({
                name: userData.data.name,
                email: userData.data.email,
                image: userData.data.picture,
                isEmailVerified: userData.data.email_verified,
                role: "user"
            });
        }
        if(user.image === null){
            user.image = userData.data.picture;
            await user.save();
        }

        // creating jwt token for user
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role, name: user.name,image:user.image,aboutMe:user.aboutMe }, process.env.JWT_SECRET, { expiresIn: '1h'});
        res.cookie('token', token).json({
            message: `Welcome back ${user.name}`,
            user: user,
        });
    } catch (error) {
        console.log(error);
    }

}

export {
    googleAuthentication
}