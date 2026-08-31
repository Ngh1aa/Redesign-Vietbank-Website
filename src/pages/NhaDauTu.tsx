import {
  Building2,
  Calendar,
  FileText,
  Landmark,
  TrendingUp,
  Users,
} from "lucide-react"

import { PageHeader } from "../lib/ui"

import { ActionLink, Section, SectionHead, CTABand } from "../lib/sections"

import { OFFICIAL } from "../lib/official"

const H1_2026 = [
  {
    label: "Lợi nhuận trước thuế",
    value: "923 tỷ",
    note: "+79,4% so với cùng kỳ",
  },

  {
    label: "Thu nhập lãi thuần",
    value: "1.747 tỷ",
    note: "+26% so với cùng kỳ",
  },

  { label: "Tổng tài sản", value: "205.000+ tỷ", note: "tại 30/06/2026" },

  { label: "Dư nợ cho vay", value: "120.294 tỷ", note: "tại 30/06/2026" },

  { label: "Tiền gửi khách hàng", value: "132.369 tỷ", note: "tại 30/06/2026" },
]

const IR_SECTIONS = [
  {
    icon: FileText,
    title: "Công bố thông tin",
    body: "Thông tin công bố theo nghĩa vụ của công ty đại chúng và tổ chức niêm yết.",
  },

  {
    icon: TrendingUp,
    title: "Báo cáo định kỳ",
    body: "Báo cáo tài chính, báo cáo thường niên và các báo cáo định kỳ do Vietbank công bố.",
  },

  {
    icon: Users,
    title: "Đại hội đồng cổ đông",
    body: "Tài liệu, nghị quyết và thông tin liên quan đến các kỳ Đại hội đồng cổ đông.",
  },

  {
    icon: Landmark,
    title: "Điều lệ & quản trị",
    body: "Điều lệ, quy chế nội bộ và tài liệu quản trị công ty.",
  },
]

