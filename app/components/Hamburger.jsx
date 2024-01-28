"use client"
import { useState } from "react"

export const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className="lg:hidden">
        <button onClick={handleClick} 
  className="flex flex-col justify-center items-center bg-[#FF8400] p-3 rounded-md">
    <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
    </span>
    <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`} >
    </span>
    <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
    </span>    

  </button>
  
    <div className={`bg-[#FF8400] ${!isOpen && "-left-full"} duration-500 ease-in-out flex flex-col fixed bottom-0 ${isOpen && " left-0"} w-full items-center gap-5 p-5 z-10`}>
        <span className='p-3 text-xl text-[#FF8400] bg-white w-28 text-center rounded-md'>Home</span>
            <span className='p-3 text-xl text-[#FF8400] bg-white w-28 text-center rounded-md'>About</span>
            <span className='p-3 text-xl text-[#FF8400] bg-white w-28 text-center rounded-md'>Services</span>
            <span className='p-3 text-xl text-[#FF8400] bg-white w-28 text-center rounded-md'>Contact</span>
    </div>
  
    </div>
  )
}
