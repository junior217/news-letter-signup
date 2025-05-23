'use client'

import Image from "next/image"
import { Signupimages, IconList, EmailList} from "./data"
import { useRouter } from "next/navigation"
import { useEffect, useState  } from "react"
import { stringify } from "querystring"



export default function SignUpPage({
  signupImages,
  iconList, emailList = [],
}: {
  signupImages: Signupimages[]
  iconList: IconList[]
  emailList: EmailList[] 
}) {
  


  const [email, setEmail] = useState('')
  const router = useRouter();

  const signUp = (e) => {
    e.preventDefault();
    if(email){
      //api logic goes here
      console.log(typeof email)
      router.push('/success')
    }
  

    if(email === ''){
      router.push('/error')
    }
  }
  
//   const addToMail = () => {
     
//       emailList.forEach((mail, i) => {
      
//       if(emailList !== undefined){
        
//         const newMailId = parseInt(mail.id) + 1;
//         console.log(typeof newMailId);
        

//       }
      
//     });
//   }

//  addToMail()
  return (
     
    <div className="bg-[#2B2D42] min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left Content */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Stay updated!</h1>
          <p className="text-gray-600 mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="space-y-4 mb-6">
            {iconList.map((icons, index) => (
              <li key={index} className="flex items-start space-x-1">
                <Image
                  src={'/' + icons.iconUrl}
                  alt="check icon"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                <span  className="text-gray-700 text-sm">{icons.text}</span>
              </li>
            ))}
          </ul>

          <form className="flex flex-col space-y-3" onSubmit={signUp}>
            <input
              type="email"
              placeholder="email@company.com"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              
            />
            <button className="relative text-white text-sm font-semibold py-2 px-4 rounded-md bg-[#2B2D42] transition-all duration-300 overflow-hidden group">
  <span className="relative z-10">Subscribe to monthly newsletter</span>
  <div className="absolute inset-0 bg-gradient-to-r from-[#f857a6] to-[#ff5858] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
</button>
          </form>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative min-h-[300px]">
          {signupImages.map((image, index) => (
            <Image
              key={index}
              src={`/${image.desktopUrl}`}
              alt="Desktop Illustration"
              fill
              className="object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
