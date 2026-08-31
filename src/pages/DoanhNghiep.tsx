import { Banknote, TrendingUp, Globe, ShieldCheck, Building2, Receipt, ArrowRight, Store, Factory, Briefcase } from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { Section, SectionHead, FeatureRow, CTABand, Stat } from "../lib/sections"

const SOLUTIONS = [
  { icon: Building2, title: "Tài khoản doanh nghiệp", body: "Tài khoản thanh toán, thu chi hộ và quản lý số dư tập trung cho doanh nghiệp mọi quy mô.", cues: ["Thu / chi hộ", "Nhiều tài khoản phụ", "Sao kê linh hoạt"], to: "/doanh-nghiep" },
  { icon: Banknote, title: "Vay & tài trợ vốn", body: "Vốn lưu động, hạn mức thấu chi và tài trợ theo chuỗi cung ứng cho SME.", cues: ["Vốn lưu động", "Thấu chi", "Tài trợ chuỗi"], to: "/doanh-nghiep" },
  { icon: TrendingUp, title: "Quản lý dòng tiền", body: "Chi lương, thu hộ, chi hộ và đối soát tự động, kiểm soát trực tuyến trên DigiBiz.", cues: ["Chi lương hàng loạt", "Phê duyệt đa cấp", "Đối soát tập trung"], to: "/ngan-hang-so" },
  { icon: Globe, title: "Tài trợ thương mại & XNK", body: "L/C, nhờ thu, tài trợ xuất nhập khẩu và chuyển tiền quốc tế với tỷ giá cạnh tranh.", cues: ["L/C & nhờ thu", "Tỷ giá cạnh tranh", "Chuyển tiền quốc tế"], to: "/doanh-nghiep" },
  { icon: ShieldCheck, title: "Bảo lãnh", body: "Bảo lãnh dự thầu, thực hiện hợp đồng và tạm ứng — phát hành nhanh, theo dõi online.", cues: ["Nhiều loại bảo lãnh", "Phát hành nhanh", "Theo dõi trực tuyến"], to: "/doanh-nghiep" },
  { icon: Receipt, title: "Thu ngân sách & hoá đơn", body: "Kết nối thu hộ hoá đơn, thuế và các khoản thu định kỳ theo mô hình vận hành của bạn.", cues: ["Thu hộ hoá đơn", "Kết nối ERP", "Báo cáo định kỳ"], to: "/doanh-nghiep" },
]

/* Quy mô segmentation — answers "what fits my size?" per audience-intent-and-top-tasks */
const SEGMENTS = [
  {
    icon: Store,
    title: "Hộ kinh doanh & SME nhỏ",
    body: "Tài khoản thanh toán, hoá đơn điện tử, QR thanh toán và vay vốn nhanh theo doanh thu.",
    cues: ["Mở online 1 ngày", "QR VietQR miễn phí", "Vay theo doanh thu"],
  },
  {
    icon: Factory,
    title: "Doanh nghiệp sản xuất",
    body: "Vốn lưu động theo chu kỳ, tài trợ chuỗi cung ứng, L/C nhập khẩu nguyên vật liệu.",
    cues: ["Tài trợ chuỗi", "L/C nhập khẩu", "Chi lương tập trung"],
  },
  {
    icon: Briefcase,
    title: "Dịch vụ & thương mại",
    body: "Quản lý dòng tiền đa chi nhánh, thu hộ chi hộ, đối soát tự động với DigiBiz.",
    cues: ["Đối soát đa chi nhánh", "Phê duyệt đa cấp", "Báo cáo real-time"],
  },
]

export default function DoanhNghiep() {
  return (
    <>
      <PageHeader
        eyebrow="Khách hàng doanh nghiệp"
        crumb="Doanh nghiệp"
        title="Đồng hành cùng doanh nghiệp trên từng dòng tiền"
        lead="Từ vốn lưu động, quản lý dòng tiền đến tài trợ thương mại — Vietbank thiết kế giải pháp theo cách doanh nghiệp của bạn vận hành."
      />

      {/* Evidence band — labelled illustrative */}
      <Section tone="soft">
        <SectionHead n="01" eyebrow="Vì sao chọn Vietbank" title="Giải pháp thực tế cho doanh nghiệp SME" />
        <div className="mt-6 grid divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Stat value="1 ngày" label="Mở tài khoản doanh nghiệp trực tuyến, hồ sơ tối giản" />
          <Stat value="Đa cấp" label="Phê duyệt nhiều cấp và phân quyền theo vai trò trên DigiBiz" />
          <Stat value="24/7" label="Kiểm soát dòng tiền và giao dịch liền mạch web — mobile" />
        </div>
        <p className="mt-3 text-[12.5px] text-ink-soft">Thông tin minh hoạ cho mục đích thiết kế.</p>
      </Section>

      <Section>
        <SectionHead n="02" eyebrow="Giải pháp theo nhu cầu" title="Bạn đang cần giải quyết điều gì?" />
        <div className="mt-6 divide-y divide-line border-y border-line">
          {SOLUTIONS.map((s) => (
            <FeatureRow key={s.title} {...s} cta="Xem giải pháp" />
          ))}
        </div>
      </Section>

      {/* Quy mô segmentation — answers "is this for my size?" */}
      <Section tone="soft">
        <SectionHead
          n="03"
          eyebrow="Theo quy mô"
          title="Phù hợp với doanh nghiệp của bạn"
          lead="Giải pháp được điều chỉnh theo ngành và quy mô — chọn nhóm gần với bạn nhất."
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

      {/* DigiBiz highlight */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-2 overflow-hidden rounded-xl border border-line bg-navy-050 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=900&h=650&fit=crop&auto=format"
              alt="Chủ doanh nghiệp quản lý dòng tiền trên nền tảng DigiBiz"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHead
              n="04"
              eyebrow="Ngân hàng số doanh nghiệp"
              title="Vietbank DigiBiz — điều hành tài chính chủ động"
              lead="Kiểm soát dòng tiền, thu chi hộ, trả lương và phê duyệt nhiều cấp trên một nền tảng, liền mạch giữa web và mobile."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/ngan-hang-so" className={`${BTN.primary} ${BTN_SIZE.lg}`}>
                Tìm hiểu DigiBiz <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ho-tro" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
                Liên hệ chuyên viên
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Trao đổi cùng chuyên viên doanh nghiệp"
        body="Nhận tư vấn giải pháp phù hợp với ngành và quy mô của bạn, kèm ước tính chi phí minh bạch."
        primary={{ label: "Đặt lịch tư vấn", to: "/ho-tro" }}
        secondary={{ label: "Xem biểu phí", to: "/ho-tro#docs" }}
      />
    </>
  )
}
