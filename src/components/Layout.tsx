import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import {
  ChevronRight,
  ExternalLink,
  FileText,
  MapPin,
  Menu,
  Phone,
  PiggyBank,
  CircleHelp,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  X,
} from "lucide-react"
import {
  BTN,
  BTN_SIZE,
  HOTLINE,
  HOTLINE_TEL,
  LocaleSwitcher,
  Logo,
  NAV_LINKS,
} from "../lib/ui"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"

const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Vietbank — Bản mẫu trải nghiệm website",
    description: "Bản mẫu trải nghiệm website Vietbank với định tuyến theo nhu cầu và liên kết tới các kênh Vietbank chính thức.",
  },
  "/ca-nhan": {
    title: "Khách hàng cá nhân — Bản mẫu Vietbank",
    description: "Tài khoản, tiết kiệm, thẻ, vay vốn và Digital Plus được tổ chức theo nhu cầu khách hàng cá nhân.",
  },
  "/doanh-nghiep": {
    title: "Khách hàng doanh nghiệp — Bản mẫu Vietbank",
    description: "Tài khoản, tín dụng, dòng tiền, tài trợ thương mại và DigiBiz được tổ chức theo nhu cầu doanh nghiệp.",
  },
  "/ngan-hang-so": {
    title: "Ngân hàng số Vietbank — Digital Plus & DigiBiz",
    description: "Phân biệt Vietbank Digital Plus cho cá nhân và DigiBiz cho doanh nghiệp, kèm liên kết tới các kênh chính thức.",
  },
  "/the": {
    title: "Thẻ Vietbank — Bản mẫu trải nghiệm",
    description: "Danh mục thẻ Vietbank dùng hình ảnh sản phẩm thật, thuộc tính định hướng và liên kết tới trang sản phẩm, biểu phí, ưu đãi chính thức.",
  },
  "/ho-tro": {
    title: "Hỗ trợ & tra cứu — Bản mẫu Vietbank",
    description: "Điểm vào tỷ giá, lãi suất, chi nhánh, biểu mẫu, hotline và kênh hỗ trợ Vietbank chính thức.",
  },
  "/ve-vietbank": {
    title: "Về Vietbank — Bản mẫu trải nghiệm",
    description: "Giới thiệu Vietbank dựa trên tầm nhìn, quy mô và các thông tin doanh nghiệp được công bố công khai.",
  },
  "/nha-dau-tu": {
    title: "Quan hệ nhà đầu tư VBB — Bản mẫu Vietbank",
    description: "Thông tin nhà đầu tư Vietbank với dữ liệu có mốc thời gian rõ ràng và liên kết tới thư viện chính thức.",
  },
}

