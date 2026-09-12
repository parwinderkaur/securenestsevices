import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/services-section"

export const metadata: Metadata = {
  title: "Our Services | Secure Nest Services",
  description:
    "Explore the full range of SIA licensed security services from Secure Nest Services — from event security and manned guarding to fire marshals, retail and construction site protection.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive Security Solutions"
        description="Whatever the environment, we have a specialist SIA licensed team ready to protect it. Explore our full range of services below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />
      <ServicesSection
        eyebrow="What We Offer"
        heading="Ten Specialist Security Services"
        description="Select any service to see how our teams deliver protection tailored to your environment."
      />
    </>
  )
}
