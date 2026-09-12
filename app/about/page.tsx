import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { WhyChooseUs } from "@/components/why-choose-us"
import { PolicyCards } from "@/components/policy-cards"
import { aboutIntro } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "About Us | Secure Nest Services",
  description:
    "Learn about Secure Nest Services — a UK security company delivering SIA licensed, professional protection built on trust, integrity and rapid response.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Security Built on Trust"
        description="Secure Nest Services is a UK security company protecting people, property and reputations with professional, SIA licensed teams available 24/7."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">Who We Are</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            {aboutIntro.map((paragraph, i) => (
              <p
                key={i}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 text-pretty leading-relaxed text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-teal-500/20 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/50 transition-colors hover:bg-teal-500"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
              Our Standards
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Policies and Statements
            </h2>
            <p className="mt-4 text-pretty text-lg text-slate-400">
              The commitments that underpin every service we deliver. Select a policy to read more.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <PolicyCards />
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  )
}
