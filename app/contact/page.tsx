import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { QuoteForm } from "@/components/quote-form"
import { MapPin, Phone, Mail, Building2, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Secure Nest Services",
  description:
    "Contact Secure Nest Services for a free security quote. Call +44 7411 523527, email info@securenestservices.com or visit us at 2A Thortan Lodge Road Huddersfield, HD1 3JQ.",
}

const details = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["2A Thortan Lodge Road Huddersfield", " HD1 3JQ"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+44 7411 523527"],
    href: "tel:+447411523527",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@securenestservices.com"],
    href: "mailto:info@securenestservices.com",
  },
  {
    icon: Building2,
    title: "Company Number",
    lines: ["17122683 (England & Wales)"],
  },
  {
    icon: Clock,
    title: "Availability",
    lines: ["24 hours a day, 7 days a week"],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a Quote"
        description="Tell us about your security needs and our team will get back to you with a tailored, no-obligation quote."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-white">Get in Touch</h2>
              <p className="mt-4 text-pretty leading-relaxed text-slate-400">
                Whether you need a single guard or a fully managed security operation, we&apos;re here to help. Reach
                us directly or send an enquiry using the form.
              </p>

              <ul className="mt-8 space-y-6">
                {details.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <li key={detail.title} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{detail.title}</h3>
                        <div className="mt-1 text-slate-400">
                          {detail.href ? (
                            <a href={detail.href} className="transition-colors hover:text-teal-400">
                              {detail.lines.join(" ")}
                            </a>
                          ) : (
                            detail.lines.map((line) => <p key={line}>{line}</p>)
                          )}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
