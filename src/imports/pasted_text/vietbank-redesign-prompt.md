MASTER PROMPT V3.0.md
Tệp
cập nhật prompt cho mình và push commit lên github
MASTER PROMPT V5.0.md
Tệp
@Tìm kiếm trên mạng
 sử dụng bộ skill 
Ngh1aa/skills_UIUXkết hợp MASTER-PROMPT-V5.0.md  cùng với nghiên cứu vietbank https://www.vietbank.com.vn/ để viết prompt redesign cho mình

Mình đã đối chiếu MASTER-PROMPT-V5.0.md bạn gửi với catalog V5 hiện tại. Với Vietbank, nhóm skill phù hợp nhất không phải chỉ corporate-website, mà là tổ hợp website audit + audience/top tasks + IA/findability + reference benchmark + trust + advanced interaction + security/privacy + production delivery. Catalog hiện cũng có system-reality-and-production-readiness, production-delivery, testing-strategy, code-review-and-release để xử lý đúng mức rủi ro của website ngân hàng.

Research hiện tại cho thấy Vietbank định hướng trở thành ngân hàng bán lẻ uy tín hàng đầu, nhấn mạnh tăng trưởng/an toàn/bền vững/hiệu quả; kế hoạch 2026 tập trung chuyển đổi số, nâng sản phẩm-dịch vụ và trải nghiệm khách hàng. Digital Plus được ra mắt tháng 3/2026 và ứng dụng Vietbank Digital cũ đã dừng từ 03/06/2026. Website hiện có catalogue sản phẩm lớn, nhiều utility/service path, và các dấu hiệu cần audit lại như Digital/Digital Plus/DigiBiz cùng tồn tại, navigation rất nhiều tầng và một số route/content có biểu hiện trùng lặp.

Về benchmark, mình ưu tiên website ngân hàng production thật thay vì lấy Dribbble làm UX proof: Techcombank cho retail/product discovery + digital entry, VPBank cho segmentation và SME journeys, DBS cho task-oriented digital services/help, OCBC cho personalization, app education và security guidance. Behance/Dribbble chỉ nên dùng thêm cho art direction/component ideas, đúng với rule của skill reference benchmark.

Đây là prompt mình đề xuất để đưa thẳng cho agent:

VIETBANK WEBSITE REDESIGN — MASTER EXECUTION PROMPT V1.0
1. PROJECT

Bạn được giao nhiệm vụ nghiên cứu, tái cấu trúc UX/UI và redesign toàn diện website Vietbank.

Website hiện tại:

https://www.vietbank.com.vn/

Skill library bắt buộc sử dụng:

Ngh1aa/skills_UIUX

Master operating framework:

MASTER-PROMPT-V5.0.md

Đây KHÔNG phải task:

“Làm giao diện ngân hàng hiện đại hơn.”

Đây là task:

Tái thiết digital presence của Vietbank thành một website ngân hàng bán lẻ và doanh nghiệp hiện đại, đáng tin cậy, dễ tìm sản phẩm, hỗ trợ tốt quá trình ra quyết định, kết nối rõ với Vietbank Digital Plus/DigiBiz và phản ánh đúng định hướng chuyển đổi số của ngân hàng.

Website mới phải cân bằng:

Trust + Banking Utility + Product Discovery + Digital Banking + Conversion + Brand Distinctiveness + Accessibility + Security + Performance.

2. PROJECT MODE
project_name: Vietbank Website Redesign

request_type:
  - redesign_existing_website
  - design_and_implementation

project_mode:
  - production_candidate

existing_website:
  Vietbank official website

industry:
  Banking
  Retail Banking
  SME / Corporate Banking
  Digital Banking
  Financial Services

market:
  Vietnam

languages:
  - Vietnamese
  - English

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

Các trường technical chưa có dữ liệu phải giữ UNKNOWN.

Không tự giả định CMS, API, authentication hoặc backend.

3. PROJECT TRUTH ĐÃ BIẾT — PHẢI VERIFY LẠI TRƯỚC KHI DÙNG

Các fact sau là research seed, KHÔNG thay thế fresh research.

Vietbank định hướng trở thành:

ngân hàng bán lẻ uy tín hàng đầu Việt Nam.

Phương châm hoạt động:

Tăng trưởng — An toàn — Bền vững — Hiệu quả.

Brand/value themes cần nghiên cứu sâu:

Chính trực
Hiệu quả
Am hiểu
Tuân thủ
Uy tín
An toàn
Bền vững
Khách hàng làm trung tâm

Năm 2026, Vietbank đang nhấn mạnh:

chuyển đổi số
phát triển sản phẩm và dịch vụ
nâng cao trải nghiệm khách hàng
tăng trưởng CASA
customer-centric product development

Vietbank Digital Plus là digital banking proposition quan trọng cho khách hàng cá nhân.

Vietbank DigiBiz phục vụ khách hàng doanh nghiệp.

Website hiện có các nhóm lớn:

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

PHẢI crawl/research lại toàn hệ thống trước khi redesign.

4. SKILL BOOT SEQUENCE

Đọc trước:

MASTER-PROMPT-V5.0.md

README.md
SKILL-CATALOG.md

website-delivery-pipeline/SKILL.md
adaptive-skill-routing-and-context-budget/SKILL.md
project-context/SKILL.md

Sau khi hiểu scope, kích hoạt smallest useful graph, nhưng full-site banking redesign này mặc định cần xem xét các capability sau.

Core research
product-discovery
website-audit-and-redesign
evidence-provenance-and-research-ops
audience-intent-and-top-tasks
entry-context-and-visit-intent
ux-research-and-journey
ux-laws-and-heuristics
IA / Findability
information-architecture
site-search-and-findability
card-sorting-and-tree-testing
Brand / Reference / Visual
brand-guidelines
design-reference-research-and-benchmark
visual-design-direction
brand-distinctiveness-and-visual-signature
asset-media-and-art-direction
design-system-and-components
Banking trust
trust-credibility-and-transparency
ethical-ux-and-deceptive-patterns
inclusive-design-and-cognitive-accessibility
Product / interaction
conversion-and-content
journey-driven-content-and-layout
interaction-patterns-and-form-ux
complex-forms-and-wizards
state-feedback-and-error-recovery
authentication-account-and-recovery-ux
Production
system-reality-and-production-readiness
responsive-and-device-strategy
accessibility
security-and-privacy
web-quality-and-performance
seo-strategy
content-governance-and-cms
ai-agent-coding-guardrails
Verification / release
ui-craft-and-visual-qa
testing-strategy
visual-regression-and-design-drift
code-review-and-release

