"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { RiLogoutCircleRLine } from "react-icons/ri";
export default function page() {
  const router = useRouter();
  const [user,setUser] = useState("no")
  const handleLogoutBtn = async () => {
    try {
      const response = await axios.get("/api/auth/logout");
      console.log(response);
      toast.success("Logout successfully");
      router.push('/login')
    } catch (error:any) {
      toast.error(error.message);
    }
  };

  const fetchingData=async()=>{
    try {
      const response = await axios.get('/api/auth/me');
      console.log(response);
      setUser(response.data.result._id)
    } catch (error:any) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    fetchingData()
  },[])

  return (
    <div className="w-full flex-col gap-2 h-[100vh] flex justify-center items-center">
      <h2 className="text-orange-600 text-3xl">Profile Page</h2>
    <span>
      {
        user==='no'?"Loading..." : <Link className="p-1 bg-green-700 text-white rounded-sm shadow-sm shadow-slate-500" href={`/profile/${user}`}>Click here for visit user</Link>
      }
    </span>
      <button
        onClick={handleLogoutBtn}
        className="bg-slate-200 p-1 text-black rounded-full absolute top-5 right-8 text-lg"
      >
        <RiLogoutCircleRLine />
      </button>
    </div>
  );
}
