"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Article } from "./FarmerEducation";
import { X, BookOpen, Clock, CheckCircle } from "lucide-react";

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const { language } = useLanguage();

  if (!article) return null;

  const title = language === "ml" ? article.titleMl : article.titleEn;
  const content = language === "ml" ? article.contentMl : article.contentEn;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 border border-gray-200 text-[#1A1A1A]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#0B3D2E] bg-[#DDE8C7] px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-[#0B3D2E] leading-tight">
            {title}
          </h3>

          <div className="space-y-4 pt-2 border-t border-gray-100 text-sm sm:text-base text-gray-700 leading-relaxed">
            {content.map((paragraph, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#F6F8F3] p-4 rounded-xl border border-gray-200">
                <CheckCircle className="w-5 h-5 text-[#7CC043] shrink-0 mt-0.5" />
                <p>{paragraph}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-bold bg-[#0B3D2E] text-white hover:bg-[#1F6F45] text-sm"
            >
              Close Guide
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
