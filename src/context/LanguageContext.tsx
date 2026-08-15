"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ml" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ml: {
    // Nav & General
    nav_home: "ഹോം",
    nav_products: "പ്രോഡക്റ്റുകൾ",
    nav_farming: "കൂൺ കൃഷി",
    nav_farm_setup: "Farm Setup",
    nav_support: "Technical Support",
    nav_community: "MycoConnect",
    nav_about: "ഞങ്ങളെക്കുറിച്ച്",
    nav_order_spawn: "Spawn Order ചെയ്യൂ",
    lang_ml: "മലയാളം",
    lang_en: "English",

    // Hero Section
    hero_title: "കൂൺ കൃഷി ഇനി കൂടുതൽ ശാസ്ത്രീയമായി, കൂടുതൽ ലാഭകരമായി.",
    hero_subtitle:
      "ഗുണമേന്മയുള്ള Mushroom Spawn, Farm Supplies, High-Tech Farm Setup, Technical Support — കൂൺ കർഷകർക്ക് ആവശ്യമായതെല്ലാം ഒരിടത്ത്.",
    hero_cta_spawn: "Spawn ഇപ്പോൾ ബുക്ക് ചെയ്യൂ",
    hero_cta_whatsapp: "WhatsApp വഴി ബന്ധപ്പെടൂ",
    hero_badge: "കേരളത്തിലെ പ്രീമിയം Mushroom Farm & Spawn Hub",

    // Trust Strip
    trust_1: "Quality Spawn",
    trust_1_sub: "99.8% Pure Mycelium",
    trust_2: "Farmer Support",
    trust_2_sub: "നേരിട്ടുള്ള സാങ്കേതിക സഹായം",
    trust_3: "Technical Guidance",
    trust_3_sub: "കൃത്യമായ കൃഷി മാർഗ്ഗനിർദ്ദേശം",
    trust_4: "Complete Solutions",
    trust_4_sub: "Spawn മുതൽ Market വരെ",

    // Problem Section
    problem_title: "കൂൺ കൃഷിയിൽ ഈ പ്രശ്നങ്ങൾ നിങ്ങളും നേരിടുന്നുണ്ടോ?",
    problem_1_title: "ഗുണമേന്മയില്ലാത്ത Spawn",
    problem_1_desc: "വളർച്ചയില്ലാത്തതും പെട്ടെന്ന് കേടാകുന്നതുമായ വിത്തുകൾ കാരണം വിളവ് കുറയുന്നു.",
    problem_2_title: "Contamination കൂടുതലാകുന്നത്",
    problem_2_desc: "പച്ചപ്പൂപ്പലും (Green mold) ബാക്ടീരിയൽ രോഗങ്ങളും കാരണം ബെഡുകൾ നശിച്ചുപോകുന്നു.",
    problem_3_title: "Yield കുറയുന്നത്",
    problem_3_desc: "ശരിയായ സാങ്കേതികവിദ്യയും പരിചരണവും ഇല്ലാത്തതിനാൽ കൃത്യമായ ലാഭം ലഭിക്കുന്നില്ല.",
    problem_4_title: "Temperature / Humidity നിയന്ത്രണം",
    problem_4_desc: "കേരളത്തിലെ കാലാവസ്ഥയിൽ ചൂടും ഈർപ്പവും ക്രമീകരിക്കാൻ സാധിക്കാതെ വരുന്നു.",
    problem_5_title: "Technical Guidance ഇല്ലായ്മ",
    problem_5_desc: "സംശയങ്ങൾ ചോദിക്കാനും കൃത്യസമയത്ത് പരിഹാരം ലഭിക്കാനും ആളില്ലാത്ത അവസ്ഥ.",
    problem_6_title: "Farm Setup അറിവില്ലായ്മ",
    problem_6_desc: "വലിയ ചെലവില്ലാതെ ലഭ്യമായ സ്ഥലത്ത് എങ്ങനെ ഷെഡ്ഡ് നിർമ്മിക്കണം എന്ന് ആശയക്കുഴപ്പം.",
    problem_formula: "ശരിയായ Spawn + ശരിയായ Farm Setup + ശരിയായ Technical Support = മികച്ച Yield",

    // Solutions Section
    solution_title: "നിങ്ങളുടെ കൂൺ കൃഷിക്ക് MYCEFARMS ഒരു Complete Solution",
    sol_1_title: "Premium Mushroom Spawn",
    sol_1_desc: "ഉയർന്ന പ്രതിരോധശേഷിയുള്ള, ഉയർന്ന വിളവ് നൽകുന്ന ലാബ് ടെസ്റ്റ് ചെയ്ത മാസ്റ്റർ സ്പോൺ.",
    sol_1_cta: "View Spawn",
    sol_2_title: "Mushroom Farm Supplies",
    sol_2_desc: "PP bags, Spawner rings, Thermometer, Fogger, Disinfectants തുടങ്ങി എല്ലാ അവശ്യസാധനങ്ങളും.",
    sol_2_cta: "View Supplies",
    sol_3_title: "High-Tech Mushroom Farm Setup",
    sol_3_desc: "ചെറിയ മുറികളിലും സ്പേസുകളിലും ശാസ്ത്രീയമായ ഓട്ടോമേറ്റഡ് ക്ലൈമറ്റ് കൺട്രോൾ ഫാം സെറ്റപ്പ്.",
    sol_3_cta: "Farm Setup അറിയാം",
    sol_4_title: "Technical Support",
    sol_4_desc: "വിളവെടുപ്പ് വരെയുള്ള സൗജന്യ വോയ്‌സ്/വീഡിയോ കോൾ കൺസൾട്ടേഷൻ സർവീസ്.",
    sol_4_cta: "Get Support",
    sol_5_title: "MycoConnect Community",
    sol_5_desc: "കേരളത്തിലെ ആയിരക്കണക്കിന് കർഷകർ ഒന്നിക്കുന്ന നോളജ് ഷെയറിങ് കമ്മ്യൂണിറ്റി.",
    sol_5_cta: "Join Community",

    // Products Section
    products_title: "MYCEFARMS Products",
    products_subtitle: "ഗുണമേന്മയും സുതാര്യതയും ഉറപ്പുവരുത്തിയ ഉൽപന്നങ്ങൾ",
    cat_all: "എല്ലാ പ്രോഡക്റ്റുകളും",
    cat_spawn: "Mushroom Spawn",
    cat_fresh: "Fresh Mushrooms",
    cat_supplies: "Farm Supplies",
    add_to_cart: "Cart-ലേക്ക് ചേർക്കൂ",
    buy_now: "ഇപ്പോൾ വാങ്ങൂ",
    qty: "അളവ്",
    price_per: "വില",

    // Featured Spawn Product
    featured_title: "Better Spawn. Better Start. Better Cultivation.",
    featured_subtitle: "നല്ല Spawn ആണ് മികച്ച കൂൺ കൃഷിയുടെ തുടക്കം.",
    featured_badge: "MYCEFARMS Master Spawn Bags",
    featured_desc:
      "ലാബ് ഹൈജീൻ നിലവാരത്തിൽ തയാറാക്കിയ ഹൈ-വൈറ്റാലിറ്റി ഒയിസ്റ്റർ / മിൽക്കി മഷ്‌റൂം സ്പോൺ. കൂടുതൽ വെളുത്ത മൈസീലിയം പോഷണവും വേഗത്തിലുള്ള വെജിറ്റേറ്റീവ് വളർച്ചയും ഉറപ്പുനൽകുന്നു.",
    featured_feat1: "100% Contamination-Free Lab Certified",
    featured_feat2: "30-40% കൂടുതൽ വിളവ് നൽകുന്ന ജീൻ സ്ട്രെയിൻ",
    featured_feat3: "കേരളത്തിലെ ചൂടിനെ പ്രതിരോധിക്കാനുള്ള ശേഷി",

    // Fresh Mushrooms
    fresh_title: "Fresh Mushrooms — Naturally Grown. Purely Fresh.",
    fresh_subtitle: "വിഷരഹിതമായി ശാസ്ത്രീയമായി വിളവെടുത്ത ഫ്രഷ് കൂണുകൾ direct ഫാമിൽ നിന്നും.",

    // Farm Setup Section
    setup_title: "ചെറിയ സ്ഥലത്ത് High-Tech Mushroom Farm",
    setup_desc:
      "വലിയ കെട്ടിടം ആവശ്യമില്ല. ലഭ്യമായ spare room പോലും ശരിയായ രീതിയിൽ ഉപയോഗിച്ച് mushroom farm ആരംഭിക്കാം.",
    setup_f1: "ഓട്ടോമാറ്റിക് ടെമ്പറേച്ചർ & ഹ്യുമിഡിറ്റി കൺട്രോൾ",
    setup_f2: "സ്‌പേസ് എഫിഷ്യന്റ് വെർട്ടിക്കൽ റെക്കിങ് സിസ്റ്റം",
    setup_f3: "ഫോഗിങ് & പ്രോപ്പർ വെന്റിലേഷൻ എയർഫ്ലോ",
    setup_f4: "കുറഞ്ഞ വൈദ്യുതി ഉപഭോഗം & കുറഞ്ഞ അറ്റകുറ്റപ്പണി",
    setup_cta: "Farm Setup Consultation",

    // How It Works
    how_title: "എങ്ങനെ കൃഷി തുടങ്ങാം? (How It Works)",
    step1_num: "01",
    step1_title: "Spawn Order ചെയ്യൂ",
    step1_desc: "നിങ്ങൾക്ക് ആവശ്യമുള്ള ഇനവും അളവും വെബ്‌സൈറ്റിലൂടെയോ WhatsApp വഴിയോ ആവശ്യപ്പെടൂ.",
    step2_num: "02",
    step2_title: "Cultivation ആരംഭിക്കൂ",
    step2_desc: "ഞങ്ങളുടെ ഗൈഡ്ലൈൻസ് അനുസരിച്ച് വൈക്കോൽ/അരിപ്പൊടി മാധ്യമത്തിൽ ബെഡ്ഡ് തയാറാക്കൂ.",
    step3_num: "03",
    step3_title: "Technical Support നേടൂ",
    step3_desc: "വളർച്ചയുടെ ഓരോ ഘട്ടത്തിലും ചിത്രങ്ങൾ അയച്ച് സംശയങ്ങൾ നിവാരണം ചെയ്യൂ.",
    step4_num: "04",
    step4_title: "Harvest ചെയ്ത് Sell ചെയ്യൂ",
    step4_desc: "നല്ല തടിച്ച ഗുണമേന്മയുള്ള കൂണുകൾ വിളവെടുത്ത് പ്രാദേശിക വിപണിയിൽ വിറ്റഴിക്കൂ.",

    // MycoConnect
    community_title: "MycoConnect by MYCEFARMS",
    community_desc:
      "കൂൺ കർഷകർക്ക് ഒരുമിച്ച് പഠിക്കാനും അനുഭവങ്ങൾ പങ്കുവെക്കാനും വളരാനും ഒരു community.",
    community_stat1: "500+",
    community_stat1_txt: "സജീവ കർഷകർ",
    community_stat2: "24/7",
    community_stat2_txt: "സംശയ നിവാരണം",
    community_stat3: "100%",
    community_stat3_txt: "വിപണന സഹായം",
    community_cta: "Join MycoConnect",

    // Why MYCEFARMS
    why_title: "എന്തുകൊണ്ട് MYCEFARMS തിരഞ്ഞെടുക്കണം?",
    why_1_title: "Quality Focused",
    why_1_desc: "ഉയർന്ന ശുചിത്വത്തിലുള്ള ലാബുകളിൽ തയാറാക്കുന്ന സ്പോൺ മാത്രം നൽകുന്നു.",
    why_2_title: "Farmer Friendly",
    why_2_desc: "തുടക്കക്കാർക്കും അനുഭവസ്ഥർക്കും അനുയോജ്യമായ ന്യായമായ വിലയും ലളിതമായ ഭാഷയും.",
    why_3_title: "Reliable Spawn",
    why_3_desc: "ഏതു കാലാവസ്ഥയിലും കൃത്യമായി വളരുന്ന ഉയർന്ന വൈറ്റാലിറ്റിയുള്ള മൈസീലിയം.",
    why_4_title: "Technical Support",
    why_4_desc: "ഫോണിലൂടെയും വാട്സ്ആപ്പിലൂടെയും തത്സമയം കൃഷി സംശയങ്ങൾക്ക് മറുപടി.",
    why_5_title: "High-Tech Guidance",
    why_5_desc: "സെൻസറുകളും ഫോഗറുകളും ഉപയോഗിച്ചുള്ള മോഡേൺ ഫാം ടെക്നോളജി അറിവുകൾ.",
    why_6_title: "Complete Farming Solutions",
    why_6_desc: "സ്പോൺ, അവശ്യവസ്തുക്കൾ, ഷെഡ്ഡ് നിർമ്മാണം, സെയിൽസ് ഗൈഡൻസ് എന്നിവ ഒരിടത്ത്.",

    // Farmer Education
    edu_title: "കൂൺ കൃഷി പഠിക്കാം (Farmer Education)",
    edu_desc: "കൂൺ കൃഷി വിജയകരമാക്കാൻ അറിഞ്ഞിരിക്കേണ്ട പ്രധാന കാര്യങ്ങൾ വായിച്ചു മനസ്സിലാക്കൂ.",
    read_more: "കൂടുതൽ വായിക്കൂ",

    // Testimonials
    test_title: "കർഷകരുടെ അനുഭവങ്ങൾ (Farmer Testimonials)",
    test_subtitle: "MYCEFARMS സ്പോണും ഗൈഡൻസും ഉപയോഗിച്ച കേരളത്തിലെ വിജയകരമായ കൂൺ കർഷകർ.",

    // FAQ Section
    faq_title: "ചോദിക്കാൻ സാധ്യതയുള്ള സംശയങ്ങൾ (FAQ)",
    faq_q1: "Mushroom Spawn എന്താണ്?",
    faq_a1: "കൂൺ വളർത്താനായി ശാസ്ത്രീയമായി തയാറാക്കുന്ന വിത്തുകളെയാണ് Spawn എന്ന് പറയുന്നത്. ധാന്യമണികളിൽ പ്രത്യേക കൂൺ മൈസീലിയം പടർത്തിയാണ് സ്പോൺ നിർമ്മിക്കുന്നത്.",
    faq_q2: "Spawn എങ്ങനെ ഉപയോഗിക്കണം?",
    faq_a2: "അവിച്ചെടുത്ത വൈക്കോലിലോ മരപ്പൊടിയിലോ കൃത്യമായ ഈർപ്പത്തിലും ശുചിത്വത്തിലും സ്പോൺ വിതറി പോളിത്തീൻ കവറുകളിൽ (Beds) നിറച്ച് ഇരുണ്ട മുറിയിൽ സൂക്ഷിക്കുക.",
    faq_q3: "Spawn എത്ര ദിവസം സൂക്ഷിക്കാം?",
    faq_a3: "ഫ്രിഡ്ജിൽ (4°C - 8°C) 30 മുതൽ 45 ദിവസം വരെയും, സാധാരണ മുറിയിൽ 7 മുതൽ 10 ദിവസം വരെയും ഗുണമേന്മ നഷ്ടപ്പെടാതെ സൂക്ഷിക്കാം.",
    faq_q4: "Mushroom Farm തുടങ്ങാൻ എത്ര സ്ഥലം വേണം?",
    faq_a4: "100 sq.ft ഉള്ള ഒരു ചെറിയ മുറിയിൽ പോലും 100-150 കൂൺ ബെഡുകൾ വെച്ചു കൃഷി തുടങ്ങാം. വലിയ സ്ഥലമോ കെട്ടിടമോ ആദ്യഘട്ടത്തിൽ ആവശ്യമില്ല.",
    faq_q5: "Spare room ഉപയോഗിച്ച് farm തുടങ്ങാമോ?",
    faq_a5: "തീർച്ചയായും! വീടിനോട് ചേർന്നുള്ള ഒഴിവുള്ള മുറികൾ, സ്റ്റോർ റൂം, ഗാരേജ് എന്നിവ കാറ്റും വെളിച്ചവും നിയന്ത്രിച്ച് ഫാം ആയി മാറ്റിയെടുക്കാം.",
    faq_q6: "Temperature & Humidity എങ്ങനെ നിയന്ത്രിക്കാം?",
    faq_a6: "ഫോഗറുകൾ (Misting fogger), എക്സോസ്റ്റ് ഫാനുകൾ, നനഞ്ഞ ചാക്കുകൾ തൂക്കിയിടൽ എന്നിവ വഴി താപനില 25-28°C ലും ഈർപ്പം 80-90% ലും നിലനിർത്താം.",
    faq_q7: "Technical Support ലഭിക്കുമോ?",
    faq_a7: "അതെ, MYCEFARMS-ൽ നിന്നും സ്പോൺ വാങ്ങുന്നവർക്ക് വിതയ്ക്കൽ മുതൽ വിളവെടുപ്പ് വരെയുള്ള സംശയങ്ങൾക്ക് വാട്സ്ആപ്പ്/ഫോൺ വഴി നേരിട്ട് സപ്പോർട്ട് ലഭിക്കും.",
    faq_q8: "Spawn എങ്ങനെ order ചെയ്യാം?",
    faq_a8: "വെബ്‌സൈറ്റിലെ 'Spawn Order' ബട്ടൺ വഴിയോ അല്ലെങ്കിൽ നേരിട്ട് WhatsApp +91 7306307571 ലേക്ക് മെസ്സേജ് അയച്ചോ ഓഡർ ചെയ്യാം.",

    // Final CTA
    final_cta_title: "ഇന്ന് തന്നെ നിങ്ങളുടെ Mushroom Farming Journey ആരംഭിക്കൂ.",
    final_cta_sub: "ഗുണമേന്മയുള്ള Spawn മുതൽ Farm Setup & Technical Support വരെ — MYCEFARMS നിങ്ങളോടൊപ്പം.",
    final_cta_btn1: "Spawn Order ചെയ്യൂ",
    final_cta_btn2: "WhatsApp ചെയ്യൂ",
    final_cta_btn3: "Farm Consultation",

    // Footer
    footer_desc: "കേരളത്തിലെ ശാസ്ത്രീയ കൂൺ കൃഷിയുടെയും പ്രീമിയം സ്പോൺ ഉൽപാദനത്തിന്റെയും വിശ്വസ്ത പങ്കാളി.",
    footer_links: "ദ്രുത ലിങ്കുകൾ",
    footer_cats: "ഉൽപന്നങ്ങൾ",
    footer_contact: "ബന്ധപ്പെടുക",
    footer_rights: "All Rights Reserved. MYCEFARMS Kerala.",

    // Cart Drawer
    cart_title: "നിങ്ങളുടെ Shopping Cart",
    cart_empty: "നിങ്ങളുടെ കാർട്ടിൽ ഉൽപന്നങ്ങളൊന്നും ചേർത്തിട്ടില്ല.",
    cart_total: "ആകെ തുക",
    cart_checkout: "WhatsApp വഴി Order നൽകൂ",
    cart_customer_name: "പേര് (Name)",
    cart_customer_phone: "ഫോൺ നമ്പർ (Phone)",
    cart_customer_addr: "വിലാസം / ലൊക്കേഷൻ (Address)",
  },
  en: {
    // Nav & General
    nav_home: "Home",
    nav_products: "Products",
    nav_farming: "Mushroom Farming",
    nav_farm_setup: "Farm Setup",
    nav_support: "Technical Support",
    nav_community: "MycoConnect",
    nav_about: "About Us",
    nav_order_spawn: "Order Spawn Now",
    lang_ml: "മലയാളം",
    lang_en: "English",

    // Hero Section
    hero_title: "Scientific & Profitable Mushroom Cultivation for Kerala.",
    hero_subtitle:
      "High Quality Mushroom Spawn, Farm Supplies, High-Tech Farm Setup, Technical Support — Everything Kerala Mushroom Farmers Need in One Place.",
    hero_cta_spawn: "Book Spawn Now",
    hero_cta_whatsapp: "Connect via WhatsApp",
    hero_badge: "Kerala's Premium Mushroom Farm & Spawn Hub",

    // Trust Strip
    trust_1: "Quality Spawn",
    trust_1_sub: "99.8% Pure Mycelium",
    trust_2: "Farmer Support",
    trust_2_sub: "Direct Technical Guidance",
    trust_3: "Technical Guidance",
    trust_3_sub: "Scientific Step-by-Step",
    trust_4: "Complete Solutions",
    trust_4_sub: "From Spawn to Market",

    // Problem Section
    problem_title: "Are You Facing These Common Mushroom Farming Challenges?",
    problem_1_title: "Low Quality Spawn",
    problem_1_desc: "Slow mycelium run and weak spawn leads to poor yield and crop loss.",
    problem_2_title: "High Contamination",
    problem_2_desc: "Green mold and bacterial infections destroying growing beds.",
    problem_3_title: "Low Yield & Small Caps",
    problem_3_desc: "Lack of proper environmental balance reduces total harvest weight.",
    problem_4_title: "Temp & Humidity Struggles",
    problem_4_desc: "Difficulty maintaining 25-28°C and 85% RH in humid Kerala climate.",
    problem_5_title: "Lack of Technical Support",
    problem_5_desc: "No expert available to guide during sudden crop diseases or queries.",
    problem_6_title: "Farm Setup Confusion",
    problem_6_desc: "Not knowing how to cost-effectively build an indoor setup in limited space.",
    problem_formula: "Right Spawn + Right Farm Setup + Right Tech Support = High Yield",

    // Solutions Section
    solution_title: "MYCEFARMS: Complete End-to-End Solution For Your Farm",
    sol_1_title: "Premium Mushroom Spawn",
    sol_1_desc: "Lab-tested high-vitality master spawn bags for Oyster & Milky varieties.",
    sol_1_cta: "View Spawn",
    sol_2_title: "Mushroom Farm Supplies",
    sol_2_desc: "PP bags, Spawner rings, Thermometers, Foggers & Sanitizers.",
    sol_2_cta: "View Supplies",
    sol_3_title: "High-Tech Mushroom Farm Setup",
    sol_3_desc: "Automated climate-controlled small room & shed installations.",
    sol_3_cta: "Learn Farm Setup",
    sol_4_title: "Technical Support",
    sol_4_desc: "Direct voice/video consultation through your entire crop cycle.",
    sol_4_cta: "Get Support",
    sol_5_title: "MycoConnect Community",
    sol_5_desc: "Kerala's dedicated network of active mushroom growers & experts.",
    sol_5_cta: "Join Community",

    // Products Section
    products_title: "MYCEFARMS Products",
    products_subtitle: "Guaranteed Quality & Laboratory Standard Farming Inputs",
    cat_all: "All Products",
    cat_spawn: "Mushroom Spawn",
    cat_fresh: "Fresh Mushrooms",
    cat_supplies: "Farm Supplies",
    add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    qty: "Qty",
    price_per: "Price",

    // Featured Spawn Product
    featured_title: "Better Spawn. Better Start. Better Cultivation.",
    featured_subtitle: "Quality Spawn is the foundation of high yield mushroom farming.",
    featured_badge: "MYCEFARMS Master Spawn Bags",
    featured_desc:
      "Prepared under strict sterile laboratory conditions. High-vitality grain spawn with dense white mycelial network engineered for fast run and high flush weight.",
    featured_feat1: "100% Contamination-Free Lab Certified",
    featured_feat2: "30-40% Higher Flush Yield Potential",
    featured_feat3: "Thermal Resilience for Kerala Climate",

    // Fresh Mushrooms
    fresh_title: "Fresh Mushrooms — Naturally Grown. Purely Fresh.",
    fresh_subtitle: "Chemical-free, harvest-fresh oyster mushrooms straight from state-of-the-art farm.",

    // Farm Setup Section
    setup_title: "High-Tech Mushroom Farm in Small Spaces",
    setup_desc:
      "No large building required. Convert any spare room, store room, or small shed into a high-yielding climate controlled mushroom farm.",
    setup_f1: "Automated Temperature & Humidity Control",
    setup_f2: "Space-Efficient Vertical Racking System",
    setup_f3: "Micro-Fogging & Filtered Air Ventilation",
    setup_f4: "Low Energy Consumption & Easy Maintenance",
    setup_cta: "Farm Setup Consultation",

    // How It Works
    how_title: "How It Works",
    step1_num: "01",
    step1_title: "Order Spawn",
    step1_desc: "Select your desired variety and quantity via store or WhatsApp.",
    step2_num: "02",
    step2_title: "Start Cultivation",
    step2_desc: "Prepare substrate beds following our easy step-by-step guidelines.",
    step3_num: "03",
    step3_title: "Get Tech Support",
    step3_desc: "Share photos & ask expert guidance at every crop milestone.",
    step4_num: "04",
    step4_title: "Harvest & Sell",
    step4_desc: "Harvest thick fresh clusters and sell profitably in local markets.",

    // MycoConnect
    community_title: "MycoConnect by MYCEFARMS",
    community_desc:
      "A thriving community for Kerala farmers to learn together, share experiences, and scale.",
    community_stat1: "500+",
    community_stat1_txt: "Active Farmers",
    community_stat2: "24/7",
    community_stat2_txt: "Q&A Support",
    community_stat3: "100%",
    community_stat3_txt: "Market Connect",
    community_cta: "Join MycoConnect",

    // Why MYCEFARMS
    why_title: "Why Choose MYCEFARMS?",
    why_1_title: "Quality Focused",
    why_1_desc: "Only ultra-pure laboratory grade master spawn provided to growers.",
    why_2_title: "Farmer Friendly",
    why_2_desc: "Transparent pricing, practical advice, and simple accessible language.",
    why_3_title: "Reliable Spawn",
    why_3_desc: "Strong mycelial vigor engineered to thrive consistently in humid weather.",
    why_4_title: "Technical Support",
    why_4_desc: "Instant problem solving through phone and WhatsApp photo reviews.",
    why_5_title: "High-Tech Guidance",
    why_5_desc: "Modern farm automation advice utilizing humidity sensors & misting.",
    why_6_title: "Complete Farming Solutions",
    why_6_desc: "Everything from spawn supply to setup and market readiness.",

    // Farmer Education
    edu_title: "Farmer Education & Knowledge Hub",
    edu_desc: "Master key scientific practices to ensure high yield and zero crop loss.",
    read_more: "Read Article",

    // Testimonials
    test_title: "Farmer Success Stories",
    test_subtitle: "See how Kerala growers achieved profitable harvests with MYCEFARMS.",

    // FAQ Section
    faq_title: "Frequently Asked Questions",
    faq_q1: "What is Mushroom Spawn?",
    faq_a1: "Mushroom spawn is the sterile seed material containing pure mycelium cultured on cereal grains used to inoculate growing substrates.",
    faq_q2: "How to use Mushroom Spawn?",
    faq_a2: "Mix or layer spawn evenly into pasteurized paddy straw or sawdust substrate inside polypropylene bags under hygienic conditions.",
    faq_q3: "How long can Spawn be stored?",
    faq_a3: "Spawn can be stored for 30-45 days under refrigeration (4°C-8°C) or 7-10 days at room temperature in a clean cool area.",
    faq_q4: "How much space is needed for a farm?",
    faq_a4: "A small 100 sq.ft room can accommodate 100-150 bags vertically. No large land or complex infrastructure needed initially.",
    faq_q5: "Can I use a spare bedroom or store room?",
    faq_a5: "Yes! Any spare room, garage, or ventilated area can be easily retrofitted with basic racking and humidity control.",
    faq_q6: "How to manage Temperature & Humidity?",
    faq_a6: "Use automated mist foggers, exhaust fans, and wet jute curtains to maintain 25-28°C and 80-90% relative humidity.",
    faq_q7: "Will I get technical support after buying?",
    faq_a7: "Yes, every customer receives step-by-step guidance via phone/WhatsApp throughout incubation and fruiting stages.",
    faq_q8: "How to place an order for Spawn?",
    faq_a8: "Click 'Order Spawn' on website or message us directly on WhatsApp +91 7306307571.",

    // Final CTA
    final_cta_title: "Start Your Mushroom Farming Journey Today.",
    final_cta_sub: "From Premium Spawn to Farm Setup & Technical Guidance — MYCEFARMS is by your side.",
    final_cta_btn1: "Order Spawn Now",
    final_cta_btn2: "WhatsApp Us",
    final_cta_btn3: "Farm Consultation",

    // Footer
    footer_desc: "Kerala's trusted destination for scientific mushroom farming, premium spawn production, and automated farm setup.",
    footer_links: "Quick Links",
    footer_cats: "Categories",
    footer_contact: "Contact Info",
    footer_rights: "All Rights Reserved. MYCEFARMS Kerala.",

    // Cart Drawer
    cart_title: "Your Shopping Cart",
    cart_empty: "Your cart is currently empty.",
    cart_total: "Total Amount",
    cart_checkout: "Place Order via WhatsApp",
    cart_customer_name: "Customer Name",
    cart_customer_phone: "Phone Number",
    cart_customer_addr: "Address / Location",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ml");

  const t = (key: string): string => {
    return translations[language][key] || translations["ml"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
