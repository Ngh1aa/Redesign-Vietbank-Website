import { Link } from "react-router"
import { ChevronRight } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Shared design-system primitives — one source of truth for brand,   */
/*  navigation, buttons and section grammar across every page.         */
/* ------------------------------------------------------------------ */

export const HOTLINE = "1800 1122"
export const HOTLINE_TEL = "tel:18001122"

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
      { label: "Tài khoản thanh toán", to: "/ca-nhan#accounts", hint: "Mở trực tuyến với eKYC" },
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
  lg: "min-h-12 px-5 py-3 text-[15px]",
  sm: "min-h-11 px-4 py-2.5 text-[14px]",
}

/**
 * Uses the public logo asset currently served by Vietbank's official website.
 * For a production handoff, replace the remote URL with the licensed brand
 * package supplied by Vietbank; keeping the public URL here avoids inventing
 * or redrawing the bank's mark in the concept.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={light ? "inline-flex rounded-md bg-white px-3 py-2" : "inline-flex"}>
      <img
        src="https://www.vietbank.com.vn/img/logo.png"
        alt="Vietbank"
        width="200"
        height="50"
        loading="eager"
        decoding="async"
        className="h-9 w-auto object-contain"
      />
    </span>
  )
}

export function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-ink-soft">
      <span className="text-[12.5px] tnum text-amber">{n}</span>
      <span className="flex h-0.5 w-8 overflow-hidden" aria-hidden="true">
        <span className="w-1/2 bg-red" />
        <span className="w-1/2 bg-yellow" />
      </span>
      <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em]">{children}</span>
    </div>
  )
}

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
      <div className="mx-auto max-w-[1240px] px-6 py-10 lg:py-14">
        <nav className="mb-6 flex items-center gap-1.5 text-[13px] text-ink-soft" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-navy">Trang chủ</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-ink">{crumb}</span>
        </nav>
        <SectionLabel n="—">{eyebrow}</SectionLabel>
        <h1 className="mt-3 max-w-[820px] font-display text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">{title}</h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{lead}</p>
      </div>
    </section>
  )
}

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
            {" "}<span className="text-red" aria-hidden="true">*</span>
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
      {help && !error && <p id={helpId} className="mt-1.5 text-[12.5px] text-ink-soft">{help}</p>}
      {error && (
        <p id={errId} role="alert" className="field-error"><span aria-hidden="true">⚠</span> {error}</p>
      )}
    </div>
  )
}

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex min-h-8 items-center rounded px-2 text-[13px] font-semibold text-white ${className}`} aria-label="Ngôn ngữ hiện tại: Tiếng Việt">
      VI
    </span>
  )
}
