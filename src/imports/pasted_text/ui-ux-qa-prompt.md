# MASTER PROMPT — FINAL UI/UX / VISUAL / CONTENT QA & REMEDIATION

Website hiện đã được thiết kế và triển khai xong ở vòng đầu.

Ở vòng này, KHÔNG tiếp tục sáng tạo thêm website theo hướng mới.

Nhiệm vụ của bạn là đóng vai:

- Senior UX Designer
- Senior UI Designer
- Design Director
- Design System Reviewer
- Brand Consistency Reviewer
- Content Designer / UX Writer
- Accessibility Reviewer
- Frontend Visual QA Engineer

và thực hiện một vòng:

# AUDIT → DIAGNOSE → PRIORITIZE → FIX → VERIFY

cho TOÀN BỘ website.

Mục tiêu:

> Phát hiện và sửa tất cả những chi tiết khiến website có cảm giác chưa hoàn thiện, khó dùng, khó đọc, thiếu nhất quán, thiếu định hướng visual, sai brand, typography kém, màu sắc sai, wording không tự nhiên hoặc có cảm giác giống website được AI sinh tự động.

---

# 1. SKILL ROUTING

Nếu bộ `skills_UIUX` khả dụng, hãy đọc và sử dụng các skill phù hợp, ưu tiên:

- `ui-improvement`
- `ui-craft-and-visual-qa`
- `ux-laws-and-heuristics`
- `visual-design-direction`
- `design-system-and-components`
- `brand-recognition-and-consistency-qa`
- `brand-distinctiveness-and-visual-signature`
- `journey-driven-content-and-layout`
- `content-design-and-question-design`
- `conversion-and-content`
- `responsive-and-device-strategy`
- `accessibility`
- `interaction-patterns-and-form-ux`
- `state-feedback-and-error-recovery`
- `visual-regression-and-design-drift`

Chỉ sử dụng skill thực sự cần thiết.

Không load toàn bộ library một cách máy móc.

---

# 2. QUY TẮC QUAN TRỌNG

Đây là vòng **refinement / remediation**, KHÔNG phải redesign lại website từ đầu.

Do đó:

- giữ nguyên brand direction đúng;
- giữ nguyên sitemap đúng;
- giữ nguyên user journey đúng;
- giữ component/design system tốt;
- giữ những layout đã hoạt động tốt;

và chỉ sửa những gì:

- gây friction;
- khó đọc;
- thiếu hierarchy;
- không nhất quán;
- sai brand;
- generic;
- không rõ style;
- gây cảm giác amateur;
- gây cảm giác AI-generated;
- ảnh hưởng conversion;
- ảnh hưởng responsive;
- ảnh hưởng accessibility.

Không thay đổi chỉ vì “có thể làm khác”.

Mỗi thay đổi phải có lý do.

---

# 3. AUDIT TOÀN SITE — KHÔNG CHỈ HOMEPAGE

Kiểm tra tất cả:

- Homepage
- Landing pages
- Hub pages
- Listing pages
- Detail pages
- About
- Contact
- Search
- Forms
- News/blog
- Career
- Resource
- Footer
- Header
- Mega menu
- Mobile navigation
- Empty/error/loading states
- 404 nếu có

Không chỉ nhìn từng trang riêng lẻ.

Phải xem website như MỘT HỆ THỐNG.

---

# 4. TYPOGRAPHY AUDIT

Đây là hạng mục bắt buộc kiểm tra kỹ.

Kiểm tra:

## Font family

- Website có dùng quá nhiều font không?
- Font heading và body có hợp brand không?
- Font weight có đúng không?
- Font tiếng Việt có hiển thị dấu đẹp không?
- Có font fallback làm thay đổi giao diện không?

---

## Font weight

Phát hiện:

- chữ quá mỏng;
- chữ quá đậm;
- heading thiếu lực;
- body quá light;
- metadata khó đọc.

Đặc biệt không dùng text quá mảnh trên:

- dark background;
- image background;
- gradient;
- mobile.

---

## Font size

Kiểm tra:

- text quá nhỏ;
- label quá nhỏ;
- navigation quá nhỏ;
- CTA khó đọc;
- body text không đủ comfortable;
- mobile font bị thu nhỏ quá mức.

---

## Line-height

Kiểm tra:

- heading nhiều dòng bị quá sát;
- body text quá chật;
- heading quá thoáng;
- paragraph khó scan.

---

## Letter-spacing

Không được:

