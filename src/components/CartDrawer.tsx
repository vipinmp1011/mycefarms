"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, User, Phone, MapPin } from "lucide-react";

export const CartDrawer: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    customerInfo,
    setCustomerInfo,
    checkoutViaWhatsApp,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-[#1A1A1A]">
          
          {/* Header */}
          <div className="p-6 bg-[#0B3D2E] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#7CC043]" />
              <h3 className="font-extrabold text-lg text-white">
                {t("cart_title")}
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-lg text-gray-300 hover:text-white hover:bg-[#1F6F45]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {t("cart_empty")}
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-[#F6F8F3] rounded-2xl border border-gray-200 items-center justify-between"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-200 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.nameEn}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#0B3D2E] line-clamp-1">
                      {language === "ml" ? item.nameMl : item.nameEn}
                    </h4>
                    <p className="text-xs font-bold text-[#1F6F45] mt-0.5">
                      ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-md bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-700 hover:bg-gray-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-extrabold text-[#0B3D2E] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-md bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-700 hover:bg-gray-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Checkout & Customer Details Form */}
          {cart.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
              
              {/* Customer Input Fields */}
              <div className="space-y-2 text-xs">
                <div>
                  <label className="font-bold text-gray-700 block mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#1F6F45]" />
                    <span>{t("cart_customer_name")}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Suresh Kumar"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full p-2.5 rounded-xl border border-gray-300 bg-white text-xs focus:outline-none focus:border-[#7CC043]"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#1F6F45]" />
                    <span>{t("cart_customer_phone")}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 9876543210"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full p-2.5 rounded-xl border border-gray-300 bg-white text-xs focus:outline-none focus:border-[#7CC043]"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1F6F45]" />
                    <span>{t("cart_customer_addr")}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Thrissur, Kerala"
                    value={customerInfo.address}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({ ...prev, address: e.target.value }))
                    }
                    className="w-full p-2.5 rounded-xl border border-gray-300 bg-white text-xs focus:outline-none focus:border-[#7CC043]"
                  />
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <span className="font-extrabold text-sm text-gray-700">
                  {t("cart_total")}
                </span>
                <span className="font-black text-2xl text-[#1F6F45]">
                  ₹{subtotal}
                </span>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                onClick={checkoutViaWhatsApp}
                className="w-full py-4 rounded-xl font-extrabold text-base bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("cart_checkout")}</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
