import { ArrowUpRight, Building2, ShieldCheck, Target, TrendingUp } from "lucide-react"
import { PageHeader } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"

const VALUES = [
  { n: "01", title: "Khách hàng là điểm bắt đầu", body: "Vietbank công bố định hướng thấu hiểu nhu cầu thực tế để xây dựng sản phẩm và dịch vụ phù hợp." },
  { n: "02", title: "Tăng trưởng đi cùng an toàn", body: "Phương châm Tăng trưởng — An toàn — Bền vững — Hiệu quả đặt kỷ luật vận hành cạnh mục tiêu kinh doanh." },
  { n: "03", title: "Chữ Tín trong quan hệ dài hạn", body: "Các hoạt động mạng lưới và truyền thông của Vietbank tiếp tục nhấn mạnh niềm tin, sự đồng hành và phát triển bền vững." },
]

const MILESTONES = [
  { year: "2007", title: "Khởi đầu", body: "Vietbank được thành lập, đặt nền móng cho hành trình phát triển ngân hàng thương mại cổ phần." },
  { year: "2024", title: "Mở rộng hiện diện", body: "Vietbank hoàn tất mở mới 14 điểm giao dịch, nâng mạng lưới lên 132 điểm trên toàn quốc." },
  { year: "2025", title: "Tăng năng lực vốn", body: "Vốn điều lệ được Vietbank công bố tăng lên 10.769 tỷ đồng trong tiến trình phát triển." },
  { year: "2026", title: "Bước vào HOSE", body: "Cổ phiếu VBB chính thức giao dịch trên HOSE từ ngày 14/07/2026." },
]

const NEWS = [
  { date: "28/08/2026", tag: "An toàn", title: "Cảnh giác với thủ đoạn giả mạo cơ quan nhà nước" },
  { date: "27/08/2026", tag: "Mạng lưới", title: "Thông báo thay đổi địa điểm Vietbank Bình Chánh" },
  { date: "26/08/2026", tag: "Dịch vụ", title: "Điều chỉnh phí dịch vụ biến động số dư qua SMS dành cho KHCN" },
  { date: "21/08/2026", tag: "Digital Plus", title: "Điều chỉnh nâng hạn mức giao dịch trên Vietbank Digital Plus" },
]

