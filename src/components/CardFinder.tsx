import { useMemo, useState } from "react"
import { Check, ExternalLink, GitCompareArrows, RotateCcw, SlidersHorizontal, X } from "lucide-react"
import { useSearchParams } from "react-router"
import { EXTERNAL_LINK_PROPS, OFFICIAL, OFFICIAL_MEDIA } from "../lib/official"
import { ActionLink, Section, SectionHead } from "../lib/sections"

const NEEDS = [
  { id: "everyday", label: "Chi tiêu thường ngày" },
  { id: "travel", label: "Du lịch / phòng chờ" },
  { id: "family", label: "Gia đình / thẻ phụ" },
  { id: "health", label: "Chăm sóc sức khỏe" },
  { id: "annual-fee", label: "Ưu tiên hoàn phí thường niên" },
] as const

type NeedId = (typeof NEEDS)[number]["id"]
type CardId = "my-style" | "luxury" | "happy" | "lifecare"

type CardProduct = {
  id: CardId
  index: string
  shortName: string
  name: string
  tag: string
  desc: string
  needs: NeedId[]
  points: string[]
  interestFree: string
  creditLimit: string
  differentiator: string
  annualFeeDirection: string
  href: string
  image: string
  imageAlt: string
}

const CARDS: CardProduct[] = [
  {
    id: "my-style",
    index: "01",
    shortName: "Visa My Style",
    name: "Vietbank Visa My Style",
    tag: "Chi tiêu linh hoạt",
    desc: "Phù hợp để bắt đầu từ nhu cầu chi tiêu hằng ngày, với cơ chế hoàn phí thường niên theo doanh số được Vietbank công bố.",
    needs: ["everyday", "annual-fee"],
    points: ["Miễn lãi tối đa 55 ngày", "Hạn mức công bố 10–500 triệu", "Hoàn phí thường niên theo điều kiện doanh số"],
    interestFree: "Tối đa 55 ngày",
    creditLimit: "10–500 triệu",
    differentiator: "Chi tiêu hằng ngày",
    annualFeeDirection: "Có cơ chế hoàn phí theo doanh số",
    href: OFFICIAL.cardMyStyle,
    image: OFFICIAL_MEDIA.cardMyStyle,
    imageAlt: "Thẻ tín dụng Vietbank Visa My Style",
  },
  {
    id: "luxury",
    index: "02",
    shortName: "Visa Luxury",
    name: "Vietbank Visa Luxury Platinum",
    tag: "Đặc quyền & du lịch",
    desc: "Dòng thẻ cao cấp dành cho người ưu tiên đặc quyền, với chương trình phòng chờ hạng thương gia theo điều kiện chi tiêu.",
    needs: ["travel", "annual-fee"],
    points: ["Miễn lãi tối đa 55 ngày", "Hạn mức công bố 50 triệu–1 tỷ", "Đặc quyền phòng chờ theo điều kiện chi tiêu"],
    interestFree: "Tối đa 55 ngày",
    creditLimit: "50 triệu–1 tỷ",
    differentiator: "Phòng chờ hạng thương gia",
    annualFeeDirection: "Có cơ chế hoàn phí theo doanh số",
    href: OFFICIAL.cardVisaLuxury,
    image: OFFICIAL_MEDIA.cardVisaLuxury,
    imageAlt: "Thẻ tín dụng Vietbank Visa Luxury Platinum",
  },
  {
    id: "happy",
    index: "03",
    shortName: "Mastercard Happy",
    name: "Mastercard Credit Happy",
    tag: "Gia đình",
    desc: "Hướng đến chi tiêu gia đình, nổi bật với chính sách thẻ phụ và hoàn phí thường niên theo doanh số được công bố.",
    needs: ["everyday", "family", "annual-fee"],
    points: ["Miễn lãi tối đa 55 ngày", "Hạn mức công bố 5–500 triệu", "Miễn phí phát hành & thường niên thẻ phụ"],
    interestFree: "Tối đa 55 ngày",
    creditLimit: "5–500 triệu",
    differentiator: "Chính sách thẻ phụ cho gia đình",
    annualFeeDirection: "Có cơ chế hoàn phí theo doanh số",
    href: OFFICIAL.cardHappy,
    image: OFFICIAL_MEDIA.cardHappy,
    imageAlt: "Thẻ Mastercard Credit Happy Vietbank",
  },
  {
    id: "lifecare",
    index: "04",
    shortName: "Mastercard Lifecare",
    name: "Mastercard Credit Lifecare",
    tag: "Sức khỏe",
    desc: "Dành cho người ưu tiên nhóm quyền lợi chăm sóc sức khỏe, nổi bật với ưu đãi được Vietbank công bố tại Bệnh viện Quốc tế CIH.",
    needs: ["health"],
    points: ["Giảm tới 10% tại CIH", "Miễn lãi tối đa 55 ngày", "Hạn mức công bố 50 triệu–1 tỷ"],
    interestFree: "Tối đa 55 ngày",
    creditLimit: "50 triệu–1 tỷ",
    differentiator: "Ưu đãi chăm sóc sức khỏe tại CIH",
    annualFeeDirection: "Kiểm tra biểu phí và ưu đãi hiện hành",
    href: OFFICIAL.cardLifecare,
    image: OFFICIAL_MEDIA.cardLifecare,
    imageAlt: "Thẻ Mastercard Credit Lifecare Vietbank",
  },
]

