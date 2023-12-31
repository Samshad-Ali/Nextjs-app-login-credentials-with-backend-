import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// actual logic 
// it is set before a request 
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path ==='/login' || path ==='/signup';

    const token = request.cookies.get('token_key')?.value || '';

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
}
 
// See "Matching Paths"
export const config = {
  matcher: ['/','/profile','/login','/signup']
}