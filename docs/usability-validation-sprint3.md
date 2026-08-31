# Vietbank — Sprint 3 Usability Validation Plan

## Evidence status

This document defines the validation round. It does **not** claim that moderated user testing has already happened.

- Expert/source walkthrough: available in `docs/expert-walkthrough-sprint3.md`.
- Human moderated sessions: `PENDING` until real participants complete the tasks below.
- Production analytics/RUM: `UNVERIFIED` in this repository.

This boundary follows `user-research-planning-and-recruitment`, `moderated-usability-testing` and `ux-benchmarking-and-metrics` from `skills_UIUX`.

## Decisions this round must answer

1. Can personal customers find the right card from their intent rather than knowing product names?
2. Can users compare 2–3 cards and understand that the result is orientation, not approval/advice?
3. Can users estimate savings/loan outcomes without mistaking locally entered rates for live Vietbank rates?
4. Can a customer affected by the 2026 Digital migration identify Digital Plus and reach the official channel safely?
5. Can a business customer distinguish DigiBiz from Digital Plus and find multi-level approval capability?
6. Can users recover safely when they need a branch, transaction trace or fraud/phishing verification route?

## Participants

Target: 6–8 moderated sessions. This is a directional qualitative sample, not statistical proof.

### Primary segment A — personal banking
Recruit 4–5 people who have used at least one Vietnamese banking app/site in the last 6 months and have recently done at least one of:
- compare/select a payment or credit card;
- check savings rates;
- estimate a loan;
- find a branch/support route;
- move between old/new digital-banking channels.

Include variation in digital confidence. At least 2 participants should be mobile-first and at least 1 should self-report low confidence with banking websites.

### Primary segment B — business banking
Recruit 2–3 owners/finance/admin users who have recently handled business payments, account administration or transaction approvals. At least 1 should understand multi-user/multi-level approval workflows.

### Exclusions
- people who worked on this redesign;
- people who already know the test script;
- convenience participants presented as representative customers.

## Privacy / consent

Collect only what is needed for the study. Do not ask participants to enter real account numbers, OTP, passwords, invoice identifiers or transaction identifiers. Use hypothetical task data only. Screen/audio recording requires explicit participant consent and a defined deletion schedule outside this repository.

## Session setup

- 45–60 minutes.
- Vietnamese first.
- Participant uses their normal device where possible; record device/browser.
- Moderator does not teach navigation during a task.
- Think-aloud is encouraged, but task success is based on observable behavior.
- Assistance is given only after the failure point is captured.

## Core tasks

### T1 — Card discovery and compare
**Scenario:** You want a Vietbank credit card mainly for everyday spending and would value a way to reduce/waive annual fees when you meet usage conditions. Find a suitable option and compare it with one other card before deciding what to inspect on Vietbank's official site.

**Direct success:** reaches Card Finder, identifies at least one relevant card, adds 2 cards to compare, reads at least one comparison criterion and can identify the official-detail/fee handoff.

**Critical error:** interprets the finder as approval/eligibility or believes the comparison contains guaranteed current fees/terms.

### T2 — Health-oriented card
**Scenario:** A family member expects regular healthcare spending and wants to know whether Vietbank has a card with a health-related benefit. Find the relevant option and verify where the final terms come from.

**Direct success:** reaches Lifecare through finder/content and opens/identifies the official product source.

### T3 — Savings estimate + current rate source
**Scenario:** You are considering depositing VND 200,000,000 for 6 months. You want a rough interest estimate, but you also want to know where the current Vietbank rate must be checked before making a decision.

**Direct success:** reaches Utility Center, understands they must supply/reference a current rate, can use the local estimate and can identify the official Vietbank rate/calculator handoff.

**Critical error:** assumes the local calculator rate is live or guaranteed.

### T4 — Digital migration
**Scenario:** You used the old Vietbank Digital app and need to know what channel you should use now and why.

**Direct success:** identifies Digital Plus, understands the old app stopped on 03/06/2026 and can reach the official Digital Plus/migration source.

### T5 — Business approval workflow
**Scenario:** Your company needs a digital banking channel where different staff can prepare and approve transactions with different permissions. Find the relevant Vietbank platform.

**Direct success:** selects DigiBiz rather than Digital Plus and identifies multi-level approval/permissions as the relevant capability.

### T6 — Suspicious link / safe recovery
**Scenario:** You receive a message containing a link that claims to be Vietbank and asks you to continue a banking task. You want to verify the safe next step without using the link.

**Direct success:** finds the security/support guidance, identifies `vietbank.com.vn` and/or hotline 1800 1122 as safe verification routes and avoids entering credentials on the redesign.

**Critical error:** follows an unverified third-party route or expects this redesign to accept credentials/OTP.

## Metrics

Capture per task:
- `Direct success | Assisted success | Partial | Failure`;
- time on task (directional, not a speed contest);
- wrong turns;
- critical errors;
- recovery without moderator help;
- moderator assistance count;
- SEQ after task: 1 very difficult → 7 very easy;
- confidence statement in participant's own words.

### Directional release targets
These are decision thresholds for the next iteration, not statistical claims:
- no repeated critical security/trust error across sessions;
- at least 80% direct/assisted success on T1, T3, T4 and T6;
- median SEQ target ≥5/7 on critical tasks;
- no single P1 issue observed by 3+ participants without remediation or an explicit rationale.

## Severity model

- **P0:** unsafe banking behavior, credential/OTP confusion, false approval/current-data belief.
- **P1:** blocks a critical task or causes repeated wrong-channel selection.
- **P2:** meaningful friction with safe recovery available.
- **P3:** polish or comprehension issue with low task impact.

## Synthesis

After each session: record observation before interpretation. After the round: cluster by task/journey, count recurrence, separate observed behavior from hypotheses, and map every P0/P1 to an owner and verification method.

## Completion rule

Do not call the redesign `validated UX` until real participant sessions are run and findings are synthesized. Expert review + CI are not substitutes for observed user behavior.
