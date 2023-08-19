 import Link from "next/link";
import React from "react";
 
 const hello=()=>{
    return(
        <>
        <div className="w-full h-full flex-col flex items-center justify-center">
            <h1 className="py-4 my-10 text-4xl">Sarcasm</h1>
            <img className="rounded-md w-[500px]" src="https://static.scientificamerican.com/sciam/cache/file/CAB2F17A-6F5E-4BE8-84D00FCA9AC7A2C6_source.jpg?w=590&h=800&D03113F9-A541-4117-8CCCBDDA01FF2CB3" alt="" />
        </div>
            <div className="btn-div">
                <button className="absolute hover:text-black hover:bg-lime-50 hover:rounded-sm p-1 px-4 hover:transition top-2 right-24"><Link href={'signup'}>Sign up</Link></button>
                <button className="absolute hover:text-black hover:bg-lime-50 hover:rounded-sm p-1 px-4 hover:transition top-2 right-4"><Link href={'login'}>Login</Link></button>
            </div>
        </>
    );
}

export default hello;