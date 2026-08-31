# Card Finder Interaction Spec

## Pattern
Intent filter + shortlist + compare. No modal, wizard or simulated application flow.

## Filter state
- Initial: no filter, show all four verified international credit cards.
- Selected: one or more need chips use `aria-pressed=true`; show cards matching at least one selected need.
- Feedback: result count is visible and announced politely.
- Recovery: `Xóa bộ lọc` clears all needs.
- Empty: explain that no card matches the combination and provide a clear-filter recovery action.
- Persistence: `need=` query state is kept in the hash-router URL.

## Compare state
- Initial: no selected cards; explain how to add cards.
- One selected: show selected chip and ask for one more card.
- Two or three selected: render semantic comparison table.
- Limit: maximum 3; additional unselected compare controls become disabled and an `aria-live` message explains the limit.
- Removal: selected chip or product compare button removes the card.
- Recovery: `Xóa danh sách so sánh` clears comparison.
- Persistence: `compare=` query state is kept in the hash-router URL.

## Keyboard / accessibility
- Filter chips and compare controls are native buttons with at least 44px minimum height.
- Selected state is exposed with `aria-pressed`.
- Comparison table uses caption, column headers and row headers.
- Horizontal overflow is allowed on smaller screens rather than compressing columns below readability.
- Product imagery has meaningful alt text and is not required to understand the recommendation.
- No color-only selection state: selected controls also change wording/icon/state semantics.

## Trust / system reality
- Finder does not calculate approval probability, assigned credit limit or personalized eligibility.
- No login, OTP, card number or application-success state is represented.
- Product terms may change; official Vietbank product and fee pages remain the decision source.
- NAPAS is routed separately because its domestic/cash-withdrawal proposition is materially different from the four international credit cards in the main finder.

## Follow-up validation
Test at minimum:
1. Find a card for everyday spending.
2. Find a card for lounge/travel benefits.
3. Find a card oriented to family/supplementary cards.
4. Compare two shortlisted cards and identify a meaningful difference.
5. Find where to verify final fees/conditions.

Observe task success, wrong turns, filter comprehension, compare comprehension and whether users understand that the final action happens on Vietbank's official channel.