Không báo USED nếu chưa thực sự đọc skill.

5. RESEARCH VIETBANK TRƯỚC KHI DESIGN

Không bắt đầu Figma/code ngay.

Reverse-engineer toàn bộ website Vietbank.

Phải khảo sát ít nhất:

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
- onboarding/help

Support
- tỷ giá
- lãi suất
- biểu phí
- biểu mẫu
- calculator
- FAQ
- tra soát
- chi nhánh/ATM
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

Tìm thêm:

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
PDF/forms
external banking portals

Không remove URL SEO có giá trị mà không có migration plan.

6. CURRENT-SITE HYPOTHESES CẦN KIỂM CHỨNG

Không coi các mục dưới đây là fact cuối cùng cho đến khi audit rendered website.

H1 — Navigation overload

Website có nhiều taxonomy/product group và utility actions cùng xuất hiện.

Kiểm tra:

menu depth
duplication
information scent
cognitive load
desktop vs mobile navigation
utility navigation ownership

Mục tiêu không phải chỉ “làm mega menu đẹp hơn”.

Mục tiêu là giảm thời gian để người dùng trả lời:

“Tôi cần làm gì và phải đi đâu?”

H2 — Product architecture thiên về cấu trúc ngân hàng hơn nhu cầu người dùng

Không mặc định khách hàng hiểu các thuật ngữ:

huy động
tài trợ thương mại
tiền gửi ký quỹ
bảo lãnh
quản lý khoản phải thu
CASA

Nghiên cứu khả năng tổ chức song song:

Product taxonomy
+
Need-based discovery

Ví dụ cá nhân:

Tôi muốn mở tài khoản
Tôi muốn gửi tiết kiệm
Tôi cần vay
Tôi muốn thẻ
Tôi muốn quản lý tiền
Tôi cần giao dịch quốc tế

Ví dụ doanh nghiệp:

Tôi cần vốn
Tôi muốn quản lý dòng tiền
Tôi cần trả lương
Tôi cần thu/chi hộ
Tôi xuất nhập khẩu
Tôi cần bảo lãnh
Tôi muốn số hóa giao dịch
H3 — Digital banking architecture cần được hợp nhất về messaging

Audit relationship giữa:

Vietbank Digital Plus
Vietbank Digital
Internet Banking
DigiBiz
Mobile Banking
Digital Banking landing pages

Không được để user tự đoán:

“Ứng dụng nào dành cho tôi?”

Website mới phải giải thích rõ:

Personal digital banking → Digital Plus
Business digital banking → DigiBiz
Web banking → correct access path
Security/help → contextual

Nếu legacy page vẫn còn SEO value:

preserve URL
→ update content
hoặc
redirect có kiểm soát
H4 — Digital Plus migration experience cần đánh giá lại

Old Vietbank Digital đã được chuyển sang Digital Plus.

Audit xem global popup/interstitial chuyển đổi hiện còn cần thiết hay không.

Không giữ popup toàn site chỉ vì legacy implementation có sẵn.

Đánh giá:

recency
user segment affected
frequency cap
dismiss behavior
mobile obstruction
conversion impact
accessibility

Nếu thông báo không còn cần global prominence:

chuyển thành contextual migration notice/help page.

H5 — Utility services phải dễ truy cập hơn

Các task thường xuyên như:

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

không nên bị chìm trong navigation.

Thiết kế một Banking Utility Layer rõ ràng.

H6 — Contact/form data cần audit theo data minimization

Không xóa field theo cảm tính.

Với mỗi field:

Why needed?
Required by which workflow?
Stored where?
Who receives it?
What happens after submit?

Nếu field không có business/legal reason rõ:

đề xuất giảm friction.

7. AUDIENCE MODEL

Không có một persona “khách hàng Vietbank”.

Phải phân nhóm theo intent.

A. Prospective Retail Customer

Top tasks:

mở tài khoản
tìm tài khoản phù hợp
tìm thẻ
tìm khoản vay
so sánh lợi ích
xem ưu đãi
download Digital Plus
tìm chi nhánh
B. Existing Retail Customer
đăng nhập
Digital Plus
tỷ giá
lãi suất
biểu phí
biểu mẫu
support
tra soát
security/scam
ATM/branch
C. SME / Business Owner
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
D. Finance / Accounting Staff

Ưu tiên:

operational banking
bulk payment
cash management
DigiBiz
forms
fees
support
E. Investors / Media
financial information
governance
disclosures
reports
stock/investor news
leadership
F. Candidate
culture
employer credibility
positions
application

Mỗi audience phải map:

entry point
question
decision
evidence
CTA
next destination
8. HOMEPAGE ROLE

Homepage KHÔNG phải catalog tất cả sản phẩm.

Homepage phải hoạt động như:

Intent Router + Brand Trust Layer + Digital Banking Gateway

Trong vài viewport đầu cần trả lời:

Vietbank là ai?
Tôi đang cần ngân hàng cho cá nhân hay doanh nghiệp?
Tôi có thể làm gì ngay?
Tại sao tôi nên tin Vietbank?
Tôi vào Digital Plus / DigiBiz ở đâu?

Nghiên cứu một homepage architecture khoảng:

01 Hero / customer promise

02 Intent switch
   Cá nhân | Doanh nghiệp

03 Top tasks / quick banking actions

04 Product/solution discovery

05 Digital banking ecosystem
   Digital Plus + DigiBiz

06 Trust / security / Vietbank scale

07 Contextual promotion / financial opportunity

08 News / safety / important notices

09 Support / branch / hotline / tools

Số block cuối cùng phải do content/job quyết định.

Không thêm section chỉ để kéo dài homepage.

9. PROPOSED INFORMATION ARCHITECTURE DIRECTION

Không copy nguyên sitemap dưới đây.

