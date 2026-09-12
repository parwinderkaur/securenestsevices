"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { services } from "@/lib/services"

export function QuoteForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const mailtoHref = () => {
    const subject = `Quote Request${service ? ` - ${service}` : ""}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      "Details:",
      message,
    ].join("\n")
    return `mailto:info@securenestservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = mailtoHref()
  }

  const fieldClass =
    "w-full rounded-lg border border-white/10 bg-[#05070f] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+44 7411 523527"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
          Service Required
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fieldClass}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about the site, dates and cover you need..."
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-teal-500/20 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/50 transition-colors hover:bg-teal-500 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        Send Enquiry
      </button>
      <p className="text-xs text-slate-500">
        Submitting opens your email client with the details prefilled, ready to send to our team.
      </p>
    </form>
  )
}
