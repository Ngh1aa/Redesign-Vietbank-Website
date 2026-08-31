import {
  ArrowRight,
  CreditCard,
  Home as HomeIcon,
  Landmark,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"

const JOURNEYS = [
  {
    id: "accounts",
    icon: Wallet,
    title: "Giao dịch hằng ngày",
    body: "Bắt đầu với tài khoản thanh toán và Digital Plus để chuyển tiền, thanh toán và quản lý các nhu cầu thường ngày trên kênh số.",
    meta: "Tài khoản · Digital Plus · eKYC",
    to: "/ngan-hang-so#digital-plus",
    cta: "Bắt đầu với Digital Plus",
  },
  {
    id: "savings",
    icon: PiggyBank,
    title: "Tích lũy cho kế hoạch phía trước",
    body: "Xem các hình thức tiết kiệm rồi đối chiếu lãi suất Vietbank đang công bố trước khi lựa chọn kỳ hạn.",
    meta: "Tiết kiệm · Kỳ hạn · Lãi suất",
    to: "/ho-tro#rates",
    cta: "Xem lãi suất",
  },
  {
    id: "cards",
    icon: CreditCard,
    title: "Chi tiêu theo cách phù hợp với bạn",
    body: "Tìm thẻ theo nhu cầu, so sánh 2–3 sản phẩm và kiểm tra biểu phí/điều kiện trên Vietbank trước khi đăng ký.",
    meta: "Finder · So sánh · Biểu phí",
    to: "/the",
    cta: "Tìm thẻ phù hợp",
  },
  {
    id: "loans",
    icon: HomeIcon,
    title: "Chuẩn bị cho mục tiêu lớn",
    body: "Từ mua nhà, ô tô đến nhu cầu tiêu dùng, hãy bắt đầu bằng mục đích vay và ước tính khả năng chi trả trước khi trao đổi hồ sơ thực tế.",
    meta: "Nhà · Ô tô · Tiêu dùng",
    to: "/ho-tro#calculators",
    cta: "Ước tính khoản vay",
  },
]

const MONEY_MOMENTS = [
  { n: "01", title: "Hôm nay", text: "Thanh toán, chuyển tiền và theo dõi chi tiêu trên Digital Plus." },
  { n: "02", title: "Tháng tới", text: "Tạo nhịp tích lũy bằng kỳ hạn và mức gửi phù hợp với kế hoạch." },
  { n: "03", title: "Mục tiêu lớn", text: "Ước tính khoản vay, đọc điều kiện và trao đổi với Vietbank khi cần hồ sơ cụ thể." },
]

export default function CaNhan() {
  return (
    <>
      <PageHeader
        eyebrow="Khách hàng cá nhân"
        crumb="Cá nhân"
        title="Ngân hàng cho những việc bạn làm mỗi ngày"
        lead="Giao dịch, tích lũy, chọn thẻ hay chuẩn bị cho một mục tiêu lớn — bắt đầu từ nhu cầu, sau đó đi tới đúng sản phẩm và kênh Vietbank."
      />

      <Section>
        <div className="grid overflow-hidden border-y border-line bg-surface lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-6 py-8 lg:px-8 lg:py-10">
            <SectionHead
              n="01"
              eyebrow="Bắt đầu trực tuyến"
              title="Một điểm bắt đầu cho tài chính hằng ngày"
              lead="Vietbank Digital Plus được Vietbank định hướng xoay quanh nhu cầu thường ngày, từ giao dịch đến quản lý tài chính cá nhân."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Mở Digital Plus", href: OFFICIAL.digitalPlus }} />
              <Link to="/ngan-hang-so#digital-plus" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
                Khám phá Digital Plus <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-4 flex max-w-xl items-start gap-2 text-[12.5px] leading-relaxed text-ink-soft">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
              Việc mở tài khoản, định danh và phê duyệt chỉ hoàn tất trên hệ thống Vietbank chính thức.
            </p>
          </div>

          <a href={OFFICIAL.digitalPlusExperience} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[300px] overflow-hidden bg-soft lg:min-h-[390px]">
            <img
              src={OFFICIAL_MEDIA.digitalPlusEvent}
              alt="Sự kiện ra mắt Vietbank Digital Plus do Vietbank công bố"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/95 via-[#032f67]/72 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">Ảnh sự kiện thật · Vietbank</p>
              <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-white/85">Digital Plus được Vietbank giới thiệu ngày 30/03/2026 với định hướng đơn giản, tiện ích, thông minh và an toàn.</p>
            </div>
          </a>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="02"
          eyebrow="Theo nhu cầu"
          title="Bạn đang muốn làm gì với tiền của mình?"
          lead="Thay vì bắt đầu từ tên sản phẩm, chọn việc cần hoàn thành rồi đi tới công cụ hoặc thông tin phù hợp."
        />
        <div className="mt-6 border-y border-line bg-surface">
          {JOURNEYS.map(({ id, icon: Icon, title, body, meta, to, cta }, index) => (
            <Link
              key={id}
              id={id}
              to={to}
              className={`group grid gap-4 px-4 py-5 transition-colors hover:bg-navy-050 sm:grid-cols-[44px_1fr_auto] sm:items-center sm:px-5 ${index ? "border-t border-line" : ""}`}
            >
              <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">{meta}</div>
                <h3 className="mt-1 text-[17px] font-semibold tracking-tight text-ink group-hover:text-navy">{title}</h3>
                <p className="mt-1 max-w-3xl text-[14px] leading-relaxed text-ink-soft">{body}</p>
              </div>
              <span className="inline-flex min-h-11 items-center gap-1.5 text-[13.5px] font-semibold text-navy sm:justify-self-end">
                {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <SectionHead
            n="03"
            eyebrow="Một nhịp tài chính"
            title="Từ giao dịch hôm nay đến mục tiêu dài hơn"
            lead="Một website ngân hàng nên giúp người dùng hiểu bước tiếp theo, không chỉ liệt kê sản phẩm."
          />
          <div className="grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
            {MONEY_MOMENTS.map((item, index) => (
              <div key={item.n} className={`px-5 py-5 ${index ? "border-t border-line sm:border-t-0" : ""}`}>
                <span className="text-[12px] font-semibold text-amber tnum">{item.n}</span>
                <h3 className="mt-2 text-[16px] font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHead
              n="04"
              eyebrow="Mở tài khoản"
              title="Ba bước để bắt đầu trên Digital Plus"
              lead="Luồng dưới đây là định hướng dựa trên thông tin eKYC Vietbank công bố; kết quả cuối chỉ được xác nhận trong ứng dụng/hệ thống Vietbank."
            />
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {[
                ["01", "Tải Digital Plus", "Đi từ landing Vietbank hoặc App Store/Google Play chính thức."],
                ["02", "Thực hiện định danh", "Làm theo hướng dẫn eKYC và các bước xác thực trong ứng dụng."],
                ["03", "Nhận xác nhận", "Chỉ coi quy trình hoàn tất khi Vietbank xác nhận trên kênh chính thức."],
              ].map(([n, title, body]) => (
                <li key={n} className="grid grid-cols-[42px_1fr] gap-3 py-4">
                  <span className="text-[12.5px] font-semibold text-amber tnum">{n}</span>
                  <div><h3 className="text-[15px] font-semibold">{title}</h3><p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{body}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="border-l-2 border-navy bg-navy-050 px-6 py-6">
            <Smartphone className="h-6 w-6 text-navy" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold">Đang dùng kênh cá nhân cũ?</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">Internet Banking cá nhân đã dừng từ 18/05/2026 và ứng dụng Vietbank Digital cũ dừng từ 03/06/2026. Khách hàng cá nhân được hướng sang Digital Plus.</p>
            <div className="mt-4"><ActionLink action={{ label: "Xem hướng dẫn chuyển đổi", href: OFFICIAL.digitalPlusMigration }} variant="ghost" size="sm" /></div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Bắt đầu trực tuyến hoặc trao đổi nhu cầu cụ thể"
        body="Digital Plus phù hợp với hành trình ngân hàng số cá nhân; với vay vốn, hồ sơ hoặc điều kiện riêng, hãy dùng kênh hỗ trợ Vietbank."
        primary={{ label: "Mở Digital Plus", href: OFFICIAL.digitalPlus }}
        secondary={{ label: "Liên hệ Vietbank", href: OFFICIAL.contact }}
      />
    </>
  )
}