const VALID_NEEDS = new Set<string>(NEEDS.map((need) => need.id))
const VALID_CARDS = new Set<string>(CARDS.map((card) => card.id))

function parseParam<T extends string>(value: string | null, valid: Set<string>): T[] {
  if (!value) return []
  return value.split(",").filter((item): item is T => valid.has(item))
}

export default function CardFinder() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [statusMessage, setStatusMessage] = useState("")

  const selectedNeeds = parseParam<NeedId>(searchParams.get("need"), VALID_NEEDS)
  const comparedIds = parseParam<CardId>(searchParams.get("compare"), VALID_CARDS).slice(0, 3)

  const filteredCards = useMemo(() => {
    if (!selectedNeeds.length) return CARDS
    return CARDS.filter((card) => selectedNeeds.some((need) => card.needs.includes(need)))
  }, [selectedNeeds])

  const comparedCards = CARDS.filter((card) => comparedIds.includes(card.id))

  const setListParam = (key: "need" | "compare", values: string[]) => {
    const next = new URLSearchParams(searchParams)
    if (values.length) next.set(key, values.join(","))
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  const toggleNeed = (need: NeedId) => {
    const next = selectedNeeds.includes(need)
      ? selectedNeeds.filter((item) => item !== need)
      : [...selectedNeeds, need]
    setListParam("need", next)
  }

  const toggleCompare = (cardId: CardId) => {
    if (comparedIds.includes(cardId)) {
      setListParam("compare", comparedIds.filter((id) => id !== cardId))
      setStatusMessage("Đã bỏ thẻ khỏi danh sách so sánh.")
      return
    }

    if (comparedIds.length >= 3) {
      setStatusMessage("Bạn có thể so sánh tối đa 3 thẻ cùng lúc. Hãy bỏ một thẻ trước khi chọn thêm.")
      return
    }

    setListParam("compare", [...comparedIds, cardId])
    setStatusMessage("Đã thêm thẻ vào danh sách so sánh.")
  }

  const clearFilters = () => setListParam("need", [])
  const clearCompare = () => {
    setListParam("compare", [])
    setStatusMessage("Đã xóa danh sách so sánh.")
  }

  return (
    <>
      <Section id="cards">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="01"
            eyebrow="Tìm thẻ theo nhu cầu"
            title="Bắt đầu từ điều bạn muốn thẻ hỗ trợ"
            lead="Chọn một hoặc nhiều ưu tiên để thu hẹp bốn dòng thẻ tín dụng nổi bật. Đây là công cụ định hướng trên dữ liệu công khai, không phải kết quả phê duyệt hay tư vấn tín dụng cá nhân."
          />
          <ActionLink action={{ label: "Xem toàn bộ danh mục thẻ", href: OFFICIAL.cards }} variant="secondary" size="sm" />
        </div>

        <div className="mt-6 border-y border-line bg-surface px-4 py-5 sm:px-5">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-ink">
            <SlidersHorizontal className="h-4 w-4 text-navy" aria-hidden="true" />
            Bạn quan tâm điều gì?
          </div>
          <div className="mt-3 flex flex-wrap gap-2" aria-label="Lọc thẻ theo nhu cầu">
            {NEEDS.map((need) => {
              const active = selectedNeeds.includes(need.id)
              return (
                <button
                  key={need.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleNeed(need.id)}
                  className={`min-h-11 rounded-md border px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-paper text-ink hover:border-navy hover:text-navy"
                  }`}
                >
                  {need.label}
                </button>
              )
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[13px]">
            <p className="text-ink-soft" aria-live="polite">
              Hiển thị <span className="font-semibold text-ink tnum">{filteredCards.length}</span> / {CARDS.length} thẻ
              {selectedNeeds.length ? " theo ưu tiên đã chọn." : "."}
            </p>
            {selectedNeeds.length > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy hover:underline"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Xóa bộ lọc
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-l-2 border-yellow bg-amber-soft/50 px-4 py-3 text-[13px] leading-relaxed text-ink-soft">
          <p>
            Ưu tiên giao dịch nội địa hoặc rút tiền mặt tại ATM Vietbank? Thẻ tín dụng Vietbank NAPAS có hướng sử dụng khác với bốn thẻ quốc tế bên dưới.
          </p>
          <a
            href={OFFICIAL.cardNapasCredit}
            {...EXTERNAL_LINK_PROPS}
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 font-semibold text-navy hover:underline"
          >
            Xem Vietbank NAPAS <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-5 overflow-hidden border-y border-line bg-surface">
          {filteredCards.length ? (
            filteredCards.map((card, rowIndex) => {
              const selected = comparedIds.includes(card.id)
              const compareDisabled = !selected && comparedIds.length >= 3
              return (
                <article
                  key={card.name}
                  className={`grid gap-5 py-6 md:grid-cols-[220px_1fr] md:items-center md:gap-8 ${
                    rowIndex ? "border-t border-line" : ""
                  }`}
                >
                  <div className="relative flex min-h-[145px] items-center justify-center bg-soft px-5 py-5">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[138px] w-full max-w-[205px] object-contain"
                    />
                    <span className="absolute left-3 top-3 text-[11.5px] font-semibold tracking-[0.1em] text-ink-soft tnum" aria-hidden="true">
                      {card.index}
                    </span>
                  </div>

                  <div className="px-1 pb-1 md:pr-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="border-l-2 border-navy pl-3 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                        {card.tag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-soft">
                        <span className="flex h-0.5 w-6 overflow-hidden" aria-hidden="true">
                          <span className="w-1/2 bg-red" />
                          <span className="w-1/2 bg-yellow" />
                        </span>
                        Packshot sản phẩm Vietbank
                      </span>
                    </div>

                    <h2 className="mt-2.5 font-display text-[clamp(1.3rem,2vw,1.55rem)] font-semibold tracking-[-0.02em] text-ink">{card.name}</h2>
                    <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">{card.desc}</p>

                    <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="border-t border-line pt-3">
                        <dt className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Miễn lãi</dt>
                        <dd className="mt-1 text-[14px] font-semibold text-ink">{card.interestFree}</dd>
                      </div>
                      <div className="border-t border-line pt-3">
                        <dt className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Hạn mức công bố</dt>
                        <dd className="mt-1 text-[14px] font-semibold text-ink tnum">{card.creditLimit}</dd>
                      </div>
                      <div className="border-t border-line pt-3">
                        <dt className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Điểm nổi bật</dt>
                        <dd className="mt-1 text-[14px] font-semibold text-ink">{card.differentiator}</dd>
                      </div>
                    </dl>

                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-4">
                      <a
                        href={card.href}
                        {...EXTERNAL_LINK_PROPS}
                        className="inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-navy hover:underline"
                      >
                        Xem điều kiện trên Vietbank <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        aria-pressed={selected}
                        disabled={compareDisabled}
                        onClick={() => toggleCompare(card.id)}
                        className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-3.5 py-2 text-[13px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-45 ${
                          selected
                            ? "border-navy bg-navy-050 text-navy"
                            : "border-line bg-paper text-ink hover:border-navy hover:text-navy"
                        }`}
                      >
                        {selected ? <Check className="h-4 w-4" aria-hidden="true" /> : <GitCompareArrows className="h-4 w-4" aria-hidden="true" />}
                        {selected ? "Đã chọn so sánh" : "Thêm vào so sánh"}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })
          ) : (
            <div className="px-5 py-10 text-center">
              <p className="font-semibold text-ink">Chưa có thẻ nào khớp với tổ hợp ưu tiên này.</p>
              <p className="mt-2 text-[14px] text-ink-soft">Hãy bỏ bớt bộ lọc hoặc xem toàn bộ danh mục thẻ Vietbank.</p>
              <button type="button" onClick={clearFilters} className="mt-4 min-h-11 font-semibold text-navy hover:underline">
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>

        <p className="sr-only" aria-live="polite">{statusMessage}</p>
      </Section>

      <Section id="compare" tone="soft">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            n="02"
            eyebrow="So sánh thẻ"
            title="Chọn 2–3 thẻ để đặt cạnh nhau"
            lead="So sánh các thuộc tính định hướng đã được đối chiếu với nguồn Vietbank. Điều kiện, phí và ưu đãi cuối cùng luôn cần kiểm tra lại trên kênh chính thức."
          />
          {comparedIds.length > 0 && (
            <button
              type="button"
              onClick={clearCompare}
              className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy hover:underline"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Xóa danh sách so sánh
            </button>
          )}
        </div>

        <div className="mt-6 border border-line bg-surface p-4 sm:p-5">
          <div className="flex flex-wrap gap-2" aria-label="Các thẻ đang được chọn để so sánh">
            {comparedCards.length ? (
              comparedCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => toggleCompare(card.id)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-navy bg-navy-050 px-3 py-2 text-[13px] font-semibold text-navy"
                  aria-label={`Bỏ ${card.name} khỏi danh sách so sánh`}
                >
                  {card.shortName} <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              ))
            ) : (
              <p className="text-[14px] text-ink-soft">Chưa chọn thẻ nào. Dùng nút “Thêm vào so sánh” ở danh sách phía trên.</p>
            )}
          </div>

          {comparedCards.length === 1 && (
            <p className="mt-4 border-t border-line pt-4 text-[14px] text-ink-soft">Chọn thêm ít nhất 1 thẻ để bắt đầu so sánh.</p>
          )}

          {comparedCards.length >= 2 && (
            <div className="mt-5 overflow-x-auto border border-line">
              <table className="w-full min-w-[720px] text-left">
                <caption className="sr-only">So sánh các thẻ Vietbank đã chọn theo thời gian miễn lãi, hạn mức công bố, điểm khác biệt và định hướng phí thường niên.</caption>
                <thead>
                  <tr className="border-b border-line bg-navy-050 text-[12.5px] uppercase tracking-wide text-ink-soft">
                    <th scope="col" className="px-5 py-3.5 font-semibold">Tiêu chí</th>
                    {comparedCards.map((card) => (
                      <th key={card.id} scope="col" className="px-5 py-3.5 font-semibold text-ink">{card.shortName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {[
                    { label: "Nhu cầu nổi bật", value: (card: CardProduct) => card.tag },
                    { label: "Thời gian miễn lãi công bố", value: (card: CardProduct) => card.interestFree },
                    { label: "Hạn mức công bố", value: (card: CardProduct) => card.creditLimit },
                    { label: "Điểm khác biệt", value: (card: CardProduct) => card.differentiator },
                    { label: "Phí thường niên", value: (card: CardProduct) => card.annualFeeDirection },
                  ].map((row, rowIndex) => (
                    <tr key={row.label} className={`border-b border-line last:border-0 ${rowIndex % 2 ? "bg-soft/40" : ""}`}>
                      <th scope="row" className="px-5 py-3.5 font-medium text-ink">{row.label}</th>
                      {comparedCards.map((card) => (
                        <td key={card.id} className="px-5 py-3.5 text-ink-soft">{row.value(card)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[13px] text-ink-soft">
            <p>Đã chọn <span className="font-semibold text-ink tnum">{comparedIds.length}</span> / 3 thẻ.</p>
            <a href={OFFICIAL.cardFees} {...EXTERNAL_LINK_PROPS} className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy hover:underline">
              Kiểm tra biểu phí Vietbank <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}