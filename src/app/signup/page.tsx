"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../styles/signup.css";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
  const router=useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading,setLoading]=useState(false)
  const HandleSignupBtn = async () => {
    try {
      console.log("hello");
      router.push("/login")
      const response = await axios.post("/api/users/signup", user);
      console.log(response);
      setLoading(true)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };
  useEffect(()=>{
    if(user.username.length>0 || user.email.length>0 || user.password.length>0){
      setLoading(false)
    }else{
      setLoading(true)
    }
  },[user])
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
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button className="btn" onClick={HandleSignupBtn}>
          Sign Up
        </button>
        <p>
          Already have account ? <Link href={"/login"}>login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
