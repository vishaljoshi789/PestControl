import React from 'react'

const Hero = () => {
  return (
    <div className="hero-image md:h-[80vh] h-[60vh] bg-[url('/media/mob-hero.jpg')]  md:bg-[url('/media/hero-image.jpg')] bg-cover bg-no-repeat flex items-end md:items-center">
        <div className="hero-text flex flex-col text-white font-single-day text-2xl font-bold w-full text-center md:text-left bg-[#FF8400] md:bg-transparent md:p-36 lg:text-5xl">
          <span>YOUR ULTIMATE</span>
          <span className="text-[#FF8400] bg-white md:bg-transparent">PEST CONTROL SOLUTION</span>
          <span>STARTS HERE</span>
        </div>
      </div>
  )
}

export default Hero