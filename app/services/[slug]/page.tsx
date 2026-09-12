import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Phone, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Shield, 
  AlertTriangle,
  ArrowRight
} from "lucide-react";

// =========================================================================
// SAARI 10 SERVICES KA EXACT VERBATIM DATA + HD RELEVANT IMAGES
// =========================================================================
interface ServiceSection {
  title?: string;
  subtitle?: string;
  text?: string[];
  bullets?: string[];
  subsections?: { title: string; bullets?: string[]; text?: string }[];
  alertBox?: { title: string; text: string };
  callout?: string;
  steps?: { step: string; title: string; desc: string }[];
}

interface ServiceData {
  title: string;
  tagline: string;
  subtitle?: string;
  courseNote?: string;
  companySubhead?: string;
  nationwideSubhead?: string;
  heroImage: string;
  intro: string[];
  sections: ServiceSection[];
  ctaText: { title: string; text: string; subtext?: string };
}

const allServicesData: Record<string, ServiceData> = {
  // -------------------------------------------------------------
  // 1. FIRE MARSHAL SERVICES
  // -------------------------------------------------------------
  "fire-marshal": {
    title: "Fire Marshal Services",
    tagline: "Protecting You for a Safer Tomorrow",
    courseNote: "This course is designed to provide participants with the required knowledge to fulfil the role of Fire Marshal_Warden",
    companySubhead: "Fire Marshaling & Safety | SECURE NEST SERVICES",
    nationwideSubhead: "Nationwide Fire Watch & Waking Watch Services",
    heroImage: "/Fire Marshal Services.jpg",
    intro: [
      "Fire safety is more than just a legal requirement; it is essential for safeguarding people, property, and peace of mind. Whether you manage a residential block, oversee a construction project, or operate commercial premises, professional fire safety support can make all the difference.",
      "At SECURE NEST SERVICES we provide expert fire watch and waking watch services across the UK. With fully trained personnel, 24/7 rapid response, and bespoke safety plans, we help property owners and managers stay compliant, reduce risk, and maintain a safe environment for everyone on site."
    ],
    sections: [
      {
        alertBox: {
          title: "Updated UK Fire Safety Regulations: Cladding & Building Heights (2026)",
          text: "Recent changes to UK building regulations in 2026 have lowered the height threshold for buildings required to meet enhanced cladding fire safety standards. Properties of 11 metres and above now fall under these requirements. This means many buildings previously exempt must now undergo cladding assessments and implement temporary fire safety measures, such as Waking Watch or Fire Watch services. SECURE NEST SERVICES is here to guide you through these updates. Our specialists provide professional advice, deploy experienced fire marshals, and deliver reliable Waking Watch or Fire Watch coverage tailored to your property."
        }
      },
      {
        title: "What Is a Fire Watch Service?",
        text: [
          "A fire watch is a proactive safety measure designed to protect your building when fire alarms, sprinklers, or other systems are offline or undergoing maintenance.",
          "Our trained fire watch officers continually monitor your premises, spotting hazards early to prevent damage and ensure the safety of everyone on site."
        ],
        subtitle: "Common situations requiring a fire watch include:",
        bullets: [
          "Fire alarm or sprinkler maintenance",
          "Construction or refurbishment work",
          "Hot work such as welding, grinding, or cutting"
        ]
      },
      {
        title: "Duties of a Fire Watch Officer",
        subtitle: "Fire watch officers at SECURE NEST SERVICES are highly trained to:",
        bullets: [
          "Conduct regular patrols across the property",
          "Monitor high-risk areas",
          "Ensure fire exits and escape routes are clear",
          "Maintain accurate logs and incident reports",
          "Identify and mitigate potential fire hazards",
          "Respond swiftly in the event of a fire"
        ],
        callout: "All officers are fully licensed, insured, and trained to meet UK fire safety standards."
      },
      {
        title: "Waking Watch Services",
        text: [
          "A Waking Watch provides 24/7 on-site fire surveillance, particularly for buildings at higher risk due to cladding or other hazards.",
          "SECURE NEST SERVICES Waking Watch service ensures residents and staff are monitored continuously, alarms are raised immediately, and safe evacuations are carried out efficiently."
        ],
        subtitle: "Key responsibilities include:",
        bullets: [
          "Patrolling all communal areas and floors",
          "Keeping fire exits and routes accessible",
          "Alerting occupants and fire services in an emergency",
          "Maintaining detailed logs and safety reports"
        ]
      },
      {
        title: "Partnering with SECURE NEST SERVICES ensures:",
        bullets: [
          "Nationwide coverage across the UK",
          "24/7 rapid response teams",
          "Fully trained, licensed, and insured fire marshals",
          "Bespoke fire safety solutions tailored to each site",
          "Full compliance with NFCC and UK fire safety regulations",
          "Peace of mind for residents, staff, and property owners"
        ],
        callout: "Our mission is simple: protect lives, safeguard property, and ensure full compliance with UK fire safety law."
      }
    ],
    ctaText: {
      title: "Book Your Free Fire Safety Consultation",
      text: "Don’t wait until it’s too late. Let SECURE NEST SERVICES assess your property, advise on risk, and implement a professional fire watch or waking watch solution.",
      subtext: "Call us today or request a free consultation online for expert fire safety coverage, 24/7, tailored to your building."
    }
  },

  // -------------------------------------------------------------
  // 2. RESIDENTIAL SERVICES
  // -------------------------------------------------------------
  "residential-services": {
    title: "Residential Services",
    subtitle: "Residential Security",
    tagline: "Dedicated Protection for Homes & Estates",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    intro: [
      "At SECURE NEST SERVICES. We understand that your home is more than just a property, it’s a place of comfort, privacy, and safety. Our residential security services are designed to provide complete peace of mind, protecting you, your family, and your valuable assets with professionalism and discretion.",
      "We deliver tailored security solutions across the UK, combining the expertise of SIA-licensed security officers with the experience of professionals from police and military backgrounds. This allows us to provide exceptional protection for private residences, ensuring safety without disrupting your lifestyle."
    ],
    sections: [
      {
        title: "What is Residential Security?",
        text: [
          "Residential security focuses on creating a safe and controlled environment for homes and their occupants. SECURE NEST SERVICES. our Residential Security Teams (RST) consist of trained and licensed security professionals who specialise in protecting private residences and maintaining a secure living environment.",
          "Our services are ideal for high-profile individuals, executives, celebrities, and families who value privacy and security.",
          "From luxury apartments in central cities to large country estates and waterfront properties, our residential security teams work to identify risks, prevent unauthorised access, and maintain a safe and secure home environment at all times."
        ]
      },
      {
        title: "Why Choose SECURE NEST SERVICES for Residential Security?",
        text: [
          "In today’s world, residential security is about more than simply guarding a property, it’s about ensuring peace of mind. A professional residential security presence not only protects your home but also acts as a strong deterrent against potential threats.",
          "Whether you are concerned about privacy, high-value assets, burglary risks, harassment, or other security issues, SECURE NEST SERVICES. provides carefully planned security services designed to minimise risk and maximise safety.",
          "All our officers undergo strict vetting procedures and professional background checks, and many bring valuable experience from police, military, or specialist security roles. This ensures that every member of our team is fully prepared to respond quickly, manage risks effectively, and maintain a safe environment for our clients."
        ]
      },
      {
        title: "Residential Security Services We Offer",
        subtitle: "At SECURE NEST SERVICES. our residential security services are fully customised to meet the needs of each client and property. Our key services include:",
        bullets: [
          "Risk Assessments & Security Planning – Comprehensive evaluations to identify vulnerabilities and develop tailored protection strategies.",
          "24/7 Security Coverage – Continuous protection for your home, family, and property.",
          "Access Control Management – Monitoring and controlling who enters and exits your residence.",
          "Surveillance & Security Patrols – Active monitoring and regular patrols to prevent unauthorised access.",
          "Emergency Response – Immediate action in the event of medical emergencies or security incidents.",
          "Close Protection Officers – Discreet personal protection when required."
        ],
        callout: "Our services are flexible and can be adapted to suit your lifestyle, property type, and personal security requirements, ensuring effective protection that remains professional and unobtrusive."
      },
      {
        title: "Types of Residences We Protect",
        subtitle: "Our residential security teams have experience protecting a wide range of properties, including:",
        bullets: [
          "Luxury Mansions and Private Estates",
          "Penthouses and High-End Apartments",
          "Townhouses and Villas",
          "Waterfront Properties",
          "Private Country Estates",
          "Golf Course Homes",
          "Exclusive Resort Residences"
        ],
        callout: "Wherever your home is located, SECURE NEST SERVICES provides tailored residential security designed to keep your property, privacy, and loved ones safe."
      },
      {
        title: "Nationwide Residential Security Coverage",
        subtitle: "SECURE NEST SERVICES. provides residential security services throughout the UK with flexible and rapid deployment capabilities, including:",
        bullets: [
          "London & Greater London",
          "Manchester",
          "Birmingham",
          "Yorkshire",
          "Liverpool",
          "And nationwide across the UK"
        ],
        callout: "No matter where your property is located, our professional security teams can deliver reliable protection and peace of mind."
      },
      {
        title: "Why Residential Security is Essential",
        text: [
          "For high-profile individuals, business leaders, and families with valuable assets, residential security has become increasingly important. A visible and professional security presence helps deter threats, protect privacy, and ensure rapid response in case of emergencies.",
          "With SECURE NEST SERVICES. clients can enjoy their homes without worrying about safety risks. Our residential security teams manage access, monitor potential threats, and provide discreet protection tailored to your needs."
        ],
        callout: "Residential security is not just about protection, it is an investment in safety, comfort, and peace of mind."
      }
    ],
    ctaText: {
      title: "Contact SECURE NEST SERVICES",
      text: "Your home should always feel safe and secure. Protect your property and your family with professional residential security services from SECURE NEST SERVICES.",
      subtext: "Contact our team today to discuss your security requirements and arrange a bespoke residential security assessment."
    }
  },

  // -------------------------------------------------------------
  // 3. EVENT SECURITY SERVICES
  // -------------------------------------------------------------
  "event-security": {
    title: "Event Security Services",
    tagline: "Ensuring safety and security at events, from concerts to conferences.",
    subtitle: "EVENT SECURITY – PROFESSIONAL PROTECTION BY SECURE NEST SERVICES.",
    courseNote: "large event security guards services _ (2)",
    heroImage: "/Event Security Services.jpg",
    intro: [
      "Ensuring safety and security at events, from concerts to conferences. Services include crowd control, access management, surveillance, and emergency response.",
      "At SECURE NEST SERVICES. we provide reliable and professional event security services across the UK. Our experienced teams combine careful planning, strong security awareness, and a discreet approach to ensure every event runs safely and smoothly.",
      "We understand that successful events depend on organisation, safety, and trust. That’s why our security professionals work closely with organisers to protect guests, staff, and venues while allowing the event to proceed without disruption."
    ],
    sections: [
      {
        title: "The Importance of Event Security",
        text: [
          "Every event, whether large or small, requires proper security planning. From private celebrations to major public gatherings, ensuring the safety of guests and staff is essential."
        ],
        subtitle: "Effective event security helps to:",
        bullets: [
          "Protect guests and staff",
          "Prevent unauthorised access",
          "Manage crowds safely",
          "Respond quickly to emergencies",
          "Maintain the reputation and smooth running of your event"
        ],
        callout: "At SECURE NEST SERVICES, We focus on creating a secure environment so organisers can concentrate on delivering a successful and memorable event."
      },
      {
        title: "Our Approach to Event Security",
        text: [
          "No two events are the same. That is why SECURE NEST SERVICES. provides tailored security strategies designed around the specific requirements of each event.",
          "Our process focuses on preparation, professionalism, and flexibility. We work closely with clients to understand the venue, expected attendance, and potential risks before designing a suitable security plan."
        ],
        subtitle: "Our approach includes:",
        bullets: [
          "Detailed risk assessments",
          "Customised security planning",
          "Highly trained security personnel",
          "Professional on-site coordination",
          "Real-time response to any situation"
        ],
        callout: "Our goal is to provide visible protection while maintaining a welcoming and professional atmosphere for guests."
      },
      {
        title: "Event Security Services We Provide",
        subsections: [
          {
            title: "Risk Assessment & Security Planning",
            text: "We begin by carefully evaluating the event environment, including:",
            bullets: [
              "Venue inspections and site surveys",
              "Identifying potential security risks",
              "Planning entry, exit, and emergency procedures",
              "Coordinating with venue staff or emergency services when required"
            ]
          },
          {
            title: "Access Control",
            text: "Managing entry points is essential to maintaining a safe environment. Our teams handle:",
            bullets: [
              "Ticket and guest list verification",
              "Bag checks and screening",
              "Monitoring restricted areas",
              "Vehicle access management"
            ]
          },
          {
            title: "Crowd Management",
            text: "For events with large numbers of attendees, our trained staff help ensure safe movement and organisation by:",
            bullets: [
              "Managing queues and entry points",
              "Monitoring crowd flow",
              "Providing stewards and marshals",
              "Supporting safe evacuation if necessary"
            ]
          },
          {
            title: "VIP & Close Protection",
            text: "For events involving VIP guests or performers, SECURE NEST SERVICES. can provide:",
            bullets: [
              "Professional close protection officers",
              "Secure arrival and departure coordination",
              "Discreet monitoring throughout the event"
            ]
          },
          {
            title: "Emergency Response",
            text: "Our security personnel are trained to respond quickly and professionally to incidents such as:",
            bullets: [
              "Medical emergencies",
              "Fire or safety risks",
              "Disturbances or unauthorised access"
            ]
          },
          {
            title: "Post-Event Review",
            text: "Following the event, we can provide feedback and security insights to help improve planning for future events."
          }
        ]
      },
      {
        title: "Types of Events We Secure",
        subtitle: "SECURE NEST SERVICES. provides event security services for a wide range of occasions, including:",
        bullets: [
          "Corporate events and product launches",
          "Music concerts and festivals",
          "Sporting events",
          "Weddings and private celebrations",
          "Exhibitions and trade shows",
          "Public gatherings and community events"
        ],
        callout: "Whatever the scale or location, our security teams ensure that safety is managed professionally and efficiently."
      },
      {
        title: "Why Choose SECURE NEST SERVICES.",
        subtitle: "Event organisers trust SECURE NEST SERVICES. because we focus on professionalism, reliability, and attention to detail. Our strengths include:",
        bullets: [
          "Experienced and licensed security officers",
          "Tailored security planning for every event",
          "Professional crowd management expertise",
          "Discreet yet effective security presence",
          "Reliable support from planning through to completion"
        ],
        callout: "Our aim is simple: to create a safe and secure environment where events can run smoothly and guests can enjoy the occasion with confidence."
      },
      {
        title: "Our Event Security Process",
        subtitle: "To ensure effective protection, we follow a structured approach:",
        steps: [
          { step: "1", title: "Consultation", desc: "Understanding the event and security requirements" },
          { step: "2", title: "Risk Assessment", desc: "Identifying potential risks and vulnerabilities" },
          { step: "3", title: "Security Planning", desc: "Developing a tailored security strategy" },
          { step: "4", title: "Event Deployment", desc: "Professional security teams on-site" },
          { step: "5", title: "Active Monitoring", desc: "Continuous oversight throughout the event" },
          { step: "6", title: "Post-Event Review", desc: "Evaluation and recommendations" }
        ],
        callout: "This structured process ensures that every detail of event safety is considered and managed effectively."
      },
      {
        title: "SECURE NEST SERVICES. – Trusted Event Security Across the UK",
        text: [
          "At SECURE NEST SERVICES, we believe that every successful event begins with strong security planning. Our experienced teams work behind the scenes to ensure safety, organisation, and peace of mind for organisers and guests alike."
        ],
        callout: "SECURE NEST SERVICES.– Professional Security for Events of Every Size."
      }
    ],
    ctaText: {
      title: "Plan Your Event Security",
      text: "Contact SECURE NEST SERVICES today to arrange bespoke event security management for your upcoming occasion.",
      subtext: "Call us today or request a quote online for trusted UK event security coverage."
    }
  },

  // -------------------------------------------------------------
  // 4. RETAIL SECURITY
  // -------------------------------------------------------------
  "retail-security": {
    title: "Retail Security",
    subtitle: "RETAIL SECURITY SERVICES",
    tagline: "Loss Prevention & Store Protection",
    heroImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
    intro: [
      "Retail security today is about far more than simply preventing theft. It is about maintaining a safe, welcoming shopping environment for customers and staff while protecting valuable stock, premises, and business revenue. Whether you operate a single independent shop, a retail chain, or a large shopping centre, effective security plays a vital role in safeguarding your operations.",
      "At SECURE NEST SERVICES. we provide professional retail security services across the UK. Our experienced SIA-licensed security officers help retailers reduce losses, maintain order, and ensure a secure shopping environment for both customers and employees."
    ],
    sections: [
      {
        title: "Security Challenges Facing UK Retailers",
        text: [
          "Retailers across the UK are facing increasing security challenges, including organised shoplifting, aggressive behaviour, stock loss, and property damage. These risks can affect not only profits but also staff wellbeing and customer confidence."
        ],
        subtitle: "Without proper security measures in place, retailers may experience:",
        bullets: [
          "Increased shoplifting and organised retail crime",
          "Abuse or intimidation directed at store staff",
          "Stock shrinkage and financial loss",
          "Vandalism and damage to property",
          "Disruption to normal trading operations"
        ],
        callout: "Professional retail security provides a visible deterrent and helps businesses maintain a safe, controlled retail environment."
      },
      {
        title: "What Is Retail Security?",
        text: [
          "Retail security focuses on protecting stores, staff, customers, and merchandise through trained personnel, preventative strategies, and modern security systems."
        ],
        subtitle: "At SECURE NEST SERVICES. we provide tailored security support for a wide range of retail environments, including:",
        bullets: [
          "High street shops and boutiques",
          "Supermarkets and retail parks",
          "Shopping centres and malls",
          "Luxury and flagship retail stores",
          "Warehouses and distribution facilities"
        ],
        callout: "Our services are designed to match the unique layout, risks, and customer flow of each retail location."
      },
      {
        title: "Duties of Our Retail Security Officers",
        subtitle: "Our SIA-licensed retail security officers are carefully trained to maintain safety while offering a professional and approachable presence. Their responsibilities may include:",
        bullets: [
          "Acting as a visible deterrent against shoplifting and antisocial behaviour",
          "Conducting regular patrols across shop floors, stockrooms, and surrounding areas",
          "Monitoring CCTV systems and identifying suspicious activity",
          "Assisting staff during busy trading periods, sales events, or product launches",
          "Supporting queue management and general crowd control",
          "Responding quickly to alarms, theft incidents, or disturbances",
          "Liaising with local authorities or police when necessary",
          "Maintaining accurate incident reports and security logs"
        ],
        callout: "Our officers represent your business professionally while ensuring your premises remain safe and secure."
      },
      {
        title: "Why Retailers Choose SECURE NEST SERVICES.",
        subtitle: "Retail businesses trust SECURE NEST SERVICES because we deliver dependable security services designed around the needs of modern retailers. Our key strengths include:",
        bullets: [
          "Nationwide coverage across England, Scotland, and Wales",
          "SIA-licensed and fully vetted security officers",
          "Loss prevention expertise to help reduce shrinkage",
          "Tailored security plans based on your store’s risk profile",
          "Flexible staffing options for short-term or long-term coverage",
          "Integration with CCTV and surveillance systems",
          "Professional, customer-friendly security teams"
        ],
        callout: "From independent retailers to large commercial centres, we provide reliable protection that supports both safety and business performance."
      },
      {
        title: "Comprehensive Retail Risk Management",
        subtitle: "Retail security involves managing a wide range of potential risks, including:",
        bullets: [
          "Shoplifting and organised retail crime",
          "Aggressive or disruptive behaviour",
          "Cash handling and till point protection",
          "Staff safety during evening or late-night trading",
          "Property damage and vandalism"
        ],
        callout: "Our security officers are trained to manage incidents calmly and professionally. They focus on de-escalating situations wherever possible while ensuring the safety of staff and customers."
      },
      {
        title: "Flexible Retail Security Solutions",
        subtitle: "At SECURE NEST SERVICES. we understand that retail businesses require flexible security support. That is why we offer a variety of service options, including:",
        subsections: [
          {
            title: "Temporary retail security",
            text: "Ideal for seasonal sales, promotional events, or high-footfall periods."
          },
          {
            title: "Permanent store security officers",
            text: "Long-term on-site protection for shops and retail premises."
          },
          {
            title: "Mobile security patrols",
            text: "Cost-effective security for multiple locations or after-hours monitoring."
          },
          {
            title: "Shopping centre security teams",
            text: "Dedicated teams to manage large retail environments and public areas."
          }
        ],
        callout: "Our services can be scaled to suit the size and complexity of your retail operations."
      },
      {
        title: "Protect Your Store and Your Reputation",
        text: [
          "A safe and well-managed retail environment encourages customer trust and helps staff feel confident at work. Strong security also protects your brand reputation by preventing incidents that could harm your business image.",
          "By partnering with SECURE NEST SERVICES. you demonstrate a commitment to safety while protecting your merchandise, staff, and customers."
        ]
      }
    ],
    ctaText: {
      title: "Arrange a Retail Security Consultation",
      text: "If you are looking to strengthen security at your retail premises, SECURE NEST SERVICES. can help. Our team will assess your location, identify potential risks, and develop a tailored retail security strategy suited to your business.",
      subtext: "Contact SECURE NEST SERVICES. today to arrange a consultation and discover how our professional retail security services can help keep your store secure and running smoothly day and night across the UK."
    }
  },

  // -------------------------------------------------------------
  // 5. MANNED GUARDING SERVICES
  // -------------------------------------------------------------
  "manned-guarding": {
    title: "Manned Guarding Services",
    subtitle: "MANNED GUARDING SERVICES ​",
    tagline: "Round-the-Clock SIA-Licensed Physical Protection",
    heroImage: "/Manned Guarding Services.jpg",
    intro: [
      "At MANNED GUARDING SERVICES, we provide dependable manned guarding services designed to protect businesses, properties, and people across the UK. Our SIA-licensed security officers are trained to maintain a visible and professional presence, helping to prevent crime, manage access, and respond quickly to incidents.",
      "Whether you operate a commercial property, warehouse, construction site, or residential development, our manned guarding solutions provide reassurance and round-the-clock protection."
    ],
    sections: [
      {
        title: "What is Manned Guarding?",
        text: [
          "Manned guarding involves the deployment of trained security personnel on-site to monitor premises, control access, and maintain safety. Unlike automated systems alone, a professional security officer provides immediate human response and acts as a strong deterrent to criminal activity."
        ],
        subtitle: "Our officers carry out duties such as:",
        bullets: [
          "Monitoring entry and exit points",
          "Conducting routine patrols",
          "Preventing unauthorised access",
          "Monitoring CCTV systems",
          "Responding to alarms or incidents",
          "Maintaining security reports and logs"
        ]
      },
      {
        title: "Why Choose SECURE NEST SERVICES for Manned Guarding?",
        subtitle: "Businesses across the UK rely on SECURE NEST SERVICES because we deliver reliable, professional, and adaptable security services. We provide:",
        bullets: [
          "Fully SIA-licensed security officers",
          "Staff vetted in line with BS7858 standards",
          "24/7 security coverage",
          "Flexible contracts tailored to your site",
          "Professional guards trained in customer service"
        ],
        callout: "Our security personnel represent your organisation professionally while ensuring your site remains secure."
      }
    ],
    ctaText: {
      title: "Secure Your Site with Manned Guarding",
      text: "Protect your commercial facility, warehouse, or residential complex with reliable 24/7 manned guarding from SECURE NEST SERVICES.",
      subtext: "Contact our team today to deploy trained SIA-licensed security officers to your site."
    }
  },

  // -------------------------------------------------------------
  // 6. EDUCATIONAL SECURITY
  // -------------------------------------------------------------
  "educational-security": {
    title: "Educational Security",
    subtitle: "EDUCATIONAL SECURITY SERVICES",
    tagline: "Safeguarding Schools, Colleges & Universities Across the UK",
    heroImage: "/educational-security.jpg",
    intro: [
      "At SECURE NEST SERVICES we provide professional educational security services designed to safeguard schools, colleges, and universities across the UK. Our trained SIA-licensed security officers and experienced security personnel help create a safe learning environment where students, staff, and visitors can focus on education without distraction or risk.",
      "From controlling access to monitoring premises, our tailored security solutions protect educational institutions against threats, minimise incidents, and ensure compliance with modern safety standards."
    ],
    sections: [
      {
        title: "Why Educational Security is Important",
        subtitle: "Educational settings face unique security challenges, including:",
        bullets: [
          "Unauthorised access to school grounds",
          "Bullying, antisocial behaviour, or violence",
          "Theft of equipment or property",
          "Vandalism and property damage",
          "Emergencies requiring rapid response"
        ],
        callout: "Professional educational security ensures that these risks are effectively managed, helping students and staff feel safe while maintaining a positive and welcoming environment."
      },
      {
        title: "Our Educational Security Services",
        subtitle: "SECURE NEST SERVICES offers a comprehensive range of security services for educational institutions:",
        subsections: [
          {
            title: "On-Site Security Officers",
            bullets: [
              "SIA-licensed officers provide a visible and professional presence",
              "Monitor school grounds, corridors, entrances, and exits",
              "Act as a deterrent to antisocial behaviour"
            ]
          },
          {
            title: "Access Control & Visitor Management",
            bullets: [
              "Screening of visitors and contractors",
              "Controlled entry and exit points",
              "Management of authorised personnel during events or open days"
            ]
          },
          {
            title: "CCTV Monitoring",
            bullets: [
              "Real-time monitoring of school and campus CCTV systems",
              "Detects suspicious activity and responds swiftly",
              "Integration with alarm systems for rapid response"
            ]
          },
          {
            title: "Emergency Response & Incident Management",
            bullets: [
              "Rapid response to medical, safety, or security incidents",
              "Liaison with police, fire, or medical services if required",
              "Detailed incident reporting for compliance and safeguarding purposes"
            ]
          },
          {
            title: "Event Security",
            bullets: [
              "Safe management of school events, sports days, and open evenings",
              "Crowd management and access control for external visitors",
              "Protection for visiting dignitaries, staff, and students"
            ]
          }
        ]
      },
      {
        title: "Benefits of Choosing SECURE NEST SERVICES for Educational Security",
        subtitle: "Our clients trust SECURE NEST SERVICES because we provide:",
        bullets: [
          "SIA-licensed and fully vetted officers",
          "Comprehensive security tailored to educational environments",
          "Flexible coverage, from part-time monitoring to full-time on-site protection",
          "Modern risk assessments aligned with UK safeguarding and H&S standards",
          "Integration with CCTV, alarm systems, and emergency protocols"
        ],
        callout: "By providing professional security, we help schools, colleges, and universities maintain a safe, orderly, and nurturing learning environment."
      },
      {
        title: "Who Can Benefit from Educational Security?",
        bullets: [
          "Primary and secondary schools",
          "Colleges and sixth-form institutions",
          "Universities and higher education campuses",
          "Private academies and boarding schools",
          "Multi-site educational trusts"
        ],
        callout: "Whether your institution is a small local school or a large university campus, SECURE NEST SERVICES can provide scalable, professional security solutions."
      }
    ],
    ctaText: {
      title: "Contact SECURE NEST SERVICES",
      text: "Protect your students, staff, and premises with professional educational security services from SECURE NEST SERVICES. Our team will assess your security needs, design a tailored protection plan, and ensure a safe environment for learning — 24 hours a day, 7 days a week.",
      subtext: "SECURE NEST SERVICES– Professional Educational Security You Can Trust."
    }
  },

  // -------------------------------------------------------------
  // 7. HOTEL & CONCIERGE SECURITY
  // -------------------------------------------------------------
  "hotel-concierge": {
    title: "Hotel & Concierge security",
    subtitle: "HOTEL & CONCIERGE SECURITY SERVICES",
    tagline: "Discreet Security & 5-Star Hospitality Support",
    heroImage: "/Hotel & Concierge security.jpg",
    intro: [
      "At SECURE NEST SERVICES. we provide professional hotel and concierge security services designed to protect guests, staff, and property while enhancing the overall hospitality experience. Our trained SIA-licensed security officers deliver discreet, professional security tailored to hotels, resorts, and high-end residential complexes across the UK.",
      "Our approach combines safety, vigilance, and customer service, ensuring your guests feel secure without compromising the comfort or luxury of their stay."
    ],
    sections: [
      {
        title: "Why Hotel Security is Essential",
        subtitle: "Hotels and hospitality venues face unique security challenges, including:",
        bullets: [
          "Unauthorised access to guest rooms and restricted areas",
          "Theft or vandalism of property",
          "Disruptive or aggressive behaviour from guests or visitors",
          "Emergency situations, such as fire, medical incidents, or evacuations",
          "Managing high-profile or VIP guests safely"
        ],
        callout: "Professional hotel security ensures that these risks are effectively mitigated while maintaining a welcoming environment for all guests."
      },
      {
        title: "Our Hotel & Concierge Security Services",
        subtitle: "SECURE NEST SERVICES. offers a full suite of security services for the hospitality sector:",
        subsections: [
          {
            title: "On-Site Security Officers",
            bullets: [
              "SIA-licensed officers provide a visible, professional presence",
              "Patrols of hotel premises, including entrances, corridors, and back-of-house areas",
              "Rapid response to incidents or emergencies"
            ]
          },
          {
            title: "Concierge Security & Guest Assistance",
            bullets: [
              "Discreet personal assistance for VIP guests",
              "Escorting guests safely to and from rooms, parking, or transport",
              "Coordinating with reception and management teams for smooth guest experiences"
            ]
          },
          {
            title: "Access Control & Surveillance",
            bullets: [
              "Managing authorised access to restricted areas",
              "Monitoring CCTV systems and alarm triggers",
              "Responding swiftly to potential threats or security breaches"
            ]
          },
          {
            title: "Event & Function Security",
            bullets: [
              "Safe management of hotel events, conferences, and private functions",
              "Crowd management and entry control for external visitors",
              "Protection for dignitaries, performers, or VIP guests attending events"
            ]
          },
          {
            title: "Emergency Response",
            bullets: [
              "Fire alarm, medical emergencies, and evacuation support",
              "Liaising with local emergency services",
              "Incident reporting and post-event security review"
            ]
          }
        ]
      },
      {
        title: "Benefits of Choosing SECURE NEST SERVICES.",
        subtitle: "Hotels and hospitality venues choose SECURE NEST SERVICES for security because we deliver:",
        bullets: [
          "SIA-licensed and fully vetted security personnel",
          "Discreet and professional service that complements guest experience",
          "Flexible staffing solutions for permanent or temporary coverage",
          "Integration with CCTV, alarm systems, and concierge operations",
          "Nationwide coverage across the UK"
        ],
        callout: "Our officers not only protect your property and staff but also enhance your reputation for professionalism and guest safety."
      },
      {
        title: "Who Can Benefit from Hotel & Concierge Security?",
        bullets: [
          "Hotels and resorts of all sizes",
          "Luxury residential complexes",
          "Serviced apartments and boutique hotels",
          "Conference and events venues within hospitality properties",
          "High-profile or VIP guest accommodations"
        ],
        callout: "Whether your venue hosts hundreds of guests or a select VIP clientele, SECURE NEST SERVICES. provides security that is both professional and unobtrusive."
      }
    ],
    ctaText: {
      title: "Contact SECURE NEST SERVICES",
      text: "Ensure your guests and staff are safe while maintaining the high standards of your hospitality services with SECURE NEST SERVICES. hotel and concierge security services.",
      subtext: "Contact us today to arrange a tailored security plan for your hotel, resort, or residential complex. SECURE NEST SERVICES – Professional Hotel & Concierge Security You Can Trust."
    }
  },

  // -------------------------------------------------------------
  // 8. WAREHOUSE SECURITY
  // -------------------------------------------------------------
  "warehouse-security": {
    title: "Ware House Security",
    subtitle: "WARE HOUSE SECURITY SERVICES",
    tagline: "Comprehensive Logistics & Inventory Protection",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    intro: [
      "At SECURE NEST SERVICES we provide professional warehouse security services designed to protect your goods, staff, and facilities from theft, vandalism, and operational disruptions.",
      "Warehouses and distribution centres hold valuable inventory and operate around the clock, making them a common target for criminal activity. Our SIA-licensed security officers provide a strong and visible security presence, ensuring your assets remain protected while your operations run smoothly.",
      "We deliver tailored warehouse security solutions across the UK, helping logistics companies, storage facilities, and distribution centres maintain a secure and efficient working environment."
    ],
    sections: [
      {
        title: "Why Warehouse Security is Essential",
        subtitle: "Warehouses face several security risks that can impact operations and profitability, including:",
        bullets: [
          "Theft of high-value goods and equipment",
          "Unauthorised access to restricted storage areas",
          "Internal theft or inventory tampering",
          "Trespassing or vandalism on warehouse premises",
          "Security risks during loading and unloading operations",
          "Fire hazards, emergencies, or health and safety incidents"
        ],
        callout: "Professional warehouse security helps prevent losses, protect employees, and ensure smooth day-to-day operations."
      },
      {
        title: "Our Warehouse Security Services",
        subtitle: "SECURE NEST SERVICES offers a comprehensive range of warehouse security solutions tailored to meet the needs of logistics and storage facilities:",
        subsections: [
          {
            title: "On-Site Security Officers",
            text: "Our highly trained security officers provide a visible deterrent against criminal activity while maintaining a professional presence on site.",
            bullets: [
              "SIA-licensed and fully vetted security personnel",
              "Regular patrols of warehouse facilities and surrounding areas",
              "Monitoring staff and visitor activity",
              "Immediate response to suspicious behaviour or security incidents"
            ]
          },
          {
            title: "Access Control & Entry Management",
            text: "Controlling who enters and exits your facility is crucial to maintaining security.",
            bullets: [
              "Verification of staff, visitors, and contractors",
              "Vehicle and delivery access management",
              "Monitoring entry and exit points",
              "Preventing unauthorised access to restricted zones"
            ]
          },
          {
            title: "CCTV Monitoring & Surveillance",
            text: "Our officers assist with monitoring and managing security technology to protect your warehouse.",
            bullets: [
              "Monitoring CCTV systems and alarms",
              "Identifying suspicious activity in real time",
              "Immediate response to security breaches",
              "Detailed incident reporting"
            ]
          },
          {
            title: "Loading Bay & Logistics Security",
            text: "Loading areas are often vulnerable to theft and unauthorised access.",
            bullets: [
              "Supervision of goods during loading and unloading",
              "Monitoring delivery vehicles and drivers",
              "Preventing cargo theft and inventory loss",
              "Ensuring safe and organised logistics operations"
            ]
          },
          {
            title: "Mobile Patrols & Perimeter Security",
            text: "For large warehouses and distribution centres, regular patrols help maintain full site protection.",
            bullets: [
              "External and internal security patrols",
              "Monitoring fences, gates, and perimeter areas",
              "Lock and unlock services for warehouse facilities",
              "Detection of suspicious activity outside operational hours"
            ]
          }
        ]
      },
      {
        title: "Benefits of Choosing SECURE NEST SERVICES",
        subtitle: "Businesses trust SECURE NEST SERVICES for warehouse security because we provide:",
        bullets: [
          "SIA-licensed and fully trained security officers",
          "Reliable protection for high-value goods and inventory",
          "Flexible security solutions for warehouses of all sizes",
          "Integration with CCTV, alarm systems, and access control",
          "Professional incident reporting and risk management",
          "Nationwide security coverage across the UK"
        ],
        callout: "Our security teams ensure that your warehouse operations remain secure, efficient, and protected at all times."
      },
      {
        title: "Who Can Benefit from Warehouse Security?",
        subtitle: "Our warehouse security services are ideal for:",
        bullets: [
          "Distribution centres",
          "Logistics companies",
          "Storage and fulfilment warehouses",
          "Manufacturing facilities",
          "E-commerce storage facilities",
          "Wholesale and retail supply warehouses"
        ],
        callout: "Whether you manage a small storage facility or a large distribution hub, SECURE NEST SERVICES delivers professional security tailored to your operational needs."
      }
    ],
    ctaText: {
      title: "Contact SECURE NEST SERVICES",
      text: "Protect your warehouse, goods, and workforce with professional warehouse security services from SECURE NEST SERVICES.",
      subtext: "Contact us today to discuss a tailored security solution for your warehouse or logistics facility. SECURE NEST SERVICES– Reliable Warehouse Security You Can Trust."
    }
  },

  // -------------------------------------------------------------
  // 9. CORPORATE SECURITY SERVICES
  // -------------------------------------------------------------
  "corporate-security": {
    title: "Corporate Security services",
    subtitle: "CORPORATE SECURITY SERVICES",
    tagline: "Tailored Security for Offices, Headquarters & Commercial Buildings",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    intro: [
      "Businesses require security solutions that protect staff, visitors, and sensitive information while maintaining a professional corporate environment.",
      "SECURE NEST SERVICES provides tailored corporate security services designed for offices, headquarters, and commercial buildings across the UK."
    ],
    sections: [
      {
        title: "Corporate Security Solutions",
        subtitle: "Our services include:",
        bullets: [
          "Reception and front-of-house security",
          "Access control management",
          "Visitor verification procedures",
          "CCTV monitoring",
          "Internal and external patrols",
          "Emergency response support"
        ],
        callout: "Our officers are trained to combine security awareness with excellent customer service, ensuring visitors feel welcomed while maintaining strict safety standards."
      },
      {
        title: "Protecting Your Workplace",
        subtitle: "Corporate security plays an important role in protecting:",
        bullets: [
          "Staff and visitors",
          "Company assets and equipment",
          "Confidential information",
          "Business operations and reputation"
        ],
        callout: "SECURE NEST SERVICES. ensures your workplace remains safe, professional, and secure."
      }
    ],
    ctaText: {
      title: "Protect Your Corporate Premises",
      text: "Contact SECURE NEST SERVICES today to arrange tailored corporate security management for your corporate office or commercial building.",
      subtext: "Call us today or request a consultation online for professional UK corporate protection."
    }
  },

  // -------------------------------------------------------------
  // 10. CONSTRUCTION SITE SECURITY
  // -------------------------------------------------------------
  "construction-security": {
    title: "Construction Site security",
    subtitle: "CONSTRUCTION SITE SECURITY",
    tagline: "Plant, Tool & Site Safeguarding Across the UK",
    heroImage: "/Construction Site security.jpg",
    intro: [
      "Construction sites are frequent targets for theft, trespassing, and vandalism. Equipment, materials, and machinery are valuable assets that require reliable protection. Secure Nest Services offers specialist construction site security services designed to safeguard building projects across the UK."
    ],
    sections: [
      {
        title: "Why Construction Sites Need Security",
        subtitle: "Without proper security measures, construction sites face risks such as:",
        bullets: [
          "Theft of tools and machinery",
          "Vandalism and property damage",
          "Unauthorised access or trespassing",
          "Health and safety risks from intruders"
        ],
        callout: "Our trained security officers help prevent these issues while ensuring compliance with site safety procedures."
      },
      {
        title: "Our Construction Security Services",
        subtitle: "Secure Nest Services provides comprehensive site protection:",
        bullets: [
          "On-site security guards",
          "Access control for staff and contractors",
          "Regular patrols around the site perimeter",
          "Monitoring of CCTV systems",
          "Incident reporting and documentation"
        ],
        callout: "With professional security in place, contractors and project managers can focus on completing projects safely and efficiently."
      }
    ],
    ctaText: {
      title: "Safeguard Your Construction Site",
      text: "Protect your machinery, materials, and workforce from theft and vandalism with specialist construction site security from SECURE NEST SERVICES.",
      subtext: "Contact our team today to deploy trained security guards to your site."
    }
  }
};

