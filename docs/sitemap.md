# Vietbank V7 Sitemap & Page Roles

> Scope: public marketing / discovery concept. Existing top-level routes are preserved to avoid unnecessary URL churn.

## 1. Route map

```text
/
├── /ca-nhan
│   ├── #accounts
│   ├── #savings
│   └── #loans
├── /doanh-nghiep
│   ├── #accounts
│   ├── #credit
│   ├── #cash-management
│   └── #trade
├── /ngan-hang-so
│   ├── #digital-plus
│   ├── #digibiz
│   └── #migration
├── /the
│   └── #cards
├── /ho-tro
│   ├── #rates
│   ├── #network
│   ├── #docs
│   ├── #contact
│   └── #security
├── /ve-vietbank
└── /nha-dau-tu
```

## 2. Page contracts

| Route | Role | Primary audience | Primary job | Primary next step |
|---|---|---|---|---|
| `/` | orientation / routing | all | identify user context + top task | category / utility / official digital channel |
| `/ca-nhan` | exploration | prospective + existing KHCN | map everyday financial needs to product groups | product/support/Digital Plus |
| `/doanh-nghiep` | solution exploration | SME/business | map operational need to account/capital/cash/trade | DigiBiz/advisor/forms |
| `/ngan-hang-so` | channel decision + migration | existing/prospective | distinguish Digital Plus vs DigiBiz and clarify legacy transition | official digital platform |
| `/the` | comparison/evaluation | KHCN choosing card | compare verified current card products | official product page / fees / forms |
| `/ho-tro` | recovery/self-service | existing customers | reach rates, branch, forms, contact, anti-fraud support | official Vietbank utility |
| `/ve-vietbank` | trust/evaluation | customers, partners, media, candidates | understand institution, scale, values and governance context | official corporate content |
| `/nha-dau-tu` | evidence/document access | shareholders/investors | orient to VBB and current disclosure library | official IR source |

## 3. IA principles

1. Preserve the existing route set; improve findability inside each route.
2. Navigation labels use user language where possible; organization taxonomy remains secondary.
3. Deep links must be useful as direct entry pages, not depend on homepage context.
4. Banking utilities are globally findable: tỷ giá, lãi suất, chi nhánh/PGD, biểu phí/biểu mẫu, hỗ trợ an toàn.
5. Digital Plus (personal) and DigiBiz (business) are never merged into one ambiguous login action.
6. Transaction/authentication actions are external handoffs; this repository is not a banking transaction system.
7. Search is not claimed as a real search engine until a search data source exists.

## 4. Preserve / no-change decisions

- Keep top-level routes from V6.
- Keep hash routing required by current GitHub Pages deployment.
- Keep official handoff model rather than simulating banking transactions.
- Keep Support as the unified utility/recovery page.

## 5. Future production IA gaps

`UNKNOWN / OUT OF CURRENT REPOSITORY SCOPE`:
- full legacy URL inventory and redirect map for `vietbank.com.vn`;
- CMS taxonomy and content-owner map;
- real site-search index;
- authenticated account routes;
- analytics/search-log evidence for top-task ranking.

These must be resolved before this concept can be treated as a replacement production information architecture.
