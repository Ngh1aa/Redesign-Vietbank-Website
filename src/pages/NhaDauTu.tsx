import { ArrowUpRight, Calendar, FileText, Landmark, ShieldCheck, TrendingUp, Users } from "lucide-react"
import { PageHeader } from "../lib/ui"
import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"

const H1_2026 = [
  { label: "Lợi nhuận trước thuế", value: "923 tỷ", note: "+79,4% so với cùng kỳ" },
  { label: "Thu nhập lãi thuần", value: "1.747 tỷ", note: "+26% so với cùng kỳ" },
  { label: "Tổng tài sản", value: "205.000+ tỷ", note: "tại 30/06/2026" },
  { label: "Dư nợ cho vay", value: "120.294 tỷ", note: "tại 30/06/2026" },
  { label: "Tiền gửi khách hàng", value: "132.369 tỷ", note: "tại 30/06/2026" },
]

const IR_SECTIONS = [
  { icon: FileText, title: "Công bố thông tin", body: "Thông tin theo nghĩa vụ của công ty đại chúng và tổ chức niêm yết." },
  { icon: TrendingUp, title: "Báo cáo định kỳ", body: "Báo cáo tài chính, báo cáo thường niên và tài liệu định kỳ Vietbank công bố." },
  { icon: Users, title: "Đại hội đồng cổ đông", body: "Tài liệu, nghị quyết và thông tin liên quan các kỳ Đại hội đồng cổ đông." },
  { icon: Landmark, title: "Điều lệ & quản trị", body: "Điều lệ, quy chế nội bộ và các tài liệu quản trị công ty." },
]

