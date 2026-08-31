# Vietbank V7 — System Reality & Production Readiness

## Project mode
`production-candidate concept`, not a replacement production banking system.

## Capability matrix

| Capability | UI | Data/service | Reality | Evidence | Risk if misrepresented |
|---|---|---|---|---|---|
| Public product/marketing content | yes | hardcoded from first-party public research | STATIC | source inspection | stale product claims |
| Official external links | yes | Vietbank public URLs | REAL HANDOFF | URL/source verification | wrong/untrusted destination |
| Digital Plus launch | external | Vietbank Digital Plus | REAL HANDOFF | first-party public destination | phishing/trust risk if wrong |
| DigiBiz launch | external | Vietbank DigiBiz | REAL HANDOFF | first-party public destination | business access friction |
| Contact action | external | Vietbank contact page/hotline | REAL HANDOFF | official page/hotline | false lead capture if simulated |
| Branch finder | external | Vietbank branch page | REAL HANDOFF | first-party page | inaccurate location if mocked |
| Rates | external | Vietbank rates pages | REAL HANDOFF; data not integrated | first-party pages | fake/stale financial data |
| Fees/forms | external | Vietbank documents | REAL HANDOFF | first-party pages | wrong document/version |
| Card portfolio content | yes | static verified summary | STATIC | official card pages | terms may change |
| Card product imagery | yes in V7 | first-party public media | STATIC VERIFIED ASSET | public Vietbank media | asset may change/require licensed package for production |
| Search icon/action | routes to Support | no search index | PARTIAL / NOT SEARCH | source inspection | users may expect search results |
| Authentication | no | none | N/A | repository scope | severe if fake login created |
| Transaction operations | no | none | N/A | repository scope | severe if fake success created |
| Analytics events | named in strategy only | credentials unknown | UNKNOWN / NOT VERIFIED | no analytics integration evidence | false KPI claims |
| CMS | no live CMS contract | hardcoded React content | STATIC | source inspection | staleness/governance gap |

## Truthful-state rules

1. No success message for form/application/account opening inside this repository.
2. No live-looking rates, stock price, account balance or transaction history without a real source/integration.
3. External banking actions say they open an official channel.
4. Time-sensitive card/rate/fee conditions are summarized for orientation and defer to current Vietbank publication.
5. Static product image does not imply the product is currently issuable unless the current official product page supports it.

## Data contract for static product objects

Required:
- canonical product name;
- audience/use-case label;
- concise verified orientation description;
- official detail URL;
- source/research date internally.

Optional:
- verified product image URL;
- comparable attribute summary.

Missing image behavior:
- content must remain usable without image;
- do not replace with a synthetic fake bank card.

## Production gaps

| Gap | Current reality | Needed for real production replacement | Severity |
|---|---|---|---|
| First-party CMS/content ownership | STATIC | CMS/data model + owners + update workflow | P1 |
| Full legacy URL/SEO migration | UNKNOWN | route inventory, redirects, canonicals, sitemap | P1 |
| Search | PARTIAL | real index/query/empty/error states or relabel action | P1 if production scope |
| Analytics measurement | UNKNOWN | configured events + privacy/governance + QA | P2 |
| Licensed brand asset package | public remote logo/media | official supplied brand package | P1 for production brand lock |
| Formal accessibility conformance | baseline code only | scoped manual/AT/conformance evaluation | P1 if claiming WCAG conformance |
| Live environment security headers/privacy config | UNKNOWN | target-platform review | P1 |
| Field performance | UNKNOWN | RUM/production measurements | P2 |

## Completion boundary

V7 may be called a **verified static prototype / production-candidate concept** when build and representative interaction checks pass. It must not be called a production banking website, integrated CMS, validated UX, WCAG-conformant or performance-proven without the missing evidence above.
