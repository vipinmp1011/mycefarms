"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, ArrowRight, ShieldCheck, Thermometer, Sprout, LayoutGrid, Award, Bug } from "lucide-react";

export interface Article {
  id: string;
  titleMl: string;
  titleEn: string;
  category: string;
  readTime: string;
  icon: React.ElementType;
  summaryMl: string;
  summaryEn: string;
  contentMl: string[];
  contentEn: string[];
}

export const articlesData: Article[] = [
  {
    id: "art-1",
    titleMl: "Mushroom Farming Basics (കൂൺ കൃഷി തുടക്കക്കാർക്ക്)",
    titleEn: "Mushroom Farming Basics for Beginners",
    category: "Basics",
    readTime: "4 min read",
    icon: Sprout,
    summaryMl: "കേരളത്തിൽ അനുയോജ്യമായ കൂൺ ഇനങ്ങൾ, ആവശ്യമായ വിഭവങ്ങൾ, കൃഷിയുടെ ഘട്ടങ്ങൾ.",
    summaryEn: "Essential guide on suitable varieties for Kerala, substrate preparation, and cycle timelines.",
    contentMl: [
      "കേരളത്തിൽ പ്രധാനമായും രണ്ട് ഇനം കൂണുകളാണ് വ്യാവസായിക അടിസ്ഥാനത്തിൽ കൃഷി ചെയ്യുന്നത്: ഒയിസ്റ്റർ കൂൺ (Oyster Mushroom) ഉം മിൽക്കി കൂൺ (Milky Mushroom) ഉം.",
      "ഒയിസ്റ്റർ കൂണുകൾ 22°C - 28°C താപനിലയിലും, മിൽക്കി കൂണുകൾ 30°C - 35°C താപനിലയിലും മികച്ച രീതിയിൽ വളരുന്നു.",
      "ആദ്യഘട്ടത്തിൽ പാസ്ചറൈസ് ചെയ്ത വൈക്കോൽ അല്ലെങ്കിൽ മരപ്പൊടി പോളിത്തീൻ കവറുകളിൽ നിറച്ച് സ്പോൺ വിതറി ഇരുണ്ട മുറിയിൽ 15-20 ദിവസം വയ്ക്കുന്നു.",
    ],
    contentEn: [
      "In Kerala, two primary varieties are commercially cultivated: Oyster Mushrooms and Milky Mushrooms.",
      "Oyster mushrooms thrive in 22°C - 28°C temperatures, whereas Milky mushrooms thrive in 30°C - 35°C tropical heat.",
      "Substrate preparation involves pasteurizing paddy straw, layering spawn into filter bags, and incubating in dark rooms for 15-20 days.",
    ],
  },
  {
    id: "art-2",
    titleMl: "Spawn ഉപയോഗിക്കുന്ന വിധവും സൂക്ഷിപ്പും",
    titleEn: "How to Store and Use Mushroom Spawn Correctly",
    category: "Spawn Guide",
    readTime: "3 min read",
    icon: ShieldCheck,
    summaryMl: "സ്പോൺ പാക്കറ്റ് തുറക്കുമ്പോഴും വിതയ്ക്കുമ്പോഴും ശ്രദ്ധിക്കേണ്ട ശുചിത്വ നിയമങ്ങൾ.",
    summaryEn: "Sterile handling protocol to prevent premature contamination during spawn mixing.",
    contentMl: [
      "സ്പോൺ കവർ തുറക്കുന്നതിന് മുൻപായി കൈകൾ ആൽക്കഹോൾ അല്ലെങ്കിൽ സാനിറ്റൈസർ ഉപയോഗിച്ച് വൃത്തിയാക്കുക.",
      "ഫ്രിഡ്ജിൽ വെച്ചിരിക്കുന്ന സ്പോൺ ആണെങ്കിൽ, ഉപയോഗിക്കുന്നതിന് 2 മണിക്കൂർ മുൻപ് പുറത്തെടുത്ത് സാധാരണ താപനിലയിൽ ആക്കുക.",
      "ഒരു കിലോ സ്പോൺ ഉപയോഗിച്ച് 10-12 ഒയിസ്റ്റർ കൂൺ ബെഡുകൾ നിർമ്മിക്കാം.",
    ],
    contentEn: [
      "Always sanitize hands and workspace thoroughly before opening spawn bags.",
      "If spawn was stored in refrigerator, bring to room temperature 2 hours prior to bed preparation.",
      "1 Kg of MYCEFARMS master spawn is sufficient to inoculate 10 to 12 standard substrate bags.",
    ],
  },
  {
    id: "art-3",
    titleMl: "Contamination തടയാം (Green Mold & Bacterial Infection)",
    titleEn: "Preventing Contamination & Green Mold",
    category: "Crop Protection",
    readTime: "5 min read",
    icon: Bug,
    summaryMl: "പച്ചപ്പൂപ്പൽ തടയാനും ബെഡുകളുടെ ആയുസ്സ് കൂട്ടാനുമുള്ള പ്രായോഗിക മാർഗ്ഗങ്ങൾ.",
    summaryEn: "Proactive infection control methods to maintain zero bag rejection rates.",
    contentMl: [
      "വൈക്കോൽ അവിച്ചെടുക്കുമ്പോൾ (Steam Pasteurization) കുറഞ്ഞത് 1 മണിക്കൂറെങ്കിലും 80°C താപനില നിലനിർത്തുക.",
      "നനഞ്ഞ വൈക്കോലിൽ ഈർപ്പം 65% ൽ കൂടാതിരിക്കാൻ ശ്രദ്ധിക്കുക (പിഴിയുമ്പോൾ വെള്ളം തുള്ളിയായി വീഴരുത്).",
      "പച്ചപ്പൂപ്പൽ കണ്ട ബെഡുകൾ ഉടൻ തന്നെ ഫാമിൽ നിന്നും മാറ്റി നശിപ്പിക്കുക.",
    ],
    contentEn: [
      "Ensure substrate reaches at least 80°C for 60 minutes during steam pasteurization.",
      "Check substrate moisture level (around 65%): no water should drop when squeezed firmly.",
      "Isolate and discard contaminated bags immediately to prevent fungal spore drift.",
    ],
  },
  {
    id: "art-4",
    titleMl: "Temperature & Humidity നിയന്ത്രണം",
    titleEn: "Managing Climate in Kerala Weather",
    category: "Climate Control",
    readTime: "4 min read",
    icon: Thermometer,
    summaryMl: "ചൂടുകാലത്തും മഴക്കാലത്തും ഫാമിലെ അന്തരീക്ഷം ക്രമീകരിക്കുന്ന വിദ്യകൾ.",
    summaryEn: "Using micro-foggers and exhaust systems for 85% RH and optimum temperature.",
    contentMl: [
      "ഫോഗർ നോസിലുകൾ ദിവസത്തിൽ 3-4 തവണ 5 മിനിറ്റ് നേരം പ്രവർത്തിപ്പിച്ച് 85-90% ഈർപ്പം നിലനിർത്തുക.",
      "വൈകുന്നേരങ്ങളിൽ എക്സോസ്റ്റ് ഫാൻ പ്രവർത്തിപ്പിച്ച് കാർബൺ ഡൈഓക്സൈഡ് (CO2) പുറന്തള്ളുക.",
    ],
    contentEn: [
      "Run micro mist foggers 3-4 times daily for 5 minutes to maintain 85-90% RH.",
      "Operate exhaust fans in evenings to exhaust CO2 buildup during pinhead formation.",
    ],
  },
  {
    id: "art-5",
    titleMl: "Spare Room Farm Setup മാർഗ്ഗരേഖ",
    titleEn: "Converting Spare Room into Farm Setup",
    category: "Setup",
    readTime: "5 min read",
    icon: LayoutGrid,
    summaryMl: "വീട്ടിലെ ചെറിയ മുറികൾ കുറഞ്ഞ ചെലവിൽ ഹൈടെക് ഫാം ആക്കി മാറ്റാം.",
    summaryEn: "Step-by-step room conversion guide with vertical racks and light control.",
    contentMl: [
      "മുറിയിലെ ജനാലകളിൽ നെറ്റ് അടിച്ചു പ്രാണികൾ കയറാതെ സൂക്ഷിക്കുക.",
      "സ്റ്റീൽ അല്ലെങ്കിൽ ജി.ഐ പൈപ്പ് ഉപയോഗിച്ച് 4 തട്ടുകളുള്ള റെക്കുകൾ നിർമ്മിക്കുക.",
    ],
    contentEn: [
      "Install fine insect mesh on all room openings to keep flies out.",
      "Construct 4-tier vertical racks using GI pipe to triple room capacity.",
    ],
  },
  {
    id: "art-6",
    titleMl: "Harvest & Yield Improvement (വിളവെപ്പും സൂക്ഷിപ്പും)",
    titleEn: "Harvesting Technique & Maximizing Yield Weight",
    category: "Yield Optimization",
    readTime: "4 min read",
    icon: Award,
    summaryMl: "കൂണുകൾ മുറിയാതെ വിളവെടുക്കാനും കൂടുതൽ ഫ്ലഷ് (Flush) നേടാനുമുള്ള വിദ്യകൾ.",
    summaryEn: "Twist-and-pull harvesting method to extract 3 full flushes per bag.",
    contentMl: [
      "കൂണുകൾ വള്ളിയോടെ ചെറുതായി തിരിച്ചു വലിച്ചെടുത്തു വിളവെടുക്കുക, കത്തി ഉപയോഗിച്ച് മുറിക്കരുത്.",
      "വിളവെടുത്ത ശേഷം ബെഡിലെ ദ്വാരം ചെറുതായി ചൊറിഞ്ഞു കൊടുത്ത് വെള്ളം തളിച്ചാൽ രണ്ടാം ഫ്ലഷ് വേഗത്തിലാകും.",
    ],
    contentEn: [
      "Gently twist and pull mushroom clusters at the base; avoid cutting stems.",
      "Scrape residual stump tissue gently after harvest to stimulate rapid second flush pinheads.",
    ],
  },
];

interface FarmerEducationProps {
  onOpenArticle: (article: Article) => void;
}

export const FarmerEducation: React.FC<FarmerEducationProps> = ({ onOpenArticle }) => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B3D2E]">
            {t("edu_title")}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            {t("edu_desc")}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((art) => {
            const Icon = art.icon;
            return (
              <div
                key={art.id}
                className="bg-[#F6F8F3] rounded-3xl p-6 border border-gray-200 hover:border-[#7CC043] transition-all hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#0B3D2E] bg-[#DDE8C7] px-3 py-1 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {art.readTime}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#0B3D2E] text-[#7CC043] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0B3D2E] mb-2 group-hover:text-[#1F6F45]">
                    {language === "ml" ? art.titleMl : art.titleEn}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {language === "ml" ? art.summaryMl : art.summaryEn}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onOpenArticle(art)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1F6F45] hover:text-[#0B3D2E] group-hover:translate-x-1 transition-all"
                  >
                    <span>{t("read_more")}</span>
                    <ArrowRight className="w-4 h-4 text-[#7CC043]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
