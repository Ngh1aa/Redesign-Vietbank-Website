# Vietbank V7 — QA Report

## Review A — Spec / intent compliance

### PASS — project truth before assumption
- `docs/brand.md` and `docs/sitemap.md` now exist as profile source-of-truth files.
- No public full Vietbank brand book is claimed; digital tokens remain proposed.

### PASS — research before material design
- audience/top-task hypothesis documented;
- real production references benchmarked;
- banking artifact research documented;
- design DNA and do-not-copy rules recorded before implementation.

### PASS — domain-artifact integrity
- dominant ledger grammar uses L1–L2 structural transfer;
- only `/the` uses L3 direct form and only with verified Vietbank card media;
- no fake card numbers, receipts, statements, financial charts or official-looking synthetic documents were added.

### PASS — user intent / business intersection
- Home leads with context + top task + verified next action.
- Card journey provides product recognition, comparable attributes, condition/source gate and official next action.

### PASS — system reality
- no authentication/transaction form was created;
- no live-looking rate/balance/stock/application data was fabricated;
- sensitive/current actions remain official Vietbank handoffs.

### PASS — scope discipline
- existing route set/hash routing preserved;
- existing shared components/tokens reused;
- targeted source changes are Home, Cards, shared signature, centralized media and metadata.

## Review B — Code / experience quality

### PASS — build integrity
CI `33370637143`:
- TypeScript — PASS;
- Vite production build — PASS;
- GitHub Pages shell verification — PASS.

### PASS — content/data integrity
- current card names and orientation facts align with first-party product pages checked 2026-08-31;
- Digital Plus legacy-transition date remains 03/06/2026 per Vietbank notice;
- official URL ownership remains centralized in `src/lib/official.ts`.

### PASS — accessibility baseline improvements
- card images have meaningful alt text;
- comparison table now has caption and scoped headers;
- decorative signature/icons are `aria-hidden` where appropriate;
- primary row links retain normal anchor semantics and large minimum target heights.

### PARTIAL — responsive verification
Source strategy is responsive and mobile recomposes rows/cards, but no visual browser screenshots or device-lab pass are available in this tool run. Do not claim “fully responsive”.

### PARTIAL — visual craft verification
Diff/source review confirms the intended composition changes. A post-deploy smoke can verify asset/shell delivery, but visual screenshot inspection is still required for pixel/craft sign-off.

### PARTIAL — performance
No new JS dependency was added. Build JS is 403.29 kB / 118.56 kB gzip and CSS 54.48 kB / 9.19 kB gzip. No field/RUM or Lighthouse evidence is available.

### PARTIAL — security/privacy
The concept collects no login/OTP/transaction data and uses external-link isolation. Target-environment CSP/security headers/privacy configuration were not evaluated.

### UNVERIFIED — formal accessibility
No screen-reader/formal WCAG conformance evaluation was run.

## Findings

### P0
None found in source/CI review.

### P1
1. **Production brand package missing** — current remote logo/card assets are public first-party assets, not a supplied licensed brand package/CMS contract.
2. **Production CMS/content governance missing** — product/card summaries remain static and can become stale.
3. **Full production URL migration/search reality missing** — outside current concept repository.
4. **Formal accessibility/device/browser verification missing** — required before production claim.

### P2
1. Browser visual QA should check long Vietnamese labels at ~375px and 768px.
2. Remote card images should be cached/managed by the production media pipeline rather than depended on as permanent hotlinks.
3. Search icon still behaves as a route to Support, not a real query engine; production should either implement search or label the affordance more explicitly.

## Release recommendation

**APPROVE FOR MERGE AS PRODUCTION-CANDIDATE CONCEPT** after CI pass.

Do **not** label as production banking website, validated UX, WCAG-conformant or performance-proven.
