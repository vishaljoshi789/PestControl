import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WelcomeSection = () => {
  return (
    <div className="about-pest flex flex-col lg:flex-row justify-center items-center gap-5" id='welcome'>
            <div className="image grid w-fit">
              <div className="w-36 h-36 bg-[#FF8400] absolute -z-10 -translate-x-2 -translate-y-2"></div>
              <Image 
                src="/media/pest-1.jpg"
                width={500}
                height={500}
                alt="North Wala"
              />
              <div className="w-36 h-36 bg-[#FF8400] absolute -z-10 place-items-end self-end justify-self-end translate-x-2 translate-y-2"></div>

            </div>
            <div className="text flex flex-col py-10 gap-3 items-center lg:w-1/2 lg:gap-10">
              <span className="text-xl font-bold text-center lg:text-2xl">Welcome to North Wala Pest Control</span>
              <span className="text-gray-500 text-justify text-sm">Welcome to North Wala Pest Control, where excellence meets expertise in safeguarding your space. Our proven team of seasoned professionals utilizes cutting-edge technology to provide comprehensive and environmentally conscious pest control solutions. From tailored services to eco-friendly methods, we prioritize your satisfaction and ensure a prompt response to your concerns. At North Wala, we are committed to creating a pest-free environment, offering a range of services that guarantee effective eradication. Experience peace of mind with North Wala Pest Control—your reliable partner in pest management.</span>
              <Link href="/contact" className="bg-[#FF8400] text-white w-fit p-3 rounded-md font-bold">Contact Us</Link>
            </div>
          </div>
  )
}

export default WelcomeSection