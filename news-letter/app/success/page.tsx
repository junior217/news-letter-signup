import Link from "next/link"
import { Signupimages, signups, emaillist} from "../data"
import Success from "./SuccessPage"
import Image from "next/image"


export default function SuccessPage(){
    return (
        <>
            <Success images={signups} emails={emaillist}/>
        </>
    )
}