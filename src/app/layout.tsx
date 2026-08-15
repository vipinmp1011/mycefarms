import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "MYCEFARMS | Premium Mushroom Farming & Spawn Hub Kerala",
  description:
    "ഗുണമേന്മയുള്ള Mushroom Spawn, Farm Supplies, High-Tech Farm Setup, Technical Support — കൂൺ കർഷകർക്ക് ആവശ്യമായതെല്ലാം ഒരിടത്ത്.",
  keywords: [
    "MYCEFARMS",
    "Mushroom Spawn Kerala",
    "Oyster Mushroom Spawn",
    "Mushroom Farming Kerala",
    "High Tech Mushroom Farm Setup",
    "Mushroom Technical Support",
    "MycoConnect Kerala",
    "കൂൺ കൃഷി",
    "കൂൺ വിത്ത്",
  ],
  openGraph: {
    title: "MYCEFARMS | Premium Mushroom Farming & Spawn Production Kerala",
    description:
      "Scientific & Profitable Mushroom Farming in Kerala. Quality Lab Tested Spawn, Supplies, and Automated Setup.",
    images: ["/logo.png"],
    locale: "ml_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ml">
      <body className="antialiased bg-[#F6F8F3] text-[#1A1A1A] selection:bg-[#7CC043] selection:text-[#0B3D2E]">
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
