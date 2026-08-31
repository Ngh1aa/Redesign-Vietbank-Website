import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  ExternalLink,
  LineChart,
  Lock,
  Send,
  Smartphone,
  Users,
} from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"

const PLUS_FEATURES = [
  { icon: Send, title: "Giao dịch hằng ngày", body: "Chuyển tiền, thanh toán và thiết lập lệnh định kỳ trên ứng dụng." },
  { icon: LineChart, title: "Quản lý tài chính", body: "Theo dõi chi tiêu và các thông tin hỗ trợ quản lý tài chính cá nhân." },
  { icon: Lock, title: "Bảo mật đa lớp", body: "Vietbank công bố các lớp xác thực gồm mật khẩu, sinh trắc học và OTP." },
]

const BIZ_FEATURES = [
  { icon: LineChart, title: "Tài khoản & dòng tiền", body: "Theo dõi thông tin tài khoản, chi tiêu và trạng thái giao dịch tập trung." },
  { icon: CalendarClock, title: "Lịch thanh toán", body: "Quản lý người thụ hưởng và lập lịch theo nhu cầu vận hành doanh nghiệp." },
  { icon: Users, title: "Phân quyền & phê duyệt", body: "Duyệt giao dịch nhiều cấp và tùy chỉnh quyền theo cấu trúc tổ chức." },
]

const PLATFORM_GUIDE = [
  { feature: "Dành cho", plus: "Khách hàng cá nhân", biz: "Khách hàng doanh nghiệp" },
  { feature: "Điểm vào", plus: "Ứng dụng iOS / Android", biz: "digibiz.vietbank.com.vn" },
  { feature: "Trọng tâm", plus: "Giao dịch & quản lý tài chính cá nhân", biz: "Quản trị tài chính & vận hành giao dịch" },
  { feature: "Lệnh định kỳ / lịch thanh toán", plus: "Có", biz: "Có" },
  { feature: "Phê duyệt đa cấp", plus: "Không áp dụng", biz: "Có" },
  { feature: "Phân quyền theo cấu trúc DN", plus: "Không áp dụng", biz: "Có" },
]

