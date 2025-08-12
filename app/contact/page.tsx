"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "@/components/whatsapp-button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const locations = [
    {
      name: "North Wala Pest Control Service  ",
      address:
        "New Stella Building, Suyog Nagar, Vasai west Maharashtra 401202 ",
      phone: "+91 7387359152",
      email: "northwala123vasai@gmail.com",
      whatsapp: "9193760869",
      mapUrl:
        "https://maps.google.com/maps?q=19.372206671831734,72.81975320120561&t=&z=15&ie=UTF8&iwloc=&output=embed",
      businessHours: ["8:00 AM - 6:00 PM"],
    },
    {
      name: "North Wala Pest Control Service  ",
      address:
        "Amardeep CHS, near Terapant bhavan, opposite laxmi kutir virar west, Mumbai,Maharashtra 401303",
      phone: "+91 9172933588",
      email: "northwala.mh@gmail.com",
      whatsapp: "9193760869",
      mapUrl:
        "https://maps.google.com/maps?q=19.456262266344726,72.80758824483205&t=&z=15&ie=UTF8&iwloc=&output=embed",
      businessHours: ["7:00 AM - 7:00 PM"],
    },
    {
      name: "North Wala Pest Control Service  ",
      address:
        "Shakti Nagar laldanth road ,haldwani, Nainital, Uttarakhand, 263139",
      phone: "+91 9193760869",
      email: "northwala.hld123@gmail.com",
      whatsapp: "9193760869",
      mapUrl:
        "https://maps.google.com/maps?q=29.229540933917495,79.517225200103&t=&z=15&ie=UTF8&iwloc=&output=embed",
      businessHours: ["8:30 AM - 5:30 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl text-gray-900 mb-6 animate-slide-up">
            Our Locations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Visit any of our convenient locations or contact us for service at
            your location
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
              Find Us Near You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have multiple locations to serve you better. Each location
              offers the same high-quality pest control services.
            </p>
          </div>

          <div className="space-y-16">
            {locations.map((location, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Location Info */}
                      <div className="p-8 lg:p-12">
                        <div className="mb-8">
                          <h3 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                            {location.name}
                          </h3>
                          <div className="w-16 h-1 bg-primary mb-6"></div>
                        </div>

                        <div className="space-y-6">
                          {/* Address */}
                          <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full">
                              <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                                Address
                              </h4>
                              <p className="text-gray-700">
                                {location.address}
                              </p>
                            </div>
                          </div>

                          {/* Phone */}
                          <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full">
                              <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                                Phone
                              </h4>
                              <a
                                href={`tel:${location.phone}`}
                                className="text-primary font-medium"
                              >
                                {location.phone}
                              </a>
                            </div>
                          </div>

                          {/* Email */}
                          <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full">
                              <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                                Email
                              </h4>
                              <a
                                href={`mailto:${location.email}`}
                                className="text-primary font-medium"
                              >
                                {location.email}
                              </a>
                            </div>
                          </div>

                          {/* Business Hours */}
                          <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full">
                              <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                                Business Hours
                              </h4>
                              {location.businessHours.map(
                                (hours, hourIndex) => (
                                  <p
                                    key={hourIndex}
                                    className="text-gray-700 text-sm"
                                  >
                                    {hours}
                                  </p>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                          <Button
                            className="bg-primary hover:bg-primary"
                            onClick={() => window.open(`tel:${location.phone}`)}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </Button>
                          <WhatsAppButton
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            WhatsApp
                          </WhatsAppButton>
                        </div>
                      </div>

                      {/* Map */}
                      <div className="bg-gradient-to-br from-white to-blue-100 min-h-[400px] flex items-center justify-center relative">
                        <iframe
                          height={400}
                          width={400}
                          className="w-full h-full border-0"
                          src={location.mapUrl}
                        ></iframe>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <Card className="bg-red-50 border-red-200 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <Phone className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="font-poppins font-bold text-3xl text-red-800 mb-4">
                  24/7 Emergency Service
                </h3>
                <p className="text-red-700 mb-8 text-lg">
                  Pest emergency? Don't wait! Contact any of our locations for
                  immediate assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {locations.map((location, index) => (
                    <Button
                      key={index}
                      variant="destructive"
                      size="lg"
                      className="text-sm px-6"
                      onClick={() => window.open(`tel:${location.phone}`)}
                    >
                      {location.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
