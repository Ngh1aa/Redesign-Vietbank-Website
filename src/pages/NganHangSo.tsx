import { Smartphone, Building2, BellRing, QrCode, Send, PiggyBank, Lock, LineChart } from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { Section, SectionHead, CTABand } from "../lib/sections"

const PLUS_FEATURES = [
  { icon: Send, title: "Chuyển tiền 24/7", body: "Chuyển nhanh Napas 24/7, miễn phí, kèm danh bạ và mẫu giao dịch." },
  { icon: PiggyBank, title: "Tiết kiệm online", body: "Mở và tất toán sổ tiết kiệm ngay trên ứng dụng, lãi suất minh bạch." },
  { icon: QrCode, title: "Thanh toán QR", body: "Quét QR thanh toán và nạp dịch vụ tiện ích chỉ trong vài chạm." },
  { icon: Lock, title: "Kiểm soát bảo mật", body: "Khoá thẻ tức thì, sinh trắc học và OTP động bảo vệ mọi giao dịch." },
]

const BIZ_FEATURES = [
  { icon: Send, title: "Chi lương hàng loạt", body: "Chi lương và thanh toán theo lô, có kiểm soát và đối soát rõ ràng." },
  { icon: LineChart, title: "Báo cáo dòng tiền", body: "Theo dõi số dư, dòng tiền vào ra và trạng thái giao dịch theo thời gian thực." },
  { icon: Building2, title: "Phê duyệt đa cấp", body: "Phân quyền theo vai trò và luồng phê duyệt nhiều cấp linh hoạt." },
  { icon: Lock, title: "An toàn doanh nghiệp", body: "Kiểm soát thiết bị, hạn mức và nhật ký hoạt động theo người dùng." },
]

export default function NganHangSo() {
  return (
    <>
      <PageHeader
        eyebrow="Ngân hàng số"
        crumb="Ngân hàng số"
        title="Hai nền tảng số, một trải nghiệm Vietbank"
        lead="Digital Plus cho khách hàng cá nhân và DigiBiz cho doanh nghiệp — chọn đúng ứng dụng theo nhu cầu, không phải đoán."
      />

      {/* Comparison — Digital Plus vs DigiBiz */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-xl border border-line bg-navy p-8 text-white">
            <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-white/60">
              <Smartphone className="h-4 w-4 text-yellow" /> Cá nhân
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold">Vietbank Digital Plus</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Ngân hàng số chính thức cho khách hàng cá nhân, thay thế các ứng dụng cũ đã ngừng hoạt động.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {PLUS_FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-yellow" />
                  <h3 className="mt-2 text-[15px] font-semibold">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#" className={`${BTN.onDark} ${BTN_SIZE.sm}`}>Tải Digital Plus</a>
              <a href="#" className={`${BTN.onDarkGhost} ${BTN_SIZE.sm}`}>Hướng dẫn sử dụng</a>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-line bg-surface p-8">
            <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-ink-soft">
              <Building2 className="h-4 w-4 text-navy" /> Doanh nghiệp
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Vietbank DigiBiz</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Nền tảng số điều hành tài chính doanh nghiệp, liền mạch giữa web và mobile.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BIZ_FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-navy" />
                  <h3 className="mt-2 text-[15px] font-semibold">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/doanh-nghiep" className={`${BTN.primary} ${BTN_SIZE.sm}`}>Tìm hiểu DigiBiz</Link>
              <a href="#" className={`${BTN.secondary} ${BTN_SIZE.sm}`}>Đăng nhập DigiBiz</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Migration notice */}
      <Section tone="soft">
        <SectionHead
          n="01"
          eyebrow="Chuyển đổi ứng dụng"
          title="Đang dùng ứng dụng cũ? Đây là điều cần biết"
          lead="Vietbank đã hợp nhất về hai nền tảng số chính thức. Vui lòng chuyển sang đúng ứng dụng cho nhu cầu của bạn."
        />
        <div className="mt-6 flex flex-col gap-3">
          {[
            { date: "18/05/2026", text: "Internet Banking dành cho khách hàng cá nhân dừng cung cấp — chuyển sang Digital Plus." },
            { date: "03/06/2026", text: "Ứng dụng Vietbank Digital cũ ngừng hoạt động — khách hàng cá nhân dùng Digital Plus." },
          ].map((m) => (
            <div key={m.date} className="flex items-start gap-3 rounded-lg border border-line bg-surface px-5 py-4">
              <BellRing className="mt-0.5 h-5 w-5 shrink-0 text-red" />
              <p className="text-[14.5px] leading-relaxed text-ink">
                <span className="font-semibold tnum">{m.date}</span> — {m.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/ho-tro#security" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
            Xem hướng dẫn chuyển đổi an toàn
          </Link>
        </div>
      </Section>

      <CTABand
        title="Bắt đầu với ngân hàng số Vietbank"
        body="Tải Digital Plus cho nhu cầu cá nhân hoặc liên hệ để thiết lập DigiBiz cho doanh nghiệp của bạn."
        primary={{ label: "Tải Digital Plus", to: "/ngan-hang-so" }}
        secondary={{ label: "Đăng ký DigiBiz", to: "/ho-tro" }}
      />
    </>
  )
}
