import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import {
  Search,
  Menu,
  X,
  Phone,
  TrendingUp,
  PiggyBank,
  MapPin,
  FileText,
  LogIn,
  Smartphone,
  ChevronRight,
} from "lucide-react"
import {
  Logo,
  NAV_LINKS,
  BTN,
  BTN_SIZE,
  HOTLINE,
  HOTLINE_TEL,
  LocaleSwitcher,
} from "../lib/ui"

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMega, setOpenMega] = useState<string | null>(null)
  const { pathname, hash } = useLocation()

  // Close mobile menu on navigation; honour #hash targets, else return to top.
  useEffect(() => {
    setMobileOpen(false)
    setOpenMega(null)
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname, hash])

  // Close mega-menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMega(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="min-h-full bg-paper text-ink">
      {/* ============ UTILITY BAR ============ */}
      <div className="hidden border-b border-line bg-navy text-white/90 lg:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 text-[13px]">
          <div className="flex items-center gap-5 py-2">
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#rates">
              <TrendingUp className="h-3.5 w-3.5" /> Tỷ giá
            </Link>
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#rates">
              <PiggyBank className="h-3.5 w-3.5" /> Lãi suất
            </Link>
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#network">
              <MapPin className="h-3.5 w-3.5" /> ATM / Chi nhánh
            </Link>
            <Link className="flex items-center gap-1.5 hover:text-white" to="/ho-tro#docs">
              <FileText className="h-3.5 w-3.5" /> Biểu phí & biểu mẫu
            </Link>
          </div>
          <div className="flex items-center gap-5 py-2">
            <a className="flex items-center gap-1.5 font-medium hover:text-white" href={HOTLINE_TEL}>
              <Phone className="h-3.5 w-3.5 text-yellow" /> Hotline {HOTLINE}
            </a>
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3.5">
          <Link to="/" aria-label="Vietbank — Trang chủ" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
            {NAV_LINKS.map((item) => {
              const hasMega = !!item.children?.length
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
                    onClick={(e) => {
                      if (hasMega) {
                        // Touch/keyboard: first click toggles menu, second click navigates
                        if (!open) {
                          e.preventDefault()
                          setOpenMega(item.label)
                        }
                      }
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded px-2 py-2 text-[14.5px] font-medium transition-colors hover:text-navy ${
                        isActive ? "text-navy" : "text-ink"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`relative ${isActive ? "after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-navy" : ""}`}
                        >
                          {item.label}
                        </span>
                        {item.caret && (
                          <ChevronRight
                            className={`h-3.5 w-3.5 text-ink-soft transition-transform ${open ? "rotate-90" : ""}`}
                          />
                        )}
                        <span className="sr-only">
                          {isActive ? "(trang hiện tại)" : ""}
                        </span>
                      </>
                    )}
                  </NavLink>
                  {hasMega && open && (
                    <div
                      role="menu"
                      aria-label={`${item.label} — menu`}
                      className="absolute left-0 top-full z-50 mt-1 w-[420px] rounded-xl border border-line bg-paper p-3 shadow-[0_18px_50px_-20px_rgba(10,53,163,0.25)]"
                    >
                      <ul className="flex flex-col">
                        {item.children!.map((c) => (
                          <li key={c.label} role="none">
                            <Link
                              role="menuitem"
                              to={c.to}
                              className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-navy-050"
                            >
                              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-navy-050 text-navy group-hover:bg-navy group-hover:text-white">
                                <ChevronRight className="h-3.5 w-3.5" />
                              </span>
                              <span className="flex-1">
                                <span className="block text-[14.5px] font-semibold text-ink group-hover:text-navy">
                                  {c.label}
                                </span>
                                {c.hint && (
                                  <span className="mt-0.5 block text-[12.5px] text-ink-soft">
                                    {c.hint}
                                  </span>
                                )}
                              </span>
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

          <div className="flex items-center gap-2.5">
            <Link
              to="/ho-tro#network"
              aria-label="Tìm chi nhánh, ATM và điểm giao dịch"
              className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink transition-colors hover:border-navy hover:text-navy"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              to="/ngan-hang-so"
              className={`hidden md:inline-flex ${BTN.secondary} ${BTN_SIZE.sm}`}
            >
              <LogIn className="h-4 w-4" /> Đăng nhập
            </Link>
            <Link
              to="/ngan-hang-so"
              className={`hidden sm:inline-flex ${BTN.primary} ${BTN_SIZE.sm}`}
            >
              <Smartphone className="h-4 w-4" /> Digital Plus
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-line lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="border-t border-line bg-paper lg:hidden"
          >
            <nav
              className="mx-auto flex max-w-[1240px] flex-col px-6 py-2"
              aria-label="Điều hướng di động"
            >
              {NAV_LINKS.map((item) => (
                <div key={item.label} className="border-b border-line/70">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-3.5 text-[15px] font-medium ${
                        isActive ? "text-navy" : "text-ink"
                      }`
                    }
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4 text-ink-soft" />
                  </NavLink>
                  {item.children && (
                    <ul className="flex flex-col pb-2">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <NavLink
                            to={c.to}
                            end={c.to === "/"}
                            className={({ isActive }) =>
                              `flex items-center gap-2 py-2 pl-4 text-[14px] transition-colors ${
                                isActive ? "font-semibold text-navy" : "text-ink-soft hover:text-navy"
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span className={`h-1 w-1 rounded-full ${isActive ? "bg-navy" : "bg-line"}`} />
                                {c.label}
                              </>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="flex gap-3 py-4">
                <Link
                  to="/ngan-hang-so"
                  className={`flex-1 ${BTN.secondary} ${BTN_SIZE.sm}`}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/ngan-hang-so"
                  className={`flex-1 ${BTN.primary} ${BTN_SIZE.sm}`}
                >
                  Digital Plus
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-navy-700 text-white/75">
        <div className="mx-auto max-w-[1240px] px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Logo light />
              <p className="mt-4 max-w-xs text-[14px] leading-relaxed">
                Ngân hàng TMCP Việt Nam Thương Tín — hướng tới ngân hàng bán lẻ uy tín hàng đầu Việt Nam.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-white/15 px-2.5 py-1 text-[12px] tnum text-white/75">
                <TrendingUp className="h-3.5 w-3.5 text-yellow" /> VBB · Niêm yết HOSE
              </div>
              <a
                href={HOTLINE_TEL}
                className="mt-5 flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-yellow" />
                <span className="text-[13px]">
                  <span className="block text-white/55">Chăm sóc khách hàng 24/7</span>
                  <span className="block font-semibold text-white">{HOTLINE}</span>
                </span>
              </a>
            </div>

            {[
              {
                h: "Cá nhân",
                items: [
                  ["Tài khoản", "/ca-nhan"],
                  ["Tiết kiệm", "/ca-nhan"],
                  ["Thẻ", "/the"],
                  ["Vay vốn", "/ca-nhan"],
                  ["Digital Plus", "/ngan-hang-so"],
                ],
              },
              {
                h: "Doanh nghiệp",
                items: [
                  ["Tài khoản DN", "/doanh-nghiep"],
                  ["Vay & tài trợ", "/doanh-nghiep"],
                  ["Quản lý dòng tiền", "/doanh-nghiep"],
                  ["Tài trợ thương mại", "/doanh-nghiep"],
                  ["DigiBiz", "/ngan-hang-so"],
                ],
              },
              {
                h: "Vietbank",
                items: [
                  ["Về chúng tôi", "/ve-vietbank"],
                  ["Nhà đầu tư", "/nha-dau-tu"],
                  ["Tin tức", "/ve-vietbank"],
                  ["Hỗ trợ", "/ho-tro"],
                  ["Liên hệ", "/ho-tro"],
                ],
              },
            ].map((col) => (
              <div key={col.h}>
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/65">
                  {col.h}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5 text-[14.5px]">
                  {col.items.map(([label, to]) => (
                    <li key={label}>
                      <Link to={to} className="transition-colors hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/60 sm:flex-row">
            <p>
              © 2026 Vietbank. Thiết kế concept redesign — số liệu minh hoạ (STATIC), không phải dữ liệu giao dịch thật.
            </p>
            <div className="flex gap-5">
              <Link to="/ho-tro" className="hover:text-white">
                Điều khoản
              </Link>
              <Link to="/ho-tro" className="hover:text-white">
                Bảo mật
              </Link>
              <Link to="/ho-tro" className="hover:text-white">
                Sơ đồ trang
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ============ MOBILE UTILITY BAR ============ */}
      <div
        role="region"
        aria-label="Tác vụ nhanh trên di động"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-2 py-2 backdrop-blur lg:hidden safe-bottom"
      >
        <div className="mx-auto grid max-w-[640px] grid-cols-4 gap-1">
          <a
            href={HOTLINE_TEL}
            className="flex flex-col items-center justify-center gap-0.5 rounded-md py-1.5 text-[10.5px] font-medium text-ink hover:text-navy"
          >
            <Phone className="h-5 w-5 text-navy" />
            <span>Gọi</span>
          </a>
          <Link
            to="/ngan-hang-so"
            className="flex flex-col items-center justify-center gap-0.5 rounded-md py-1.5 text-[10.5px] font-medium text-ink hover:text-navy"
          >
            <LogIn className="h-5 w-5 text-navy" />
            <span>Đăng nhập</span>
          </Link>
          <Link
            to="/ngan-hang-so"
            className="col-span-2 mx-1 flex items-center justify-center gap-2 rounded-md bg-navy px-3 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-navy-700"
          >
            <Smartphone className="h-4 w-4" /> Tải Digital Plus
          </Link>
        </div>
      </div>
      {/* Bottom spacer so mobile content is not hidden by utility bar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  )
}