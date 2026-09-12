import { Briefcase, CheckCircle2, Mail } from "lucide-react"

const requirements = [
  "Valid SIA licence (Door Supervisor or Security Guard)",
  "Right to work in the UK",
  "Excellent communication and customer service skills",
  "Reliable, punctual and professional attitude",
]

export function CareersSection() {
  return (
    <section id="careers" className="relative border-y border-white/5 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-teal-950/40 to-[#05070f]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300">
                <Briefcase className="h-4 w-4" />
                We&apos;re Hiring
              </span>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight !text-white sm:text-4xl">
                Join Our Team of SIA Licensed Guards
              </h2>
              <p className="mt-4 text-pretty text-lg !text-slate-300">
                Secure Nest Services is growing across the UK and we&apos;re looking for dedicated, SIA licensed
                security professionals to join us. Competitive pay, flexible shifts and genuine career progression.
              </p>

              <ul className="mt-8 space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <a
                  href="mailto:info@securenestservices.com?subject=Security%20Guard%20Application%20-%20SIA%20Licensed&body=Hi%20Secure%20Nest%20Services%2C%0A%0AI%20would%20like%20to%20apply%20for%20a%20security%20guard%20position.%0A%0AName%3A%0APhone%3A%0ASIA%20Licence%20Number%3A%0ALocation%3A%0AAvailability%3A%0A%0AThank%20you."
                  className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-teal-500/20 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/50 transition-colors hover:bg-teal-500"
                >
                  <Mail className="h-5 w-5" />
                  Apply by Email
                </a>
                <p className="mt-4 text-sm !text-slate-400">
                  Send your CV and SIA licence details to{" "}
                  <a href="mailto:info@securenestservices.com" className="font-medium !text-teal-400 hover:underline">
                    info@securenestservices.com
                  </a>
                </p>
              </div>
            </div>

            <div className="relative min-h-64 lg:min-h-full">
              <img
                src="/careers-guard.png"
                alt="SIA licensed Secure Nest security guards on duty"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#070b18] lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