- tracking rộng quá mức cho nội dung tiếng Việt;
- uppercase label nhỏ nhưng spacing quá xa;
- body text bị letter-spacing không tự nhiên.

---

## Hierarchy

Website phải có hierarchy rõ:

Display  
↓  
H1  
↓  
H2  
↓  
H3  
↓  
Lead  
↓  
Body  
↓  
Label  
↓  
Caption

Nếu nhìn một trang mà không biết đâu là:

- headline;
- section title;
- metadata;
- CTA;

→ typography hierarchy đang lỗi.

---

# 5. COLOR AUDIT

Kiểm tra TOÀN BỘ hệ thống màu.

Không chỉ kiểm tra màu có đẹp hay không.

---

## Contrast

Phát hiện ngay các trường hợp:

- chữ đen/xám quá tối trên nền đen;
- chữ trắng quá nhạt trên nền sáng;
- text secondary gần biến mất;
- placeholder không đọc được;
- border không nhìn thấy;
- button text thiếu contrast.

Ví dụ lỗi cần bắt:

```text
dark background
+
dark gray text
=
gần như không đọc được
```

hoặc:

```text
light cream background
+
white text
=
mất nội dung
```

Không được giữ lỗi chỉ vì “subtle”.

Subtle ≠ invisible.

---

## Brand color role

Kiểm tra primary color đang được dùng cho:

- CTA;
- highlight;
- link;
- active state;

hay bị sử dụng tràn lan.

Primary color phải có vai trò.

Không phải mọi thứ quan trọng đều tô primary.

---

## Surface system

Xác định rõ:

- page background;
- alternate surface;
- dark surface;
- brand surface;
- card surface;
- elevated surface.

Không được để mỗi section tự chọn một màu nền.

---

## Dark/light section rhythm

Nếu website xen:

WHITE  
→ BLACK  
→ CREAM  
→ BLACK  
→ WHITE

hãy kiểm tra:

- có logic không?
- có phục vụ nội dung không?
- hay chỉ đang đổi màu để trang “đỡ chán”?

Các surface transition phải tạo thành một visual grammar.

---

# 6. STYLE / VISUAL DIRECTION AUDIT

Đặt câu hỏi:

> Nếu che logo đi, website này có còn mang một style nhất định hay không?

Kiểm tra consistency của:

- grid;
- typography;
- whitespace;
- borders;
- radius;
- images;
- buttons;
- cards;
- dividers;
- label;
- icon;
- animation;
- dark sections;
- light sections.

Phát hiện những trang/section có cảm giác thuộc một website khác.

---

# 7. DESIGN SYSTEM DRIFT

Tìm các trường hợp:

- button cùng chức năng nhưng khác height;
- cùng CTA nhưng radius khác;
- cùng card nhưng padding khác;
- cùng H2 nhưng size khác vô lý;
- border color khác nhau;
- spacing scale không nhất quán;
- icon size ngẫu nhiên;
- container width khác nhau;
- section padding không theo rhythm.

Normalize về design system.

Không hardcode thêm magic number nếu token hiện có giải quyết được.

---

# 8. SPACING & LAYOUT QA

Kiểm tra:

## Vertical rhythm

Các section có:

- quá sát nhau;
- quá xa nhau;
- khoảng trên/dưới mất cân đối;
- title cách content không hợp lý.

---

## Alignment

Kiểm tra:

- heading;
- cards;
- button;
- label;
- images;
- dividers;
- content column.

Các element có cùng visual axis phải align.

---

## Container

Phát hiện:

- section full-width không có lý do;
- content quá rộng;
- text line quá dài;
- container width thay đổi ngẫu nhiên.

---

## Balance

Kiểm tra:

- bên trái quá nặng;
- bên phải trống vô lý;
- CTA floating không có quan hệ với content;
- section quá nhiều whitespace nhưng không intentional.

---

# 9. UX AUDIT

Không chỉ nhìn UI.

Với từng page hỏi:

## Khi user vào page:

- họ có biết mình đang ở đâu không?
- page này nói về gì?
- page này dành cho ai?
- user có thể làm gì tiếp?
- CTA chính có rõ không?

---

## Navigation

Kiểm tra:

- menu labels;
- information scent;
- active state;
- breadcrumb;
- back path;
- deep-link navigation;
- mobile nav.

---

## CTA hierarchy

Tìm:

- quá nhiều CTA;
- CTA cạnh tranh nhau;
- CTA không rõ;
- CTA xuất hiện quá sớm;
- CTA xuất hiện khi user chưa có đủ context.

---

## Dead ends

