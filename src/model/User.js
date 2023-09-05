import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Name is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Name is required"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
},{timestamps:true})

const User = mongoose.models.userDatas || mongoose.model('userDatas',userSchema);

export default User;