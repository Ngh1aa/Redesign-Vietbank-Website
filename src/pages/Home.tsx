import { useEffect, useState } from "react"
import { Link } from "react-router"
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  ChevronRight,
  CreditCard,
  FileText,
  Globe,
  Landmark,
  MapPin,
  Phone,
  PiggyBank,
  Send,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Wallet,
} from "lucide-react"
import { SectionLabel, BTN, BTN_SIZE, HOTLINE, HOTLINE_TEL } from "../lib/ui"
import { ActionLink } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"

type Segment = "ca-nhan" | "doanh-nghiep"

type Task = {
  icon: any
  label: string
  hint: string
  to: string
}

type Need = {
  tag: string
  title: string
  body: string
  to: string
}

const TOP_TASKS: Record<Segment, Task[]> = {
  "ca-nhan": [
    { icon: Wallet, label: "Tài khoản thanh toán", hint: "Bắt đầu nhu cầu giao dịch hằng ngày", to: "/ca-nhan#accounts" },
    { icon: PiggyBank, label: "Tiết kiệm", hint: "Sản phẩm và đường dẫn lãi suất hiện hành", to: "/ca-nhan#savings" },
    { icon: CreditCard, label: "Chọn thẻ", hint: "So sánh các dòng thẻ Vietbank đang công bố", to: "/the#cards" },
    { icon: Landmark, label: "Vay vốn", hint: "Nhà · ô tô · tiêu dùng theo nhu cầu", to: "/ca-nhan#loans" },
    { icon: Smartphone, label: "Digital Plus", hint: "Kênh số dành cho khách hàng cá nhân", to: "/ngan-hang-so#digital-plus" },
    { icon: MapPin, label: "Chi nhánh / PGD", hint: "Đi tới công cụ mạng lưới Vietbank", to: "/ho-tro#network" },
  ],
  "doanh-nghiep": [
    { icon: Building2, label: "Tài khoản doanh nghiệp", hint: "Thanh toán và vận hành giao dịch", to: "/doanh-nghiep#accounts" },
    { icon: Banknote, label: "Vay & tài trợ vốn", hint: "Vốn lưu động và nhu cầu tín dụng", to: "/doanh-nghiep#credit" },
    { icon: TrendingUp, label: "Quản lý dòng tiền", hint: "Điều phối giao dịch và phê duyệt", to: "/doanh-nghiep#cash-management" },
    { icon: Globe, label: "Giao dịch quốc tế", hint: "XNK · chuyển tiền · tài trợ thương mại", to: "/doanh-nghiep#trade" },
    { icon: Smartphone, label: "DigiBiz", hint: "Ngân hàng số dành cho doanh nghiệp", to: "/ngan-hang-so#digibiz" },
    { icon: FileText, label: "Biểu phí & biểu mẫu", hint: "Mở tài liệu dành cho tổ chức", to: "/ho-tro#docs" },
  ],
}

const NEEDS: Record<Segment, Need[]> = {
  "ca-nhan": [
    { tag: "Bắt đầu", title: "Tôi cần một tài khoản dùng hằng ngày", body: "Đi từ nhu cầu sử dụng tới tài khoản thanh toán và Digital Plus, không cần dò theo cấu trúc nội bộ của ngân hàng.", to: "/ca-nhan#accounts" },
    { tag: "Tích lũy", title: "Tôi muốn gửi tiết kiệm", body: "Xem nhóm sản phẩm tiết kiệm và mở nguồn lãi suất Vietbank đang công bố trước khi quyết định.", to: "/ca-nhan#savings" },
    { tag: "Tín dụng", title: "Tôi đang cân nhắc vay", body: "Bắt đầu từ mục đích vay, sau đó kiểm tra điều kiện và trao đổi với kênh Vietbank chính thức.", to: "/ca-nhan#loans" },
    { tag: "Thẻ", title: "Tôi muốn chọn thẻ theo cách chi tiêu", body: "Xem sản phẩm thật, thuộc tính có thể so sánh và nguồn điều kiện/biểu phí trước khi tiếp tục.", to: "/the#cards" },
  ],
  "doanh-nghiep": [
    { tag: "Vận hành", title: "Doanh nghiệp cần tài khoản thanh toán", body: "Đi tới tài khoản, biểu mẫu tổ chức và các bước tiếp theo phù hợp với vận hành doanh nghiệp.", to: "/doanh-nghiep#accounts" },
    { tag: "Nguồn vốn", title: "Doanh nghiệp cần vốn", body: "Khám phá tín dụng và tài trợ vốn theo nhu cầu thay vì đọc một danh sách sản phẩm dài.", to: "/doanh-nghiep#credit" },
    { tag: "Dòng tiền", title: "Tôi cần kiểm soát giao dịch và phê duyệt", body: "Tìm hiểu DigiBiz và vai trò của nền tảng trong quản trị giao dịch doanh nghiệp.", to: "/doanh-nghiep#cash-management" },
    { tag: "Quốc tế", title: "Doanh nghiệp có giao dịch XNK", body: "Đi tới tài trợ thương mại, chuyển tiền quốc tế và tỷ giá theo đúng nhu cầu nghiệp vụ.", to: "/doanh-nghiep#trade" },
  ],
}

