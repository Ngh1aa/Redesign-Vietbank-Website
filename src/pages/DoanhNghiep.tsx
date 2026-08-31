import {
  ArrowRight,
  Banknote,
  Building2,
  Factory,
  Globe,
  Receipt,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
} from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"

const OPERATIONS = [
  {
    id: "accounts",
    icon: Building2,
    title: "Thu, chi và tài khoản vận hành",
    body: "Tổ chức dòng tiền giao dịch hằng ngày, biểu mẫu tài khoản và các dịch vụ thanh toán theo nhu cầu doanh nghiệp.",
    meta: "Tài khoản · Thu chi · Biểu phí",
    to: "/ho-tro#docs",
    cta: "Xem tài liệu doanh nghiệp",
  },
  {
    id: "credit",
    icon: Banknote,
    title: "Nguồn vốn cho tăng trưởng",
    body: "Bắt đầu từ mục đích vốn lưu động, đầu tư hoặc mở rộng rồi trao đổi điều kiện theo hồ sơ thực tế với Vietbank.",
    meta: "Vốn lưu động · Đầu tư · Tín dụng",
    to: "/ho-tro#contact",
    cta: "Trao đổi nhu cầu vốn",
  },
  {
    id: "cash-management",
    icon: TrendingUp,
    title: "Kiểm soát dòng tiền và phê duyệt",
    body: "DigiBiz hỗ trợ theo dõi tài khoản, lập lịch thanh toán, quản lý người thụ hưởng và phê duyệt nhiều cấp.",
    meta: "DigiBiz · Dòng tiền · Phân quyền",
    to: "/ngan-hang-so#digibiz",
    cta: "Khám phá DigiBiz",
  },
  {
    id: "trade",
    icon: Globe,
    title: "Giao dịch và thương mại quốc tế",
    body: "Đi tới nhóm tài trợ thương mại, chuyển tiền quốc tế và tỷ giá theo đúng nghiệp vụ doanh nghiệp cần xử lý.",
    meta: "XNK · Chuyển tiền · Tỷ giá",
    to: "/ho-tro#rates",
    cta: "Xem tỷ giá & hỗ trợ",
  },
  {
    id: "payments",
    icon: Receipt,
    title: "Dịch vụ thanh toán & ngân sách",
    body: "Tra cứu nhóm dịch vụ thanh toán, thu ngân sách và các quy định/biểu mẫu Vietbank đang công bố cho tổ chức.",
    meta: "Thanh toán · Ngân sách · Biểu mẫu",
    to: "/ho-tro#docs",
    cta: "Mở trung tâm tài liệu",
  },
]

const BUSINESS_CONTEXTS = [
  { icon: Store, title: "SME & thương mại", text: "Ưu tiên khả năng giao dịch nhanh, nhìn rõ dòng tiền và tiếp cận nguồn vốn phù hợp chu kỳ kinh doanh." },
  { icon: Factory, title: "Sản xuất", text: "Kết hợp vốn lưu động, thanh toán nhà cung cấp và tài trợ thương mại theo chu kỳ sản xuất." },
  { icon: Users, title: "Tổ chức nhiều cấp duyệt", text: "Đặt trọng tâm vào phân quyền, trạng thái giao dịch và quy trình phê duyệt minh bạch trên DigiBiz." },
]

