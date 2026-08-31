# Vietbank — Sprint 3 Expert Walkthrough Baseline

## Scope and claim boundary

This is an expert/source walkthrough of the implemented journeys after Sprint 1 and Sprint 2. It is **not** evidence from real participants and must not be reported as user validation.

Reviewed journeys:
- Home → personal/business top tasks;
- Cards → intent finder → compare → official handoff;
- Support → current-rate source → local estimate → official calculator/support;
- Digital migration → Digital Plus;
- Business digital banking → DigiBiz;
- Security/support recovery.

## Baseline strengths

### 1. Task-first entry is coherent
Home separates personal and business contexts and exposes top tasks directly. Users do not need to understand Vietbank's internal organization before starting.

### 2. Trust boundary is unusually explicit
The redesign repeatedly states that credentials/OTP are not accepted and sends sensitive/current actions to Vietbank's official channels. This should reduce false-system-reality risk.

### 3. Card discovery now supports a real decision path
The journey moves from intent → shortlist → compare → official product/fee source instead of showing a static catalogue only.

### 4. Support has real recovery routes
Rates, branch finder, document centre, transaction trace and official calculators are reachable without fabricating live financial data.

## Risks to observe in moderated testing

### P1 hypothesis — multi-filter semantics may be interpreted as AND
Current Card Finder returns a card when it matches **at least one** selected need. A participant selecting two needs may assume the result must satisfy both. This is a comprehension risk, not an observed user failure yet.

**Observation protocol:** do not teach the OR behavior during the task. Record the participant's expectation and whether the current labels/result count make the behavior understandable. Only change the filter model or explanatory copy after observed evidence is synthesized.

### P1 hypothesis — external handoff can break journey confidence
Many high-trust actions open Vietbank's official site in a new tab. This is intentional, but participants may not understand whether they have left the redesign or why. Observe whether source labels and domain cues are enough.

### P1 hypothesis — local calculator may be mistaken for live Vietbank calculation
The calculator correctly requires a user-entered rate and labels the result illustrative. Still observe whether users understand the rate must be checked on Vietbank first and whether they can move back to the current-rate source without help.

### P2 hypothesis — dense utility hub can create choice overload
Support now contains more top tasks than before. Observe scanning order on mobile and whether users identify `Tỷ giá`, `Lãi suất`, `Công cụ tính`, `Chi nhánh`, `Tra soát giao dịch` without opening unrelated destinations.

### P2 hypothesis — Digital Plus vs DigiBiz is clear in content but may rely on reading
The distinction is explicit in headings and comparison content. Observe whether users choose correctly from navigation/top tasks before reading detail text.

### P2 hypothesis — no site-wide search
Support has strong routing, but there is no real site-search index. Users with a search-first mental model may look for search. Record this as findability evidence rather than adding fake search.

## High-confidence remediation included in Sprint 3

1. Add first-party Vietbank Digital Plus launch artwork to the digital-banking page so the product is recognizable from a real official asset rather than generic iconography.
2. Keep all existing card imagery first-party Vietbank.
3. Document a no-AI/no-stock media rule for future changes.
4. Keep the Card Finder semantics unchanged during the baseline round so participant expectation can be observed rather than pre-solved.

## What should not be changed before sessions

- Do not redesign the visual direction again.
- Do not add a fake global search.
- Do not integrate or fabricate live rates.
- Do not add eligibility/approval scoring.
- Do not hide official external handoffs merely to keep users on the concept site.
- Do not explain the Card Finder matching logic to participants before observing their expectation.

## Baseline severity summary

- P0 observed in expert walkthrough: none.
- P1 observed user evidence: none yet, because human sessions are pending.
- P1 hypotheses to test: filter semantics, external handoff confidence, calculator/live-data comprehension.
- P2 hypotheses to test: support scan density, platform distinction, search-first behavior.

## Next evidence gate

Run 6–8 moderated sessions using `docs/usability-validation-sprint3.md` and `docs/usability-scorecard-sprint3.md`. Only after synthesis should the project say which hypotheses were validated, invalidated or unresolved.
