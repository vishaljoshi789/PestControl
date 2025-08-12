"use client"

import React, { createContext, useContext, useState } from 'react'

type Language = 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.getQuote': 'WhatsApp Us',
    
    // Hero Section
    'hero.subtitle': "India's Trusted Pest Control",
    'hero.title': 'Professional',
    'hero.titleHighlight': 'Pest Control',
    'hero.titleEnd': 'Services',
    'hero.description': 'Protect your home and business with our comprehensive pest control solutions. Safe, effective, and environmentally friendly treatments by certified Indian professionals.',
    'hero.getQuote': 'WhatsApp Now',
    'hero.ourServices': 'Our Services',
    'hero.callNow': 'Call Now: +91 98765 43210',
    
    // Stats Section
    'stats.families': 'Happy Indian Families',
    'stats.experience': 'Years Experience',
    'stats.satisfaction': 'Satisfaction Rate',
    
    // Services Section
    'services.expertise': 'Our Expertise',
    'services.title': 'Premium Services',
    'services.subtitle': 'Comprehensive pest control solutions tailored for Indian homes and businesses',
    'services.viewAll': 'View All Services',
    
    // All Services
    'services.commercial.title': 'Commercial Pest Control',
    'services.commercial.description': 'Professional pest management for offices, restaurants, hotels, and commercial establishments.',
    'services.residential.title': 'Residential Pest Control',
    'services.residential.description': 'Complete home pest protection for families with safe, child-friendly treatments.',
    'services.rental.title': 'Rental Units Pest Control',
    'services.rental.description': 'Specialized pest control services for rental properties and apartment complexes.',
    'services.bedBug.title': 'Bed Bug Exterminator',
    'services.bedBug.description': 'Complete bed bug elimination using advanced heat treatment and chemical methods.',
    'services.wildlife.title': 'Wildlife Removal Service',
    'services.wildlife.description': 'Safe and humane removal of wildlife from residential and commercial properties.',
    'services.termite.title': 'Termite Control Services',
    'services.termite.description': 'Advanced termite protection using eco-friendly solutions and cutting-edge technology.',
    'services.rodent.title': 'Rodent Control Services',
    'services.rodent.description': 'Comprehensive rat and mice control with prevention and elimination strategies.',
    'services.mosquito.title': 'Mosquito Control Service',
    'services.mosquito.description': 'Effective mosquito control to protect your family from diseases and discomfort.',
    'services.antiTermite.title': 'Anti Termite Treatment',
    'services.antiTermite.description': 'Advanced termite protection using eco-friendly solutions and cutting-edge technology for complete peace of mind.',
    'services.generalPest.title': 'General Pest Control',
    'services.generalPest.description': 'Comprehensive pest management solutions for homes and businesses with 100% satisfaction guarantee.',
    'services.fumigation.title': 'Fumigation Service',
    'services.fumigation.description': 'Professional fumigation services using safe, effective methods for severe infestations and large areas.',
    'services.learnMore': 'Learn More',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Trusted by thousands of Indian families and businesses',
    'testimonials.priya.content': "Northwala's team was incredibly professional. They solved our termite problem completely and the service was outstanding!",
    'testimonials.priya.role': 'Homeowner, Mumbai',
    'testimonials.rajesh.content': "Excellent service! They've kept our restaurant pest-free for 3 years. Highly recommend their commercial pest control.",
    'testimonials.rajesh.role': 'Restaurant Owner, Delhi',
    'testimonials.anita.content': 'Reliable, thorough, and professional. They handle all our properties with great care and attention to detail.',
    'testimonials.anita.role': 'Property Manager, Bangalore',
    
    // Gallery
    'gallery.title': 'Our Work Gallery',
    'gallery.subtitle': 'See our professional Indian pest control team in action',
    
    // CTA Section
    'cta.title': 'Ready to Get Rid of Pests?',
    'cta.description': 'Contact our certified Indian pest control experts today for a free consultation and customized treatment plan',
    
    // Footer
    'footer.description': 'Professional pest control services with over 10 years of experience. We provide safe, effective, and eco-friendly solutions for all your pest problems.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': '© 2024 Northwala Pest Control. All rights reserved.',
    
    // Services Page
    'servicesPage.title': 'Our',
    'servicesPage.titleHighlight': 'Expert',
    'servicesPage.titleEnd': 'Services',
    'servicesPage.subtitle': 'Comprehensive pest control solutions using latest technology and eco-friendly methods, tailored specifically for Indian homes and businesses',
    'servicesPage.getQuoteService': 'WhatsApp for This Service',
    'servicesPage.whyChoose': 'Why Choose Us',
    'servicesPage.whyChooseTitle': 'Why Choose Northwala?',
    'servicesPage.whyChooseSubtitle': "We're committed to providing the best pest control services in India",
    
    // About Page
    'about.title': 'About Northwala',
    'about.subtitle': 'With over a decade of experience in pest control, we\'ve built our reputation on delivering safe, effective, and environmentally responsible solutions.',
    'about.story': 'Our Story',
    'about.values': 'Our Values',
    'about.valuesSubtitle': 'The principles that guide everything we do',
    'about.team': 'Meet Our Team',
    'about.teamSubtitle': 'Experienced professionals dedicated to solving your pest problems',
    'about.mission': 'Our Mission',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our pest control experts. We\'re here to help solve your pest problems quickly and effectively.',
    'contact.getQuote': 'WhatsApp Chat',
    'contact.formSubtitle': 'Fill out the form below and we\'ll get back to you within 24 hours',
    'contact.fullName': 'Full Name',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.service': 'Service Needed',
    'contact.message': 'Message',
    'contact.sendMessage': 'Send Message',
    'contact.getInTouch': 'Get In Touch',
    'contact.emergency': 'Emergency Pest Control',
    'contact.emergencyDesc': 'Dealing with a severe infestation? We offer 24/7 emergency services for urgent situations.',
    'contact.emergencyCall': 'Call Emergency Line: (555) 911-PEST',

    // WhatsApp
    'whatsapp.message': 'Hi! I need help with pest control services. Can you provide more information?',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
