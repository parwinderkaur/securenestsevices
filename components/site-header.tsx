"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, ChevronDown, Menu, X, ExternalLink, ShieldAlert, ArrowRight, Shield } from "lucide-react";

const services = [
  { name: "Fire Marshal Services", href: "/services/fire-marshal" },
  { name: "Residential Services", href: "/services/residential-services" },
  { name: "Event Security Services", href: "/services/event-security" },
  { name: "Retail Security", href: "/services/retail-security" },
  { name: "Manned Guarding Services", href: "/services/manned-guarding" },
  { name: "Educational Security", href: "/services/educational-security" },
  { name: "Hotel & Concierge Security", href: "/services/hotel-concierge" },
  { name: "Warehouse Security", href: "/services/warehouse-security" },
  { name: "Corporate Security Services", href: "/services/corporate-security" },
  { name: "Construction Site Security", href: "/services/construction-security" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isServicesActive = pathname.startsWith("/services");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/careers" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm" suppressHydrationWarning>
      {/* 1. TOP BAR */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 md:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6 text-[11px] sm:text-xs">
            <a href="tel:+447411523527" className="flex items-center gap-1.5 text-slate-200 hover:text-teal-400 font-medium transition">
              <Phone className="w-3.5 h-3.5 text-teal-400" /> +44 7411 523527
            </a>
            <a href="mailto:info@securenestservices.com" className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-teal-400 font-medium transition">
              <Mail className="w-3.5 h-3.5 text-teal-400" /> info@securenestservices.com
            </a>
          </div>

          <a
            href="https://www.mi5.gov.uk/threats-and-advice/terrorism-threat-levels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 hover:text-amber-200 px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide transition-all shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <ShieldAlert className="w-3 h-3 text-amber-400" />
            <span>Threat &amp; Guidance (MI5)</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center py-1">
          <img 
            src="/logo.png" 
            alt="Secure Nest Logo" 
            className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform" 
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.slice(0, 2).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                  isActive
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-slate-700 hover:text-teal-600 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Services Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 px-4 py-2 rounded-md font-semibold text-sm transition ${
              isServicesActive 
                ? "bg-teal-600 text-white shadow-md" 
                : "text-slate-700 hover:text-teal-600 hover:bg-slate-100"
            }`}>
              Our Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:grid grid-cols-2 gap-1 w-[450px] p-3 bg-white border border-slate-200 rounded-xl shadow-xl z-50">
              {services.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className={`p-2.5 rounded-lg text-xs font-medium transition ${
                    pathname === s.href ? "bg-teal-100 text-teal-900 font-bold" : "text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(2).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md font-semibold text-sm transition-all ${
                  isActive
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-slate-700 hover:text-teal-600 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="tel:+447411523527"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-xs sm:text-sm"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2.5 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-100 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-teal-600" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. PREMIUM MOBILE DRAWER (Clean App-Like Design) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-50 border-b border-slate-200 shadow-2xl px-4 py-5 space-y-2 max-h-[80vh] overflow-y-auto pb-24">
          
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              pathname === "/"
                ? "!bg-teal-600 text-white shadow-md shadow-teal-600/30"
                : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>Home</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>

          {/* About Us */}
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              pathname === "/about"
                ? "!bg-teal-600 text-white shadow-md shadow-teal-600/30"
                : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>About Us</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>

          {/* Services Accordion Card */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex justify-between items-center w-full px-4 py-3 font-bold text-sm transition-all ${
                isServicesActive ? "bg-teal-50 text-teal-800" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600" /> Our Services (10)
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-teal-600" : "text-slate-400"}`} />
            </button>

            {mobileServicesOpen && (
              <div className="bg-slate-50 border-t border-slate-100 p-2 space-y-1">
                {services.map((s) => {
                  const isCurrent = pathname === s.href;
                  return (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition ${
                        isCurrent
                          ? "bg-teal-600 text-white shadow-xs"
                          : "text-slate-700 hover:bg-white hover:text-teal-600"
                      }`}
                    >
                      <span>• {s.name}</span>
                      {isCurrent && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Active</span>}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Our Events */}
          <Link
            href="/events"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              pathname === "/events"
                ? "!bg-teal-600 text-white shadow-md shadow-teal-600/30"
                : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>Our Events</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              pathname === "/contact"
                ? "!bg-teal-600 text-white shadow-md shadow-teal-600/30"
                : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>

          {/* Career */}
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              pathname === "/careers"
                ? "!bg-teal-600 text-white shadow-md shadow-teal-600/30"
                : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>Career (We're Hiring)</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>

        </div>
      )}
    </header>
  );
}