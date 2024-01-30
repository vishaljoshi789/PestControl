import Image from "next/image";

export default function Home() {
  return (
    <main className="md:-translate-y-36 -z-10 font-nunito">
      <div className="hero-image h-[70vh] md:h-[80vh] lg:h-[100vh] bg-[url('/media/mob-hero.jpg')]  md:bg-[url('/media/hero-image.jpg')] bg-contain md:bg-cover bg-no-repeat flex items-end md:items-center">
        <div className="hero-text flex flex-col text-white font-single-day text-2xl font-bold w-full text-center md:text-left bg-[#FF8400] md:bg-transparent md:p-36 lg:text-5xl">
          <span>YOUR ULTIMATE</span>
          <span className="text-[#FF8400] bg-white md:bg-transparent">PEST CONTROL SOLUTION</span>
          <span>STARTS HERE</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-evenly p-14">
          <div className="flex flex-col text-center gap-5">
            <span className="text-3xl font-bold text-gray-950">What We Do For Customers</span>
            <span className="text-gray-500">We provide comprehensive pest control services, ensuring a pest-free environment for our customers. Our skilled technicians employ effective strategies, eco-friendly solutions, and ongoing support to safeguard homes and businesses from unwanted pests.</span>
          </div>
          <div className="cards flex gap-10 justify-evenly py-10 flex-wrap">
            <div className="card flex flex-col w-64 items-center gap-5 p-5 shadow-xl rounded-lg text-center">
              <Image 
                src="/media/termite.png"
                width={100}
                height={100}
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
              />
              <span className="font-bold">Fumigation Service</span>
              <span className="text-gray-500">
Fumigation treatment uses gas to eradicate pests in enclosed spaces, ensuring comprehensive pest elimination and prevention.</span>
              <span className="text-[#FF8400] font-bold">Learn More...</span>
            </div>
          </div>
          <div className="about-pest">
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
            <div className="text flex flex-col py-10 gap-3 items-center">
              <span className="text-xl font-bold text-center">Welcome to North Wala Pest Control</span>
              <span className="text-gray-500 text-justify text-sm">Welcome to North Wala Pest Control, where excellence meets expertise in safeguarding your space. Our proven team of seasoned professionals utilizes cutting-edge technology to provide comprehensive and environmentally conscious pest control solutions. From tailored services to eco-friendly methods, we prioritize your satisfaction and ensure a prompt response to your concerns. At North Wala, we are committed to creating a pest-free environment, offering a range of services that guarantee effective eradication. Experience peace of mind with North Wala Pest Control—your reliable partner in pest management.</span>
              <span className="bg-[#FF8400] text-white w-fit p-3 rounded-md font-bold">Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
