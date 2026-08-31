import { ExternalLink, FlaskConical, ShieldCheck } from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { Section, SectionHead } from "../lib/sections"

const TASKS = [
  {
    id: "T1",
    title: "Chọn và so sánh thẻ",
    scenario: "Bạn muốn một thẻ Vietbank chủ yếu cho chi tiêu hằng ngày và quan tâm tới khả năng giảm/hoàn phí thường niên khi đáp ứng điều kiện sử dụng. Hãy tìm một lựa chọn phù hợp và so với một thẻ khác trước khi quyết định xem nguồn chính thức.",
    success: "Tìm được ít nhất một thẻ phù hợp, đưa 2 thẻ vào so sánh, đọc tiêu chí và nhận biết điểm vào trang sản phẩm/biểu phí Vietbank.",
  },
  {
    id: "T2",
    title: "Tìm thẻ có lợi ích sức khỏe",
    scenario: "Gia đình bạn dự kiến có chi tiêu chăm sóc sức khỏe thường xuyên và muốn biết Vietbank có thẻ nào có lợi ích liên quan. Hãy tìm sản phẩm phù hợp và xác định nơi kiểm tra điều kiện cuối cùng.",
    success: "Tìm Mastercard Lifecare và nhận biết trang sản phẩm Vietbank là nguồn quyết định cuối.",
  },
  {
    id: "T3",
    title: "Ước tính tiền gửi",
    scenario: "Bạn cân nhắc gửi 200 triệu đồng trong 6 tháng. Bạn muốn ước tính tiền lãi nhưng cũng muốn biết lãi suất hiện hành phải được kiểm tra ở đâu trước khi quyết định.",
    success: "Tìm Utility Center, hiểu lãi suất phải lấy từ nguồn Vietbank, dùng bảng tính minh họa và nhận biết link lãi suất/công cụ Vietbank.",
  },
  {
    id: "T4",
    title: "Chuyển từ Vietbank Digital cũ",
    scenario: "Bạn từng dùng ứng dụng Vietbank Digital cũ và cần biết hiện nay phải dùng kênh nào để tiếp tục ngân hàng số cá nhân.",
    success: "Chọn Digital Plus, hiểu mốc dừng 03/06/2026 và nhận biết kênh/bài thông báo chính thức.",
  },
  {
    id: "T5",
    title: "Nền tảng số cho doanh nghiệp",
    scenario: "Doanh nghiệp của bạn cần một kênh ngân hàng số nơi nhiều nhân sự có thể chuẩn bị và phê duyệt giao dịch theo quyền khác nhau.",
    success: "Chọn DigiBiz thay vì Digital Plus và nhận biết phê duyệt đa cấp/phân quyền là capability liên quan.",
  },
  {
    id: "T6",
    title: "Khôi phục an toàn khi gặp link đáng ngờ",
    scenario: "Bạn nhận được một đường link tự xưng Vietbank và được yêu cầu tiếp tục một tác vụ ngân hàng. Bạn muốn xác minh cách an toàn để tiếp tục mà không dùng link đó.",
    success: "Tìm hướng dẫn an toàn/hỗ trợ, nhận biết vietbank.com.vn và hotline 1800 1122; không nhập thông tin đăng nhập/OTP vào bản redesign.",
  },
]

export default function UsabilityLab() {
  return (
    <>
      <PageHeader
        eyebrow="Research only"
        crumb="Usability Lab"
        title="Sprint 3 — Bộ tác vụ kiểm thử usability"
        lead="Trang này dành cho moderator/observer. Nó không thu thập dữ liệu người tham gia và không phải một phần của điều hướng khách hàng."
      />

      <Section>
        <div className="flex items-start gap-4 border-l-2 border-yellow bg-amber-soft/50 px-5 py-4 text-[14px] leading-relaxed text-ink-soft">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber" aria-hidden="true" />
          <p><strong className="text-ink">Không dùng dữ liệu ngân hàng thật.</strong> Không yêu cầu số tài khoản, OTP, mật khẩu, mã hóa đơn hay mã giao dịch. Moderator đọc scenario, sau đó mở website ở tab mới và quan sát hành vi trước khi hỗ trợ.</p>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="01"
          eyebrow="Moderated tasks"
          title="Sáu tác vụ đại diện cho các journey rủi ro nhất"
          lead="Không đọc phần tiêu chí thành công cho người tham gia. Phần đó chỉ dành cho moderator sau khi task kết thúc."
        />

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {TASKS.map((task) => (
            <article key={task.id} className="flex flex-col border border-line bg-surface p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="text-[12.5px] font-semibold text-amber tnum">{task.id}</span>
                <FlaskConical className="h-4 w-4 text-navy" aria-hidden="true" />
                <h2 className="text-[16px] font-semibold text-ink">{task.title}</h2>
              </div>
              <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{task.scenario}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4">
                <Link to="/" target="_blank" rel="noreferrer" className={`${BTN.primary} ${BTN_SIZE.sm}`}>
                  Mở website cho participant <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <details className="text-[13px] text-ink-soft">
                  <summary className="cursor-pointer font-semibold text-navy">Tiêu chí cho moderator</summary>
                  <p className="mt-2 max-w-lg leading-relaxed">{task.success}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead n="02" eyebrow="Measurement" title="Ghi kết quả theo hành vi, không theo cảm nhận thiết kế" />
        <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Outcome", "Direct success / Assisted / Partial / Failure"],
            ["Recovery", "Wrong turns, critical errors, tự phục hồi hay cần trợ giúp"],
            ["Effort", "Time on task + số lần moderator hỗ trợ"],
            ["SEQ", "1 rất khó → 7 rất dễ sau mỗi task"],
          ].map(([title, body]) => (
            <div key={title} className="bg-surface p-5">
              <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
