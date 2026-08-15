"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Award, Users, Compass, PackageCheck } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Award,
      title: t("trust_1"),
      subtitle: t("trust_1_sub"),
      color: "text-[#7CC043]",
    },
    {
      icon: Users,
      title: t("trust_2"),
      subtitle: t("trust_2_sub"),
      color: "text-[#38BDF8]",
    },
    {
      icon: Compass,
      title: t("trust_3"),
      subtitle: t("trust_3_sub"),
      color: "text-[#7CC043]",
    },
    {
      icon: PackageCheck,
      title: t("trust_4"),
      subtitle: t("trust_4_sub"),
      color: "text-[#38BDF8]",
    },
  ];

  return (
    <section className="bg-[#1F6F45] text-white border-y border-[#7CC043]/30 py-6 relative z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#7CC043]/20">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${
                  idx !== 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B3D2E]/60 border border-[#7CC043]/30 flex items-center justify-center shrink-0 shadow-inner">
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#DDE8C7]">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
