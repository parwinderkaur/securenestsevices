"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Fire Marshal Services",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client ka WhatsApp Number
    const whatsappNumber = "447411523527";

    // Formatted WhatsApp Message
    const text = `*New Website Enquiry - Secure Nest Services*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Service Required:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;

    // WhatsApp open karega (New Tab)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-slate-900">
      <h3 className="text-xl font-bold text-slate-900 mb-1">Send an Enquiry via WhatsApp</h3>
      <p className="text-xs text-slate-500 mb-4">Fill out the details below to message us directly on WhatsApp.</p>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
        <input
          type="text"
          required
          placeholder="e.g. John Smith"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-teal-600 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="+44 7123 456789"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-teal-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-teal-600 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required</label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-teal-600 focus:outline-none bg-white"
        >
          <option value="Fire Marshal Services">Fire Marshal Services</option>
          <option value="Residential Services">Residential Services</option>
          <option value="Event Security Services">Event Security Services</option>
          <option value="Retail Security">Retail Security</option>
          <option value="Manned Guarding Services">Manned Guarding Services</option>
          <option value="Educational Security">Educational Security</option>
          <option value="Hotel & Concierge Security">Hotel & Concierge Security</option>
          <option value="Warehouse Security">Warehouse Security</option>
          <option value="Corporate Security Services">Corporate Security Services</option>
          <option value="Construction Site Security">Construction Site Security</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Requirements</label>
        <textarea
          rows={4}
          required
          placeholder="Tell us about your property, dates, or security requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:border-teal-600 focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold p-3.5 rounded-lg shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
      >
        <Send className="w-4 h-4" /> Send Enquiry on WhatsApp
      </button>
    </form>
  );
}

// Named aur Default dono export diye hain taaki kabhi error na aaye
export default QuoteForm;