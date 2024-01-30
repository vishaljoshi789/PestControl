import React from 'react'
import Image from 'next/image'

const ServicesCards = () => {
  return (
    <div className="cards flex gap-10 justify-evenly py-10 flex-wrap">
            <div className="card flex flex-col w-64 items-center gap-5 p-5 shadow-xl rounded-lg text-center">
              <Image 
                src="/media/termite.png"
                width={100}
                height={100}
                alt="termite"
              />
              <span className="font-bold">Anti Termite Treatment</span>
              <span className="text-gray-500">Termite treatment involves applying insecticides, barriers, or bait to eliminate and prevent termite infestations effectively.</span>
              <span className="text-[#FF8400] font-bold">Learn More...</span>
            </div>
            <div className="card flex flex-col w-64 items-center gap-5 p-5 shadow-xl rounded-lg text-center">
              <Image 
                src="/media/beetle.png"
                width={100}
                height={100}
                alt="beetle"
              />
              <span className="font-bold">General Pest Control</span>
              <span className="text-gray-500">General pest control includes eliminating and preventing common pests through insecticides, traps, and habitat modification.</span>
              <span className="text-[#FF8400] font-bold">Learn More...</span>
            </div>
            <div className="card flex flex-col w-64 items-center gap-5 p-5 shadow-xl rounded-lg text-center">
              <Image 
                src="/media/fumigator.png"
                width={100}
                height={100}
                alt="fumigator"
              />
              <span className="font-bold">Fumigation Service</span>
              <span className="text-gray-500">
Fumigation treatment uses gas to eradicate pests in enclosed spaces, ensuring comprehensive pest elimination and prevention.</span>
              <span className="text-[#FF8400] font-bold">Learn More...</span>
            </div>
          </div>
  )
}

export default ServicesCards