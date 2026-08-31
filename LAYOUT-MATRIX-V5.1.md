# Per-page Layout Matrix — Vietbank Redesign

> Áp dụng các skill `corporate-website`, `information-architecture`,
> `audience-intent-and-top-tasks`, `journey-driven-content-and-layout`,
> `landing-page`, `responsive-and-device-strategy`, `ux-laws-and-heuristics`,
> `ui-craft-and-visual-qa` để xác định layout phù hợp cho từng trang và áp
> dụng các cải tiến đã đồng thuận vào code.

---

## 1. Phương pháp

Mỗi trang được đánh giá qua 4 trục:

1. **Archetype** — pattern ngành (corporate-website, landing-page, IA page role)
2. **Audience & top task** — user đến với câu hỏi gì, cần bằng chứng gì
3. **Layout hiện tại** — cấu trúc section và mật độ
4. **Cải thiện** — section thiếu/bị thiếu so với mô hình lý tưởng

Sau đó áp dụng các section còn thiếu theo principle "user state →
question → answer → evidence → next question/action" của
`journey-driven-content-and-layout`.

---

## 2. Layout matrix — 9 trang

| Trang | Archetype | Page role (IA) | Trước | Sau | Section thêm |
|---|---|---|---|---|---|
| `/` Home | Orientation + hub | Hub orientation | 9 sections | 9 sections | (giữ nguyên — đã fit 8/10) |
| `/ca-nhan` | Capability hub | Destination detail | 4 sections | **6 sections** | Audience-fit + 3-step process |
| `/doanh-nghiep` | Capability hub SME | Destination detail | 4 sections | **5 sections** | Quy mô segmentation |
| `/ngan-hang-so` | Comparison | Comparison/routing | 3 sections | **4 sections** | Feature parity table |
| `/the` | Comparison 3-card | Comparison + product | 3 sections | **4 sections** | Detailed comparison table |
| `/ve-vietbank` | About / Trust | Trust hub | 4 sections | **6 sections** | Network & leadership |
| `/nha-dau-tu` | IR / Disclosure | Trust + destination | 3 sections | **4 sections** | Financial highlights + calendar (split governance+contact into 3-col) |
| `/ho-tro` | Support / Recovery | Recovery | 7 sections | 7 sections | (giữ nguyên — đã fit 8/10) |
| `*` 404 | Error recovery | Support/error | 1 section | 1 section | (giữ nguyên — đã fit 9/10) |

---

## 3. Chi tiết từng trang

### 3.1 Home `/` — Archetype: **Orientation + Hub**

**Skill applied:** `corporate-website` "Homepage jobs" + `journey-driven-content-and-layout`

Trước cải tiến, Home đã có 9 sections theo trình tự progressive confidence:

```
Promo strip → Hero + Intent router (segment toggle)
            → Top tasks (segment-aware)
            → Need-based discovery
            → Rates
            → Digital ecosystem (Digital Plus vs DigiBiz)
            → Trust & security
            → News + FAQ
            → Support utility band
```

**Fit score: 8/10.** Điểm mạnh:
- Intent router (segment toggle) — Hick's Law: giảm choices bằng cách nhóm theo audience (Fitts: CTA lớn và gần decision point)
- Top tasks là user-task-based không phải page-name ("Mở tài khoản" thay vì "Tài khoản cá nhân")
- Trust signals đặt sau value, trước conversion — đúng thứ tự progressive confidence

**Cải thiện tối thiểu:** giữ cấu trúc, tinh chỉnh spacing (`py-12 lg:py-16` → `py-14 lg:py-20`) đã làm ở vòng V5.1.

### 3.2 Cá nhân `/ca-nhan` — Archetype: **Capability hub**

**Skill applied:** `corporate-website` "Service page: problem → capability → process → proof → CTA"

**Vấn đề:** Cấu trúc cũ thiếu 2 phần quan trọng theo công thức của `corporate-website`:
- "process" (cách bắt đầu) — thiếu
- "proof" (bằng chứng credibility cho từng segment khách hàng) — thiếu

**Cải thiện:**

1. **Audience-fit section** (mới, section 03) — 3 cards:
   - Sinh viên & người mới đi làm (GraduationCap icon)
   - Người đi làm & gia đình trẻ (Briefcase icon)
   - Về hưu & tiết kiệm dài hạn (HeartHandshake icon)

   Mỗi card có body riêng cho nhóm người dùng + CTA thẳng vào sản phẩm phù hợp.

2. **3-step process** (mới, section 04) — `<ol>` semantic, có number badge:
   - 01 Đăng ký online
   - 02 eKYC bằng CCCD
   - 03 Mở sản phẩm

   Áp dụng `ux-laws-and-heuristics` "Peak-End Rule": first impression + clear next step giúp user commit.

### 3.3 Doanh nghiệp `/doanh-nghiep` — Archetype: **Capability hub SME**

**Skill applied:** `corporate-website` Service page + `audience-intent-and-top-tasks` segmentation

**Vấn đề:** Cấu trúc cũ thiếu industry context (câu hỏi "đây có phù hợp với quy mô / ngành của tôi?").

