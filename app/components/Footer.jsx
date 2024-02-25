import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (

    <div className='bg-[#ff8400] p-5 text-white md:flex md:items-center md:justify-between'>
      <div className=' flex items-center justify-center flex-col gap-5'>
        <div className="logo">
          <Link href="/">
            <Image
              src="/media/brandlogo.png"
              width={0}
              height={0}
              sizes='100vw'
              className='w-20 h-12'
            />
          </Link>
            
        </div>
            
        <div className="social flex items-center justify-center gap-3">
            <Link href="https://wa.me/+919193760869">
              <Image
                src="/media/whatsapp.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-8 h-8'
              />
            </Link>
            <Link href="https://youtube.com/@northwalapestmanagementser6654?si=lD6N2kTP2nmixphV">
              <Image
                src="/media/youtube.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-8 h-8'
              />
            </Link>
            <Link href="https://www.instagram.com/northwala.in?igsh=a3Ric2ZnYjEzaDk3">
              <Image
                src="/media/instagram.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-8 h-8'
              />
            </Link>
        </div>
      </div>
      <div className="quick-links flex flex-col items-center my-5">
        <span className='font-bold text-[rgb(0,27,83,0.9)] text-xl'>Quick Links</span>
        <Link href="/#welcome" className='underline'>About</Link>
        <Link href="/#service" className='underline'>Services</Link>
        <Link href="/#galary" className='underline'>Gallery</Link>
        <Link href="/#slogan" className='underline'>Slogan</Link>
        <Link href="/" className='underline'>Back to Top</Link>
      </div>
      <Link href="/#service" className="services-links flex flex-col items-center my-5">
        <span className='font-bold text-[rgb(0,27,83,0.9)] text-xl'>Services</span>
        <span className='underline'>Anti Termite Treatment</span>
        <span className='underline'>General Pest Control</span>
        <span className='underline'>Fumigation Service</span>
      </Link>
      <div className="contact-info flex flex-col items-center my-5 gap-2">
        <span className='font-bold text-[rgb(0,27,83,0.9)] text-xl'>Contact Info</span>
        <div className="flex gap-5">
          <Link href="tel:9193760869" className="call flex flex-col items-center gap-1">
            <Image 
              src="/media/call.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-5 h-5'
            />
            <span>Phone no</span>
          </Link>
          <Link href="mailto:northwala.hld123@gmail.com" className="email flex flex-col items-center gap-1">
            <Image 
              src="/media/email.png"
                width={0}
                height={0}
                sizes='100vw'
                className='w-5 h-5'
            />
            <span>Email</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer