import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

connect()
export const GET = async(request:NextRequest) => {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findById(userId).select('-password');
        return NextResponse.json({
            status:200,
            result:user
        })
    } catch (error:any) {
      return NextResponse.json({
            error:error.message,
            status:500
        })
    }
}