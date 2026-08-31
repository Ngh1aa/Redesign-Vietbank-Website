import { ArrowUpRight, Target, HeartHandshake, ShieldCheck } from "lucide-react"
import { Link } from "react-router"
import { PageHeader } from "../lib/ui"
import { Section, SectionHead, CTABand, Stat, InlineLink } from "../lib/sections"

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

      {/* Snapshot */}
      <Section>
        <SectionHead n="03" eyebrow="Vietbank hôm nay" title="Một vài con số" />
        <div className="mt-6 grid divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Stat value="VBB" label="Mã cổ phiếu niêm yết trên HOSE" />
          <Stat value="2 nền tảng" label="Digital Plus cho cá nhân · DigiBiz cho doanh nghiệp" />
          <Stat value="24/7" label="Hỗ trợ khách hàng qua hotline chính thức 1800 1122" />
        </div>
        <p className="mt-3 text-[12.5px] text-ink-soft">Số liệu trình bày mang tính minh hoạ cho mục đích thiết kế.</p>
      </Section>

      {/* News */}
      <Section tone="soft">
        <div className="flex items-center justify-between gap-3">
          <SectionHead n="04" eyebrow="Tin tức & Thông báo" title="Cập nhật từ Vietbank" />
          <span className="rounded border border-line bg-surface px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink-soft">
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
            <a key={n.title} href="#" className="group flex items-start gap-4 py-4 transition-colors hover:bg-navy-050/60">
              <div className="flex w-24 shrink-0 flex-col">
                <span className="rounded border border-line bg-surface px-2 py-0.5 text-center text-[10.5px] font-semibold uppercase tracking-wide text-ink-soft">
                  {n.tag}
                </span>
                <span className="mt-1.5 text-center text-[11px] tnum text-ink-soft">{n.date}</span>
              </div>
              <p className="text-[15.5px] font-medium leading-snug text-ink group-hover:text-navy">{n.title}</p>
              <ArrowUpRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-navy" />
            </a>
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
