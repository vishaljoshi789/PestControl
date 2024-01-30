import React from 'react'
import Image from 'next/image'
import { Hamburger } from './Hamburger'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center lg:px-32 md:py-10 bg-transparent p-5 z-10 relative'>
        <div className="left-nav bg-white rounded-lg">
            <Image 
                src="/media/brandlogo.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-16 h-10 md:w-24 md:h-16'
                alt='North Wala Logo'
            />
        </div>
        <Hamburger />
        <div className="nav-right lg:gap-10 lg:flex hidden">
            <span className='p-3 text-xl text-white'>Home</span>
            <span className='p-3 text-xl text-white'>About</span>
            <span className='p-3 text-xl text-white'>Services</span>
            <a href='tel:9193760869' className='bg-[#FF8400] text-white p-3 rounded-md text-xl'>9193760869</a>
        </div>
    </div>
  )
}

export default Navbar