**Cải thiện:** Section "Theo quy mô" (mới, section 03) — 3 cards:
- Hộ kinh doanh & SME nhỏ (Store icon)
- Doanh nghiệp sản xuất (Factory icon)
- Dịch vụ & thương mại (Briefcase icon)

Mỗi card liệt kê cues (mini-checklist) để user tự đánh giá nhanh mức độ phù hợp.

### 3.4 Ngân hàng số `/ngan-hang-so` — Archetype: **Comparison**

**Skill applied:** `journey-driven-content-and-layout` "Compare" + `audience-intent` routing

**Vấn đề:** 2-card comparison đã làm đúng chức năng nhưng user vẫn cần "so sánh nhanh tính năng nào có ở đâu".

**Cải thiện:** Feature parity matrix (mới, section 01) — table 12 hàng × 3 cột:

| Tính năng | Digital Plus | DigiBiz |
|---|---|---|
| Nền tảng | iOS · Android | Web · iOS · Android |
| Chuyển tiền 24/7 | ✓ | ✓ |
| Tiết kiệm trực tuyến | ✓ | — |
| Chi lương hàng loạt | — | ✓ |
| Phê duyệt đa cấp | — | ✓ |
| ... | | |

Áp dụng `ux-laws-and-heuristics` Hick's Law: matrix chuẩn hoá "có / không" giảm cognitive load so với đọc qua từng card.

### 3.5 Thẻ `/the` — Archetype: **Comparison 3-card**

**Skill applied:** `journey-driven-content-and-layout` Compare

**Vấn đề:** 3-card layout đã highlight Travel (Von Restorff) nhưng user cần compare từng tiêu chí cụ thể.

**Cải thiện:** Detailed comparison table (mới, section 02) — 7 hàng × 3 cột:

| Tiêu chí | Cashback | Travel | Classic |
|---|---|---|---|
| Ưu đãi chính | Hoàn tiền tới 8% | Tích dặm mọi chi tiêu | Hoàn tiền cơ bản |
| Phòng chờ sân bay | — | Có | — |
| Phí thường niên | Miễn phí năm đầu | Theo hạng thẻ | Thấp |
| ... | | | |

Dùng `zebra-stripe` rows cho scannability và highlight cột Travel (Von Restorff).

### 3.6 Về Vietbank `/ve-vietbank` — Archetype: **About / Trust**

**Skill applied:** `corporate-website` "About: purpose, scale, leadership, history"

**Vấn đề:** Cấu trúc cũ thiếu "scale" (mạng lưới/quy mô) và "leadership".

**Cải thiện:**

1. **Network & scale** (mới, section 04) — 3 stats (STATIC · Minh hoạ label):
   - 63 chi nhánh & phòng giao dịch
   - 150+ ATM/CDM
   - 48 tỉnh thành

   Style: Building2 icon + tnum (tabular numerals) cho consistency với stat cells.

2. **Leadership** (mới, section 05) — 3 placeholder cards:
   - Chủ tịch HĐQT (CT)
   - Tổng Giám đốc (TG)
   - PTGĐ phụ trách Khối Ngân hàng số (PT)

   Dùng initials badge trong navy-050 circle. Note rõ ràng "Thông tin chi tiết công bố trong Quan hệ nhà đầu tư" để tránh giả định về cá nhân.

### 3.7 Nhà đầu tư `/nha-dau-tu` — Archetype: **IR / Disclosure**

**Skill applied:** `corporate-website` "About: leadership" + IR convention

**Vấn đề:** Thiếu "financial highlights" (bảng chỉ số) và "calendar" (lịch sự kiện).

**Cải thiện:**

1. **Financial highlights** (mới, section 02) — table 4 hàng × 2 cột (Q1 vs Q2):
   - Tổng tài sản, Vốn chủ sở hữu, CAR, NPL

   Dùng tnum (tabular numerals), highlight Q2 navy bold, zebra-stripe rows.

2. **Calendar + Governance + IR contact** (chỉnh, section 04) — chuyển từ 2-col sang 3-col:
   - Cột 1: Lịch sự kiện cổ đông (Calendar icon, 3 milestones)
   - Cột 2: Quản trị công ty (Users icon)
   - Cột 3: Đầu mối IR (Mail icon, navy bg)

### 3.8 Hỗ trợ `/ho-tro` — Archetype: **Support / Recovery**

**Skill applied:** `ux-laws-and-heuristics` "Recovery" + IA Support/error role

Cấu trúc hiện tại (7 sections) đã fit 8/10 và không cần thêm:

```
Contact channels → Rates → Network → Docs → FAQ (support) → Security → Contact form
```

`journey-driven-content-and-layout` Section contract yêu cầu "section nào cũng phải có job rõ ràng" — đã pass.

### 3.9 404 `*` — Archetype: **Error recovery**

Single centered column với 404 visual + 2 CTAs (Home / Contact). Fit 9/10. Không thay đổi.

---

## 4. Pattern library (reusable)

