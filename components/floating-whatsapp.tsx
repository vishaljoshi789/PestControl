"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "919876543210";

  const defaultMessage = "Hi! I need help with pest control services.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-slide-up">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-gray-900">Chat on WhatsApp</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Chat with us on WhatsApp for instant assistance!
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
            size="sm"
          >
            <Image
              src={"/whatsapp.png"}
              width={20}
              height={20}
              alt="wp-image"
              className="mr-2"
            />
            Start Chat
          </Button>
        </div>
      )}

      <div className="relative">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
          size="icon"
        >
          <Image
            src={"/whatsapp.png"}
            width={60}
            height={60}
            alt="wp-image"
            className=""
          />
        </Button>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
}
