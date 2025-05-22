'use client';
import Image from "next/image";
import SignUpPage from "./SignUp";
import { signups, iconlist } from "./data";
import { useState, useEffect  } from "react"
import { tree } from "next/dist/build/templates/app-page";


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
    {isClient && <SignUpPage signupImages={signups} iconList={iconlist}/>}
    </>
  );
}
