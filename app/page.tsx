"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  Star,
  Sparkles,
  Zap,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import Autoplay from "embla-carousel-autoplay";

export default function HomePage() {
  const featuredServices = [
    {
      title: "Commercial Pest Control",
      description:
        "Professional pest management for offices, restaurants, hotels, and commercial establishments.",
      icon: "🏢🐜",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Residential Pest Control",
      description:
        "Complete home pest protection for families with safe, child-friendly treatments.",
      icon: "🏠🕷️",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Termite Control Services",
      description:
        "Advanced termite protection using eco-friendly solutions and cutting-edge technology.",
      icon: "🐜",
      gradient: "from-orange-400 to-red-500",
    },
  ];

  const allServices = [
    {
      title: "Commercial Pest Control",
      description:
        "Professional pest management for offices, restaurants, hotels, and commercial establishments.",
      icon: "🏢🐜",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Residential Pest Control",
      description:
        "Complete home pest protection for families with safe, child-friendly treatments.",
      icon: "🏠🕷️",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Rental Units Pest Control",
      description:
        "Specialized pest control services for rental properties and apartment complexes.",
      icon: "🏠🪳",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Bed Bug Exterminator",
      description:
        "Complete bed bug elimination using advanced heat treatment and chemical methods.",
      icon: "🛏️🐛",
      gradient: "from-red-400 to-orange-500",
    },
    {
      title: "Wildlife Removal Service",
      description:
        "Safe and humane removal of wildlife from residential and commercial properties.",
      icon: "🦝",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Termite Control Services",
      description:
        "Advanced termite protection using eco-friendly solutions and cutting-edge technology.",
      icon: "🐜",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Rodent Control Services",
      description:
        "Comprehensive rat and mice control with prevention and elimination strategies.",
      icon: "🐭",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      title: "Mosquito Control Service",
      description:
        "Effective mosquito control to protect your family from diseases and discomfort.",
      icon: "🦟",
      gradient: "from-cyan-400 to-blue-500",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Homeowner, Mumbai",
      content:
        "Northwala's team was incredibly professional. They solved our termite problem completely and the service was outstanding!",
      rating: 5,
      image: "/user.png",
    },
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner, Mumbai",
      content:
        "Excellent service! They've kept our restaurant pest-free for 3 years. Highly recommend their commercial pest control.",
      rating: 5,
      image: "/user.png",
    },
    {
      name: "Anita Patel",
      role: "Property Manager, Haldwani",
      content:
        "Reliable, thorough, and professional. They handle all our properties with great care and attention to detail.",
      rating: 5,
      image: "/user.png",
    },
  ];

  const galleryImages = [
    "/pest-2.png",
    "/pest-3.png",
    "/pest-4.png",
    "/pest-5.png",
    "/pest-6.png",
    "/pest-7.png",
    "/pest-8.png",
    "/pest-9.png",
    "/indian-pest-control-team.png",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated animate-gradient opacity-10"></div>
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-slide-right text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6 animate-bounce-in">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-2" />
                <span className="text-primary font-semibold text-sm sm:text-base">
                  India's Trusted Pest Control
                </span>
              </div>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Professional{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pest Control
                </span>{" "}
                Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Protect your home and business with our comprehensive pest
                control solutions. Safe, effective, and environmentally friendly
                treatments by certified Indian professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white text-base sm:text-lg px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift w-full sm:w-auto"
                >
                  WhatsApp Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </WhatsAppButton>
                <Link href="/services" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-left mt-8 lg:mt-0">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-20 animate-pulse-slow"></div>
                <Image
                  src="/indian-pest-control-professional.png"
                  alt="Indian Professional Pest Control Team"
                  width={600}
                  height={500}
                  className="relative rounded-lg shadow-2xl hover-lift w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center animate-bounce-in hover-lift">
              <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                10,000+
              </h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                Happy Indian Families
              </p>
            </div>
            <div
              className="text-center animate-bounce-in hover-lift"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2">
                15+
              </h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                Years Experience
              </p>
            </div>
            <div
              className="text-center animate-bounce-in hover-lift"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                100%
              </h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3" />
              <span className="text-primary font-semibold text-base sm:text-lg">
                Our Expertise
              </span>
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Premium Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pest control solutions tailored for Indian homes and
              businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 shadow-lg overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 sm:p-8 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-6xl mb-6 animate-float">
                      {service.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Services Grid */}
          <div className="text-center mb-8">
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
              All Our Services
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {allServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl mb-4">
                      {service.icon}
                    </div>
                    <h4 className="font-poppins font-semibold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Trusted by thousands of Indian families and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-scale-in border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 sm:p-8 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full"></div>
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-3 border-primary/20 mr-4 w-12 h-12 sm:w-15 sm:h-15"
                    />
                    <div>
                      <h4 className="font-poppins font-semibold text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              See our professional Indian pest control team in action
            </p>
          </div>

          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg overflow-hidden hover-lift">
                      <CardContent className="p-0 relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Gallery image ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 hover:bg-white border-primary/20" />
            <CarouselNext className="bg-white/90 hover:bg-white border-primary/20" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated animate-gradient opacity-20"></div>
        <div className="absolute top-10 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-6 animate-slide-up">
            Ready to Get Rid of Pests?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Contact our certified Indian pest control experts today for a free
            consultation and customized treatment plan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Link href="tel:+919193760869" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-6 sm:px-8 bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                Call Now: +91 9193760869
              </Button>
            </Link>
            <WhatsAppButton
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 border-2 border-white text-primary hover:bg-white hover:text-primary transition-all duration-300 hover-lift"
            >
              WhatsApp Now
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
