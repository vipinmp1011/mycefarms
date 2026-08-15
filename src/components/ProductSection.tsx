"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart, ProductItem } from "@/context/CartContext";
import { ShoppingBag, MessageCircle, Plus, Minus, Check, Star } from "lucide-react";

/**
 * MYCEFARMS DEMO PRODUCTS CATALOG
 * ----------------------------------------------------
 * NOTE: These are demo product items with realistic prices and weights.
 * Replace this array with your live API/database items when ready.
 */
export const demoProducts: ProductItem[] = [
  {
    id: "sp-1",
    nameMl: "MYCEFARMS ഫ്ലോറിഡ ഒയിസ്റ്റർ സ്പോൺ",
    nameEn: "MYCEFARMS Florida Oyster Spawn",
    category: "spawn",
    price: 120,
    weight: "1 Kg Pack",
    image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "ഉയർന്ന പ്രതിരോധശേഷിയുള്ള വേഗത്തിൽ വളരുന്ന ഫ്ലോറിഡ വെളുത്ത ഒയിസ്റ്റർ സ്പോൺ.",
    shortDescEn: "High-vitality fast mycelium run white Florida Oyster master spawn bag.",
    isDemo: true,
  },
  {
    id: "sp-2",
    nameMl: "MYCEFARMS മിൽക്കി മഷ്‌റൂം സ്പോൺ",
    nameEn: "MYCEFARMS Milky Mushroom Spawn",
    category: "spawn",
    price: 140,
    weight: "1 Kg Pack",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "കേരളത്തിലെ വേനൽക്കാല ചൂടിന് അനുയോജ്യമായ തടിയുള്ള മിൽക്കി കൂൺ വിത്ത്.",
    shortDescEn: "Heat-tolerant thick-stem Milky Mushroom (Calocybe indica) master spawn.",
    isDemo: true,
  },
  {
    id: "sp-3",
    nameMl: "MYCEFARMS ബ്ലൂ ഒയിസ്റ്റർ സ്പോൺ",
    nameEn: "MYCEFARMS Blue Oyster Spawn",
    category: "spawn",
    price: 150,
    weight: "1 Kg Pack",
    image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "രുചികരവും ആകർഷകവുമായ നീല ഒയിസ്റ്റർ കൂൺ സ്പോൺ മാസ്റ്റർ ബാഗ്.",
    shortDescEn: "Gourmet dark blue strain Oyster spawn with thick fruiting clusters.",
    isDemo: true,
  },
  {
    id: "fr-1",
    nameMl: "ഫ്രഷ് ഓർഗാനിക് ഒയിസ്റ്റർ മഷ്‌റൂം",
    nameEn: "Fresh Organic Oyster Mushrooms",
    category: "fresh",
    price: 90,
    weight: "250g Pack",
    image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "ഫാമിൽ നിന്ന് തത്സമയം വിളവെടുത്ത വിഷരഹിത ഫ്രഷ് ഒയിസ്റ്റർ കൂണുകൾ.",
    shortDescEn: "Naturally farm-harvested chemical-free fresh oyster mushrooms.",
    isDemo: true,
  },
  {
    id: "fr-2",
    nameMl: "ഫ്രഷ് ഓർഗാനിക് മിൽക്കി മഷ്‌റൂം",
    nameEn: "Fresh Organic Milky Mushrooms",
    category: "fresh",
    price: 110,
    weight: "250g Pack",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "നല്ല തടിച്ച ഉറപ്പുള്ള ഫ്രഷ് മിൽക്കി കൂണുകൾ.",
    shortDescEn: "Firm, thick, premium fresh Milky mushrooms harvested daily.",
    isDemo: true,
  },
  {
    id: "sup-1",
    nameMl: "PP കൂൺ കൃഷി കവറുകൾ (Filter Ventilation)",
    nameEn: "PP Cultivation Bags (Filter Vent)",
    category: "supplies",
    price: 280,
    weight: "Pack of 100 Bags",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "ഹൈ ആട്ടോക്ലേവ് താപനിലയെ പ്രതിരോധിക്കുന്ന ഫിൽട്ടർ വെന്റിലേഷൻ PP കവറുകൾ.",
    shortDescEn: "High-temperature resistant PP substrate bags with micro-filter patch.",
    isDemo: true,
  },
  {
    id: "sup-2",
    nameMl: "ഡിജിറ്റൽ Thermo-Hygrometer Meter",
    nameEn: "Digital Thermo-Hygrometer Meter",
    category: "supplies",
    price: 450,
    weight: "1 Piece (Sensor Probe)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "മുറിയിലെ താപനിലയും ഈർപ്പവും കൃത്യമായി അളക്കുന്ന ഡിജിറ്റൽ മീറ്റർ.",
    shortDescEn: "High-precision digital temperature & humidity meter for farm rooms.",
    isDemo: true,
  },
  {
    id: "sup-3",
    nameMl: "ഹൈ പ്രെഷർ Misting Fogger Nozzle Set",
    nameEn: "High Pressure Micro Misting Fogger Set",
    category: "supplies",
    price: 850,
    weight: "Set of 5 Nozzles",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    shortDescMl: "മഷ്‌റൂം ഫാമുകളിൽ 85-90% humidity നിലനിർത്താൻ അനുയോജ്യമായ ഫോഗറുകൾ.",
    shortDescEn: "Ultra-fine humidity misting nozzles designed for indoor mushroom climate.",
    isDemo: true,
  },
];