Dùng nó làm hypothesis để test.

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

Utility actions không nhất thiết nằm trong main navigation.

10. PRODUCT DISCOVERY SYSTEM

Không chỉ dùng grid hàng chục sản phẩm.

Tạo product discovery có:

need-based entry
category
filter
comparison when meaningful
product recommendation cues
clear eligibility
benefit
rates/fees
requirements
documents
CTA
support

Product detail phải trả lời:

Sản phẩm này dành cho ai?
Giải quyết nhu cầu gì?
Lợi ích chính?
Điều kiện?
Chi phí/lãi suất?
Cần chuẩn bị gì?
Quy trình?
Bao lâu?
Rủi ro/lưu ý?
Tôi bắt đầu thế nào?

Không bury fees/conditions.

Transparency là trust feature.

11. DIGITAL BANKING EXPERIENCE

Digital Plus phải trở thành một digital brand moment quan trọng của website mới.

Nhưng không biến toàn bộ Vietbank thành fintech startup.

Digital section cần thể hiện:

simple
personalized
secure
useful
modern
human

Cho Digital Plus:

primary benefits
financial management
transactions
security controls
personalization
how to start
download
support
security education

Cho DigiBiz:

cash-flow control
payments
reports
approval/operations
mobile + web continuity
security
business support

Tạo clear handoff:

marketing website
→ learn
→ compare
→ prepare
→ download/login/apply
→ support
12. TRUST ARCHITECTURE

Website ngân hàng phải thiết kế trust như một system, không như một block “Giải thưởng”.

Dùng:

trust-credibility-and-transparency

Map trust evidence gần decision.

Trust layers nên xem xét:

official identity
security guidance
anti-scam guidance
hotline / verified contact
regulatory/compliance information
fees/rates transparency
clear terms
leadership
network
service support
financial/investor disclosure
recency/date
digital-security cues

Fraud prevention phải discoverable.

Không dùng:

fake badge
fake certificate
generic shield icon
unsupported “most secure”
fake testimonials
fabricated customer counts
13. DESIGN REFERENCE BENCHMARK

Dùng:

design-reference-research-and-benchmark

Research candidate pool khoảng 10–20 reference nếu scope cho phép.

Tier A — Production banking references

Ít nhất audit:

Techcombank
VPBank
DBS
OCBC

Có thể bổ sung:

MB
TPBank
UOB
HSBC
Standard Chartered
CIMB
relevant regional banks

Mỗi reference chỉ lấy phần nó làm tốt.

Ví dụ role:

Reference A — IA / product discovery
Reference B — audience segmentation
Reference C — digital banking
Reference D — support/security
Reference E — visual grammar
Reference F — mobile navigation
Tier B/C inspiration

Có thể xem:

Awwwards
MUUUUU
Behance
Dribbble
SiteInspire
Godly
Land-book

Nhưng:

gallery ≠ UX evidence.

Không clone một banking concept trên Behance/Dribbble.

Extract principle only.

14. DESIRED DESIGN DNA

Không khóa visual trước research.

Nhưng direction cần thử nghiệm các thuộc tính:

TRUSTWORTHY
MODERN
CLEAR
HUMAN
CONFIDENT
DIGITAL-FIRST
PREMIUM-BUT-ACCESSIBLE

Không dùng phong cách:

generic fintech SaaS
crypto
dark trading dashboard
over-glassmorphism
random neon
purple fintech cliché
AI-gradient everywhere
excessive rounded card soup

Vietbank phải vẫn nhìn là:

một ngân hàng Việt Nam đáng tin cậy đang chuyển đổi số,

không phải:

một startup crypto mới thành lập.

15. BRAND RULE

Không redesign logo hoặc brand identity nếu không được yêu cầu.

Preserve official Vietbank identity.

Extract exact colors từ official brand assets/code.

Không tự tạo HEX mới rồi gọi là brand color.

Known visual signal:

blue is an established Vietbank brand cue

Nhưng exact palette phải verify từ official asset.

Từ đó xây semantic token:

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

Không dùng màu thương hiệu cho mọi element.

16. VISUAL SYSTEM

Thiết kế visual grammar rõ:

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

Banking data phải scan nhanh.

Rates/fees không trình bày như marketing card thông thường.

17. TYPOGRAPHY

Typography phải:

trustworthy
high readability
excellent Vietnamese diacritics
good numeric readability
clear financial-data hierarchy
mobile friendly

Test:

₫
%
6.3%/năm
1.000.000.000 VNĐ
dates
rates
account/product names
long Vietnamese headings
English localization
18. IMAGERY

Ưu tiên official/authentic content:

real Vietbank people
real branches
real customers when licensed
real service context
Digital Plus UI/assets
business scenarios

Tránh:

generic handshake
fake businessman stock
random skyscraper
AI-generated banker
fake banking dashboard
unrelated luxury imagery

Nếu asset thiếu:

định nghĩa art-direction request, không fabricate proof.

19. ICON SYSTEM

Dùng một icon family thống nhất.

Icon banking cần semantic rõ:

account
saving
card
loan
transfer
QR/payment
business
trade
international
branch
rate
calculator
support
security
document

Không mix:

outline
3D
emoji
filled
gradient

trong cùng system nếu không có rationale.

20. MOTION

Motion phải phục vụ:

orientation
feedback
hierarchy
brand expression

Cho phép:

subtle hero reveal
section reveal
number/rate update transition
tabs
filters
accordion
micro-feedback

Tránh:

scroll hijacking
excessive parallax
banking content flying around
motion blocking access to information

Respect prefers-reduced-motion.

21. MOBILE-FIRST BANKING UX

Mobile không phải desktop collapse.

Ưu tiên top tasks:

Digital Plus
login
branch
rates
support
product search
apply/contact

Test ít nhất:

~375
~390
~768
~1024
~1280+

và pressure widths.

Navigation mobile phải được thiết kế riêng về composition.

Không duplicate cả desktop DOM chỉ để làm menu mobile nếu không cần.

22. SEARCH

Bank website có nhiều product/document/support content nên search là critical.

Audit current search.

Nghiên cứu global search với:

query suggestions
product results
help results
news
forms
branches
rates
no-result recovery
typo tolerance if backend supports

