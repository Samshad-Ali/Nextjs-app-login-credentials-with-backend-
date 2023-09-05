"use client"

import Link from "next/link";
import "../styles/login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function page() {
  const [user,setUser] = useState({
    email:'',
    password:''
  })
  const [loading,setLoading]=useState(false);
  const [noLogin,setNologin] = useState(false);

  const router = useRouter()
  const handleLoginBtn=async()=>{
    try {
      setLoading(true);
      setNologin(true)
      const response = await axios.post('/api/auth/login',user)
      router.push('/')
      console.log(response);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
      setNologin(false)
    }
  }

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 ){
      setNologin(false);
    }else{
      setNologin(true)
    }
  },[user])

  return (
    <div className="login">
      <h2>{loading ? "loading...":"Login"}</h2>
      <div className="form flex flex-col gap-4">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"
          value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"
          value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}
          />
        </div>
        <button onClick={handleLoginBtn} className="btn">{noLogin?"No Login":"Login"}</button>
        <p>Didn't have account ? <Link href={'/signup'}>Signup</Link> </p>
      </div>
    </div>
  );
}
