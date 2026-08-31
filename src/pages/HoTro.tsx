import { useState } from "react"
import { Phone, ShieldCheck, MapPin, FileText, Mail, MessageCircle, Send, ChevronDown } from "lucide-react"
import { PageHeader, BTN, BTN_SIZE, HOTLINE, HOTLINE_TEL, FormField } from "../lib/ui"
import { Section, SectionHead } from "../lib/sections"
import RatesPanel from "../components/RatesPanel"

type Errors = Partial<Record<"name" | "phone" | "email" | "msg", string>>

export default function HoTro() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", msg: "" })
  const [errors, setErrors] = useState<Errors>({})

  function validate(): Errors {
    const e: Errors = {}
    if (!form.name.trim()) e.name = "Vui lòng nhập họ và tên."
    if (!form.phone.trim()) e.phone = "Vui lòng nhập số điện thoại."
    else if (!/^0\d{9,10}$/.test(form.phone.replace(/[\s.-]/g, "")))
      e.phone = "Số điện thoại không hợp lệ (VD: 0912345678)."
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email không đúng định dạng."
    if (!form.msg.trim() || form.msg.trim().length < 10)
      e.msg = "Vui lòng mô tả nhu cầu (tối thiểu 10 ký tự)."
    return e
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const eMap = validate()
    setErrors(eMap)
    if (Object.keys(eMap).length === 0) setSent(true)
  }

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

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
            {
              icon: Phone,
              title: `Hotline ${HOTLINE}`,
              body: "Hỗ trợ 24/7, hiển thị Voice Brandname — số hotline duy nhất.",
              href: HOTLINE_TEL,
              cta: "Gọi ngay",
            },
            {
              icon: Mail,
              title: "Email hỗ trợ",
              body: "Gửi yêu cầu chi tiết, phản hồi trong giờ làm việc.",
              href: "mailto:cskh@vietbank.com.vn",
              cta: "Gửi email",
            },
            {
              icon: MessageCircle,
              title: "Zalo OA chính thức",
              body: "Nhắn tin với kênh chăm sóc khách hàng chính thức.",
              href: "#",
              cta: "Mở Zalo OA",
            },
          ].map(({ icon: Icon, title, body, href, cta }) => (
            <a
              key={title}
              href={href}
              className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-navy hover:bg-navy-050"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{body}</p>
              <span className="mt-3 inline-block text-[14px] font-semibold text-navy group-hover:underline">
                {cta}
              </span>
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
        <SectionHead
          n="03"
          eyebrow="Mạng lưới"
          title="ATM & Điểm giao dịch"
          lead="Tìm chi nhánh, phòng giao dịch và ATM Vietbank gần bạn."
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-center rounded-xl border border-line bg-surface p-6">
            <label htmlFor="branch-search" className="text-[13px] font-semibold text-ink">
              Nhập tỉnh/thành hoặc quận
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="branch-search"
                type="search"
                placeholder="Ví dụ: Quận 1, TP.HCM"
                className="input-base"
              />
              <button type="button" className={`${BTN.primary} ${BTN_SIZE.sm} shrink-0`}>
                Tìm
              </button>
            </div>
            <p className="mt-3 flex items-center gap-2 text-[13px] text-ink-soft">
              <MapPin className="h-4 w-4 text-navy" /> Kết quả bản đồ là minh hoạ cho mục đích thiết kế (STATIC).
            </p>
          </div>
          <div
            className="grid min-h-[220px] place-items-center rounded-xl border border-line bg-navy-050 text-ink-soft"
            aria-label="Bản đồ điểm giao dịch — minh hoạ"
            role="img"
          >
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
          {[
            "Biểu phí dịch vụ khách hàng cá nhân",
            "Biểu phí dịch vụ khách hàng doanh nghiệp",
            "Biểu mẫu mở tài khoản & đăng ký dịch vụ",
            "Điều khoản và điều kiện sử dụng dịch vụ",
          ].map((d) => (
            <a
              key={d}
              href="#"
              className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-navy-050"
            >
              <FileText className="h-5 w-5 shrink-0 text-navy" />
              <span className="text-[15px] font-medium group-hover:text-navy">{d}</span>
              <span className="ml-auto text-[13px] font-semibold text-navy group-hover:underline">
                Tải xuống
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ inline — support-focused, distinct from Home onboarding FAQ */}
      <Section>
        <SectionHead n="05" eyebrow="Câu hỏi thường gặp" title="Giải đáp nhanh" />
        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
          {[
            {
              q: "Tôi quên mật khẩu Digital Plus thì phải làm sao?",
              a: "Trên màn hình đăng nhập, chọn 'Quên mật khẩu' và làm theo hướng dẫn xác thực OTP qua số điện thoại chính chủ đã đăng ký. Nếu không nhận được OTP, gọi hotline 24/7 để được hỗ trợ.",
            },
            {
              q: "Thẻ bị mất hoặc nghi bị lộ thông tin — tôi cần làm gì ngay?",
              a: "Mở Digital Plus → chọn thẻ → 'Khoá thẻ tạm thời'. Sau đó gọi hotline 1800 1122 (hiển thị Voice Brandname) để được cấp lại thẻ. Tuyệt đối không chia sẻ OTP hay mật khẩu cho bất kỳ ai.",
            },
            {
              q: "Biểu phí và hợp đồng dịch vụ xem ở đâu?",
              a: "Biểu phí dịch vụ và mẫu đơn được đăng tải đầy đủ trong mục 'Biểu phí & Biểu mẫu' phía trên. Mọi thay đổi về biểu phí đều được thông báo trước tối thiểu 30 ngày theo quy định.",
            },
            {
              q: "Tôi có thể gửi khiếu nại bằng cách nào?",
              a: "Bạn có thể gửi khiếu nại qua biểu mẫu 'Gửi yêu cầu' bên dưới, email cskh@vietbank.com.vn hoặc gọi hotline. Vietbank phản hồi khiếu nại bằng văn bản trong vòng 24 giờ làm việc.",
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

      {/* Security */}
      <Section tone="soft" id="security">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              n="06"
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
              {
                title: "Một hotline duy nhất",
                body: `Chỉ liên hệ Vietbank qua ${HOTLINE}. Cuộc gọi chính thức hiển thị Voice Brandname.`,
              },
              {
                title: "Kênh chính thức",
                body: "vietbank.com.vn · Digital Plus / DigiBiz · Zalo OA và email chính thức.",
              },
              {
                title: "Không chia sẻ OTP",
                body: "Tuyệt đối không cung cấp mật khẩu và OTP cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng.",
              },
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
      <Section id="contact">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            n="07"
            eyebrow="Gửi yêu cầu"
            title="Để lại thông tin, chúng tôi liên hệ lại"
            lead="Điền biểu mẫu bên cạnh — chuyên viên Vietbank sẽ phản hồi trong giờ làm việc."
          />
          {sent ? (
            <div
              role="status"
              className="flex items-start gap-3 rounded-xl border border-navy bg-navy-050 p-6"
            >
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
              <div>
                <h3 className="text-[16px] font-semibold text-navy">Đã gửi yêu cầu thành công</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                  Chuyên viên Vietbank sẽ liên hệ lại qua số điện thoại{" "}
                  <span className="font-semibold tnum">{form.phone}</span> trong giờ làm việc.
                </p>
                <p className="mt-2 text-[12.5px] text-ink-soft">
                  (Demo — dữ liệu chưa được gửi tới hệ thống thật, chỉ mô phỏng trải nghiệm.)
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="rounded-xl border border-line bg-surface p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  id="name"
                  label="Họ và tên"
                  placeholder="Nguyễn Văn A"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  error={errors.name}
                />
                <FormField
                  id="phone"
                  label="Số điện thoại"
                  placeholder="0912 345 678"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  error={errors.phone}
                />
              </div>
              <div className="mt-4">
                <FormField
                  id="email"
                  label="Email"
                  placeholder="ban@email.com"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  help="Không bắt buộc — chỉ dùng nếu bạn muốn nhận phản hồi qua email."
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  error={errors.email}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="topic" className="text-[13px] font-semibold text-ink">
                  Nội dung cần hỗ trợ
                </label>
                <select
                  id="topic"
                  defaultValue=""
                  className="input-base mt-1.5"
                  aria-label="Chọn nội dung cần hỗ trợ"
                >
                  <option value="" disabled>
                    Chọn nội dung
                  </option>
                  <option>Mở tài khoản / Digital Plus</option>
                  <option>Thẻ tín dụng</option>
                  <option>Vay vốn</option>
                  <option>Doanh nghiệp / DigiBiz</option>
                  <option>An toàn & bảo mật</option>
                </select>
              </div>
              <div className="mt-4">
                <FormField
                  id="msg"
                  label="Lời nhắn"
                  placeholder="Mô tả ngắn gọn nhu cầu của bạn"
                  multiline
                  rows={4}
                  required
                  value={form.msg}
                  onChange={(e) => update("msg", e.target.value)}
                  error={errors.msg}
                />
              </div>
              <button type="submit" className={`mt-5 ${BTN.primary} ${BTN_SIZE.lg}`}>
                <Send className="h-4 w-4" /> Gửi yêu cầu
              </button>
              <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">
                Bằng việc gửi, bạn đồng ý để Vietbank liên hệ tư vấn. Chúng tôi không yêu cầu OTP hay mật khẩu qua biểu mẫu này.
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}