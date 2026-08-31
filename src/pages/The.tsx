import { Check, CreditCard, Gift, Plane, ShieldCheck } from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { Section, SectionHead, CTABand } from "../lib/sections"

const CARDS = [
  {
    icon: Gift,
    name: "Vietbank Cashback",
    tag: "Hoàn tiền",
    desc: "Hoàn tiền cho chi tiêu hằng ngày: ăn uống, siêu thị và hoá đơn.",
    points: ["Hoàn tiền tới 8%", "Miễn phí năm đầu", "Trả góp 0% tại đối tác"],
    featured: false,
  },
  {
    icon: Plane,
    name: "Vietbank Travel",
    tag: "Du lịch",
    desc: "Tích dặm và đặc quyền phòng chờ cho người thường xuyên di chuyển.",
    points: ["Tích dặm mọi chi tiêu", "Phòng chờ sân bay", "Bảo hiểm du lịch"],
    featured: true,
  },
  {
    icon: CreditCard,
    name: "Vietbank Classic",
    tag: "Cơ bản",
    desc: "Thẻ tín dụng khởi đầu với điều kiện đơn giản và phí thấp.",
    points: ["Điều kiện đơn giản", "Phí thường niên thấp", "Quản lý trên app"],
    featured: false,
  },
]

export default function The() {
  return (
    <>
      <PageHeader
        eyebrow="Thẻ Vietbank"
        crumb="Thẻ"
        title="Chọn thẻ theo cách bạn chi tiêu"
        lead="So sánh thẻ theo hoàn tiền, tích dặm hay chi phí — mọi ưu đãi và biểu phí đều công khai trước khi bạn mở thẻ."
      />

      <Section>
        <SectionHead n="01" eyebrow="So sánh thẻ" title="Ba lựa chọn cho ba phong cách chi tiêu" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, name, tag, desc, points, featured }) => (
            <div
              key={name}
              className={`flex flex-col rounded-xl border p-6 ${
                featured ? "border-navy bg-navy text-white" : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-lg ${
                    featured ? "bg-white/15 text-yellow" : "bg-navy-050 text-navy"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={`rounded border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    featured ? "border-white/25 text-white/80" : "border-line bg-soft text-ink-soft"
                  }`}
                >
                  {tag}
                </span>
              </div>
              <h3 className={`mt-5 font-display text-xl font-semibold ${featured ? "text-white" : ""}`}>{name}</h3>
              <p className={`mt-2 text-[14px] leading-relaxed ${featured ? "text-white/75" : "text-ink-soft"}`}>{desc}</p>
              <ul className={`mt-4 flex flex-1 flex-col gap-2 text-[14px] ${featured ? "text-white/90" : "text-ink"}`}>
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 shrink-0 ${featured ? "text-yellow" : "text-navy"}`} /> {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/ho-tro"
                className={`mt-6 ${featured ? BTN.onDark : BTN.primary} ${BTN_SIZE.sm}`}
              >
                Mở thẻ {name.replace("Vietbank ", "")}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12.5px] text-ink-soft">Tên thẻ và ưu đãi là nội dung minh hoạ cho mục đích thiết kế.</p>
      </Section>

      <Section tone="soft">
        <SectionHead n="02" eyebrow="Quyền lợi chung" title="An tâm với mọi thẻ Vietbank" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Bảo mật chủ động", body: "Khoá/mở thẻ tức thì và cảnh báo mọi giao dịch trên Digital Plus." },
            { icon: Gift, title: "Ưu đãi đối tác", body: "Giảm giá và trả góp tại mạng lưới đối tác trên toàn quốc." },
            { icon: CreditCard, title: "Quản lý trên app", body: "Theo dõi sao kê, dư nợ và thanh toán ngay trong ứng dụng." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-line bg-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        title="Sẵn sàng mở thẻ?"
        body="Đăng ký online và nhận tư vấn chọn thẻ phù hợp với nhu cầu chi tiêu của bạn."
        primary={{ label: "Đăng ký mở thẻ", to: "/ho-tro" }}
        secondary={{ label: "Xem biểu phí thẻ", to: "/ho-tro#docs" }}
      />
    </>
  )
}
