"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ProductItem {
  id: string;
  nameMl: string;
  nameEn: string;
  category: "spawn" | "fresh" | "supplies";
  price: number;
  weight: string;
  image: string;
  shortDescMl: string;
  shortDescEn: string;
  isDemo?: boolean;
}

export interface CartItem extends ProductItem {
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  customerInfo: CustomerInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  checkoutViaWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    phone: "",
    address: "",
  });

  // Load saved cart from localStorage on client side
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mycefarms_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("mycefarms_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart]);

  const addToCart = (product: ProductItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkoutViaWhatsApp = () => {
    const phoneNumber = "917306307571"; // Official MYCEFARMS WhatsApp business helpline demo number
    let text = `🌱 *MYCEFARMS NEW ORDER REQUEST*\n\n`;
    text += `*Customer Details:*\n`;
    text += `👤 Name: ${customerInfo.name || "Customer"}\n`;
    text += `📞 Phone: ${customerInfo.phone || "Not provided"}\n`;
    text += `📍 Address: ${customerInfo.address || "Kerala"}\n\n`;

    text += `*Items Ordered:*\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.nameEn}* (${item.nameMl})\n   Qty: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}\n`;
    });

    text += `\n💰 *Total Amount: ₹${subtotal}*\n\n`;
    text += `_Please confirm my order and share delivery / payment details. Thank you!_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        customerInfo,
        setCustomerInfo,
        checkoutViaWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
