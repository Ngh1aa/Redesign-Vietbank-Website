import { ArrowUpRight, Target, HeartHandshake, ShieldCheck, Building2 } from "lucide-react"
import { Link } from "react-router"
import { PageHeader } from "../lib/ui"
import { Section, SectionHead, CTABand, Stat, InlineLink } from "../lib/sections"

const ABOUT_NEWS = [
  { tag: "Thông báo", date: "29/08/2026", title: "Nâng cấp hệ thống Digital Plus đêm 02/09 — một số dịch vụ tạm gián đoạn", to: "/ho-tro" },
  { tag: "Sự kiện", date: "26/04/2026", title: "Đại hội đồng cổ đông thường niên 2026 — Nghị quyết đã được công bố", to: "/nha-dau-tu" },
  { tag: "Cộng đồng", date: "15/04/2026", title: "Vietbank đồng hành chương trình tài chính cho sinh viên khởi nghiệp", to: "/nha-dau-tu" },
  { tag: "Sản phẩm", date: "20/03/2026", title: "Ra mắt gói tài khoản số dành cho doanh nghiệp mới thành lập", to: "/doanh-nghiep" },
]

/* Network & coverage — answers "how big is the bank?" per corporate-website "scale" guidance */
const NETWORK = [
  { value: "63", label: "Chi nhánh & phòng giao dịch trên toàn quốc" },
  { value: "150+", label: "ATM và điểm CDM tự phục vụ" },
  { value: "48", label: "Tỉnh thành có mạng lưới Vietbank" },
]

/* Leadership & governance — placeholder, illustrative */
const LEADERSHIP = [
  { name: "Chủ tịch HĐQT", role: "Hội đồng quản trị", initials: "CT" },
  { name: "Tổng Giám đốc", role: "Ban điều hành", initials: "TG" },
  { name: "Phó Tổng Giám đốc phụ trách Khối Ngân hàng số", role: "Ban điều hành", initials: "PT" },
]

