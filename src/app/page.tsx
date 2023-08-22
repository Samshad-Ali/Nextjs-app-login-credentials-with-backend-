 import Link from "next/link";
import React from "react";
 
 const page=()=>{
    return(
        <>
        <div className="w-full h-[100vh] gap-1 flex items-center justify-center">
                <h1 className="text-4xl text-white">Social </h1>
                <h2 className="p-1 bg-orange-500 rounded-md cursor-pointer text-black font-bold text-4xl">hub</h2>
        </div>
            <div className="btn-div">
                <button className="absolute hover:text-black hover:bg-lime-50 hover:rounded-sm p-1 px-4 hover:transition top-2 right-24"><Link href={'signup'}>Sign up</Link></button>
                <button className="absolute hover:text-black hover:bg-lime-50 hover:rounded-sm p-1 px-4 hover:transition top-2 right-4"><Link href={'login'}>Login</Link></button>
            </div>
        </>
    );
}

export default page;