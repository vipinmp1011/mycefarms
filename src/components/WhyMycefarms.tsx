"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, HeartHandshake, Sprout, Headset, Cpu, CheckCircle } from "lucide-react";

export const WhyMycefarms: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: ShieldCheck, titleKey: "why_1_title", descKey: "why_1_desc" },
    { icon: HeartHandshake, titleKey: "why_2_title", descKey: "why_2_desc" },
    { icon: Sprout, titleKey: "why_3_title", descKey: "why_3_desc" },
    { icon: Headset, titleKey: "why_4_title", descKey: "why_4_desc" },
    { icon: Cpu, titleKey: "why_5_title", descKey: "why_5_desc" },
    { icon: CheckCircle, titleKey: "why_6_title", descKey: "why_6_desc" },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F6F8F3] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#7CC043] bg-[#0B3D2E] px-4 py-1.5 rounded-full inline-block mb-3 shadow">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B3D2E]">
            {t("why_title")}
          </h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all hover:border-[#1F6F45] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B3D2E] text-[#7CC043] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-extrabold text-[#0B3D2E] mb-3">
                  {t(card.titleKey)}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(card.descKey)}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
