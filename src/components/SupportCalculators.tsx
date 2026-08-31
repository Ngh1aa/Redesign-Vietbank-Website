import { useMemo, useState } from "react"
import { Calculator, ExternalLink, Home, Info, PiggyBank } from "lucide-react"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"
import { Section, SectionHead } from "../lib/sections"

const money = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
})

function toPositiveNumber(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null
}

function NumberField({
  id,
  label,
  value,
  onChange,
  suffix,
  placeholder,
  max,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  suffix: string
  placeholder: string
  max?: number
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[13px] font-semibold text-ink">{label}</label>
      <div className="mt-1.5 flex min-h-11 overflow-hidden rounded-md border border-line bg-paper focus-within:border-navy focus-within:ring-2 focus-within:ring-navy/15">
        <input
          id={id}
          type="number"
          min="0"
          max={max}
          step="any"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-[14px] text-ink outline-none placeholder:text-ink-soft/60"
        />
        <span className="grid shrink-0 place-items-center border-l border-line bg-soft px-3 text-[12.5px] font-medium text-ink-soft" aria-hidden="true">{suffix}</span>
      </div>
    </div>
  )
}

export default function SupportCalculators() {
  const [savingAmount, setSavingAmount] = useState("")
  const [savingMonths, setSavingMonths] = useState("")
  const [savingRate, setSavingRate] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [loanMonths, setLoanMonths] = useState("")
  const [loanRate, setLoanRate] = useState("")

  const savingResult = useMemo(() => {
    const principal = toPositiveNumber(savingAmount)
    const months = toPositiveNumber(savingMonths)
    const annualRate = toPositiveNumber(savingRate)
    if (!principal || !months || !annualRate) return null
    const interest = principal * (annualRate / 100) * (months / 12)
    return { interest, total: principal + interest }
  }, [savingAmount, savingMonths, savingRate])

  const loanResult = useMemo(() => {
    const principal = toPositiveNumber(loanAmount)
    const months = toPositiveNumber(loanMonths)
    const annualRate = toPositiveNumber(loanRate)
    if (!principal || !months || !annualRate) return null

    const monthCount = Math.max(1, Math.round(months))
    const monthlyPrincipal = principal / monthCount
    const monthlyRate = annualRate / 100 / 12
    const totalInterest = monthlyRate * principal * ((monthCount + 1) / 2)
    const firstPayment = monthlyPrincipal + principal * monthlyRate
    const lastPayment = monthlyPrincipal + monthlyPrincipal * monthlyRate

    return {
      firstPayment,
      lastPayment,
      totalInterest,
      totalPayment: principal + totalInterest,
    }
  }, [loanAmount, loanMonths, loanRate])

  return (
    <Section id="calculators" tone="soft">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <SectionHead
          n="02"
          eyebrow="Ước tính nhanh"
          title="Tính thử trước, kiểm tra lại trên công cụ Vietbank"
          lead="Hai bảng tính bên dưới chạy hoàn toàn trong trình duyệt và không gửi dữ liệu đi đâu. Bạn tự nhập lãi suất tham khảo từ Vietbank; kết quả chỉ giúp lập kế hoạch sơ bộ."
        />
        <a
          href={OFFICIAL.personalCalculator}
          {...EXTERNAL_LINK_PROPS}
          className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy hover:underline"
        >
          Mở công cụ Vietbank <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-7 grid gap-5 xl:grid-cols-2">
        <article className="border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy-050 text-navy"><PiggyBank className="h-5 w-5" aria-hidden="true" /></span>
            <div>
              <h3 className="text-[17px] font-semibold">Ước tính lãi tiết kiệm cuối kỳ</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">Mô hình lãi đơn: tiền gửi × lãi suất năm × thời gian gửi. Không áp dụng cho mọi cơ chế trả lãi hoặc rút trước hạn.</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <NumberField id="saving-amount" label="Số tiền gửi" value={savingAmount} onChange={setSavingAmount} suffix="VND" placeholder="100000000" />
            <NumberField id="saving-months" label="Kỳ hạn" value={savingMonths} onChange={setSavingMonths} suffix="tháng" placeholder="12" max={600} />
            <NumberField id="saving-rate" label="Lãi suất năm" value={savingRate} onChange={setSavingRate} suffix="%/năm" placeholder="6.5" max={100} />
          </div>

          <div className="mt-5 border-t border-line pt-5" aria-live="polite">
            {savingResult ? (
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-soft p-4"><span className="text-[12.5px] text-ink-soft">Tiền lãi ước tính</span><strong className="mt-1 block text-[18px] text-ink tnum">{money.format(savingResult.interest)}</strong></div>
                <div className="bg-soft p-4"><span className="text-[12.5px] text-ink-soft">Gốc + lãi ước tính</span><strong className="mt-1 block text-[18px] text-ink tnum">{money.format(savingResult.total)}</strong></div>
              </div>
            ) : (
              <p className="text-[13.5px] text-ink-soft">Nhập số tiền, kỳ hạn và lãi suất để xem ước tính.</p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
            <a href={OFFICIAL.personalRates} {...EXTERNAL_LINK_PROPS} className="font-semibold text-navy hover:underline">Xem lãi suất Vietbank</a>
            <a href={OFFICIAL.personalCalculator} {...EXTERNAL_LINK_PROPS} className="font-semibold text-navy hover:underline">Đối chiếu công cụ chính thức</a>
          </div>
        </article>

        <article className="border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-navy-050 text-navy"><Home className="h-5 w-5" aria-hidden="true" /></span>
            <div>
              <h3 className="text-[17px] font-semibold">Ước tính khoản trả theo dư nợ giảm dần</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">Giả định gốc chia đều mỗi tháng và lãi tính trên dư nợ đầu kỳ. Số thực tế có thể khác do ngày tính lãi, phí, phương thức trả nợ và lãi suất áp dụng.</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <NumberField id="loan-amount" label="Số tiền vay" value={loanAmount} onChange={setLoanAmount} suffix="VND" placeholder="1000000000" />
            <NumberField id="loan-months" label="Thời hạn" value={loanMonths} onChange={setLoanMonths} suffix="tháng" placeholder="120" max={600} />
            <NumberField id="loan-rate" label="Lãi suất năm" value={loanRate} onChange={setLoanRate} suffix="%/năm" placeholder="9.5" max={100} />
          </div>

          <div className="mt-5 border-t border-line pt-5" aria-live="polite">
            {loanResult ? (
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="bg-soft p-4"><span className="text-[12.5px] text-ink-soft">Kỳ đầu ước tính</span><strong className="mt-1 block text-[18px] text-ink tnum">{money.format(loanResult.firstPayment)}</strong></div>
                <div className="bg-soft p-4"><span className="text-[12.5px] text-ink-soft">Kỳ cuối ước tính</span><strong className="mt-1 block text-[18px] text-ink tnum">{money.format(loanResult.lastPayment)}</strong></div>
                <div className="bg-soft p-4"><span className="text-[12.5px] text-ink-soft">Tổng lãi ước tính</span><strong className="mt-1 block text-[18px] text-ink tnum">{money.format(loanResult.totalInterest)}</strong></div>
                <div className="bg-soft p-4"><span className="text-[12.5px] text-ink-soft">Tổng gốc + lãi</span><strong className="mt-1 block text-[18px] text-ink tnum">{money.format(loanResult.totalPayment)}</strong></div>
              </div>
            ) : (
              <p className="text-[13.5px] text-ink-soft">Nhập số tiền vay, thời hạn và lãi suất để xem ước tính.</p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
            <a href={OFFICIAL.personalCalculator} {...EXTERNAL_LINK_PROPS} className="font-semibold text-navy hover:underline">Đối chiếu công cụ Vietbank</a>
            <a href={OFFICIAL.branches} {...EXTERNAL_LINK_PROPS} className="font-semibold text-navy hover:underline">Tìm điểm tư vấn</a>
          </div>
        </article>
      </div>

      <div className="mt-5 flex items-start gap-3 border-l-2 border-yellow bg-amber-soft px-4 py-3 text-[13px] leading-relaxed text-ink-soft">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
        <p><strong className="text-ink">Ranh giới hệ thống:</strong> các phép tính trên là STATIC/LOCAL, không lấy dữ liệu lãi suất thời gian thực và không xác định khả năng được cấp tín dụng. Vietbank cũng ghi rõ công cụ tính của ngân hàng chỉ mang tính tham khảo.</p>
      </div>
    </Section>
  )
}
