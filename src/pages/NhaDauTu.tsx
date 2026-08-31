import { FileText, TrendingUp, Mail, Landmark } from "lucide-react"
import { PageHeader, BTN, BTN_SIZE, HOTLINE } from "../lib/ui"
import { Section, SectionHead, Stat } from "../lib/sections"

export default function NhaDauTu() {
  return (
    <>
      <PageHeader
        eyebrow="Quan hệ nhà đầu tư"
        crumb="Nhà đầu tư"
        title="Thông tin minh bạch cho cổ đông & nhà đầu tư"
        lead="Cổ phiếu Vietbank (VBB) niêm yết trên HOSE. Trang này tập hợp công bố thông tin, báo cáo và đầu mối liên hệ dành cho nhà đầu tư."
      />

      {/* Snapshot — clearly labelled static */}
      <Section>
        <div className="flex items-end justify-between gap-3">
          <SectionHead n="01" eyebrow="Cổ phiếu VBB" title="Tổng quan nhanh" />
          <span className="rounded border border-line bg-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
            STATIC · Minh hoạ
          </span>
        </div>
        <div className="mt-6 grid divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <Stat value="VBB" label="Mã chứng khoán" />
          <Stat value="HOSE" label="Sàn niêm yết" />
          <Stat value="15.200" label="Giá tham chiếu (đ) — số liệu mẫu" />
          <Stat value="+1,2%" label="Thay đổi phiên — số liệu mẫu" />
        </div>
        <p className="mt-3 text-[12.5px] text-ink-soft">
          Số liệu trên là nội dung mẫu minh hoạ, không phải dữ liệu thị trường thật. Vui lòng tham chiếu công bố chính thức.
        </p>
      </Section>

      {/* Reports */}
      <Section tone="soft">
        <SectionHead n="02" eyebrow="Tài liệu công bố" title="Báo cáo & Công bố thông tin" />
        <div className="mt-6 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {[
            { t: "Báo cáo tài chính quý II/2026", d: "31/07/2026" },
            { t: "Báo cáo thường niên 2025", d: "20/04/2026" },
            { t: "Nghị quyết Đại hội đồng cổ đông thường niên 2026", d: "26/04/2026" },
            { t: "Công bố thông tin bất thường — thay đổi nhân sự", d: "12/03/2026" },
          ].map((r) => (
            <a key={r.t} href="#" className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-navy-050">
              <FileText className="h-5 w-5 shrink-0 text-navy" />
              <span className="text-[15px] font-medium group-hover:text-navy">{r.t}</span>
              <span className="ml-auto hidden text-[13px] tnum text-ink-soft sm:block">{r.d}</span>
              <span className="text-[13px] font-semibold text-navy group-hover:underline">Tải PDF</span>
            </a>
          ))}
        </div>
        <p className="mt-3 text-[12.5px] text-ink-soft">Danh mục tài liệu là nội dung minh hoạ cho mục đích thiết kế.</p>
      </Section>

      {/* Governance + IR contact */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-7">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
              <Landmark className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold">Quản trị công ty</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              Vietbank thực hiện công bố thông tin theo quy định pháp luật và chuẩn mực quản trị công ty
              đại chúng, bảo đảm quyền lợi cổ đông và tính minh bạch.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-[14px] text-ink">
              {["Điều lệ & quy chế nội bộ", "Cơ cấu Hội đồng quản trị", "Lịch sự kiện cổ đông"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-navy" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-line bg-navy p-7 text-white">
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/15 text-yellow">
                <Mail className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold">Đầu mối quan hệ nhà đầu tư</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">
                Mọi thắc mắc về cổ phiếu, công bố thông tin và sự kiện cổ đông, vui lòng liên hệ bộ phận IR.
              </p>
              <div className="mt-4 space-y-1 text-[14.5px]">
                <div>Email: <span className="font-semibold text-white">ir@vietbank.com.vn</span></div>
                <div>Hotline: <span className="font-semibold text-white tnum">{HOTLINE}</span></div>
              </div>
            </div>
            <a href="mailto:ir@vietbank.com.vn" className={`mt-6 ${BTN.onDark} ${BTN_SIZE.lg} w-fit`}>
              <Mail className="h-4 w-4" /> Gửi email cho IR
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
