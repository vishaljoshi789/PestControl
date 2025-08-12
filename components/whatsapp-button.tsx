"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
  message?: string;
}

export default function WhatsAppButton({
  variant = "default",
  size = "default",
  className = "",
  children,
  message,
}: WhatsAppButtonProps) {
  const phoneNumber = "+919193760869"; // WhatsApp number (without + sign)

  const defaultMessage =
    "Hi! I need help with pest control services. Can you provide more information?";

  const whatsappMessage = message || defaultMessage;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} hover:scale-105 transition-transform duration-200`}
      onClick={handleWhatsAppClick}
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      {children || "Get Quote"}
    </Button>
  );
}
