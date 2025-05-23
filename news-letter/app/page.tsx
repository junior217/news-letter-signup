'use client';

import SignUpPage from "./SignUp";

import { emaillist } from "./data";
import { signups, iconlist } from "./data";
import { useState, useEffect  } from "react"

export const dynamic = 'force-dynamic';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  
  

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
    {isClient && <SignUpPage signupImages={signups} iconList={iconlist} emailList={emaillist}/>}
    </>
  );
}
