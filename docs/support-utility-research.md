# Support Utility Center — Sprint 2 Research

Research date: 2026-08-31

## Problem
The current Support page safely routes to official Vietbank resources, but the experience is still link-directory oriented. High-frequency tasks such as checking rates, estimating savings/loan payments, finding a branch, looking up invoices and tracing transactions should be visible as tasks before contact and long-form support content.

## Primary jobs-to-be-done
1. When I need a current financial reference, I want to reach the official Vietbank rate source quickly so I do not act on stale values.
2. When I am considering a deposit or loan, I want a quick estimate before contacting the bank so I can judge whether the direction is plausible.
3. When I need operational help, I want to find a branch, invoice lookup or transaction trace without navigating the organization structure.
4. When the task involves identity, OTP or transaction details, I want to know clearly when I am leaving this prototype for Vietbank's official system.

## First-party Vietbank evidence
- Foreign exchange page includes current-rate tables, charting and currency conversion, and labels rates as reference: https://www.vietbank.com.vn/ca-nhan/ho-tro/ty-gia
- Personal interest-rate page is the official current source for deposit rates: https://www.vietbank.com.vn/ca-nhan/ho-tro/lai-suat
- Vietbank already operates a personal calculator for borrowing and savings: https://www.vietbank.com.vn/ca-nhan/ho-tro/cong-cu-tinh-toan
- Vietbank also operates a business calculation tool: https://www.vietbank.com.vn/doanh-nghiep/ho-tro/cong-cu-tinh-toan
- Branch finder supports province/city and ward/commune selection: https://www.vietbank.com.vn/chi-nhanh
- Invoice lookup exists for personal and business customers.
- Transaction trace is a real Vietbank flow with identity verification and OTP: https://www.vietbank.com.vn/tra-soat-giao-dich/thong-tin-khach-hang
- Contact page publishes hotline 1800 1122, cskh@vietbank.com.vn, headquarters and SWIFT VNTTVNVX: https://www.vietbank.com.vn/ve-vietbank/lien-he

## Benchmark principles
### HSBC Vietnam
HSBC groups exchange rates, interest rates, fees and multiple calculators under one Rates & Fees utility hub. The useful principle is `reference data + planning tools + contact/recovery` in one task-oriented destination, not its visual treatment.
Source: https://www.hsbc.com.vn/help/rates-and-fees/

### ACB
ACB exposes a dedicated calculation-tools destination and publishes current rate references separately. The useful principle is to make calculation an explicit task rather than bury it in product detail.
Source: https://acb.com.vn/cong-cu-tinh-toan

## MVP scope
### Must have
- task-first utility index;
- official links for FX, rates, branches, documents, invoice lookup and transaction trace;
- local savings estimate with user-entered annual rate;
- local reducing-balance loan estimate with user-entered annual rate;
- direct links to Vietbank's official calculators/rate source;
- clear local/static vs official/real boundary;
- responsive stacking and keyboard-native form controls.

### Explicitly out of scope
- scraping or mirroring live Vietbank rates;
- eligibility scoring or credit approval prediction;
- collecting CCCD, OTP, account, invoice or transaction identifiers;
- submitting transaction-trace or contact requests from this repository;
- claiming calculator outputs match every Vietbank product or repayment convention.

## Success hypothesis
The sprint is successful at implementation level when a user can identify the correct support task from the first utility section, perform a safe local estimate without entering personal data, and understand when an action transfers to Vietbank's official system.

This is a design hypothesis, not validated user research. End-to-end usability testing remains a later sprint.
