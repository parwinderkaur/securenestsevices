"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, FileText, ShieldCheck } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    tag: "SIA LICENSED & FULLY INSURED",
    title: "Welcome to Secure Nest Services",
    description: "At Secure Nest Services, we provide reliable and tailored security solutions nationwide, designed to meet the unique needs of each client. Our experienced team specializes in delivering high-quality protection.",
    // 1. Professional Uniformed Security Officer on Duty
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    tag: "PROTECTION OF PREMISES COMPLIANT",
    title: "Protection You Can Trust",
    description: "Secure Nest Services is committed to helping clients meet the requirements of the Protection of Premises Bill while keeping their operations secure and resilient with proactive response planning.",
    // 2. Security Guard Patrolling Commercial Street/Building
    image: "https://images.unsplash.com/photo-1652739758426-56a564265f9e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    tag: "PROACTIVE & DEPENDABLE",
    title: "Reliable. Tailored. Ready.",
    description: "We don't believe in generic security plans. We design bespoke strategies that match your unique risks and operational needs whether protecting key personnel or vital infrastructure.",
    // 3. Security Guard Patrol & Response Unit
    image: "https://images.unsplash.com/photo-1550091345-8c561a255eca?q=80&w=2000&auto=format&fit=crop"
  }
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  // 5 Second Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[420px] md:h-[460px] overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Background Images - Full Bright & Clear (NO Dark Filter) */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              // Bilkul natural bright photo (sirf 15-20% halka sa tint)
              filter: "brightness(0.85) contrast(1.05)"
            }}
          />
          {/* Subtle vignette sirf text ko pop karne ke liye */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Compact Content (Zero Wasted Space) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div 
          key={current} 
          className="transition-all duration-500 ease-out space-y-2.5"
        >
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 bg-slate-900/85 border border-teal-400/60 text-teal-300 text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              {heroSlides[current].tag}
            </span>
          </div>

          {/* Title */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight"
            style={{ textShadow: "0 3px 14px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)" }}
          >
            {heroSlides[current].title}
          </h1>

          {/* Description */}
          <p 
            className="text-white text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,1)" }}
          >
            {heroSlides[current].description}
          </p>

          {/* Compact Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-2.5 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-xs md:text-sm"
            >
              <FileText className="w-4 h-4" /> Request a Quote
            </Link>
            <a
              href="tel:+447411523527"
              className="bg-slate-900/85 hover:bg-slate-800 border border-slate-600 text-white font-semibold px-5 py-2.5 rounded-lg backdrop-blur-md shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-xs md:text-sm"
            >
              <Phone className="w-4 h-4 text-teal-400" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Slide Dots (Compact) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? "w-7 bg-teal-400 shadow-md shadow-teal-400/80" : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}