import { Link } from "react-router"
import {
  ArrowUpRight,
  Calculator,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { PageHeader, HOTLINE, HOTLINE_TEL } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"
import SupportCalculators from "../components/SupportCalculators"

const PRIMARY_UTILITIES = [
  { icon: TrendingUp, title: "Tỷ giá", note: "Bảng, biểu đồ & quy đổi", href: OFFICIAL.personalFx },
  { icon: Landmark, title: "Lãi suất", note: "Mức Vietbank đang công bố", href: OFFICIAL.personalRates },
  { icon: MapPin, title: "Chi nhánh / PGD", note: "Tra cứu mạng lưới thật", href: OFFICIAL.branches },
  { icon: FileText, title: "Biểu phí & biểu mẫu", note: "Tài liệu theo nhóm khách hàng", href: OFFICIAL.documents },
]

const SERVICE_UTILITIES = [
  { icon: Calculator, title: "Tính khoản vay / tiết kiệm", note: "Ước tính trước khi đối chiếu Vietbank", to: "/ho-tro#calculators" },
  { icon: ReceiptText, title: "Tra cứu hóa đơn", note: "Cổng hóa đơn khách hàng cá nhân", href: OFFICIAL.invoiceLookupPersonal },
  { icon: SearchCheck, title: "Tra soát giao dịch", note: "Mở luồng xác minh Vietbank", href: OFFICIAL.transactionTrace },
]

export default function HoTro() {
  return (
    <>
      <PageHeader
        eyebrow="Hỗ trợ & công cụ"
        crumb="Hỗ trợ"
        title="Tìm đúng công cụ, không cần dò nhiều trang"
        lead="Tỷ giá, lãi suất, calculator, chi nhánh, biểu mẫu và tra soát được gom theo tác vụ; phần cần dữ liệu hiện hành hoặc xác minh danh tính luôn mở Vietbank chính thức."
      />

      <Section id="rates">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHead
            n="01"
            eyebrow="Tra cứu nhanh"
            title="Những việc người dùng thường cần trước tiên"
            lead="Đưa utility lên trước marketing giúp người dùng hoàn thành việc cần làm nhanh hơn, đặc biệt với dữ liệu tài chính thay đổi theo thời điểm."
          />
          <div className="grid border-y border-line bg-surface sm:grid-cols-2">
            {PRIMARY_UTILITIES.map(({ icon: Icon, title, note, href }, index) => (
              <a
                key={title}
                href={href}
                {...EXTERNAL_LINK_PROPS}
                className={`group grid min-h-[92px] grid-cols-[34px_1fr_auto] items-center gap-3 px-4 py-4 transition-colors hover:bg-navy-050 sm:px-5 ${index % 2 ? "sm:border-l sm:border-line" : ""} ${index > 1 ? "border-t border-line" : index === 1 ? "border-t border-line sm:border-t-0" : ""}`}
              >
                <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
                <span><strong className="block text-[15px] group-hover:text-navy">{title}</strong><span className="mt-1 block text-[12.5px] text-ink-soft">{note}</span></span>
                <ArrowUpRight className="h-4 w-4 text-navy" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 grid border-y border-line bg-soft md:grid-cols-3 md:divide-x md:divide-line">
          {SERVICE_UTILITIES.map(({ icon: Icon, title, note, href, to }, index) => {
            const content = <><Icon className="h-5 w-5 text-navy" aria-hidden="true" /><span><strong className="block text-[14.5px]">{title}</strong><span className="mt-1 block text-[12.5px] leading-relaxed text-ink-soft">{note}</span></span></>
            const className = `grid min-h-[92px] grid-cols-[34px_1fr] items-center gap-3 px-5 py-4 transition-colors hover:bg-navy-050 ${index ? "border-t border-line md:border-t-0" : ""}`
            return href ? <a key={title} href={href} {...EXTERNAL_LINK_PROPS} className={className}>{content}</a> : <Link key={title} to={to || "/ho-tro"} className={className}>{content}</Link>
          })}
        </div>
      </Section>

      <SupportCalculators />

      <Section id="contact">
        <SectionHead n="03" eyebrow="Cần người hỗ trợ" title="Ba kênh liên hệ rõ ràng" lead="Không dựng chatbot hay ticket giả. Khi cần tư vấn hoặc phản hồi, tiếp tục qua kênh Vietbank đang công bố." />
        <div className="mt-6 grid border-y border-line bg-surface md:grid-cols-3 md:divide-x md:divide-line">
          <a href={HOTLINE_TEL} className="group px-5 py-5 transition-colors hover:bg-navy-050">
            <Phone className="h-5 w-5 text-navy" aria-hidden="true" />
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Hotline</p>
            <h3 className="mt-1 text-[17px] font-semibold tnum">{HOTLINE}</h3>
            <span className="mt-2 block text-[13px] font-semibold text-navy group-hover:underline">Gọi Vietbank</span>
          </a>
          <a href="mailto:cskh@vietbank.com.vn" className="group border-t border-line px-5 py-5 transition-colors hover:bg-navy-050 md:border-t-0">
            <Mail className="h-5 w-5 text-navy" aria-hidden="true" />
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Email CSKH</p>
            <h3 className="mt-1 text-[16px] font-semibold">cskh@vietbank.com.vn</h3>
            <span className="mt-2 block text-[13px] font-semibold text-navy group-hover:underline">Gửi email</span>
          </a>
          <a href={OFFICIAL.contact} {...EXTERNAL_LINK_PROPS} className="group border-t border-line px-5 py-5 transition-colors hover:bg-navy-050 md:border-t-0">
            <ShieldCheck className="h-5 w-5 text-navy" aria-hidden="true" />
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Biểu mẫu chính thức</p>
            <h3 className="mt-1 text-[16px] font-semibold">Gửi yêu cầu tới Vietbank</h3>
            <span className="mt-2 block text-[13px] font-semibold text-navy group-hover:underline">Mở biểu mẫu <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" /></span>
          </a>
        </div>
      </Section>

      <Section tone="soft" id="network">
        <div className="grid overflow-hidden border-y border-line bg-surface lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-8 lg:px-8 lg:py-10">
            <SectionHead
              n="04"
              eyebrow="Mạng lưới"
              title="Tìm điểm giao dịch thật của Vietbank"
              lead="Công cụ mạng lưới Vietbank hỗ trợ tra cứu chi nhánh/PGD; thông tin địa chỉ được quản lý trên website chính thức."
            />
            <div className="mt-5"><ActionLink action={{ label: "Tìm chi nhánh / PGD", href: OFFICIAL.branches }} /></div>
            <div className="mt-6 border-t border-line pt-5 text-[13.5px] leading-relaxed text-ink-soft">
              <p><strong className="text-ink">Trụ sở:</strong> 47 Trần Hưng Đạo, Phường Phú Lợi, TP. Cần Thơ.</p>
              <p className="mt-1"><strong className="text-ink">TP.HCM:</strong> 62A Cách Mạng Tháng 8, Phường Xuân Hòa, TP.HCM.</p>
              <p className="mt-1"><strong className="text-ink">SWIFT:</strong> <span className="tnum">VNTTVNVX</span></p>
            </div>
          </div>
          <a href={OFFICIAL.branchLamDongStory} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[300px] overflow-hidden bg-soft lg:min-h-[390px]">
            <img src={OFFICIAL_MEDIA.branchLamDongFacility} alt="Không gian Vietbank Chi nhánh Lâm Đồng do Vietbank công bố" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/90 via-[#032f67]/35 to-transparent px-6 pb-5 pt-20 text-white"><span className="text-[12px] font-semibold">Ảnh chi nhánh thật · Nguồn Vietbank</span></div>
          </a>
        </div>
      </Section>

      <Section id="docs">
        <SectionHead n="05" eyebrow="Tài liệu" title="Chọn đúng thư viện trước khi tải" lead="Biểu phí và biểu mẫu được tách theo khách hàng cá nhân, doanh nghiệp và thẻ để giảm nhầm lẫn." />
        <div className="mt-6 border-y border-line bg-surface">
          {[
            ['Cá nhân','Tài khoản, tiền gửi và biểu mẫu khách hàng cá nhân',OFFICIAL.personalForms],
            ['Doanh nghiệp','Biểu mẫu khách hàng tổ chức và tài khoản doanh nghiệp',OFFICIAL.businessForms],
            ['Biểu phí doanh nghiệp','Dịch vụ tài khoản, ngân quỹ và thanh toán quốc tế',OFFICIAL.businessFees],
            ['Thẻ','Biểu phí và tài liệu liên quan sản phẩm thẻ',OFFICIAL.cardFees],
          ].map(([title, body, href], index) => (
            <a key={title} href={href} {...EXTERNAL_LINK_PROPS} className={`group grid gap-3 px-5 py-4 transition-colors hover:bg-navy-050 sm:grid-cols-[180px_1fr_auto] sm:items-center ${index ? "border-t border-line" : ""}`}>
              <strong className="text-[14.5px] group-hover:text-navy">{title}</strong><span className="text-[13.5px] text-ink-soft">{body}</span><ArrowUpRight className="h-4 w-4 text-navy" />
            </a>
          ))}
        </div>
      </Section>

      <Section tone="soft" id="security">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionHead n="06" eyebrow="An toàn" title="Khi nghi ngờ, dừng thao tác và xác minh" lead="Không cung cấp OTP, mật khẩu hay thông tin đăng nhập cho bất kỳ trang/link đáng ngờ nào." />
          <div className="border-l-2 border-red bg-surface px-6 py-5">
            <ShieldCheck className="h-6 w-6 text-red" aria-hidden="true" />
            <h3 className="mt-3 text-[16px] font-semibold">Ba bước an toàn</h3>
            <ol className="mt-3 grid gap-3 text-[13.5px] leading-relaxed text-ink-soft sm:grid-cols-3">
              <li><strong className="block text-ink">01 · Dừng</strong>Không tiếp tục trên link hoặc form đáng ngờ.</li>
              <li><strong className="block text-ink">02 · Kiểm tra</strong>Xác nhận tên miền và kênh Vietbank chính thức.</li>
              <li><strong className="block text-ink">03 · Gọi</strong>Liên hệ {HOTLINE} khi cần xác minh ngay.</li>
            </ol>
          </div>
        </div>
      </Section>

      <CTABand
        title="Không tìm thấy điều bạn cần?"
        body="Dùng hotline hoặc biểu mẫu Vietbank chính thức để được hỗ trợ tiếp; trang này không nhận dữ liệu giao dịch hay OTP."
        primary={{ label: `Gọi ${HOTLINE}`, href: HOTLINE_TEL }}
        secondary={{ label: "Liên hệ Vietbank", href: OFFICIAL.contact }}
      />
    </>
  )
}
