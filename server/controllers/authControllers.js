import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateVerificationToken } from '../utils/generateVerificationToken.js';
import {verificationEmail, welcomeEmail} from '../resend/sendEmail.js';

const test = (req, res) => {
    res.json('we are good');
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        // check if name is empty
        if (!name || name.trim().length === 0) {
            return res.json({ error: 'Name field is empty' });
        }

        // email
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ error: 'Email already exists' });
        }

        // password
        if (!password || password.length < 6) {
            return res.json({ error: 'Password must be at least 6 characters' });
        }
        if (!confirmPassword || confirmPassword.length < 6) {
            return res.json({ error: 'Password must be at least 6 characters' });
        }
        if (password !== confirmPassword) {
            return res.json({ error: 'Passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const emailVerificationToken = generateVerificationToken();

        // create user
        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
            role: "user",
            emailVerificationToken,
            emailVerificationTokenExpiry: Date.now() + 24 * 60 * 60 * 1000
        });
        res.json({ message: 'User created successfully', user });

        await verificationEmail(email, emailVerificationToken);

    } catch (error) {
        console.log(error);
    }
}

// login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ error: 'User does not exist' });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch === true) {
            const token = jwt.sign({ email: user.email, id: user._id, name: user.name, role: user.role, image: user.image, aboutMe: user.aboutMe }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({ user });
            });
        }
        else {
            return res.json({ error: 'Invalid credentials' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
}

// session token authentication 
const getProfile = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            res.json(user);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};


// email verification
const verifyEmail = async (req, res) => {
    try {
        const token = req.params.token;
        const user = await userModel.findOne({ 
            emailVerificationToken: token, 
            emailVerificationTokenExpiry:{$gt:Date.now()}
        });

        if (!user) {
            return res.json({ error: 'Invalid or expired token' });
        }

        user.isEmailVerified = true;
        user.emailVerificationToken = null;
        user.emailVerificationTokenExpiry=null;
        await user.save();
        res.json({ message: 'Email verified successfully' });
        await welcomeEmail(user.email,user.name);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }

}

// logout
const logoutUser = async (req, res) => {
    try {
        const token = req.cookies.token;
        res.clearCookie('token');
        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};

export {
    test,
    registerUser,
    loginUser,
    getProfile,
    logoutUser,
    verifyEmail
}