Không giả lập search backend nếu hệ thống thật chưa tồn tại.

Label system reality rõ.

23. FORMS / LEAD CONVERSION

Form không được chỉ đẹp.

Map:

intent
required data
legal/business reason
validation
privacy
submit destination
SLA/expectation
confirmation
error
retry
handoff

Ưu tiên progressive commitment.

Ví dụ:

Tôi quan tâm vay
→ chọn nhu cầu
→ thông tin tối thiểu
→ contact preference
→ consent
→ submit

Không bắt user điền một form dài giống nhau cho mọi sản phẩm nếu không cần.

24. SECURITY / ANTI-SCAM UX

Do banking risk cao, kích hoạt:

security-and-privacy

Thiết kế security communication rõ nhưng không tạo fear.

Xem xét:

official hotline
verified channels
fraud warning
safe login link
phishing warning
security centre
contact verification
card/security alerts

Login external/internal path phải unmistakable.

Không mô phỏng login nếu không kết nối hệ thống thật.

25. ACCESSIBILITY

Target baseline:

WCAG 2.2 AA design/implementation practices.

Nhưng:

không claim WCAG conformance nếu chưa formal-evaluate.

Đặc biệt kiểm:

keyboard
visible focus
screen reader labels
forms/errors
contrast
zoom
financial tables
modal
mobile navigation
carousel
rates
branch finder
captcha alternatives where applicable
26. SEO / URL MIGRATION

Bank website có nhiều legacy/product URLs.

Không redesign bằng cách thay toàn URL tùy tiện.

Tạo:

current URL
current purpose
traffic/SEO value if known
target URL
KEEP / MERGE / REDIRECT / REMOVE
redirect target
canonical
reason

Audit duplicate/alternate paths.

Tách:

content cleanup
IA cleanup
URL migration

Không đồng nhất ba việc này.

27. SYSTEM REALITY

Mỗi function phải label:

REAL
MOCK
STATIC
SIMULATED
PARTIAL
UNKNOWN

Đặc biệt:

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

Rendered UI không chứng minh integration.

Không tạo fake success.

28. PERFORMANCE

Banking website cần cảm giác:

FAST + STABLE + SAFE.

Định nghĩa route-specific budget cho:

homepage
personal category
product detail
business category
digital banking
branch finder
news

Đặc biệt kiểm:

hero images
campaign banners
fonts
third-party scripts
analytics
chat
maps
Digital Plus promotion
carousels

Không chạy theo Lighthouse vanity score, nhưng visual ambition không được phá Core Web Vitals.

29. REQUIRED PAGE FAMILIES

Không thiết kế mỗi page độc lập.

Xây page-family system:

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

Promotion listing/detail

About landing/content

Leadership

Investor landing
Investor documents

Contact

Security / scam information

404 / system states

Mỗi family có composition riêng.

Không dùng một template hero + cards cho toàn site.

30. HOMEPAGE VISUAL EXPECTATION

Homepage phải có visual hierarchy mạnh nhưng không theatrical.

Hero ưu tiên:

one customer promise
one primary CTA
one secondary utility CTA
authentic Vietbank visual or Digital Plus visual

Không:

5 CTA
huge marketing paragraph
banner slider with 7 unrelated promotions
fake metric wall
random financial graphs

Promotions không được chiếm luôn brand narrative.

31. BANKING UTILITY BAR

Nghiên cứu dedicated utility access cho:

Đăng nhập
Digital Plus
DigiBiz
Tỷ giá
Lãi suất
ATM / Chi nhánh
Hotline
Search

Desktop và mobile có thể có composition khác.

Không nhồi tất cả vào main nav.

32. TRUST VS PROMOTION BALANCE

Không biến homepage thành promotion portal.

Tách rõ:

Evergreen banking proposition
Current promotion
Important notice
Security notice
Corporate news

Có expiry/content-governance rule.

Expired campaign không được tiếp tục ảnh hưởng primary navigation.

33. CONTENT GOVERNANCE

Mỗi dynamic content type cần owner:

Product
Rate
Fee
Promotion
Notice
Security alert
News
Investor disclosure
Branch
Form/PDF
FAQ

Define:

owner
published_at
updated_at
effective_from
effective_to
expiry
review cadence

Thông tin tài chính stale là trust risk.

34. REDESIGN PRESERVE LIST

Trước khi xóa/thay đổi, lập:

Strong content
High-value SEO URLs
Important customer utilities
Legal/compliance content
Investor content
Working integrations
Brand assets
Digital banking links
Forms
Current announcements

Redesign không đồng nghĩa rewrite toàn bộ.

35. ANTI-PATTERN — CẤM

Không tạo:

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
generic “Banking reimagined” copy

Không copy Techcombank/VPBank/DBS/OCBC.

Học principle.

36. REQUIRED STRATEGY OUTPUTS

Trước implementation lớn, tạo:

website-strategy/
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

Không tạo docs rỗng chỉ để đủ danh sách.

37. IMPLEMENTATION RULE

Nếu source repository được cung cấp:

Sau strategy đủ evidence, tiến hành implementation.

Không dừng để xin approve từng phase nếu request là execute.

Trước code:

inspect git
inspect project
inspect existing components
inspect tokens
inspect routes
inspect APIs/data
inspect current responsive behavior

Sau đó:

plan
implement incrementally
verify each material change

Không rewrite unrelated code.

38. VERIFICATION MATRIX

Mọi change lớn:

CHANGE
→ EXPECTED OUTCOME
→ METHOD
→ PASS CONDITION
→ RESULT

Ví dụ:

Mega navigation redesign
→ faster product discovery
→ task walkthrough + mobile/desktop QA
→ core destination reachable without ambiguity

Digital Plus CTA
→ clear digital entry
→ all relevant routes/device states
→ correct target, no obsolete app messaging

Loan form
→ lower friction without losing required data
→ validation/error/network tests
→ correct data + truthful states

Branch finder
→ easier location discovery
→ location/search/result/no-result tests
→ complete and recoverable
39. TWO-STAGE FINAL REVIEW
Stage A — Intent

Check:

đúng Vietbank?
đúng banking?
đúng audience?
đúng business objective?
đúng brand?
đúng user journey?
Stage B — Craft / Production