// =========================================================================
// UNIVERSAL SERVICE PAGE COMPONENT (100% VERBATIM RENDERER)
// =========================================================================
export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  let slug = resolvedParams?.slug || "";

  // Slug aliases fallback
  if (slug === "residential") slug = "residential-services";
  if (slug === "warehouse") slug = "warehouse-security";
  if (slug === "corporate") slug = "corporate-security";
  if (slug === "construction") slug = "construction-security";

  const data = allServicesData[slug];

  if (!data) {
    return notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      
      {/* 1. TOP HERO BANNER */}
      <section className="relative bg-slate-950 text-white py-14 px-6 border-b border-slate-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-teal-400">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-teal-400">Services</Link>
              <span>/</span>
              <span className="text-teal-400 font-semibold">{data.title}</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-teal-400" /> {data.tagline}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {data.title}
            </h1>

            {data.subtitle && (
              <h3 className="text-xl sm:text-2xl font-bold text-teal-400">
                {data.subtitle}
              </h3>
            )}

            {data.courseNote && (
              <p className="text-teal-300 font-medium text-xs sm:text-sm italic">
                {data.courseNote}
              </p>
            )}

            {data.companySubhead && (
              <div className="pt-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-200">
                  {data.companySubhead}
                </h4>
                {data.nationwideSubhead && (
                  <p className="text-teal-400 text-xs sm:text-sm font-semibold">
                    {data.nationwideSubhead}
                  </p>
                )}
              </div>
            )}

            {data.intro.map((p, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-sm"
              >
                <FileText className="w-4 h-4" /> Request a Quote
              </Link>
              <a
                href="tel:+447411523527"
                className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-teal-400" /> Call: +44 7411 523527
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[340px] lg:h-[450px]">
            <img 
              src={data.heroImage} 
              alt={data.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 !bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-xs text-slate-200">
              <p className="font-bold text-teal-400 flex items-center gap-1.5 mb-1 text-sm">
                <Shield className="w-4 h-4" /> SIA Licensed &amp; Vetted Personnel
              </p>
              <p className="text-slate-300 text-xs">
                Comprehensive security coverage across the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT SECTIONS (VERBATIM) */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {data.sections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-6">
            
            {/* Alert Box (e.g., 2026 Cladding Regulations) */}
            {section.alertBox && (
              <div className="bg-amber-50 border-2 border-amber-400 p-6 md:p-8 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center gap-3 text-amber-900 font-extrabold text-lg md:text-xl">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                  <h2>{section.alertBox.title}</h2>
                </div>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                  {section.alertBox.text}
                </p>
              </div>
            )}

            {/* Section Heading & Text */}
            {section.title && (
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {section.title}
                </h2>
                {section.text && section.text.map((t, tIdx) => (
                  <p key={tIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {t}
                  </p>
                ))}
                {section.subtitle && (
                  <h4 className="font-bold text-slate-900 text-base pt-1">
                    {section.subtitle}
                  </h4>
                )}
              </div>
            )}

            {/* Bullets List */}
            {section.bullets && (
              <div className="grid sm:grid-cols-2 gap-3.5">
                {section.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-medium leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Subsections (like in Retail, Educational, Hotel, Warehouse, Event) */}
            {section.subsections && (
              <div className="grid md:grid-cols-2 gap-5 pt-2">
                {section.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                      {sub.title}
                    </h3>
                    {sub.text && (
                      <p className="text-slate-600 text-sm leading-relaxed">{sub.text}</p>
                    )}
                    {sub.bullets && (
                      <ul className="space-y-2 text-sm text-slate-700 pt-1">
                        {sub.bullets.map((sb, sbIdx) => (
                          <li key={sbIdx} className="flex items-start gap-2">
                            <span className="text-teal-600 font-bold">•</span>
                            <span>{sb}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Numbered Steps (e.g. Event Security Process) */}
            {section.steps && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {section.steps.map((st, stIdx) => (
                  <div key={stIdx} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-teal-600 text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                      {st.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{st.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Callout Highlight */}
            {section.callout && (
              <div className="p-4.5 bg-teal-50/80 border-l-4 border-teal-600 rounded-r-xl text-teal-950 font-semibold text-sm sm:text-base leading-relaxed">
                {section.callout}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* 3. FINAL CONSULTATION CTA BOX */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">
        <div className="bg-teal-500/10 text-white p-8 md:p-12 rounded-3xl shadow-xl space-y-4">
          <h2 className="text-2xl md:text-4xl font-black">
            {data.ctaText.title}
          </h2>
          <p className="text-teal-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {data.ctaText.text}
          </p>
          {data.ctaText.subtext && (
            <p className="text-teal-200 text-sm font-medium">
              {data.ctaText.subtext}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link 
              href="/contact" 
              className="bg-white text-teal-950 hover:bg-teal-50 font-bold px-8 py-3.5 rounded-lg shadow-md hover:scale-105 transition-all text-sm flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-teal-700" /> Arrange Consultation
            </Link>
            <a 
              href="tel:+447411523527" 
              className="bg-teal-950/80 hover:bg-teal-950 border border-teal-500/50 text-white font-bold px-8 py-3.5 rounded-lg shadow-md hover:scale-105 transition-all text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-400" /> Call: +44 7411 523527
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}