import { ArrowUpRight, Building2, HeartHandshake, ShieldCheck, Target, TrendingUp } from "lucide-react"
import { PageHeader } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"

const VALUES = [
  { icon: HeartHandshake, title: "Nhu cầu khách hàng là trung tâm", body: "Vietbank công bố định hướng thấu hiểu nhu cầu khách hàng để xây dựng sản phẩm và dịch vụ phù hợp." },
  { icon: ShieldCheck, title: "An toàn & tuân thủ", body: "Ngân hàng nhấn mạnh an toàn, kiểm soát rủi ro và tuân thủ trong quá trình tăng trưởng." },
  { icon: Target, title: "Hiệu quả bền vững", body: "Phương châm được Vietbank công bố: Tăng trưởng — An toàn — Bền vững — Hiệu quả." },
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
        title="Ngân hàng TMCP Việt Nam Thương Tín"
        lead="Vietbank định hướng trở thành ngân hàng bán lẻ uy tín hàng đầu Việt Nam, với phương châm Tăng trưởng — An toàn — Bền vững — Hiệu quả."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHead
              n="01"
              eyebrow="Định hướng"
              title="Một ngân hàng bán lẻ lấy khách hàng làm trọng tâm"
              lead="V6 giữ câu chuyện corporate ngắn và có thể kiểm chứng: tầm nhìn, sứ mệnh, phương châm và các điểm vào chính thức để đọc sâu hơn."
            />
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Trên trang giới thiệu chính thức, Vietbank nhấn mạnh xây dựng ngân hàng bán lẻ hiện đại, tăng trưởng an toàn và hiệu quả; đồng thời phát triển sản phẩm dựa trên sự thấu hiểu nhu cầu khách hàng.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Tầm nhìn & giá trị cốt lõi", href: OFFICIAL.visionValues }} variant="secondary" />
              <ActionLink action={{ label: "Trang giới thiệu Vietbank", href: OFFICIAL.about }} variant="ghost" />
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-line bg-navy-050">
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fbe9b7e9a?w=900&h=650&fit=crop&auto=format"
              alt="Không gian văn phòng và giao dịch ngân hàng hiện đại — ảnh minh hoạ cho concept"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-6 pt-16 text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Ảnh minh hoạ concept</p>
              <p className="mt-1 text-[14px] leading-relaxed text-white/80">Không đại diện cho một chi nhánh Vietbank cụ thể.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead n="02" eyebrow="Nguyên tắc phục vụ" title="Chuyển giá trị thương hiệu thành trải nghiệm số" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-xl border border-line bg-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          n="03"
          eyebrow="Quy mô hiện tại"
          title="Dùng số liệu có mốc thời gian rõ ràng"
          lead="Thay vì các con số STATIC không nguồn, V6 chỉ hiển thị dữ liệu Vietbank đã công bố và ghi rõ thời điểm."
        />
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          <div className="bg-surface p-6">
            <Building2 className="h-6 w-6 text-navy" />
            <div className="mt-4 font-display text-3xl font-semibold text-navy tnum">127</div>
            <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">điểm giao dịch trên toàn quốc theo trang giới thiệu Vietbank.</p>
          </div>
          <div className="bg-surface p-6">
            <TrendingUp className="h-6 w-6 text-navy" />
            <div className="mt-4 font-display text-3xl font-semibold text-navy">VBB</div>
            <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">cổ phiếu Vietbank chính thức niêm yết HOSE từ 14/07/2026.</p>
          </div>
          <div className="bg-surface p-6">
            <Target className="h-6 w-6 text-navy" />
            <div className="mt-4 font-display text-3xl font-semibold text-navy tnum">205.000+ tỷ</div>
            <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">tổng tài sản tại 30/06/2026 theo công bố kết quả 6 tháng đầu năm.</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <ActionLink action={{ label: "Xem mạng lưới Vietbank", href: OFFICIAL.branches }} variant="secondary" />
          <ActionLink action={{ label: "Thông tin niêm yết VBB", href: OFFICIAL.hoseListing }} variant="ghost" />
        </div>
      </Section>

      <Section tone="soft">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="04"
            eyebrow="Tin Vietbank"
            title="Cập nhật gần đây"
            lead="Không tự biên tập sự kiện corporate. Danh sách dưới đây dùng tiêu đề và ngày đang hiển thị trên kênh tin tức Vietbank."
          />
          <ActionLink action={{ label: "Mở trung tâm tin tức", href: OFFICIAL.news }} variant="secondary" size="sm" />
        </div>
        <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
          {NEWS.map((item) => (
            <a key={item.title} href={OFFICIAL.news} {...EXTERNAL_LINK_PROPS} className="group flex items-start gap-4 py-4 transition-colors hover:bg-navy-050/60">
              <div className="w-24 shrink-0">
                <span className="block rounded border border-line bg-surface px-2 py-0.5 text-center text-[10.5px] font-semibold uppercase tracking-wide text-ink-soft">{item.tag}</span>
                <span className="mt-1.5 block text-center text-[11px] tnum text-ink-soft">{item.date}</span>
              </div>
              <p className="text-[15.5px] font-medium leading-snug text-ink group-hover:text-navy">{item.title}</p>
              <ArrowUpRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-ink-soft group-hover:text-navy" />
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          n="05"
          eyebrow="Minh bạch & quản trị"
          title="Đi sâu theo đúng nguồn"
          lead="Thông tin quản trị, công bố và đại hội cổ đông thuộc luồng Nhà đầu tư; V6 không dựng danh sách lãnh đạo placeholder."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Quan hệ nhà đầu tư", body: "Công bố thông tin, báo cáo định kỳ, điều lệ và quản trị công ty.", action: { label: "Mở IR Vietbank", href: OFFICIAL.investor } },
            { title: "ĐHĐCĐ 2026", body: "Thông tin về Đại hội đồng cổ đông thường niên 2026 và các mục tiêu tăng trưởng đã thông qua.", action: { label: "Xem công bố", href: OFFICIAL.agm2026 } },
            { title: "Liên hệ & mạng lưới", body: "Địa chỉ, hotline, email và công cụ tìm chi nhánh/PGD do Vietbank quản lý.", action: { label: "Kênh liên hệ", href: OFFICIAL.contact } },
          ].map((item) => (
            <article key={item.title} className="flex flex-col rounded-xl border border-line bg-surface p-6">
              <ShieldCheck className="h-5 w-5 text-navy" />
              <h3 className="mt-4 text-[16px] font-semibold">{item.title}</h3>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-soft">{item.body}</p>
              <div className="mt-4"><ActionLink action={item.action} variant="ghost" size="sm" /></div>
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        title="Tìm hiểu Vietbank từ nguồn chính thức"
        body="Concept này tối ưu cách định tuyến và trình bày. Thông tin pháp lý, công bố doanh nghiệp và dữ liệu cập nhật luôn tiếp tục trên website Vietbank."
        primary={{ label: "Về Vietbank", href: OFFICIAL.about }}
        secondary={{ label: "Quan hệ nhà đầu tư", href: OFFICIAL.investor }}
      />
    </>
  )
}
