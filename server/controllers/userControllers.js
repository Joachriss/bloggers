import userModel from "../models/userModel.js"
const getUsers = async (req,res) =>{
    const users = await userModel.find();
    res.json(users);
}

const getUserById = async (req,res) => {
    const userId = req.params.userid;
    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}


export {
    getUsers,
    getUserById
}