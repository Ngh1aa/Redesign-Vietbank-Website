import { ChevronDown, FileText, Landmark, Mail, MapPin, Phone, ShieldCheck, TrendingUp, WalletCards } from "lucide-react"
import { PageHeader, HOTLINE, HOTLINE_TEL } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"

const SUPPORT_TOOLS = [
  {
    icon: TrendingUp,
    title: "Tỷ giá ngoại tệ",
    body: "Tra cứu tỷ giá và công cụ chuyển đổi trên website Vietbank. Vietbank lưu ý tỷ giá hiển thị mang tính tham khảo.",
    action: { label: "Tra cứu tỷ giá", href: OFFICIAL.personalFx },
  },
  {
    icon: Landmark,
    title: "Lãi suất",
    body: "Mở biểu lãi suất huy động khách hàng cá nhân đang được Vietbank công bố tại thời điểm tra cứu.",
    action: { label: "Xem lãi suất", href: OFFICIAL.personalRates },
  },
  {
    icon: MapPin,
    title: "Chi nhánh / PGD",
    body: "Tìm theo tỉnh/thành và khu vực trên công cụ mạng lưới chính thức của Vietbank.",
    action: { label: "Tìm điểm giao dịch", href: OFFICIAL.branches },
  },
  {
    icon: FileText,
    title: "Quy định & biểu mẫu",
    body: "Tra cứu điều khoản, cảnh báo, biểu mẫu cá nhân và biểu mẫu khách hàng tổ chức.",
    action: { label: "Mở trung tâm tài liệu", href: OFFICIAL.documents },
  },
]

