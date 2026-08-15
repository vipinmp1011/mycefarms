"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBag, MessageCircle } from "lucide-react";

export const MobileStickyCTA: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const phone = "917306307571";
    const text = encodeURIComponent("നമസ്കാരം MYCEFARMS! എനിക്ക് Spawn Order ആവശ്യമുണ്ട്.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B3D2E]/95 backdrop-blur-md border-t border-[#7CC043]/30 p-3 flex items-center gap-3 shadow-2xl">
      <a
        href="#products"
        className="flex-1 py-3.5 px-4 rounded-xl font-black text-sm bg-[#7CC043] text-[#0B3D2E] flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
      >
        <ShoppingBag className="w-5 h-5" />
        <span>{t("nav_order_spawn")}</span>
      </a>

      <button
        onClick={handleWhatsApp}
        className="py-3.5 px-4 rounded-xl font-bold text-sm bg-[#25D366] text-white flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span>WhatsApp</span>
      </button>
    </div>
  );
};
