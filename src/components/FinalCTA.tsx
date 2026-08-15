"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MessageCircle, Cpu, ShoppingBag } from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const phone = "917306307571";
    const text = encodeURIComponent("നമസ്കാരം MYCEFARMS! എനിക്ക് Mushroom Farming ആരംഭിക്കാൻ ആഗ്രഹമുണ്ട്.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0B3D2E] via-[#0D4635] to-[#134E35] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t("final_cta_title")}
          </h2>

          <p className="text-base sm:text-xl text-[#DDE8C7] leading-relaxed">
            {t("final_cta_sub")}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Spawn Order Button */}
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#7CC043] hover:bg-[#8cd35b] text-[#0B3D2E] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{t("final_cta_btn1")}</span>
            </a>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t("final_cta_btn2")}</span>
            </button>

            {/* Farm Consultation Button */}
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0369a1] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Cpu className="w-5 h-5" />
              <span>{t("final_cta_btn3")}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
