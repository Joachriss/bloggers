import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    role: {
        type:String,
        required: true
    }
},
{
    timestamps:true
}
);

const userModel= mongoose.model('users',userSchema);

export default userModel;