# Vietbank Card Finder — Research & Scope

Research date: 2026-08-31

## Problem
The current card page presents verified products and a static comparison table, but users still need to read the catalogue before understanding which card is relevant to their intent.

## Primary JTBD
When I am considering a Vietbank credit card, I want to start from the benefit I care about and narrow the catalogue quickly, so I can compare only relevant products before opening official conditions and fees.

## Evidence used
### Vietbank first-party
- Visa My Style: everyday-spend orientation; up to 55 interest-free days; published limit 10–500 million VND; annual-fee waiver mechanism subject to conditions.
- Visa Luxury Platinum: premium/travel orientation; lounge privileges subject to spend; up to 55 interest-free days; published limit 50 million–1 billion VND; annual-fee waiver mechanism subject to conditions.
- Mastercard Credit Happy: family orientation; supplementary-card policy; up to 55 interest-free days; published limit 5–500 million VND; annual-fee waiver mechanism subject to conditions.
- Mastercard Credit Lifecare: healthcare orientation; up to 10% discount at CIH; up to 55 interest-free days; published limit 50 million–1 billion VND.
- Vietbank NAPAS credit: distinct domestic/cash-withdrawal orientation; keep as a separate routing option rather than force it into the same international-card comparison mental model.

### Benchmark principles
- Techcombank starts card discovery from user intent such as travel and online shopping, then exposes compare actions.
- ACB exposes product-level “add to compare” rather than requiring users to remember attributes across pages.

These are interaction principles only; the Vietbank layout, visual language and card taxonomy remain project-specific.

## MVP scope
- Need-based multi-select filter for four verified international credit cards.
- Visible selected-filter state, result count, clear filters and empty-state recovery.
- Select up to 3 cards for comparison.
- Dynamic semantic comparison table.
- Comparison/filter state persisted in the hash-router query string.
- Official Vietbank product/fee destinations remain the source for final decisions.
- Separate route/callout for NAPAS domestic-card intent.

## Explicitly out of scope
- Eligibility scoring or approval prediction.
- Personalized financial advice.
- Application/login/OTP flows.
- Live fees, promotions or rates from an API.
- Claims that finder ranking is validated by user research.

## Success hypothesis
The finder should reduce catalogue scanning and make the reason for each recommendation legible. Validation should later measure task success, time to shortlist, wrong-turn rate and comprehension of the official-handoff boundary.
