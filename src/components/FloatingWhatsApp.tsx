"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const phone = "919876543210";
    const text = encodeURIComponent("നമസ്കാരം MYCEFARMS! എനിക്ക് Mushroom Spawn സാങ്കേതിക സഹായം ആവശ്യമുണ്ട്.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white focus:outline-none"
      aria-label="WhatsApp Helpline"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </button>
  );
};
