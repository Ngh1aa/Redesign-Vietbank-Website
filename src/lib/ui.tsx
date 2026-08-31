import { Link } from "react-router"
import { ChevronRight } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Shared design-system primitives — one source of truth for brand,   */
/*  navigation, buttons and section grammar across every page.         */
/* ------------------------------------------------------------------ */

export const HOTLINE = "1800 1122"
export const HOTLINE_TEL = "tel:18001122"

/**
 * Top-level navigation. Mega-menu `children` are rendered as dropdown
 * panels on desktop, inline lists on mobile. Deep links intentionally land
 * on need-based anchors so users arriving from navigation do not need to
 * re-scan the whole category page.
 */
export type NavItem = {
  label: string
  to: string
  caret?: boolean
  children?: { label: string; to: string; hint?: string }[]
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "Cá nhân",
    to: "/ca-nhan",
    caret: true,
    children: [
      { label: "Tài khoản thanh toán", to: "/ca-nhan#accounts", hint: "Mở online với eKYC" },
      { label: "Tiết kiệm", to: "/ca-nhan#savings", hint: "Xem kỳ hạn & cách bắt đầu" },
      { label: "Thẻ", to: "/the#cards", hint: "Danh mục thẻ Vietbank" },
      { label: "Vay vốn", to: "/ca-nhan#loans", hint: "Mua nhà · ô tô · tiêu dùng" },
      { label: "Ngân hàng số", to: "/ngan-hang-so#digital-plus", hint: "Vietbank Digital Plus" },
    ],
  },
  {
    label: "Doanh nghiệp",
    to: "/doanh-nghiep",
    caret: true,
    children: [
      { label: "Tài khoản doanh nghiệp", to: "/doanh-nghiep#accounts", hint: "Thanh toán & vận hành dòng tiền" },
      { label: "Vay & tài trợ vốn", to: "/doanh-nghiep#credit", hint: "Vốn lưu động · tín dụng" },
      { label: "Quản lý dòng tiền", to: "/doanh-nghiep#cash-management", hint: "DigiBiz · quản trị & phê duyệt" },
      { label: "Tài trợ thương mại", to: "/doanh-nghiep#trade", hint: "L/C · XNK · chuyển tiền quốc tế" },
      { label: "DigiBiz", to: "/ngan-hang-so#digibiz", hint: "Ngân hàng số doanh nghiệp" },
    ],
  },
  {
    label: "Ngân hàng số",
    to: "/ngan-hang-so",
    caret: true,
    children: [
      { label: "Vietbank Digital Plus", to: "/ngan-hang-so#digital-plus", hint: "Cá nhân · iOS / Android" },
      { label: "Vietbank DigiBiz", to: "/ngan-hang-so#digibiz", hint: "Doanh nghiệp · nền tảng số" },
      { label: "Hướng dẫn chuyển đổi", to: "/ngan-hang-so#migration", hint: "Từ Vietbank Digital cũ" },
      { label: "An toàn ngân hàng số", to: "/ho-tro#security", hint: "Kênh chính thức · chống lừa đảo" },
    ],
  },
  { label: "Thẻ", to: "/the" },
  { label: "Hỗ trợ", to: "/ho-tro" },
  { label: "Về Vietbank", to: "/ve-vietbank" },
  { label: "Nhà đầu tư", to: "/nha-dau-tu" },
]

/* Standardised button system — Primary / Secondary / on-dark. Two sizes only. */
export const BTN = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-md bg-navy font-semibold text-white transition-colors hover:bg-navy-700 active:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-md border border-navy bg-surface font-semibold text-navy transition-colors hover:bg-navy-050 active:bg-navy-050 disabled:opacity-50 disabled:cursor-not-allowed",
  onDark:
    "inline-flex items-center justify-center gap-2 rounded-md bg-white font-semibold text-navy transition-colors hover:bg-white/90 active:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed",
  onDarkGhost:
    "inline-flex items-center justify-center gap-2 rounded-md border border-white/25 font-semibold text-white transition-colors hover:bg-white/10 active:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold text-navy transition-colors hover:bg-navy-050 active:bg-navy-050/70",
}
export const BTN_SIZE = {
  lg: "px-5 py-3 text-[15px]",
  sm: "px-4 py-2.5 text-[14px]",
}

/**
 * Logo lockup for this concept build.
 * The exact digital logo asset must be replaced by the official vector package
 * before production brand lock; palette/geometry remain logo-derived here.
 */
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

/* ------------------------------------------------------------- */
/*  FormField — accessible label + input + optional error/help   */
/* ------------------------------------------------------------- */
export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  error,
  help,
  multiline = false,
  rows = 4,
  autoComplete,
  inputMode,
  pattern,
  value,
  onChange,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  help?: string
  multiline?: boolean
  rows?: number
  autoComplete?: string
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url"
  pattern?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) {
  const errId = error ? `${id}-error` : undefined
  const helpId = help ? `${id}-help` : undefined
  const describedBy = [errId, helpId].filter(Boolean).join(" ") || undefined

  return (
    <div>
      <label htmlFor={id} className="text-[13px] font-semibold text-ink">
        {label}
        {required && (
          <>
            {" "}
            <span className="text-red" aria-hidden="true">
              *
            </span>
          </>
        )}
        {required && <span className="sr-only">(bắt buộc)</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="input-base mt-1.5 resize-y"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          autoComplete={autoComplete}
          inputMode={inputMode}
          pattern={pattern}
          value={value}
          onChange={onChange}
          className="input-base mt-1.5"
        />
      )}
      {help && !error && (
        <p id={helpId} className="mt-1.5 text-[12.5px] text-ink-soft">
          {help}
        </p>
      )}
      {error && (
        <p id={errId} role="alert" className="field-error">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------- */
/*  LocaleSwitcher — VI / EN placeholder (real i18n is post-MVP) */
/* ------------------------------------------------------------- */
export function LocaleSwitcher({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-1 text-[13px] ${className}`}
      role="group"
      aria-label="Chọn ngôn ngữ"
    >
      <button
        aria-pressed="true"
        aria-label="Tiếng Việt"
        className="rounded px-1.5 py-0.5 font-semibold text-white"
      >
        VI
      </button>
      <span aria-hidden="true" className="text-white/50">
        /
      </span>
      <button
        aria-pressed="false"
        aria-label="English"
        className="rounded px-1.5 py-0.5 text-white/70 transition-colors hover:text-white"
        disabled
        title="Phiên bản tiếng Anh sắp ra mắt"
      >
        EN
      </button>
    </div>
  )
}
