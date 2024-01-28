import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="hero-image h-[70vh] md:h-[80vh] lg:h-[100vh] bg-[url('/media/mob-hero.jpg')]  md:bg-[url('/media/hero-image.jpg')] bg-contain md:bg-cover bg-no-repeat md:-my-44 flex items-end md:items-center">
        <div className="hero-text flex flex-col text-white font-single-day text-2xl font-bold w-full absolute text-center md:text-left bg-[#FF8400] md:bg-transparent md:p-36 md:text-5xl">
          <span>YOUR ULTIMATE</span>
          <span className="text-[#FF8400] bg-white md:bg-transparent">PEST CONTROL SOLUTION</span>
          <span>STARTS HERE</span>
        </div>
      </div>
    </main>
  );
}