const PRIMARY_NAV_LINKS = NAV_LINKS.filter((item) => !["Về Vietbank", "Nhà đầu tư"].includes(item.label))

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMega, setOpenMega] = useState<string | null>(null)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const meta = ROUTE_META[pathname] || {
      title: "Vietbank — Bản mẫu trải nghiệm website",
      description: "Bản mẫu trải nghiệm độc lập với liên kết tới các kênh Vietbank công khai.",
    }
    document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute("content", meta.description)
  }, [pathname])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMega(null)
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
      return
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname, hash])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMega(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="min-h-full bg-paper text-ink">
      <div className="border-b border-[#f0df9d] bg-amber-soft text-amber">
        <div className="mx-auto flex max-w-[1240px] items-center justify-center gap-2 px-6 py-2 text-center text-[12.5px] font-medium">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Lưu ý an toàn: trang này không nhận thông tin đăng nhập hoặc OTP. Giao dịch được chuyển tới kênh Vietbank chính thức.</span>
        </div>
      </div>

      <div className="hidden border-b border-line bg-navy-700 text-white/90 lg:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 text-[12.5px]">
          <div className="flex items-center gap-5 py-2">
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#rates"><TrendingUp className="h-3.5 w-3.5" aria-hidden="true" /> Tỷ giá</Link>
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#rates"><PiggyBank className="h-3.5 w-3.5" aria-hidden="true" /> Lãi suất</Link>
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#network"><MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Chi nhánh / PGD</Link>
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#docs"><FileText className="h-3.5 w-3.5" aria-hidden="true" /> Biểu phí & biểu mẫu</Link>
          </div>
          <div className="flex items-center gap-5 py-2">
            <Link className="hover:text-white" to="/ve-vietbank">Về Vietbank</Link>
            <Link className="hover:text-white" to="/nha-dau-tu">Nhà đầu tư</Link>
            <a className="flex items-center gap-1.5 font-medium hover:text-white" href={HOTLINE_TEL}><Phone className="h-3.5 w-3.5 text-yellow" aria-hidden="true" /> Hotline {HOTLINE}</a>
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3">
          <Link to="/" aria-label="Vietbank — Trang chủ" className="shrink-0"><Logo /></Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
            {PRIMARY_NAV_LINKS.map((item) => {
              const hasMega = Boolean(item.children?.length)
              const open = openMega === item.label
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMega && setOpenMega(item.label)}
                  onMouseLeave={() => hasMega && setOpenMega(null)}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    aria-haspopup={hasMega ? "menu" : undefined}
                    aria-expanded={hasMega ? open : undefined}
                    onFocus={() => hasMega && setOpenMega(item.label)}
                    onClick={(event) => {
                      if (hasMega && !open) {
                        event.preventDefault()
                        setOpenMega(item.label)
                      }
                    }}
                    className={({ isActive }) => `flex min-h-11 items-center gap-1 px-2.5 text-[14.5px] font-medium transition-colors hover:text-navy ${isActive ? "text-navy" : "text-ink"}`}
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`relative ${isActive ? "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-navy" : ""}`}>{item.label}</span>
                        {item.caret && <ChevronRight className={`h-3.5 w-3.5 text-ink-soft transition-transform ${open ? "rotate-90" : ""}`} aria-hidden="true" />}
                      </>
                    )}
                  </NavLink>

                  {hasMega && open && (
                    <div role="menu" aria-label={`${item.label} — menu`} className="absolute left-0 top-full z-50 mt-1 w-[390px] border border-line bg-paper p-2 shadow-[0_18px_45px_-24px_rgba(10,53,163,0.28)]">
                      <ul className="divide-y divide-line/80">
                        {item.children!.map((child) => (
                          <li key={child.label} role="none">
                            <Link role="menuitem" to={child.to} className="group grid grid-cols-[1fr_auto] items-center gap-3 px-3 py-3 transition-colors hover:bg-navy-050">
                              <span>
                                <span className="block text-[14.5px] font-semibold text-ink group-hover:text-navy">{child.label}</span>
                                {child.hint && <span className="mt-0.5 block text-[12.5px] leading-relaxed text-ink-soft">{child.hint}</span>}
                              </span>
                              <ChevronRight className="h-4 w-4 text-navy" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/ho-tro" aria-label="Mở trung tâm hỗ trợ và tra cứu" className="grid h-11 w-11 place-items-center rounded-md border border-line text-ink transition-colors hover:border-navy hover:text-navy"><CircleHelp className="h-4 w-4" aria-hidden="true" /></Link>
            <Link to="/ngan-hang-so" className={`hidden md:inline-flex ${BTN.secondary} ${BTN_SIZE.sm}`}><Smartphone className="h-4 w-4" aria-hidden="true" /> Kênh số</Link>
            <a href={OFFICIAL.digitalPlus} {...EXTERNAL_LINK_PROPS} className={`hidden sm:inline-flex ${BTN.primary} ${BTN_SIZE.sm}`}><Smartphone className="h-4 w-4" aria-hidden="true" /> Digital Plus <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /></a>
            <button type="button" aria-label={mobileOpen ? "Đóng menu" : "Mở menu"} aria-expanded={mobileOpen} aria-controls="mobile-nav" onClick={() => setMobileOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-md border border-line lg:hidden">
              {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div id="mobile-nav" className="max-h-[calc(100vh-120px)] overflow-y-auto border-t border-line bg-paper lg:hidden">
            <nav className="mx-auto flex max-w-[1240px] flex-col px-6 py-2" aria-label="Điều hướng di động">
              {NAV_LINKS.map((item) => (
                <div key={item.label} className="border-b border-line/70">
                  <NavLink to={item.to} className={({ isActive }) => `flex items-center justify-between py-3.5 text-[15px] font-medium ${isActive ? "text-navy" : "text-ink"}`}>
                    {item.label}<ChevronRight className="h-4 w-4 text-ink-soft" aria-hidden="true" />
                  </NavLink>
                  {item.children && (
                    <ul className="flex flex-col pb-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link to={child.to} className="flex min-h-11 items-center gap-2 py-2 pl-4 text-[14px] text-ink-soft hover:text-navy"><span className="h-1 w-1 rounded-full bg-line" />{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="grid grid-cols-2 gap-3 py-4">
                <Link to="/ngan-hang-so" className={`${BTN.secondary} ${BTN_SIZE.sm}`}>Chọn kênh số</Link>
                <a href={OFFICIAL.digitalPlus} {...EXTERNAL_LINK_PROPS} className={`${BTN.primary} ${BTN_SIZE.sm}`}>Digital Plus</a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content"><Outlet /></main>

      <footer className="bg-navy-700 text-white/75">
        <div className="mx-auto max-w-[1240px] px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Logo light />
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed">Bản mẫu trải nghiệm này không nhận thông tin đăng nhập, OTP hoặc dữ liệu giao dịch. Khi tiếp tục tác vụ ngân hàng, hãy kiểm tra tên miền <span className="font-semibold text-white">vietbank.com.vn</span>.</p>
              <div className="mt-4 text-[13px] leading-relaxed text-white/65">
                <p>Trụ sở công bố: 47 Trần Hưng Đạo, Phường Phú Lợi, TP. Cần Thơ</p>
                <p className="mt-1">SWIFT: <span className="tnum">VNTTVNVX</span></p>
              </div>
              <a href={HOTLINE_TEL} className="mt-5 flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10">
                <Phone className="h-4 w-4 text-yellow" aria-hidden="true" /><span className="text-[13px]"><span className="block text-white/65">Hotline Vietbank</span><span className="block font-semibold text-white tnum">{HOTLINE}</span></span>
              </a>
            </div>

            {[
              { h: "Cá nhân", items: [["Tài khoản", "/ca-nhan#accounts"], ["Tiết kiệm", "/ca-nhan#savings"], ["Thẻ", "/the#cards"], ["Vay vốn", "/ca-nhan#loans"], ["Digital Plus", "/ngan-hang-so#digital-plus"]] },
              { h: "Doanh nghiệp", items: [["Tài khoản DN", "/doanh-nghiep#accounts"], ["Tín dụng", "/doanh-nghiep#credit"], ["Dòng tiền", "/doanh-nghiep#cash-management"], ["Tài trợ thương mại", "/doanh-nghiep#trade"], ["DigiBiz", "/ngan-hang-so#digibiz"]] },
              { h: "Thông tin", items: [["Về Vietbank", "/ve-vietbank"], ["Nhà đầu tư", "/nha-dau-tu"], ["Hỗ trợ", "/ho-tro"], ["Chi nhánh", "/ho-tro#network"], ["An toàn", "/ho-tro#security"]] },
            ].map((column) => (
              <div key={column.h}>
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/65">{column.h}</h2>
                <ul className="mt-4 flex flex-col gap-2.5 text-[14.5px]">
                  {column.items.map(([label, to]) => <li key={label}><Link to={to} className="transition-colors hover:text-white">{label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/60 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Bản mẫu website Vietbank · Không phải website chính thức của Vietbank.</p>
            <div className="flex flex-wrap gap-5">
              <a href={OFFICIAL.website} {...EXTERNAL_LINK_PROPS} className="hover:text-white">Website Vietbank <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" /></a>
              <a href={OFFICIAL.documents} {...EXTERNAL_LINK_PROPS} className="hover:text-white">Quy định & biểu mẫu</a>
              <a href={OFFICIAL.contact} {...EXTERNAL_LINK_PROPS} className="hover:text-white">Liên hệ</a>
            </div>
          </div>
        </div>
      </footer>

      <div role="region" aria-label="Tác vụ nhanh trên di động" className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-2 py-2 backdrop-blur lg:hidden safe-bottom">
        <div className="mx-auto grid max-w-[640px] grid-cols-4 gap-1">
          <a href={HOTLINE_TEL} className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md py-1.5 text-[12px] font-medium text-ink hover:text-navy"><Phone className="h-5 w-5 text-navy" aria-hidden="true" /><span>Gọi</span></a>
          <Link to="/ho-tro#network" className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md py-1.5 text-[12px] font-medium text-ink hover:text-navy"><MapPin className="h-5 w-5 text-navy" aria-hidden="true" /><span>Chi nhánh</span></Link>
          <a href={OFFICIAL.digitalPlus} {...EXTERNAL_LINK_PROPS} className="col-span-2 mx-1 flex min-h-11 items-center justify-center gap-2 rounded-md bg-navy px-3 py-2.5 text-[13px] font-semibold text-white shadow-sm hover:bg-navy-700"><Smartphone className="h-4 w-4" aria-hidden="true" /> Digital Plus</a>
        </div>
      </div>
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  )
}