"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const Galary = () => {
  return (
    <div className="bg-[#FF8400] flex justify-center lg:p-10 p-3 lg:m-5 my-10 lg:my-20 rounded-md flex-col items-center gap-2 lg:gap-5">
            <span className="text-white font-bold lg:text-3xl text-center">Our Gallery</span>
            <Carousel className="rounded-xl w-full md:w-1/2">
            <Image 
                src="/media/pest-2.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />
              <Image 
                src="/media/pest-3.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />
              <Image 
                src="/media/pest-4.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />
              <Image 
                src="/media/pest-5.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />
              <Image 
                src="/media/pest-6.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />
              <Image 
                src="/media/pest-7.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />
              <Image 
                src="/media/pest-8.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />
              <Image 
                src="/media/pest-9.png"
                width={0}
                height={0}
                alt="North Wala"
                sizes="100vw"
                className="w-full"
              />

    </Carousel>
          </div>
    
  )
}

export default Galary