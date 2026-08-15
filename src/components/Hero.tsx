"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Sparkles, Sprout, Play, Video } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const phone = "919876543210";
    const text = encodeURIComponent("നമസ്കാരം MYCEFARMS! എനിക്ക് Mushroom Spawn, Farm Setup സാങ്കേതിക സഹായം ആവശ്യമുണ്ട്.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#0B3D2E] via-[#0D4635] to-[#134E35] text-white pt-12 pb-20 lg:py-24">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#7CC043]/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#0284C7]/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Master Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1F6F45]/60 border border-[#7CC043]/40 text-[#7CC043] text-xs sm:text-sm font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-[#7CC043]" />
              <span>{t("hero_badge")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight">
              {t("hero_title")}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#DDE8C7] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t("hero_subtitle")}
            </p>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#7CC043] hover:bg-[#8cd35b] text-[#0B3D2E] font-extrabold text-base px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-1"
              >
                <span>{t("hero_cta_spawn")}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("hero_cta_whatsapp")}</span>
              </button>
            </div>

            {/* Quick Hero Key Features */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#DDE8C7]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7CC043] shrink-0" />
                <span>100% Pure Mycelium</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7CC043] shrink-0" />
                <span>Lab Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7CC043] shrink-0" />
                <span>Direct Farmer Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Hero Video Showcase Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glass Card Container */}
              <div className="relative rounded-3xl p-3 bg-[#1F6F45]/30 border border-[#7CC043]/30 shadow-2xl backdrop-blur-md">
                
                {/* Official MYCEFARMS YouTube Video Player */}
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#0B3D2E] border border-[#7CC043]/40 shadow-inner">
                  
                  {/* YouTube IFrame Embed */}
                  <iframe
                    src="https://www.youtube.com/embed/TVuLFmG1OIc?autoplay=1&mute=1&loop=1&playlist=TVuLFmG1OIc&controls=1&modestbranding=1&rel=0"
                    title="MYCEFARMS Intro Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover border-0"
                  />

                  {/* Top Overlay Badge with Master Brand Logo */}
                  <div className="absolute top-3 left-3 z-10 bg-[#0B3D2E]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#7CC043]/40 shadow-md flex items-center gap-2 pointer-events-none">
                    <div className="relative w-24 h-7">
                      <Image
                        src="/logo.png"
                        alt="MYCEFARMS Master Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Top Right Live Tour Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-[#0B3D2E]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#7CC043]/40 shadow-md flex items-center gap-2 text-xs font-bold text-[#7CC043] pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-[#7CC043] animate-ping" />
                    <Video className="w-3.5 h-3.5" />
                    <span>Farm Tour</span>
                  </div>

                  {/* Bottom Image Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 bg-[#0B3D2E]/90 backdrop-blur-md p-3 rounded-xl border border-[#7CC043]/30 flex items-center justify-between pointer-events-none">
                    <div>
                      <h4 className="text-white font-extrabold text-xs sm:text-sm flex items-center gap-1.5">
                        <Play className="w-3.5 h-3.5 text-[#7CC043] fill-current" />
                        MYCEFARMS Intro Video
                      </h4>
                      <p className="text-[#DDE8C7] text-[11px]">Kerala Mushroom Farm & Spawn Lab</p>
                    </div>
                    <span className="bg-[#7CC043] text-[#0B3D2E] font-black text-[10px] uppercase px-2.5 py-1 rounded-md shadow">
                      Watch Video
                    </span>
                  </div>
                </div>

                {/* Sub Visual Cards Grid */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-3 bg-[#0B3D2E]/80 rounded-xl border border-[#7CC043]/20 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#7CC043]/20 flex items-center justify-center shrink-0">
                      <Sprout className="w-5 h-5 text-[#7CC043]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">99.8% Vitality</p>
                      <p className="text-[10px] text-gray-300">Fast Colonisation</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#0B3D2E]/80 rounded-xl border border-[#7CC043]/20 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0284C7]/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Contamination Free</p>
                      <p className="text-[10px] text-gray-300">Autoclave Sealed</p>
                    </div>
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
