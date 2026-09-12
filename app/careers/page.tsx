import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { CareersSection } from "@/components/careers-section"
import { PoundSterling, CalendarClock, TrendingUp, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Secure Nest Services",
  description:
    "Join Secure Nest Services. We are hiring SIA licensed security guards across the UK. Competitive pay, flexible shifts and career progression. Apply by email today.",
}

const perks = [
  { icon: PoundSterling, title: "Competitive Pay", description: "Fair, reliable rates with prompt weekly payment." },
  { icon: CalendarClock, title: "Flexible Shifts", description: "Day, night and weekend work to suit your lifestyle." },
  { icon: TrendingUp, title: "Career Progression", description: "Training and clear routes into supervisory roles." },
  { icon: ShieldCheck, title: "Supportive Team", description: "A team that has your back on every deployment." },
]

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build Your Career in Security"
        description="We're always looking for dedicated, SIA licensed professionals to join our growing team across the UK."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon
              return (
                <div
                  key={perk.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{perk.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CareersSection />
    </>
  )
}
