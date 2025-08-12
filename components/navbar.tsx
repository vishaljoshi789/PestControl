"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield, Sparkles } from "lucide-react";
import WhatsAppButton from "./whatsapp-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/northwala-logo.png"
                alt="Northwala Logo"
                width={100}
                height={100}
                className="rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-poppins font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Northwala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group animate-slide-down"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <WhatsAppButton className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-in">
              {t("nav.getQuote")}
            </WhatsAppButton>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <WhatsAppButton
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Menu className="h-6 w-6" />
              </WhatsAppButton>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-gradient-to-br from-white to-orange-50"
            >
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors animate-slide-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <WhatsAppButton className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white mt-4 animate-scale-in">
                  {t("nav.getQuote")}
                </WhatsAppButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
