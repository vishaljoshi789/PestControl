import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (

    <div className='bg-[#ff8400] p-5 text-white md:flex md:items-center md:justify-between'>
      <div className=' flex items-center justify-center flex-col gap-5'>
        <div className="logo">
            <Image
              src="/media/brandlogo.png"
              width={0}
              height={0}
              sizes='100vw'
              className='w-20 h-12'
            />
        </div>
            
        <div className="social flex items-center justify-center gap-3">
            
            <Image
              src="/media/whatsapp.png"
              width={0}
              height={0}
              sizes='100vw'
              className='w-8 h-8'
            />
            <Image
              src="/media/facebook.png"
              width={0}
              height={0}
              sizes='100vw'
              className='w-8 h-8'
            />
            <Image
              src="/media/twitter.png"
              width={0}
              height={0}
              sizes='100vw'
              className='w-8 h-8'
            />
            <Image
              src="/media/instagram.png"
              width={0}
              height={0}
              sizes='100vw'
              className='w-8 h-8'
            />
        </div>
      </div>
      <div className="quick-links flex flex-col items-center my-5">
        <span className='font-bold text-[rgb(0,27,83,0.9)] text-xl'>Quick Links</span>
        <span className='underline'>About</span>
        <span className='underline'>Services</span>
        <span className='underline'>Galary</span>
        <span className='underline'>Slogan</span>
        <span className='underline'>Back to Top</span>
      </div>
      <div className="services-links flex flex-col items-center my-5">
        <span className='font-bold text-[rgb(0,27,83,0.9)] text-xl'>Services</span>
        <span className='underline'>Anti Termite Treatment</span>
        <span className='underline'>General Pest Control</span>
        <span className='underline'>Fumigation Service</span>
      </div>
      <div className="contact-info flex flex-col items-center my-5 gap-2">
        <span className='font-bold text-[rgb(0,27,83,0.9)] text-xl'>Contact Info</span>
        <div className="flex gap-5">
          <div className="call flex flex-col items-center gap-1">
            <Image 
              src="/media/call.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-5 h-5'
            />
            <span>Phone no</span>
          </div>
          <div className="email flex flex-col items-center gap-1">
            <Image 
              src="/media/email.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-5 h-5'
            />
            <span>Email</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer