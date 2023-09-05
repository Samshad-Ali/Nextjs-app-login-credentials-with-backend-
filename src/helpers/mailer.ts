import nodemailer from 'nodemailer';
import User from '@/model/User';
import bcryptjs from 'bcryptjs';

export const sendEmail=async({email,emailType,userId}:any)=>{
    try {
        // create a hashed token
      const hashToken = await bcryptjs.hash(userId.toString(),10);
      if(emailType==="VERIFY"){
          await User.findByIdAndUpdate(userId,
            {verifyToken:hashToken,verifyTokenExpiry:Date.now()+3600000})
        }else if(emailType==='RESET'){
            await User.findByIdAndUpdate(userId,
                {forgotPasswordToken:hashToken,forgotPasswordTokenExpiry:Date.now()+3600000})
        }

        // create transporter

        const transporter = nodemailer

    } catch (error:any) {
        throw new Error(error.message)
    }
}