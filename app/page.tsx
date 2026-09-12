import { HeroSection } from "@/components/hero-section"
import { TrustHighlights } from "@/components/trust-highlights"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CareersSection } from "@/components/careers-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <ServicesSection />
      <WhyChooseUs />
      <CareersSection />
    </>
  )
}
