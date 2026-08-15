"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AlertTriangle, Bug, TrendingDown, ThermometerSnowflake, HelpCircle, LayoutGrid, CheckCircle } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: AlertTriangle,
      titleKey: "problem_1_title",
      descKey: "problem_1_desc",
      tag: "Spawn Quality Issue",
    },
    {
      icon: Bug,
      titleKey: "problem_2_title",
      descKey: "problem_2_desc",
      tag: "Green Mold & Bacteria",
    },
    {
      icon: TrendingDown,
      titleKey: "problem_3_title",
      descKey: "problem_3_desc",
      tag: "Loss of Profit",
    },
    {
      icon: ThermometerSnowflake,
      titleKey: "problem_4_title",
      descKey: "problem_4_desc",
      tag: "Kerala Climate Challenge",
    },
    {
      icon: HelpCircle,
      titleKey: "problem_5_title",
      descKey: "problem_5_desc",
      tag: "Lack of Guidance",
    },
    {
      icon: LayoutGrid,
      titleKey: "problem_6_title",
      descKey: "problem_6_desc",
      tag: "Infrastructure Confusion",
    },
  ];

  return (
    <section id="farming" className="py-16 sm:py-24 bg-[#F6F8F3] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#1F6F45] bg-[#DDE8C7] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Farmer Challenges
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3D2E] tracking-tight">
            {t("problem_title")}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            കേരളത്തിലെ ഭൂരിഭാഗം കൂൺ കർഷകരെയും പിന്നോട്ടടിക്കുന്ന പ്രധാന കാരണങ്ങൾ
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-[#1F6F45]/40 transition-all hover:shadow-xl group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1F6F45] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                    {prob.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B3D2E] mb-2 group-hover:text-[#1F6F45] transition-colors">
                  {t(prob.titleKey)}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(prob.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Formula Summary End Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0B3D2E] via-[#1F6F45] to-[#0B3D2E] rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl border border-[#7CC043]/30">
          <div className="inline-flex items-center gap-2 bg-[#7CC043]/20 border border-[#7CC043]/40 px-3.5 py-1 rounded-full text-[#7CC043] text-xs font-bold mb-3">
            <CheckCircle className="w-4 h-4" />
            <span>Success Formula</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-[#DDE8C7] leading-snug">
            “{t("problem_formula")}”
          </h3>
        </div>

      </div>
    </section>
  );
};
