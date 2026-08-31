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
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center">
            <SectionHead
              n="01"
              eyebrow="Định hướng"
              title="Một ngân hàng bán lẻ lấy khách hàng làm trọng tâm"
              lead="Tầm nhìn, chính sách chất lượng và định hướng phục vụ được trình bày ngắn gọn, kèm đường dẫn tới nguồn Vietbank để đọc đầy đủ."
            />
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Trên trang giới thiệu chính thức, Vietbank nhấn mạnh xây dựng ngân hàng bán lẻ hiện đại, tăng trưởng an toàn và hiệu quả; đồng thời phát triển sản phẩm dựa trên sự thấu hiểu nhu cầu khách hàng.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink action={{ label: "Đọc tầm nhìn & giá trị cốt lõi", href: OFFICIAL.visionValues }} variant="secondary" />
              <ActionLink action={{ label: "Xem giới thiệu Vietbank", href: OFFICIAL.about }} variant="ghost" />
            </div>
          </div>

          <aside className="border border-line bg-navy-050 p-6 sm:p-7" aria-label="Các điểm chính về Vietbank">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Thông tin nổi bật</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">Điểm vào để tìm hiểu Vietbank</h2>
              </div>
              <span className="flex h-1 w-12 overflow-hidden" aria-hidden="true"><span className="w-1/2 bg-red" /><span className="w-1/2 bg-yellow" /></span>
            </div>
            <div className="divide-y divide-line">
              <div className="grid grid-cols-[34px_1fr] gap-3 py-4">
                <span className="text-[13px] font-semibold text-amber tnum">01</span>
                <div><strong className="block text-[15px] text-ink">Tầm nhìn & giá trị</strong><p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">Định hướng thương hiệu, sứ mệnh và các giá trị cốt lõi Vietbank công bố.</p></div>
              </div>
              <div className="grid grid-cols-[34px_1fr] gap-3 py-4">
                <span className="text-[13px] font-semibold text-amber tnum">02</span>
                <div><strong className="block text-[15px] text-ink">Chính sách chất lượng</strong><p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">Định hướng xây dựng ngân hàng bán lẻ đa năng, hiện đại và phù hợp chuẩn mực quốc tế.</p></div>
              </div>
              <div className="grid grid-cols-[34px_1fr] gap-3 py-4">
                <span className="text-[13px] font-semibold text-amber tnum">03</span>
                <div><strong className="block text-[15px] text-ink">Mạng lưới 127 điểm giao dịch</strong><p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">Mạng lưới hiện diện tại các vùng kinh tế trọng điểm trên toàn quốc theo Vietbank.</p></div>
              </div>
            </div>
          </aside>
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
          title="Số liệu có mốc thời gian rõ ràng"
          lead="Các con số bên dưới chỉ dùng dữ liệu Vietbank đã công bố và ghi rõ thời điểm để người đọc dễ kiểm tra nguồn."
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
          <ActionLink action={{ label: "Đọc thông tin niêm yết VBB", href: OFFICIAL.hoseListing }} variant="ghost" />
        </div>
      </Section>

      <Section tone="soft">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="04"
            eyebrow="Tin Vietbank"
            title="Cập nhật gần đây"
            lead="Danh sách dùng tiêu đề và ngày đang hiển thị trên kênh tin tức Vietbank; nhấn vào để tiếp tục xem nội dung trên nguồn chính thức."
          />
          <ActionLink action={{ label: "Xem tất cả tin Vietbank", href: OFFICIAL.news }} variant="secondary" size="sm" />
        </div>
        <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
          {NEWS.map((item) => (
            <a key={item.title} href={OFFICIAL.news} {...EXTERNAL_LINK_PROPS} className="group flex items-start gap-4 py-4 transition-colors hover:bg-navy-050/60">
              <div className="w-28 shrink-0">
                <span className="block rounded border border-line bg-surface px-2 py-1 text-center text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-soft">{item.tag}</span>
                <span className="mt-1.5 block text-center text-[12.5px] tnum text-ink-soft">{item.date}</span>
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
          lead="Thông tin quản trị, công bố và đại hội cổ đông được dẫn sang luồng Nhà đầu tư để người đọc tiếp tục trên tài liệu Vietbank đang quản lý."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Quan hệ nhà đầu tư", body: "Công bố thông tin, báo cáo định kỳ, điều lệ và quản trị công ty.", action: { label: "Mở Quan hệ nhà đầu tư", href: OFFICIAL.investor } },
            { title: "ĐHĐCĐ 2026", body: "Thông tin về Đại hội đồng cổ đông thường niên 2026 và các mục tiêu tăng trưởng đã thông qua.", action: { label: "Xem tài liệu ĐHĐCĐ 2026", href: OFFICIAL.agm2026 } },
            { title: "Liên hệ & mạng lưới", body: "Địa chỉ, hotline, email và công cụ tìm chi nhánh/PGD do Vietbank quản lý.", action: { label: "Xem kênh liên hệ Vietbank", href: OFFICIAL.contact } },
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
        body="Trang này giúp bạn đi nhanh tới thông tin phù hợp; nội dung pháp lý, công bố doanh nghiệp và dữ liệu cập nhật được quản lý trên website Vietbank."
        primary={{ label: "Xem giới thiệu Vietbank", href: OFFICIAL.about }}
        secondary={{ label: "Mở Quan hệ nhà đầu tư", href: OFFICIAL.investor }}
      />
    </>
  )
}
