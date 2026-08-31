import { Check, CreditCard, ExternalLink, FileText, ShieldCheck, Smartphone } from "lucide-react"
import { PageHeader } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"

const CARDS = [
  {
    index: "01",
    name: "Vietbank Visa My Style",
    tag: "Chi tiêu linh hoạt",
    desc: "Thẻ tín dụng Visa cho nhu cầu chi tiêu hằng ngày, với cơ chế hoàn phí thường niên theo doanh số được Vietbank công bố.",
    points: ["Miễn lãi tối đa 55 ngày", "Hạn mức công bố 10–500 triệu", "Ưu đãi tại hệ thống đối tác Visa"],
    href: OFFICIAL.cardMyStyle,
    image: OFFICIAL_MEDIA.cardMyStyle,
    imageAlt: "Thẻ tín dụng Vietbank Visa My Style",
  },
  {
    index: "02",
    name: "Vietbank Visa Luxury Platinum",
    tag: "Đặc quyền",
    desc: "Dòng thẻ tín dụng cao cấp với đặc quyền phòng chờ hạng thương gia theo điều kiện chi tiêu và hệ sinh thái ưu đãi Visa.",
    points: ["Hạn mức công bố 50 triệu–1 tỷ", "Đặc quyền phòng chờ theo điều kiện", "Miễn lãi tối đa 55 ngày"],
    href: OFFICIAL.cardVisaLuxury,
    image: OFFICIAL_MEDIA.cardVisaLuxury,
    imageAlt: "Thẻ tín dụng Vietbank Visa Luxury Platinum",
  },
  {
    index: "03",
    name: "Mastercard Credit Happy",
    tag: "Gia đình",
    desc: "Thẻ tín dụng Mastercard hướng đến chi tiêu gia đình, có chính sách thẻ phụ và hoàn phí thường niên theo doanh số.",
    points: ["Miễn lãi tối đa 55 ngày", "Hạn mức công bố 5–500 triệu", "Miễn phí phát hành & thường niên thẻ phụ"],
    href: OFFICIAL.cardHappy,
    image: OFFICIAL_MEDIA.cardHappy,
    imageAlt: "Thẻ Mastercard Credit Happy Vietbank",
  },
  {
    index: "04",
    name: "Mastercard Credit Lifecare",
    tag: "Sức khỏe",
    desc: "Thẻ tín dụng Mastercard có nhóm ưu đãi chăm sóc sức khỏe, nổi bật với ưu đãi tại Bệnh viện Quốc tế CIH.",
    points: ["Giảm tới 10% tại CIH", "Miễn lãi tối đa 55 ngày", "Hạn mức công bố 50 triệu–1 tỷ"],
    href: OFFICIAL.cardLifecare,
    image: OFFICIAL_MEDIA.cardLifecare,
    imageAlt: "Thẻ Mastercard Credit Lifecare Vietbank",
  },
]

const COMPARE_ROWS = [
  { feature: "Nhu cầu nổi bật", myStyle: "Chi tiêu hằng ngày", luxury: "Đặc quyền cao cấp", happy: "Chi tiêu gia đình", lifecare: "Sức khỏe" },
  { feature: "Thời gian miễn lãi công bố", myStyle: "Tối đa 55 ngày", luxury: "Tối đa 55 ngày", happy: "Tối đa 55 ngày", lifecare: "Tối đa 55 ngày" },
  { feature: "Hạn mức công bố", myStyle: "10–500 triệu", luxury: "50 triệu–1 tỷ", happy: "5–500 triệu", lifecare: "50 triệu–1 tỷ" },
  { feature: "Điểm khác biệt", myStyle: "Hoàn phí theo doanh số", luxury: "Phòng chờ thương gia", happy: "Chính sách thẻ phụ", lifecare: "Ưu đãi CIH" },
  { feature: "Nguồn quyết định cuối", myStyle: "Trang sản phẩm Vietbank", luxury: "Trang sản phẩm Vietbank", happy: "Trang sản phẩm Vietbank", lifecare: "Trang sản phẩm Vietbank" },
]

