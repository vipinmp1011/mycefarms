"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { demoProducts } from "./ProductSection";
import { ShieldCheck, Sparkles, CheckCircle2, ShoppingBag, MessageCircle, Plus, Minus } from "lucide-react";

export const FeaturedProduct: React.FC = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [qty, setQty] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  const spawnProduct = demoProducts[0]; // MYCEFARMS Florida Oyster Spawn

  const handleAdd = () => {
    addToCart(spawnProduct, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsApp = () => {
    const phone = "917306307571";
    const text = encodeURIComponent(
      `🌱 *MYCEFARMS FEATURED SPAWN ORDER*\nProduct: *${spawnProduct.nameEn}* (${spawnProduct.nameMl})\nQuantity: ${qty} Kg\nPrice: ${qty} x ₹${spawnProduct.price} = ₹${spawnProduct.price * qty}\n\nPlease share delivery and payment instructions.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="spawn" className="py-16 sm:py-24 bg-gradient-to-b from-[#0B3D2E] to-[#134E35] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card */}
        <div className="bg-[#1F6F45]/30 rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#7CC043]/30 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Product Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border-2 border-[#7CC043]/40 shadow-xl bg-[#0B3D2E]">
                <Image
                  src="https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=1000&q=80"
                  alt="MYCEFARMS Premium Master Spawn Bag"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-transparent to-transparent opacity-80" />
                
                {/* Logo & Stock Badge */}
                <div className="absolute top-4 left-4 bg-[#0B3D2E]/90 px-3 py-1.5 rounded-lg border border-[#7CC043]/40 flex items-center gap-2">
                  <div className="relative w-24 h-6">
                    <Image src="/logo.png" alt="MYCEFARMS Logo" fill className="object-contain" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#7CC043] text-[#0B3D2E] font-black text-xs px-3 py-1.5 rounded-md shadow">
                  In Stock • Fresh Batch
                </div>
              </div>
            </div>

            {/* Right Product Details & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7CC043]/20 border border-[#7CC043]/40 text-[#7CC043] text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>{t("featured_badge")}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t("featured_title")}
              </h2>

              <p className="text-lg text-[#7CC043] font-bold">
                “{t("featured_subtitle")}”
              </p>

              <p className="text-sm sm:text-base text-[#DDE8C7] leading-relaxed">
                {t("featured_desc")}
              </p>

              {/* Feature Points */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#7CC043] shrink-0" />
                  <span>{t("featured_feat1")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#7CC043] shrink-0" />
                  <span>{t("featured_feat2")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#7CC043] shrink-0" />
                  <span>{t("featured_feat3")}</span>
                </div>
              </div>

              {/* Price & Quantity Selector */}
              <div className="pt-4 border-t border-[#7CC043]/20 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-300 block">Offer Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#7CC043]">₹{spawnProduct.price}</span>
                    <span className="text-sm text-gray-400">/ 1 Kg Bag</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#0B3D2E] p-2 rounded-xl border border-[#7CC043]/30">
                  <span className="text-xs font-bold text-gray-300 pl-2">Quantity:</span>
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-[#1F6F45] text-white flex items-center justify-center font-bold hover:bg-[#7CC043] hover:text-[#0B3D2E]"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-extrabold text-base w-6 text-center text-white">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-[#1F6F45] text-white flex items-center justify-center font-bold hover:bg-[#7CC043] hover:text-[#0B3D2E]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  onClick={handleAdd}
                  className="py-4 px-6 rounded-xl font-extrabold text-sm bg-[#7CC043] hover:bg-[#8bd14e] text-[#0B3D2E] shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{added ? "Added to Cart!" : t("add_to_cart")}</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="py-4 px-6 rounded-xl font-extrabold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Order</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
