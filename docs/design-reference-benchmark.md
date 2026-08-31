# Design Reference Benchmark — Vietbank

> Checked: 2026-08-31. References are used to extract principles, not to claim their UX/conversion is superior or to copy visual identity.

## Project decision
- Domain: Vietnamese retail / SME banking public website.
- Primary jobs: product discovery, self-service utility access, digital-channel handoff, card evaluation, trust.
- Brand constraint: Vietbank recognition and official-source integrity must win over trendy banking UI.
- System constraint: this repository is a public concept/handoff experience, not an authenticated transaction system.

## Search strategy

Query families:
1. Vietnam banking personal/business product discovery.
2. Banking utility/support findability.
3. Credit-card filter/compare patterns.
4. Public banking homepage task orientation.
5. Digital banking storytelling without impersonating an authenticated dashboard.

Source mix prioritizes real production bank websites. Award/gallery sites are not used as UX evidence.

## Candidate shortlist

| Reference | Type | Role | Fit /100 | Decision | Rationale |
|---|---|---|---:|---|---|
| Techcombank | PRODUCTION | product discovery + compare | 91 | KEEP | Need-first credit-card discovery and comparison are strong references for product decision support. |
| ACB | PRODUCTION | filter/compare + practical taxonomy | 90 | KEEP | Product categories, filter and compare are close to Vietbank's market reality. |
| HSBC Vietnam | PRODUCTION | trust + utilities + card evaluation | 92 | KEEP | Rates/fees/forms/support/security stay globally findable and product comparison keeps conditions visible. |
| DBS Singapore | PRODUCTION | homepage task/search orientation | 87 | KEEP | “Find what you need”, popular searches and quick tools demonstrate a task-first public banking entry. |
| TPBank | PRODUCTION | digital banking storytelling | 78 | KEEP SELECTIVELY | Useful for app/service storytelling but more campaign/lifestyle-led than Vietbank should be. |
| MB Bank | PRODUCTION | top-task simplicity | 80 | KEEP SELECTIVELY | Clear service entry and support framing; less relevant for visual craft. |
| Vietbank current site | PRODUCTION / BASELINE | verified taxonomy/content/assets | n/a | KEEP AS TRUTH | Source for product names, official actions, documents and first-party assets; not the desired visual system. |

## Final reference roles

### A. Techcombank — product discovery
**Transferable**
- Start card discovery from user need, not network/product taxonomy alone.
- Keep comparison close to the shortlist decision.
- Show a small number of comparable attributes before deep detail.

**Do not copy**
- Red identity, exact card layouts, typography, campaign art direction or navigation composition.

### B. ACB — practical filter/compare
**Transferable**
- Make filter state, result count and comparison action obvious.
- Keep “detail” and “compare” as different tasks.
- Use compact product rows/cards that can be scanned quickly.

**Do not copy**
- Exact component styling, category taxonomy or promotional presentation.

### C. HSBC Vietnam — trust + utility discipline
**Transferable**
- Rates, fees, forms, contact, branch finder and security deserve first-class navigation positions.
- Financial-product pages should put fees/conditions/important information near the decision.
- Support/recovery routes should not be buried under corporate content.

**Do not copy**
- HSBC red language, global typography or exact mega-menu structure.

### D. DBS Singapore — task-first homepage
**Transferable**
- Public banking entry should help people “find what they need” before marketing depth.
- Popular tasks and quick tools can sit above editorial/promotional content.
- Search-like information scent is useful only when backed by real search; otherwise use explicit task shortcuts.

**Do not copy**
- DBS search implementation, ecosystem breadth or promotional feed.

### E. TPBank — digital product storytelling
**Transferable**
- Digital banking can use verified app visuals, short onboarding steps and benefit grouping.
- Personal and business digital channels need distinct storytelling.

**Do not copy**
- Youth/lifestyle campaign language or visual density where it conflicts with Vietbank trust goals.

## Extracted design DNA

### Layout grammar
- Public banking pages begin with orientation, not a fake dashboard.
- High-frequency utilities live in a slim global utility layer.
- Primary navigation focuses on customer/product journeys; corporate links move to secondary navigation/footer.
- Product evaluation uses compact rows: real product object → proposition → 2–3 key facts → detail/compare actions.
- Comparison uses aligned attributes and explicit condition caveats.

### Hierarchy
`context → task → product/utility evidence → condition/source → next action`

### Typography
- Be Vietnam Pro remains the proposed digital typeface.
- Homepage H1 may reach ~48–56px on large screens.
- Inner-page H1 stays around ~30–43px responsive rather than campaign scale.
- Section H2 stays around ~26–34px.
- Product-list title stays around ~21–25px.
- Body stays ~14.5–16px with generous Vietnamese line-height.

### Color/surface
- White / near-white remains dominant.
- Vietbank blue owns primary navigation/actions.
- Red + yellow remain sparse brand signature accents rather than large surfaces.
- Semantic status colors are not replaced by brand accents.

### Imagery
- First-party Vietbank packshots, real app UI and documentary/event photography only when verified.
- No AI-generated or generic stock-like banking photography.

### Interaction
- Conventional links/buttons remain conventional.
- External/official-channel transitions are clearly signaled.
- Mobile reorganizes; it does not simply shrink desktop grids/tables.

## Implementation handoff

1. Header: move Về Vietbank / Nhà đầu tư to secondary utility navigation on desktop; keep primary journey navigation compact.
2. Shared typography: reduce inner-page H1 and section-title scale; keep Home display size as the intentional exception.
3. Card Finder: reduce packshot footprint and product-title scale; expose 3 scan-friendly facts; group detail + compare actions together.
4. Support: preserve utility-first architecture already implemented.
5. Digital banking: preserve verified Digital Plus / DigiBiz media and official handoff.
6. Do not add fake site search until a real search index/data source exists.

## Sources checked
- https://techcombank.com/en/personal/spend/cards/credit-card
- https://acb.com.vn/the
- https://www.hsbc.com.vn/
- https://www.hsbc.com.vn/help/rates-and-fees/
- https://www.hsbc.com.vn/credit-cards/
- https://www.dbs.com.sg/personal/default.page
- https://tpb.vn/
- https://www.mbbank.com.vn/
- https://www.vietbank.com.vn/