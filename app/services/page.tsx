"use client";

import Image from "next/image";
import {
  Shield,
  Bug,
  Zap,
  CheckCircle,
  Sparkles,
  Users,
  Building,
  Home,
  Key,
  Leaf,
  MousePointer,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function ServicesPage() {
  const services = [
    {
      title: "Commercial Pest Control",
      icon: "🏢",
      description:
        "Professional pest management for offices, restaurants, hotels, and commercial establishments.",
      features: [
        "Office pest control",
        "Restaurant pest management",
        "Hotel pest solutions",
        "Retail store treatments",
        "Warehouse pest control",
        "Factory fumigation services",
      ],
      image: "/commercial-office-pest-control.png",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Residential Pest Control",
      icon: "🏠",
      description:
        "Complete home pest protection for families with safe, child-friendly treatments.",
      features: [
        "Home pest inspection",
        "Child-safe treatments",
        "Pet-friendly solutions",
        "Kitchen pest control",
        "Bathroom pest treatment",
        "Garden pest management",
      ],
      image: "/resedential.webp",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Rental Units Pest Control",
      icon: "🪳",
      description:
        "Specialized pest control services for rental properties and apartment complexes.",
      features: [
        "Apartment complex treatments",
        "Rental property maintenance",
        "Tenant-safe solutions",
        "Property manager packages",
        "Multi-unit discounts",
        "Regular maintenance schedules",
      ],
      image: "/apartment-rental-pest-control.png",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Bed Bug Exterminator",
      icon: "🐛",
      description:
        "Complete bed bug elimination using advanced heat treatment and chemical methods.",
      features: [
        "Heat treatment methods",
        "Chemical bed bug control",
        "Mattress and furniture treatment",
        "Follow-up inspections",
        "Prevention strategies",
        "Complete elimination guarantee",
      ],
      image: "/bed-bug-extermination-service.png",
      gradient: "from-red-400 to-orange-500",
    },
    {
      title: "Wildlife Removal Service",
      icon: "🦝",
      description:
        "Safe and humane removal of wildlife from residential and commercial properties.",
      features: [
        "Bird control and removal",
        "Snake removal services",
        "Monkey deterrent systems",
        "Bat exclusion services",
        "Humane wildlife relocation",
        "Property damage prevention",
      ],
      image: "/wildlife-animal-removal.png",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Termite Control Services",
      icon: "🐜",
      description:
        "Advanced termite protection using eco-friendly solutions and cutting-edge technology.",
      features: [
        "Pre-construction treatment",
        "Post-construction treatment",
        "Soil barrier protection",
        "Wood treatment solutions",
        "Baiting systems",
        "Annual maintenance contracts",
      ],
      image: "/termite-control-treatment.png",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Rodent Control Services",
      icon: "🐭",
      description:
        "Comprehensive rat and mice control with prevention and elimination strategies.",
      features: [
        "Rat control programs",
        "Mouse elimination",
        "Entry point sealing",
        "Bait station installation",
        "Sanitation recommendations",
        "Ongoing monitoring",
      ],
      image: "/rodent-rat-mouse-control.png",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Mosquito Control Service",
      icon: "🦟",
      description:
        "Effective mosquito control to protect your family from diseases and discomfort.",
      features: [
        "Breeding site elimination",
        "Larvicide treatments",
        "Adult mosquito control",
        "Fogging services",
        "Water feature treatment",
        "Seasonal protection plans",
      ],
      image: "/mosquito-control-fogging.png",
      gradient: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated animate-gradient opacity-10"></div>
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6 animate-bounce-in">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-base sm:text-lg">
              Professional Services
            </span>
          </div>
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900 mb-6 animate-slide-up">
            Expert{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pest Control
            </span>{" "}
            Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Comprehensive pest control solutions using latest technology and
            eco-friendly methods, tailored specifically for Indian homes and
            businesses
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-16 sm:mb-20 ${
                index !== services.length - 1
                  ? "border-b border-gray-200 pb-16 sm:pb-20"
                  : ""
              }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`animate-slide-up ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-br ${service.gradient} p-3 rounded-full shadow-lg mr-4 text-2xl flex items-center justify-center w-16 h-16`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center group"
                      >
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-3 flex-shrink-0 group-hover:text-accent transition-colors duration-300" />
                        <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <WhatsAppButton
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift w-full sm:w-auto"
                    message={`Hi! I'm interested in ${service.title}. Can you provide more details and pricing?`}
                  >
                    Get Quote for {service.title}
                  </WhatsAppButton>
                </div>
                <div
                  className={`animate-fade-in ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  } mt-8 lg:mt-0`}
                >
                  <div className="relative group max-w-md mx-auto lg:max-w-none">
                    <div
                      className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} - Professional pest control service`}
                      width={600}
                      height={400}
                      className="relative rounded-lg shadow-xl hover-lift w-full h-auto object-cover"
                      priority={index < 3}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3" />
              <span className="text-primary font-semibold text-base sm:text-lg">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Why Choose Northwala?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We're committed to providing the best pest control services in
              India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Licensed & Certified",
                description:
                  "Fully licensed Indian professionals with comprehensive insurance coverage",
                gradient: "from-blue-400 to-purple-500",
                icon: "🏆",
              },
              {
                title: "Eco-Friendly Solutions",
                description:
                  "Safe, environmentally responsible methods suitable for Indian families",
                gradient: "from-green-400 to-blue-500",
                icon: "🌱",
              },
              {
                title: "24/7 Emergency Service",
                description:
                  "Round-the-clock availability for urgent pest problems across India",
                gradient: "from-orange-400 to-red-500",
                icon: "🚨",
              },
              {
                title: "100% Satisfaction",
                description:
                  "Complete satisfaction guarantee on all our services with free follow-ups",
                gradient: "from-purple-400 to-pink-500",
                icon: "✅",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center animate-scale-in border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-poppins font-semibold text-lg sm:text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
