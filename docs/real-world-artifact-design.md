# Real-World Artifact Design — Vietbank V7

> Specialist: `real-world-artifact-and-domain-metaphor-design`
> Goal: create domain-native recognition and information structure without decorative skeuomorphism or fabricated financial artifacts.

## 1. Design problem

V6 is functionally safer but still uses many interchangeable rounded cards. V7 needs a banking-native visual/information grammar that:
- improves scanability of high-frequency tasks;
- makes the card-selection page feel tied to real Vietbank products;
- gives corporate/IR content institutional rhythm;
- remains conventional, responsive and accessible.

## 2. Artifact inventory

| Artifact | Reality/source | Familiarity | Task value | Transfer potential |
|---|---|---|---|---|
| Bank statement / service ledger | common banking document/system | LIKELY HIGH | high | STRUCTURAL + INFORMATION |
| Current Vietbank payment/credit card | first-party Vietbank product pages/assets | VERIFIED | very high on `/the` | FORM + INFORMATION |
| Exchange/rate board | common branch/bank utility | LIKELY HIGH | high in Support | STRUCTURAL + INFORMATION |
| Annual report | standard corporate/IR artifact | LIKELY | high in About/IR | STRUCTURAL + INFORMATION |
| Transaction receipt | common | LIKELY HIGH | medium | REJECT visible metaphor — could imply a real transaction |
| Passbook/certificate | category-recognizable but not universal for all users | UNKNOWN/MEDIUM | low | REJECT for system-wide grammar |
| Branch signage/queue ticket | physical service context | LIKELY | low/medium | L0 reference only |

## 3. Finalists + score

Scored for familiarity, task usefulness, authenticity, brand fit, distinctiveness, responsive/a11y/performance feasibility and asset reality.

| Artifact | Score /100 | Decision |
|---|---:|---|
| Statement / service ledger | 89 | DOMINANT GRAMMAR |
| Real Vietbank card | 94 | USE ON CARD DECISION SURFACES |
| Annual report | 81 | SUPPORTING CORPORATE/IR GRAMMAR |
| Exchange/rate board | 84 | SUPPORTING UTILITY GRAMMAR |
| Receipt | 61 | REJECT VISIBLE FORM |
| Passbook/certificate | 55 | REJECT |

## 4. Transfer decisions

### A. Statement / service ledger
- **Problem:** top-task cards look generic and equal-weighted.
- **Transfer layer:** STRUCTURAL + INFORMATION.
- **Fidelity:** **L2 STRUCTURAL**.
- **Keep:** row hierarchy, sequence numbers, clear label/value/meta zones, divider rhythm, status/source cues.
- **Do not copy:** account numbers, balances, transaction values, paper texture, print perforations, customer PII.
- **Digital adaptation:** task rows with number + icon + action label + short context + arrow; source/utility rows can include “official Vietbank” cue.
- **Mobile:** single-column rows with 44px+ targets; metadata wraps below label.
- **Accessibility:** semantic links/lists; visual numbering is supplemental.

### B. Real Vietbank card
- **Problem:** icon-only card products do not exploit the most recognizable real object in the decision.
- **Transfer layer:** FORM + INFORMATION.
- **Fidelity:** **L3 DIRECT_FORM** on `/the` only.
- **Keep:** actual official Vietbank product image and real card ratio; verified product naming; comparable attributes.
- **Do not copy/create:** fake card numbers, fake chip details, synthetic network marks, 3D flips, fake plastic reflections or fake application state.
- **Digital adaptation:** official card image sits above semantic product title/benefits/source action.
- **Mobile:** image scales as an image object; details remain normal web text below it.
- **Accessibility:** meaningful product-image alt; all decision-critical facts duplicated as text.
- **Reality:** REAL first-party public product imagery.

Verified first-party card media:
- My Style — `https://static.vietbank.com.vn/web/CardWebsite/product/my%20style/my-style2.png`
- Mastercard Happy — `https://static.vietbank.com.vn/web/CardWebsite/product/MASTERCARD%20CREDIT%20HAPPY/Master-Card-Credit-Happy-%28Standard%29-3.jpg`
- Mastercard Lifecare — `https://static.vietbank.com.vn/web/CardWebsite/product/MASTERCARD%20CREDIT%20LIFECARE/Mastercard-Lifecare-Credit-3.jpg`
- Visa Luxury — `https://static.vietbank.com.vn/web/CardWebsite/product/Luxury/Platinum-Luxury2.png`

### C. Exchange/rate board
- **Problem:** rate information is high-frequency but V7 must not fabricate live values.
- **Transfer layer:** STRUCTURAL + INFORMATION.
- **Fidelity:** **L1 CUE / L2 STRUCTURAL**.
- **Keep:** utility-board rows, “data changes by time” framing, source/date responsibility.
- **Do not copy:** hardcoded live-looking rates, LED/stock-ticker aesthetics, fake update timestamp.
- **Digital adaptation:** clear actions to official rate pages instead of simulated data.

### D. Annual report
- **Problem:** About/IR needs institutional evidence density without dashboard fiction.
- **Transfer layer:** STRUCTURAL.
- **Fidelity:** **L1–L2**.
- **Keep:** editorial numbering, dated facts, keylines, disciplined data blocks, source-forward reading order.
- **Do not copy:** fake PDF pages, fake financial charts, fake signatures/seals, fabricated market-price widgets.

## 5. Design DNA

`ledger hierarchy + verified product objects + annual-report discipline + Vietbank blue/red/yellow signature`

Rules:
1. One dominant grammar: **ledger/statement order**.
2. Product-object fidelity is allowed only when the real object is the decision object.
3. Source/date/condition cues are content hierarchy, not disclaimers hidden in fine print.
4. Blue is the main institutional keyline/action color; red/yellow form a small dual-accent signature.
5. Rounded containers are used only when they communicate grouping, not as the default shape for every section.

## 6. Domain Metaphor Gate

- [x] Artifact/process is real or clearly labeled.
- [x] Source/authenticity recorded at required level.
- [x] Familiarity has confidence label.
- [x] Each retained metaphor solves a specific recognition/hierarchy/task problem.
- [x] Transfer layer and rejected properties are explicit.
- [x] Lowest useful fidelity selected.
- [x] Conventional digital controls remain predictable.
- [x] No fake branded products/data/documents/certificates.
- [x] Mobile adaptation defined.
- [x] Semantic experience does not require recognizing the metaphor visually.
- [x] No metaphor theme park.

## 7. Validation status

This is a professional design hypothesis informed by domain familiarity and verified product artifacts. It has **not** been validated through user testing. Production validation should test task recognition and card comparison comprehension rather than asking users whether the metaphor “looks nice”.
