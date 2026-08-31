# Support Utility Center — Interaction Spec

## Utility index
- Every row is a full-width native link target with a minimum height above 44px.
- Official Vietbank destinations open in a new tab with `noopener noreferrer`.
- The local calculator entry uses React Router and scrolls to `/ho-tro#calculators`.
- Labels describe the destination task, not internal department names.

## Savings estimate
### Inputs
- deposit amount in VND;
- term in months;
- annual interest rate entered by the user.

### Local calculation
`estimated interest = principal × annual rate × months / 12`

Assumption: simple interest, paid at maturity. This does not model every Vietbank deposit product, payout method or early-withdrawal rule.

### States
- incomplete input → neutral instruction;
- complete positive input → interest + principal-and-interest result;
- browser number constraints prevent obviously negative input, while calculation also rejects non-positive/invalid values;
- no network request and no success state.

## Loan estimate
### Inputs
- loan principal in VND;
- term in months;
- annual interest rate entered by the user.

### Local calculation
Model: equal principal repayment with interest on reducing outstanding principal.
- monthly principal = principal / months;
- monthly rate = annual rate / 12;
- first payment = monthly principal + principal × monthly rate;
- last payment = monthly principal + monthly principal × monthly rate;
- total interest = monthly rate × principal × (months + 1) / 2.

The result is illustrative. It does not model day-count conventions, fees, rate changes, grace periods, product-specific repayment schedules or approval.

### States
- incomplete input → neutral instruction;
- complete positive input → first payment, last payment, total estimated interest and total estimated repayment;
- no approval/eligibility language;
- no personal data collected.

## Accessibility
- persistent labels, not placeholder-only fields;
- native `input[type=number]` controls with numeric input mode;
- result regions use `aria-live=polite`;
- decorative icons are hidden from assistive technology;
- external links retain normal anchor semantics;
- utility tasks and calculator results remain understandable without icon/color cues.

## Mobile
- calculator panels stack vertically;
- fields stack below 640px and become three columns where space allows;
- result cells reflow without requiring horizontal scrolling;
- utility rows remain one task per row on narrow screens.

## System-reality contract
- LOCAL CALCULATORS = `STATIC/LOCAL` arithmetic only.
- RATE / FX / BRANCH / INVOICE / TRACE = `REAL HANDOFF` to Vietbank public systems.
- No current financial data is fetched into this repository.
- No identity, OTP, account, invoice or transaction data is requested here.
