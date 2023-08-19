'use client'

import React from 'react'
import Link from 'next/link'
import '../styles/signup.css'
const page = () => {
  
    return (
      <div className="signup">
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button>Sign Up</button>
          <p>Already have account ? <Link href={'login'}>login</Link> </p>
        </form>
      </div>
    );
  
}

export default page