export default function HoTro() {
  return (
    <>
      <PageHeader
        eyebrow="Hỗ trợ khách hàng"
        crumb="Hỗ trợ"
        title="Đi thẳng tới công cụ Vietbank bạn cần"
        lead="V6 không mô phỏng tỷ giá, bản đồ hay gửi biểu mẫu thành công. Những tác vụ có hệ thống thật sẽ đưa bạn tới đúng kênh Vietbank chính thức."
      />

      <Section>
        <SectionHead n="01" eyebrow="Liên hệ trực tiếp" title="Kênh hỗ trợ được Vietbank công bố" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <a
            href={HOTLINE_TEL}
            className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
              <Phone className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-[16px] font-semibold">Hotline {HOTLINE}</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">Tổng đài chăm sóc khách hàng được Vietbank công bố trên website chính thức.</p>
            <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">Gọi ngay</span>
          </a>
          <a
            href="mailto:cskh@vietbank.com.vn"
            className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
              <Mail className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-[16px] font-semibold">cskh@vietbank.com.vn</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">Email chăm sóc khách hàng được Vietbank công bố ở các trang hỗ trợ.</p>
            <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">Gửi email</span>
          </a>
          <a
            href={OFFICIAL.contact}
            {...EXTERNAL_LINK_PROPS}
            className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
              <WalletCards className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-[16px] font-semibold">Biểu mẫu liên hệ Vietbank</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">Điền thông tin trên hệ thống Vietbank thay vì gửi dữ liệu vào concept site.</p>
            <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">Mở biểu mẫu chính thức</span>
          </a>
        </div>
      </Section>

      <Section tone="soft" id="rates">
        <SectionHead
          n="02"
          eyebrow="Công cụ ngân hàng"
          title="Dùng dữ liệu Vietbank đang công bố"
          lead="Các giá trị tài chính thay đổi theo thời điểm. Concept site chỉ làm nhiệm vụ định tuyến, không đóng vai trò nguồn dữ liệu giao dịch."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT_TOOLS.map(({ icon: Icon, title, body, action }) => (
            <article key={title} className="flex flex-col rounded-xl border border-line bg-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-soft">{body}</p>
              <div className="mt-4"><ActionLink action={action} variant="ghost" size="sm" /></div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="network">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHead
              n="03"
              eyebrow="Mạng lưới"
              title="Tìm chi nhánh / phòng giao dịch trên hệ thống thật"
              lead="Vietbank cung cấp công cụ lọc theo tỉnh/thành và phường/xã. V6 bỏ bản đồ demo vì một bản đồ không có dữ liệu thật tạo kỳ vọng sai."
            />
            <div className="mt-6"><ActionLink action={{ label: "Mở công cụ chi nhánh Vietbank", href: OFFICIAL.branches }} /></div>
          </div>
          <div className="rounded-xl border border-line bg-navy-050 p-6">
            <MapPin className="h-6 w-6 text-navy" />
            <h3 className="mt-4 text-[16px] font-semibold">Thông tin trụ sở đang công bố</h3>
            <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-ink-soft">
              <p><span className="font-semibold text-ink">Trụ sở:</span> 47 Trần Hưng Đạo, Phường Phú Lợi, Thành phố Cần Thơ.</p>
              <p><span className="font-semibold text-ink">Trụ sở TP.HCM:</span> 62A Cách Mạng Tháng 8, Phường Xuân Hòa, TP.HCM.</p>
              <p><span className="font-semibold text-ink">SWIFT:</span> <span className="tnum">VNTTVNVX</span></p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft" id="docs">
        <SectionHead
          n="04"
          eyebrow="Tài liệu"
          title="Biểu mẫu & biểu phí theo đúng nhóm khách hàng"
          lead="Không dùng nút tải xuống giả. Mỗi lựa chọn mở đúng thư viện Vietbank đang quản lý."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Biểu mẫu cá nhân", body: "Tài khoản thanh toán, tiết kiệm, tiền gửi có kỳ hạn và biểu mẫu khác.", href: OFFICIAL.personalForms },
            { title: "Biểu mẫu tổ chức", body: "Tài khoản thanh toán, tiền gửi có kỳ hạn và biểu mẫu cho khách hàng tổ chức.", href: OFFICIAL.businessForms },
            { title: "Biểu phí doanh nghiệp", body: "Dịch vụ tài khoản, ngân quỹ, ngân hàng điện tử và thanh toán quốc tế.", href: OFFICIAL.businessFees },
            { title: "Biểu phí thẻ", body: "Biểu phí dành cho các sản phẩm thẻ Vietbank.", href: OFFICIAL.cardFees },
          ].map((item) => (
            <article key={item.title} className="flex flex-col rounded-xl border border-line bg-surface p-6">
              <FileText className="h-5 w-5 text-navy" />
              <h3 className="mt-4 text-[16px] font-semibold">{item.title}</h3>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-soft">{item.body}</p>
              <div className="mt-4"><ActionLink action={{ label: "Mở trên Vietbank", href: item.href }} variant="ghost" size="sm" /></div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead n="05" eyebrow="Câu hỏi thường gặp" title="Giải đáp theo hướng an toàn" />
        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
          {[
            {
              q: "Tôi đang dùng Internet Banking cá nhân cũ thì sao?",
              a: "Vietbank thông báo dừng Internet Banking dành cho khách hàng cá nhân từ 18/05/2026 và chuyển khách hàng sang Vietbank Digital Plus.",
            },
            {
              q: "Ứng dụng Vietbank Digital cũ còn hoạt động không?",
              a: "Theo thông báo Vietbank, ứng dụng Vietbank Digital cũ ngừng hoạt động từ 03/06/2026. Khách hàng cá nhân tiếp tục trên Digital Plus.",
            },
            {
              q: "Tôi cần tỷ giá hoặc lãi suất mới nhất ở đâu?",
              a: "Hãy mở trực tiếp trang Tỷ giá hoặc Lãi suất của Vietbank ở phần Công cụ ngân hàng phía trên. Concept site không tự công bố số liệu tài chính.",
            },
            {
              q: "Tôi nên làm gì khi nghi ngờ cuộc gọi hoặc đường link giả mạo?",
              a: `Không cung cấp mật khẩu hoặc OTP. Tự mở vietbank.com.vn hoặc gọi ${HOTLINE} để xác minh thay vì tiếp tục qua đường link được gửi đến.`,
            },
          ].map((item) => (
            <details key={item.q} className="group border-b border-line last:border-0">
              <summary className="flex cursor-pointer items-center justify-between gap-4 bg-surface px-5 py-4 text-[15px] font-semibold transition-colors hover:bg-navy-050 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-navy transition-transform group-open:rotate-180" />
              </summary>
              <p className="bg-surface px-5 pb-5 text-[14.5px] leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="soft" id="security">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              n="06"
              eyebrow="An toàn & chống giả mạo"
              title="Xác minh trước khi giao dịch"
              lead="Với tác vụ ngân hàng, V6 luôn ưu tiên đường dẫn Vietbank công khai, hotline và việc tự nhập địa chỉ website thay vì khuyến khích tin vào link được chuyển tiếp."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={HOTLINE_TEL} className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-[15px] font-semibold text-white hover:bg-navy-700">
                <Phone className="h-4 w-4" /> Gọi {HOTLINE}
              </a>
              <ActionLink action={{ label: "Thông báo Voice Brandname", href: OFFICIAL.voiceBrandname }} variant="secondary" />
            </div>
          </div>
          <div className="flex flex-col divide-y divide-line rounded-xl border border-line bg-surface">
            {[
              { title: "Tự mở website chính thức", body: "Ưu tiên tự nhập vietbank.com.vn và điều hướng từ đó tới dịch vụ cần dùng." },
              { title: "Không chia sẻ OTP / mật khẩu", body: "Không cung cấp thông tin xác thực cho người gọi, tin nhắn hoặc email tự xưng hỗ trợ ngân hàng." },
              { title: "Khi nghi ngờ, dừng giao dịch", body: `Gọi lại hotline ${HOTLINE} hoặc tới điểm giao dịch Vietbank để xác minh.` },
            ].map(({ title, body }) => (
              <div key={title} className="flex items-start gap-4 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
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
        body="Concept site không thu thập thông tin cá nhân. Hãy dùng biểu mẫu liên hệ do Vietbank vận hành hoặc gọi hotline chính thức."
        primary={{ label: "Mở biểu mẫu Vietbank", href: OFFICIAL.contact }}
        secondary={{ label: "Tìm điểm giao dịch", href: OFFICIAL.branches }}
      />
    </>
  )
}
