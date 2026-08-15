"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ProductSection } from "@/components/ProductSection";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { FreshMushrooms } from "@/components/FreshMushrooms";
import { FarmSetup } from "@/components/FarmSetup";
import { HowItWorks } from "@/components/HowItWorks";
import { MycoConnect } from "@/components/MycoConnect";
import { WhyMycefarms } from "@/components/WhyMycefarms";
import { FarmerEducation, Article } from "@/components/FarmerEducation";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ArticleModal } from "@/components/ArticleModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <main className="min-h-screen bg-[#F6F8F3] text-[#1A1A1A] pb-16 lg:pb-0">
      {/* Sticky Top Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trust Pillars Strip */}
      <TrustStrip />

      {/* Farmer Problem Identification Section */}
      <ProblemSection />

      {/* MYCEFARMS Complete Solution Section */}
      <SolutionSection onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* E-Commerce Storefront Section */}
      <ProductSection />

      {/* Featured Spawn Highlight Section */}
      <FeaturedProduct />

      {/* Fresh Mushrooms Section */}
      <FreshMushrooms />

      {/* Small Space High-Tech Farm Setup Section */}
      <FarmSetup onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* How It Works 4-Step Process */}
      <HowItWorks />

      {/* MycoConnect Farmer Network Community Section */}
      <MycoConnect onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Why MYCEFARMS 6 Pillars Section */}
      <WhyMycefarms />

      {/* Farmer Education Knowledge Hub */}
      <FarmerEducation onOpenArticle={(art: Article) => setSelectedArticle(art)} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Accordion FAQ Section */}
      <FAQSection />

      {/* Final Conversion CTA Banner */}
      <FinalCTA onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Lead Generation Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Mobile Sticky Bottom CTA */}
      <MobileStickyCTA />

      {/* Floating Quick WhatsApp Helpline */}
      <FloatingWhatsApp />
    </main>
  );
}
