import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        emailVerificationToken: {
            type: String,
            default: null
        },
        emailVerificationTokenExpiry: {
            type: Date,
            default: null
        },
        password: String,
        passwordResetToken: {
            type: String,
            default: null
        },
        passwordResetTokenExpiry: {
            type: Date,
            default: null
        },
        role: {
            type: String,
            required: true
        },
        image:{
            type: String,
            default: null
        },
        aboutMe: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model('users', userSchema);

export default userModel;