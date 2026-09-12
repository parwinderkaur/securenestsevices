import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, Users, Music, Trophy, PartyPopper } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Events | Secure Nest Services",
  description:
    "Discover the events Secure Nest Services protects across the UK — festivals, sporting fixtures, corporate functions and private celebrations, all kept safe by SIA licensed teams.",
}

const events = [
  {
    icon: Music,
    name: "City Live Music Festival",
    location: "Bradford, West Yorkshire",
    date: "Summer 2026",
    description: "Full crowd management, access control and stage-front security for a 15,000-capacity festival.",
  },
  {
    icon: Trophy,
    name: "Regional Sports Finals",
    location: "Leeds, West Yorkshire",
    date: "Spring 2026",
    description: "Stewarding, bag searches and coordinated emergency planning across a multi-day tournament.",
  },
  {
    icon: PartyPopper,
    name: "Corporate Gala Dinner",
    location: "Manchester City Centre",
    date: "Winter 2025",
    description: "Discreet close protection and guest management for a high-profile black-tie awards evening.",
  },
  {
    icon: Users,
    name: "Community Cultural Fair",
    location: "Bradford, West Yorkshire",
    date: "Autumn 2025",
    description: "Family-friendly stewarding and access control for a 5,000-visitor weekend community event.",
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Events"
        title="Events We Protect"
        description="From intimate private functions to large-scale festivals, our teams keep guests safe and events running smoothly across the UK."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Events" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => {
              const Icon = event.icon
              return (
                <article
                  key={event.name}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7 transition-all duration-300 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-950/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20 transition-colors group-hover:bg-teal-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-xl font-semibold text-white">{event.name}</h2>
                  </div>
                  <p className="mt-5 leading-relaxed text-slate-400">{event.description}</p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-teal-400" />
                      {event.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-teal-400" />
                      {event.date}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-teal-950/40 to-[#05070f] p-8 text-center sm:p-12">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Planning an event?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty !text-slate-300">
              Let us build a bespoke security plan that keeps your guests safe and your event running without a hitch.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-teal-500/20 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/50 transition-colors hover:bg-teal-500"
            >
              Request Event Security
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
