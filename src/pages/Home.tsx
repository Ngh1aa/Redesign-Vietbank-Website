import { useEffect, useState } from "react"

import { Link } from "react-router"

import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  ChevronDown,
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
import heroImage from "../assets/images/vietbank-digital-life-hero.webp"

type Segment = "ca-nhan" | "doanh-nghiep"

const TOP_TASKS: Record<Segment, {
  icon: any
  label: string
  hint: string
  to: string
}[]> = {
  "ca-nhan": [
    {
      icon: Wallet,
      label: "Tài khoản",
      hint: "Tài khoản thanh toán",
      to: "/ca-nhan#accounts",
    },

    {
      icon: PiggyBank,
      label: "Tiết kiệm",
      hint: "Xem sản phẩm & lãi suất",
      to: "/ca-nhan#savings",
    },

    {
      icon: CreditCard,
      label: "Thẻ",
      hint: "Danh mục thẻ thật",
      to: "/the#cards",
    },

    {
      icon: Landmark,
      label: "Vay vốn",
      hint: "Nhà · xe · tiêu dùng",
      to: "/ca-nhan#loans",
    },

    {
      icon: Send,
      label: "Ngân hàng số",
      hint: "Digital Plus",
      to: "/ngan-hang-so#digital-plus",
    },

    {
      icon: MapPin,
      label: "Điểm giao dịch",
      hint: "Chi nhánh / PGD",
      to: "/ho-tro#network",
    },
  ],

  "doanh-nghiep": [
    {
      icon: Building2,
      label: "Tài khoản DN",
      hint: "Thanh toán & vận hành",
      to: "/doanh-nghiep#accounts",
    },

    {
      icon: Banknote,
      label: "Tín dụng",
      hint: "Vốn & tài trợ",
      to: "/doanh-nghiep#credit",
    },

    {
      icon: TrendingUp,
      label: "Dòng tiền",
      hint: "Quản trị tập trung",
      to: "/doanh-nghiep#cash-management",
    },

    {
      icon: Globe,
      label: "Quốc tế",
      hint: "XNK & tài trợ thương mại",
      to: "/doanh-nghiep#trade",
    },

    {
      icon: Smartphone,
      label: "DigiBiz",
      hint: "Ngân hàng số doanh nghiệp",
      to: "/ngan-hang-so#digibiz",
    },

    {
      icon: FileText,
      label: "Biểu phí",
      hint: "Tài liệu doanh nghiệp",
      to: "/ho-tro#docs",
    },
  ],
}

const NEEDS: Record<Segment, {
  title: string
  body: string
  tag: string
  cues: string[]
  to: string
}[]> = {
  "ca-nhan": [
    {
      tag: "Bắt đầu",
      title: "Tôi cần tài khoản dùng hằng ngày",
      body: "Xem tài khoản thanh toán, cách mở và điểm vào Digital Plus.",
      cues: ["Tài khoản thanh toán", "Digital Plus", "Biểu mẫu chính thức"],
      to: "/ca-nhan#accounts",
    },

    {
      tag: "Tích lũy",
      title: "Tôi muốn gửi tiết kiệm",
      body: "Tìm sản phẩm tiết kiệm và mở trang lãi suất Vietbank đang công bố.",
      cues: ["Sản phẩm tiết kiệm", "Lãi suất hiện hành", "Kênh chính thức"],
      to: "/ca-nhan#savings",
    },

    {
      tag: "Tín dụng",
      title: "Tôi cần vay",
      body: "Đi theo nhóm vay mua nhà, ô tô hoặc tiêu dùng và kiểm tra điều kiện ở nguồn Vietbank.",
      cues: ["Mục đích vay", "Hồ sơ", "Tư vấn Vietbank"],
      to: "/ca-nhan#loans",
    },

    {
      tag: "Thẻ",
      title: "Tôi muốn chọn thẻ",
      body: "So sánh Visa My Style, Visa Luxury, Mastercard Happy, Lifecare và mở trang sản phẩm thật.",
      cues: ["Sản phẩm thật", "Biểu phí", "Ưu đãi theo thời điểm"],
      to: "/the#cards",
    },
  ],

  "doanh-nghiep": [
    {
      tag: "Vận hành",
      title: "Tôi cần tài khoản doanh nghiệp",
      body: "Đi từ tài khoản thanh toán tới biểu mẫu và kênh hỗ trợ dành cho tổ chức.",
      cues: ["Tài khoản", "Biểu mẫu tổ chức", "Chuyên viên hỗ trợ"],
      to: "/doanh-nghiep#accounts",
    },

    {
      tag: "Vốn",
      title: "Tôi cần vốn kinh doanh",
      body: "Khám phá nhóm tín dụng doanh nghiệp, vốn lưu động và các lựa chọn tài trợ.",
      cues: ["Tín dụng", "Vốn lưu động", "Tư vấn theo nhu cầu"],
      to: "/doanh-nghiep#credit",
    },

    {
      tag: "Dòng tiền",
      title: "Tôi muốn quản trị dòng tiền",
      body: "Tìm hiểu DigiBiz và các công cụ quản trị giao dịch, lịch thanh toán và phê duyệt.",
      cues: ["DigiBiz", "Phê duyệt", "Quản trị giao dịch"],
      to: "/doanh-nghiep#cash-management",
    },

    {
      tag: "Quốc tế",
      title: "Tôi có giao dịch XNK",
      body: "Đi tới nhóm tài trợ thương mại và chuyển tiền quốc tế thay vì dò menu sản phẩm dài.",
      cues: ["Tài trợ thương mại", "Chuyển tiền quốc tế", "Tỷ giá"],
      to: "/doanh-nghiep#trade",
    },
  ],
}

