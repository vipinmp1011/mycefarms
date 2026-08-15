"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/917306307571", "_blank");
  };

  return (
    <footer className="bg-[#0B3D2E] text-white border-t border-[#7CC043]/30 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1F6F45]">
          
          {/* Brand Info & Master Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative w-44 h-14">
              <Image
                src="/logo.png"
                alt="MYCEFARMS Official Master Brand Logo"
                fill
                className="object-contain"
              />
            </div>
            
            <p className="text-[#DDE8C7] text-xs sm:text-sm leading-relaxed">
              {t("footer_desc")}
            </p>

            <p className="text-xs text-[#7CC043] font-semibold">
              Mushroom Farming | Mushroom Spawn | Farm Supplies | High-Tech Farm Setup | Technical Support
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </button>

              {/* Instagram SVG Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1F6F45] text-white flex items-center justify-center hover:bg-[#7CC043] hover:text-[#0B3D2E] transition-colors shadow"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook SVG Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1F6F45] text-white flex items-center justify-center hover:bg-[#7CC043] hover:text-[#0B3D2E] transition-colors shadow"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-[#7CC043]">
              {t("footer_links")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#hero" className="hover:text-[#7CC043] transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-[#7CC043] transition-colors">Products</a></li>
              <li><a href="#farming" className="hover:text-[#7CC043] transition-colors">Mushroom Farming</a></li>
              <li><a href="#farm-setup" className="hover:text-[#7CC043] transition-colors">Farm Setup</a></li>
              <li><a href="#tech-support" className="hover:text-[#7CC043] transition-colors">Technical Support</a></li>
              <li><a href="#mycoconnect" className="hover:text-[#7CC043] transition-colors">MycoConnect</a></li>
              <li><a href="#why-us" className="hover:text-[#7CC043] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-extrabold text-[#7CC043]">
              {t("footer_cats")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#products" className="hover:text-[#7CC043] transition-colors">Oyster Spawn</a></li>
              <li><a href="#products" className="hover:text-[#7CC043] transition-colors">Milky Spawn</a></li>
              <li><a href="#products" className="hover:text-[#7CC043] transition-colors">Fresh Mushrooms</a></li>
              <li><a href="#products" className="hover:text-[#7CC043] transition-colors">PP Filter Bags</a></li>
              <li><a href="#products" className="hover:text-[#7CC043] transition-colors">Fogger Systems</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold text-[#7CC043]">
              {t("footer_contact")}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7CC043] shrink-0" />
                <span>Kerala, India (Helpline Support)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7CC043] shrink-0" />
                <span>+91 7306307571</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7CC043] shrink-0" />
                <span>support@mycefarms.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} MYCEFARMS. {t("footer_rights")}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
