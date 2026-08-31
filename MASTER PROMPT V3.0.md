# VIETBANK WEBSITE REDESIGN — MASTER EXECUTION PROMPT V3.0

> Phiên bản: V3.0
> Ngày cập nhật: 31/08/2026
> Tác giả: dựa trên MASTER-PROMPT-V5.0.md của Ngh1aa/skills_UIUX + research Vietbank
> Supersedes: V1.0

---

## MỤC LỤC

1. [Project](#1-project)
2. [Project Mode](#2-project-mode)
3. [Project Truth đã biết](#3-project-truth-đã-biết--phải-verify-lại-trước-khi-dùng)
4. [Skill Boot Sequence](#4-skill-boot-sequence)
5. [Research Vietbank trước khi design](#5-research-vietbank-trước-khi-design)
6. [Current-site Hypotheses cần kiểm chứng](#6-current-site-hypotheses-cần-kiểm-chứng)
7. [Audience Model](#7-audience-model)
8. [Homepage Role](#8-homepage-role)
9. [Proposed Information Architecture](#9-proposed-information-architecture-direction)
10. [Product Discovery System](#10-product-discovery-system)
11. [Digital Banking Experience](#11-digital-banking-experience)
12. [Trust Architecture](#12-trust-architecture)
13. [Design Reference Benchmark](#13-design-reference-benchmark)
14. [Desired Design DNA](#14-desired-design-dna)
15. [Brand Rule](#15-brand-rule)
16. [Visual System](#16-visual-system)
17. [Typography](#17-typography)
18. [Imagery](#18-imagery)
19. [Icon System](#19-icon-system)
20. [Motion](#20-motion)
21. [Mobile-first Banking UX](#21-mobile-first-banking-ux)
22. [Search](#22-search)
23. [Forms / Lead Conversion](#23-forms--lead-conversion)
24. [Security / Anti-Scam UX](#24-security--anti-scam-ux)
25. [Accessibility](#25-accessibility)
26. [SEO / URL Migration](#26-seo--url-migration)
27. [System Reality](#27-system-reality)
28. [Performance](#28-performance)
29. [Required Page Families](#29-required-page-families)
30. [Homepage Visual Expectation](#30-homepage-visual-expectation)
31. [Banking Utility Bar](#31-banking-utility-bar)
32. [Trust vs Promotion Balance](#32-trust-vs-promotion-balance)
33. [Content Governance](#33-content-governance)
34. [Redesign Preserve List](#34-redesign-preserve-list)
35. [Anti-pattern — CẤM](#35-anti-pattern--cấm)
36. [Required Strategy Outputs](#36-required-strategy-outputs)
37. [Implementation Rule](#37-implementation-rule)
38. [Verification Matrix](#38-verification-matrix)
39. [Two-stage Final Review](#39-two-stage-final-review)
40. [Success Criteria](#40-success-criteria)
41. [Final Deliverable](#41-final-deliverable)

---

## THAY ĐỔI SO VỚI V1.0 / V2.0

### V1.0 → V2.0
- Bổ sung skill set mở rộng theo catalog V4
- Thêm section Trust Architecture và Banking Utility Bar
- Audience model chi tiết theo intent

### V2.0 → V3.0 (bản này)
- Tích hợp **V5 architecture** (Evidence, Reference Intelligence, System Reality, Production Reliability)
- Cập nhật skill sequence theo **adaptive-skill-routing-and-context-budget** + **ai-agent-coding-guardrails**
- Bổ sung **system-reality labels** bắt buộc cho mọi function (REAL / MOCK / STATIC / SIMULATED / PARTIAL / UNKNOWN)
- Thêm **two-stage review** (Intent vs Craft) và **verification matrix** rõ ràng
- Bổ sung quy tắc **safe release / rollback** và **post-deploy smoke**
- Tách rõ **content cleanup / IA cleanup / URL migration** thành 3 task độc lập
- Bổ sung **measurement contract** (user need → service purpose → outcome → metric → data source)
- Tham chiếu profile `uiux-corporate` + 5 capability packs đã cài đặt (research-validation, experience-strategy, inclusive-trust, measurement-reliability, production-delivery)

---

# 1. PROJECT

Bạn được giao nhiệm vụ **nghiên cứu, tái cấu trúc UX/UI và redesign toàn diện website Vietbank**.

Website hiện tại:

`https://www.vietbank.com.vn/`

Skill library bắt buộc sử dụng:

`Ngh1aa/skills_UIUX` (đã clone tại `./skills_UIUX/`, đã cài 56 skills vào `./.claude/skills/`)

Master operating framework:

`skills_UIUX/MASTER-PROMPT-V5.0.md`

Đây KHÔNG phải task:

> "Làm giao diện ngân hàng hiện đại hơn."

Đây là task:

> **Tái thiết digital presence của Vietbank thành một website ngân hàng bán lẻ và doanh nghiệp hiện đại, đáng tin cậy, dễ tìm sản phẩm, hỗ trợ tốt quá trình ra quyết định, kết nối rõ với Vietbank Digital Plus / DigiBiz và phản ánh đúng định hướng chuyển đổi số của ngân hàng.**

Website mới phải cân bằng:

**Trust + Banking Utility + Product Discovery + Digital Banking + Conversion + Brand Distinctiveness + Accessibility + Security + Performance.**

Trạng thái khởi đầu của repo (đã thực hiện trước khi áp dụng prompt này):

```text
- index.html, styles.css, main.js  → static SPA rebuild từ source React + Tailwind cũ
- .uiux-profile.json               → uiux-corporate + 5 capability packs
- .claude/skills/                  → 56 skills đã cài từ skills_UIUX
- skills_UIUX/                     → source library (giữ làm dependency)
- src/                             → source React gốc (giữ làm reference)
```

Mọi bước tiếp theo phải dùng V5 architecture, không quay lại pattern monolithic mega-prompt.

---

# 2. PROJECT MODE

```yaml
project_name: Vietbank Website Redesign

request_type:
  - redesign_existing_website
  - design_and_implementation

project_mode:
  - production_candidate

existing_website:
  Vietbank official website (https://www.vietbank.com.vn/)

industry:
  Banking
  Retail Banking
  SME / Corporate Banking
  Digital Banking
  Financial Services

market:
  Vietnam

languages:
  - Vietnamese (primary)
  - English (secondary, future)

risk:
  high

primary_business_goal:
  - cải thiện trải nghiệm khách hàng trên website
  - giúp khách hàng tìm đúng sản phẩm nhanh hơn
  - hỗ trợ tăng acquisition và cross-sell
  - tăng kết nối giữa website và hệ sinh thái ngân hàng số
  - củng cố trust, security perception và brand credibility
  - hỗ trợ chiến lược chuyển đổi số

secondary_business_goals:
  - hỗ trợ khách hàng hiện hữu
  - giảm friction khi tra cứu thông tin
  - hỗ trợ SME/doanh nghiệp tìm giải pháp phù hợp
  - nâng chất lượng corporate/investor presence
  - hỗ trợ recruitment
  - cải thiện SEO và information architecture
```

Các trường technical chưa có dữ liệu phải giữ `UNKNOWN`.

Không tự giả định CMS, API, authentication hoặc backend.

---

# 3. PROJECT TRUTH ĐÃ BIẾT — PHẢI VERIFY LẠI TRƯỚC KHI DÙNG

Các fact sau là research seed, KHÔNG thay thế fresh research.

Vietbank định hướng trở thành:

> ngân hàng bán lẻ uy tín hàng đầu Việt Nam.

Phương châm hoạt động:

> Tăng trưởng — An toàn — Bền vững — Hiệu quả.

Brand / value themes cần nghiên cứu sâu:

```text
Chính trực
Hiệu quả
Am hiểu
Tuân thủ
Uy tín
An toàn
Bền vững
Khách hàng làm trung tâm
```

Năm 2026, Vietbank đang nhấn mạnh:

```text
chuyển đổi số
phát triển sản phẩm và dịch vụ
nâng cao trải nghiệm khách hàng
tăng trưởng CASA
customer-centric product development
```

**Vietbank Digital Plus** là digital banking proposition quan trọng cho khách hàng cá nhân (ra mắt 03/2026; ứng dụng Vietbank Digital cũ đã dừng từ 03/06/2026).

**Vietbank DigiBiz** phục vụ khách hàng doanh nghiệp.

Website hiện có các nhóm lớn:

```text
Cá nhân
Doanh nghiệp
Thẻ
Ngân hàng số
Về Vietbank
Nhà đầu tư
Tin tức / Khuyến mãi
Chi nhánh / ATM
Tỷ giá
Lãi suất
Biểu mẫu
Tra cứu / hỗ trợ
```

**PHẢI crawl / research lại toàn hệ thống trước khi redesign.** Không dùng các fact trên như evidence cuối cùng.

---

# 4. SKILL BOOT SEQUENCE

Đọc trước theo thứ tự:

```text
skills_UIUX/MASTER-PROMPT-V5.0.md
skills_UIUX/README.md
skills_UIUX/SKILL-CATALOG.md
.claude/skills/website-delivery-pipeline/SKILL.md
.claude/skills/adaptive-skill-routing-and-context-budget/SKILL.md
.claude/skills/project-context/SKILL.md
```

Sau khi hiểu scope, kích hoạt **smallest useful graph** theo `adaptive-skill-routing-and-context-budget`. Với full-site banking redesign này, mặc định cần xem xét các capability sau:

### Core research

```text
product-discovery
website-audit-and-redesign
evidence-provenance-and-research-ops
audience-intent-and-top-tasks
entry-context-and-visit-intent
ux-research-and-journey
ux-laws-and-heuristics
```

### IA / Findability

```text
information-architecture
site-search-and-findability
card-sorting-and-tree-testing
```

### Brand / Reference / Visual

```text
brand-guidelines
design-reference-research-and-benchmark
visual-design-direction
brand-distinctiveness-and-visual-signature
asset-media-and-art-direction
design-system-and-components
```

### Banking trust

```text
trust-credibility-and-transparency
ethical-ux-and-deceptive-patterns
inclusive-design-and-cognitive-accessibility
```

### Product / interaction

```text
conversion-and-content
journey-driven-content-and-layout
interaction-patterns-and-form-ux
complex-forms-and-wizards
state-feedback-and-error-recovery
authentication-account-and-recovery-ux
```

### Production

```text
system-reality-and-production-readiness
responsive-and-device-strategy
accessibility
security-and-privacy
web-quality-and-performance
seo-strategy
content-governance-and-cms
ai-agent-coding-guardrails
```

### Verification / release

```text
ui-craft-and-visual-qa
testing-strategy
visual-regression-and-design-drift
code-review-and-release
```

**Hard rule (V5):** Không báo `USED` nếu chưa thực sự đọc skill.

**Hard rule (V5):** Không tải nguyên 1 pack lớn cho một fix nhỏ low-risk.

---

# 5. RESEARCH VIETBANK TRƯỚC KHI DESIGN

Không bắt đầu Figma / code ngay.

Reverse-engineer toàn bộ website Vietbank.

Phải khảo sát ít nhất:

```text
Homepage

Cá nhân
- tài khoản
- tiết kiệm
- vay
- dịch vụ
- ngân hàng trực tuyến

Thẻ
- category
- card comparison nếu có
- card detail
- đăng ký / biểu mẫu

Doanh nghiệp
- tài khoản
- tiền gửi
- cho vay
- quản lý dòng tiền
- bảo lãnh
- tài trợ thương mại
- ngoại tệ
- chuyển tiền quốc tế
- DigiBiz

Ngân hàng số
- Digital Plus
- Internet Banking
- DigiBiz
- onboarding / help

Support
- tỷ giá
- lãi suất
- biểu phí
- biểu mẫu
- calculator
- FAQ
- tra soát
- chi nhánh / ATM
- contact

Corporate
- About
- vision / mission / values
- history
- leadership
- compliance

Investor Relations

News / Promotions

Careers
```

Tìm thêm:

```text
sitemap.xml
robots.txt
canonical
duplicate URLs
legacy URLs
language variants
deep links
orphan pages
broken pages
redirects
PDF / forms
external banking portals
```

Không remove URL SEO có giá trị mà không có migration plan.

---

# 6. CURRENT-SITE HYPOTHESES CẦN KIỂM CHỨNG

Không coi các mục dưới đây là fact cuối cùng cho đến khi audit rendered website.

### H1 — Navigation overload

Website có nhiều taxonomy / product group và utility actions cùng xuất hiện.

Kiểm tra:

```text
menu depth
duplication
information scent
cognitive load
desktop vs mobile navigation
utility navigation ownership
```

Mục tiêu không phải chỉ "làm mega menu đẹp hơn".

Mục tiêu là giảm thời gian để người dùng trả lời:

> "Tôi cần làm gì và phải đi đâu?"

---

### H2 — Product architecture thiên về cấu trúc ngân hàng hơn nhu cầu người dùng

Không mặc định khách hàng hiểu các thuật ngữ:

```text
huy động
tài trợ thương mại
tiền gửi ký quỹ
bảo lãnh
quản lý khoản phải thu
CASA
```

Nghiên cứu khả năng tổ chức song song:

```text
Product taxonomy
+
Need-based discovery
```

Ví dụ cá nhân:

```text
Tôi muốn mở tài khoản
Tôi muốn gửi tiết kiệm
Tôi cần vay
Tôi muốn thẻ
Tôi muốn quản lý tiền
Tôi cần giao dịch quốc tế
```

Ví dụ doanh nghiệp:

```text
Tôi cần vốn
Tôi muốn quản lý dòng tiền
Tôi cần trả lương
Tôi cần thu / chi hộ
Tôi xuất nhập khẩu
Tôi cần bảo lãnh
Tôi muốn số hóa giao dịch
```

---

### H3 — Digital banking architecture cần được hợp nhất về messaging

Audit relationship giữa:

```text
Vietbank Digital Plus
Vietbank Digital
Internet Banking
DigiBiz
Mobile Banking
Digital Banking landing pages
```

Không được để user tự đoán:

> "Ứng dụng nào dành cho tôi?"

Website mới phải giải thích rõ:

```text
Personal digital banking  → Digital Plus
Business digital banking  → DigiBiz
Web banking               → correct access path
Security / help           → contextual
```

Nếu legacy page vẫn còn SEO value:

```text
preserve URL
  → update content
hoặc
redirect có kiểm soát
```

---

### H4 — Digital Plus migration experience cần đánh giá lại

Old Vietbank Digital đã được chuyển sang Digital Plus.

Audit xem global popup / interstitial chuyển đổi hiện còn cần thiết hay không.

Không giữ popup toàn site chỉ vì legacy implementation có sẵn.

Đánh giá:

```text
recency
user segment affected
frequency cap
dismiss behavior
mobile obstruction
conversion impact
accessibility
```

Nếu thông báo không còn cần global prominence: chuyển thành contextual migration notice / help page.

---

### H5 — Utility services phải dễ truy cập hơn

Các task thường xuyên như:

```text
Tỷ giá
Lãi suất
ATM / Chi nhánh
Biểu phí
Biểu mẫu
Tra cứu
Tra soát
Hotline
Đăng nhập
Tải ứng dụng
```

không nên bị chìm trong navigation.

Thiết kế một **Banking Utility Layer** rõ ràng.

---

### H6 — Contact / form data cần audit theo data minimization

Không xóa field theo cảm tính.

Với mỗi field:

```text
Why needed?
Required by which workflow?
Stored where?
Who receives it?
What happens after submit?
```

Nếu field không có business / legal reason rõ: đề xuất giảm friction.

---

# 7. AUDIENCE MODEL

Không có một persona "khách hàng Vietbank".

Phải phân nhóm theo intent.

### A. Prospective Retail Customer

Top tasks:

```text
mở tài khoản
tìm tài khoản phù hợp
tìm thẻ
tìm khoản vay
so sánh lợi ích
xem ưu đãi
download Digital Plus
tìm chi nhánh
```

### B. Existing Retail Customer

```text
đăng nhập
Digital Plus
tỷ giá
lãi suất
biểu phí
biểu mẫu
support
tra soát
security / scam
ATM / branch
```

### C. SME / Business Owner

```text
vốn lưu động
tài khoản doanh nghiệp
cash management
thu hộ / chi hộ
payroll
DigiBiz
FX
trade finance
guarantee
international transfer
```

### D. Finance / Accounting Staff

Ưu tiên:

```text
operational banking
bulk payment
cash management
DigiBiz
forms
fees
support
```

### E. Investors / Media

```text
financial information
governance
disclosures
reports
stock / investor news
leadership
```

### F. Candidate

```text
culture
employer credibility
positions
application
```

Mỗi audience phải map:

```text
entry point
question
decision
evidence
CTA
next destination
```

---

# 8. HOMEPAGE ROLE

Homepage KHÔNG phải catalog tất cả sản phẩm.

Homepage phải hoạt động như:

> **Intent Router + Brand Trust Layer + Digital Banking Gateway**

Trong vài viewport đầu cần trả lời:

```text
Vietbank là ai?
Tôi đang cần ngân hàng cho cá nhân hay doanh nghiệp?
Tôi có thể làm gì ngay?
Tại sao tôi nên tin Vietbank?
Tôi vào Digital Plus / DigiBiz ở đâu?
```

Nghiên cứu một homepage architecture khoảng:

```text
01 Hero / customer promise

02 Intent switch
   Cá nhân | Doanh nghiệp

03 Top tasks / quick banking actions

04 Product / solution discovery

05 Digital banking ecosystem
   Digital Plus + DigiBiz

06 Trust / security / Vietbank scale

07 Contextual promotion / financial opportunity

08 News / safety / important notices

09 Support / branch / hotline / tools
```

Số block cuối cùng phải do content / job quyết định.

Không thêm section chỉ để kéo dài homepage.

---

# 9. PROPOSED INFORMATION ARCHITECTURE DIRECTION

Không copy nguyên sitemap dưới đây.

Dùng nó làm hypothesis để test.

```text
Trang chủ

Cá nhân
├── Tài khoản
├── Tiết kiệm
├── Thẻ
├── Vay
├── Bảo hiểm
├── Thanh toán & chuyển tiền
├── Ngân hàng số
└── Ưu đãi

Doanh nghiệp
├── Tài khoản & thanh toán
├── Tiền gửi
├── Vay & tài trợ vốn
├── Quản lý dòng tiền
├── Bảo lãnh
├── Tài trợ thương mại
├── Ngoại hối & quốc tế
├── Thu ngân sách
└── Vietbank DigiBiz

Ngân hàng số
├── Vietbank Digital Plus
├── DigiBiz
├── Internet Banking
├── Hướng dẫn
└── An toàn ngân hàng số

Hỗ trợ
├── Tỷ giá
├── Lãi suất
├── Biểu phí
├── Biểu mẫu
├── Công cụ tính toán
├── FAQ
├── Tra cứu / tra soát
├── ATM & Chi nhánh
└── Liên hệ

Về Vietbank
├── Tổng quan
├── Tầm nhìn / Sứ mệnh / Giá trị
├── Hành trình phát triển
├── Ban lãnh đạo
├── Quản trị & Tuân thủ
├── Tin tức
└── Phát triển bền vững

Nhà đầu tư

Tuyển dụng
```

Utility actions không nhất thiết nằm trong main navigation.

---

# 10. PRODUCT DISCOVERY SYSTEM

Không chỉ dùng grid hàng chục sản phẩm.

Tạo product discovery có:

```text
need-based entry
category
filter
comparison when meaningful
product recommendation cues
clear eligibility
benefit
rates / fees
requirements
documents
CTA
support
```

Product detail phải trả lời:

```text
Sản phẩm này dành cho ai?
Giải quyết nhu cầu gì?
Lợi ích chính?
Điều kiện?
Chi phí / lãi suất?
Cần chuẩn bị gì?
Quy trình?
Bao lâu?
Rủi ro / lưu ý?
Tôi bắt đầu thế nào?
```

Không bury fees / conditions.

Transparency là trust feature.

---

# 11. DIGITAL BANKING EXPERIENCE

Digital Plus phải trở thành một digital brand moment quan trọng của website mới.

Nhưng không biến toàn bộ Vietbank thành fintech startup.

Digital section cần thể hiện:

```text
simple
personalized
secure
useful
modern
human
```

Cho Digital Plus:

```text
primary benefits
financial management
transactions
security controls
personalization
how to start
download
support
security education
```

Cho DigiBiz:

```text
cash-flow control
payments
reports
approval / operations
mobile + web continuity
security
business support
```

Tạo clear handoff:

```text
marketing website
→ learn
→ compare
→ prepare
→ download / login / apply
→ support
```

---

# 12. TRUST ARCHITECTURE

Website ngân hàng phải thiết kế trust như một system, không như một block "Giải thưởng".

Dùng:

`trust-credibility-and-transparency`

Map trust evidence gần decision.

Trust layers nên xem xét:

```text
official identity
security guidance
anti-scam guidance
hotline / verified contact
regulatory / compliance information
fees / rates transparency
clear terms
leadership
network
service support
financial / investor disclosure
recency / date
digital-security cues
```

Fraud prevention phải discoverable.

Không dùng:

```text
fake badge
fake certificate
generic shield icon
unsupported "most secure"
fake testimonials
fabricated customer counts
```

---

# 13. DESIGN REFERENCE BENCHMARK

Dùng:

`design-reference-research-and-benchmark`

Research candidate pool khoảng 10–20 reference nếu scope cho phép.

### Tier A — Production banking references

Ít nhất audit:

```text
Techcombank
VPBank
DBS
OCBC
```

Có thể bổ sung:

```text
MB
TPBank
UOB
HSBC
Standard Chartered
CIMB
relevant regional banks
```

Mỗi reference chỉ lấy phần nó làm tốt.

Ví dụ role:

```text
Reference A — IA / product discovery
Reference B — audience segmentation
Reference C — digital banking
Reference D — support / security
Reference E — visual grammar
Reference F — mobile navigation
```

### Tier B / C inspiration

Có thể xem:

```text
Awwwards
MUUUUU
Behance
Dribbble
SiteInspire
Godly
Land-book
```

Nhưng:

> gallery ≠ UX evidence.

Không clone một banking concept trên Behance / Dribbble.

Extract principle only.

---

# 14. DESIRED DESIGN DNA

Không khóa visual trước research.

Nhưng direction cần thử nghiệm các thuộc tính:

```text
TRUSTWORTHY
MODERN
CLEAR
HUMAN
CONFIDENT
DIGITAL-FIRST
PREMIUM-BUT-ACCESSIBLE
```

Không dùng phong cách:

```text
generic fintech SaaS
crypto
dark trading dashboard
over-glassmorphism
random neon
purple fintech cliché
AI-gradient everywhere
excessive rounded card soup
```

Vietbank phải vẫn nhìn là:

> một ngân hàng Việt Nam đáng tin cậy đang chuyển đổi số,

không phải:

> một startup crypto mới thành lập.

---

# 15. BRAND RULE

Không redesign logo hoặc brand identity nếu không được yêu cầu.

Preserve official Vietbank identity.

Extract exact colors từ official brand assets / code.

Không tự tạo HEX mới rồi gọi là brand color.

Known visual signal:

```text
blue is an established Vietbank brand cue
```

Nhưng exact palette phải verify từ official asset.

Từ đó xây semantic token:

```text
Brand Primary
Brand Accent
Trust / Information
Success
Warning
Danger
Text Strong
Text Muted
Surface
Surface Elevated
Divider
Focus
```

Không dùng màu thương hiệu cho mọi element.

Token hiện tại (từ source code, cần verify với asset chính thức):

```css
--color-navy: #0a53a3;       /* PRIMARY BLUE — CTA, links, active nav, icons */
--color-navy-700: #003493;   /* DEEP BLUE — footer, dark sections, hover */
--color-navy-050: #eef4fb;   /* light blue surface */
--color-red: #d31e25;        /* controlled accent — notice, alert */
--color-yellow: #fec414;     /* highlight, badge, geometric accent */
--color-ink: #111827;        /* text strong */
--color-ink-soft: #667085;   /* text muted */
```

---

# 16. VISUAL SYSTEM

Thiết kế visual grammar rõ:

```text
layout
grid
container
section rhythm
type hierarchy
CTA hierarchy
data presentation
forms
cards
tabs
tables
alerts
product comparison
rates
branch result
search result
FAQ
article
investor document
```

Banking data phải scan nhanh.

Rates / fees không trình bày như marketing card thông thường.

---

# 17. TYPOGRAPHY

Typography phải:

```text
trustworthy
high readability
excellent Vietnamese diacritics
good numeric readability
clear financial-data hierarchy
mobile friendly
```

Test:

```text
₫
%
6.3% / năm
1.000.000.000 VNĐ
dates
rates
account / product names
long Vietnamese headings
English localization
```

Hiện tại: Be Vietnam Pro (400 / 500 / 600 / 700). Cần verify với brand guideline chính thức.

---

# 18. IMAGERY

Ưu tiên official / authentic content:

```text
real Vietbank people
real branches
real customers when licensed
real service context
Digital Plus UI / assets
business scenarios
```

Tránh:

```text
generic handshake
fake businessman stock
random skyscraper
AI-generated banker
fake banking dashboard
unrelated luxury imagery
```

Nếu asset thiếu: định nghĩa art-direction request, không fabricate proof.

---

# 19. ICON SYSTEM

Dùng một icon family thống nhất.

Icon banking cần semantic rõ:

```text
account
saving
card
loan
transfer
QR / payment
business
trade
international
branch
rate
calculator
support
security
document
```

Không mix:

```text
outline
3D
emoji
filled
gradient
```

trong cùng system nếu không có rationale.

Hiện tại repo dùng Lucide (stroke 2). Cần giữ consistency hoặc có lý do rõ ràng để đổi.

---

# 20. MOTION

Motion phải phục vụ:

```text
orientation
feedback
hierarchy
brand expression
```

Cho phép:

```text
subtle hero reveal
section reveal
number / rate update transition
tabs
filters
accordion
micro-feedback
```

Tránh:

```text
scroll hijacking
excessive parallax
banking content flying around
motion blocking access to information
```

Respect `prefers-reduced-motion`.

---

# 21. MOBILE-FIRST BANKING UX

Mobile không phải desktop collapse.

Ưu tiên top tasks:

```text
Digital Plus
login
branch
rates
support
product search
apply / contact
```

Test ít nhất:

```text
~375
~390
~768
~1024
~1280+
```

và pressure widths.

Navigation mobile phải được thiết kế riêng về composition.

Không duplicate cả desktop DOM chỉ để làm menu mobile nếu không cần.

---

# 22. SEARCH

Bank website có nhiều product / document / support content nên search là critical.

Audit current search.

Nghiên cứu global search với:

```text
query suggestions
product results
help results
news
forms
branches
rates
no-result recovery
typo tolerance if backend supports
```

Không giả lập search backend nếu hệ thống thật chưa tồn tại.

Label system reality rõ.

---

# 23. FORMS / LEAD CONVERSION

Form không được chỉ đẹp.

Map:

```text
intent
required data
legal / business reason
validation
privacy
submit destination
SLA / expectation
confirmation
error
retry
handoff
```

Ưu tiên progressive commitment.

Ví dụ:

```text
Tôi quan tâm vay
→ chọn nhu cầu
→ thông tin tối thiểu
→ contact preference
→ consent
→ submit
```

Không bắt user điền một form dài giống nhau cho mọi sản phẩm nếu không cần.

---

# 24. SECURITY / ANTI-SCAM UX

Do banking risk cao, kích hoạt:

`security-and-privacy`

Thiết kế security communication rõ nhưng không tạo fear.

Xem xét:

```text
official hotline
verified channels
fraud warning
safe login link
phishing warning
security centre
contact verification
card / security alerts
```

Login external / internal path phải unmistakable.

Không mô phỏng login nếu không kết nối hệ thống thật.

---

# 25. ACCESSIBILITY

Target baseline:

WCAG 2.2 AA design / implementation practices.

Nhưng:

> không claim WCAG conformance nếu chưa formal-evaluate.

Đặc biệt kiểm:

```text
keyboard
visible focus
screen reader labels
forms / errors
contrast
zoom
financial tables
modal
mobile navigation
carousel
rates
branch finder
captcha alternatives where applicable
```

---

# 26. SEO / URL MIGRATION

Bank website có nhiều legacy / product URLs.

Không redesign bằng cách thay toàn URL tùy tiện.

Tạo:

```text
current URL
current purpose
traffic / SEO value if known
target URL
KEEP / MERGE / REDIRECT / REMOVE
redirect target
canonical
reason
```

Audit duplicate / alternate paths.

Tách:

```text
content cleanup
IA cleanup
URL migration
```

Không đồng nhất ba việc này.

---

# 27. SYSTEM REALITY

Mỗi function phải label:

```text
REAL
MOCK
STATIC
SIMULATED
PARTIAL
UNKNOWN
```

Đặc biệt:

```text
login
Digital Plus download
DigiBiz
forms
rates
branch finder
search
calculator
transaction inquiry
document lookup
analytics
newsletter
```

Rendered UI không chứng minh integration.

Không tạo fake success.

Labeling hiện tại của repo:

```text
homepage rates / savings rates → STATIC (minh hoạ)
FX rates                       → STATIC
contact form                   → STATIC / SIMULATED (không submit thật)
brand / corporate info         → STATIC (minh hoạ)
navigation                     → REAL (hash routing, static host)
```

---

# 28. PERFORMANCE

Banking website cần cảm giác:

> FAST + STABLE + SAFE.

Định nghĩa route-specific budget cho:

```text
homepage
personal category
product detail
business category
digital banking
branch finder
news
```

Đặc biệt kiểm:

```text
hero images
campaign banners
fonts
third-party scripts
analytics
chat
maps
Digital Plus promotion
carousels
```

Không chạy theo Lighthouse vanity score, nhưng visual ambition không được phá Core Web Vitals.

Budget hiện tại (static SPA đã build):

```text
homepage payload  → ~50 KB CSS + ~80 KB JS (no framework, no Tailwind runtime)
fonts             → Google Fonts subset (Be Vietnam Pro) — preload critical
images            → Unsplash hot-link (placeholder) — cần migrate về CDN chính chủ khi có asset thật
third-party       → 0 (analytics chưa gắn)
```

---

# 29. REQUIRED PAGE FAMILIES

Không thiết kế mỗi page độc lập.

Xây page-family system:

```text
Homepage

Audience landing
- Personal
- Business

Product category

Product detail

Card category
Card detail / comparison

Digital banking landing

Support hub

Rate / fee / forms utility

Branch finder

Search results

News listing
News detail

Promotion listing / detail

About landing / content

Leadership

Investor landing
Investor documents

Contact

Security / scam information

404 / system states
```

Mỗi family có composition riêng.

Không dùng một template hero + cards cho toàn site.

Trạng thái hiện tại repo:

```text
Homepage, CaNhan, DoanhNghiep, NganHangSo, The, HoTro, VeVietbank, NhaDauTu, NotFound
→ đã có static rendering
→ cần audit trong mục 6 trước khi sửa
```

---

# 30. HOMEPAGE VISUAL EXPECTATION

Homepage phải có visual hierarchy mạnh nhưng không theatrical.

Hero ưu tiên:

```text
one customer promise
one primary CTA
one secondary utility CTA
authentic Vietbank visual or Digital Plus visual
```

Không:

```text
5 CTA
huge marketing paragraph
banner slider with 7 unrelated promotions
fake metric wall
random financial graphs
```

Promotions không được chiếm luôn brand narrative.

---

# 31. BANKING UTILITY BAR

Nghiên cứu dedicated utility access cho:

```text
Đăng nhập
Digital Plus
DigiBiz
Tỷ giá
Lãi suất
ATM / Chi nhánh
Hotline
Search
```

Desktop và mobile có thể có composition khác.

Không nhồi tất cả vào main nav.

Trạng thái repo: utility bar đã có ở header (lg+ viewport), mobile ẩn một số item.

---

# 32. TRUST VS PROMOTION BALANCE

Không biến homepage thành promotion portal.

Tách rõ:

```text
Evergreen banking proposition
Current promotion
Important notice
Security notice
Corporate news
```

Có expiry / content-governance rule.

Expired campaign không được tiếp tục ảnh hưởng primary navigation.

---

# 33. CONTENT GOVERNANCE

Mỗi dynamic content type cần owner:

```text
Product
Rate
Fee
Promotion
Notice
Security alert
News
Investor disclosure
Branch
Form / PDF
FAQ
```

Define:

```text
owner
published_at
updated_at
effective_from
effective_to
expiry
review cadence
```

Thông tin tài chính stale là trust risk.

---

# 34. REDESIGN PRESERVE LIST

Trước khi xóa / thay đổi, lập:

```text
Strong content
High-value SEO URLs
Important customer utilities
Legal / compliance content
Investor content
Working integrations
Brand assets
Digital banking links
Forms
Current announcements
```

Redesign không đồng nghĩa rewrite toàn bộ.

---

# 35. ANTI-PATTERN — CẤM

Không tạo:

```text
fintech purple gradient
dark dashboard aesthetic
random glassmorphism
giant rounded cards everywhere
bento grid mọi section
fake app dashboard
fake credit card renders nếu không phải sản phẩm thật
fake testimonial
fake awards
fake customer statistics
crypto aesthetics
AI people
generic "Banking reimagined" copy
```

Không copy Techcombank / VPBank / DBS / OCBC surface.

Học principle. Áp dụng principle. Không clone.

---

# 36. REQUIRED STRATEGY OUTPUTS

Trước implementation lớn, tạo `website-strategy/` với:

```text
00-project-truth.md
01-research-and-evidence.md
02-current-site-audit.md
03-audience-and-top-tasks.md
04-owner-goal-user-intent-map.md
05-user-stories-and-journeys.md
06-information-architecture.md
07-sitemap.md
08-content-strategy.md
09-design-reference-benchmark.md
10-brand-and-visual-direction.md
11-design-system.md
12-component-system.md
13-page-architecture.md
14-system-reality-and-data-contracts.md
15-interaction-and-state-spec.md
16-responsive-browser-strategy.md
17-security-privacy.md
18-seo-url-strategy.md
19-implementation-plan.md
20-verification-matrix.md
21-analytics-measurement.md
22-release-readiness.md
23-qa-report.md
24-assumptions-risks-limitations.md
25-decision-log.md
```

Không tạo docs rỗng chỉ để đủ danh sách.

Mỗi doc phải có:

```text
claim
evidence
source / date
confidence
limitation
decision
verification
```

---

# 37. IMPLEMENTATION RULE

Source repository đã được cung cấp (`./`).

Sau strategy đủ evidence, tiến hành implementation.

Không dừng để xin approve từng phase nếu request là execute.

Trước code:

```text
inspect git
inspect project
inspect existing components
inspect tokens
inspect routes
inspect APIs / data
inspect current responsive behavior
```

Sau đó:

```text
plan
implement incrementally
verify each material change
```

Không rewrite unrelated code.

Tuân thủ `ai-agent-coding-guardrails`:

```text
proportional planning
preserve user changes
isolated branch / worktree when scope warrants
spec-vs-quality review (Stage A + Stage B)
```

---

# 38. VERIFICATION MATRIX

Mọi change lớn:

```text
CHANGE
→ EXPECTED OUTCOME
→ METHOD
→ PASS CONDITION
→ RESULT
```

Ví dụ:

```text
Mega navigation redesign
→ faster product discovery
→ task walkthrough + mobile / desktop QA
→ core destination reachable without ambiguity

Digital Plus CTA
→ clear digital entry
→ all relevant routes / device states
→ correct target, no obsolete app messaging

Loan form
→ lower friction without losing required data
→ validation / error / network tests
→ correct data + truthful states

Branch finder
→ easier location discovery
→ location / search / result / no-result tests
→ complete and recoverable
```

---

# 39. TWO-STAGE FINAL REVIEW

### Stage A — Intent

Check:

```text
đúng Vietbank?
đúng banking?
đúng audience?
đúng business objective?
đúng brand?
đúng user journey?
```

### Stage B — Craft / Production

Check:

```text
visual craft
responsive
accessibility
content
forms
security
performance
SEO
system reality
browser
regression
```

**Một website đẹp nhưng user không tìm được tỷ giá, khoản vay hoặc Digital Plus:**

> FAIL.

**Một website usable nhưng generic đến mức che logo không biết là Vietbank:**

> FAIL.

---

# 40. SUCCESS CRITERIA

Redesign chỉ PASS khi có evidence rằng architecture / design mới:

```text
giúp user biết mình đang ở Personal hay Business
giúp tìm top banking tasks nhanh
giảm ambiguity giữa Digital Plus / DigiBiz / legacy digital
làm product discovery dễ hiểu hơn
nâng trust perception bằng evidence thật
làm utility services discoverable
giữ transparency về fees / rates / requirements
preserve SEO / content / business value
có visual identity Vietbank rõ ràng
mobile usable
không fabricate integration
không tạo security / privacy regression
```

Không claim conversion increase nếu chưa có analytics / outcome data.

---

# 41. FINAL DELIVERABLE

Khi hoàn tất, báo cáo:

```text
1.  Vietbank understanding
2.  Research sources
3.  Current-site P0 / P1 / P2 / P3 issues
4.  Preserve list
5.  Audience & top tasks
6.  Owner ↔ user goal map
7.  Journey
8.  New IA / sitemap
9.  Reference benchmark
10. Vietbank Design DNA
11. Visual direction
12. Design system
13. Page-family system
14. Digital Plus / DigiBiz architecture
15. Trust / security UX
16. Implementation changes
17. Responsive / browser verification
18. Accessibility / performance / security status
19. SEO migration
20. Unverified areas / remaining risks
21. Skills actually USED
```

---

# FINAL DESIGN PRINCIPLE

Website Vietbank mới không được chỉ nói:

> "Chúng tôi là ngân hàng."

Nó phải giúp từng người dùng nhanh chóng hiểu:

> **Vietbank có thể giúp gì cho tôi, tôi nên chọn giải pháp nào, tại sao tôi có thể tin ngân hàng này và tôi cần làm gì tiếp theo.**

Mọi page / section / component phải truy ngược được:

```text
Vietbank truth
↓
Customer need
↓
Decision
↓
Information / proof
↓
Interaction
↓
CTA
↓
System reality
↓
Verification
```

Nếu không truy ngược được:

> reconsider / remove.

---

## PHỤ LỤC A — REPO STATE KHI ÁP DỤNG PROMPT NÀY

```text
Thư mục gốc:
├── index.html                  # static SPA entry
├── styles.css                  # ~1100 dòng vanilla CSS, thay thế Tailwind utility
├── main.js                     # SPA + hash router, 9 trang
├── .uiux-profile.json          # uiux-corporate profile
├── .claude/skills/             # 56 skills đã cài từ skills_UIUX
├── skills_UIUX/                # source library (dependency)
├── src/                        # source React + Tailwind cũ (giữ làm reference)
└── MASTER PROMPT V3.0.md       # file này
```

## PHỤ LỤC B — KÍCH HOẠT SKILL ĐỀ XUẤT CHO GIAI ĐOẠN TIẾP THEO

```text
Giai đoạn 1 — Audit + research:
  product-discovery
  website-audit-and-redesign
  audience-intent-and-top-tasks
  evidence-provenance-and-research-ops
  ux-research-and-journey

Giai đoạn 2 — IA + content:
  information-architecture
  site-search-and-findability
  content-governance-and-cms
  journey-driven-content-and-layout
  conversion-and-content

Giai đoạn 3 — Brand + visual:
  brand-guidelines
  design-reference-research-and-benchmark
  visual-design-direction
  brand-distinctiveness-and-visual-signature
  design-system-and-components
  asset-media-and-art-direction

Giai đoạn 4 — Trust + accessibility:
  trust-credibility-and-transparency
  inclusive-design-and-cognitive-accessibility
  ethical-ux-and-deceptive-patterns
  accessibility
  security-and-privacy

Giai đoạn 5 — Interaction + advanced UX:
  interaction-patterns-and-form-ux
  complex-forms-and-wizards
  authentication-account-and-recovery-ux
  state-feedback-and-error-recovery
  responsive-and-device-strategy

Giai đoạn 6 — Production + verify:
  system-reality-and-production-readiness
  web-quality-and-performance
  testing-strategy
  ui-craft-and-visual-qa
  visual-regression-and-design-drift
  code-review-and-release
  production-monitoring-and-maintenance
  ai-agent-coding-guardrails
  seo-strategy
```

BẮT ĐẦU bằng việc research và reverse-engineer website Vietbank hiện tại.
KHÔNG bắt đầu bằng redesign homepage.
