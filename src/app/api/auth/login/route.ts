import connect from '@/dbConfig/dbConfig';
import User from '@/model/User';
import {NextRequest,NextResponse} from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
connect();
export const POST=async(req:NextRequest)=>{
    try {
        const reqBody = await req.json();
        const {email,password}=reqBody;
          if(!email || !password){
            return NextResponse.json({
                status:301,
                error:"All fields are required."
            })
        }
        const isUserExist = await User.findOne({email});
        if(!isUserExist){
            NextResponse.json({
                status:404,
                error:"User is not Exist, singup first."
            })
        }
        const validPassword = bcryptjs.compare(password,isUserExist.password);
        if(!validPassword){
            NextResponse.json({
                status:404,
                error:"Incorrect password."
            })
        }

        // token datas
        const tokenData = {
            id:isUserExist._id,
            username:isUserExist.username,
            email:isUserExist.email
        }  

        // create token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY!,{
            expiresIn:'1d'
        })

        const response =  NextResponse.json({
            status:201,
            success:true,
            result:"login successfully"
        })
        response.cookies.set("token_key",token,{
            httpOnly:true
        });
        return response;
    } catch (error:any) {
        NextResponse.json({
            status:500,
            error:error.message
        })
    }
}