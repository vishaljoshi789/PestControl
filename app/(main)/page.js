import Image from "next/image";
import Galary from "../components/Galary";
import Hero from "../components/Hero";
import ServicesCards from "../components/ServicesCards";
import WelcomeSection from "../components/WelcomeSection";
import WorkSection from "../components/WorkSection";
export default function Home() {
  return (
    <main className="-z-10 font-nunito overflow-hidden">
      <Hero />
      <div>
        <div className="flex flex-col items-center justify-evenly px-14 pt-14">
          <div className="flex flex-col text-center gap-5">
            <span className="text-3xl font-bold text-gray-950">What We Do For Customers</span>
            <span className="text-gray-500">We provide comprehensive pest control services, ensuring a pest-free environment for our customers. Our skilled technicians employ effective strategies, eco-friendly solutions, and ongoing support to safeguard homes and businesses from unwanted pests.</span>
          </div>
          <ServicesCards />
          <WelcomeSection />
          <Galary />
          <WorkSection />
        </div>
      </div>
    </main>
  );
}
