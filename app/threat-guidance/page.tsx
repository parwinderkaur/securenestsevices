import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ExternalLink, ShieldAlert, Eye, Phone, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Threat & Guidance | Secure Nest Services",
  description:
    "Stay informed on the current UK national threat level and security guidance. Access official MI5 advice and practical steps to keep your people and premises safe.",
}

const levels = [
  { level: "Low", meaning: "An attack is highly unlikely.", color: "bg-green-500" },
  { level: "Moderate", meaning: "An attack is possible but not likely.", color: "bg-yellow-500" },
  { level: "Substantial", meaning: "An attack is likely.", color: "bg-orange-500" },
  { level: "Severe", meaning: "An attack is highly likely.", color: "bg-red-500" },
  { level: "Critical", meaning: "An attack is highly likely in the near future.", color: "bg-red-700" },
]

const guidance = [
  {
    icon: Eye,
    title: "Stay Alert",
    description: "Be aware of your surroundings and report anything that feels out of place or suspicious.",
  },
  {
    icon: ShieldAlert,
    title: "Know Your Plan",
    description: "Make sure staff understand evacuation routes, lockdown procedures and assembly points.",
  },
  {
    icon: Phone,
    title: "Report Concerns",
    description: "In an emergency always call 999. Report non-urgent concerns to the anti-terrorist hotline on 0800 789 321.",
  },
]

export default function ThreatGuidancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Threat & Guidance"
        title="UK Threat Level & Guidance"
        description="Understanding the national threat picture helps you take sensible, proportionate steps to protect your people and premises."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Threat & Guidance" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-950/40 to-[#05070f] p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400 ring-1 ring-teal-500/30">
                <Info className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-white">Official National Threat Level</h2>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-slate-300">
                  The UK national threat level is set by the Joint Terrorism Analysis Centre and MI5. It indicates the
                  likelihood of a terrorist attack and is reviewed regularly. Always refer to the official source for
                  the current level.
                </p>
                <a
                  href="https://www.mi5.gov.uk/threats-and-advice/terrorism-threat-levels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-teal-500/20 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/50 transition-colors hover:bg-teal-500"
                >
                  View Current Threat Level on MI5.gov.uk
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-white">Threat Levels Explained</h2>
            <div className="mt-6 space-y-3">
              {levels.map((item) => (
                <div
                  key={item.level}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className={`h-3 w-3 flex-shrink-0 rounded-full ${item.color}`} aria-hidden />
                  <span className="w-28 flex-shrink-0 font-semibold text-white">{item.level}</span>
                  <span className="text-sm text-slate-400">{item.meaning}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-white">Practical Guidance</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {guidance.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center sm:p-12">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Need a security risk assessment?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-slate-300">
              Our team can assess your premises and build a proportionate plan aligned to the current threat picture.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-teal-500/20 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/50 transition-colors hover:bg-teal-500"
            >
              Speak to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
