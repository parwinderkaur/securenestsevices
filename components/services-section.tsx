import Link from "next/link";
import { Shield, Flame, Home, ShoppingBag, UserCheck, GraduationCap, Building2, Warehouse, Briefcase, HardHat } from "lucide-react";

const services = [
  { slug: "event-security", title: "Event Security Services", desc: "Ensuring safety and crowd control at events from concerts to conferences.", icon: Shield },
  { slug: "fire-marshal", title: "Fire Marshal Services", desc: "Ensuring fire safety compliance through inspections, prevention and response.", icon: Flame },
  { slug: "residential-services", title: "Residential Services", desc: "Providing safe, reliable solutions for homes including patrols and protection.", icon: Home },
  { slug: "retail-security", title: "Retail Security", desc: "Protecting retail spaces with surveillance, loss prevention and officers.", icon: ShoppingBag },
  { slug: "manned-guarding", title: "Manned Guarding Services", desc: "Professional security guards ensuring safety and monitoring premises.", icon: UserCheck },
  { slug: "educational-security", title: "Educational Security", desc: "Ensuring campus safety with trained guards and strict access control.", icon: GraduationCap },
  { slug: "hotel-concierge", title: "Hotel & Concierge Security", desc: "Discreet security and concierge support for a seamless guest experience.", icon: Building2 },
  { slug: "warehouse-security", title: "Warehouse Security", desc: "Protecting inventory with access control, surveillance and guards.", icon: Warehouse },
  { slug: "corporate-security", title: "Corporate Security Services", desc: "Protecting businesses with trained personnel and risk management.", icon: Briefcase },
  { slug: "construction-security", title: "Construction Site Security", desc: "Securing construction sites with guards to prevent theft and hazards.", icon: HardHat }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            Whatever the environment, we have a specialist team ready to protect it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link 
                key={i} 
                href={`/services/${s.slug}`}
                className="group bg-slate-50 border border-slate-200 p-7 rounded-xl hover:bg-white hover:border-teal-500 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-600 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <span className="text-teal-600 font-semibold text-sm mt-4 flex items-center gap-1 group-hover:translate-x-1 transition">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}