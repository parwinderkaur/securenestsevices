import { ShieldCheck, Clock, Zap, FileText } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: ShieldCheck, title: "SIA Licensed Staff", desc: "Every officer is fully SIA licensed, vetted and trained to the highest UK industry standards." },
  { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock coverage and control room support, so your site is never left unwatched." },
  { icon: Zap, title: "Rapid Response", desc: "Fast, coordinated response to incidents with mobile units ready to deploy at short notice." },
  { icon: FileText, title: "Bespoke Plans", desc: "Tailored security strategies built around your specific risks, budget and requirements." }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            A Security Partner You Can Rely On
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            We combine professionally trained people with smart processes and modern technology to deliver security that genuinely protects. Here's what sets Secure Nest Services apart.
          </p>
          <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-lg shadow-md transition inline-block">
            Request a Quote
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:border-teal-500 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}