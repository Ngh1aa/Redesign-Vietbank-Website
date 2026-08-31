import { FileText, TrendingUp, Mail, Landmark, Calendar, Users } from "lucide-react"
import { Link } from "react-router"
import { PageHeader, BTN, BTN_SIZE, HOTLINE } from "../lib/ui"
import { Section, SectionHead, Stat } from "../lib/sections"

/* Financial highlights — clearly labelled STATIC, mirrors corporate IR convention */
const FINANCIAL_HIGHLIGHTS = [
  { metric: "Tổng tài sản", q1: "182.4", q2: "186.1", unit: "nghìn tỷ đ" },
  { metric: "Vốn chủ sở hữu", q1: "21.3", q2: "22.0", unit: "nghìn tỷ đ" },
  { metric: "Tỷ lệ CAR", q1: "12.4%", q2: "12.8%", unit: "" },
  { metric: "Tỷ lệ NPL", q1: "1.42%", q2: "1.36%", unit: "" },
]

/* Investor calendar — STATIC, illustrative */
const CALENDAR = [
  { date: "30/10/2026", event: "Công bố BCTC quý III/2026" },
  { date: "15/01/2027", event: "Họp Đại hội đồng cổ đông bất thường (dự kiến)" },
  { date: "20/04/2027", event: "Đại hội đồng cổ đông thường niên 2027 (dự kiến)" },
]

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

      {/* Financial highlights — answers "how is the bank doing?" per IR convention */}
      <Section tone="soft">
        <div className="flex items-end justify-between gap-3">
          <SectionHead
            n="02"
            eyebrow="Chỉ số tài chính"
            title="Kết quả kinh doanh quý gần nhất"
          />
          <span className="rounded border border-line bg-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
            STATIC · Minh hoạ
          </span>
        </div>
        <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="w-full min-w-160 text-left tnum">
            <thead>
              <tr className="border-b border-line bg-navy-050 text-[12.5px] uppercase tracking-wide text-ink-soft">
                <th className="px-5 py-3.5 font-semibold">Chỉ số</th>
                <th className="px-5 py-3.5 text-right font-semibold">Quý I/2026</th>
                <th className="px-5 py-3.5 text-right font-semibold">Quý II/2026</th>
              </tr>
            </thead>
            <tbody className="text-[14.5px]">
              {FINANCIAL_HIGHLIGHTS.map((row, i) => (
                <tr key={row.metric} className={`border-b border-line last:border-0 ${i % 2 === 1 ? "bg-soft/40" : ""}`}>
                  <td className="px-5 py-3.5 font-medium">
                    {row.metric}
                    {row.unit && <span className="ml-1 text-[13px] text-ink-soft">({row.unit})</span>}
                  </td>
                  <td className="px-5 py-3.5 text-right text-ink-soft">{row.q1}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-navy">{row.q2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12.5px] text-ink-soft">Số liệu minh hoạ cho mục đích thiết kế. Số liệu chính thức xem trong báo cáo tài chính.</p>
      </Section>

      {/* Reports */}
      <Section>
        <SectionHead n="03" eyebrow="Tài liệu công bố" title="Báo cáo & Công bố thông tin" />
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

      {/* Calendar + Governance + IR contact */}
      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Calendar */}
          <div className="rounded-xl border border-line bg-surface p-7">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
              <Calendar className="h-5 w-5" />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold">Lịch sự kiện cổ đông</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
              Các mốc công bố và sự kiện quan trọng trong năm tài chính.
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-[14px]">
              {CALENDAR.map((c) => (
                <li key={c.date} className="flex items-start gap-3 border-b border-line pb-3 last:border-0 last:pb-0">
                  <span className="mt-0.5 shrink-0 rounded border border-line bg-soft px-2 py-0.5 text-[11px] font-semibold tnum text-ink">
                    {c.date}
                  </span>
                  <span className="leading-snug text-ink">{c.event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance */}
          <div className="rounded-xl border border-line bg-surface p-7">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy-050 text-navy">
              <Users className="h-5 w-5" />
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

          {/* IR contact */}
          <div className="flex flex-col rounded-xl border border-line bg-navy p-7 text-white">
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
            <a href="mailto:ir@vietbank.com.vn" className={`mt-6 ${BTN.onDark} ${BTN_SIZE.sm} w-fit`}>
              <Mail className="h-4 w-4" /> Gửi email cho IR
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
