import userModel from "../models/userModel.js"
const getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
}

const getUserById = async (req, res) => {
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

// update user profile
const updateUser = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const { name, email, aboutMe } = req.body;

    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.name = name || user.name;
        user.email = email || user.email;

        // password
        // if (password) {
        //     if (password !== confirmPassword) {
        //         return res.status(400).json({ error: 'Passwords do not match' });
        //     }
        //     const hashedPassword = await bcrypt.hash(password, 12);
        //     user.password = hashedPassword;
        // }
        const image = req.file.filename;

        user.image = image || user.image;
        user.aboutMe = aboutMe || user.aboutMe;
        
        const updatedUser = await user.save();
        res.status(200).json({ message: 'User updated successfully',updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
}


export {
    getUsers,
    getUserById,
    updateUser
}