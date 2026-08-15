"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingCart, Sprout, Headset, Banknote, ArrowRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      numKey: "step1_num",
      titleKey: "step1_title",
      descKey: "step1_desc",
      icon: ShoppingCart,
    },
    {
      numKey: "step2_num",
      titleKey: "step2_title",
      descKey: "step2_desc",
      icon: Sprout,
    },
    {
      numKey: "step3_num",
      titleKey: "step3_title",
      descKey: "step3_desc",
      icon: Headset,
    },
    {
      numKey: "step4_num",
      titleKey: "step4_title",
      descKey: "step4_desc",
      icon: Banknote,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F6F8F3] relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#1F6F45] bg-[#DDE8C7] px-4 py-1.5 rounded-full inline-block mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B3D2E]">
            {t("how_title")}
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#7CC043]">
                      {t(step.numKey)}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0B3D2E] text-[#7CC043] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B3D2E] mb-2">
                    {t(step.titleKey)}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#1F6F45] text-white flex items-center justify-center shadow">
                      <ArrowRight className="w-4 h-4 text-[#7CC043]" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
