import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please provide an Email"],
        unique:true
    },
    password:{
        type:String,
        // required:[true,"Please provide a password"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
},{timestamps:true})

const User = mongoose.model("userData",userSchema)
export default User;
 