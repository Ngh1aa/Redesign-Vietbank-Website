import { Check, CreditCard, Gift, HeartPulse, Plane, ShieldCheck, Smartphone, ExternalLink } from "lucide-react"
import { PageHeader } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"

const CARDS = [
  {
    icon: Gift,
    name: "Vietbank Visa My Style",
    tag: "Chi tiêu linh hoạt",
    desc: "Thẻ tín dụng Visa cho nhu cầu chi tiêu hằng ngày, với cơ chế hoàn phí thường niên theo doanh số được Vietbank công bố.",
    points: ["Miễn lãi tối đa 55 ngày", "Hạn mức công bố 10–500 triệu", "Ưu đãi tại hệ thống đối tác Visa"],
    href: OFFICIAL.cardMyStyle,
    featured: false,
  },
  {
    icon: Plane,
    name: "Vietbank Visa Luxury",
    tag: "Đặc quyền",
    desc: "Dòng thẻ tín dụng cao cấp với đặc quyền phòng chờ hạng thương gia theo điều kiện chi tiêu và hệ sinh thái ưu đãi Visa.",
    points: ["Hạn mức công bố tới 1 tỷ", "Đặc quyền phòng chờ", "Chăm sóc khách hàng 24/7"],
    href: OFFICIAL.cardVisaLuxury,
    featured: true,
  },
  {
    icon: CreditCard,
    name: "Mastercard Happy",
    tag: "Gia đình",
    desc: "Thẻ tín dụng Mastercard hướng đến chi tiêu gia đình, có chính sách thẻ phụ và hoàn phí thường niên theo doanh số.",
    points: ["Miễn lãi tối đa 55 ngày", "Hạn mức công bố 5–500 triệu", "Miễn phí phát hành & thường niên thẻ phụ"],
    href: OFFICIAL.cardHappy,
    featured: false,
  },
  {
    icon: HeartPulse,
    name: "Mastercard Lifecare",
    tag: "Sức khỏe",
    desc: "Thẻ tín dụng Mastercard có nhóm ưu đãi chăm sóc sức khỏe, nổi bật với ưu đãi tại Bệnh viện Quốc tế CIH.",
    points: ["Giảm tới 10% tại CIH", "Miễn lãi tối đa 55 ngày", "Hạn mức công bố 50 triệu–1 tỷ"],
    href: OFFICIAL.cardLifecare,
    featured: false,
  },
]

const COMPARE_ROWS = [
  { feature: "Nhu cầu nổi bật", myStyle: "Chi tiêu hằng ngày", luxury: "Đặc quyền cao cấp", happy: "Chi tiêu gia đình", lifecare: "Sức khỏe" },
  { feature: "Thời gian miễn lãi công bố", myStyle: "Tối đa 55 ngày", luxury: "Xem điều kiện Vietbank", happy: "Tối đa 55 ngày", lifecare: "Tối đa 55 ngày" },
  { feature: "Hạn mức công bố", myStyle: "10–500 triệu", luxury: "Tới 1 tỷ", happy: "5–500 triệu", lifecare: "50 triệu–1 tỷ" },
  { feature: "Điểm khác biệt", myStyle: "Hoàn phí theo doanh số", luxury: "Phòng chờ thương gia", happy: "Chính sách thẻ phụ", lifecare: "Ưu đãi CIH" },
  { feature: "Digital Plus", myStyle: "Nhận thông báo OTT", luxury: "Nhận thông báo OTT", happy: "Nhận thông báo OTT", lifecare: "Nhận thông báo OTT" },
]

