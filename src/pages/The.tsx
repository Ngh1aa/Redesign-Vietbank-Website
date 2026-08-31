import { CreditCard, FileText, ShieldCheck, Smartphone } from "lucide-react"
import CardFinder from "../components/CardFinder"
import { PageHeader } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { OFFICIAL } from "../lib/official"

export default function The() {
  return (
    <>
      <PageHeader
        eyebrow="Thẻ Vietbank"
        crumb="Thẻ"
        title="Tìm thẻ phù hợp với cách bạn chi tiêu"
        lead="Chọn nhu cầu, thu hẹp danh sách và so sánh 2–3 thẻ trên cùng tiêu chí. Điều kiện, biểu phí và ưu đãi cuối cùng luôn được kiểm tra trên kênh Vietbank chính thức."
      />

      <CardFinder />

      <Section>
        <SectionHead
          n="03"
          eyebrow="Trước khi đăng ký"
          title="Kiểm tra ba nguồn trước khi đưa ra quyết định"
          lead="Finder và bảng so sánh chỉ giúp thu hẹp lựa chọn. Sản phẩm tài chính có điều kiện thay đổi theo thời điểm, vì vậy hãy kiểm tra danh mục, biểu phí và ưu đãi hiện hành trước khi đăng ký."
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
          <p>Trang này không đánh giá khả năng được cấp thẻ, không hiển thị số thẻ, hạn mức được duyệt hoặc trạng thái hồ sơ. Các kết quả đó chỉ có trên hệ thống Vietbank sau khi khách hàng thực hiện quy trình chính thức.</p>
        </div>
      </Section>

      <CTABand
        title="Đã thu hẹp được lựa chọn? Tiếp tục trên kênh Vietbank"
        body="Mở danh mục thẻ chính thức để xem hồ sơ, điều kiện và chương trình đang áp dụng; hoặc tải biểu mẫu phát hành thẻ từ Vietbank."
        primary={{ label: "Xem danh mục thẻ", href: OFFICIAL.cards }}
        secondary={{ label: "Biểu mẫu thẻ", href: OFFICIAL.cardForms }}
      />
    </>
  )
}