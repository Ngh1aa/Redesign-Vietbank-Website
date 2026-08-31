import { useState } from "react"
import { Link } from "react-router"
import {
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Check,
  Wallet,
  PiggyBank,
  CreditCard,
  Landmark,
  Send,
  ShieldCheck,
  Building2,
  Banknote,
  TrendingUp,
  Globe,
  Smartphone,
  Lock,
  BellRing,
  Phone,
  MapPin,
  Calculator,
  Receipt,
} from "lucide-react"
import { SectionLabel, BTN, BTN_SIZE, HOTLINE, HOTLINE_TEL } from "../lib/ui"
import RatesPanel from "../components/RatesPanel"

type Segment = "ca-nhan" | "doanh-nghiep"

const TOP_TASKS: Record<Segment, { icon: any; label: string; hint: string; to: string }[]> = {
  "ca-nhan": [
    { icon: Wallet, label: "Mở tài khoản", hint: "Trực tuyến trong 5 phút", to: "/ca-nhan" },
    { icon: PiggyBank, label: "Gửi tiết kiệm", hint: "Lãi suất tới 6.3%/năm", to: "/ca-nhan" },
    { icon: CreditCard, label: "Mở thẻ", hint: "Tín dụng & thanh toán", to: "/the" },
    { icon: Landmark, label: "Vay vốn", hint: "Mua nhà · tiêu dùng · ô tô", to: "/ca-nhan" },
    { icon: Send, label: "Chuyển tiền", hint: "24/7 qua Digital Plus", to: "/ngan-hang-so" },
    { icon: Smartphone, label: "Digital Plus", hint: "Ngân hàng số cá nhân", to: "/ngan-hang-so" },
  ],
  "doanh-nghiep": [
    { icon: Building2, label: "Tài khoản DN", hint: "Thanh toán & thu chi hộ", to: "/doanh-nghiep" },
    { icon: Banknote, label: "Vay & tài trợ vốn", hint: "Vốn lưu động linh hoạt", to: "/doanh-nghiep" },
    { icon: TrendingUp, label: "Quản lý dòng tiền", hint: "Thu hộ · chi hộ · payroll", to: "/doanh-nghiep" },
    { icon: Globe, label: "Tài trợ thương mại", hint: "XNK & chuyển tiền quốc tế", to: "/doanh-nghiep" },
    { icon: ShieldCheck, label: "Bảo lãnh", hint: "Bảo lãnh & ký quỹ", to: "/doanh-nghiep" },
    { icon: Smartphone, label: "DigiBiz", hint: "Ngân hàng số doanh nghiệp", to: "/ngan-hang-so" },
  ],
}

const NEEDS: Record<Segment, { title: string; body: string; tag: string; cues: string[]; to: string }[]> = {
  "ca-nhan": [
    { tag: "Tài khoản", title: "Tôi muốn mở tài khoản", body: "Tài khoản thanh toán cho chi tiêu hằng ngày, mở online và dùng ngay.", cues: ["Mở online eKYC", "Miễn phí duy trì", "Kết nối Digital Plus"], to: "/ca-nhan" },
    { tag: "Tiết kiệm", title: "Tôi muốn gửi tiết kiệm", body: "Tiết kiệm trực tuyến, kỳ hạn linh hoạt, minh bạch lãi suất.", cues: ["Gửi từ Digital Plus", "Kỳ hạn 1–24 tháng", "Tất toán trước hạn"], to: "/ca-nhan" },
    { tag: "Vay", title: "Tôi cần vay", body: "Vay mua nhà, mua xe, tiêu dùng — biết trước điều kiện và chi phí.", cues: ["Lãi suất minh bạch", "Hồ sơ rõ ràng", "Ước tính khoản trả"], to: "/ca-nhan" },
    { tag: "Thẻ", title: "Tôi muốn mở thẻ", body: "So sánh thẻ theo hoàn tiền, tích điểm và hạn mức phù hợp.", cues: ["Hoàn tiền / tích điểm", "Mở online", "Quản lý trên app"], to: "/the" },
  ],
  "doanh-nghiep": [
    { tag: "Vốn", title: "Tôi cần vốn kinh doanh", body: "Vốn lưu động, thấu chi và tài trợ theo chuỗi cung ứng cho SME.", cues: ["Vốn lưu động", "Hạn mức thấu chi", "Tài trợ chuỗi"], to: "/doanh-nghiep" },
    { tag: "Dòng tiền", title: "Tôi muốn quản lý dòng tiền", body: "Thu hộ, chi hộ, trả lương và đối soát tập trung trên DigiBiz.", cues: ["Chi lương hàng loạt", "Thu / chi hộ", "Đối soát tập trung"], to: "/doanh-nghiep" },
    { tag: "Quốc tế", title: "Tôi xuất nhập khẩu", body: "L/C, nhờ thu và chuyển tiền quốc tế với tỷ giá cạnh tranh.", cues: ["L/C & nhờ thu", "Tỷ giá cạnh tranh", "Theo dõi trực tuyến"], to: "/doanh-nghiep" },
    { tag: "Bảo lãnh", title: "Tôi cần bảo lãnh", body: "Bảo lãnh dự thầu, thực hiện hợp đồng và tạm ứng, phát hành nhanh.", cues: ["Phát hành nhanh", "Nhiều loại bảo lãnh", "Theo dõi online"], to: "/doanh-nghiep" },
  ],
}

