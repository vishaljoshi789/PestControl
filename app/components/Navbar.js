import React from 'react'
import Image from 'next/image'
import { Hamburger } from './Hamburger'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center lg:px-32 md:py-10 bg-transparent p-5 z-10 md:absolute w-full'>
        <div className="left-nav bg-white rounded-lg">
          <Link href="/"> 
            <Image 
                src="/media/brandlogo.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-16 h-10 md:w-24 md:h-16'
                alt='North Wala Logo'
            />
          </Link>
        </div>
        <Hamburger />
        <div className="nav-right lg:gap-10 lg:flex hidden lg:items-center">
        
        <Link href="/"><span className='p-3 text-xl text-white'>Home</span> </Link>
        <Link href="/about"><span className='p-3 text-xl text-white'>About</span></Link> 
        <Link href="/service"><span className='p-3 text-xl text-white'>Services</span></Link> 
        <Link href="tel:9193760869" className='bg-[#FF8400] text-white p-3 rounded-md text-xl flex gap-3 items-center justify-center'><Image src="/media/call2.png" height={20} width={20}/><span >9193760869</span></Link> 
        </div>
    </div>
  )
}

export default Navbar