export default function VeVietbank() {
  return (
    <>
      <PageHeader
        eyebrow="Về Vietbank"
        crumb="Về Vietbank"
        title="Một ngân hàng Việt phát triển bằng niềm tin và kỷ luật"
        lead="Vietbank định hướng trở thành ngân hàng bán lẻ uy tín hàng đầu Việt Nam, kết hợp tăng trưởng, an toàn, bền vững và hiệu quả trong hành trình phát triển."
      />

      <Section>
        <div className="grid overflow-hidden border-y border-line bg-surface lg:grid-cols-[1.05fr_0.95fr]">
          <a href={OFFICIAL.branchLamDongStory} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[330px] overflow-hidden bg-soft lg:min-h-[460px]">
            <img src={OFFICIAL_MEDIA.branchLamDongTeam} alt="Tập thể Vietbank Chi nhánh Lâm Đồng do Vietbank công bố" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="eager" decoding="async" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/92 via-[#032f67]/35 to-transparent px-6 pb-5 pt-24 text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">Ảnh đội ngũ thật · Vietbank</p>
              <p className="mt-1 text-[13px] text-white/82">Chi nhánh Lâm Đồng trong hoạt động mở rộng mạng lưới.</p>
            </div>
          </a>
          <div className="flex flex-col justify-center px-6 py-9 lg:px-9 lg:py-12">
            <SectionHead
              n="01"
              eyebrow="Định hướng"
              title="Lấy nhu cầu thật làm điểm xuất phát"
              lead="Vietbank nhấn mạnh mô hình ngân hàng bán lẻ hiện đại, phát triển sản phẩm trên sự thấu hiểu khách hàng và duy trì các nguyên tắc an toàn, tuân thủ."
            />
            <blockquote className="mt-6 border-l-2 border-navy pl-5 text-[17px] font-medium leading-relaxed text-ink">“Tăng trưởng — An toàn — Bền vững — Hiệu quả”</blockquote>
            <p className="mt-2 text-[13px] text-ink-soft">Phương châm được Vietbank công bố trong hệ thống giới thiệu thương hiệu.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Tầm nhìn & giá trị cốt lõi", href: OFFICIAL.visionValues }} variant="secondary" />
              <ActionLink action={{ label: "Quá trình phát triển", href: OFFICIAL.development }} variant="ghost" />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHead n="02" eyebrow="Giá trị trong trải nghiệm" title="Thương hiệu không chỉ nằm ở màu sắc" lead="Những giá trị Vietbank công bố cần được nhìn thấy trong cách website tổ chức thông tin, điều hướng và dẫn sang nguồn chính thức." />
          <div className="border-y border-line bg-surface">
            {VALUES.map((item, index) => (
              <div key={item.n} className={`grid grid-cols-[42px_1fr] gap-3 px-5 py-4 ${index ? "border-t border-line" : ""}`}>
                <span className="text-[12.5px] font-semibold text-amber tnum">{item.n}</span>
                <div><h3 className="text-[15px] font-semibold">{item.title}</h3><p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{item.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead n="03" eyebrow="Hành trình phát triển" title="Bốn mốc để hiểu Vietbank hôm nay" lead="Mốc thời gian được lấy từ nội dung Vietbank công bố; số liệu theo thời điểm luôn được ghi trong ngữ cảnh tương ứng." />
        <ol className="mt-6 grid border-y border-line md:grid-cols-4 md:divide-x md:divide-line">
          {MILESTONES.map((item, index) => (
            <li key={item.year} className={`px-5 py-5 ${index ? "border-t border-line md:border-t-0" : ""}`}>
              <div className="font-display text-2xl font-semibold text-navy tnum">{item.year}</div>
              <h3 className="mt-2 text-[15px] font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <SectionHead n="04" eyebrow="Vietbank hôm nay" title="Ba dấu mốc dễ kiểm chứng" lead="Ưu tiên số liệu có nguồn và thời điểm rõ thay vì tạo dashboard doanh nghiệp giả." />
        <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
          <div className="bg-surface p-6"><Building2 className="h-5 w-5 text-navy" /><div className="mt-4 font-display text-3xl font-semibold text-navy tnum">132</div><p className="mt-1 text-[13px] leading-relaxed text-ink-soft">điểm giao dịch được Vietbank công bố sau kế hoạch mở rộng năm 2024.</p></div>
          <div className="bg-surface p-6"><Target className="h-5 w-5 text-navy" /><div className="mt-4 font-display text-3xl font-semibold text-navy tnum">10.769 tỷ</div><p className="mt-1 text-[13px] leading-relaxed text-ink-soft">vốn điều lệ được ghi nhận trong quá trình phát triển năm 2025.</p></div>
          <div className="bg-surface p-6"><TrendingUp className="h-5 w-5 text-navy" /><div className="mt-4 font-display text-3xl font-semibold text-navy">VBB · HOSE</div><p className="mt-1 text-[13px] leading-relaxed text-ink-soft">cổ phiếu Vietbank chính thức giao dịch trên HOSE từ 14/07/2026.</p></div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead n="05" eyebrow="Tin Vietbank" title="Cập nhật gần đây" lead="Tiêu đề/ngày giúp định hướng; nội dung đầy đủ tiếp tục trên kênh Vietbank chính thức." />
          <ActionLink action={{ label: "Xem tất cả tin Vietbank", href: OFFICIAL.news }} variant="secondary" size="sm" />
        </div>
        <div className="mt-6 border-y border-line">
          {NEWS.map((item, index) => (
            <a key={item.title} href={OFFICIAL.news} {...EXTERNAL_LINK_PROPS} className={`group grid gap-3 py-4 transition-colors hover:bg-navy-050 sm:grid-cols-[110px_120px_1fr_auto] sm:items-center sm:px-3 ${index ? "border-t border-line" : ""}`}>
              <span className="text-[12.5px] text-ink-soft tnum">{item.date}</span><span className="text-[12px] font-semibold uppercase tracking-[0.07em] text-ink-soft">{item.tag}</span><span className="text-[14.5px] font-medium group-hover:text-navy">{item.title}</span><ArrowUpRight className="h-4 w-4 text-navy" />
            </a>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionHead n="06" eyebrow="Minh bạch & quản trị" title="Đi sâu từ nguồn Vietbank" lead="Các tài liệu pháp lý, quản trị và cổ đông được giữ ở thư viện chính thức thay vì sao chép thành dữ liệu tĩnh khó cập nhật." />
          <div className="grid border-y border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-line">
            {[
              ['Quan hệ nhà đầu tư','Công bố, báo cáo và quản trị',OFFICIAL.investor],
              ['ĐHĐCĐ 2026','Kế hoạch và nghị quyết',OFFICIAL.agm2026],
              ['Liên hệ & mạng lưới','Địa chỉ, hotline, chi nhánh',OFFICIAL.contact],
            ].map(([title,body,href], index) => (
              <a key={title} href={href} {...EXTERNAL_LINK_PROPS} className={`group px-5 py-5 transition-colors hover:bg-navy-050 ${index ? "border-t border-line sm:border-t-0" : ""}`}>
                <ShieldCheck className="h-5 w-5 text-navy" /><h3 className="mt-3 text-[14.5px] font-semibold group-hover:text-navy">{title}</h3><p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{body}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <CTABand
        title="Tìm hiểu Vietbank từ nguồn chính thức"
        body="Trang này tạo bức tranh tổng quan; thông tin pháp lý, quản trị và dữ liệu cập nhật tiếp tục được quản lý trên website Vietbank."
        primary={{ label: "Xem giới thiệu Vietbank", href: OFFICIAL.about }}
        secondary={{ label: "Quan hệ nhà đầu tư", href: OFFICIAL.investor }}
      />
    </>
  )
}
