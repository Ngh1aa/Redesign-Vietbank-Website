import {
  Smartphone,
  Building2,
  BellRing,
  QrCode,
  Send,
  Lock,
  LineChart,
  Check,
  CalendarClock,
  Users,
  ExternalLink,
} from "lucide-react"

import { Link } from "react-router"

import { PageHeader, BTN, BTN_SIZE } from "../lib/ui"

import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"

import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"

const PLUS_FEATURES = [
  {
    icon: Send,

    title: "Chuyển tiền & thanh toán",

    body: "Chuyển tiền, thanh toán và thiết lập lệnh định kỳ ngay trên ứng dụng.",
  },

  {
    icon: LineChart,

    title: "Quản lý tài chính",

    body: "Theo dõi chi tiêu, xem phân tích và quản lý tài chính cá nhân trên một nền tảng.",
  },

  {
    icon: QrCode,

    title: "Shake QR",

    body: "Truy cập nhanh thao tác QR bằng trải nghiệm “lắc nhẹ” được Vietbank giới thiệu trên Digital Plus.",
  },

  {
    icon: Lock,

    title: "Bảo mật đa lớp",

    body: "Mật khẩu, sinh trắc học và OTP là các lớp xác thực được Vietbank công bố cho nền tảng.",
  },
]

const BIZ_FEATURES = [
  {
    icon: LineChart,

    title: "Quản lý tài khoản",

    body: "Theo dõi tài khoản, dòng tiền, chi tiêu và trạng thái giao dịch với dữ liệu tập trung.",
  },

  {
    icon: Building2,

    title: "Nền tảng hợp kênh",

    body: "DigiBiz được Vietbank giới thiệu theo mô hình omni-channel, kết nối các kênh vận hành số.",
  },

  {
    icon: CalendarClock,

    title: "Lập lịch & người thụ hưởng",

    body: "Quản lý danh sách người thụ hưởng và lập lịch thanh toán theo quy trình doanh nghiệp.",
  },

  {
    icon: Users,

    title: "Phê duyệt & phân quyền",

    body: "Duyệt giao dịch đa cấp và tùy chỉnh quyền theo cấu trúc, vai trò của doanh nghiệp.",
  },
]

const PLATFORM_GUIDE = [
  {
    feature: "Đối tượng",
    plus: "Khách hàng cá nhân",
    biz: "Khách hàng doanh nghiệp",
  },

  {
    feature: "Điểm vào chính",
    plus: "Ứng dụng iOS / Android",
    biz: "digibiz.vietbank.com.vn",
  },

  {
    feature: "Trọng tâm",
    plus: "Giao dịch & quản lý tài chính cá nhân",
    biz: "Quản trị tài chính & vận hành giao dịch",
  },

  { feature: "Lệnh định kỳ / lịch thanh toán", plus: "Có", biz: "Có" },

  {
    feature: "Quản lý chi tiêu",
    plus: "Có",
    biz: "Quản lý dòng tiền doanh nghiệp",
  },

  { feature: "Phê duyệt đa cấp", plus: "Không áp dụng", biz: "Có" },

  { feature: "Phân quyền theo cấu trúc DN", plus: "Không áp dụng", biz: "Có" },

  {
    feature: "Hỗ trợ",
    plus: "Hotline 1800 1122",
    biz: "Hotline / điểm giao dịch Vietbank",
  },
]