Không để user đến cuối page mà không biết đi đâu tiếp.

---

# 10. WORDING / UX WRITING AUDIT

Đây là hạng mục bắt buộc.

Kiểm tra toàn bộ:

- menu;
- heading;
- button;
- label;
- card;
- link;
- helper text;
- form;
- error;
- empty state;
- footer.

---

# 11. NGÔN NGỮ NHẤT QUÁN

Nếu website là tiếng Việt:

Không tự nhiên trộn:

```text
INVESTMENT CONTEXT
MEDIA
SUBSCRIBE
RESOURCES
CAREER
```

với phần còn lại tiếng Việt nếu không có lý do thương hiệu rõ ràng.

Chọn:

### Vietnamese-first

hoặc

### English-first

hoặc

### bilingual theo system

Không code-switch ngẫu nhiên.

---

# 12. LABEL / HEADING

Tránh heading mang tính internal terminology.

Ví dụ:

```text
NGUỒN CẬP NHẬT
NHÓM THÔNG TIN
ÁP DỤNG
ĐỐI CHIẾU
BƯỚC TIẾP THEO
```

Nếu user không hiểu ý nghĩa ngay → viết lại.

Heading phải giúp user hiểu nội dung, không chỉ trang trí.

---

# 13. CTA COPY

Tránh CTA generic như:

```text
Xem thêm
Mở trang
Khám phá
Tìm hiểu thêm
Click here
Learn more
```

nếu có thể mô tả hành động cụ thể hơn.

Ví dụ:

Thay:

`Mở trang`

bằng:

`Xem tài liệu QTSC`

hoặc:

`Đọc thông cáo báo chí`

hoặc:

`Xem vị trí tuyển dụng`

tùy destination.

CTA nên cho user đoán được:

> Click xong tôi sẽ tới đâu?

---

# 14. MICROCOPY

Form phải dùng lời văn:

- tự nhiên;
- cụ thể;
- ngắn;
- không giống text kỹ thuật.

Kiểm tra:

- placeholder;
- validation;
- success;
- error;
- confirmation.

---

# 15. CONTENT CLARITY

Phát hiện những câu:

- quá corporate;
- quá vague;
- nghe như AI;
- quá nhiều buzzword;
- không nói điều gì cụ thể.

Ví dụ loại copy cần tránh:

```text
Kiến tạo hệ sinh thái đổi mới
Nâng tầm giá trị bền vững
Kết nối tương lai
Dẫn đầu chuyển đổi
Kiến tạo giá trị vượt trội
```

nếu không có content/evidence cụ thể hỗ trợ.

Ưu tiên câu rõ nghĩa.

---

# 16. ANTI-AI COPY QA

Tìm và sửa các dấu hiệu:

- heading sáo rỗng;
- copy giống template;
- paragraph lặp cấu trúc;
- mỗi section đều “Khám phá...”;
- mỗi CTA đều “Tìm hiểu thêm”;
- title quá dramatic nhưng không có thông tin.

Website corporate vẫn có thể premium mà không cần nói mơ hồ.

---

# 17. CARD AUDIT

Kiểm tra website có lạm dụng:

```text
icon
+
title
+
description
+
arrow
```

hay không.

Nếu 70% website là card → cần xem lại composition.

Card chỉ dùng khi nội dung thực sự là collection/group.

---

# 18. BUTTON AUDIT

Chuẩn hóa:

- Primary
- Secondary
- Tertiary
- Text link
- Icon button

Kiểm tra:

- height;
- padding;
- radius;
- icon gap;
- hover;
- focus;
- disabled;
- dark surface;
- light surface.

Không tạo mỗi page một button style.

---

# 19. ICON AUDIT

Kiểm tra:

- stroke width;
- visual weight;
- size;
- style;
- alignment;
- meaning.

Không mix:

outline icon  
+ filled icon  
+ emoji  
+ random SVG

trong cùng system.

---

# 20. IMAGE / MEDIA QA

Kiểm tra:

- ảnh có đúng nội dung?
- có đúng brand?
- crop có hợp lý?
- ảnh có đủ resolution?
- có ảnh stock generic?
- có ảnh không hỗ trợ message?
- overlay có làm ảnh mất chất lượng?

Không dùng image chỉ để lấp section.

---

# 21. VISUAL HIERARCHY

Ở mỗi viewport, làm squint test:

Nếu nheo mắt lại:

User phải nhận ra được:

1. điều quan trọng nhất;
2. điều quan trọng thứ hai;
3. CTA chính;
4. nhóm nội dung.