Check:

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

Một website đẹp nhưng user không tìm được tỷ giá, khoản vay hoặc Digital Plus:

FAIL.

Một website usable nhưng generic đến mức che logo không biết là Vietbank:

FAIL.

40. SUCCESS CRITERIA

Redesign chỉ PASS khi có evidence rằng architecture/design mới:

giúp user biết mình đang ở Personal hay Business
giúp tìm top banking tasks nhanh
giảm ambiguity giữa Digital Plus / DigiBiz / legacy digital
làm product discovery dễ hiểu hơn
nâng trust perception bằng evidence thật
làm utility services discoverable
giữ transparency về fees/rates/requirements
preserve SEO/content/business value
có visual identity Vietbank rõ ràng
mobile usable
không fabricate integration
không tạo security/privacy regression

Không claim conversion increase nếu chưa có analytics/outcome data.

41. FINAL DELIVERABLE

Khi hoàn tất, báo cáo:

1. Vietbank understanding
2. Research sources
3. Current-site P0/P1/P2/P3 issues
4. Preserve list
5. Audience & top tasks
6. Owner ↔ user goal map
7. Journey
8. New IA / sitemap
9. Reference benchmark
10. Vietbank Design DNA
11. Visual direction
12. Design system
13. Page-family system
14. Digital Plus / DigiBiz architecture
15. Trust/security UX
16. Implementation changes
17. Responsive/browser verification
18. Accessibility/performance/security status
19. SEO migration
20. Unverified areas / remaining risks
21. Skills actually USED
FINAL DESIGN PRINCIPLE

Website Vietbank mới không được chỉ nói:

“Chúng tôi là ngân hàng.”

Nó phải giúp từng người dùng nhanh chóng hiểu:

Vietbank có thể giúp gì cho tôi, tôi nên chọn giải pháp nào, tại sao tôi có thể tin ngân hàng này và tôi cần làm gì tiếp theo.

Mọi page/section/component phải truy ngược được:

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

Nếu không truy ngược được:

reconsider/remove.

BẮT ĐẦU bằng việc research và reverse-engineer website Vietbank hiện tại.
KHÔNG bắt đầu bằng redesign homepage.

Prompt này bám đúng triết lý V5: research trước design, reference không thay project truth, banking trust là architecture chứ không phải decoration, và UI hiển thị không được đánh đồng với system behavior. Nó cũng tận dụng rule của design-reference-research-and-benchmark: production banking sites dùng cho IA/UX, còn Behance/Dribbble/Awwwards chỉ đóng vai trò visual/reference thứ cấp.

Nếu bạn muốn, mình có thể tiếp tục xuất prompt này thành file VIETBANK-REDESIGN-MASTER-PROMPT.md để tải về, hoặc nghiên cứu sâu thêm và tạo luôn sitemap.md + design-direction.md riêng cho Vietbank.

@Tìm kiếm trên mạng
 nghiên cứu cho mình bộ tài liệu cần thiết về https://www.vietbank.com.vn/ để prompt hoạt động tốt nhất

Có. Sau khi research sâu hơn, mình nghĩ không nên đưa thẳng toàn bộ website Vietbank + MASTER-PROMPT-V5 vào agent. Cách tốt nhất là chuẩn bị một Vietbank Redesign Input Dossier khoảng 16 file, đóng vai trò “project truth/evidence package” để MASTER-PROMPT-V5 đọc trước khi bắt đầu strategy và redesign. Cách này đúng với V5: project truth → evidence → business/user outcome → IA/reference/design → implementation.

Research hiện tại cũng cho thấy việc này đặc biệt cần thiết vì dữ liệu công khai của Vietbank có nhiều lớp thời gian khác nhau: trang giới thiệu nói 127 điểm giao dịch trong khi thông tin năm 2024–2025 ghi 132 điểm; trang Digital Banking vẫn hiển thị Vietbank Digital cũ trong khi ứng dụng này đã ngừng từ 03/06/2026; Internet Banking cá nhân cũng thông báo dừng từ 18/05/2026.

Bộ tài liệu mình đề xuất
vietbank-redesign-input/
│
├── 00-source-register.md
├── 01-vietbank-project-truth.md
├── 02-business-strategy-2026.md
├── 03-current-site-inventory.md
├── 04-freshness-conflict-register.md
├── 05-audience-and-top-tasks.md
├── 06-product-service-taxonomy.md
├── 07-digital-banking-ecosystem.md
├── 08-trust-security-compliance.md
├── 09-banking-utility-and-support-map.md
├── 10-current-ux-ia-audit.md
├── 11-seo-url-content-governance-baseline.md
├── 12-brand-visual-asset-baseline.md
├── 13-system-reality-known-unknowns.md
├── 14-design-reference-benchmark.md
└── 15-client-private-data-request.md
Nội dung từng file
File	Mức độ	Nội dung cần có	Tác dụng với prompt
00-source-register.md	P0	URL, loại nguồn, ngày kiểm tra, freshness, confidence, fact lấy từ nguồn	Ngăn agent bịa hoặc lấy thông tin cũ
01-vietbank-project-truth.md	P0	Tầm nhìn, sứ mệnh, giá trị cốt lõi, positioning, company facts	Source-of-truth cho brand/business
02-business-strategy-2026.md	P0	Định hướng tăng trưởng, chuyển đổi số, CASA, khách hàng, HOSE, Digital Plus	Giúp redesign phục vụ chiến lược thật
03-current-site-inventory.md	P0	Toàn bộ page family, URL, Personal/Business/Card/Digital/Investor/Support	Input cho sitemap + IA
04-freshness-conflict-register.md	P0	Nội dung cũ/mâu thuẫn/trùng/legacy	Cực quan trọng để agent không dùng wrong truth
05-audience-and-top-tasks.md	P0	Retail prospect/existing, SME, accountant, investor, candidate	Input cho journey
06-product-service-taxonomy.md	P0	Toàn bộ retail/business/card product taxonomy	Giúp thiết kế product discovery
07-digital-banking-ecosystem.md	P0	Digital Plus, DigiBiz, legacy Digital, Internet Banking, migration	Quyết định digital IA
08-trust-security-compliance.md	P0	AML, FATCA, Patriot Act, privacy, scam, personal data	Banking trust architecture
09-banking-utility-and-support-map.md	P1	Rate, fee, form, branch, hotline, transaction dispute, search	Utility navigation
10-current-ux-ia-audit.md	P0	Pain points, duplication, findability, mobile, content structure	Redesign brief thực tế
11-seo-url-content-governance-baseline.md	P1	URL patterns, legacy route, dated content, documents, owner/expiry	Ngăn redesign phá SEO/content
12-brand-visual-asset-baseline.md	P1	Logo, color, typography, photography, card images, Digital Plus assets	Visual direction đúng Vietbank
13-system-reality-known-unknowns.md	P0	REAL/MOCK/PARTIAL/UNKNOWN cho form, search, login, calculator...	Ngăn fake functionality
14-design-reference-benchmark.md	P1	Techcombank/VPBank/DBS/OCBC + visual references	Input cho Design DNA
15-client-private-data-request.md	P0	Những dữ liệu không thể research từ web	Xác định giới hạn trước production
1. 00-source-register.md — cực kỳ quan trọng

