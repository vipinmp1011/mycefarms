"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sprout, ShoppingBag, Cpu, Headset, Users, ArrowRight } from "lucide-react";

interface SolutionSectionProps {
  onOpenConsultation?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Sprout,
      titleKey: "sol_1_title",
      descKey: "sol_1_desc",
      ctaKey: "sol_1_cta",
      href: "#products",
      color: "from-[#0B3D2E] to-[#1F6F45]",
    },
    {
      icon: ShoppingBag,
      titleKey: "sol_2_title",
      descKey: "sol_2_desc",
      ctaKey: "sol_2_cta",
      href: "#products",
      color: "from-[#1F6F45] to-[#7CC043]",
    },
    {
      icon: Cpu,
      titleKey: "sol_3_title",
      descKey: "sol_3_desc",
      ctaKey: "sol_3_cta",
      href: "#farm-setup",
      color: "from-[#0B3D2E] to-[#0284C7]",
      action: onOpenConsultation,
    },
    {
      icon: Headset,
      titleKey: "sol_4_title",
      descKey: "sol_4_desc",
      ctaKey: "sol_4_cta",
      href: "#tech-support",
      color: "from-[#1F6F45] to-[#0B3D2E]",
      action: onOpenConsultation,
    },
    {
      icon: Users,
      titleKey: "sol_5_title",
      descKey: "sol_5_desc",
      ctaKey: "sol_5_cta",
      href: "#mycoconnect",
      color: "from-[#0B3D2E] to-[#1F6F45]",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#7CC043] bg-[#0B3D2E] px-4 py-1.5 rounded-full inline-block mb-3 shadow">
            Complete Ecosystem
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3D2E] tracking-tight">
            {t("solution_title")}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            വിത്ത് ഉൽപാദനം മുതൽ ഫാം സെറ്റപ്പും കമ്മ്യൂണിറ്റിയും വരെ ഒരൊറ്റ കുടക്കീഴിൽ
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F6F8F3] rounded-3xl p-8 border border-gray-200 hover:border-[#7CC043] transition-all hover:shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-[#DDE8C7]" />
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-[#0B3D2E] mb-3">
                    {t(item.titleKey)}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {t(item.descKey)}
                  </p>
                </div>

                <div>
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1F6F45] hover:text-[#0B3D2E] group-hover:translate-x-1 transition-all"
                    >
                      <span>{t(item.ctaKey)}</span>
                      <ArrowRight className="w-4 h-4 text-[#7CC043]" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1F6F45] hover:text-[#0B3D2E] group-hover:translate-x-1 transition-all"
                    >
                      <span>{t(item.ctaKey)}</span>
                      <ArrowRight className="w-4 h-4 text-[#7CC043]" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
