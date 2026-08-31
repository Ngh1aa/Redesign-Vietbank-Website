# Vietbank Redesign V6 — Website Audit

## 1. Scope audited

- Live concept: https://ngh1aa.github.io/Redesign-Vietbank-Website/#/
- Official Vietbank: https://www.vietbank.com.vn/
- Repo routes: Home / Cá nhân / Doanh nghiệp / Ngân hàng số / Thẻ / Hỗ trợ / Về Vietbank / Nhà đầu tư / 404.
- Existing QA baseline: V5.1.

## 2. Inventory / decision matrix

| Page / surface | Current role | Decision | V6 action |
|---|---|---|---|
| Home | Orientation + task router | IMPROVE | Keep segment switcher; replace dead handoffs; reduce unsupported claims; strengthen verified official actions |
| Cá nhân | Product-category landing | IMPROVE | Add stable anchors; preserve eKYC/account story; remove unsupported blanket claims/numbers |
| Doanh nghiệp | Solution landing | IMPROVE | Replace illustrative “proof stats” with real DigiBiz / current business evidence; add official DigiBiz handoff |
| Ngân hàng số | Digital platform comparison | IMPROVE | Make this the canonical handoff page; real App Store/Google Play/DigiBiz URLs; remove dead links |
| Thẻ | Comparison / decision page | MAJOR IMPROVE | Replace invented card portfolio with current Vietbank card products and source-backed benefit framing |
| Hỗ trợ | Utility + support | MAJOR IMPROVE | Fake map/docs interactions become official handoffs; simulated form status visible before interaction |
| Về Vietbank | Corporate trust | KEEP / IMPROVE | Preserve brand story; ensure claims trace to official evidence |
| Nhà đầu tư | Investor hub | KEEP / IMPROVE | Preserve institutional role; real disclosures remain future integration requirement |
| Header utility | Global self-service | KEEP | Utility convention is useful and aligns with official site behavior |
| Mobile utility bar | Thumb-reach actions | KEEP / IMPROVE | Keep pattern; make digital action unambiguous |

## 3. Key findings

### P0-1 — Dead external CTAs
**Evidence:** Digital Plus / DigiBiz / docs / Zalo actions include `href="#"` in production-candidate surfaces.

**Insight:** A banking website cannot visually promise a handoff that does nothing.

**User impact:** Loss of trust and broken conversion.

**Business impact:** Digital adoption and qualified intent cannot complete.

**Recommendation:** Replace with verified official destinations or explicitly mark unavailable integration.

### P0-2 — Fake system states
**Evidence:** Branch finder input/map is static; contact form simulates a success state.

**Insight:** The UI looks operational before users learn it is demo-only.

**User impact:** False expectation, especially risky in financial-services UX.

**Recommendation:** Make the system reality visible *before* interaction; prefer official branch/docs handoff until integration exists.

### P0-3 — Invented card products inside a decision UI
**Evidence:** `Vietbank Cashback`, `Vietbank Travel`, `Vietbank Classic` are labelled illustrative only after the cards; official Vietbank card portfolio uses different names.

**Insight:** A comparison UI is interpreted as factual product information even when a small footer says “minh hoạ”.

**Recommendation:** Use real product names from the official portfolio and keep time-sensitive fee/promotion details linked to official sources.

### P1-1 — Product links do not land at the requested product
**Evidence:** Multiple mega-menu and top-task entries route to the same `/ca-nhan` or `/doanh-nghiep` top without anchors.

**Impact:** Higher cognitive load and weak deep-link/entry-context behavior.

**Recommendation:** Add stable section IDs and route directly to `#accounts`, `#savings`, `#loans`, `#cash-management`, etc.

### P1-2 — Generic “Đăng nhập” does not reflect platform choice
**Evidence:** Personal and business digital surfaces differ. Digital Plus is primarily mobile; DigiBiz has its own official web surface.

**Recommendation:** Header goes to the digital choice page; platform page contains verified official actions.

### P1-3 — Current route SEO is single-title SPA metadata
**Evidence:** Root document has one title/description for all routes.

**Recommendation:** Route-aware title + description at minimum; full server/static prerendering remains future technical work.

### P1-4 — Some “proof” is actually illustrative
**Evidence:** Business page stats include demo values like “1 ngày”; rate tables are static sample data.

**Recommendation:** Illustrative financial data must remain clearly labelled and should not be used as persuasive proof. Link to official current sources for real decisions.

## 4. Preserve list

### KEEP
- Existing route hierarchy and user familiarity.
- White + Vietbank blue institutional visual direction.
- Current focus-visible, skip-link, reduced-motion and responsive navigation improvements.
- Segment switcher on Home.
- Rates table *as a visual prototype* only when clearly labelled static.
- Trust/security section and hotline prominence.
- Digital Plus / DigiBiz side-by-side mental model.
- Editorial row pattern as an alternative to card-heavy UI.

### IMPROVE
- CTA destination specificity.
- Product anchors.
- Official-source link behavior.
- Card truthfulness.
- Demo state disclosure.
- Route metadata.
- Mobile action wording.

### MERGE
- Repeated generic “learn more” pathways should converge into specific page anchors or the Digital Banking handoff page.

### REMOVE / RETIRE
- `href="#"` primary actions.
- Fake branch-map interaction as if live.
- Invented card products in a real-product comparison context.
- Unsupported service turnaround/fee claims unless explicitly marked prototype data.

### ADD
- Verified external destination registry.
- External-link component/behavior.
- Official platform/store links.
- Route metadata map.
- Visible “demo/static/system reality” notices where integration is missing.

## 5. SEO / migration risk

No top-level route is removed in V6. Existing internal paths are preserved. V6 adds anchors and official external destinations only, therefore no redirect map is required for this pass.

Production migration to `vietbank.com.vn` still requires:
- complete old URL inventory;
- canonical/hreflang validation;
- redirect map for any changed slug;
- structured data and XML sitemap validation;
- real per-route rendering/indexability beyond the static GitHub Pages concept.

## 6. Priority matrix

| Finding | User impact | Business impact | Effort | Priority |
|---|---:|---:|---:|---:|
| Dead primary CTA | High | High | Low | P0 |
| Fake branch/form system state | High | High | Medium | P0 |
| Invented card product comparison | High | High | Medium | P0 |
| Digital platform handoff | High | High | Low | P1 |
| Product anchors | Medium | Medium | Low | P1 |
| Route metadata | Medium | Medium | Low | P1 |
| Unsupported numeric claims | Medium | High | Medium | P1 |
| Visual polish | Low | Medium | Medium | P2 |

## 7. V6 acceptance criteria

- [ ] No primary `href="#"` remains.
- [ ] Digital Plus has verified official landing + iOS + Android destinations.
- [ ] DigiBiz has verified official destination.
- [ ] Branch/docs actions go to official Vietbank resources until real APIs are connected.
- [ ] Card decision page uses real Vietbank product names.
- [ ] Demo form/map behavior is explicit before interaction.
- [ ] Page metadata changes by route.
- [ ] Existing responsive/a11y fixes from V5.1 remain intact.
- [ ] No top-level route removed.