export default function The() {
  return (
    <>
      <PageHeader
        eyebrow="Thẻ Vietbank"
        crumb="Thẻ"
        title="Nhìn đúng sản phẩm trước khi so sánh điều kiện"
        lead="V7 dùng hình ảnh sản phẩm thật đang được Vietbank công bố, sau đó mới đặt các thuộc tính cần so sánh bên cạnh. Không tạo thẻ giả, số thẻ giả hay mô phỏng giao dịch."
      />

      <Section id="cards">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="01"
            eyebrow="Danh mục đã xác minh"
            title="Bốn dòng thẻ tín dụng nổi bật, trình bày như sản phẩm thật"
            lead="Ảnh, tên sản phẩm và các thuộc tính định hướng được đối chiếu với trang Vietbank công khai. Phí, lãi suất, điều kiện phát hành và ưu đãi tại thời điểm đăng ký luôn theo nguồn Vietbank hiện hành."
          />
          <ActionLink action={{ label: "Xem toàn bộ danh mục thẻ", href: OFFICIAL.cards }} variant="secondary" size="sm" />
        </div>

        <div className="mt-8 overflow-hidden border-y border-line bg-surface">
          {CARDS.map(({ index, name, tag, desc, points, href, image, imageAlt }, rowIndex) => (
            <article
              key={name}
              className={`grid gap-6 py-7 md:grid-cols-[260px_1fr] md:items-center md:gap-9 ${
                rowIndex ? "border-t border-line" : ""
              }`}
            >
              <div className="relative flex min-h-[170px] items-center justify-center bg-soft px-5 py-6">
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[175px] w-full max-w-[250px] object-contain"
                />
                <span className="absolute left-3 top-3 text-[11px] font-semibold tracking-[0.12em] text-ink-soft tnum" aria-hidden="true">
                  {index}
                </span>
              </div>

              <div className="px-1 pb-1 md:pr-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border-l-2 border-navy pl-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-ink-soft">
                    <span className="flex h-0.5 w-6 overflow-hidden" aria-hidden="true">
                      <span className="w-1/2 bg-red" />
                      <span className="w-1/2 bg-yellow" />
                    </span>
                    Ảnh sản phẩm từ Vietbank
                  </span>
                </div>

                <h2 className="mt-3 font-display text-[clamp(1.35rem,2.5vw,1.8rem)] font-semibold tracking-tight text-ink">{name}</h2>
                <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">{desc}</p>

                <ul className="mt-4 grid gap-x-6 gap-y-2 text-[13.5px] text-ink sm:grid-cols-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  {...EXTERNAL_LINK_PROPS}
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy hover:underline"
                >
                  Xem điều kiện trên Vietbank <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="02"
          eyebrow="Bảng định hướng"
          title="So cùng tiêu chí trước khi mở điều kiện chi tiết"
          lead="Bảng này giúp sàng lọc lựa chọn chứ không thay thế biểu phí, điều kiện phát hành hay chương trình ưu đãi đang có hiệu lực."
        />
        <div className="mt-6 overflow-x-auto border border-line bg-surface">
          <table className="w-full min-w-[920px] text-left">
            <caption className="sr-only">So sánh định hướng bốn dòng thẻ tín dụng Vietbank theo nhu cầu, thời gian miễn lãi, hạn mức và điểm khác biệt.</caption>
            <thead>
              <tr className="border-b border-line bg-navy-050 text-[12px] uppercase tracking-wide text-ink-soft">
                <th scope="col" className="px-5 py-3.5 font-semibold">Tiêu chí</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Visa My Style</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Visa Luxury</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Mastercard Happy</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Mastercard Lifecare</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {COMPARE_ROWS.map((row, i) => (
                <tr key={row.feature} className={`border-b border-line last:border-0 ${i % 2 ? "bg-soft/40" : ""}`}>
                  <th scope="row" className="px-5 py-3.5 font-medium text-ink">{row.feature}</th>
                  <td className="px-5 py-3.5 text-ink-soft">{row.myStyle}</td>
                  <td className="px-5 py-3.5 text-ink-soft">{row.luxury}</td>
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
          title="Kiểm tra ba nguồn trước khi đưa ra quyết định"
          lead="Sản phẩm tài chính có điều kiện thay đổi theo thời điểm. V7 đưa phần xác minh vào ngay journey thay vì để người dùng tự tìm fine print sau CTA."
        />

        <div className="mt-7 divide-y divide-line border-y border-line">
          {[
            {
              index: "01",
              icon: CreditCard,
              title: "Danh mục sản phẩm",
              body: "Xác nhận đúng loại thẻ, hạn mức và tiện ích trên trang Vietbank.",
              action: { label: "Danh mục thẻ", href: OFFICIAL.cards },
            },
            {
              index: "02",
              icon: ShieldCheck,
              title: "Biểu phí",
              body: "Kiểm tra phí thường niên, phí giao dịch và các điều kiện liên quan trước khi phát hành.",
              action: { label: "Biểu phí thẻ", href: OFFICIAL.cardFees },
            },
            {
              index: "03",
              icon: Smartphone,
              title: "Ưu đãi đang áp dụng",
              body: "Ưu đãi thay đổi theo thời điểm; xem trực tiếp chương trình Vietbank đang công bố.",
              action: { label: "Ưu đãi thẻ", href: OFFICIAL.cardPromotions },
            },
          ].map(({ index, icon: Icon, title, body, action }) => (
            <div key={title} className="grid gap-4 py-5 sm:grid-cols-[42px_1fr_auto] sm:items-center">
              <div className="flex items-center gap-2 sm:block">
                <span className="text-xs font-semibold text-amber tnum">{index}</span>
                <Icon className="mt-2 hidden h-5 w-5 text-navy sm:block" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold">{title}</h3>
                <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-ink-soft">{body}</p>
              </div>
              <ActionLink action={action} variant="ghost" size="sm" className="justify-self-start sm:justify-self-end" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 border-l-2 border-navy bg-navy-050 px-4 py-3 text-[13px] leading-relaxed text-ink-soft">
          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
          <p>V7 không hiển thị số thẻ, hạn mức được “duyệt”, trạng thái hồ sơ hay thông báo mở thẻ thành công vì repository này không kết nối hệ thống phát hành thẻ.</p>
        </div>
      </Section>

      <CTABand
        title="Đã chọn được hướng phù hợp? Tiếp tục trên kênh Vietbank"
        body="Mở danh mục thẻ chính thức để xem hồ sơ, điều kiện và chương trình đang áp dụng; hoặc tải biểu mẫu phát hành thẻ từ Vietbank."
        primary={{ label: "Xem danh mục thẻ", href: OFFICIAL.cards }}
        secondary={{ label: "Biểu mẫu thẻ", href: OFFICIAL.cardForms }}
      />
    </>
  )
}