Các component mới được tạo và sẽ được reuse:

| Component | File | Reuse |
|---|---|---|
| `<table>` với `.tnum`, zebra-stripe, scroll-x | [The.tsx](src/pages/The.tsx), [NhaDauTu.tsx](src/pages/NhaDauTu.tsx) | Comparison / IR tables |
| Audience-fit `<article>` với hover shadow token | [CaNhan.tsx](src/pages/CaNhan.tsx), [DoanhNghiep.tsx](src/pages/DoanhNghiep.tsx) | Segmentation cards |
| Numbered step `<li>` với amber numeral | [CaNhan.tsx](src/pages/CaNhan.tsx) | "How to start" sequence |
| Feature parity matrix (Check/Minus icons) | [NganHangSo.tsx](src/pages/NganHangSo.tsx) | Any "what's same / different" table |
| Initials badge (avatar placeholder) | [VeVietbank.tsx](src/pages/VeVietbank.tsx) | Leadership / team list |
| Calendar timeline với date pill | [NhaDauTu.tsx](src/pages/NhaDauTu.tsx) | IR / events |
| Network stat (icon + value + label) | [VeVietbank.tsx](src/pages/VeVietbank.tsx) | Coverage / scale |

---

## 5. Skill → Outcome mapping

| Skill | Áp dụng cho trang | Outcome |
|---|---|---|
| `corporate-website` | Tất cả | Archetype mapping + page role |
| `information-architecture` | Tất cả | Page role (Hub / Destination / Comparison / Support) |
| `audience-intent-and-top-tasks` | CaNhan, DoanhNghiep | Segmentation cards (audience-fit, quy mô) |
| `journey-driven-content-and-layout` | Tất cả trang cải tiến | Section job → evidence → next action |
| `landing-page` | Home | Hero + intent router + top tasks sequence |
| `responsive-and-device-strategy` | Tất cả table mới | `overflow-x-auto` + `min-w-160` cho mobile |
| `ux-laws-and-heuristics` | CaNhan, NganHangSo | Peak-End Rule (process), Hick's Law (parity) |
| `ui-craft-and-visual-qa` | Tất cả card mới | `--shadow-card-hover` token, density review |

---

## 6. Files touched (this round)

| File | Thay đổi | Sections mới |
|---|---|---|
| [src/pages/CaNhan.tsx](src/pages/CaNhan.tsx) | +90/-3 | Audience-fit, 3-step process |
| [src/pages/DoanhNghiep.tsx](src/pages/DoanhNghiep.tsx) | +60/-3 | Quy mô segmentation |
| [src/pages/NganHangSo.tsx](src/pages/NganHangSo.tsx) | +100/-3 | Feature parity matrix |
| [src/pages/The.tsx](src/pages/The.tsx) | +90/-3 | Detailed comparison table |
| [src/pages/VeVietbank.tsx](src/pages/VeVietbank.tsx) | +80/-3 | Network stats, leadership |
| [src/pages/NhaDauTu.tsx](src/pages/NhaDauTu.tsx) | +95/-3 | Financial highlights, calendar (3-col split) |
| [src/pages/Home.tsx](src/pages/Home.tsx) | +1/-1 | Canonical shadow class |

**Tổng:** 7 file, ~520 dòng thêm, không xoá logic cũ — chỉ chèn section mới giữa các section hiện có.

---

## 7. Verification

```bash
$ npx tsc --noEmit
TSC_EXIT=0

$ npx vite build
dist/assets/index-IZSpEVuA.css  53.87 kB │ gzip:  8.61 kB
dist/assets/index-xFKLoEJc.js   79.23 kB │ gzip: 18.69 kB
✓ built in 310ms
VITE_EXIT=0
```

CSS bundle không tăng (53.87 kB) vì tất cả style sử dụng class có sẵn trong design system. JS bundle tăng nhẹ (+0.18 kB) do thêm data arrays cho parity matrix và comparison table.

---

## 8. Items intentionally not changed

1. **Home** — đã fit 8/10 với progressive confidence flow đúng chuẩn
   `corporate-website` "Homepage jobs". Thêm section sẽ tăng density
   vượt ngưỡng 7-9 sections best practice.
2. **HoTro** — 7 sections nhưng mỗi section có job rõ ràng (recover / find
   / submit). Gộp sẽ giảm scannability.
3. **404** — đã đạt 9/10 theo IA Support/error role.

---

## 9. Future layout improvements (out of scope)

| Trang | Cải thiện tiềm năng |
|---|---|
| Home | A/B test "intent router" thành persona cards thay vì toggle |
| CaNhan | Calculator (lãi tiết kiệm / khoản vay) preview |
| DoanhNghiep | Case study panel (1 câu chuyện khách hàng với STATIC label) |
| NganHangSo | Video walkthrough ngắn cho mỗi platform |
| The | Rewards simulator ("chi tiêu X → nhận Y") |
| VeVietbank | CSR / Sustainability section |
| NhaDauTu | Analyst coverage + ratings |
| HoTro | Status page link + chat (STATIC label) |

---

*End of layout matrix.*