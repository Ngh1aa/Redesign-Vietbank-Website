import {
  Wallet,
  PiggyBank,
  CreditCard,
  Landmark,
  Car,
  Home as HomeIcon,
  Smartphone,
  ArrowRight,
} from "lucide-react"
import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"
import { Link } from "react-router"
import { Section, SectionHead, FeatureRow, CTABand } from "../lib/sections"

const PRODUCTS = [
  { icon: Wallet, title: "Tài khoản thanh toán", body: "Tài khoản dùng hằng ngày, mở online bằng eKYC và kết nối ngay Digital Plus.", cues: ["Miễn phí duy trì", "Số tài khoản đẹp", "Chuyển tiền 24/7"], to: "/ca-nhan" },
  { icon: PiggyBank, title: "Tiết kiệm", body: "Gửi tiết kiệm trực tuyến với kỳ hạn linh hoạt và lãi suất minh bạch.", cues: ["Kỳ hạn 1–24 tháng", "Lãi suất tới 6.3%/năm", "Tất toán trước hạn"], to: "/ca-nhan" },
  { icon: CreditCard, title: "Thẻ", body: "Thẻ tín dụng và thanh toán với ưu đãi hoàn tiền, tích điểm rõ ràng.", cues: ["Hoàn tiền / tích điểm", "Mở online", "Quản lý trên app"], to: "/the" },
  { icon: HomeIcon, title: "Vay mua nhà", body: "Vay mua, xây, sửa nhà — biết trước điều kiện, hồ sơ và lãi suất.", cues: ["Thời hạn tới 25 năm", "Giải ngân linh hoạt", "Ước tính khoản trả"], to: "/ca-nhan" },
  { icon: Car, title: "Vay mua ô tô", body: "Tài trợ mua xe mới và xe đã qua sử dụng, thủ tục nhanh gọn.", cues: ["Tỷ lệ vay cao", "Duyệt nhanh", "Trả góp đều"], to: "/ca-nhan" },
  { icon: Landmark, title: "Vay tiêu dùng", body: "Đáp ứng nhu cầu chi tiêu cá nhân với lãi suất và biểu phí công khai.", cues: ["Hồ sơ đơn giản", "Hạn mức rõ ràng", "Minh bạch chi phí"], to: "/ca-nhan" },
]

export default function CaNhan() {
  return (
    <>
      <PageHeader
        eyebrow="Khách hàng cá nhân"
        crumb="Cá nhân"
        title="Giải pháp tài chính cho từng giai đoạn cuộc sống"
        lead="Tài khoản, tiết kiệm, thẻ và vay vốn — chọn theo điều bạn cần, hiểu rõ chi phí trước khi đăng ký và bắt đầu ngay trên Digital Plus."
      />

      {/* Featured — Digital Plus split */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              n="01"
              eyebrow="Sản phẩm nổi bật"
              title="Mở tài khoản & Digital Plus trong 5 phút"
              lead="Định danh eKYC bằng CCCD gắn chip, không cần đến quầy. Có tài khoản là dùng được ngay chuyển tiền, tiết kiệm và thanh toán QR."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/ngan-hang-so" className={`${BTN.primary} ${BTN_SIZE.lg}`}>
                Mở tài khoản online <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ho-tro" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
                Đặt lịch tư vấn
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-line bg-navy-050">
            <img
              src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=900&h=650&fit=crop&auto=format"
              alt="Khách hàng cá nhân mở tài khoản Vietbank trên điện thoại"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Product list — editorial rows, not cards */}
      <Section tone="soft">
        <SectionHead n="02" eyebrow="Danh mục sản phẩm" title="Chọn theo nhu cầu của bạn" />
        <div className="mt-6 divide-y divide-line border-y border-line">
          {PRODUCTS.map((p) => (
            <FeatureRow key={p.title} {...p} cta="Xem chi tiết" />
          ))}
        </div>
      </Section>

      <CTABand
        title="Không chắc nên bắt đầu từ đâu?"
        body="Đội ngũ Vietbank sẽ giúp bạn chọn đúng sản phẩm theo mục tiêu tài chính — hoàn toàn miễn phí."
        primary={{ label: "Được tư vấn miễn phí", to: "/ho-tro" }}
        secondary={{ label: "Tải Digital Plus", to: "/ngan-hang-so" }}
      />

      <Section>
        <div className="flex items-center gap-4 rounded-xl border border-line bg-navy-050 px-6 py-5">
          <Smartphone className="h-6 w-6 shrink-0 text-navy" />
          <p className="text-[14.5px] leading-relaxed text-ink">
            Khách hàng cá nhân giao dịch trực tuyến qua <span className="font-semibold text-navy">Digital Plus</span>.
            Internet Banking cá nhân đã dừng từ 18/05/2026.
          </p>
        </div>
      </Section>
    </>
  )
}
