# Vietbank Redesign V6 — Assumption Log

> Status values: `VALIDATED`, `PARTIAL`, `PENDING`, `INVALIDATED`.

| # | Assumption | Evidence status | Risk if wrong | Validation / action | Status |
|---:|---|---|---|---|---|
| 1 | Digital Plus is the current primary personal mobile banking platform | Official Vietbank migration notice says Vietbank Digital stopped on 03/06/2026 and customers should use Digital Plus | High | Use official Digital Plus landing + App Store/Google Play links | VALIDATED |
| 2 | DigiBiz is the current business digital banking platform | Official launch article + `digibiz.vietbank.com.vn` | High | Hand off business users to official DigiBiz surface | VALIDATED |
| 3 | Public official Brand Book is available | No public brand book verified in research | Medium | Keep palette/font statuses as inferred/proposed; request stakeholder brand package before production lock | INVALIDATED |
| 4 | Current extracted blue/red/yellow values are official tokens | Values are derived from logo/current visual assets, not a public brand specification | Medium | Keep as `INFERRED_FROM_OFFICIAL_ASSETS / PROPOSED_FOR_DIGITAL` | PARTIAL |
| 5 | Be Vietnam Pro is Vietbank's official corporate typeface | No official typography specification verified | Medium | Keep as digital proposal because Vietnamese readability/performance fit is good | PENDING |
| 6 | All rates in concept tables are current real Vietbank rates | Existing repository explicitly labels them static/sample | High | Never present as live; link users to official rate pages for real decisions | INVALIDATED |
| 7 | Branch search is connected to a live branch data source | Current repository only renders a demo input/map | High | Replace primary task with official `vietbank.com.vn/chi-nhanh` handoff until API exists | INVALIDATED |
| 8 | Contact form sends data to Vietbank | Current form is simulated only | High | Make demo status visible before submit; do not show ambiguous real-success language | INVALIDATED |
| 9 | Card names `Cashback / Travel / Classic` are real Vietbank products | Official card portfolio uses names such as Visa Luxury, Visa My Style, Mastercard Lifecare, Mastercard Happy, Napas | High | Replace invented product names with real portfolio examples | INVALIDATED |
| 10 | Header can offer one generic “Đăng nhập” destination for all users | Personal and business digital journeys differ; legacy online banking surfaces still coexist | High | Route first to Digital Banking choice page; provide explicit official Digital Plus/DigiBiz actions there | INVALIDATED |
| 11 | Personal online account opening can be communicated as ~5 minutes | Current official 2026 campaign content explicitly says “Mở tài khoản online 5 phút với eKYC” | Medium | Use only in account-opening context and avoid extending claim to unrelated products | VALIDATED |
| 12 | Voice Brandname is a verified trust signal | Vietbank announced branded outbound calls and a single inbound hotline 1800 1122 | Low | Surface in security/help areas | VALIDATED |
| 13 | Exact production form privacy/consent copy is known | No implementation/legal specification supplied | High | Keep generic demo disclosure; legal review required before production form integration | PENDING |
| 14 | Current GitHub Pages static bundle is generated automatically from `src/` | Repo has no visible root workflow; live page loads root `main.js`/`styles.css` | High | Keep `src/` source and root static artifact behavior synchronized in V6 | INVALIDATED |

## Validation sources

- Vision/core values: https://www.vietbank.com.vn/ve-vietbank/gioi-thieu/tam-nhin-su-menh-gia-tri-cot-loi
- Digital Plus launch: https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-nang-tam-trai-nghiem-nguoi-dung-voi-nen-tang-ngan-hang-so-vietbank-digital-plus-32466
- Digital Plus migration: https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-chuyen-doi-sang-vietbank-digital-plus-tu-01062026-32489
- Digital Plus landing: https://vbdigitalplus.vietbank.com.vn/
- DigiBiz: https://digibiz.vietbank.com.vn/
- DigiBiz launch: https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-chinh-thuc-ra-mat-nen-tang-so-danh-cho-doanh-nghiep
- Branch finder: https://www.vietbank.com.vn/chi-nhanh
- Rules/forms: https://www.vietbank.com.vn/quy-dinh-va-bieu-mau/quy-dinh-chung
- Cards: https://www.vietbank.com.vn/card
- Voice Brandname: https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-trien-khai-dich-vu-cuoc-goi-hien-thi-thuong-hieu-vietbank-voice-brandname
