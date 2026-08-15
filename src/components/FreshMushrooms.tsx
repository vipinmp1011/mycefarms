"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { demoProducts } from "./ProductSection";
import { ShoppingBag, MessageCircle, Leaf, Sparkles } from "lucide-react";

export const FreshMushrooms: React.FC = () => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const freshProducts = demoProducts.filter((p) => p.category === "fresh");

  const handleWhatsApp = (productName: string, price: number) => {
    const phone = "917306307571";
    const text = encodeURIComponent(
      `🌱 *MYCEFARMS FRESH MUSHROOM ORDER*\nProduct: *${productName}*\nPrice: ₹${price} / 250g\n\nPlease check availability and delivery details.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Farm Harvest Fresh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D2E]">
            {t("fresh_title")}
          </h2>
          <p className="mt-3 text-base text-gray-600">
            {t("fresh_subtitle")}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {freshProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#F6F8F3] rounded-3xl p-6 border border-gray-200 hover:border-[#7CC043] transition-all hover:shadow-xl flex flex-col sm:flex-row gap-6 items-center"
            >
              {/* Product Image */}
              <div className="relative h-48 w-full sm:w-48 rounded-2xl overflow-hidden shrink-0 bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.nameEn}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#0B3D2E] text-[#7CC043] font-bold text-[10px] px-2 py-0.5 rounded">
                  {product.weight}
                </div>
              </div>

              {/* Details & Action */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                <h3 className="text-xl font-extrabold text-[#0B3D2E]">
                  {language === "ml" ? product.nameMl : product.nameEn}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {language === "ml" ? product.shortDescMl : product.shortDescEn}
                </p>

                <div className="pt-2 flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-2xl font-black text-[#1F6F45]">₹{product.price}</span>
                  <span className="text-xs text-gray-500">/ 250g Pack</span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0B3D2E] text-white font-bold text-xs hover:bg-[#1F6F45] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#7CC043]" />
                    <span>{t("add_to_cart")}</span>
                  </button>

                  <button
                    onClick={() => handleWhatsApp(product.nameEn, product.price)}
                    className="py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20bd5a] flex items-center justify-center gap-1 shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
