"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First open by default

  const faqItems = [
    { qKey: "faq_q1", aKey: "faq_a1" },
    { qKey: "faq_q2", aKey: "faq_a2" },
    { qKey: "faq_q3", aKey: "faq_a3" },
    { qKey: "faq_q4", aKey: "faq_a4" },
    { qKey: "faq_q5", aKey: "faq_a5" },
    { qKey: "faq_q6", aKey: "faq_a6" },
    { qKey: "faq_q7", aKey: "faq_a7" },
    { qKey: "faq_q8", aKey: "faq_a8" },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="tech-support" className="py-16 sm:py-24 bg-white relative text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B3D2E]">
            {t("faq_title")}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            കൂൺ കൃഷിയെക്കുറിച്ചും സ്പോൺ ഓർഡറുകളെക്കുറിച്ചും സാധാരണയായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F6F8F3] border-[#7CC043] shadow-md"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-extrabold text-base sm:text-lg text-[#0B3D2E]">
                    {t(item.qKey)}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0B3D2E] text-[#7CC043] rotate-180"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-700 leading-relaxed border-t border-[#7CC043]/20">
                    {t(item.aKey)}
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