Nếu mọi thứ có cùng visual weight → sửa.

---

# 22. PAGE DIVERSITY AUDIT

So sánh các page cạnh nhau.

Phát hiện nếu tất cả page đều:

```text
large heading
+
2-column layout
+
3 cards
+
CTA
```

hoặc hero giống nhau.

Mỗi page phải phù hợp nhiệm vụ riêng.

Nhưng không được phá design system để tạo sự khác biệt.

Nguyên tắc:

> Consistency through system.  
> Diversity through composition.

---

# 23. BRAND RECOGNITION TEST

Tạm tưởng tượng che logo.

Hỏi:

- Có nhận ra thương hiệu không?
- Màu?
- Type?
- Grid?
- Photography?
- Shape?
- Motion?
- Graphic device?

Nếu câu trả lời là:

> “Đây có thể là bất kỳ corporate website nào”

→ visual identity chưa đủ mạnh.

Tinh chỉnh, KHÔNG redesign ngẫu nhiên.

---

# 24. RESPONSIVE QA

Kiểm tra tối thiểu:

```text
375
390
430
768
1024
1280
1440
1920
```

Đặc biệt kiểm tra intermediate widths.

---

## Mobile

Phát hiện:

- text quá nhỏ;
- nav vỡ;
- CTA xuống hàng xấu;
- hero quá cao;
- card quá dài;
- whitespace quá lớn;
- horizontal scroll;
- image crop sai;
- text overlay khó đọc;
- touch target quá nhỏ.

Mobile không được chỉ là desktop stack vertically.

---

# 25. ACCESSIBILITY QA

Kiểm tra:

- contrast;
- focus;
- keyboard;
- heading hierarchy;
- label;
- alt;
- touch target;
- reduced motion;
- meaningful link copy.

Không claim WCAG compliance nếu chưa evaluation đầy đủ.

---

# 26. INTERACTION QA

Kiểm tra:

- hover;
- focus;
- active;
- dropdown;
- mega menu;
- accordion;
- tab;
- carousel;
- filters;
- search;
- modal;
- forms.

Interaction phải:

- predictable;
- responsive;
- reversible khi phù hợp;
- không gây surprise.

---

# 27. MOTION QA

Loại bỏ:

- animation không có tác dụng;
- quá nhiều fade-up;
- animation delay quá lâu;
- scroll effects gây lag;
- motion khác style giữa các page.

Chuẩn hóa:

- duration;
- easing;
- distance;
- trigger.

Motion phải thuộc cùng một language.

---

# 28. HEADER QA

Kiểm tra:

- logo sizing;
- navigation spacing;
- menu hierarchy;
- search;
- language switch;
- CTA;
- sticky behavior;
- scroll state.

Header không được có quá nhiều thứ cùng tranh attention.

---

# 29. FOOTER QA

Footer phải giúp user:

- tiếp tục navigation;
- tìm contact;
- tìm legal;
- tìm resource;
- hiểu entity đang sở hữu website.

Không biến footer thành nơi dump toàn bộ sitemap.

---

# 30. CÁC LỖI CẦN ĐẶC BIỆT TÌM

Tìm trên toàn website:

### Visual

- contrast thấp;
- text gần như invisible;
- text trắng trên nền sáng;
- text tối trên nền tối;
- inconsistent spacing;
- random border;
- inconsistent radius;
- generic gradients;
- random shadows;
- inconsistent icon.

### UX

- unclear CTA;
- dead end;
- duplicate navigation;
- too many choices;
- unclear page purpose;
- weak information scent.

### Content

- Vietnamese/English mixing;
- typo;
- inconsistent capitalization;
- corporate jargon;
- generic CTA;
- unclear terminology;
- duplicate sentence;
- misleading labels.

### Design system

- duplicate component;
- hardcoded value;
- different button implementations;
- inconsistent H2;
- inconsistent section spacing.

---

# 31. PRIORITY SYSTEM

Mỗi issue classify:

## P0 — Critical

Ảnh hưởng:

- không đọc được;
- không sử dụng được;
- navigation lỗi;
- conversion blocked;
- severe accessibility issue.

SỬA NGAY.

---

## P1 — Major

Ảnh hưởng rõ đến:

- UX;
- clarity;
- trust;
- hierarchy;
- brand consistency.

SỬA TRONG VÒNG NÀY.

---

## P2 — Craft

Ví dụ:

- spacing;
- typography polish;
- alignment;
- microcopy;
- icon sizing;
- visual rhythm.

