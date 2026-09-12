import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Crumb = { label: string; href?: string }

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string
  title: string
  description?: string
  breadcrumbs?: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#070b18]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_-20%,rgba(37,99,235,0.18),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-teal-400">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-200">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="h-4 w-4 text-slate-600" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">{eyebrow}</span>
        )}
        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-pretty text-lg text-slate-400">{description}</p>}
      </div>
    </section>
  )
}
