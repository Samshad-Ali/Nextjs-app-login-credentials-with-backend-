import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            status:201,
            result:"Logout successfully"
        })
        response.cookies.set('token_key',"",{
            httpOnly:true
        })
        return response;
    } catch (error:any) {
        NextResponse.json({
            status:201,
            error:error.message
        })
    }
}