SỬA nếu không gây regression.

---

## P3 — Preference

Chỉ là preference thẩm mỹ.

Không sửa nếu design hiện tại đã hợp lý.

---

# 32. AUTONOMOUS FIX MODE

Không chỉ đưa report.

Sau khi audit:

## Bước 1
Lập danh sách issue.

## Bước 2
Xác định root cause.

## Bước 3
Sửa toàn bộ P0.

## Bước 4
Sửa toàn bộ P1.

## Bước 5
Sửa P2 có confidence cao.

## Bước 6
Build/test lại.

## Bước 7
Visual inspection lại toàn site.

## Bước 8
Sửa regression.

## Bước 9
Lặp lại đến khi không còn lỗi nghiêm trọng.

Không dừng sau khi phát hiện lỗi.

---

# 33. KHÔNG OVER-REDESIGN

Trong quá trình QA:

Không được tự ý:

- đổi toàn bộ palette;
- đổi font;
- đổi sitemap;
- đổi visual direction;
- thêm animation lớn;
- thêm section;
- xóa content quan trọng;

trừ khi có một lỗi thực sự giải thích được.

Ưu tiên:

```text
correct
→ clarify
→ normalize
→ refine
```

trước:

```text
redesign
```

---

# 34. SOURCE CODE CLEANUP

Khi phát hiện visual inconsistency có root cause trong code:

Không patch từng page bằng CSS riêng.

Hãy kiểm tra:

```text
token
component
variant
layout primitive
```

và sửa ở source thích hợp.

Ví dụ:

Nếu 12 section có H2 khác nhau:

KHÔNG sửa 12 file.

Sửa typography system/component nếu root cause nằm ở system.

---

# 35. VISUAL QA LOOP

Sau mỗi nhóm thay đổi:

Render lại page.

So sánh:

```text
Before
vs
After
```

Kiểm tra:

- fix có giải quyết root issue?
- có tạo regression?
- có phá brand?
- responsive còn đúng?
- page khác có bị ảnh hưởng?

---

# 36. FINAL QUALITY TEST

Website chỉ pass vòng này khi:

### Readability

Không có nội dung quan trọng khó đọc.

### Typography

Hierarchy rõ và font consistent.

### Color

Màu có role và contrast tốt.

### Style

Website có visual language rõ ràng.

### Brand

Không có cảm giác generic template.

### UX

User biết mình ở đâu và làm gì tiếp.

### Wording

Copy tự nhiên, rõ và thống nhất.

### Components

System consistent.

### Pages

Đa dạng nhưng cùng hệ.

### Responsive

Không có layout broken.

### Interaction

Các state quan trọng hoạt động.

### Accessibility

Baseline được đảm bảo.

### Craft

Không còn chi tiết rõ ràng mang cảm giác unfinished.

---

# 37. FINAL REPORT

Sau khi sửa xong, chỉ báo cáo ngắn gọn:

## P0 đã sửa

- ...

## P1 đã sửa

- ...

## Visual/System fixes

- ...

## UX fixes

- ...

## Typography fixes

- ...

## Color/contrast fixes

- ...

## Content/wording fixes

- ...

## Responsive fixes

- ...

## Những gì cố ý giữ nguyên

- ...

## Known remaining issues

- ...

Không viết báo cáo dài thay cho việc sửa code.

Ưu tiên:

> FIX WEBSITE > EXPLAIN WEBSITE

---

# 38. CUỐI CÙNG — TỰ CRITIQUE

Trước khi kết thúc, tự hỏi:

1. Có text nào tôi phải cố nhìn mới đọc được không?
2. Có section nào không hiểu tại sao lại có màu nền đó không?
3. Có page nào giống template hơn là thiết kế theo content không?
4. Có CTA nào không biết click xong đi đâu không?
5. Có tiếng Anh/Tiếng Việt trộn không có lý do không?
6. Có typography nào phá hierarchy không?
7. Có component nào cùng chức năng nhưng khác style không?
8. Có quá nhiều card không?
9. Có element nào chỉ tồn tại để trang “đẹp hơn” nhưng không phục vụ nội dung không?
10. Nếu che logo, website có còn mang nhận diện thương hiệu không?
11. Mobile có thực sự được thiết kế hay chỉ stack desktop?
12. Có gì trông giống AI-generated website không?

Nếu câu trả lời CÓ:

→ tiếp tục sửa.

Chỉ kết thúc khi không còn lỗi P0/P1 và các lỗi craft rõ ràng đã được xử lý.
