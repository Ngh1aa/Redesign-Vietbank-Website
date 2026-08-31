# Vietbank Redesign V6 — Product Brief

> Research baseline: 31/08/2026. This document translates `VIETBANK-PRE-DESIGN-RESEARCH-PROMPT` into implementation constraints for the redesign.

## 1. Problem statement

### FACT
Vietbank publicly positions itself toward becoming a leading reputable retail bank in Vietnam and operates around the principles **Tăng trưởng — An toàn — Bền vững — Hiệu quả**. Its published core values include **Chính trực, Hiệu quả, Am hiểu, Tuân thủ**.

Official source: https://www.vietbank.com.vn/ve-vietbank/gioi-thieu/tam-nhin-su-menh-gia-tri-cot-loi

### FACT
Vietbank launched **Digital Plus** for personal customers in 2026. The previous Vietbank Digital app stopped operating from **03/06/2026**, and customers are instructed to migrate to Digital Plus.

Official sources:
- https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-nang-tam-trai-nghiem-nguoi-dung-voi-nen-tang-ngan-hang-so-vietbank-digital-plus-32466
- https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-chuyen-doi-sang-vietbank-digital-plus-tu-01062026-32489

### FACT
Vietbank launched **DigiBiz** for business customers in July 2025 as an omni-channel digital banking platform for financial management, transactions and multi-level approval.

Official source: https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-chinh-thuc-ra-mat-nen-tang-so-danh-cho-doanh-nghiep

### EVIDENCE-BACKED INFERENCE
The marketing website should not behave as a corporate brochure or as a fake transaction UI. Its strongest role is a **product discovery + trust + self-service + handoff hub** between search/campaign entry points and real Vietbank services.

## 2. Primary audiences

### A. Prospective personal customer
- **Context:** mobile-first, often arrives from search/campaign/social.
- **Motivation:** open an account, save, borrow, get a card, or understand Digital Plus.
- **Barrier:** unclear product differences, fees/conditions, distrust of unofficial links.
- **Success:** reaches the right product information and a verified next action.

### B. Existing personal customer
- **Context:** task-oriented visit, often urgent.
- **Motivation:** Digital Plus migration/use, rates, fees, forms, branch, support, security.
- **Barrier:** legacy naming and fragmented utility pages.
- **Success:** completes self-service or reaches an official channel quickly.

### C. SME / business customer
- **Context:** desktop + mobile, multiple stakeholders/approvers.
- **Motivation:** funding, payment account, cash-flow management, trade finance, DigiBiz.
- **Barrier:** product language is too bank-structure-oriented; unclear operational benefit.
- **Success:** understands solution fit and moves to DigiBiz/branch/advisor with context.

### Secondary audiences
Investor/shareholder, candidates, partners/media and international visitors.

## 3. Jobs to be done

1. **Functional** — Khi tôi có một nhu cầu tài chính cụ thể, tôi muốn nhanh chóng tìm đúng nhóm sản phẩm và điều kiện liên quan, để biết bước tiếp theo trước khi để lại thông tin hoặc tải ứng dụng.
2. **Functional** — Khi tôi đã là khách hàng, tôi muốn truy cập đúng Digital Plus/DigiBiz, biểu phí, biểu mẫu, tỷ giá, lãi suất hoặc điểm giao dịch, để tự xử lý tác vụ mà không phải tìm qua nhiều menu.
3. **Emotional** — Khi tôi chuẩn bị thực hiện tác vụ ngân hàng số, tôi muốn chắc chắn mình đang ở kênh Vietbank chính thức, để tránh link giả mạo và rủi ro lừa đảo.
4. **Business** — Khi doanh nghiệp của tôi cần vận hành dòng tiền, tôi muốn biết DigiBiz hỗ trợ quản trị/phê duyệt như thế nào, để quyết định có nên đăng ký hoặc liên hệ Vietbank.

## 4. Website responsibilities

| Business goal | Website responsibility | User action | KPI |
|---|---|---|---|
| Digital adoption | Explain and hand off to official Digital Plus / DigiBiz surfaces | Official platform CTA click | Digital handoff CTR |
| Product discovery | Route by user need, not only internal org taxonomy | Product/solution selection | Product discovery rate |
| Qualified interest | Provide enough proof before asking for contact | Contact intent | CTA-to-contact rate |
| Self-service | Make rates, fees/forms, branch and security easy to find | Utility completion | Utility success rate |
| Trust | Surface verified Vietbank channels and anti-fraud guidance | Security/support access | Security/help CTR |
| Investor credibility | Preserve investor information and official disclosures | Document/news access | Investor content engagement |

## 5. Primary KPI set

Baseline is **N/A** until analytics access is available.

### Primary
- `product_select`
- `digital_plus_handoff`
- `digibiz_handoff`
- `contact_intent`
- `branch_finder_handoff`
- `docs_handoff`

### Secondary
- `rates_view`
- `security_center_view`
- `card_compare_view`
- `product_anchor_navigation`

### Guardrails
- Zero misleading/fake success states in production candidate UI.
- Zero dead primary CTA (`href="#"`).
- WCAG 2.2 AA interaction baseline.
- No route/URL removal without redirect plan.
- Maintain Core Web Vitals-oriented implementation.

## 6. V6 scope

### P0 — Must have
- Replace dead/fake external CTAs with verified Vietbank destinations.
- Clearly distinguish real / static / demo / unknown features.
- Replace fake branch/docs actions with official handoff where backend is not integrated.
- Remove or clearly label unsupported product/rate/turnaround claims.
- Fix page metadata per route.

### P1 — Major
- Need-based anchor navigation for Personal / Business / Digital / Card pages.
- Digital Plus vs DigiBiz handoff with official destinations.
- Card discovery based on real Vietbank card portfolio rather than invented product names.
- Trust/security proof connected to official hotline and Voice Brandname evidence.
- Mobile actions remain outcome-based and thumb reachable.

### P2 — Craft
- Refine information density and distinct page roles.
- Add verified-source affordances only where they reduce risk.
- Improve page-specific microcopy and internal linking.

### Out of scope for this repository pass
- Real banking authentication.
- Real transactional operations.
- Live CMS/API integration for rates, branch map, form submissions or investor feeds.
- Production analytics credentials.

## 7. Brand source status

**B/C — PARTIAL OFFICIAL BRAND ASSETS / LOGO AVAILABLE, NO PUBLIC BRAND BOOK VERIFIED.**

Current palette and Be Vietnam Pro remain **PROPOSED_FOR_DIGITAL / INFERRED_FROM_OFFICIAL_ASSETS**, not official brand-book tokens. Preserve recognition while keeping blue as the dominant UI semantic color; red/yellow are controlled accents.

## 8. Preserve list

- Existing top-level route set: Home, Personal, Business, Digital Banking, Cards, Support, About, Investor.
- Existing accessible focus, skip-link and reduced-motion behavior.
- Existing responsive navigation breakpoint remediation from V5.1.
- Existing white/blue institutional visual grammar and compact banking utility bar.
- Existing explicit `STATIC` labeling for illustrative rate data.
- Existing mobile utility bar pattern, but update action semantics where needed.

## 9. V6 design principle

> **Orient → Explain → Prove → Hand off.**

A CTA must not imply a real system capability unless the target/action exists. Deep pages must work as independent landing pages, and the site should help users understand *what happens next* before moving them to Digital Plus, DigiBiz, an official document, branch finder or support channel.