const LATEST_NEWS = [
  {
    date: "28/08/2026",
    title: "Cảnh giác với thủ đoạn giả mạo cơ quan nhà nước",
    tag: "An toàn",
  },

  {
    date: "27/08/2026",
    title: "Thông báo thay đổi địa điểm Vietbank Bình Chánh",
    tag: "Mạng lưới",
  },

  {
    date: "26/08/2026",
    title: "Điều chỉnh phí dịch vụ biến động số dư qua SMS dành cho KHCN",
    tag: "Thông báo",
  },

  {
    date: "21/08/2026",
    title: "Điều chỉnh nâng hạn mức giao dịch trên Vietbank Digital Plus",
    tag: "Digital Plus",
  },
]

export default function Home() {
  const [segment, setSegment] = useState<Segment>(() => {
    try {
      return localStorage.getItem("vietbank.segment") === "doanh-nghiep"
        ? "doanh-nghiep"
        : "ca-nhan"
    } catch {
      return "ca-nhan"
    }
  })

  const isPersonal = segment === "ca-nhan"

  useEffect(() => {
    try {
      localStorage.setItem("vietbank.segment", segment)
    } catch {
      // Preference persistence is optional.
    }
  }, [segment])

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1240px] items-stretch px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal flex flex-col justify-center py-12 lg:py-16 lg:pr-16">
            <div className="mb-5 flex items-center gap-3 text-[13px] font-semibold text-navy">
              <span className="brand-mark" aria-hidden="true" />
              Ngân hàng bán lẻ dành cho người Việt
            </div>
            <h1 className="max-w-[690px] font-display text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              Ngân hàng bắt đầu từ{" "}
              <span className="text-navy">điều bạn cần.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              Tìm đúng giải pháp, hiểu bước tiếp theo và tiếp tục an toàn trên
              kênh Vietbank chính thức.
            </p>

            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Bạn đang tìm giải pháp cho
              </span>
              <div
                className="mt-2 inline-flex rounded-lg border border-line bg-surface p-1"
                role="group"
                aria-label="Chọn nhóm khách hàng"
              >
                {([
                  ["ca-nhan", "Cá nhân"],
                  ["doanh-nghiep", "Doanh nghiệp"],
                ] as [Segment, string][]).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSegment(value)}
                    aria-pressed={segment === value}
                    className={`rounded-md px-6 py-2.5 text-[14.5px] font-semibold transition-colors ${
                      segment === value
                        ? "bg-navy text-white"
                        : "text-ink hover:text-navy"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to={isPersonal ? "/ca-nhan" : "/doanh-nghiep"}
                className={`${BTN.primary} ${BTN_SIZE.lg}`}
              >
                Xem giải pháp {isPersonal ? "cá nhân" : "doanh nghiệp"}{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ho-tro" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
                Trung tâm hỗ trợ
              </Link>
            </div>
          </div>

          <div className="hero-visual relative min-h-[410px] overflow-hidden bg-navy-050 lg:min-h-full">
            <img
              src={heroImage}
              alt="Khách hàng sử dụng điện thoại cho nhu cầu tài chính số"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/30 bg-white/95 p-4 shadow-[0_16px_40px_-24px_rgba(0,52,147,0.45)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    Kênh số cá nhân
                  </div>
                  <div className="mt-0.5 font-display text-lg font-semibold">
                    Vietbank Digital Plus
                  </div>
                  <div className="mt-1 text-[12.5px] text-ink-soft">
                    Vietbank Digital cũ đã dừng từ 03/06/2026.
                  </div>
                </div>
                <Link
                  to="/ngan-hang-so#digital-plus"
                  aria-label="Tìm hiểu Vietbank Digital Plus"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-white"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-soft">
        <div className="mx-auto max-w-[1240px] px-6 py-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel n="">
                Tác vụ nhanh cho {isPersonal ? "cá nhân" : "doanh nghiệp"}
              </SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                Bạn muốn làm gì hôm nay?
              </h2>
            </div>
            <Link
              to={isPersonal ? "/ca-nhan" : "/doanh-nghiep"}
              className="flex items-center gap-1.5 text-[14.5px] font-semibold text-navy hover:underline"
            >
              Xem trang tổng quan <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {TOP_TASKS[segment].map(
              ({ icon: Icon, label, hint, to }, index) => (
                <Link
                  key={label}
                  to={to}
                  className={`group flex min-h-36 flex-col justify-between rounded-xl border p-5 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-[var(--shadow-card-hover)] ${
                    index < 2 ? "lg:col-span-2" : ""
                  } ${
                    index === 0
                      ? "border-navy bg-navy text-white"
                      : index === 1
                        ? "border-[#dbe7f5] bg-navy-050"
                        : "border-line bg-surface"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-lg transition-colors ${
                      index === 0
                        ? "bg-white/12 text-yellow"
                        : "bg-white text-navy shadow-sm"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold leading-tight">
                      {label}
                    </div>
                    <div
                      className={`mt-1 text-[12.5px] leading-snug ${
                        index === 0 ? "text-white/70" : "text-ink-soft"
                      }`}
                    >
                      {hint}
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <SectionLabel n="">Khám phá theo nhu cầu</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Chọn câu gần với tình huống của bạn nhất.
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-12">
            {NEEDS[segment].map((item, index) => (
              <Link
                key={item.title}
                to={item.to}
                className={`group flex flex-col rounded-xl border border-line p-6 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-[var(--shadow-card-hover)] ${
                  index % 2 === 0
                    ? "bg-surface lg:col-span-7"
                    : "bg-navy-050 lg:col-span-5"
                }`}
              >
                <span className="w-fit rounded border border-line bg-soft px-2 py-0.5 text-[12px] font-semibold text-ink-soft">
                  {item.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight group-hover:text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-1.5 text-[13px] text-ink">
                  {item.cues.map((cue) => (
                    <li key={cue} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                      {cue}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy">
                  Xem sản phẩm liên quan <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-soft">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <SectionLabel n="">Dữ liệu thay đổi theo thời điểm</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Tỷ giá & lãi suất: mở nguồn Vietbank đang công bố.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Thông tin tài chính biến động được mở trực tiếp từ công cụ Vietbank
            chính thức để bạn kiểm tra đúng thời điểm.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-line bg-surface p-6">
              <TrendingUp className="h-6 w-6 text-navy" />
              <h3 className="mt-4 text-lg font-semibold">
                Tỷ giá ngoại tệ & vàng
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Tra cứu theo ngày, xem biểu đồ và công cụ chuyển đổi trên
                Vietbank.
              </p>
              <div className="mt-5">
                <ActionLink
                  action={{
                    label: "Tra cứu tỷ giá Vietbank",
                    href: OFFICIAL.personalFx,
                  }}
                  variant="secondary"
                />
              </div>
            </article>
            <article className="rounded-xl border border-line bg-surface p-6">
              <PiggyBank className="h-6 w-6 text-navy" />
              <h3 className="mt-4 text-lg font-semibold">
                Lãi suất khách hàng cá nhân
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Xem biểu lãi suất huy động đang được Vietbank công bố tại thời
                điểm tra cứu.
              </p>
              <div className="mt-5">
                <ActionLink
                  action={{
                    label: "Xem lãi suất Vietbank",
                    href: OFFICIAL.personalRates,
                  }}
                  variant="secondary"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <SectionLabel n="">Hệ sinh thái ngân hàng số</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Digital Plus cho cá nhân. DigiBiz cho doanh nghiệp.
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl bg-navy p-8 text-white">
              <Smartphone className="h-6 w-6 text-yellow" />
              <div className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-white/60">
                Khách hàng cá nhân
              </div>
              <h3 className="mt-2 font-display text-3xl font-semibold">
                Vietbank Digital Plus
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
                Nền tảng số dành cho khách hàng cá nhân. Vietbank Digital cũ đã
                ngừng hoạt động từ 03/06/2026.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink
                  action={{
                    label: "Trang Digital Plus",
                    href: OFFICIAL.digitalPlus,
                  }}
                  variant="onDark"
                  size="sm"
                />
                <Link
                  to="/ngan-hang-so#digital-plus"
                  className={`${BTN.onDarkGhost} ${BTN_SIZE.sm}`}
                >
                  So sánh nền tảng
                </Link>
              </div>
            </article>
            <article className="rounded-xl border border-line bg-surface p-8">
              <Building2 className="h-6 w-6 text-navy" />
              <div className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-ink-soft">
                Khách hàng doanh nghiệp
              </div>
              <h3 className="mt-2 font-display text-3xl font-semibold text-navy">
                Vietbank DigiBiz
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                Nền tảng ngân hàng số doanh nghiệp với quản trị giao dịch, phê
                duyệt và vận hành tài chính theo cấu trúc tổ chức.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink
                  action={{ label: "Truy cập DigiBiz", href: OFFICIAL.digiBiz }}
                  size="sm"
                />
                <Link
                  to="/ngan-hang-so#digibiz"
                  className={`${BTN.secondary} ${BTN_SIZE.sm}`}
                >
                  Tìm hiểu trước
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel n="">Niềm tin và minh bạch</SectionLabel>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
              Các bằng chứng quan trọng nên dễ thấy.
            </h2>
            <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
              Vietbank công bố 127 điểm giao dịch, tầm nhìn ngân hàng bán lẻ uy
              tín hàng đầu Việt Nam và cổ phiếu VBB đã chính thức giao dịch trên
              HOSE từ 14/07/2026.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink
                action={{ label: "Về Vietbank", href: OFFICIAL.about }}
                variant="secondary"
              />
              <ActionLink
                action={{ label: "Nhà đầu tư", href: OFFICIAL.investor }}
                variant="ghost"
              />
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {[
              ["127", "điểm giao dịch được Vietbank công bố"],
              ["VBB", "niêm yết HOSE từ 14/07/2026"],
              [
                "205.000+ tỷ",
                "tổng tài sản tại 30/06/2026 theo công bố Vietbank",
              ],
            ].map(([value, label]) => (
              <div key={value} className="bg-surface p-6">
                <div className="font-display text-2xl font-semibold text-navy tnum">
                  {value}
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <SectionLabel n="">Tin mới nhất</SectionLabel>
              <a
                href={OFFICIAL.news}
                {...EXTERNAL_LINK_PROPS}
                className="text-[14px] font-semibold text-navy hover:underline"
              >
                Tất cả tin Vietbank
              </a>
            </div>
            <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
              {LATEST_NEWS.map((item) => (
                <a
                  key={item.title}
                  href={OFFICIAL.news}
                  {...EXTERNAL_LINK_PROPS}
                  className="group flex items-start gap-4 py-4 hover:bg-navy-050/60"
                >
                  <div className="w-24 shrink-0">
                    <span className="block rounded border border-line bg-soft px-2 py-0.5 text-center text-[12px] font-semibold text-ink-soft">
                      {item.tag}
                    </span>
                    <span className="mt-1.5 block text-center text-[12px] tnum text-ink-soft">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-[15px] font-medium leading-snug text-ink group-hover:text-navy">
                    {item.title}
                  </p>
                  <ArrowUpRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-ink-soft group-hover:text-navy" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel n="">Câu hỏi trước khi đi tiếp</SectionLabel>
            <div className="mt-6 overflow-hidden rounded-xl border border-line">
              {[
                {
                  q: "Tôi là cá nhân thì đăng nhập Internet Banking cũ ở đâu?",
                  a: "Vietbank đã thông báo dừng Internet Banking dành cho khách hàng cá nhân từ 18/05/2026. Hãy dùng Digital Plus và xem trang Ngân hàng số để đi đúng kênh.",
                },

                {
                  q: "Tôi muốn xem thẻ nào đang thật sự có tại Vietbank?",
                  a: "Trang Thẻ dùng tên sản phẩm đang được Vietbank công bố và mở trực tiếp nguồn sản phẩm chính thức.",
                },
                {
                  q: "Tỷ giá và lãi suất trên concept có phải số liệu giao dịch thật?",
                  a: "Không. Concept không hiển thị bảng số liệu mẫu và luôn dẫn tới nguồn tỷ giá, lãi suất Vietbank đang công bố.",
                },
                {
                  q: "Tôi nghi ngờ một đường link Vietbank được gửi qua tin nhắn?",
                  a: `Không nhập thông tin xác thực. Tự mở vietbank.com.vn hoặc gọi ${HOTLINE} để kiểm tra.`,
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group border-b border-line last:border-0"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 bg-surface px-5 py-4 text-[15px] font-semibold hover:bg-navy-050 [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-navy transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="bg-surface px-5 pb-5 text-[14.5px] leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-soft">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-6 px-6 py-12 lg:flex-row lg:items-center">
          <div>
            <SectionLabel n="">Hỗ trợ nhanh</SectionLabel>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              Cần xác minh hoặc tìm tài liệu?
            </h2>
            <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
              Hotline, chi nhánh, biểu mẫu và công cụ tra cứu đều được gom về
              một trung tâm.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={HOTLINE_TEL} className={`${BTN.primary} ${BTN_SIZE.lg}`}>
              <Phone className="h-4 w-4" /> {HOTLINE}
            </a>
            <Link to="/ho-tro" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
              Mở trung tâm hỗ trợ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
