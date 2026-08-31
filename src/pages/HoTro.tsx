import { useState } from "react"
import { Phone, ShieldCheck, MapPin, FileText, Mail, MessageCircle, Send } from "lucide-react"
import { PageHeader, BTN, BTN_SIZE, HOTLINE, HOTLINE_TEL } from "../lib/ui"
import { Section, SectionHead } from "../lib/sections"
import RatesPanel from "../components/RatesPanel"

export default function HoTro() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHeader
        eyebrow="Hỗ trợ khách hàng"
        crumb="Hỗ trợ"
        title="Chúng tôi luôn sẵn sàng hỗ trợ bạn"
        lead="Tra cứu tỷ giá và lãi suất, tìm điểm giao dịch, tải biểu phí — hoặc liên hệ trực tiếp qua hotline và biểu mẫu bên dưới."
      />

      {/* Contact channels */}
      <Section>
        <SectionHead n="01" eyebrow="Kênh liên hệ" title="Chọn cách liên hệ phù hợp" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Phone, title: `Hotline ${HOTLINE}`, body: "Hỗ trợ 24/7, hiển thị Voice Brandname — số hotline duy nhất.", href: HOTLINE_TEL, cta: "Gọi ngay" },
            { icon: Mail, title: "Email hỗ trợ", body: "Gửi yêu cầu chi tiết, phản hồi trong giờ làm việc.", href: "mailto:cskh@vietbank.com.vn", cta: "Gửi email" },
            { icon: MessageCircle, title: "Zalo OA chính thức", body: "Nhắn tin với kênh chăm sóc khách hàng chính thức.", href: "#", cta: "Mở Zalo OA" },
          ].map(({ icon: Icon, title, body, href, cta }) => (
            <a key={title} href={href} className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{body}</p>
              <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">{cta}</span>
            </a>
          ))}
        </div>
      </Section>

      {/* Rates */}
      <Section tone="soft" id="rates">
        <SectionHead n="02" eyebrow="Công cụ ngân hàng" title="Tỷ giá & Lãi suất" />
        <div className="mt-6">
          <RatesPanel />
        </div>
      </Section>

      {/* Network */}
      <Section id="network">
        <SectionHead n="03" eyebrow="Mạng lưới" title="ATM & Điểm giao dịch" lead="Tìm chi nhánh, phòng giao dịch và ATM Vietbank gần bạn." />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-center rounded-xl border border-line bg-surface p-6">
            <label htmlFor="branch-search" className="text-[13px] font-semibold text-ink">
              Nhập tỉnh/thành hoặc quận
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="branch-search"
                type="text"
                placeholder="Ví dụ: Quận 1, TP.HCM"
                className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-[14.5px] outline-none placeholder:text-ink-soft focus:border-navy"
              />
              <button className={`${BTN.primary} ${BTN_SIZE.sm} shrink-0`}>Tìm</button>
            </div>
            <p className="mt-3 flex items-center gap-2 text-[13px] text-ink-soft">
              <MapPin className="h-4 w-4 text-navy" /> Kết quả bản đồ là minh hoạ cho mục đích thiết kế.
            </p>
          </div>
          <div className="grid min-h-[220px] place-items-center rounded-xl border border-line bg-navy-050 text-ink-soft">
            <span className="flex items-center gap-2 text-[14px]">
              <MapPin className="h-5 w-5 text-navy" /> Bản đồ điểm giao dịch (demo)
            </span>
          </div>
        </div>
      </Section>

      {/* Docs */}
      <Section tone="soft" id="docs">
        <SectionHead n="04" eyebrow="Tài liệu" title="Biểu phí & Biểu mẫu" />
        <div className="mt-6 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {["Biểu phí dịch vụ khách hàng cá nhân", "Biểu phí dịch vụ khách hàng doanh nghiệp", "Biểu mẫu mở tài khoản & đăng ký dịch vụ", "Điều khoản và điều kiện sử dụng dịch vụ"].map((d) => (
            <a key={d} href="#" className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-navy-050">
              <FileText className="h-5 w-5 shrink-0 text-navy" />
              <span className="text-[15px] font-medium group-hover:text-navy">{d}</span>
              <span className="ml-auto text-[13px] font-semibold text-navy group-hover:underline">Tải xuống</span>
            </a>
          ))}
        </div>
      </Section>

      {/* Security */}
      <Section id="security">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              n="05"
              eyebrow="An toàn & phòng chống lừa đảo"
              title="Nhận diện kênh chính thức của Vietbank"
              lead="Vietbank không bao giờ yêu cầu mật khẩu, OTP hay thông tin đăng nhập qua điện thoại, tin nhắn hay email."
            />
            <a href={HOTLINE_TEL} className={`mt-6 ${BTN.primary} ${BTN_SIZE.lg}`}>
              <Phone className="h-4 w-4" /> Gọi hotline {HOTLINE}
            </a>
          </div>
          <div className="flex flex-col divide-y divide-line rounded-xl border border-line bg-surface">
            {[
              { title: "Một hotline duy nhất", body: `Chỉ liên hệ Vietbank qua ${HOTLINE}. Cuộc gọi chính thức hiển thị Voice Brandname.` },
              { title: "Kênh chính thức", body: "vietbank.com.vn · Digital Plus / DigiBiz · Zalo OA và email chính thức." },
              { title: "Không chia sẻ OTP", body: "Tuyệt đối không cung cấp mật khẩu và OTP cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng." },
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

      {/* Contact form */}
      <Section tone="soft" id="contact">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead n="06" eyebrow="Gửi yêu cầu" title="Để lại thông tin, chúng tôi liên hệ lại" lead="Điền biểu mẫu bên cạnh — chuyên viên Vietbank sẽ phản hồi trong giờ làm việc." />
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Họ và tên" placeholder="Nguyễn Văn A" required />
              <Field id="phone" label="Số điện thoại" placeholder="09xx xxx xxx" type="tel" required />
            </div>
            <div className="mt-4">
              <Field id="email" label="Email" placeholder="ban@email.com" type="email" />
            </div>
            <div className="mt-4">
              <label htmlFor="topic" className="text-[13px] font-semibold text-ink">Nội dung cần hỗ trợ</label>
              <select id="topic" className="mt-1.5 w-full rounded-md border border-line bg-paper px-4 py-2.5 text-[14.5px] outline-none focus:border-navy">
                <option>Mở tài khoản / Digital Plus</option>
                <option>Thẻ tín dụng</option>
                <option>Vay vốn</option>
                <option>Doanh nghiệp / DigiBiz</option>
                <option>An toàn & bảo mật</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="msg" className="text-[13px] font-semibold text-ink">Lời nhắn</label>
              <textarea id="msg" rows={4} placeholder="Mô tả ngắn gọn nhu cầu của bạn" className="mt-1.5 w-full resize-none rounded-md border border-line bg-paper px-4 py-2.5 text-[14.5px] outline-none placeholder:text-ink-soft focus:border-navy" />
            </div>
            {sent ? (
              <p className="mt-5 flex items-center gap-2 rounded-md border border-navy bg-navy-050 px-4 py-3 text-[14px] font-medium text-navy">
                <ShieldCheck className="h-4 w-4" /> Đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm nhất. (Demo — chưa gửi dữ liệu thật.)
              </p>
            ) : (
              <button type="submit" className={`mt-5 ${BTN.primary} ${BTN_SIZE.lg}`}>
                <Send className="h-4 w-4" /> Gửi yêu cầu
              </button>
            )}
            <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
              Bằng việc gửi, bạn đồng ý để Vietbank liên hệ tư vấn. Chúng tôi không yêu cầu OTP hay mật khẩu qua biểu mẫu này.
            </p>
          </form>
        </div>
      </Section>
    </>
  )
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[13px] font-semibold text-ink">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-line bg-paper px-4 py-2.5 text-[14.5px] outline-none placeholder:text-ink-soft focus:border-navy"
      />
    </div>
  )
}