export default function NganHangSo() {
  return (
    <>
      <PageHeader
        eyebrow="Ngân hàng số"
        crumb="Ngân hàng số"
        title="Chọn đúng nền tảng số trước khi tiếp tục"
        lead="Digital Plus dành cho khách hàng cá nhân; DigiBiz dành cho doanh nghiệp. Trang này giải thích sự khác nhau và đưa bạn tới đúng kênh Vietbank chính thức."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <article
            id="digital-plus"
            className="scroll-mt-28 flex flex-col rounded-xl border border-line bg-navy p-8 text-white"
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-white/60">
              <Smartphone className="h-4 w-4 text-yellow" /> Cá nhân · Kênh
              chính thức
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Vietbank Digital Plus
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              Nền tảng ngân hàng số Vietbank dành cho khách hàng cá nhân.
              Vietbank Digital cũ đã ngừng hoạt động từ 03/06/2026.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {PLUS_FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-yellow" />
                  <h3 className="mt-2 text-[15px] font-semibold">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink
                action={{
                  label: "Trang Digital Plus",
                  href: OFFICIAL.digitalPlus,
                }}
                variant="onDark"
                size="sm"
              />
              <ActionLink
                action={{ label: "App Store", href: OFFICIAL.digitalPlusIOS }}
                variant="onDarkGhost"
                size="sm"
              />
              <ActionLink
                action={{
                  label: "Google Play",
                  href: OFFICIAL.digitalPlusAndroid,
                }}
                variant="onDarkGhost"
                size="sm"
              />
            </div>
            <a
              href={OFFICIAL.digitalPlusMigration}
              {...EXTERNAL_LINK_PROPS}
              className="mt-5 inline-flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-white/80 hover:text-white hover:underline"
            >
              Hướng dẫn chuyển đổi chính thức{" "}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </article>

          <article
            id="digibiz"
            className="scroll-mt-28 flex flex-col rounded-xl border border-line bg-surface p-8"
          >
            <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-ink-soft">
              <Building2 className="h-4 w-4 text-navy" /> Doanh nghiệp · Kênh
              chính thức
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">
              Vietbank DigiBiz
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Nền tảng số dành cho doanh nghiệp, được Vietbank giới thiệu theo
              định hướng “Tối ưu vận hành, tối đa hiệu quả”.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BIZ_FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-navy" />
                  <h3 className="mt-2 text-[15px] font-semibold">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink
                action={{ label: "Truy cập DigiBiz", href: OFFICIAL.digiBiz }}
                size="sm"
              />
              <ActionLink
                action={{
                  label: "Thông tin DigiBiz",
                  href: OFFICIAL.digiBizInfo,
                }}
                variant="secondary"
                size="sm"
              />
            </div>
          </article>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="01"
          eyebrow="Chọn nền tảng"
          title="So sánh theo công việc cần hoàn thành"
          lead="Không dùng một nút “Đăng nhập” chung cho mọi người. Chọn theo đối tượng và quy trình vận hành để tránh vào nhầm kênh."
        />
        <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="border-b border-line bg-navy-050 text-[12.5px] uppercase tracking-wide text-ink-soft">
                <th className="px-5 py-3.5 font-semibold">Tiêu chí</th>
                <th className="px-5 py-3.5 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Smartphone className="h-3.5 w-3.5 text-navy" /> Digital
                    Plus
                  </span>
                </th>
                <th className="px-5 py-3.5 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-navy" /> DigiBiz
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="text-[14.5px]">
              {PLATFORM_GUIDE.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-line last:border-0"
                >
                  <td className="px-5 py-3.5 font-medium text-ink">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3.5 text-ink-soft">{row.plus}</td>
                  <td className="px-5 py-3.5 text-ink-soft">{row.biz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-soft">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
          Nội dung tính năng ở trang này được rút từ các trang/Thông báo
          Vietbank công khai; điều kiện dịch vụ thực tế vẫn theo Vietbank tại
          thời điểm sử dụng.
        </p>
      </Section>

      <Section id="migration">
        <SectionHead
          n="02"
          eyebrow="Chuyển đổi ứng dụng"
          title="Đang dùng kênh cá nhân cũ?"
          lead="Hai mốc dưới đây được Vietbank công bố cho khách hàng cá nhân."
        />
        <div className="mt-6 flex flex-col gap-3">
          {[
            {
              date: "18/05/2026",

              text: "Vietbank dừng cung cấp Internet Banking dành cho khách hàng cá nhân và hướng người dùng sang Digital Plus.",
            },

            {
              date: "03/06/2026",

              text: "Ứng dụng Vietbank Digital cũ ngừng hoạt động; khách hàng cá nhân chuyển sang Vietbank Digital Plus.",
            },
          ].map((m) => (
            <div
              key={m.date}
              className="flex items-start gap-3 rounded-lg border border-line bg-surface px-5 py-4"
            >
              <BellRing className="mt-0.5 h-5 w-5 shrink-0 text-red" />
              <p className="text-[14.5px] leading-relaxed text-ink">
                <span className="font-semibold tnum">{m.date}</span>: {m.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ActionLink
            action={{
              label: "Xem thông báo chuyển đổi",
              href: OFFICIAL.digitalPlusMigration,
            }}
            variant="secondary"
          />
          <Link to="/ho-tro#security" className={`${BTN.ghost} ${BTN_SIZE.lg}`}>
            Kiểm tra kênh Vietbank chính thức
          </Link>
        </div>
      </Section>

      <CTABand
        title="Tiếp tục trên đúng kênh Vietbank"
        body="Khách hàng cá nhân có thể tải Digital Plus; khách hàng doanh nghiệp có thể truy cập DigiBiz. Liên kết bên dưới mở kênh Vietbank chính thức."
        primary={{ label: "Tải Digital Plus", href: OFFICIAL.digitalPlus }}
        secondary={{ label: "Truy cập DigiBiz", href: OFFICIAL.digiBiz }}
      />
    </>
  )
}