File này phải là bản đồ toàn bộ evidence.

Format:

# Vietbank Source Register

| ID | Source | Type | Date checked | Content date | Freshness | Confidence | Used for |
|---|---|---|---|---|---|---|---|
| S001 | ... | Official Vietbank | ... | ... | Current | High | Brand |
| S002 | ... | Official Vietbank | ... | ... | Current | High | Strategy |
| S003 | ... | Legacy page | ... | ... | Stale | Medium | IA audit |

Không phải website Vietbank nào cũng có authority ngang nhau.

Ví dụ, trang Tầm nhìn/Sứ mệnh là source tốt cho identity: Vietbank định hướng trở thành ngân hàng bán lẻ uy tín hàng đầu Việt Nam, theo phương châm “Tăng trưởng – An toàn – Bền vững – Hiệu quả”.

Trong khi một page tuyển dụng chứa job từ 2016 chỉ nên dùng như evidence về legacy/stale content, không dùng làm current recruitment truth.

2. 01-vietbank-project-truth.md

Đây sẽ là file agent phải đọc ngay sau MASTER-PROMPT-V5.

Nội dung nên cô đọng:

# Vietbank Project Truth

## Legal identity
Ngân hàng TMCP Việt Nam Thương Tín
Vietbank
Ticker: VBB

## Vision
Trở thành ngân hàng bán lẻ uy tín hàng đầu Việt Nam.

## Operating philosophy
Tăng trưởng
An toàn
Bền vững
Hiệu quả

## Mission
...

## Core values
Chính trực
Hiệu quả
Am hiểu
Tuân thủ

## Strategic identity
Retail banking
Digital transformation
Customer-centric
Trust
Safety
Sustainable growth

Đây không phải wording mình tự suy ra; các trụ cột trên xuất phát từ tài liệu chính thức của Vietbank.

3. 02-business-strategy-2026.md

File này sẽ khiến redesign khác hoàn toàn một bài “UI makeover”.

ĐHĐCĐ Vietbank 2026 cho thấy các ưu tiên hiện tại gồm tăng trưởng tài sản/tín dụng/huy động, tăng CASA, đẩy mạnh chuyển đổi số, phát triển sản phẩm và nâng trải nghiệm khách hàng. Vietbank cũng nói rõ nguyên tắc đổi mới sản phẩm là lấy nhu cầu thực tế của khách hàng làm trung tâm.

Nội dung nên có:

# Vietbank Business Strategy 2026

## Growth direction
## Retail banking ambition
## Customer-centric principle
## CASA strategy
## Digital transformation
## Product innovation
## SME / enterprise growth
## Capital-market strategy
## Brand implications
## Website implications

Ngày 14/07/2026 VBB cũng chính thức lên HOSE; việc này tăng đáng kể vai trò của transparency, investor relations và corporate credibility trên website mới.

Báo cáo thường niên 2025 cũng đã được công bố theo HOSE và nên đưa vào nguồn gốc của file này.

4. 03-current-site-inventory.md

Không chỉ sitemap.

Mỗi route cần record:

URL
Language
Audience
Page family
Content type
Product
Primary task
CTA
Current status
Freshness
SEO value if known
KEEP / IMPROVE / MERGE / REDIRECT / REMOVE

Các family hiện thấy rõ gồm:

Homepage

Personal
Business
Cards
Digital Banking

Products
Product details

Rates
Fees
Forms
FAQ
Tools
Branches

News
Promotions
Customer guides
Security notices

About
Leadership
Compliance
Investor information

Careers
Contact
Transaction dispute

Homepage hiện phân Personal / Business / Cards / Digital Banking và chứa nhiều utility như tỷ giá, lãi suất, quy định biểu mẫu, chi nhánh, khuyến mãi.

5. 04-freshness-conflict-register.md

Đây là file mình đánh giá quan trọng nhất ngoài Project Truth.

Ví dụ ban đầu đã phát hiện:

Conflict / stale item	Evidence	Design implication
Site giới thiệu nói 127 điểm	Trang About	Không dùng con số này mà chưa verify
Bài 2025 nói 132 điểm	Official news	Có conflict
Vietbank Digital vẫn xuất hiện	Digital Banking page	Legacy IA
Vietbank Digital dừng 03/06/26	Official notice	Digital IA cần cleanup
Personal Internet Banking dừng 18/05/26	Login site	Không promote như current retail channel
Recruitment search thấy job 2016	Recruitment	Audit CMS freshness
Card page ghi “Vietinbank”	Card category	Content QA issue

Các conflict trên có bằng chứng công khai.

Chỉ riêng file này đã giúp agent tránh rất nhiều quyết định redesign sai.

6. 05-audience-and-top-tasks.md

Không nên viết persona hư cấu kiểu:

“Anh Minh, 34 tuổi, thích cà phê…”

Chỉ dùng intent-based audience hypothesis:

Prospective Retail
Existing Retail
Premium/Card Customer
SME Owner
Corporate Finance/Accounting
Investor/Shareholder
Candidate
Media/Partner

Với mỗi nhóm:

Entry context
Top tasks
Decision
Required evidence
Trust concerns
Primary CTA
Support path

Ví dụ khách hàng cá nhân có thể cần vay, tài khoản, tiết kiệm, thẻ, digital banking; doanh nghiệp có taxonomy phức tạp hơn nhiều gồm vay, ngoại tệ, DigiBiz, tiền gửi, bảo lãnh, tài trợ thương mại, chuyển tiền quốc tế và các dịch vụ tài khoản.

Đây là lý do IA mới không nên đơn thuần mirror cấu trúc phòng ban/sản phẩm.

7. 06-product-service-taxonomy.md

File này nên là data-oriented document, không phải prose.

Ví dụ:

## Retail

### Accounts
### Savings
### Loans
### Cards
### Insurance
### FX
### Payments
### Digital

## Business

### Accounts
### Deposits
### Loans / financing
### Cash management
### Payroll
### Guarantee
### Trade finance
### FX
### International transfer
### Government collection
### DigiBiz

Vietbank Business hiện có một catalogue rất rộng, bao gồm cả nhiều sản phẩm SME và capital/operating solutions.

Card taxonomy cũng lớn: Mastercard, Visa, Napas; credit/debit/prepaid; cùng nhiều tier sản phẩm.

Do đó agent cần taxonomy riêng trước khi nghĩ đến mega menu.

8. 07-digital-banking-ecosystem.md

File này phải ghi rõ timeline, không chỉ feature list.

Legacy Vietbank Digital
↓
Digital Plus launch — March 2026
↓
Personal Internet Banking stop — 18/05/2026
↓
Vietbank Digital app stop — 03/06/2026
↓
Digital Plus becomes primary retail digital channel

Digital Plus được Vietbank mô tả với chuyển khoản, thanh toán, theo dõi chi tiêu, cá nhân hóa và bảo mật nhiều lớp.

Official notice xác nhận Vietbank Digital ngừng ngày 03/06/2026.

Internet Banking dành cho khách hàng cá nhân thông báo dừng từ 18/05/2026.

Trong khi website /digital-banking vẫn còn:

Internet Banking Vietbank Digital
Mobile Banking Vietbank Digital
SMS Banking

Đây là evidence mạnh cho việc Digital Banking IA cần được redesign toàn diện.

9. 08-trust-security-compliance.md

Với ngân hàng, file này là source cho design chứ không chỉ legal appendix.

Bao gồm:

AML
FATCA
USA Patriot Act
Personal-data processing
Anti-scam
Biometric security
Card security
Verified contact channels
Hotline
Official login domains
Terms/conditions

Vietbank công bố chính sách AML, FATCA và USA Patriot Act.

Từ 01/01/2026, Vietbank cũng công bố thông báo xử lý dữ liệu cá nhân theo Luật Bảo vệ dữ liệu cá nhân năm 2025, bao gồm cả dữ liệu tài chính, tín dụng và sinh trắc học.

Security content cũng đang rất active: site có cảnh báo lừa đảo trực tuyến, phần mềm vượt sinh trắc học và các rủi ro mới.

Do đó website redesign nên có Security Centre / Safety architecture, không chỉ thả các bài cảnh báo vào News.

10. 09-banking-utility-and-support-map.md

Map tất cả utility:

Rates
Interest rates
Fees
Forms
Branch / ATM
Hotline
Contact
Transaction dispute
Guarantee verification
Deposit contract lookup
Invoice lookup
FAQ
Calculators
Search

Doanh nghiệp hiện có support suite khá lớn: tỷ giá, lãi suất, lãi suất tham chiếu, biểu mẫu, biểu phí, xác thực thư bảo lãnh và truy vấn hợp đồng/chứng chỉ tiền gửi.

Trang tra soát giao dịch có flow CCCD/Hộ chiếu → OTP → tạo/tra cứu yêu cầu, đồng thời xử lý dữ liệu cá nhân.

Đây không còn là “content page”; nó là service journey.

11. 10-current-ux-ia-audit.md

Không nên audit theo “xấu/đẹp”.

Mỗi finding:

ID
Finding
Evidence
User affected
Task affected
Root cause
Severity
Confidence
Recommendation

Một số hypothesis đã có evidence ban đầu:

P1 Digital product naming/legacy state
P1 Product catalogue complexity
P1 Utility findability
P1 Content freshness governance
P1 Trust/security information fragmentation
P2 Repetitive template/content patterns
P2 Product detail hierarchy inconsistency
P2 Corporate/Investor journey separation

Còn layout/mobile/visual phải kiểm bằng rendered audit; search extraction một mình chưa đủ để khẳng định visual defect.

12. 11-seo-url-content-governance-baseline.md

Đây là file rất dễ bị bỏ quên trong redesign.

Đặc biệt cần record:

/ca-nhan vs /personal
/doanh-nghiep
/the
/digital-banking
/ngan-hang-so
/ve-vietbank
/Home

Hiện có dấu hiệu tồn tại route song song như /personal/support/... và /ca-nhan/..., cũng như /digital-banking và /ngan-hang-so/dich-vu-ngan-hang-so.

Không nên redesign URL tree trước khi lập canonical/redirect map.

File này cũng cần content governance:

published_at
updated_at
effective_from
effective_to
expiry
owner
review cadence

Rất quan trọng cho:

rate
fee
promotion
security warning
legal document
branch
investor disclosure
13. 12-brand-visual-asset-baseline.md

Không phải brand guideline mới.

Nó là inventory:

Official logo
Logo variations
Primary/secondary colors
Typography currently used
Card imagery
Branch imagery
Leadership imagery
Digital Plus UI
DigiBiz imagery
Photography style
Campaign imagery
Icons
Illustration
Video

File này phải ghi:

OFFICIAL
CURRENT
LEGACY
UNKNOWN
DO NOT USE

Nếu có thể lấy brand guideline gốc từ Vietbank thì brand guideline phải override file này.

14. 13-system-reality-known-unknowns.md

Đây là extension trực tiếp của MASTER-PROMPT-V5.

Ví dụ:

Feature	Current evidence	Reality
Public product content	Website	REAL
Branch search	Public UI	PARTIAL until behavior verified
Contact form	UI exists	UNKNOWN backend
Transaction dispute	Public workflow	PARTIAL/REAL depending E2E test
Digital Plus download	Official	REAL link must verify
Retail Internet Banking	Discontinued	LEGACY
DigiBiz	Product exists	REAL product; exact integration needs verify
Search	UI may exist	UNKNOWN
Analytics	No public evidence	UNKNOWN
CMS	No public evidence	UNKNOWN

V5 explicitly yêu cầu rendered UI không được coi là proof của backend/system behavior.

15. 14-design-reference-benchmark.md

File này không phải moodboard.

Nên chia role:

Techcombank
→ retail navigation / product discovery

VPBank
→ audience segmentation / SME

DBS
→ digital-service / help architecture

OCBC
→ product + support + security

Optional:
MB
TPBank
UOB
HSBC
Standard Chartered

Sau đó mới thêm:

Awwwards
MUUUUU
Behance
Dribbble

cho visual craft.

Không dùng Behance/Dribbble để quyết định banking UX.

16. 15-client-private-data-request.md

Đây là phần web research không thể thay thế.

Nếu muốn prompt làm đến mức production thật sự tốt, Vietbank/client nên cung cấp:

Dữ liệu cần xin	Vì sao
Official brand guideline	Visual source-of-truth
Logo/assets master	Không recreate sai
Photography/media library	Art direction
Source repo	Technical truth
CMS schema	Content architecture
API/integration map	System reality
GA4 / analytics	Top journeys
Search Console	SEO/landing data
Heatmap/session data nếu có	UX behavior
Form conversion	Conversion baseline
Search query logs	Findability
Call-center/FAQ ticket topics	Support top tasks
Digital Plus acquisition data	Digital journey
Product business priorities	IA prioritization
Product owner/content owner list	Governance
Legal/compliance requirements	Forms/privacy
Supported browsers/devices	QA
Deployment/hosting/CDN	Performance
Existing design tokens/components	Reuse
URL traffic/backlink export	Migration safety

Nếu không có một trong các phần này:

ghi UNKNOWN.

Không được tự điền.

Thứ tự load vào agent

Không nên đưa cả 16 file một lúc vào system prompt.

Mình khuyên flow:

MASTER-PROMPT-V5.0.md

↓ FIRST CONTEXT

00-source-register
01-project-truth
02-business-strategy
04-freshness-conflict
15-client-private-data-request

↓ RESEARCH / IA

03-current-site-inventory
05-audience-top-tasks
06-product-service-taxonomy
07-digital-banking-ecosystem
09-banking-utility-support
10-current-ux-ia-audit
11-seo-url-governance

↓ DESIGN

08-trust-security-compliance
12-brand-visual-assets
14-design-reference-benchmark

↓ IMPLEMENTATION

13-system-reality-known-unknowns
+ source repo
+ CMS/API docs
+ analytics/config

Đây chính là progressive disclosure mà MASTER-PROMPT-V5 yêu cầu: load specialist information đúng lúc, thay vì làm agent chìm trong context.

5 file quan trọng nhất nếu muốn bắt đầu ngay

Nếu chưa có thời gian làm toàn bộ bộ hồ sơ, mình sẽ ưu tiên:

01-vietbank-project-truth.md → 03-current-site-inventory.md → 04-freshness-conflict-register.md → 07-digital-banking-ecosystem.md → 10-current-ux-ia-audit.md.

Đặc biệt 04 và 07 không nên bỏ: hiện trạng Digital Plus/legacy Digital/Internet Banking đã thay đổi khá mạnh trong năm 2026, nên một agent chỉ crawl website mà không có freshness register rất dễ thiết kế lại dựa trên architecture đã lỗi thời.

Ngoài ra, vì VBB đã chính thức niêm yết HOSE từ ngày 14/07/2026 và Báo cáo thường niên 2025 đã được công bố, mình sẽ coi Investor Relations + transparency là một page family quan trọng hơn so với website Vietbank cũ, không còn là utility link phụ.

Nếu triển khai tiếp, bước hợp lý nhất là mình tạo luôn toàn bộ 16 file .md này bằng dữ liệu Vietbank đã research, đóng thành một bộ vietbank-redesign-input/ hoàn chỉnh để đưa thẳng cho agent cùng MASTER-PROMPT-V5.0.md.

@Tìm kiếm trên mạng
 gom lại 1 file cho mình

Mình đã gom toàn bộ research thành 1 file Markdown duy nhất, cấu trúc để dùng trực tiếp cùng MASTER-PROMPT-V5.0.md.

File bao gồm:

Vietbank project truth + brand/business strategy 2026
current-site inventory
freshness/conflict register
audience & top tasks
product/service taxonomy
Digital Plus / DigiBiz / legacy digital transition
banking utility & support
trust/security/compliance/privacy
IA hypothesis
SEO/URL migration
brand/visual baseline
reference benchmark plan
system reality
private/client data còn thiếu
accessibility/performance/responsive
priority P0–P3
verification contract
agent start command

Một số fact quan trọng đã được kiểm lại từ nguồn Vietbank chính thức: Vietbank định vị là ngân hàng bán lẻ uy tín hàng đầu với phương châm Tăng trưởng–An toàn–Bền vững–Hiệu quả; năm 2026 tiếp tục đẩy chuyển đổi số, sản phẩm và trải nghiệm khách hàng; Vietbank Digital đã dừng từ 03/06/2026 để chuyển sang Digital Plus; VBB giao dịch HOSE từ 14/07/2026.

Mình cũng giữ riêng conflict 127 vs 132 điểm giao dịch để agent không vô tình biến dữ liệu cũ thành current fact. Phần privacy/compliance được cập nhật từ notice 01/01/2026 cùng AML/FATCA/USA Patriot Act hiện công khai trên Vietbank.

Tải file:

VIETBANK-REDESIGN-PROJECT-TRUTH-AND-RESEARCH-DOSSIER.md

Khi chạy agent, mình khuyên attach đúng 2 file: file này + MASTER-PROMPT-V5.0.md. 

VIETBANK-REDESIGN-PROJECT-TRUTH-AND-RESEARCH-DOSSIER.md
Tài liệu

﻿
@Tìm kiếm trên mạng
 