export const ProductSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? demoProducts
      : demoProducts.filter((p) => p.category === activeCategory);

  const getQty = (id: string) => quantities[id] || 1;

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = current + delta;
      return { ...prev, [id]: next > 0 ? next : 1 };
    });
  };

  const handleAddToCart = (product: ProductItem) => {
    const qty = getQty(product.id);
    addToCart(product, qty);
    setAddedNotice(product.id);
    setTimeout(() => setAddedNotice(null), 2000);
  };

  const handleDirectWhatsApp = (product: ProductItem) => {
    const qty = getQty(product.id);
    const phone = "919876543210";
    const text = encodeURIComponent(
      `🌱 *MYCEFARMS QUICK PRODUCT ORDER*\nProduct: *${product.nameEn}* (${product.nameMl})\nQty: ${qty} x ₹${product.price}\nTotal: ₹${product.price * qty}\n\nPlease share payment and delivery details.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F6F8F3] relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#7CC043] bg-[#0B3D2E] px-4 py-1.5 rounded-full inline-block mb-3 shadow">
            E-Commerce Store
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B3D2E] tracking-tight">
            {t("products_title")}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            {t("products_subtitle")}
          </p>
        </div>

        {/* Category Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: "all", labelKey: "cat_all" },
            { id: "spawn", labelKey: "cat_spawn" },
            { id: "fresh", labelKey: "cat_fresh" },
            { id: "supplies", labelKey: "cat_supplies" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeCategory === tab.id
                  ? "bg-[#0B3D2E] text-[#7CC043] shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const currentQty = getQty(product.id);
            const isAdded = addedNotice === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Badge Container */}
                <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.nameEn}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B3D2E]/80 backdrop-blur-md text-[#7CC043] font-bold text-xs px-3 py-1 rounded-full border border-[#7CC043]/30">
                    {product.weight}
                  </div>
                  {product.category === "spawn" && (
                    <div className="absolute top-3 right-3 bg-[#7CC043] text-[#0B3D2E] font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md shadow">
                      Lab Tested
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#0B3D2E] line-clamp-1">
                      {language === "ml" ? product.nameMl : product.nameEn}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {language === "ml" ? product.shortDescMl : product.shortDescEn}
                    </p>
                  </div>

                  {/* Price & Rating */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 block">{t("price_per")}</span>
                      <span className="text-2xl font-black text-[#1F6F45]">
                        ₹{product.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg border border-yellow-200 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-500" />
                      <span>4.9</span>
                    </div>
                  </div>

                  {/* Interactive Quantity Selector */}
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl border border-gray-200">
                    <span className="text-xs font-semibold text-gray-600 pl-2">
                      {t("qty")}:
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="w-7 h-7 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-sm text-[#0B3D2E] w-6 text-center">
                        {currentQty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Actions: Add to Cart & Buy Now WhatsApp */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
                        isAdded
                          ? "bg-green-600 text-white"
                          : "bg-[#0B3D2E] hover:bg-[#1F6F45] text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 text-[#7CC043]" />
                          <span>{t("add_to_cart")}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleDirectWhatsApp(product)}
                      className="w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-1 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{t("buy_now")}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
