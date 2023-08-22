import { connecting } from "../../../../dbConfig/dbConfig.js";
import User from "../../../../model/userData.js";
import bcryptjs from 'bcryptjs'
import {NextRequest,NextResponse } from "next/server";


connecting();
export  async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {username,email,password} = reqBody;
        if(!username || !email || !password){
            return NextResponse.json({result:"All data is Required..!"},{status:404})
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);
        const isUserExist = await User.findOne({email});
        if(isUserExist){
            return NextResponse.json({result:"User already exist."},{status:400})
        }
        const newUser = new User({
            username,email,hashedPassword
        })
        await newUser.save();
        return NextResponse.json({
            success:true,
            status:400
        })
    } catch (error:any) {
        return NextResponse.json(
            {error:error.message},
            {status:500}
            )
    }
}

