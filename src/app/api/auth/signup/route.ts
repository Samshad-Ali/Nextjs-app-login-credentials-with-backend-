import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import connect from "@/dbConfig/dbConfig";
import User from '@/model/User'
connect();
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {username,email,password} = reqBody;
        if(!username || !email || !password){
            return NextResponse.json({
                status:301,
                error:"All fields are required."
            })
        }
        const isUserExist = await User.findOne({email});
        if(isUserExist){
            return NextResponse.json({
                status:300,
                error:"User is already Exist."
            })
        }
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt);
        const user = new User({
            username,
            email,
            password:hashPassword
        })
        await user.save();
        return NextResponse.json({
            status:201,
            success:true,
            result:user
        })
    } catch (error:any) {
        NextResponse.json({status:500,error:error.message})
    }
}