export default function NganHangSo() {
  return (
    <>
      <PageHeader
        eyebrow="Ngân hàng số"
        crumb="Ngân hàng số"
        title="Hai nền tảng số, hai cách sử dụng khác nhau"
        lead="Digital Plus đồng hành với tài chính cá nhân hằng ngày; DigiBiz tập trung vào vận hành tài chính doanh nghiệp. Chọn đúng kênh trước khi tiếp tục."
      />

      <Section>
        <article id="digital-plus" className="scroll-mt-28 overflow-hidden border-y border-line bg-navy text-white">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="flex flex-col justify-center px-6 py-9 lg:px-9 lg:py-12">
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">
                <Smartphone className="h-4 w-4 text-yellow" aria-hidden="true" /> Cá nhân · Vietbank Digital Plus
              </div>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-tight">Ngân hàng số cho nhịp sống hằng ngày</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/76">Vietbank mô tả Digital Plus là nền tảng lấy khách hàng làm trọng tâm, kết hợp giao dịch, tiện ích và quản lý tài chính trong một trải nghiệm số.</p>
              <div className="mt-7 grid border-y border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
                {PLUS_FEATURES.map(({ icon: Icon, title, body }, index) => (
                  <div key={title} className={`py-4 sm:px-4 ${index ? "border-t border-white/15 sm:border-t-0" : ""}`}>
                    <Icon className="h-5 w-5 text-yellow" aria-hidden="true" />
                    <h3 className="mt-2 text-[14.5px] font-semibold">{title}</h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-white/62">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <ActionLink action={{ label: "Mở Digital Plus", href: OFFICIAL.digitalPlus }} variant="onDark" />
                <ActionLink action={{ label: "App Store", href: OFFICIAL.digitalPlusIOS }} variant="onDarkGhost" size="sm" />
                <ActionLink action={{ label: "Google Play", href: OFFICIAL.digitalPlusAndroid }} variant="onDarkGhost" size="sm" />
              </div>
            </div>
            <a href={OFFICIAL.digitalPlusExperience} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[330px] overflow-hidden bg-[#073d77] lg:min-h-[470px]">
              <img src={OFFICIAL_MEDIA.digitalPlusEvent} alt="Sự kiện ra mắt Vietbank Digital Plus" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="eager" decoding="async" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/95 via-[#032f67]/45 to-transparent px-6 pb-5 pt-20">
                <span className="text-[12px] font-semibold text-white/75">Ảnh sự kiện thật do Vietbank công bố · 30/03/2026</span>
              </div>
            </a>
          </div>
        </article>
      </Section>

      <Section tone="soft">
        <article id="digibiz" className="scroll-mt-28 grid overflow-hidden border-y border-line bg-surface lg:grid-cols-[0.95fr_1.05fr]">
          <a href={OFFICIAL.digiBizLaunch} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[310px] overflow-hidden bg-soft lg:min-h-[430px]">
            <img src={OFFICIAL_MEDIA.digiBizLaunch} alt="Sự kiện ra mắt Vietbank DigiBiz" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/90 via-[#032f67]/35 to-transparent px-6 pb-5 pt-20 text-white">
              <span className="text-[12px] font-semibold">Ảnh sự kiện thật do Vietbank công bố · 03/07/2025</span>
            </div>
          </a>
          <div className="flex flex-col justify-center px-6 py-9 lg:px-9 lg:py-12">
            <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
              <Building2 className="h-4 w-4 text-navy" aria-hidden="true" /> Doanh nghiệp · Vietbank DigiBiz
            </div>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.9rem,3.2vw,2.7rem)] font-semibold leading-tight text-ink">Tối ưu vận hành, không chỉ thực hiện giao dịch</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">DigiBiz được Vietbank phát triển theo mô hình hợp kênh, tập trung vào quản trị tài chính, lịch thanh toán, người thụ hưởng và phê duyệt theo vai trò.</p>
            <div className="mt-7 divide-y divide-line border-y border-line">
              {BIZ_FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="grid grid-cols-[36px_1fr] gap-3 py-4">
                  <Icon className="mt-0.5 h-5 w-5 text-navy" aria-hidden="true" />
                  <div><h3 className="text-[14.5px] font-semibold">{title}</h3><p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{body}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Truy cập DigiBiz", href: OFFICIAL.digiBiz }} />
              <ActionLink action={{ label: "Thông tin DigiBiz", href: OFFICIAL.digiBizInfo }} variant="secondary" />
            </div>
          </div>
        </article>
      </Section>

      <Section>
        <SectionHead n="01" eyebrow="Chọn đúng kênh" title="Cá nhân hay doanh nghiệp?" lead="So sánh nhanh theo công việc cần hoàn thành; điều kiện sử dụng thực tế vẫn theo Vietbank tại thời điểm đăng ký." />
        <div className="mt-6 overflow-x-auto border border-line bg-surface">
          <table className="w-full min-w-[720px] text-left">
            <caption className="sr-only">So sánh Vietbank Digital Plus và Vietbank DigiBiz.</caption>
            <thead>
              <tr className="border-b border-line bg-navy-050 text-[12px] uppercase tracking-[0.08em] text-ink-soft">
                <th scope="col" className="px-5 py-3.5 font-semibold">Tiêu chí</th>
                <th scope="col" className="px-5 py-3.5 font-semibold text-ink">Digital Plus</th>
                <th scope="col" className="px-5 py-3.5 font-semibold text-ink">DigiBiz</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {PLATFORM_GUIDE.map((row, index) => (
                <tr key={row.feature} className={`border-b border-line last:border-0 ${index % 2 ? "bg-soft/45" : ""}`}>
                  <th scope="row" className="px-5 py-3.5 font-medium text-ink">{row.feature}</th>
                  <td className="px-5 py-3.5 text-ink-soft">{row.plus}</td>
                  <td className="px-5 py-3.5 text-ink-soft">{row.biz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-soft"><Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" /> Tính năng được đối chiếu với nguồn Vietbank công khai; không phải mô phỏng tài khoản hay quyền truy cập thực tế.</p>
      </Section>

      <Section id="migration" tone="soft">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHead n="02" eyebrow="Chuyển đổi kênh cá nhân" title="Đang dùng Vietbank Digital cũ?" lead="Vietbank đã công bố hai mốc chuyển đổi quan trọng cho khách hàng cá nhân trong năm 2026." />
          <div className="border-y border-line bg-surface">
            {[
              ['18/05/2026','Dừng Internet Banking dành cho khách hàng cá nhân và hướng sang Digital Plus.'],
              ['03/06/2026','Ứng dụng Vietbank Digital cũ ngừng hoạt động; khách hàng chuyển sang Digital Plus.'],
            ].map(([date,text], index) => (
              <div key={date} className={`grid grid-cols-[110px_1fr] gap-4 px-5 py-4 ${index ? "border-t border-line" : ""}`}>
                <span className="font-semibold text-navy tnum">{date}</span><p className="text-[14px] leading-relaxed text-ink-soft">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ActionLink action={{ label: "Xem thông báo chuyển đổi", href: OFFICIAL.digitalPlusMigration }} variant="secondary" />
          <Link to="/ho-tro#security" className={`${BTN.ghost} ${BTN_SIZE.lg}`}>Kiểm tra kênh chính thức <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </Section>

      <CTABand
        title="Chọn đúng nền tảng trước khi đăng nhập"
        body="Khách hàng cá nhân dùng Digital Plus; khách hàng doanh nghiệp dùng DigiBiz. Các nút bên dưới mở trực tiếp kênh Vietbank chính thức."
        primary={{ label: "Mở Digital Plus", href: OFFICIAL.digitalPlus }}
        secondary={{ label: "Truy cập DigiBiz", href: OFFICIAL.digiBiz }}
      />
    </>
  )
}
