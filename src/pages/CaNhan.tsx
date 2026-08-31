import {
  Wallet,
  PiggyBank,
  CreditCard,
  Landmark,
  Car,
  Home as HomeIcon,
  Smartphone,
  ArrowRight,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { Link } from "react-router"
import { ActionLink, Section, SectionHead, FeatureRow, CTABand } from "../lib/sections"
import { OFFICIAL } from "../lib/official"

const PRODUCTS = [
  {
    id: "accounts",
    icon: Wallet,
    title: "Tài khoản thanh toán",
    body: "Tài khoản cho nhu cầu giao dịch hằng ngày; Vietbank hiện truyền thông luồng mở tài khoản online bằng eKYC trên Digital Plus.",
    cues: ["Mở online với eKYC", "Kết nối Digital Plus", "Tài khoản cho giao dịch hằng ngày"],
    to: "/ngan-hang-so#digital-plus",
  },
  {
    id: "savings",
    icon: PiggyBank,
    title: "Tiền gửi tiết kiệm",
    body: "Khám phá các hình thức tiết kiệm và kiểm tra lãi suất/điều kiện đang áp dụng trước khi quyết định gửi tiền.",
    cues: ["Nhiều kỳ hạn", "Có kênh online", "Kiểm tra lãi suất hiện hành"],
    to: "/ho-tro#rates",
  },
  {
    id: "cards",
    icon: CreditCard,
    title: "Thẻ Vietbank",
    body: "Thẻ tín dụng, thanh toán và trả trước; chọn theo mục đích sử dụng rồi đối chiếu biểu phí và ưu đãi đang hiệu lực.",
    cues: ["Tín dụng", "Thanh toán", "Biểu phí & ưu đãi"],
    to: "/the",
  },
  {
    id: "loans",
    icon: HomeIcon,
    title: "Vay mua nhà",
    body: "Tìm hiểu giải pháp vay cho nhu cầu mua, xây hoặc sửa nhà và chuẩn bị thông tin trước khi trao đổi với chuyên viên.",
    cues: ["Mục đích vay rõ ràng", "Điều kiện & hồ sơ", "Trao đổi chuyên viên"],
    to: "/ho-tro#contact",
  },
  {
    id: "auto-loan",
    icon: Car,
    title: "Vay mua ô tô",
    body: "Tìm hiểu lựa chọn tài trợ mua xe và các điều kiện áp dụng theo hồ sơ thực tế của khách hàng.",
    cues: ["Xe phục vụ nhu cầu cá nhân", "Điều kiện theo hồ sơ", "Tư vấn trước đăng ký"],
    to: "/ho-tro#contact",
  },
  {
    id: "consumer-loan",
    icon: Landmark,
    title: "Vay tiêu dùng",
    body: "Giải pháp tín dụng cho nhu cầu chi tiêu cá nhân; lãi suất, phí và điều kiện cần được kiểm tra theo chương trình đang áp dụng.",
    cues: ["Nhu cầu tiêu dùng", "Thông tin chi phí", "Điều kiện theo từng sản phẩm"],
    to: "/ho-tro#contact",
  },
]

const AUDIENCE_FIT = [
  {
    icon: GraduationCap,
    title: "Người mới bắt đầu quản lý tài chính",
    body: "Ưu tiên tài khoản thanh toán, Digital Plus và thẻ thanh toán để xây dựng thói quen giao dịch số trước khi mở rộng sang các sản phẩm khác.",
    cta: { label: "Bắt đầu với Digital Plus", to: "/ngan-hang-so#digital-plus" },
  },
  {
    icon: Briefcase,
    title: "Người đi làm & gia đình",
    body: "Kết hợp tài khoản, tiết kiệm, thẻ và nhu cầu vay theo từng mục tiêu; luôn kiểm tra điều kiện, phí và khả năng chi trả trước khi đăng ký.",
    cta: { label: "Xem danh mục sản phẩm", to: "/ca-nhan#accounts" },
  },
  {
    icon: HeartHandshake,
    title: "Người ưu tiên tích lũy an toàn",
    body: "Tập trung vào tiền gửi, khả năng tiếp cận hỗ trợ và thông tin lãi suất/điều kiện rõ ràng trước khi quyết định kỳ hạn.",
    cta: { label: "Xem lãi suất & hỗ trợ", to: "/ho-tro#rates" },
  },
]

export default function CaNhan() {
  return (
    <>
      <PageHeader
        eyebrow="Khách hàng cá nhân"
        crumb="Cá nhân"
        title="Bắt đầu từ nhu cầu tài chính của bạn"
        lead="Tài khoản, tiết kiệm, thẻ và vay vốn được tổ chức theo điều bạn muốn làm; các bước có yếu tố lãi suất, phí hoặc phê duyệt luôn dẫn tới nguồn Vietbank hoặc tư vấn phù hợp."
      />

      <Section id="start-online">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              n="01"
              eyebrow="Bắt đầu online"
              title="Mở tài khoản với eKYC trên Digital Plus"
              lead="Vietbank đang truyền thông khả năng mở tài khoản online khoảng 5 phút với eKYC trong các chiến dịch 2026. Digital Plus là nền tảng số chính thức hiện nay cho khách hàng cá nhân."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Mở Digital Plus chính thức", href: OFFICIAL.digitalPlus }} />
              <Link to="/ngan-hang-so#digital-plus" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
                Xem trước tính năng
              </Link>
            </div>
            <p className="mt-4 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-soft">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
              Điều kiện mở tài khoản thực tế phụ thuộc quy định Vietbank tại thời điểm đăng ký; trang redesign không mô phỏng kết quả phê duyệt.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-line bg-navy-050">
            <img
              src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=900&h=650&fit=crop&auto=format"
              alt="Minh hoạ khách hàng sử dụng ngân hàng số trên điện thoại"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="02"
          eyebrow="Danh mục sản phẩm"
          title="Chọn theo điều bạn muốn làm"
          lead="Các mục dưới đây có URL neo riêng để menu, chiến dịch và kết quả tìm kiếm có thể đưa người dùng đến đúng nhu cầu thay vì đầu trang chung."
        />
        <div className="mt-6 divide-y divide-line border-y border-line">
          {PRODUCTS.map((p) => (
            <div key={p.id} id={p.id} className="scroll-mt-28">
              <FeatureRow icon={p.icon} title={p.title} body={p.body} cues={p.cues} to={p.to} cta="Tiếp tục" />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          n="03"
          eyebrow="Gợi ý điểm bắt đầu"
          title="Không cần hiểu thuật ngữ ngân hàng trước"
          lead="Nhóm theo bối cảnh giúp định hướng ban đầu; quyết định cuối vẫn dựa trên nhu cầu, điều kiện sản phẩm và khả năng tài chính của từng khách hàng."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {AUDIENCE_FIT.map(({ icon: Icon, title, body, cta }) => (
            <div
              key={title}
              className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-shadow hover:shadow-(--shadow-card-hover)"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{body}</p>
              <Link
                to={cta.to}
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy hover:underline"
              >
                {cta.label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="04"
          eyebrow="Luồng mở tài khoản"
          title="Biết trước điều gì xảy ra tiếp theo"
          lead="Luồng dưới đây mô tả cách bắt đầu theo thông tin eKYC/Digital Plus công khai; không phải cam kết phê duyệt tài khoản."
        />
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Mở Digital Plus",
              body: "Truy cập landing Vietbank Digital Plus hoặc kho ứng dụng chính thức từ trang Ngân hàng số.",
            },
            {
              n: "02",
              title: "Thực hiện định danh",
              body: "Làm theo hướng dẫn eKYC trong luồng mở tài khoản và các bước xác thực mà ứng dụng yêu cầu.",
            },
            {
              n: "03",
              title: "Bắt đầu sử dụng",
              body: "Sau khi hệ thống Vietbank hoàn tất luồng thực tế, người dùng tiếp tục với các tiện ích được cấp trên Digital Plus.",
            },
          ].map((s) => (
            <li key={s.n} className="rounded-xl border border-line bg-surface p-6">
              <span className="text-[13px] font-semibold tnum text-amber">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTABand
        title="Muốn tự bắt đầu hay cần người hỗ trợ?"
        body="Digital Plus phù hợp cho hành trình cá nhân online; nếu nhu cầu liên quan vay, điều kiện hoặc hồ sơ cụ thể, hãy dùng kênh hỗ trợ Vietbank."
        primary={{ label: "Mở Digital Plus", href: OFFICIAL.digitalPlus }}
        secondary={{ label: "Liên hệ Vietbank", href: OFFICIAL.contact }}
      />

      <Section>
        <div className="flex items-start gap-4 rounded-xl border border-line bg-navy-050 px-6 py-5">
          <Smartphone className="mt-0.5 h-6 w-6 shrink-0 text-navy" />
          <div>
            <p className="text-[14.5px] leading-relaxed text-ink">
              Khách hàng cá nhân được Vietbank hướng sang <span className="font-semibold text-navy">Digital Plus</span> cho ngân hàng số.
              Internet Banking cá nhân dừng cung cấp từ 18/05/2026 và ứng dụng Vietbank Digital cũ dừng từ 03/06/2026.
            </p>
            <Link to="/ngan-hang-so#migration" className="mt-2 inline-flex text-[13.5px] font-semibold text-navy hover:underline">
              Xem luồng chuyển đổi
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
