import {
  Banknote,
  TrendingUp,
  Globe,
  ShieldCheck,
  Building2,
  Receipt,
  ArrowRight,
  Store,
  Factory,
  Briefcase,
} from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { ActionLink, Section, SectionHead, FeatureRow, CTABand, Stat } from "../lib/sections"
import { OFFICIAL } from "../lib/official"

const SOLUTIONS = [
  {
    id: "accounts",
    icon: Building2,
    title: "Tài khoản doanh nghiệp",
    body: "Tài khoản thanh toán và các dịch vụ tài khoản phục vụ thu, chi và vận hành giao dịch của doanh nghiệp.",
    cues: ["Tài khoản thanh toán", "Dịch vụ tài khoản", "Đối chiếu biểu phí"],
    to: "/ho-tro#docs",
    cta: "Xem biểu mẫu doanh nghiệp",
  },
  {
    id: "credit",
    icon: Banknote,
    title: "Vay & tài trợ vốn",
    body: "Nhóm giải pháp tín dụng cho nhu cầu vốn lưu động, đầu tư và hoạt động sản xuất kinh doanh theo hồ sơ thực tế.",
    cues: ["Vốn kinh doanh", "Điều kiện theo hồ sơ", "Trao đổi chuyên viên"],
    to: "/ho-tro#contact",
    cta: "Trao đổi nhu cầu vốn",
  },
  {
    id: "cash-management",
    icon: TrendingUp,
    title: "Quản lý dòng tiền với DigiBiz",
    body: "Theo dõi tài khoản và giao dịch, lập lịch thanh toán, duyệt đa cấp và phân quyền theo cấu trúc doanh nghiệp.",
    cues: ["Quản lý tài khoản", "Lập lịch thanh toán", "Phê duyệt & phân quyền"],
    to: "/ngan-hang-so#digibiz",
    cta: "Xem DigiBiz",
  },
  {
    id: "trade",
    icon: Globe,
    title: "Tài trợ thương mại & chuyển tiền quốc tế",
    body: "Vietbank công khai các nhóm dịch vụ tài trợ thương mại và chuyển tiền quốc tế cho khách hàng doanh nghiệp.",
    cues: ["Tài trợ thương mại", "Chuyển tiền quốc tế", "Thông tin tỷ giá"],
    to: "/ho-tro#rates",
    cta: "Xem tỷ giá & hỗ trợ quốc tế",
  },
  {
    id: "guarantee",
    icon: ShieldCheck,
    title: "Bảo lãnh trong nước",
    body: "Nhóm sản phẩm bảo lãnh phục vụ nghĩa vụ và giao dịch doanh nghiệp; điều kiện được xác định theo từng nhu cầu/hồ sơ.",
    cues: ["Nhu cầu bảo lãnh", "Hồ sơ doanh nghiệp", "Tư vấn theo trường hợp"],
    to: "/ho-tro#contact",
    cta: "Trao đổi nhu cầu bảo lãnh",
  },
  {
    id: "payments",
    icon: Receipt,
    title: "Thu ngân sách & dịch vụ thanh toán",
    body: "Các dịch vụ doanh nghiệp bao gồm thu ngân sách nhà nước và nhóm tiện ích thanh toán theo danh mục Vietbank công bố.",
    cues: ["Thu ngân sách", "Dịch vụ thanh toán", "Quy định & biểu mẫu"],
    to: "/ho-tro#docs",
    cta: "Xem tài liệu thanh toán",
  },
]

const SEGMENTS = [
  {
    icon: Store,
    title: "Hộ kinh doanh & SME",
    body: "Ưu tiên khả năng nhận/chuyển tiền, theo dõi dòng tiền và tiếp cận vốn phù hợp với quy mô vận hành.",
    cues: ["Tài khoản giao dịch", "DigiBiz", "Nhu cầu vốn"],
  },
  {
    icon: Factory,
    title: "Doanh nghiệp sản xuất",
    body: "Thường cần phối hợp vốn lưu động, thanh toán nhà cung cấp và các công cụ tài trợ thương mại theo chu kỳ sản xuất.",
    cues: ["Vốn lưu động", "Tài trợ thương mại", "Quản trị thanh toán"],
  },
  {
    icon: Briefcase,
    title: "Dịch vụ & thương mại",
    body: "Tập trung vào quản trị nhiều khoản thu/chi, quy trình phê duyệt và khả năng theo dõi tài khoản minh bạch.",
    cues: ["Quản lý dòng tiền", "Phê duyệt đa cấp", "Theo dõi giao dịch"],
  },
]