export default function Home() {
  const [segment, setSegment] = useState<Segment>("ca-nhan")
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const isPersonal = segment === "ca-nhan"

  return (
    <>
      {/* ============ 01 HERO + INTENT ROUTER ============ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1240px] items-stretch gap-0 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal flex flex-col justify-center py-12 lg:py-16 lg:pr-14">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[12.5px] font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-navy" />
              Chuyển đổi số 2026 · Tăng trưởng — An toàn — Bền vững
            </div>
            <h1 className="max-w-[680px] font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              Ngân hàng đồng hành cùng
              <span className="text-navy"> mọi quyết định tài chính</span> của bạn.
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              Từ tài khoản, tiết kiệm, thẻ đến vay vốn và ngân hàng số — Vietbank giúp bạn tìm đúng
              giải pháp, hiểu rõ chi phí và bắt đầu chỉ trong vài phút.
            </p>

            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Bạn đang cần ngân hàng cho
              </span>
              <div className="mt-2 inline-flex rounded-lg border border-line bg-surface p-1">
                {(
                  [
                    ["ca-nhan", "Cá nhân"],
                    ["doanh-nghiep", "Doanh nghiệp"],
                  ] as [Segment, string][]
                ).map(([val, lbl]) => (
                  <button
                    key={val}
                    onClick={() => setSegment(val)}
                    aria-pressed={segment === val}
                    className={`rounded-md px-6 py-2.5 text-[14.5px] font-semibold transition-colors ${
                      segment === val ? "bg-navy text-white" : "text-ink hover:text-navy"
                    }`}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link to={isPersonal ? "/ca-nhan" : "/doanh-nghiep"} className={`${BTN.primary} ${BTN_SIZE.lg}`}>
                Khám phá sản phẩm {isPersonal ? "cá nhân" : "doanh nghiệp"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ho-tro" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
                Được tư vấn miễn phí
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-navy-050 lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1723864059860-636dfc060b9d?w=1000&h=1200&fit=crop&auto=format"
              alt="Khách hàng sử dụng ứng dụng ngân hàng số Vietbank trên điện thoại"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/15 bg-white/95 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Vietbank Digital Plus</div>
                  <div className="mt-0.5 font-display text-lg font-semibold">Chuyển tiền 24/7 · Miễn phí</div>
                </div>
                <Link to="/ngan-hang-so" aria-label="Tìm hiểu Digital Plus" className="grid h-10 w-10 place-items-center rounded-md bg-navy text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 TOP TASKS ============ */}
      <section className="border-b border-line bg-soft">
        <div className="mx-auto max-w-[1240px] px-6 py-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel n="02">Tác vụ nhanh — {isPersonal ? "Cá nhân" : "Doanh nghiệp"}</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Bạn muốn làm gì hôm nay?</h2>
            </div>
            <Link to={isPersonal ? "/ca-nhan" : "/doanh-nghiep"} className="flex items-center gap-1.5 text-[14.5px] font-semibold text-navy hover:underline">
              Xem tất cả dịch vụ <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
            {TOP_TASKS[segment].map(({ icon: Icon, label, hint, to }) => (
              <Link key={label} to={to} className="group flex flex-col gap-3 bg-surface p-5 transition-colors hover:bg-navy-050">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[15px] font-semibold leading-tight">{label}</div>
                  <div className="mt-1 text-[12.5px] leading-snug text-ink-soft">{hint}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 NEED-BASED DISCOVERY ============ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <SectionLabel n="03">Khám phá theo nhu cầu</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Không cần biết thuật ngữ ngân hàng — hãy bắt đầu từ điều bạn cần.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {NEEDS[segment].map((n, i) => (
              <article
                key={n.title}
                className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(11,42,107,0.18)]"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-line bg-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                      {n.tag}
                    </span>
                    <span className="text-xs tnum text-ink-soft">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{n.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{n.body}</p>
                  <ul className="mt-4 flex flex-col gap-1.5 text-[14px] text-ink">
                    {n.cues.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-navy" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center gap-4 border-t border-line pt-4 text-[14px] font-semibold">
                  <Link to={n.to} className="flex items-center gap-1.5 text-navy hover:underline">
                    Xem sản phẩm <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to={n.to} className="flex items-center gap-1.5 text-ink-soft hover:text-navy">
                    So sánh lựa chọn
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 flex items-center gap-2 text-[13px] text-ink-soft">
            <ShieldCheck className="h-4 w-4 text-navy" />
            Mỗi sản phẩm nêu rõ điều kiện, hồ sơ, lãi suất và biểu phí trước khi bạn đăng ký — minh bạch là quyền của bạn.
          </p>
        </div>
      </section>

      {/* ============ 04 RATES ============ */}
      <section className="border-b border-line bg-soft">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel n="04">Công cụ ngân hàng</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tỷ giá &amp; Lãi suất</h2>
            </div>
          </div>
          <div className="mt-6">
            <RatesPanel />
          </div>
        </div>
      </section>

      {/* ============ 05 DIGITAL ECOSYSTEM ============ */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <SectionLabel n="05">Hệ sinh thái ngân hàng số</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
            Đúng ngân hàng số cho đúng nhu cầu.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl border border-line bg-navy p-8 text-white">
              <div>
                <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-white/60">
                  <Smartphone className="h-4 w-4 text-yellow" /> Cá nhân
                </div>
                <h3 className="mt-3 font-display text-3xl font-semibold">Vietbank Digital Plus</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">
                  Ngân hàng số cho khách hàng cá nhân: chuyển tiền 24/7, mở tiết kiệm, thanh toán QR,
                  quản lý chi tiêu và kiểm soát bảo mật ngay trên điện thoại.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-[14px] text-white/85">
                  {["Chuyển tiền miễn phí", "Mở tiết kiệm online", "Thanh toán QR", "Khoá thẻ tức thì"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#" className={`${BTN.onDark} ${BTN_SIZE.sm}`}>Tải Digital Plus</a>
                <Link to="/ngan-hang-so" className={`${BTN.onDarkGhost} ${BTN_SIZE.sm}`}>Hướng dẫn sử dụng</Link>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-8">
              <div>
                <div className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wide text-ink-soft">
                  <Building2 className="h-4 w-4 text-navy" /> Doanh nghiệp
                </div>
                <h3 className="mt-3 font-display text-3xl font-semibold text-navy">Vietbank DigiBiz</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  Ngân hàng số doanh nghiệp: kiểm soát dòng tiền, thu chi hộ, trả lương, phê duyệt
                  nhiều cấp và đối soát — liền mạch giữa web và mobile.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-[14px] text-ink">
                  {["Chi lương hàng loạt", "Thu hộ / chi hộ", "Phê duyệt đa cấp", "Báo cáo dòng tiền"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-navy" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/ngan-hang-so" className={`${BTN.primary} ${BTN_SIZE.sm}`}>Tìm hiểu DigiBiz</Link>
                <Link to="/ngan-hang-so" className={`${BTN.secondary} ${BTN_SIZE.sm}`}>Đăng nhập DigiBiz</Link>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-lg border border-line bg-navy-050 px-4 py-3.5 text-[13.5px] text-ink">
            <BellRing className="mt-0.5 h-4.5 w-4.5 shrink-0 text-red" />
            <p className="leading-relaxed">
              Ứng dụng <span className="font-medium">Vietbank Digital</span> đã ngừng hoạt động từ 03/06/2026 và Internet
              Banking cá nhân dừng từ 18/05/2026. Khách hàng cá nhân vui lòng chuyển sang{" "}
              <span className="font-medium text-navy">Digital Plus</span> — kênh ngân hàng số chính thức.{" "}
              <Link to="/ngan-hang-so" className="font-semibold text-navy hover:underline">Xem hướng dẫn chuyển đổi</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 06 TRUST & SECURITY ============ */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel n="06">Niềm tin & An toàn</SectionLabel>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight tracking-tight">
                An toàn giao dịch là ưu tiên hàng đầu.
              </h2>
              <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
                Vietbank chỉ liên hệ qua các kênh chính thức. Chúng tôi không bao giờ yêu cầu bạn
                cung cấp mật khẩu, mã OTP hay thông tin đăng nhập qua điện thoại, tin nhắn hay email.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/ho-tro#security" className="flex items-center justify-between rounded-lg border border-line px-5 py-4 transition-colors hover:border-navy hover:bg-navy-050">
                  <span className="flex items-center gap-3 font-semibold text-navy">
                    <ShieldCheck className="h-5 w-5" /> Trung tâm an toàn & phòng chống lừa đảo
                  </span>
                  <ChevronRight className="h-4 w-4 text-ink-soft" />
                </Link>
                <a href={HOTLINE_TEL} className="flex items-center justify-between rounded-lg border border-line px-5 py-4 transition-colors hover:border-navy hover:bg-navy-050">
                  <span className="flex items-center gap-3 font-semibold text-navy">
                    <Phone className="h-5 w-5" /> Hotline chính thức {HOTLINE}
                  </span>
                  <ChevronRight className="h-4 w-4 text-ink-soft" />
                </a>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-line rounded-xl border border-line bg-paper">
              {[
                { icon: Phone, title: `Một hotline duy nhất — ${HOTLINE}`, body: "Vietbank đã triển khai Voice Brandname; mọi cuộc gọi chính thức đều hiển thị tên thương hiệu. Đây là số hotline duy nhất, giúp bạn nhận diện và chống giả mạo." },
                { icon: ShieldCheck, title: "Kênh chính thức", body: "Website vietbank.com.vn · ứng dụng Digital Plus / DigiBiz · Zalo OA và email chính thức. Vietbank không gửi link đăng nhập hay yêu cầu OTP qua tin nhắn." },
                { icon: Lock, title: "Bảo vệ dữ liệu & tuân thủ", body: "Xác thực sinh trắc học và OTP động trên ứng dụng; chính sách bảo vệ dữ liệu cá nhân và tuân thủ AML/FATCA theo quy định hiện hành." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-050 text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[15.5px] font-semibold">{title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 07 NEWS + FAQ ============ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center justify-between gap-3">
              <SectionLabel n="07">Tin tức & Thông báo</SectionLabel>
              <span className="rounded border border-line bg-soft px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink-soft">
                Nội dung minh hoạ
              </span>
            </div>
            <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
              {[
                { tag: "Thông báo", date: "29/08/2026", title: "Nâng cấp hệ thống Digital Plus đêm 02/09 — một số dịch vụ tạm gián đoạn" },
                { tag: "Khuyến mãi", date: "24/08/2026", title: "Hoàn tiền tới 8% cho chủ thẻ tín dụng Vietbank trong quý III" },
                { tag: "Lãi suất", date: "20/08/2026", title: "Cập nhật biểu lãi suất tiết kiệm áp dụng từ ngày 20/08/2026" },
                { tag: "An toàn", date: "18/08/2026", title: "Nhận diện kênh chính thức và Voice Brandname của Vietbank" },
              ].map((n) => (
                <Link key={n.title} to="/ve-vietbank" className="group flex items-start gap-4 py-4 transition-colors hover:bg-navy-050/60">
                  <div className="flex w-24 shrink-0 flex-col">
                    <span className="rounded border border-line bg-soft px-2 py-0.5 text-center text-[10.5px] font-semibold uppercase tracking-wide text-ink-soft">
                      {n.tag}
                    </span>
                    <span className="mt-1.5 text-center text-[11px] tnum text-ink-soft">{n.date}</span>
                  </div>
                  <p className="text-[15.5px] font-medium leading-snug text-ink group-hover:text-navy">{n.title}</p>
                  <ArrowUpRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-navy" />
                </Link>
              ))}
            </div>
            <Link to="/ve-vietbank" className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-navy hover:underline">
              Tất cả tin tức <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <SectionLabel n="—">Câu hỏi thường gặp</SectionLabel>
            <div className="mt-6 overflow-hidden rounded-xl border border-line">
              {[
                { q: "Tôi mở tài khoản online cần những gì?", a: "Bạn cần CCCD gắn chip và một số điện thoại chính chủ. Quá trình định danh eKYC hoàn tất ngay trên Digital Plus, không cần đến quầy." },
                { q: "Digital Plus khác gì với Vietbank Digital cũ?", a: "Digital Plus là ứng dụng ngân hàng số chính thức hiện nay cho khách hàng cá nhân. Ứng dụng Vietbank Digital cũ đã ngừng hoạt động; khách hàng chuyển sang Digital Plus theo hướng dẫn." },
                { q: "Doanh nghiệp đăng ký DigiBiz như thế nào?", a: "Doanh nghiệp đăng ký trực tuyến hoặc tại chi nhánh. Đội ngũ tư vấn sẽ hỗ trợ thiết lập phân quyền phê duyệt và kết nối dịch vụ thu chi hộ." },
                { q: "Làm sao để biết tin nhắn có phải từ Vietbank?", a: `Vietbank không gửi đường link đăng nhập qua SMS/email và không yêu cầu OTP. Khi nghi ngờ, hãy gọi hotline ${HOTLINE} để xác thực.` },
              ].map((item, i) => (
                <div key={item.q} className="border-b border-line last:border-0">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    className="flex w-full items-center justify-between gap-4 bg-surface px-5 py-4 text-left text-[15px] font-semibold transition-colors hover:bg-navy-050"
                  >
                    {item.q}
                    <ChevronDown className={`h-4.5 w-4.5 shrink-0 text-navy transition-transform ${faqOpen === i ? "rotate-180" : ""}`} />
                  </button>
                  {faqOpen === i && <p className="bg-surface px-5 pb-5 text-[14.5px] leading-relaxed text-ink-soft">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 08 SUPPORT / UTILITY BAND ============ */}
      <section className="border-b border-line bg-soft">
        <div className="mx-auto max-w-[1240px] px-6 py-10">
          <div className="grid divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              { icon: MapPin, title: "ATM & Điểm giao dịch", body: "Tìm điểm Vietbank gần bạn.", cta: "Mở bản đồ", to: "/ho-tro#network" },
              { icon: Calculator, title: "Công cụ tính toán", body: "Lãi vay, lãi tiết kiệm và khoản trả góp.", cta: "Dùng công cụ", to: "/ho-tro" },
              { icon: Receipt, title: "Biểu phí & Biểu mẫu", body: "Biểu phí dịch vụ và mẫu đơn cần thiết.", cta: "Xem tài liệu", to: "/ho-tro#docs" },
            ].map(({ icon: Icon, title, body, cta, to }) => (
              <Link key={title} to={to} className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-navy-050">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-050 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-semibold">{title}</h3>
                  <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{body}</p>
                  <span className="mt-1 inline-flex items-center gap-1 text-[13.5px] font-semibold text-navy group-hover:underline">
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
