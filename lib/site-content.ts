import {
  ShieldAlert,
  HeartHandshake,
  BadgeCheck,
  Lightbulb,
  HeartPulse,
  Star,
  Users,
  Scale,
  type LucideIcon,
} from "lucide-react"

export { services, getService } from "./services"
export type { Service } from "./services"

/** Core company details, used across every page. */
export const company = {
  name: "Secure Nest Services",
  tagline: "Protection You Can Trust",
  phone: "+44 7411 523527",
  phoneHref: "tel:+447411523527",
  email: "info@securenestservices.com",
  emailHref: "mailto:info@securenestservices.com",
  companyNumber: "17122683",
  whatsapp: "447411523527",
  address: {
    line1: "2A Thortan Lodge Road Huddersfield,",
    line2: " HD1 3JQ",
    full: "2A Thortan Lodge Road Huddersfield, HD1 3JQ",
  },
  mi5Url: "https://www.mi5.gov.uk/threats-and-advice/terrorism-threat-levels",
}

export type HeroSlide = {
  title: string
  body: string
  image: string
}

/** The three auto-playing hero slides on the home page. */
export const heroSlides: HeroSlide[] = [
  {
    title: "Welcome to Secure Nest Services",
    body: "At Secure Nest Services, we provide reliable and tailored security solutions nationwide, designed to meet the unique needs of each client. Our experienced team specializes in delivering high-quality protection and safety services for events, businesses, and public venues.",
    image: "/hero-security.png",
  },
  {
    title: "Protection You Can Trust",
    body: "Secure Nest Services is committed to helping clients meet the requirements of the Protection of Premises Bill while keeping their operations secure and resilient. Our approach combines comprehensive risk assessments, tailored protective measures, and proactive response planning.",
    image: "/careers-guard.png",
  },
  {
    title: "Reliable. Tailored. Ready.",
    body: "We don't believe in generic security plans. We take the time to listen, evaluate, and design bespoke strategies that match your unique risks and operational needs.",
    image: "/hero-security.png",
  },
]

export type TrustBadge = {
  icon: LucideIcon
  title: string
  description: string
}

/** The four trust highlights shown in a row on the home page. */
export const trustBadges: TrustBadge[] = [
  {
    icon: ShieldAlert,
    title: "Always Ready",
    description: "24/7 coverage with mobile units and control-room support primed to respond at a moment's notice.",
  },
  {
    icon: HeartHandshake,
    title: "Unwavering Commitment",
    description: "We treat your people and premises as our own, with a dedication that never clocks off.",
  },
  {
    icon: BadgeCheck,
    title: "Proven Trust",
    description: "SIA licensed, fully vetted officers trusted by clients across events, retail, corporate and more.",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Action",
    description: "Modern technology and smart processes combined with professional people for smarter security.",
  },
]

export type Policy = {
  icon: LucideIcon
  title: string
  summary: string
  details: string
}

/** The four "Our Policies and Statements" cards on the About page. */
export const policies: Policy[] = [
  {
    icon: HeartPulse,
    title: "Health & Safety Policy",
    summary: "Protecting the wellbeing of our staff, clients and the public on every deployment.",
    details:
      "Secure Nest Services is committed to providing a safe and healthy working environment for all employees, clients and members of the public. We carry out thorough risk assessments, provide ongoing safety training, and ensure full compliance with the Health and Safety at Work Act and all relevant regulations.",
  },
  {
    icon: Star,
    title: "Quality Policy",
    summary: "Delivering a consistently high standard of service on every contract.",
    details:
      "We are dedicated to delivering services that consistently meet and exceed our clients' expectations. Through continuous monitoring, regular audits and client feedback, we maintain the highest standards of professionalism and reliability across all of our security operations.",
  },
  {
    icon: Users,
    title: "Recruitment, Training and Competence Policy",
    summary: "Vetting, training and developing officers to the highest UK standards.",
    details:
      "Every member of our team is recruited through a rigorous, BS7858-compliant screening process and holds a valid SIA licence. We invest in continuous training and professional development to ensure our officers remain competent, confident and fully equipped to protect what matters most.",
  },
  {
    icon: Scale,
    title: "Equality, Diversity & Anti-Bullying Policy",
    summary: "A fair, inclusive and respectful environment for everyone.",
    details:
      "Secure Nest Services is committed to promoting equality, valuing diversity and maintaining a workplace free from discrimination, harassment and bullying. We treat all employees, clients and members of the public with dignity and respect, regardless of background or circumstance.",
  },
]

/** Details used on the About intro and elsewhere. */
export const aboutIntro: string[] = [
  "SECURE NEST SERVICES is a trusted provider of professional and reliable security services across the United Kingdom. We deliver tailored protection for events, businesses, residential properties and public venues, always built around the unique needs of each client.",
  "Our experienced, SIA licensed team combines rigorous training with a genuine commitment to safety. From manned guarding and event security to fire marshalling and corporate protection, we bring the same professionalism and care to every assignment.",
  "We believe great security is about partnership. We take the time to listen, assess and design bespoke strategies that keep your people, property and reputation protected — day and night, 365 days a year.",
]

/** Careers content. */
export const careers = {
  headline: "We're Hiring SIA Licensed Security Officers",
  body: "Secure Nest Services is always looking for professional, reliable and SIA licensed guards to join our growing team across the UK. If you take pride in keeping people safe and want to work with a company that values its officers, we'd love to hear from you.",
  requirements: [
    "Valid SIA licence (Door Supervision or Security Guarding)",
    "Right to work in the UK",
    "Excellent communication and customer-service skills",
    "Reliable, punctual and professionally presented",
    "Flexibility to work varied shifts including nights and weekends",
  ],
  emailSubject: "SIA Licensed Guard Application",
  emailBody:
    "Hello Secure Nest Services,%0D%0A%0D%0AI would like to apply for a security officer role. Please find my details below:%0D%0A%0D%0AName:%0D%0ASIA Licence Number:%0D%0ALocation:%0D%0APhone:%0D%0A%0D%0A(Please attach your CV.)%0D%0A%0D%0AThank you.",
}
