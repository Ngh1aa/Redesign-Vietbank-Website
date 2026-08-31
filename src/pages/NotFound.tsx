import { Link } from "react-router"
import { CreditCard, Home as HomeIcon, LifeBuoy, Smartphone } from "lucide-react"
import { BTN, BTN_SIZE, SectionLabel } from "../lib/ui"

const RECOVERY_LINKS = [
  { icon: CreditCard, title: "Tìm thẻ", body: "Lọc và so sánh các dòng thẻ Vietbank.", to: "/the" },
  { icon: Smartphone, title: "Ngân hàng số", body: "Digital Plus cho cá nhân, DigiBiz cho doanh nghiệp.", to: "/ngan-hang-so" },
  { icon: LifeBuoy, title: "Hỗ trợ & công cụ", body: "Tỷ giá, lãi suất, chi nhánh và biểu mẫu.", to: "/ho-tro" },
]

export default function NotFound() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionLabel n="404">Không tìm thấy trang</SectionLabel>
            <h1 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
              Đường dẫn này không còn ở vị trí bạn vừa mở.
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Trang có thể đã được di chuyển hoặc đường dẫn chưa đúng. Chọn một điểm vào bên cạnh để tiếp tục mà không cần quay lại từ đầu.
            </p>
            <div className="mt-6">
              <Link to="/" className={`${BTN.primary} ${BTN_SIZE.lg}`}>
                <HomeIcon className="h-4 w-4" aria-hidden="true" /> Về trang chủ
              </Link>
            </div>
          </div>

          <div className="border-y border-line bg-surface">
            {RECOVERY_LINKS.map(({ icon: Icon, title, body, to }, index) => (
              <Link
                key={title}
                to={to}
                className={`group grid min-h-[92px] grid-cols-[42px_1fr_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-navy-050 ${index ? "border-t border-line" : ""}`}
              >
                <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
                <span>
                  <strong className="block text-[15px] group-hover:text-navy">{title}</strong>
                  <span className="mt-1 block text-[13px] leading-relaxed text-ink-soft">{body}</span>
                </span>
                <span className="text-[13px] font-semibold text-navy">Mở</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
