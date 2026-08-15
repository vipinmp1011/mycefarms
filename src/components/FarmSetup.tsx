"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Thermometer, Wind, Layers, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

interface FarmSetupProps {
  onOpenConsultation: () => void;
}

export const FarmSetup: React.FC<FarmSetupProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  const features = [
    { icon: Thermometer, titleKey: "setup_f1", desc: "Digital humidity & temperature sensor misting system." },
    { icon: Layers, titleKey: "setup_f2", desc: "Maximize room height with heavy-duty multi-tier racks." },
    { icon: Wind, titleKey: "setup_f3", desc: "Filtered HEPA/mesh fresh air exchange fans." },
    { icon: Shield, titleKey: "setup_f4", desc: "Low energy misting & sanitized environment design." },
  ];

  return (
    <section id="farm-setup" className="py-16 sm:py-24 bg-[#0B3D2E] text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284C7]/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7CC043]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284C7]/20 border border-[#0284C7]/40 text-[#38BDF8] text-xs font-bold">
              <Cpu className="w-4 h-4" />
              <span>Smart Agriculture Setup</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t("setup_title")}
            </h2>

            <p className="text-base sm:text-lg text-[#DDE8C7] leading-relaxed">
              {t("setup_desc")}
            </p>

            {/* 4 Tech Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#1F6F45]/30 rounded-2xl border border-[#7CC043]/20 backdrop-blur-sm flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#7CC043]/20 text-[#7CC043] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        {t(feat.titleKey)}
                      </h4>
                      <p className="text-xs text-gray-300 mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Consultation CTA */}
            <div className="pt-6">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#7CC043] hover:bg-[#8cd35b] text-[#0B3D2E] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span>{t("setup_cta")}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Visual Room Render */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-[#1F6F45]/40 border border-[#7CC043]/30 shadow-2xl backdrop-blur-md">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#0B3D2E]">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="High Tech Indoor Mushroom Farm Racks Kerala"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-transparent to-transparent opacity-85" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B3D2E]/90 backdrop-blur-md p-4 rounded-xl border border-[#7CC043]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-extrabold text-sm">Spare Room to Farm</h4>
                      <p className="text-xs text-[#DDE8C7]">100 Sq.Ft → 150 Bags Yield</p>
                    </div>
                    <span className="bg-[#0284C7] text-white font-bold text-xs px-3 py-1 rounded-md">
                      Auto Mist
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
