import { useState } from "react"
import { ChevronRight, Calculator } from "lucide-react"
import { FX_RATES, SAVINGS_RATES, RATE_STAMP } from "../lib/data"

export default function RatesPanel() {
  const [tab, setTab] = useState<"fx" | "savings">("fx")

  return (
    <div>
      <div className="flex justify-end">
        <div className="inline-flex rounded-lg border border-line bg-surface p-1">
          {(
            [
              ["fx", "Tỷ giá ngoại tệ"],
              ["savings", "Lãi suất tiết kiệm"],
            ] as ["fx" | "savings", string][]
          ).map(([val, lbl]) => (
            <button
              key={val}
              onClick={() => setTab(val)}
              aria-pressed={tab === val}
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
          <table className="w-full text-left tnum">
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
          <table className="w-full text-left tnum">
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
        <div className="flex gap-4 font-semibold">
          <a href="#" className="flex items-center gap-1.5 text-navy hover:underline">
            <Calculator className="h-4 w-4" /> Công cụ tính lãi
          </a>
          <a href="#" className="flex items-center gap-1.5 text-navy hover:underline">
            Bảng đầy đủ <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
