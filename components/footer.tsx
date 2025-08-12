import Link from "next/link";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/northwala-logo.png"
                alt="Northwala Logo"
                className="rounded-full"
                width={100}
                height={100}
              />
              <span className="font-poppins font-bold text-2xl">Northwala</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Northwala is a leading technology company dedicated to innovation
              and excellence.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1BLZ6pzo85/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/northwala.in?igsh=a3Ric2ZnYjEzaDk3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+91 9193760869</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300">
                  Northwala.hld123@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-10 w-10 text-primary" />
                <span className="text-gray-300">
                  Shakti Nagar laldanth road, haldwani, Nainital ,Uttarakhand,
                  263139
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Northwala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
