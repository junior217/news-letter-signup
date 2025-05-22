
import { Signupimages, signups, emaillist} from "../data"
import Success from "./SuccessPage"


export const dynamic = 'force-dynamic';

export default function SuccessPage(){
    return (
        <>
            <Success images={signups} emails={emaillist}/>
        </>
    )
}