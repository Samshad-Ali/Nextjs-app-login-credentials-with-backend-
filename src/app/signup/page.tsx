"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../styles/signup.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const page = () => {
  const router=useRouter();
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const [noSignup,setNosignup] = useState(false);
  const HandleSignupBtn = async () => {
    try {
      setLoading(true)
      setNosignup(true)
      const response = await axios.post("/api/auth/signup",{username,email,password});
      toast.success("Signup successfully")
      console.log(response);
      router.push("/login")
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
      setNosignup(false)
    }
  };
  useEffect(()=>{
    if(username.length>0){
      setNosignup(false)
    }else{
      setNosignup(true)
    }
  },[username])
  return (
    <div className="signup">
      <h2>{loading?"loading...":"Sign Up"}</h2>
      <div className="flex flex-col gap-4 form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e)=>{ setUsername(e.target.value) }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e)=>{ setEmail(e.target.value) }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e)=>{ setPassword(e.target.value) }}
          />
        </div>
        <button className="btn" onClick={HandleSignupBtn}>
          {noSignup ? "No Signup":"Signup"}
        </button>
        <p>
          Already have account ? <Link href={"/login"}>login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
