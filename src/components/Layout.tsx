import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import {
  Search,
  Menu,
  X,
  Phone,
  Globe,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  PiggyBank,
  MapPin,
  FileText,
  LogIn,
  Smartphone,
} from "lucide-react"
import { Logo, NAV_LINKS, BTN, BTN_SIZE, HOTLINE, HOTLINE_TEL } from "../lib/ui"

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Close mobile menu on navigation; honour #hash targets, else return to top.
  useEffect(() => {
    setMobileOpen(false)
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

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
            <button className="flex items-center gap-1.5 text-white/70 hover:text-white">
              <Globe className="h-3.5 w-3.5" /> VI <span className="text-white/60">/ EN</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3.5">
          <Link to="/" aria-label="Vietbank — Trang chủ">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Điều hướng chính">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[14.5px] font-medium transition-colors hover:text-navy ${
                    isActive ? "text-navy" : "text-ink"
                  }`
                }
              >
                {item.label}
                {item.caret && <ChevronDown className="h-3.5 w-3.5 text-ink-soft" />}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              aria-label="Tìm kiếm"
              className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink transition-colors hover:border-navy hover:text-navy"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <Link to="/ngan-hang-so" className={`hidden md:inline-flex ${BTN.secondary} ${BTN_SIZE.sm}`}>
              <LogIn className="h-4 w-4" /> Đăng nhập
            </Link>
            <Link to="/ngan-hang-so" className={`hidden sm:inline-flex ${BTN.primary} ${BTN_SIZE.sm}`}>
              <Smartphone className="h-4 w-4" /> Digital Plus
            </Link>
            <button
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-line xl:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-line bg-paper xl:hidden">
            <nav className="mx-auto flex max-w-[1240px] flex-col px-6 py-2" aria-label="Điều hướng di động">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="flex items-center justify-between border-b border-line/70 py-3.5 text-[15px] font-medium"
                >
                  {item.label} <ChevronRight className="h-4 w-4 text-ink-soft" />
                </NavLink>
              ))}
              <div className="flex gap-3 py-4">
                <Link to="/ngan-hang-so" className={`flex-1 ${BTN.secondary} ${BTN_SIZE.sm}`}>
                  Đăng nhập
                </Link>
                <Link to="/ngan-hang-so" className={`flex-1 ${BTN.primary} ${BTN_SIZE.sm}`}>
                  Digital Plus
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
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
                <Phone className="h-4.5 w-4.5 text-yellow" />
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
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/65">{col.h}</h2>
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
            <p>© 2026 Vietbank. Thiết kế concept redesign — số liệu minh hoạ (STATIC), không phải dữ liệu giao dịch thật.</p>
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
    </div>
  )
}