export default function DoanhNghiep() {
  return (
    <>
      <PageHeader
        eyebrow="Khách hàng doanh nghiệp"
        crumb="Doanh nghiệp"
        title="Tài chính đi cùng cách doanh nghiệp vận hành"
        lead="Tài khoản, nguồn vốn, dòng tiền và giao dịch quốc tế được tổ chức theo công việc cần hoàn thành — không buộc doanh nghiệp dò qua một catalogue dài."
      />

      <Section>
        <div className="grid overflow-hidden border-y border-line bg-navy text-white lg:grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-9 lg:px-9 lg:py-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">Vietbank DigiBiz · Doanh nghiệp hiện đại</p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-tight">Tối ưu vận hành. Tối đa hiệu quả.</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/76">Vietbank giới thiệu DigiBiz như một nền tảng hợp kênh cho quản trị tài chính, giao dịch, phê duyệt và phân quyền trong doanh nghiệp.</p>
            <div className="mt-6 grid border-y border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
              {[['Hợp kênh','Mobile · Web · hệ sinh thái'],['Đa cấp','Duyệt giao dịch theo vai trò'],['Tập trung','Tài khoản · dòng tiền · trạng thái']].map(([title, text], index) => (
                <div key={title} className={`py-4 sm:px-4 ${index ? 'border-t border-white/15 sm:border-t-0' : ''}`}>
                  <strong className="block text-[14px] text-white">{title}</strong>
                  <span className="mt-1 block text-[12.5px] leading-relaxed text-white/60">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Truy cập DigiBiz", href: OFFICIAL.digiBiz }} variant="onDark" />
              <Link to="/ngan-hang-so#digibiz" className={`${BTN.onDarkGhost} ${BTN_SIZE.lg}`}>Xem tính năng DigiBiz <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <a href={OFFICIAL.digiBizLaunch} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[320px] overflow-hidden bg-[#0d4178] lg:min-h-[430px]">
            <img
              src={OFFICIAL_MEDIA.digiBizLaunch}
              alt="Sự kiện ra mắt Vietbank DigiBiz do Vietbank công bố"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/95 via-[#032f67]/55 to-transparent px-6 pb-5 pt-20">
              <span className="text-[12px] font-semibold text-white/75">Ảnh sự kiện ra mắt DigiBiz · Vietbank, 03/07/2025</span>
            </div>
          </a>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="01"
          eyebrow="Theo công việc"
          title="Doanh nghiệp đang cần giải quyết điều gì?"
          lead="Mỗi điểm vào dẫn đến một nhu cầu vận hành rõ ràng và giữ nguyên ranh giới giữa nội dung định hướng với hệ thống Vietbank thật."
        />
        <div className="mt-6 border-y border-line bg-surface">
          {OPERATIONS.map(({ id, icon: Icon, title, body, meta, to, cta }, index) => (
            <Link
              key={id}
              id={id}
              to={to}
              className={`group grid gap-4 px-4 py-5 transition-colors hover:bg-navy-050 sm:grid-cols-[44px_1fr_auto] sm:items-center sm:px-5 ${index ? "border-t border-line" : ""}`}
            >
              <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">{meta}</div>
                <h3 className="mt-1 text-[17px] font-semibold tracking-tight group-hover:text-navy">{title}</h3>
                <p className="mt-1 max-w-3xl text-[14px] leading-relaxed text-ink-soft">{body}</p>
              </div>
              <span className="inline-flex min-h-11 items-center gap-1.5 text-[13.5px] font-semibold text-navy sm:justify-self-end">{cta} <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHead
            n="02"
            eyebrow="Theo mô hình vận hành"
            title="Một giải pháp không phù hợp cho mọi doanh nghiệp"
            lead="Bối cảnh giúp định hướng nơi bắt đầu; hồ sơ và điều kiện thực tế vẫn được xác định theo từng doanh nghiệp."
          />
          <div className="grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
            {BUSINESS_CONTEXTS.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className={`px-5 py-5 ${index ? "border-t border-line sm:border-t-0" : ""}`}>
                <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
                <h3 className="mt-3 text-[16px] font-semibold">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead
              n="03"
              eyebrow="Kiểm soát giao dịch"
              title="DigiBiz dành cho những quy trình có nhiều vai trò"
              lead="Các năng lực được Vietbank công bố tập trung vào quản lý tài khoản, người thụ hưởng, lịch thanh toán và duyệt giao dịch nhiều cấp."
            />
            <div className="mt-6 divide-y divide-line border-y border-line">
              {[
                ['01','Theo dõi tập trung','Xem thông tin tài khoản, dòng tiền và trạng thái giao dịch trong một nền tảng.'],
                ['02','Lập và sắp lịch','Quản lý người thụ hưởng và các lịch thanh toán theo nhu cầu vận hành.'],
                ['03','Duyệt theo vai trò','Tùy chỉnh phân quyền và phê duyệt nhiều cấp theo cấu trúc doanh nghiệp.'],
              ].map(([n,title,body]) => (
                <div key={n} className="grid grid-cols-[40px_1fr] gap-3 py-4">
                  <span className="text-[12.5px] font-semibold text-amber tnum">{n}</span>
                  <div><h3 className="text-[15px] font-semibold">{title}</h3><p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-2 border-navy bg-surface px-6 py-6">
            <ShieldCheck className="h-6 w-6 text-navy" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold">Tác vụ có xác thực vẫn ở Vietbank</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">Website này không mô phỏng đăng nhập, phân quyền hay phê duyệt giao dịch. Khi doanh nghiệp sẵn sàng thao tác, hãy chuyển sang DigiBiz hoặc liên hệ Vietbank.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Mở DigiBiz", href: OFFICIAL.digiBiz }} size="sm" />
              <ActionLink action={{ label: "Thông tin DigiBiz", href: OFFICIAL.digiBizInfo }} variant="ghost" size="sm" />
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Cần giải pháp theo ngành, quy mô hoặc hồ sơ?"
        body="Dùng kênh liên hệ Vietbank cho nhu cầu tín dụng và giải pháp cụ thể; dùng DigiBiz khi doanh nghiệp cần vào nền tảng số chính thức."
        primary={{ label: "Liên hệ Vietbank", href: OFFICIAL.contact }}
        secondary={{ label: "Mở DigiBiz", href: OFFICIAL.digiBiz }}
      />
    </>
  )
}