export default function NhaDauTu() {
  return (
    <>
      <PageHeader
        eyebrow="Quan hệ nhà đầu tư"
        crumb="Nhà đầu tư"
        title="Thông tin VBB theo mốc công bố, không theo tiếng ồn thị trường"
        lead="Tập trung vào niêm yết, kết quả kinh doanh, kế hoạch cổ đông và thư viện công bố. Giá VBB theo phiên không hiển thị khi không có nguồn dữ liệu thị trường trực tiếp."
      />

      <Section>
        <div className="grid overflow-hidden border-y border-line bg-surface lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-6 py-8 lg:px-8 lg:py-10">
            <SectionHead
              n="01"
              eyebrow="Niêm yết"
              title="VBB chính thức giao dịch trên HOSE từ 14/07/2026"
              lead="Vietbank công bố gần 1,08 tỷ cổ phiếu VBB niêm yết trên Sở Giao dịch Chứng khoán TP.HCM."
            />
            <div className="mt-6 grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
              {[['VBB','Mã chứng khoán'],['HOSE','Sàn niêm yết'],['14/07/2026','Ngày giao dịch chính thức']].map(([value,label], index) => (
                <div key={label} className={`py-4 sm:px-4 ${index ? "border-t border-line sm:border-t-0" : ""}`}>
                  <strong className="block font-display text-xl font-semibold text-navy tnum">{value}</strong>
                  <span className="mt-1 block text-[12.5px] text-ink-soft">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5"><ActionLink action={{ label: "Đọc công bố niêm yết", href: OFFICIAL.hoseListing }} variant="secondary" /></div>
          </div>
          <a href={OFFICIAL.agm2026} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[300px] overflow-hidden bg-soft lg:min-h-[420px]">
            <img src={OFFICIAL_MEDIA.agm2026Scene} alt="Đoàn chủ tọa Đại hội đồng cổ đông thường niên Vietbank năm 2026" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="eager" decoding="async" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/92 via-[#032f67]/35 to-transparent px-6 pb-5 pt-20 text-white">
              <span className="text-[12px] font-semibold">Ảnh ĐHĐCĐ 2026 thật · Nguồn Vietbank</span>
            </div>
          </a>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="02"
          eyebrow="Kết quả 6 tháng 2026"
          title="Một dải số liệu, cùng một mốc thời gian"
          lead="Các con số dưới đây là dữ liệu Vietbank công bố cho nửa đầu năm 2026; báo cáo/công bố gốc vẫn là nguồn chi tiết."
        />
        <div className="mt-6 overflow-x-auto border-y border-line bg-surface">
          <div className="grid min-w-[900px] grid-cols-5 divide-x divide-line">
            {H1_2026.map((item) => (
              <div key={item.label} className="px-5 py-5">
                <div className="font-display text-[22px] font-semibold text-navy tnum">{item.value}</div>
                <h3 className="mt-2 text-[13px] font-semibold text-ink">{item.label}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-ink-soft">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft">Mốc dữ liệu: 30/06/2026 hoặc 6 tháng đầu năm 2026 tùy chỉ tiêu.</p>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SectionHead
              n="03"
              eyebrow="Kế hoạch 2026"
              title="Mục tiêu là định hướng, không phải kết quả đã đạt"
              lead="ĐHĐCĐ thường niên 2026 thông qua các mục tiêu tăng trưởng và kế hoạch lợi nhuận; website giữ rõ ranh giới giữa kế hoạch và kết quả."
            />
            <div className="mt-6 border-y border-line">
              {[
                ['+17%','Mục tiêu tăng tổng tài sản'],
                ['+23,6%','Mục tiêu tăng tín dụng'],
                ['+23,9%','Mục tiêu tăng huy động'],
                ['2.100 tỷ','Mục tiêu lợi nhuận trước thuế'],
              ].map(([value,label], index) => (
                <div key={label} className={`grid grid-cols-[120px_1fr] gap-4 py-3.5 ${index ? "border-t border-line" : ""}`}>
                  <strong className="font-display text-[19px] font-semibold text-navy tnum">{value}</strong><span className="text-[13.5px] text-ink-soft">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5"><ActionLink action={{ label: "Xem thông tin ĐHĐCĐ 2026", href: OFFICIAL.agm2026 }} variant="secondary" /></div>
          </div>
          <a href={OFFICIAL.agm2026} {...EXTERNAL_LINK_PROPS} className="group relative min-h-[300px] overflow-hidden bg-soft lg:min-h-[390px]">
            <img src={OFFICIAL_MEDIA.agm2026Overview} alt="Toàn cảnh Đại hội đồng cổ đông thường niên Vietbank năm 2026" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" decoding="async" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#032f67]/92 via-[#032f67]/30 to-transparent px-6 pb-5 pt-20 text-white"><span className="text-[12px] font-semibold">Toàn cảnh ĐHĐCĐ 2026 · Vietbank</span></div>
          </a>
        </div>
      </Section>

      <Section tone="soft">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="04"
            eyebrow="Thư viện nhà đầu tư"
            title="Đi thẳng đến loại tài liệu bạn cần"
            lead="Không dựng bản sao PDF hay lịch cổ đông giả; tài liệu luôn mở từ thư viện Vietbank đang quản lý."
          />
          <ActionLink action={{ label: "Mở thư viện nhà đầu tư", href: OFFICIAL.investor }} variant="secondary" size="sm" />
        </div>
        <div className="mt-6 border-y border-line bg-surface">
          {IR_SECTIONS.map(({ icon: Icon, title, body }, index) => (
            <a key={title} href={OFFICIAL.investor} {...EXTERNAL_LINK_PROPS} className={`group grid gap-3 px-5 py-4 transition-colors hover:bg-navy-050 sm:grid-cols-[40px_220px_1fr_auto] sm:items-center ${index ? "border-t border-line" : ""}`}>
              <Icon className="h-5 w-5 text-navy" aria-hidden="true" /><strong className="text-[14.5px] group-hover:text-navy">{title}</strong><span className="text-[13.5px] leading-relaxed text-ink-soft">{body}</span><ArrowUpRight className="h-4 w-4 text-navy" />
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid border-y border-line bg-surface lg:grid-cols-3 lg:divide-x lg:divide-line">
          <div className="px-5 py-5"><Calendar className="h-5 w-5 text-navy" /><h2 className="mt-3 text-[15px] font-semibold">Sự kiện cổ đông</h2><p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">Không dựng lịch dự kiến khi chưa có công bố; theo dõi nhóm ĐHĐCĐ và công bố thông tin chính thức.</p></div>
          <div className="border-t border-line px-5 py-5 lg:border-t-0"><Users className="h-5 w-5 text-navy" /><h2 className="mt-3 text-[15px] font-semibold">Quản trị công ty</h2><p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">Điều lệ, quy chế và tài liệu quản trị được giữ trong thư viện Nhà đầu tư.</p></div>
          <div className="border-t border-line bg-navy px-5 py-5 text-white lg:border-t-0"><ShieldCheck className="h-5 w-5 text-yellow" /><h2 className="mt-3 text-[15px] font-semibold">Nguyên tắc dữ liệu</h2><p className="mt-1.5 text-[13px] leading-relaxed text-white/70">Không hiển thị giá phiên, CAR/NPL hoặc lịch dự kiến khi chưa có nguồn dữ liệu/công bố có thể xác minh.</p></div>
        </div>
      </Section>

      <CTABand
        title="Mở nguồn công bố Vietbank"
        body="Các số liệu tóm tắt chỉ giúp định hướng. Báo cáo tài chính, nghị quyết và công bố chính thức được quản lý tại thư viện Nhà đầu tư Vietbank."
        primary={{ label: "Quan hệ nhà đầu tư Vietbank", href: OFFICIAL.investor }}
        secondary={{ label: "Công bố niêm yết VBB", href: OFFICIAL.hoseListing }}
      />
    </>
  )
}
