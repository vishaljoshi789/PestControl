import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (

    <div className='bg-[#ff8400] p-5 text-white'>
      <div>
        <div className="social">
          <div className="logo">
            <Image
              src="/media/brandlogo.png"
              width={120}
              height={100}
            />
          </div>
          <div className="logo-links">
            <Image
              src="/media/whatsapp.png"
              width={50}
              height={50}
            />
            <Image
              src="/media/facebook.png"
              width={50}
              height={50}
            />
            <Image
              src="/media/twitter.png"
              width={50}
              height={50}
            />
            <Image
              src="/media/instagram.png"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="quick-links">
        <span>Quick Links</span>
        <span>About</span>
        <span>Services</span>
        <span>Galary</span>
        <span>Slogan</span>
        <span>Back to Top</span>
      </div>
      <div className="services-links">
        <span>Services</span>
        <span>Anti Termite Treatment</span>
        <span>General Pest Control</span>
        <span>Fumigation Service</span>
      </div>
      <div className="contact-info">
        <span>Contact Info</span>
        <div className="call">
          <Image 
            src="/media/call.png"
            height={50}
            width={50}
          />
          <span>Phone no</span>
        </div>
        <div className="email">
          <Image 
            src="/media/email.png"
            height={50}
            width={50}
          />
          <span>Email</span>
        </div>
      </div>
    </div>
  )
}

export default Footer