export default function NhaDauTu() {
  return (
    <>
      <PageHeader
        eyebrow="Quan hệ nhà đầu tư"
        crumb="Nhà đầu tư"
        title="VBB trên HOSE với thông tin có mốc thời gian rõ ràng"
        lead="Theo dõi các mốc Vietbank đã công bố và tiếp tục tới thư viện Quan hệ nhà đầu tư chính thức."
      />

      <Section>
        <SectionHead
          n="01"
          eyebrow="Niêm yết"
          title="Cổ phiếu VBB chính thức giao dịch trên HOSE từ 14/07/2026"
          lead="Vietbank công bố gần 1,08 tỷ cổ phiếu VBB niêm yết trên Sở Giao dịch Chứng khoán TP.HCM. Giá theo phiên cần được kiểm tra từ nguồn dữ liệu thị trường."
        />
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {[
            ["VBB", "Mã chứng khoán"],
            ["HOSE", "Sàn niêm yết"],
            ["14/07/2026", "Ngày giao dịch chính thức"],
          ].map(([value, label]) => (
            <div key={label} className="bg-surface p-6">
              <div className="font-display text-3xl font-semibold text-navy tnum">
                {value}
              </div>
              <p className="mt-1 text-[13.5px] text-ink-soft">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <ActionLink
            action={{
              label: "Đọc công bố niêm yết",
              href: OFFICIAL.hoseListing,
            }}
            variant="secondary"
          />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHead
          n="02"
          eyebrow="Kết quả 6 tháng 2026"
          title="Snapshot từ công bố Vietbank"
          lead="Số liệu dưới đây là các con số Vietbank nêu trong thông tin kết quả nửa đầu năm và có ghi rõ mốc thời gian."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {H1_2026.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-line bg-surface p-5"
            >
              <Building2 className="h-5 w-5 text-navy" />
              <div className="mt-4 font-display text-2xl font-semibold text-navy tnum">
                {item.value}
              </div>
              <h3 className="mt-2 text-[13.5px] font-semibold text-ink">
                {item.label}
              </h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
                {item.note}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-[12.5px] leading-relaxed text-ink-soft">
          Mốc dữ liệu: 30/06/2026 hoặc 6 tháng đầu năm 2026 theo từng chỉ tiêu.
          Báo cáo/công bố gốc trên Vietbank là nguồn chi tiết.
        </p>
      </Section>

      <Section>
        <SectionHead
          n="03"
          eyebrow="Kế hoạch 2026"
          title="Các mục tiêu Vietbank đã công bố"
          lead="ĐHĐCĐ thường niên 2026 công bố các mục tiêu tăng trưởng; các con số dưới đây được trình bày như mục tiêu kế hoạch, không phải kết quả đã đạt."
        />
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {[
            ["+17%", "Mục tiêu tăng tổng tài sản"],
            ["+23,6%", "Mục tiêu tăng tín dụng"],
            ["+23,9%", "Mục tiêu tăng huy động"],
            ["2.100 tỷ", "Mục tiêu lợi nhuận trước thuế"],
          ].map(([value, label]) => (
            <div key={label} className="bg-surface p-6">
              <div className="font-display text-2xl font-semibold text-navy tnum">
                {value}
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <ActionLink
            action={{
              label: "Xem thông tin ĐHĐCĐ 2026",
              href: OFFICIAL.agm2026,
            }}
            variant="secondary"
          />
        </div>
      </Section>

      <Section tone="soft">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="04"
            eyebrow="Thư viện IR"
            title="Một điểm vào cho tài liệu nhà đầu tư"
            lead="Mở đúng thư viện Vietbank để tìm báo cáo, công bố thông tin và tài liệu quản trị đang được phát hành."
          />
          <ActionLink
            action={{
              label: "Mở Quan hệ nhà đầu tư Vietbank",
              href: OFFICIAL.investor,
            }}
            variant="secondary"
            size="sm"
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {IR_SECTIONS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold">{title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                {body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-line bg-surface p-7">
            <Calendar className="h-6 w-6 text-navy" />
            <h2 className="mt-4 font-display text-xl font-semibold">
              Sự kiện cổ đông
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              Không dựng lịch dự kiến khi chưa có công bố. Theo dõi mục Đại hội
              đồng cổ đông và công bố thông tin trên IR Vietbank.
            </p>
            <div className="mt-5">
              <ActionLink
                action={{ label: "Theo dõi trên IR", href: OFFICIAL.investor }}
                variant="ghost"
                size="sm"
              />
            </div>
          </article>
          <article className="rounded-xl border border-line bg-surface p-7">
            <Users className="h-6 w-6 text-navy" />
            <h2 className="mt-4 font-display text-xl font-semibold">
              Quản trị công ty
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              Điều lệ, quy chế và các tài liệu quản trị được tách thành nhóm
              riêng trong thư viện Nhà đầu tư.
            </p>
            <div className="mt-5">
              <ActionLink
                action={{
                  label: "Mở tài liệu quản trị",
                  href: OFFICIAL.investor,
                }}
                variant="ghost"
                size="sm"
              />
            </div>
          </article>
          <article className="rounded-xl border border-line bg-navy p-7 text-white">
            <TrendingUp className="h-6 w-6 text-yellow" />
            <h2 className="mt-4 font-display text-xl font-semibold">
              Nguyên tắc dữ liệu
            </h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">
              Không hiển thị giá VBB, biến động phiên, CAR/NPL hay lịch dự kiến
              nếu concept không có feed/công bố xác minh được.
            </p>
          </article>
        </div>
      </Section>

      <CTABand
        title="Mở nguồn công bố Vietbank"
        body="Các số liệu tóm tắt giúp định hướng nội dung. Báo cáo tài chính, nghị quyết và công bố chính thức được quản lý tại thư viện IR Vietbank."
        primary={{
          label: "Quan hệ nhà đầu tư Vietbank",
          href: OFFICIAL.investor,
        }}
        secondary={{
          label: "Công bố niêm yết VBB",
          href: OFFICIAL.hoseListing,
        }}
      />
    </>
  )
}
