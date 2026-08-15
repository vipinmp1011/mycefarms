"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Users, MessageSquare, Award, ArrowRight } from "lucide-react";

interface MycoConnectProps {
  onOpenConsultation: () => void;
}

export const MycoConnect: React.FC<MycoConnectProps> = ({ onOpenConsultation }) => {
  const { t } = useLanguage();

  const handleJoinWhatsAppGroup = () => {
    const phone = "917306307571";
    const text = encodeURIComponent("നമസ്കാരം MYCEFARMS! എനിക്ക് MycoConnect കർഷക കമ്മ്യൂണിറ്റിയിൽ ചേരാൻ താല്പര്യമുണ്ട്.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="mycoconnect" className="py-16 sm:py-24 bg-white text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-[#0B3D2E] via-[#1F6F45] to-[#0B3D2E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-[#7CC043]/30 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Community Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7CC043]/20 border border-[#7CC043]/40 text-[#7CC043] text-xs font-bold">
                <Users className="w-4 h-4" />
                <span>Kerala Farmer Network</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {t("community_title")}
              </h2>

              <p className="text-base sm:text-xl text-[#DDE8C7] leading-relaxed">
                “{t("community_desc")}”
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#7CC043]/20">
                <div>
                  <span className="text-2xl sm:text-4xl font-black text-[#7CC043] block">
                    {t("community_stat1")}
                  </span>
                  <span className="text-xs text-gray-300">{t("community_stat1_txt")}</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-4xl font-black text-[#7CC043] block">
                    {t("community_stat2")}
                  </span>
                  <span className="text-xs text-gray-300">{t("community_stat2_txt")}</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-4xl font-black text-[#7CC043] block">
                    {t("community_stat3")}
                  </span>
                  <span className="text-xs text-gray-300">{t("community_stat3_txt")}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleJoinWhatsAppGroup}
                  className="inline-flex items-center justify-center gap-3 bg-[#7CC043] hover:bg-[#8cd35b] text-[#0B3D2E] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all"
                >
                  <span>{t("community_cta")}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Community Image */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-[#7CC043]/40 shadow-xl bg-[#0B3D2E]">
                <Image
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80"
                  alt="Kerala Mushroom Farmer Community Group"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-transparent to-transparent opacity-75" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B3D2E]/90 backdrop-blur-md p-3 rounded-xl border border-[#7CC043]/30 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Join Daily Farmer Q&A</span>
                  <span className="bg-[#7CC043] text-[#0B3D2E] text-[10px] font-bold px-2.5 py-1 rounded">
                    Active Community
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
