"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X, Globe, ArrowRight } from "lucide-react";

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: t("nav_home") },
    { href: "#products", label: t("nav_products") },
    { href: "#farming", label: t("nav_farming") },
    { href: "#farm-setup", label: t("nav_farm_setup") },
    { href: "#tech-support", label: t("nav_support") },
    { href: "#mycoconnect", label: t("nav_community") },
    { href: "#why-us", label: t("nav_about") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B3D2E]/95 backdrop-blur-md border-b border-[#7CC043]/20 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Master Uploaded Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-36 h-12 sm:w-44 sm:h-14 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="MYCEFARMS Master Brand Logo"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#7CC043] transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Switcher, Cart, Primary CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#1F6F45]/60 rounded-full p-1 border border-[#7CC043]/30 text-xs">
              <Globe className="w-3.5 h-3.5 ml-2 text-[#7CC043]" />
              <button
                onClick={() => setLanguage("ml")}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  language === "ml"
                    ? "bg-[#7CC043] text-[#0B3D2E] shadow"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {t("lang_ml")}
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  language === "en"
                    ? "bg-[#7CC043] text-[#0B3D2E] shadow"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {t("lang_en")}
              </button>
            </div>

            {/* Cart Icon Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#1F6F45]/40 hover:bg-[#1F6F45] text-white rounded-full transition-colors border border-[#7CC043]/30 focus:outline-none"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#7CC043]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7CC043] text-[#0B3D2E] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Primary Header CTA */}
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-[#7CC043] hover:bg-[#8bd14e] text-[#0B3D2E] font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>{t("nav_order_spawn")}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Language Selector */}
            <button
              onClick={() => setLanguage(language === "ml" ? "en" : "ml")}
              className="flex items-center gap-1 bg-[#1F6F45] text-xs font-semibold px-2.5 py-1.5 rounded-full border border-[#7CC043]/30"
            >
              <Globe className="w-3.5 h-3.5 text-[#7CC043]" />
              <span>{language === "ml" ? "ENG" : "മലയാളം"}</span>
            </button>

            {/* Mobile Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 bg-[#1F6F45]/60 text-white rounded-full border border-[#7CC043]/30"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#7CC043]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7CC043] text-[#0B3D2E] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B3D2E] border-b border-[#7CC043]/30 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-100 hover:text-[#7CC043] px-3 py-2 rounded-lg text-base font-medium transition-colors hover:bg-[#1F6F45]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#1F6F45] flex flex-col gap-3">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#7CC043] text-[#0B3D2E] font-bold px-4 py-3 rounded-xl shadow-md text-base"
            >
              {t("nav_order_spawn")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