const OFFICIAL_UTILITIES = [
  { index: "01", icon: TrendingUp, label: "Tỷ giá", body: "Dữ liệu thay đổi theo thời điểm", href: OFFICIAL.personalFx },
  { index: "02", icon: PiggyBank, label: "Lãi suất", body: "Mở bảng Vietbank đang công bố", href: OFFICIAL.personalRates },
  { index: "03", icon: MapPin, label: "Chi nhánh / PGD", body: "Tra cứu mạng lưới chính thức", href: OFFICIAL.branches },
  { index: "04", icon: FileText, label: "Biểu phí & biểu mẫu", body: "Tài liệu và quy định Vietbank", href: OFFICIAL.documents },
]

export default function Home() {
  const [segment, setSegment] = useState<Segment>(() => {
    try {
      return localStorage.getItem("vietbank.segment") === "doanh-nghiep" ? "doanh-nghiep" : "ca-nhan"
    } catch {
      return "ca-nhan"
    }
  })

  const isPersonal = segment === "ca-nhan"

  useEffect(() => {
    try {
      localStorage.setItem("vietbank.segment", segment)
    } catch {
      // Preference persistence is optional and does not block the experience.
    }
  }, [segment])

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-[1240px] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal flex flex-col justify-center px-6 py-14 lg:py-20 lg:pr-14">
            <SectionLabel n="01">Bắt đầu theo nhu cầu</SectionLabel>
            <h1 className="mt-4 max-w-[720px] font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              Bắt đầu từ <span className="text-navy">việc bạn cần làm</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
              Chọn nhu cầu cá nhân hoặc doanh nghiệp, xem thông tin cần thiết và tiếp tục trên đúng kênh Vietbank chính thức.
            </p>

            <div className="mt-7">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Bạn cần giải pháp cho</span>
              <div className="mt-2 inline-flex border border-line bg-surface p-1" role="group" aria-label="Chọn nhóm khách hàng">
                {([ ["ca-nhan", "Cá nhân"], ["doanh-nghiep", "Doanh nghiệp"] ] as [Segment, string][]).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSegment(value)}
                    aria-pressed={segment === value}
                    className={`min-h-11 px-6 py-2 text-[14.5px] font-semibold transition-colors ${segment === value ? "bg-navy text-white" : "text-ink hover:bg-navy-050 hover:text-navy"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link to={isPersonal ? "/ca-nhan" : "/doanh-nghiep"} className={`${BTN.primary} ${BTN_SIZE.lg}`}>
                Xem dịch vụ {isPersonal ? "cá nhân" : "doanh nghiệp"} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/ho-tro" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>Trung tâm hỗ trợ</Link>
            </div>
          </div>

          <div className="border-t border-line bg-soft px-6 py-10 lg:border-l lg:border-t-0 lg:px-8 lg:py-14">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">Điểm truy cập nhanh</div>
                <h2 className="mt-1 font-display text-xl font-semibold">Kênh quan trọng</h2>
              </div>
              <span className="flex h-1 w-12 overflow-hidden" aria-hidden="true"><span className="w-1/2 bg-red" /><span className="w-1/2 bg-yellow" /></span>
            </div>

            <div className="divide-y divide-line">
              <Link to="/ngan-hang-so#digital-plus" className="group grid min-h-16 grid-cols-[34px_1fr_auto] items-center gap-3 py-4">
                <span className="text-xs text-amber tnum">01</span>
                <span><strong className="block text-[14.5px] group-hover:text-navy">Digital Plus</strong><span className="mt-0.5 block text-[12.5px] text-ink-soft">Cá nhân · Vietbank Digital cũ dừng từ 03/06/2026</span></span>
                <ChevronRight className="h-4 w-4 text-navy" aria-hidden="true" />
              </Link>
              <Link to="/ngan-hang-so#digibiz" className="group grid min-h-16 grid-cols-[34px_1fr_auto] items-center gap-3 py-4">
                <span className="text-xs text-amber tnum">02</span>
                <span><strong className="block text-[14.5px] group-hover:text-navy">DigiBiz</strong><span className="mt-0.5 block text-[12.5px] text-ink-soft">Doanh nghiệp · giao dịch và phê duyệt</span></span>
                <ChevronRight className="h-4 w-4 text-navy" aria-hidden="true" />
              </Link>
              <Link to="/ho-tro#rates" className="group grid min-h-16 grid-cols-[34px_1fr_auto] items-center gap-3 py-4">
                <span className="text-xs text-amber tnum">03</span>
                <span><strong className="block text-[14.5px] group-hover:text-navy">Tỷ giá & lãi suất</strong><span className="mt-0.5 block text-[12.5px] text-ink-soft">Mở nguồn Vietbank đang công bố</span></span>
                <ChevronRight className="h-4 w-4 text-navy" aria-hidden="true" />
              </Link>
              <a href={HOTLINE_TEL} className="group grid min-h-16 grid-cols-[34px_1fr_auto] items-center gap-3 py-4">
                <span className="text-xs text-amber tnum">04</span>
                <span><strong className="block text-[14.5px] group-hover:text-navy">Hotline {HOTLINE}</strong><span className="mt-0.5 block text-[12.5px] text-ink-soft">Xác minh khi cần hỗ trợ hoặc nghi ngờ giả mạo</span></span>
                <Phone className="h-4 w-4 text-navy" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-soft">
        <div className="mx-auto max-w-[1240px] px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel n="02">Tác vụ nhanh — {isPersonal ? "Cá nhân" : "Doanh nghiệp"}</SectionLabel>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-tight">Chọn đúng dịch vụ theo nhu cầu của bạn</h2>
            </div>
            <Link to={isPersonal ? "/ca-nhan" : "/doanh-nghiep"} className="inline-flex min-h-11 items-center gap-1.5 text-[14.5px] font-semibold text-navy hover:underline">
              Xem tất cả dịch vụ <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-7 grid border-y border-line bg-surface lg:grid-cols-2 lg:divide-x lg:divide-line">
            {[TOP_TASKS[segment].slice(0, 3), TOP_TASKS[segment].slice(3)].map((column, columnIndex) => (
              <div key={columnIndex} className="divide-y divide-line">
                {column.map(({ icon: Icon, label, hint, to }, itemIndex) => {
                  const number = String(columnIndex * 3 + itemIndex + 1).padStart(2, "0")
                  return (
                    <Link key={label} to={to} className="group grid min-h-[88px] grid-cols-[34px_40px_1fr_auto] items-center gap-3 px-4 py-4 transition-colors hover:bg-navy-050 sm:px-5">
                      <span className="text-xs font-medium text-amber tnum">{number}</span>
                      <span className="grid h-10 w-10 place-items-center text-navy" aria-hidden="true"><Icon className="h-5 w-5" /></span>
                      <span><strong className="block text-[15px] group-hover:text-navy">{label}</strong><span className="mt-1 block text-[12.5px] leading-snug text-ink-soft">{hint}</span></span>
                      <ArrowUpRight className="h-4 w-4 text-ink-soft transition-colors group-hover:text-navy" aria-hidden="true" />
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <SectionLabel n="03">Khám phá theo nhu cầu</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">Chọn tình huống gần với bạn nhất.</h2>

          <div className="mt-8 border-t border-line">
            {NEEDS[segment].map((item, index) => (
              <Link key={item.title} to={item.to} className="group grid gap-3 border-b border-line py-6 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft"><span className="mr-2 text-amber tnum">{String(index + 1).padStart(2, "0")}</span>{item.tag}</span>
                <span><strong className="block text-[17px] font-semibold tracking-tight group-hover:text-navy">{item.title}</strong><span className="mt-1.5 block max-w-2xl text-[14px] leading-relaxed text-ink-soft">{item.body}</span></span>
                <ArrowRight className="hidden h-5 w-5 text-navy sm:block" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-soft">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionLabel n="04">Công cụ ngân hàng</SectionLabel>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-tight">Dữ liệu thay đổi theo thời điểm phải mở từ nguồn thật.</h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">Tỷ giá và lãi suất thay đổi theo thời điểm. Các liên kết bên cạnh mở trực tiếp nguồn Vietbank đang công bố.</p>
            </div>

            <div className="border-y border-line bg-surface">
              {OFFICIAL_UTILITIES.map(({ index, icon: Icon, label, body, href }, itemIndex) => (
                <a key={label} href={href} {...EXTERNAL_LINK_PROPS} className={`group grid min-h-[78px] grid-cols-[34px_40px_1fr_auto] items-center gap-3 px-4 py-4 hover:bg-navy-050 sm:px-5 ${itemIndex ? "border-t border-line" : ""}`}>
                  <span className="text-xs text-amber tnum">{index}</span>
                  <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
                  <span><strong className="block text-[14.5px] group-hover:text-navy">{label}</strong><span className="mt-0.5 block text-[12.5px] text-ink-soft">{body}</span></span>
                  <ArrowUpRight className="h-4 w-4 text-navy" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-navy-700 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-white/60"><span className="text-xs tnum text-yellow">05</span><span className="flex h-0.5 w-8 overflow-hidden" aria-hidden="true"><span className="w-1/2 bg-red" /><span className="w-1/2 bg-yellow" /></span><span className="text-xs font-semibold uppercase tracking-[0.16em]">An toàn trước hành động</span></div>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-tight">Biết mình sắp chuyển tới đâu trước khi giao dịch.</h2>
            <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/70">Trang này không nhận mật khẩu, OTP hay dữ liệu giao dịch. Khi cần thực hiện giao dịch hoặc xem dữ liệu biến động, bạn sẽ được chuyển tới kênh Vietbank chính thức.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href={HOTLINE_TEL} className="flex min-h-[70px] items-center gap-3 border border-white/15 bg-white/5 px-4 py-3 hover:bg-white/10"><Phone className="h-5 w-5 text-yellow" aria-hidden="true" /><span><span className="block text-xs text-white/65">Hotline Vietbank</span><strong className="mt-1 block tnum">{HOTLINE}</strong></span></a>
            <Link to="/ho-tro#security" className="flex min-h-[70px] items-center gap-3 border border-white/15 bg-white/5 px-4 py-3 hover:bg-white/10"><ShieldCheck className="h-5 w-5 text-yellow" aria-hidden="true" /><span><span className="block text-xs text-white/65">Hướng dẫn</span><strong className="mt-1 block">An toàn & chống giả mạo</strong></span></Link>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-14 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <SectionLabel n="06">Bước tiếp theo</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(1.7rem,2.8vw,2.3rem)] font-semibold">Chọn đúng kênh trước khi tiếp tục</h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">Cá nhân có thể tiếp tục với Digital Plus; doanh nghiệp sử dụng DigiBiz. Nếu chưa chắc kênh nào phù hợp, xem trang dịch vụ hoặc Trung tâm hỗ trợ.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {isPersonal ? (
              <ActionLink action={{ label: "Mở Digital Plus", href: OFFICIAL.digitalPlus }} />
            ) : (
              <ActionLink action={{ label: "Mở DigiBiz", href: OFFICIAL.digiBiz }} />
            )}
            <Link to={isPersonal ? "/ca-nhan" : "/doanh-nghiep"} className={`${BTN.secondary} ${BTN_SIZE.lg}`}>Xem giải pháp <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
