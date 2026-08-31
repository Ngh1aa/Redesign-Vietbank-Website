import { Link } from "react-router"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"
import { SectionLabel, BTN, BTN_SIZE } from "./ui"
import { EXTERNAL_LINK_PROPS } from "./official"

export function Section({
  children,
  tone = "white",
  id,
}: {
  children: React.ReactNode
  tone?: "white" | "soft" | "brand"
  id?: string
}) {
  const bg = tone === "soft" ? "bg-soft" : tone === "brand" ? "bg-navy-700 text-white" : "bg-paper"
  return (
    <section id={id} className={`border-b border-line ${bg}`}>
      <div className="mx-auto max-w-[1240px] px-6 py-12 lg:py-16">{children}</div>
    </section>
  )
}

export function SectionHead({
  n,
  eyebrow,
  title,
  lead,
}: {
  n: string
  eyebrow: string
  title: string
  lead?: string
}) {
  return (
    <div className="max-w-2xl">
      <SectionLabel n={n}>{eyebrow}</SectionLabel>
      <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-tight tracking-tight">{title}</h2>
      {lead && <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">{lead}</p>}
    </div>
  )
}

export function FeatureRow({
  icon: Icon,
  title,
  body,
  cues,
  to,
  cta = "Tìm hiểu",
}: {
  icon: any
  title: string
  body: string
  cues?: string[]
  to: string
  cta?: string
}) {
  return (
    <Link to={to} className="group flex flex-col gap-3 py-6 transition-colors sm:flex-row sm:items-start sm:gap-6">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy-050 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <div className="flex-1">
        <h3 className="text-[18px] font-semibold tracking-tight group-hover:text-navy">{title}</h3>
        <p className="mt-1.5 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">{body}</p>
        {cues && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px] text-ink">
            {cues.map((cue) => (
              <span key={cue} className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-navy" /> {cue}</span>
            ))}
          </div>
        )}
      </div>
      <span className="mt-1 hidden items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold text-navy group-hover:underline sm:flex">
        {cta} <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}

export type ActionTarget = {
  label: string
  to?: string
  href?: string
}

export function ActionLink({
  action,
  variant = "primary",
  size = "lg",
  className = "",
}: {
  action: ActionTarget
  variant?: keyof typeof BTN
  size?: keyof typeof BTN_SIZE
  className?: string
}) {
  const classes = `${BTN[variant]} ${BTN_SIZE[size]} ${className}`

  if (action.href) {
    return (
      <a href={action.href} {...EXTERNAL_LINK_PROPS} className={classes}>
        {action.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link to={action.to || "/"} className={classes}>
      {action.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

export function CTABand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string
  body: string
  primary: ActionTarget
  secondary?: ActionTarget
}) {
  return (
    <section id="contact" className="scroll-mt-28 border-b border-line bg-navy-700 text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-14 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-tight">{title}</h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-white/80">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ActionLink action={primary} variant="onDark" />
          {secondary && <ActionLink action={secondary} variant="onDarkGhost" />}
        </div>
      </div>
    </section>
  )
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-6 py-6">
      <div className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-tight text-navy tnum">{value}</div>
      <div className="mt-1 text-[13.5px] leading-snug text-ink-soft">{label}</div>
    </div>
  )
}

export function InlineLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex min-h-11 items-center gap-1.5 text-[14.5px] font-semibold text-navy hover:underline">
      {children} <ChevronRight className="h-4 w-4" />
    </Link>
  )
}