export default function The() {
  return (
    <>
      <PageHeader
        eyebrow="Thẻ Vietbank"
        crumb="Thẻ"
        title="Chọn từ danh mục thẻ Vietbank đang công bố"
        lead="Không dùng tên sản phẩm minh hoạ. Trang này đưa các dòng thẻ thật của Vietbank vào một bố cục dễ so sánh và dẫn thẳng tới trang sản phẩm chính thức."
      />

      <Section id="cards">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="01"
            eyebrow="Thẻ tín dụng nổi bật"
            title="So sánh theo nhu cầu sử dụng"
            lead="Thông tin bên dưới được rút từ các trang sản phẩm Vietbank công khai; lãi suất, phí và điều kiện tại thời điểm đăng ký luôn theo công bố chính thức của Vietbank."
          />
          <ActionLink action={{ label: "Xem toàn bộ danh mục thẻ", href: OFFICIAL.cards }} variant="secondary" size="sm" />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CARDS.map(({ icon: Icon, name, tag, desc, points, href, featured }) => (
            <article
              key={name}
              className={`flex flex-col rounded-xl border p-6 ${
                featured ? "border-navy bg-navy text-white" : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-lg ${
                    featured ? "bg-white/15 text-yellow" : "bg-navy-050 text-navy"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={`rounded border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide ${
                    featured ? "border-white/25 text-white/80" : "border-line bg-soft text-ink-soft"
                  }`}
                >
                  {tag}
                </span>
              </div>
              <h2 className={`mt-5 font-display text-xl font-semibold ${featured ? "text-white" : "text-ink"}`}>{name}</h2>
              <p className={`mt-2 text-[14px] leading-relaxed ${featured ? "text-white/75" : "text-ink-soft"}`}>{desc}</p>
              <ul className={`mt-4 flex flex-1 flex-col gap-2 text-[13.5px] ${featured ? "text-white/90" : "text-ink"}`}>
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-yellow" : "text-navy"}`} /> {p}
                  </li>
                ))}
              </ul>
              <a
                href={href}
                {...EXTERNAL_LINK_PROPS}
                className={`mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold ${
                  featured ? "text-white hover:text-yellow" : "text-navy hover:underline"
                }`}
              >
                Xem sản phẩm Vietbank <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="02"
          eyebrow="Bảng định hướng"
          title="Đối chiếu nhanh trước khi mở trang chi tiết"
          lead="Bảng này chỉ giúp sàng lọc lựa chọn; quyết định cuối cùng nên dựa trên biểu phí, điều kiện phát hành và ưu đãi đang còn hiệu lực."
        />
        <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="w-full min-w-[920px] text-left">
            <thead>
              <tr className="border-b border-line bg-navy-050 text-[12px] uppercase tracking-wide text-ink-soft">
                <th className="px-5 py-3.5 font-semibold">Tiêu chí</th>
                <th className="px-5 py-3.5 font-semibold">Visa My Style</th>
                <th className="px-5 py-3.5 font-semibold">Visa Luxury</th>
                <th className="px-5 py-3.5 font-semibold">Mastercard Happy</th>
                <th className="px-5 py-3.5 font-semibold">Mastercard Lifecare</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {COMPARE_ROWS.map((row, i) => (
                <tr key={row.feature} className={`border-b border-line last:border-0 ${i % 2 ? "bg-soft/40" : ""}`}>
                  <td className="px-5 py-3.5 font-medium text-ink">{row.feature}</td>
                  <td className="px-5 py-3.5 text-ink-soft">{row.myStyle}</td>
                  <td className="px-5 py-3.5 font-semibold text-navy">{row.luxury}</td>
                  <td className="px-5 py-3.5 text-ink-soft">{row.happy}</td>
                  <td className="px-5 py-3.5 text-ink-soft">{row.lifecare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHead
          n="03"
          eyebrow="Trước khi đăng ký"
          title="Ba nơi nên kiểm tra"
          lead="Ngân hàng là sản phẩm có điều kiện thay đổi theo thời điểm; giao diện phải giúp người dùng xác minh thay vì che giấu phần fine print."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: CreditCard,
              title: "Danh mục sản phẩm",
              body: "Xác nhận đúng loại thẻ, hạn mức và tiện ích trên trang Vietbank.",
              action: { label: "Danh mục thẻ", href: OFFICIAL.cards },
            },
            {
              icon: ShieldCheck,
              title: "Biểu phí",
              body: "Kiểm tra phí thường niên, phí giao dịch và các điều kiện liên quan trước khi phát hành.",
              action: { label: "Biểu phí thẻ", href: OFFICIAL.cardFees },
            },
            {
              icon: Smartphone,
              title: "Ưu đãi đang áp dụng",
              body: "Ưu đãi là nội dung theo thời điểm; nên xem trực tiếp chương trình đang công bố của Vietbank.",
              action: { label: "Ưu đãi thẻ", href: OFFICIAL.cardPromotions },
            },
          ].map(({ icon: Icon, title, body, action }) => (
            <article key={title} className="flex flex-col rounded-xl border border-line bg-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-soft">{body}</p>
              <div className="mt-4">
                <ActionLink action={action} variant="ghost" size="sm" />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        title="Chọn thẻ xong? Tiếp tục trên kênh Vietbank"
        body="Mở danh mục thẻ chính thức để xem hồ sơ, điều kiện và chương trình đang áp dụng; hoặc tải biểu mẫu phát hành thẻ từ Vietbank."
        primary={{ label: "Xem danh mục thẻ", href: OFFICIAL.cards }}
        secondary={{ label: "Biểu mẫu thẻ", href: OFFICIAL.cardForms }}
      />
    </>
  )
}
