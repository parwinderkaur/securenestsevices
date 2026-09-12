import Link from "next/link";
import { Phone, Mail, MapPin, Shield, ArrowRight } from "lucide-react";

export function SiteFooter() {
  const services = [
    { name: "Fire Marshal Services", href: "/services/fire-marshal" },
    { name: "Residential Services", href: "/services/residential-services" },
    { name: "Event Security Services", href: "/services/event-security" },
    { name: "Retail Security", href: "/services/retail-security" },
    { name: "Manned Guarding Services", href: "/services/manned-guarding" },
    { name: "Construction Site Security", href: "/services/construction-security" },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Only Logo (No extra text) */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <img 
              src="/logo.png" 
              alt="Secure Nest Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed" style={{ color: "var(--color-slate-400) !important" }}>
            Professional SIA licensed & fully insured security solutions delivering high-quality protection nationwide across the UK.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-teal-400 font-medium">
            <Shield className="w-3.5 h-3.5 text-teal-400" /> Company No: 17122683
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="!text-white font-bold text-base tracking-wider uppercase mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span> Our Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.name}>
                <Link href={s.href} className="text-slate-400 hover:text-teal-400 hover:translate-x-1.5 transition-all inline-flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" /> {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="!text-white font-bold text-base tracking-wider uppercase mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span> Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="text-slate-400 hover:text-teal-400 transition inline-flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400" /> About Us</Link></li>
            <li><Link href="/careers" className="text-slate-400 hover:text-teal-400 transition inline-flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400" /> Careers</Link></li>
            <li><Link href="/events" className="text-slate-400 hover:text-teal-400 transition inline-flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400" /> Our Events</Link></li>
            <li><a href="https://www.mi5.gov.uk/threats-and-advice/terrorism-threat-levels" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition inline-flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400" /> Threat & Guidance</a></li>
            <li><Link href="/contact" className="text-slate-400 hover:text-teal-400 transition inline-flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-teal-400" /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="!text-white font-bold text-base tracking-wider uppercase mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span> Get In Touch
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
              <span>2A Thortan Lodge Road Huddersfield, HD1 3JQ</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <a href="tel:+447411523527" className="hover:text-teal-400 font-bold transition">+44 7411 523527</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" />
              <a href="mailto:info@securenestservices.com" className="hover:text-teal-400 transition">info@securenestservices.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* 3. SOLID DARK COPYRIGHT BOTTOM AREA */}
      <div className="border-t border-slate-800 bg-black py-4 px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="!text-slate-400">© {new Date().getFullYear()} Secure Nest Services. All rights reserved.</p>
          <span className="text-teal-400 font-medium">SIA Licensed & Vetted UK Personnel • Protection You Can Trust</span>
        </div>
      </div>
    </footer>
  );
}