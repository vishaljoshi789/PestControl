import Image from 'next/image'
import React from 'react'

const WorkSection = () => {
  return (
    <div className='flex items-center justify-center'>
        
        <div className="w-[100vw] flex justify-center items-center bg-[rgb(0,27,83,1)]">
          <div className="p-10 text absolute bg-transparent text-white flex flex-col justify-center gap-5 md:text-2xl">
              <span className='font-bold text-[#FF8400] text-2xl underline italic text-center md:text-4xl'>Our Slogan</span>
              <span>- We use safe and environmentally friendly measures.
</span>
              <span>- We make your home pest free.</span>
          </div>
        <Image 
            src="/media/pest-10.jpg"
            width={0}
            height={0}
            sizes='100vw'
            className='opacity-5 w-full'
        />
        </div>
        
        
    </div>
  )
}

export default WorkSection