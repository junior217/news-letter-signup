'use client'


import { Signupimages, EmailList } from "../data"
import Image from "next/image"
import { useRouter } from "next/navigation"


export default function Success({images , emails = []}:{images: Signupimages[], emails : EmailList[]}){
    
    const router = useRouter();

    const dismiss = () => {

        router.push("/")
        
    }
    
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#2C2E47] px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <div className="flex justify-center mb-4">
                {images.map((image, index) => (<Image key={index} src={'/'+image.iconSucc} width={40} height={40} alt="sucess-icon"></Image>))}
                 
            </div>
            
                <h1 className="text-2xl font-bold text-[#1e1f29] mb-2">Thanks for Subscribing</h1>  
              
                {emails.map((mail, idx) => (<p key={idx} className="text-[#4b4e68] text-sm leading-relaxed mb-6">A confirmation email has been sent to <span className="font-bold text-black">{mail.email}.</span> Please open it and click the button inside to confirm your <span className="font-bold">subscription</span></p>))}      
                
                <button onClick={dismiss} className="bg-gradient-to-r from-[#f857a6] to-[#ff5858] hover:from-[#e04691] hover:to-[#e94949] text-white font-semibold py-2 px-6 rounded-md shadow-md transition-colors">
                    Dismiss message
                    </button>
           </div> 
        </div>
    )
}