# Vietbank V7 — Verification Matrix

> Source implementation head verified by CI: `9a85ef6bafaa00c60194aad2ef1209ab22be47d9`
> Workflow: `Build Pages Artifact` run `33370637143`

| Change | Expected outcome | Verification method | Pass condition | Result |
|---|---|---|---|---|
| Project truth repair | source-of-truth paths resolve | repository file check | brand + sitemap docs exist | PASS |
| V5.1 artifact specialist | specialist available locally | repository path/profile check | skill file exists + profile activates it | PASS |
| Shared SectionLabel signature | reusable Vietbank cue without status ambiguity | source review + TS build | red/yellow line is decorative + semantics unchanged | PASS |
| Home service ledger | top tasks keep destinations while card-soup is reduced | diff review + TypeScript + Vite build | all 12 segment tasks route to existing anchors | PASS |
| Home official utilities | no fake current financial values | source review | rate/branch/docs actions use centralized official URLs | PASS |
| Digital channel distinction | personal/business channels stay explicit | source review | Digital Plus and DigiBiz are separate destinations | PASS |
| Card product objects | only verified Vietbank media/names used | first-party research + source review | four product image URLs are first-party Vietbank media | PASS |
| Card comparison semantics | table is more accessible | source review | caption + col/row header scopes present | PASS |
| Card trust boundary | no false application state | source review | no number/approval/application-success simulation | PASS |
| Route/shell metadata | V7 naming is consistent | source review + generated shell | V7 title in app shell; runtime route titles V7 | PASS |
| TypeScript integrity | source compiles | CI `pnpm exec tsc --noEmit` | exit 0 | PASS |
| Production bundle | Vite creates Pages bundle | CI Vite build | exit 0 | PASS |
| Pages base path | generated shell points at repo base | CI grep | `/Redesign-Vietbank-Website/assets/` present | PASS |
| Bundle size observation | no accidental huge dependency introduced | CI build log | record, not a hard budget gate | 403.29 kB JS / 118.56 kB gzip; 54.48 kB CSS / 9.19 kB gzip |
| Keyboard/mobile visual behavior | controls usable at representative widths | browser/manual verification | no clipping; all actions reachable | UNVERIFIED pre-deploy |
| Screen reader behavior | structure understandable without visual metaphor | AT/manual test | task/card/table semantics announced coherently | UNVERIFIED |
| WCAG conformance | formal accessibility result | scoped conformance evaluation | documented methodology + pass | NOT CLAIMED |
| Field performance | real-user performance | production RUM/field data | agreed budget met | UNVERIFIED |
| Security headers/CSP | target deployment hardening | live response/config review | agreed headers/config | UNVERIFIED |

## CI evidence

Run `33370637143` completed successfully:
- dependency install — PASS;
- TypeScript check — PASS;
- Vite Pages build — PASS;
- generated shell verification — PASS.

Build output:
- `dist-pages/app/index.html`: 1.25 kB / 0.59 kB gzip;
- CSS: 54.48 kB / 9.19 kB gzip;
- JS: 403.29 kB / 118.56 kB gzip.

## Claim boundary

Passing build and source review verifies compilation/system consistency only. It does not prove conversion uplift, user validation, formal accessibility conformance, field performance or production security.
