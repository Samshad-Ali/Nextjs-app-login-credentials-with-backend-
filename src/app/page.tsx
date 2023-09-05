"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { RiLogoutCircleRLine } from "react-icons/ri";

const page = () => {
  const router = useRouter();

  const handleMenuBtn = () => {
    router.push('/menu')
  };

  const handleLogoutBtn = async () => {
    try {
      const response = await axios.get("/api/auth/logout");
      console.log(response);
      toast.success("Logout successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="home">
        <div className=" bg-slate-900 opacity-60 w-full h-[100vh] gap-5 flex items-center flex-col justify-center">
          <div className="flex gap-1 items-center justify-center">
            <h1 className="text-2xl text-white sm:text-4xl">Welcome to Food </h1>
            <h2 className="p-1 bg-orange-500 rounded-md text-black font-bold text-2xl sm:text-4xl">
              hub
            </h2>
          </div>
          <button
            className="bg-black text-white p-2 font-bold hover:scale-100 scale-110 transition-all hover:bg-white hover:text-black"
            onClick={handleMenuBtn}
          >
            Click for Menu
          </button>
        </div>
      </div>
      <button
        onClick={handleLogoutBtn}
        className="bg-slate-200 p-1 text-black rounded-full absolute top-5 right-8 text-lg"
      >
        <RiLogoutCircleRLine />
      </button>
    </>
  );
};

export default page;