export default function DoanhNghiep() {
  return (
    <>
      <PageHeader
        eyebrow="Khách hàng doanh nghiệp"
        crumb="Doanh nghiệp"
        title="Giải pháp tài chính theo cách doanh nghiệp vận hành"
        lead="Từ tài khoản, nguồn vốn và dòng tiền đến tài trợ thương mại — chọn theo công việc cần hoàn thành, sau đó tiếp tục sang DigiBiz, tài liệu hoặc chuyên viên Vietbank phù hợp."
      />

      <Section tone="soft">
        <SectionHead
          n="01"
          eyebrow="Năng lực số đã công bố"
          title="DigiBiz tập trung vào vận hành tài chính doanh nghiệp"
          lead="Ba đặc tính dưới đây được Vietbank công bố cho DigiBiz và giúp doanh nghiệp hiểu nhanh cách nền tảng hỗ trợ vận hành."
        />
        <div className="mt-6 grid divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Stat value="Hợp kênh" label="Vietbank giới thiệu DigiBiz là nền tảng hợp kênh cho hoạt động tài chính doanh nghiệp." />
          <Stat value="Đa cấp" label="Hỗ trợ duyệt giao dịch nhiều cấp và tùy chỉnh phân quyền theo cấu trúc doanh nghiệp." />
          <Stat value="Thời gian thực" label="Định hướng theo dõi và quản lý thông tin tài khoản/giao dịch theo thời gian thực." />
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
          Nguồn: thông tin ra mắt Vietbank DigiBiz ngày 03/07/2025. Điều kiện sử dụng thực tế theo Vietbank tại thời điểm đăng ký.
        </p>
      </Section>

      <Section>
        <SectionHead
          n="02"
          eyebrow="Giải pháp theo nhu cầu"
          title="Doanh nghiệp đang cần giải quyết điều gì?"
          lead="Mỗi nhóm dẫn thẳng tới nhu cầu tương ứng để doanh nghiệp không phải dò lại từ đầu trang."
        />
        <div className="mt-6 divide-y divide-line border-y border-line">
          {SOLUTIONS.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-28">
              <FeatureRow icon={s.icon} title={s.title} body={s.body} cues={s.cues} to={s.to} cta={s.cta} />
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="03"
          eyebrow="Theo mô hình vận hành"
          title="Gợi ý điểm bắt đầu theo bối cảnh"
          lead="Đây là định hướng khám phá, không phải điều kiện phê duyệt sản phẩm. Doanh nghiệp có thể phối hợp nhiều nhóm giải pháp cùng lúc."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {SEGMENTS.map(({ icon: Icon, title, body, cues }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-shadow hover:shadow-(--shadow-card-hover)"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{body}</p>
              <ul className="mt-3 flex flex-col gap-1.5 text-[13.5px] text-ink">
                {cues.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy" /> {c}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <aside className="order-2 border-y border-line bg-soft px-6 py-7 lg:order-1 lg:border lg:px-8" aria-label="Các năng lực nổi bật của DigiBiz">
            <Building2 className="h-6 w-6 text-navy" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold">DigiBiz hỗ trợ vận hành gì?</h3>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {[
                ["01", "Theo dõi tài khoản", "Tập trung thông tin tài khoản, dòng tiền và trạng thái giao dịch."],
                ["02", "Lập lịch thanh toán", "Quản lý người thụ hưởng và các lịch thanh toán theo nhu cầu doanh nghiệp."],
                ["03", "Phê duyệt đa cấp", "Phân quyền và duyệt giao dịch theo vai trò trong tổ chức."],
              ].map(([n, title, body]) => (
                <div key={n} className="grid grid-cols-[34px_1fr] gap-3 py-4">
                  <span className="text-[12.5px] font-semibold text-amber tnum">{n}</span>
                  <span><strong className="block text-[14.5px]">{title}</strong><span className="mt-1 block text-[13.5px] leading-relaxed text-ink-soft">{body}</span></span>
                </div>
              ))}
            </div>
          </aside>
          <div className="order-1 lg:order-2">
            <SectionHead
              n="04"
              eyebrow="Ngân hàng số doanh nghiệp"
              title="Vietbank DigiBiz — từ tìm hiểu sang kênh vận hành chính thức"
              lead="DigiBiz được Vietbank định vị như trợ lý tài chính số cho quản trị, giao dịch và kết nối hệ sinh thái kinh doanh. Trang này giúp bạn hiểu nền tảng trước khi mở kênh Vietbank chính thức."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Truy cập DigiBiz", href: OFFICIAL.digiBiz }} />
              <Link to="/ngan-hang-so#digibiz" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
                Xem tính năng DigiBiz <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Cần trao đổi theo ngành và quy mô?"
        body="Sử dụng kênh liên hệ chính thức của Vietbank cho nhu cầu tín dụng, hồ sơ hoặc giải pháp doanh nghiệp; dùng DigiBiz khi bạn cần vào nền tảng số."
        primary={{ label: "Liên hệ Vietbank", href: OFFICIAL.contact }}
        secondary={{ label: "Quy định & biểu mẫu", href: OFFICIAL.documents }}
      />
    </>
  )
}
