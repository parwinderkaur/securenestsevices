import {
  Flame,
  Home,
  Ticket,
  ShoppingBag,
  UserCheck,
  GraduationCap,
  BellRing,
  Warehouse,
  Building2,
  HardHat,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  slug: string
  /** Short label used in the nav dropdown */
  navLabel: string
  /** Card / page title */
  title: string
  icon: LucideIcon
  tagline: string
  /** Short summary used on cards */
  summary: string
  /** Longer intro shown at the top of the detail page */
  overview: string
  features: string[]
  included: { title: string; description: string }[]
}

export const services: Service[] = [
  {
    slug: "fire-marshal",
    navLabel: "Fire Marshal Services",
    title: "Fire Marshal Services",
    icon: Flame,
    tagline: "On-site fire safety, evacuation and compliance",
    summary:
      "Qualified fire marshals for evacuations, risk checks and full on-site fire safety compliance.",
    overview:
      "Our qualified fire marshals help you meet your legal fire safety obligations and keep everyone on site protected. From daily fire risk checks to full evacuation management, we provide trained professionals who know exactly how to act when it matters most.",
    features: [
      "Fully trained and certified fire marshals",
      "Evacuation planning and drills",
      "Daily fire risk and equipment checks",
      "Regulatory Reform (Fire Safety) Order compliance",
    ],
    included: [
      { title: "Risk Assessment", description: "Ongoing checks of escape routes, alarms and extinguishers." },
      { title: "Evacuation Management", description: "Calm, coordinated evacuation of staff and visitors." },
      { title: "Incident Reporting", description: "Clear documentation to support your compliance records." },
    ],
  },
  {
    slug: "residential",
    navLabel: "Residential Services",
    title: "Residential Security",
    icon: Home,
    tagline: "Discreet protection for homes and estates",
    summary: "Discreet protection for homes, estates and gated communities, day and night.",
    overview:
      "Protect your home, family and property with discreet, professional residential security. Whether you need overnight patrols, gatehouse cover or a dedicated close protection presence, our officers blend into your environment while keeping it secure.",
    features: [
      "Overnight and 24/7 residential patrols",
      "Gatehouse and access control",
      "Estate and gated community cover",
      "Key holding and alarm response",
    ],
    included: [
      { title: "Patrol Coverage", description: "Regular internal and perimeter patrols around your property." },
      { title: "Access Control", description: "Vetting and managing visitors, deliveries and contractors." },
      { title: "Rapid Response", description: "Immediate action on alarms and suspicious activity." },
    ],
  },
  {
    slug: "event-security",
    navLabel: "Event Security Services",
    title: "Event Security",
    icon: Ticket,
    tagline: "Crowd safety for events of any size",
    summary:
      "Crowd management, access control and safeguarding for concerts, festivals and private events.",
    overview:
      "From private functions to large festivals, our event security teams keep guests safe and events running smoothly. We handle crowd management, access control, ticket checks and emergency response with a professional, approachable presence.",
    features: [
      "Crowd and queue management",
      "Ticket and access control",
      "Bag searches and screening",
      "Emergency and evacuation planning",
    ],
    included: [
      { title: "Pre-Event Planning", description: "Risk assessments and tailored security plans for your venue." },
      { title: "On-Site Teams", description: "SIA licensed door supervisors and stewards throughout." },
      { title: "Coordination", description: "Liaison with venue, medical and emergency services." },
    ],
  },
  {
    slug: "retail-security",
    navLabel: "Retail Security",
    title: "Retail Security",
    icon: ShoppingBag,
    tagline: "Loss prevention and store protection",
    summary: "Loss prevention, store guarding and customer-facing officers to protect stock and staff.",
    overview:
      "Reduce shrinkage and keep staff and customers safe with our retail security officers. Whether uniformed or plain-clothes, our team deters theft, manages incidents professionally and protects your bottom line.",
    features: [
      "Uniformed and plain-clothes officers",
      "Loss prevention and store detectives",
      "Anti-theft and tagging support",
      "Customer-facing, brand-friendly presence",
    ],
    included: [
      { title: "Deterrence", description: "A visible presence that discourages theft and anti-social behaviour." },
      { title: "Incident Handling", description: "Professional detention and reporting in line with the law." },
      { title: "Reporting", description: "Detailed incident logs to support prosecutions and insurance." },
    ],
  },
  {
    slug: "manned-guarding",
    navLabel: "Manned Guarding Services",
    title: "Manned Guarding",
    icon: UserCheck,
    tagline: "A professional presence on any site",
    summary: "SIA licensed guards providing a visible, professional deterrent on any site.",
    overview:
      "Our manned guarding service places vetted, SIA licensed officers on your premises to deter crime, control access and respond to incidents. Every guard is trained to represent your organisation professionally at all times.",
    features: [
      "Static and mobile guarding",
      "Access and visitor control",
      "Patrols and site checks",
      "Detailed reporting and handovers",
    ],
    included: [
      { title: "Vetted Officers", description: "BS7858 screened and fully SIA licensed guards." },
      { title: "Site Assurance", description: "Regular patrols and documented checkpoints." },
      { title: "Supervision", description: "Dedicated account management and quality audits." },
    ],
  },
  {
    slug: "educational",
    navLabel: "Educational Security",
    title: "Educational Security",
    icon: GraduationCap,
    tagline: "Safe campuses for schools and colleges",
    summary: "Safe, welcoming environments for schools, colleges and university campuses.",
    overview:
      "We help schools, colleges and universities create safe, welcoming environments for students and staff. Our officers are DBS checked and trained to work sensitively within education settings while maintaining strong security.",
    features: [
      "DBS checked officers",
      "Campus patrols and access control",
      "Visitor and contractor management",
      "Safeguarding-aware approach",
    ],
    included: [
      { title: "Safeguarding", description: "Officers trained to work respectfully around young people." },
      { title: "Access Control", description: "Managing gates, receptions and visitor sign-in." },
      { title: "Emergency Support", description: "Lockdown and incident response procedures." },
    ],
  },
  {
    slug: "hotel-concierge",
    navLabel: "Hotel & Concierge Security",
    title: "Hotel & Concierge Security",
    icon: BellRing,
    tagline: "Hospitality meets vigilance",
    summary: "Front-of-house concierge and security blending hospitality with vigilance.",
    overview:
      "Our concierge security officers deliver a five-star welcome while quietly keeping your property secure. Perfect for hotels, residential developments and corporate receptions where first impressions and safety matter equally.",
    features: [
      "Front-of-house concierge duties",
      "Guest and visitor management",
      "Discreet security presence",
      "CCTV and access monitoring",
    ],
    included: [
      { title: "Guest Experience", description: "Warm, professional first point of contact for visitors." },
      { title: "Security Cover", description: "Vigilant monitoring of entrances and communal areas." },
      { title: "Concierge Support", description: "Deliveries, bookings and resident assistance." },
    ],
  },
  {
    slug: "warehouse",
    navLabel: "Ware House Security",
    title: "Warehouse Security",
    icon: Warehouse,
    tagline: "Protecting logistics and storage sites",
    summary:
      "Perimeter patrols, access control and stock protection for logistics and storage facilities.",
    overview:
      "Warehouses and distribution centres hold valuable stock and see constant movement of vehicles and people. Our officers manage access, patrol perimeters and monitor loading bays to protect your goods around the clock.",
    features: [
      "Perimeter and internal patrols",
      "Vehicle and delivery control",
      "Loading bay supervision",
      "Stock and asset protection",
    ],
    included: [
      { title: "Access Management", description: "Controlling gates, barriers and goods-in/goods-out." },
      { title: "Patrols", description: "Scheduled and random patrols across the facility." },
      { title: "Monitoring", description: "CCTV oversight and incident escalation." },
    ],
  },
  {
    slug: "corporate",
    navLabel: "Corporate Security Services",
    title: "Corporate Security",
    icon: Building2,
    tagline: "Protection for offices and corporate premises",
    summary: "Reception, access management and protection for offices and corporate premises.",
    overview:
      "Present a professional front while keeping your workplace secure. Our corporate security officers combine reception duties, access control and incident management to protect your people, premises and reputation.",
    features: [
      "Corporate reception and front desk",
      "Access and pass control",
      "Visitor management systems",
      "Incident and emergency response",
    ],
    included: [
      { title: "Professional Front", description: "Smartly presented officers representing your brand." },
      { title: "Access Control", description: "Managing passes, visitors and secure areas." },
      { title: "Business Continuity", description: "Support for evacuations and emergencies." },
    ],
  },
  {
    slug: "construction-site",
    navLabel: "Construction Site Security",
    title: "Construction Site Security",
    icon: HardHat,
    tagline: "Preventing theft and vandalism on site",
    summary: "Preventing theft and vandalism on site with patrols, monitoring and access control.",
    overview:
      "Construction sites are high-value targets for theft and vandalism. Our officers secure your site out of hours and during works, controlling access, patrolling the perimeter and protecting plant, tools and materials.",
    features: [
      "Out-of-hours site protection",
      "Plant and materials security",
      "Access and contractor control",
      "Perimeter patrols and monitoring",
    ],
    included: [
      { title: "Theft Prevention", description: "Protecting expensive plant, tools and materials." },
      { title: "Access Control", description: "Managing contractors, deliveries and site entry." },
      { title: "Patrols", description: "Regular checks of perimeters and high-risk areas." },
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
