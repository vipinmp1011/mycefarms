"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, Quote } from "lucide-react";

/**
 * DEMO TESTIMONIALS DATA
 * ----------------------------------------------------
 * NOTE: Structured for easy replacement with real customer reviews.
 */
const demoTestimonials = [
  {
    nameMl: "സതീശൻ കെ.",
    nameEn: "Satheesh K.",
    locationMl: "തൃശ്ശൂർ",
    locationEn: "Thrissur",
    roleMl: "ഒയിസ്റ്റർ കൂൺ കർഷകൻ",
    roleEn: "Oyster Mushroom Farmer",
    quoteMl: "MYCEFARMS-ന്റെ സ്പോൺ ഉപയോഗിക്കാൻ തുടങ്ങിയ ശേഷമാണ് എനിക്ക് ബെഡുകളിൽ പച്ചപ്പൂപ്പൽ വരുന്നത് പൂർണ്ണമായി നിന്നത്. ഓരോ കവർ സ്പോണിൽ നിന്നും 30% കൂടുതൽ വിളവ് ലഭിക്കുന്നുണ്ട്.",
    quoteEn: "Since switching to MYCEFARMS spawn, green mold contamination stopped completely. My flush yield increased by 30% per bag.",
    rating: 5,
  },
  {
    nameMl: "റെജി തോമസ്",
    nameEn: "Reji Thomas",
    locationMl: "കോട്ടയം",
    locationEn: "Kottayam",
    roleMl: "ഹൈടെക് കൂൺ ഫാം ഉടമ",
    roleEn: "Hi-Tech Farm Owner",
    quoteMl: "വീടിനോട് ചേർന്നുള്ള ഒരു 120 sq.ft മുറിയിൽ ഹൈടെക് ഫോഗിങ് സെറ്റപ്പ് ചെയ്തു തന്നത് MYCEFARMS ആണ്. തുടക്കം മുതൽ എല്ലാ സംശയങ്ങൾക്കും ഫോണിലൂടെ മറുപടി നൽകുന്നുണ്ട്.",
    quoteEn: "MYCEFARMS retrofitted my 120 sq.ft spare room into an automated climate farm. Their post-purchase technical support via WhatsApp call is outstanding.",
    rating: 5,
  },
  {
    nameMl: "അനിതാ കുമാരി",
    nameEn: "Anita Kumari",
    locationMl: "പാലക്കാട്",
    locationEn: "Palakkad",
    roleMl: "കുടുംബശ്രീ ഗ്രൂപ്പ് ലീഡർ",
    roleEn: "Kudumbashree Group Leader",
    quoteMl: "ഞങ്ങളുടെ ഗ്രൂപ്പിലെ 10 സ്ത്രീകൾ ചേർന്നാണ് കൂൺ കൃഷി ചെയ്യുന്നത്. ഏറ്റവും നല്ല ക്വാളിറ്റിയുള്ള വിത്തുകളും കൃത്യമായ മാർഗ്ഗനിർദ്ദേശവും തരുന്നതിനാൽ നല്ല ലാഭം ലഭിക്കുന്നുണ്ട്.",
    quoteEn: "Our 10-member Kudumbashree unit cultivates mushrooms using MYCEFARMS spawn. Reliable quality and clear advice ensure steady income for our team.",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#F6F8F3] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#7CC043] bg-[#0B3D2E] px-4 py-1.5 rounded-full inline-block mb-3 shadow">
            Real Farmer Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B3D2E]">
            {t("test_title")}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            {t("test_subtitle")}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demoTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#7CC043]/30" />
                </div>

                <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
                  “{language === "ml" ? item.quoteMl : item.quoteEn}”
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B3D2E] text-[#7CC043] font-bold flex items-center justify-center text-sm shadow">
                  {(language === "ml" ? item.nameMl : item.nameEn)[0]}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#0B3D2E]">
                    {language === "ml" ? item.nameMl : item.nameEn}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {language === "ml" ? item.roleMl : item.roleEn} • {language === "ml" ? item.locationMl : item.locationEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