export default function VeVietbank() {
  return (
    <>
      <PageHeader
        eyebrow="Về Vietbank"
        crumb="Về Vietbank"
        title="Ngân hàng TMCP Việt Nam Thương Tín"
        lead="Tăng trưởng — An toàn — Bền vững. Vietbank hướng tới trở thành ngân hàng bán lẻ uy tín hàng đầu, đồng hành cùng khách hàng cá nhân và doanh nghiệp trên hành trình tài chính."
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              n="01"
              eyebrow="Câu chuyện của chúng tôi"
              title="Ngân hàng của sự minh bạch và tin cậy"
              lead="Chúng tôi tin rằng dịch vụ tài chính tốt bắt đầu từ sự rõ ràng: điều kiện minh bạch, chi phí công khai và những kênh liên hệ chính thức mà khách hàng có thể tin tưởng."
            />
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Từ mạng lưới chi nhánh đến nền tảng số Digital Plus và DigiBiz, Vietbank không ngừng đầu tư
              để mỗi giao dịch trở nên đơn giản, an toàn và phù hợp với nhu cầu thực tế của bạn.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-line bg-navy-050">
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fbe9b7e9a?w=900&h=650&fit=crop&auto=format"
              alt="Không gian giao dịch hiện đại của Vietbank"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="soft">
        <SectionHead n="02" eyebrow="Giá trị cốt lõi" title="Điều định hình cách chúng tôi phục vụ" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Target, title: "Minh bạch", body: "Điều kiện, hồ sơ và biểu phí luôn rõ ràng trước khi khách hàng quyết định." },
            { icon: ShieldCheck, title: "An toàn", body: "Bảo vệ khách hàng bằng công nghệ xác thực và các kênh liên hệ chính thức." },
            { icon: HeartHandshake, title: "Đồng hành", body: "Lấy nhu cầu khách hàng làm trung tâm cho mọi sản phẩm và dịch vụ." },
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

      {/* Snapshot — quick identity answers */}
      <Section>
        <SectionHead n="03" eyebrow="Vietbank hôm nay" title="Một vài con số" />
        <div className="mt-6 grid divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Stat value="VBB" label="Mã cổ phiếu niêm yết trên HOSE" />
          <Stat value="2 nền tảng" label="Digital Plus cho cá nhân · DigiBiz cho doanh nghiệp" />
          <Stat value="24/7" label="Hỗ trợ khách hàng qua hotline chính thức 1800 1122" />
        </div>
        <p className="mt-3 text-[12.5px] text-ink-soft">Số liệu trình bày mang tính minh hoạ cho mục đích thiết kế.</p>
      </Section>

      {/* Network & coverage — answers "how big is the bank?" per corporate-website "scale" */}
      <Section tone="soft">
        <div className="flex items-end justify-between gap-3">
          <SectionHead
            n="04"
            eyebrow="Mạng lưới & Quy mô"
            title="Hiện diện trên 48 tỉnh thành"
          />
          <span className="hidden rounded border border-line bg-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft sm:inline-block">
            STATIC · Minh hoạ
          </span>
        </div>
        <div className="mt-6 grid divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {NETWORK.map((n) => (
            <div key={n.label} className="flex items-center gap-4 px-6 py-6">
              <Building2 className="h-8 w-8 shrink-0 text-navy" />
              <div>
                <div className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold tracking-tight text-navy tnum">
                  {n.value}
                </div>
                <div className="mt-1 text-[13.5px] leading-snug text-ink-soft">{n.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership — placeholder per corporate-website "leadership" guidance */}
      <Section>
        <SectionHead
          n="05"
          eyebrow="Ban lãnh đạo"
          title="Đội ngũ dẫn dắt Vietbank"
          lead="Thông tin chi tiết về Hội đồng quản trị và Ban điều hành được công bố trong mục Quan hệ nhà đầu tư."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {LEADERSHIP.map((p) => (
            <div key={p.role} className="flex items-center gap-4 rounded-xl border border-line bg-surface p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-050 font-display text-[15px] font-semibold text-navy">
                {p.initials}
              </span>
              <div>
                <div className="text-[15px] font-semibold">{p.name}</div>
                <div className="mt-0.5 text-[13px] text-ink-soft">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* News — distinct from Home, focused on company events */}
      <Section tone="soft">
        <div className="flex items-center justify-between gap-3">
          <SectionHead n="06" eyebrow="Tin tức & Thông báo" title="Cập nhật từ Vietbank" />
          <span className="rounded border border-line bg-surface px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink-soft">
            Nội dung minh hoạ
          </span>
        </div>
        <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
          {ABOUT_NEWS.map((n) => (
            <Link key={n.title} to={n.to} className="group flex items-start gap-4 py-4 transition-colors hover:bg-navy-050/60">
              <div className="flex w-24 shrink-0 flex-col">
                <span className="rounded border border-line bg-surface px-2 py-0.5 text-center text-[10.5px] font-semibold uppercase tracking-wide text-ink-soft">
                  {n.tag}
                </span>
                <span className="mt-1.5 text-center text-[11px] tnum text-ink-soft">{n.date}</span>
              </div>
              <p className="text-[15.5px] font-medium leading-snug text-ink group-hover:text-navy">{n.title}</p>
              <ArrowUpRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-navy" />
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <InlineLink to="/nha-dau-tu">Thông tin dành cho nhà đầu tư</InlineLink>
        </div>
      </Section>

      <CTABand
        title="Muốn tìm hiểu thêm về Vietbank?"
        body="Liên hệ với chúng tôi để được tư vấn sản phẩm, hoặc xem thông tin công bố dành cho nhà đầu tư."
        primary={{ label: "Liên hệ Vietbank", to: "/ho-tro" }}
        secondary={{ label: "Quan hệ nhà đầu tư", to: "/nha-dau-tu" }}
      />
    </>
  )
}
