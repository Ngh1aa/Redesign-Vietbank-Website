import { Link } from "react-router"
import { ChevronRight } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Shared design-system primitives — one source of truth for brand,   */
/*  navigation, buttons and section grammar across every page.         */
/* ------------------------------------------------------------------ */

export const HOTLINE = "1800 1122"
export const HOTLINE_TEL = "tel:18001122"

export const NAV_LINKS: { label: string; to: string; caret?: boolean }[] = [
  { label: "Cá nhân", to: "/ca-nhan", caret: true },
  { label: "Doanh nghiệp", to: "/doanh-nghiep", caret: true },
  { label: "Ngân hàng số", to: "/ngan-hang-so", caret: true },
  { label: "Thẻ", to: "/the" },
  { label: "Hỗ trợ", to: "/ho-tro" },
  { label: "Về Vietbank", to: "/ve-vietbank" },
  { label: "Nhà đầu tư", to: "/nha-dau-tu" },
]

/* Standardised button system — Primary / Secondary / on-dark. Two sizes only. */
export const BTN = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-md bg-navy font-semibold text-white transition-colors hover:bg-navy-700",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-md border border-navy bg-surface font-semibold text-navy transition-colors hover:bg-navy-050",
  onDark:
    "inline-flex items-center justify-center gap-2 rounded-md bg-white font-semibold text-navy transition-colors hover:bg-white/90",
  onDarkGhost:
    "inline-flex items-center justify-center gap-2 rounded-md border border-white/25 font-semibold text-white transition-colors hover:bg-white/10",
}
export const BTN_SIZE = {
  lg: "px-5 py-3 text-[15px]",
  sm: "px-4 py-2.5 text-[14px]",
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
        <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" fill="var(--color-red)" />
        <polygon points="50,4 91,27 91,50 50,50" fill="var(--color-yellow)" />
        <text
          x="50"
          y="50"
          dominantBaseline="central"
          textAnchor="middle"
          fontFamily="Be Vietnam Pro, sans-serif"
          fontWeight="700"
          fontSize="38"
          fill="#fff"
        >
          VB
        </text>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[20px] font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}
          style={{ letterSpacing: "-0.01em" }}
        >
          VIETBANK
        </span>
        <span
          className={`mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] ${
            light ? "text-white/55" : "text-ink-soft"
          }`}
        >
          Tăng trưởng · An toàn · Bền vững
        </span>
      </span>
    </div>
  )
}

export function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-ink-soft">
      <span className="text-xs tnum text-amber">{n}</span>
      <span className="h-px w-8 bg-line" />
      <span className="text-xs font-semibold uppercase tracking-[0.16em]">{children}</span>
    </div>
  )
}

/* Consistent page opener — breadcrumb + purpose. Type A institutional white. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  crumb,
}: {
  eyebrow: string
  title: React.ReactNode
  lead: string
  crumb: string
}) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1240px] px-6 py-12 lg:py-16">
        <nav className="mb-6 flex items-center gap-1.5 text-[13px] text-ink-soft" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-navy">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-ink">{crumb}</span>
        </nav>
        <SectionLabel n="—">{eyebrow}</SectionLabel>
        <h1 className="mt-3 max-w-[820px] font-display text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{lead}</p>
      </div>
    </section>
  )
}
