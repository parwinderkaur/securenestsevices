import { ShieldCheck, HeartHandshake, Award, Cpu } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, title: "Always Ready", desc: "24/7 coverage with mobile units and control-room support primed to respond at a moment's notice." },
  { icon: HeartHandshake, title: "Unwavering Commitment", desc: "We treat your people and premises as our own, with a dedication that never clocks off." },
  { icon: Award, title: "Proven Trust", desc: "SIA licensed, fully vetted officers trusted by clients across events, retail, corporate and more." },
  { icon: Cpu, title: "Innovation in Action", desc: "Modern technology and smart processes combined with professional people for smarter security." }
];

export function TrustHighlights() {
  return (
    <section className="py-12 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => {
          const Icon = h.icon;
          return (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{h.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{h.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}