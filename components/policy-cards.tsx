"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { policies } from "@/lib/site-content"

export function PolicyCards() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {policies.map((policy, i) => {
        const Icon = policy.icon
        const isOpen = open === i
        return (
          <div
            key={policy.title}
            className={`border bg-gradient-to-b from-white/[0.06] to-transparent transition-colors ${
              isOpen ? "border-teal-500/40" : "border-white/10 hover:border-white/25"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 p-6 text-left"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20">
                <Icon className="h-6 w-6" />
              </span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug text-white">{policy.title}</h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-teal-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{policy.summary}</p>
              </span>
            </button>

            <div
              className={`grid overflow-hidden px-6 transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">
                  {policy.details}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
