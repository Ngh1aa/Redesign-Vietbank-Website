import { useState, useId } from "react"
import { ChevronRight } from "lucide-react"
import { FX_RATES, SAVINGS_RATES, RATE_STAMP } from "../lib/data"
import { EXTERNAL_LINK_PROPS, OFFICIAL } from "../lib/official"

export default function RatesPanel() {
  const [tab, setTab] = useState<"fx" | "savings">("fx")
  const baseId = useId()
  const fxId = `${baseId}-fx`
  const svId = `${baseId}-savings`

  return (
    <div>
      <div className="flex justify-end">
        <div role="tablist" aria-label="Loại biểu lãi suất và tỷ giá" className="inline-flex rounded-lg border border-line bg-surface p-1">
          {(
            [
              ["fx", "Tỷ giá ngoại tệ", fxId],
              ["savings", "Lãi suất tiết kiệm", svId],
            ] as ["fx" | "savings", string, string][]
          ).map(([val, lbl, panelId]) => (
            <button
              key={val}
              role="tab"
              type="button"
              aria-selected={tab === val}
              aria-controls={panelId}
              id={`${baseId}-tab-${val}`}
              tabIndex={tab === val ? 0 : -1}
              onClick={() => setTab(val)}
              className={`rounded-md px-5 py-2.5 text-[14px] font-semibold transition-colors ${
                tab === val ? "bg-navy text-white" : "text-ink-soft hover:text-navy"
              }`}
            >
              {lbl}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
        {tab === "fx" ? (
          <table
            id={fxId}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-fx`}
            className="w-full text-left tnum"
          >
            <thead>
              <tr className="border-b border-line bg-navy-050 text-[12px] uppercase tracking-wide text-ink-soft">
                <th className="px-5 py-3.5 font-semibold">Ngoại tệ</th>
                <th className="px-5 py-3.5 text-right font-semibold">Mua tiền mặt</th>
                <th className="px-5 py-3.5 text-right font-semibold">Mua chuyển khoản</th>
                <th className="px-5 py-3.5 text-right font-semibold">Bán</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {FX_RATES.map((r) => (
                <tr key={r.code} className="border-b border-line transition-colors last:border-0 hover:bg-soft">
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-navy">{r.code}</span>
                    <span className="ml-2 text-[13px] text-ink-soft">{r.name}</span>
                  </td>
                  <td className="px-5 py-3.5 text-right text-ink">{r.buy}</td>
                  <td className="px-5 py-3.5 text-right text-ink">{r.transfer}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-navy">{r.sell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table
            id={svId}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-savings`}
            className="w-full text-left tnum"
          >
            <thead>
              <tr className="border-b border-line bg-navy-050 text-[12px] uppercase tracking-wide text-ink-soft">
                <th className="px-5 py-3.5 font-semibold">Kỳ hạn</th>
                <th className="px-5 py-3.5 text-right font-semibold">Trực tuyến (%/năm)</th>
                <th className="px-5 py-3.5 text-right font-semibold">Tại quầy (%/năm)</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {SAVINGS_RATES.map((r) => (
                <tr key={r.term} className="border-b border-line transition-colors last:border-0 hover:bg-soft">
                  <td className="px-5 py-3.5 font-semibold">{r.term}</td>
                  <td className="px-5 py-3.5 text-right font-semibold text-navy">{r.online}</td>
                  <td className="px-5 py-3.5 text-right text-ink">{r.counter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[13px] text-ink-soft">
        <span>{RATE_STAMP}</span>
        <a
          href={OFFICIAL.personalRates}
          {...EXTERNAL_LINK_PROPS}
          className="flex items-center gap-1.5 font-semibold text-navy hover:underline"
        >
          Xem biểu lãi suất Vietbank <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
