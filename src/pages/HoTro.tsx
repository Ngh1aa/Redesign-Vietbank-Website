import { Link } from "react-router"
import {
  ArrowUpRight,
  Calculator,
  ChevronDown,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react"
import { PageHeader, HOTLINE, HOTLINE_TEL, BTN, BTN_SIZE } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"
import SupportCalculators from "../components/SupportCalculators"

const UTILITY_ACTIONS = [
  {
    icon: TrendingUp,
    title: "Tỷ giá ngoại tệ",
    body: "Xem bảng tỷ giá, biểu đồ và công cụ chuyển đổi trên website Vietbank. Tỷ giá được Vietbank ghi rõ là tham khảo.",
    href: OFFICIAL.personalFx,
    external: true,
    label: "Tra cứu tỷ giá",
  },
  {
    icon: Landmark,
    title: "Lãi suất",
    body: "Mở biểu lãi suất huy động khách hàng cá nhân đang được Vietbank công bố tại thời điểm tra cứu.",
    href: OFFICIAL.personalRates,
    external: true,
    label: "Xem lãi suất",
  },
  {
    icon: Calculator,
    title: "Ước tính khoản vay / tiết kiệm",
    body: "Dùng bảng tính cục bộ để lập kế hoạch sơ bộ, sau đó đối chiếu với công cụ tính toán Vietbank.",
    href: "/ho-tro#calculators",
    external: false,
    label: "Mở bảng tính",
  },
  {
    icon: MapPin,
    title: "Chi nhánh / PGD",
    body: "Tìm điểm giao dịch theo tỉnh/thành và phường/xã trên công cụ mạng lưới chính thức.",
    href: OFFICIAL.branches,
    external: true,
    label: "Tìm điểm giao dịch",
  },
  {
    icon: ReceiptText,
    title: "Tra cứu hóa đơn",
    body: "Tra cứu hóa đơn khách hàng cá nhân trên hệ thống Vietbank; khách hàng doanh nghiệp có kênh riêng bên dưới.",
    href: OFFICIAL.invoiceLookupPersonal,
    external: true,
    label: "Tra cứu hóa đơn",
  },
  {
    icon: SearchCheck,
    title: "Tra soát giao dịch",
    body: "Tạo hoặc tra cứu yêu cầu tra soát trên hệ thống Vietbank. Luồng chính thức có bước xác minh danh tính và OTP.",
    href: OFFICIAL.transactionTrace,
    external: true,
    label: "Mở tra soát",
  },
  {
    icon: FileText,
    title: "Quy định & biểu mẫu",
    body: "Đi tới trung tâm quy định, điều khoản và biểu mẫu do Vietbank quản lý.",
    href: OFFICIAL.documents,
    external: true,
    label: "Mở trung tâm tài liệu",
  },
]

export default function HoTro() {
  return (
    <>
      <PageHeader
        eyebrow="Hỗ trợ & công cụ"
        crumb="Hỗ trợ"
        title="Bắt đầu từ tác vụ bạn cần hoàn thành"
        lead="Tra cứu thông tin, ước tính khoản vay hoặc tiết kiệm, tìm điểm giao dịch, hóa đơn và tra soát — mọi tác vụ nhạy cảm đều được chuyển tới hệ thống Vietbank chính thức."
      />

      <Section id="utility-center">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="01"
            eyebrow="Tác vụ thường dùng"
            title="Một điểm vào cho các công cụ hỗ trợ chính"
            lead="Ưu tiên tác vụ trước tên phòng ban. Những nơi cần dữ liệu hiện hành hoặc xác minh danh tính sẽ mở trực tiếp kênh Vietbank."
          />
          <a href={OFFICIAL.personalCalculator} {...EXTERNAL_LINK_PROPS} className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy hover:underline">
            Công cụ Vietbank <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-7 grid border-y border-line bg-surface lg:grid-cols-2 lg:divide-x lg:divide-line">
          {[UTILITY_ACTIONS.slice(0, 4), UTILITY_ACTIONS.slice(4)].map((column, columnIndex) => (
            <div key={columnIndex} className="divide-y divide-line">
              {column.map(({ icon: Icon, title, body, href, external, label }) => {
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
                    <span>
                      <strong className="block text-[15px] group-hover:text-navy">{title}</strong>
                      <span className="mt-1 block text-[13.5px] leading-relaxed text-ink-soft">{body}</span>
                      <span className="mt-2 block text-[12.5px] font-semibold text-navy">{label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-navy" aria-hidden="true" />
                  </>
                )

                const className = "group grid min-h-[108px] grid-cols-[42px_1fr_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-navy-050"
                return external ? (
                  <a key={title} href={href} {...EXTERNAL_LINK_PROPS} className={className}>{content}</a>
                ) : (
                  <Link key={title} to={href} className={className}>{content}</Link>
                )
              })}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-l-2 border-yellow bg-amber-soft/60 px-4 py-3 text-[13px] leading-relaxed text-ink-soft">
          <p>Khách hàng doanh nghiệp cần tra cứu hóa đơn có thể dùng cổng riêng của Vietbank.</p>
          <a href={OFFICIAL.invoiceLookupBusiness} {...EXTERNAL_LINK_PROPS} className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy hover:underline">
            Hóa đơn doanh nghiệp <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Section>

      <SupportCalculators />

      <Section>
        <SectionHead n="03" eyebrow="Liên hệ trực tiếp" title="Kênh hỗ trợ được Vietbank công bố" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a href={HOTLINE_TEL} className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white"><Phone className="h-5 w-5" aria-hidden="true" /></span>
            <h2 className="mt-4 text-[16px] font-semibold">Hotline {HOTLINE}</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">Tổng đài chăm sóc khách hàng được Vietbank công bố trên website chính thức.</p>
            <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">Gọi ngay</span>
          </a>
          <a href="mailto:cskh@vietbank.com.vn" className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white"><Mail className="h-5 w-5" aria-hidden="true" /></span>
            <h2 className="mt-4 text-[16px] font-semibold">cskh@vietbank.com.vn</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">Email chăm sóc khách hàng được Vietbank công bố ở các trang hỗ trợ.</p>
            <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">Gửi email</span>
          </a>
          <a href={OFFICIAL.contact} {...EXTERNAL_LINK_PROPS} className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white"><WalletCards className="h-5 w-5" aria-hidden="true" /></span>
            <h2 className="mt-4 text-[16px] font-semibold">Biểu mẫu liên hệ Vietbank</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">Điền thông tin trực tiếp trên biểu mẫu do Vietbank vận hành.</p>
            <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">Mở biểu mẫu chính thức</span>
          </a>
        </div>
      </Section>

      <Section tone="soft" id="network">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHead
              n="04"
              eyebrow="Mạng lưới"
              title="Tìm chi nhánh / phòng giao dịch trên hệ thống thật"
              lead="Vietbank cung cấp công cụ lọc theo tỉnh/thành và phường/xã để tra cứu mạng lưới đang hoạt động."
            />
            <div className="mt-6"><ActionLink action={{ label: "Mở công cụ chi nhánh Vietbank", href: OFFICIAL.branches }} /></div>
          </div>
          <div className="rounded-xl border border-line bg-navy-050 p-6">
            <MapPin className="h-6 w-6 text-navy" aria-hidden="true" />
            <h3 className="mt-4 text-[16px] font-semibold">Thông tin trụ sở đang công bố</h3>
            <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-ink-soft">
              <p><span className="font-semibold text-ink">Trụ sở:</span> 47 Trần Hưng Đạo, Phường Phú Lợi, Thành phố Cần Thơ.</p>
              <p><span className="font-semibold text-ink">Trụ sở TP.HCM:</span> 62A Cách Mạng Tháng 8, Phường Xuân Hòa, TP.HCM.</p>
              <p><span className="font-semibold text-ink">SWIFT:</span> <span className="tnum">VNTTVNVX</span></p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="docs">
        <SectionHead
          n="05"
          eyebrow="Tài liệu"
          title="Biểu mẫu & biểu phí theo đúng nhóm khách hàng"
          lead="Chọn đúng nhóm tài liệu để mở thư viện Vietbank đang quản lý."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Biểu mẫu cá nhân", body: "Tài khoản thanh toán, tiết kiệm, tiền gửi có kỳ hạn và biểu mẫu khác.", href: OFFICIAL.personalForms, label: "Xem biểu mẫu cá nhân" },
            { title: "Biểu mẫu tổ chức", body: "Tài khoản thanh toán, tiền gửi có kỳ hạn và biểu mẫu cho khách hàng tổ chức.", href: OFFICIAL.businessForms, label: "Xem biểu mẫu tổ chức" },
            { title: "Biểu phí doanh nghiệp", body: "Dịch vụ tài khoản, ngân quỹ, ngân hàng điện tử và thanh toán quốc tế.", href: OFFICIAL.businessFees, label: "Xem biểu phí doanh nghiệp" },
            { title: "Biểu phí thẻ", body: "Biểu phí dành cho các sản phẩm thẻ Vietbank.", href: OFFICIAL.cardFees, label: "Xem biểu phí thẻ" },
          ].map((item) => (
            <article key={item.title} className="flex flex-col rounded-xl border border-line bg-surface p-6">
              <FileText className="h-5 w-5 text-navy" aria-hidden="true" />
              <h3 className="mt-4 text-[16px] font-semibold">{item.title}</h3>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-soft">{item.body}</p>
              <div className="mt-4"><ActionLink action={{ label: item.label, href: item.href }} variant="ghost" size="sm" /></div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead n="06" eyebrow="Câu hỏi thường gặp" title="Giải đáp theo hướng an toàn" />
        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
          {[
            {
              q: "Tôi cần tỷ giá hoặc lãi suất mới nhất ở đâu?",
              a: "Hãy mở trực tiếp trang Tỷ giá hoặc Lãi suất của Vietbank ở phần Tác vụ thường dùng. Các giá trị tài chính thay đổi theo thời điểm.",
            },
            {
              q: "Bảng tính trên trang này có phải kết quả Vietbank duyệt không?",
              a: "Không. Bảng tính chỉ chạy cục bộ trong trình duyệt để ước tính sơ bộ. Hãy đối chiếu với công cụ Vietbank và liên hệ ngân hàng để biết điều kiện áp dụng thực tế.",
            },
            {
              q: "Ứng dụng Vietbank Digital cũ còn hoạt động không?",
              a: "Theo thông báo Vietbank, ứng dụng Vietbank Digital cũ ngừng hoạt động từ 03/06/2026. Khách hàng cá nhân tiếp tục trên Digital Plus.",
            },
            {
              q: "Tôi nên làm gì khi nghi ngờ cuộc gọi hoặc đường link giả mạo?",
              a: `Không cung cấp mật khẩu hoặc OTP. Tự mở vietbank.com.vn hoặc gọi ${HOTLINE} để xác minh thay vì tiếp tục qua đường link được gửi đến.`,
            },
          ].map((item) => (
            <details key={item.q} className="group border-b border-line last:border-0">
              <summary className="flex cursor-pointer items-center justify-between gap-4 bg-surface px-5 py-4 text-[15px] font-semibold transition-colors hover:bg-navy-050 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-navy transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="bg-surface px-5 pb-5 text-[14.5px] leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="security">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              n="07"
              eyebrow="An toàn & chống giả mạo"
              title="Xác minh trước khi giao dịch"
              lead="Với tác vụ ngân hàng, hãy ưu tiên đường dẫn Vietbank công khai, hotline và việc tự nhập địa chỉ website thay vì tin vào liên kết được chuyển tiếp."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={HOTLINE_TEL} className={`${BTN.primary} ${BTN_SIZE.lg}`}><Phone className="h-4 w-4" aria-hidden="true" /> Gọi {HOTLINE}</a>
              <ActionLink action={{ label: "Xem thông báo Voice Brandname", href: OFFICIAL.voiceBrandname }} variant="secondary" />
            </div>
          </div>
          <div className="flex flex-col divide-y divide-line rounded-xl border border-line bg-surface">
            {[
              { title: "Tự mở website chính thức", body: "Ưu tiên tự nhập vietbank.com.vn và điều hướng từ đó tới dịch vụ cần dùng." },
              { title: "Không chia sẻ OTP / mật khẩu", body: "Không cung cấp thông tin xác thực cho người gọi, tin nhắn hoặc email tự xưng hỗ trợ ngân hàng." },
              { title: "Tra soát chỉ trên hệ thống Vietbank", body: `Luồng tra soát chính thức có bước xác minh. Khi nghi ngờ, dừng lại và gọi ${HOTLINE}.` },
            ].map(({ title, body }) => (
              <div key={title} className="flex items-start gap-4 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <h3 className="text-[15.5px] font-semibold">{title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABand
        title="Cần gửi yêu cầu cho Vietbank?"
        body="Trang này không thu thập thông tin cá nhân. Hãy dùng biểu mẫu do Vietbank vận hành hoặc gọi hotline chính thức."
        primary={{ label: "Mở biểu mẫu Vietbank", href: OFFICIAL.contact }}
        secondary={{ label: "Tìm điểm giao dịch", href: OFFICIAL.branches }}
      />
    </>
  )
}
