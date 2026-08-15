"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { X, Send, Cpu, User, Phone, MapPin, MessageSquare, CheckCircle } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Thrissur",
    topic: "Farm Setup",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "919876543210";
    const text = encodeURIComponent(
      `🌱 *MYCEFARMS CONSULTATION REQUEST*\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📍 District: ${formData.district}\n💡 Topic: ${formData.topic}\n📝 Notes: ${formData.notes || "N/A"}\n\nPlease contact me for technical consultation.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Box */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-gray-200 text-[#1A1A1A]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-[#7CC043]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B3D2E]">
              Consultation Request Sent!
            </h3>
            <p className="text-sm text-gray-600">
              Our technical team will contact you shortly on WhatsApp.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Header & Logo */}
            <div className="text-center space-y-2 pb-2">
              <div className="relative w-36 h-10 mx-auto">
                <Image src="/logo.png" alt="MYCEFARMS Logo" fill className="object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B3D2E]">
                Farm Setup & Technical Support
              </h3>
              <p className="text-xs text-gray-500">
                കൺസൾട്ടേഷനായി താഴെ പറയുന്ന വിവരങ്ങൾ നൽകൂ
              </p>
            </div>

            {/* Inputs */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#1F6F45]" />
                <span>പേര് (Full Name) *</span>
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Rahul Nair"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#7CC043]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#1F6F45]" />
                <span>WhatsApp Phone Number *</span>
              </label>
              <input
                required
                type="tel"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#7CC043]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#1F6F45]" />
                  <span>ജില്ല (District)</span>
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:border-[#7CC043]"
                >
                  {["Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"].map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-[#1F6F45]" />
                  <span>ആവശ്യം (Requirement)</span>
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:border-[#7CC043]"
                >
                  <option value="Farm Setup">Small Room Farm Setup</option>
                  <option value="Spawn Bulk Order">Spawn Bulk Order</option>
                  <option value="Technical Guidance">Technical Support</option>
                  <option value="MycoConnect">MycoConnect Community</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1 flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-[#1F6F45]" />
                <span>കുറിപ്പ് (Optional Notes)</span>
              </label>
              <textarea
                rows={2}
                placeholder="ആവശ്യമുള്ള സ്ഥലത്തിന്റെ വിവരങ്ങൾ അല്ലെങ്കിൽ സംശയങ്ങൾ..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#7CC043]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-extrabold text-base bg-[#7CC043] hover:bg-[#8cd35b] text-[#0B3D2E] shadow-xl flex items-center justify-center gap-2 transition-all mt-2"
            >
              <Send className="w-5 h-5" />
              <span>Submit Consultation Request</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
