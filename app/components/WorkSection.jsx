import Image from 'next/image'
import React from 'react'

const WorkSection = () => {
  return (
    <div className='flex items-center justify-center'>
        
        <div className="bg-gradient-to-r from-[rgb(0,27,83,1)] to-[rgb(0,27,83,0.9)]">
        <Image 
            src="/media/pest-10.jpg"
            width={500}
            height={500}
            className='opacity-10'
        />
        </div>
        
        
    </div>
  )
}

export default WorkSection