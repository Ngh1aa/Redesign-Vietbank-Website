# Vietbank V7 — Release Readiness

## Release scope
GitHub Pages deployment of an independent redesign concept / production-candidate prototype.

## Gate status

| Gate | Status | Note |
|---|---|---|
| Project Truth | PASS | brand/sitemap source files repaired |
| Evidence / Research | PASS | first-party Vietbank + production references recorded |
| Business ↔ User | PASS | audience/top-task hypothesis documented |
| Journey / IA | PASS | routes preserved; Home/Card journeys updated |
| Design Reference | PASS | principles + do-not-copy documented |
| Domain Artifact / Metaphor | PASS | ledger L2 + card L3; no fabricated product objects |
| Brand / Visual Grammar | PASS | proposed digital direction + visual signature documented |
| Page Experience | PASS | Home/Card material changes map to page jobs |
| System Reality | PASS | real/static/handoff/unknown capabilities documented |
| Implementation Safety | PASS | isolated branch/PR; shared system reused |
| Security / Privacy | PARTIAL | no sensitive data capture; deployment hardening not assessed |
| Accessibility | PARTIAL | semantic baseline reviewed; AT/conformance not run |
| Performance / Responsive / Browser | PARTIAL | bundle measured; device/browser/field data not verified |
| Functional Verification | PASS | TypeScript + Vite + shell CI pass |
| Visual Verification | PARTIAL | source/diff review; screenshot QA not available in this pass |
| Integrity / No Fabrication | PASS | verified product assets; no fake live financial states |
| Release Readiness | PASS FOR CONCEPT | not production banking claim |
| Outcome Measurement | UNVERIFIED | no live analytics/RUM experiment data |

## Known P1 items before a real production replacement
- Vietbank-supplied licensed brand/media package.
- CMS/content governance and current product-data contract.
- Full legacy URL/redirect/SEO migration inventory.
- Real search implementation or explicit non-search affordance.
- Formal accessibility + representative browser/device verification.
- Production security/privacy/analytics configuration.

## Rollback
Prefer one of:
1. previous GitHub Pages deployment;
2. safe `git revert` of the V7 merge.

Do not use force-push/reset as routine rollback.

## Post-deploy smoke
After merge:
- confirm Pages deployment success;
- open root + `/#/the` + representative deep route;
- confirm generated V7 JS/CSS assets resolve;
- confirm public card image assets load from first-party Vietbank CDN;
- confirm official external destinations remain Vietbank domains/channels.

## Release decision
`APPROVE — production-candidate concept only`.
