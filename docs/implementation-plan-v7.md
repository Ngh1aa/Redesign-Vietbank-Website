# Vietbank V7 — Implementation Plan

## Task classification
- Scope: whole-site visual/system refinement with targeted page changes.
- Type: redesign + implementation + production-candidate hardening.
- Risk: **HIGH** because banking trust, money-related product claims and official-channel handoffs are involved.
- Mode: production-candidate concept.

## Preserve constraints
- Keep existing top-level routes and hash-router deployment behavior.
- Reuse current React/Tailwind tokens/components before creating new primitives.
- Do not introduce authentication, transaction UI or fake success states.
- Keep public banking actions as verified official handoffs.
- Do not rewrite unrelated content merely to create visual novelty.

## T1 — Repair project truth
**Goal:** make `.uiux-profile.json` source-of-truth paths real.
**Files:** `docs/brand.md`, `docs/sitemap.md`, `.uiux-profile.json`.
**Expected:** profile references resolvable source documents; brand-book gaps remain UNKNOWN.
**Verification:** GitHub file existence + content review.

## T2 — Add V5.1 domain-artifact specialist
**Goal:** make current V5.1 specialist locally available in the project skill set.
**Files:** `.claude/skills/real-world-artifact-and-domain-metaphor-design/SKILL.md`, manifest/profile.
**Dependency:** current `Ngh1aa/skills_UIUX` source.
**Verification:** skill file exists and manifest includes it.

## T3 — Establish design DNA
**Goal:** replace generic banking-card soup with a coherent domain-native grammar.
**Files:** research/design docs, `src/lib/ui.tsx`.
**Expected:** section labels gain a small red/yellow dual-accent; interaction semantics unchanged.
**Edge cases:** no color-only meaning; accent not confused with status/error.
**Verification:** TypeScript build + cross-page source review.

## T4 — Real card-product presentation
**Goal:** use verified current Vietbank card imagery in `/the`.
**Files:** `src/lib/official.ts`, `src/pages/The.tsx`.
**Expected:** My Style, Luxury, Happy and Lifecare show first-party product images; no fake card details are generated.
**Edge cases:** media fails → product text/action remains usable; images have meaningful alt.
**Verification:** source URLs are first-party + TypeScript/build + live asset request.

## T5 — Home task ledger
**Goal:** turn high-frequency task tiles into a more scan-friendly statement/service-ledger structure.
**Files:** `src/pages/Home.tsx`.
**Expected:** same routes/actions preserved; rows expose sequence + task + context + arrow; mobile remains one-column/large-target.
**Edge cases:** segment switching, long Vietnamese labels, keyboard focus.
**Verification:** build + representative DOM/source review + live smoke.

## T6 — V7 metadata/system copy
**Goal:** remove stale V6 naming from route metadata while retaining concept/trust boundary.
**Files:** `src/components/Layout.tsx`, `app/index.html` if required.
**Verification:** route metadata source + generated shell.

## T7 — System reality + QA
**Goal:** ensure implementation does not overclaim production integration.
**Files:** `docs/system-reality.md`, `docs/verification-matrix.md`, `docs/qa-report-v7.md`.
**Verification:** no dead primary CTA; no fake success/live financial values; build/test workflow passes.

## T8 — Release
**Goal:** PR → CI → merge → GitHub Pages deployment → post-deploy smoke.
**Rollback:** revert V7 merge or use previous Pages deployment; no force-reset.
**Pass:** TypeScript + Vite build + shell verification + Pages deployment success + live asset/route smoke.
