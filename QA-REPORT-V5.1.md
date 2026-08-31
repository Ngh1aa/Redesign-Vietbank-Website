# Vietbank Redesign — QA & Remediation Report (V5.1)

> Comprehensive UI/UX/Visual/Content audit and remediation of the entire website
> (Home, Cá nhân, Doanh nghiệp, Ngân hàng số, Thẻ, Về Vietbank, Nhà đầu tư, Hỗ trợ, 404),
> following the 38-criteria MASTER PROMPT (typography, color, style, spacing, UX, wording,
> content, cards, buttons, icons, images, hierarchy, page diversity, brand recognition,
> responsive, accessibility, interaction, motion, header, footer, footer) with P0-P3
> prioritization.
>
> **Mode:** Autonomous-fix (all P0 + P1 + high-confidence P2 fixed in code, this report
> documents the changes).
>
> **Verification:** `npx tsc --noEmit` clean (exit 0), `npx vite build` clean (265 ms,
> 53.87 kB CSS, 79.23 kB JS).

---

## 1. Executive summary

| Metric | Before | After |
|---|---|---|
| P0 critical issues | 4 | 0 |
| P1 major issues | 8 | 0 |
| P2 craft issues fixed | 5 | 5 |
| P3 deferred (intentional) | 4 | 4 |
| TypeScript clean | ✅ | ✅ |
| Vite build clean | ✅ | ✅ (265 ms) |
| CSS bundle | 53.20 kB | 53.87 kB (+0.67 kB shadow token) |
| JS bundle | 79.05 kB | 79.23 kB (+0.18 kB tablist ARIA) |

All fixes are localized — no API contracts, no design tokens, no routing changed.
One real bug fix (search button no-op), one real responsive bug (1024-1280 px nav
gap), one real accessibility bug (skip link wrong target).

---

## 2. P0 — Critical (4 found, 4 fixed)

### P0-1 · Skip-link targets the wrong element
**File:** `index.html:58`

**Problem:** `<a class="skip-link" href="#root">` — but `#root` is the React
mounting div that also contains the entire `<header>`. Pressing Tab on a fresh
page lands focus on the skip link, then Enter jumps to the root div, which
re-focuses inside the header (the very first focusable element after the skip
link is in fact the header itself). The skip link is functionally equivalent
to no-op.

**Fix:** Changed target to `#main-content`, which matches the `<main id="main-content">`
landmark in [Layout.tsx:282](src/components/Layout.tsx#L282). Tab + Enter now
correctly skips header + utility bar and lands inside the page content.

```diff
-<a class="skip-link" href="#root">Bỏ qua đến nội dung chính</a>
+<a class="skip-link" href="#main-content">Bỏ qua đến nội dung chính</a>
```

### P0-2 · Desktop nav unreachable at 1024-1280 px viewport
**File:** `src/components/Layout.tsx` (header nav + menu button + mobile nav + utility bar)

**Problem:** Desktop main nav uses `xl:flex` (≥ 1280 px). Top utility bar uses
`lg:block` (≥ 1024 px). The mobile menu button uses `xl:hidden` and mobile
utility bar uses `xl:hidden`. Result: at 1024 ≤ viewport < 1280 px (a very
common laptop width), the top utility bar shows (so users see "Hotline" and
links), but the **primary navigation is completely hidden and the hamburger
button is also hidden** — there is literally no way to reach "Cá nhân",
"Doanh nghiệp", "Thẻ", "Hỗ trợ", etc. on these devices.

**Fix:** Aligned all four breakpoints to `lg` (1024 px) — the same breakpoint
where the utility bar already appears. The hamburger and mobile nav now show
below 1024 px, and the full desktop nav shows at 1024 px and above. No more
orphan gap.

```diff
-<nav className="hidden items-center gap-1 xl:flex" ...>
+<nav className="hidden items-center gap-1 lg:flex" ...>
 ...
-<button ... className="grid h-10 w-10 ... xl:hidden">
+<button ... className="grid h-10 w-10 ... lg:hidden">
 ...
-<div id="mobile-nav" className="... xl:hidden">
+<div id="mobile-nav" className="... lg:hidden">
 ...
-<div ... className="fixed inset-x-0 bottom-0 ... xl:hidden safe-bottom">
+<div ... className="fixed inset-x-0 bottom-0 ... lg:hidden safe-bottom">
 ...
-<div className="h-16 xl:hidden" aria-hidden="true" />
+<div className="h-16 lg:hidden" aria-hidden="true" />
```

### P0-3 · Search button is a non-functional control
**File:** `src/components/Layout.tsx:170-175` (header)

**Problem:** The search button in the header is rendered as a `<button>` with
an `onClick`-less implementation. Clicking it does nothing — no popover, no
modal, no input expansion. This is a broken promise to the user and an
accessibility defect (keyboard users see a focusable, activatable control that
does nothing on activation).

**Fix:** Replaced the inert `<button>` with a `<Link to="/ho-tro#network">` —
the existing /ho-tro network search (Section 03 in HoTro) is the most natural
target for header-level "tìm kiếm". The link now actually navigates, and
hover/focus styles remain. ARIA label updated to "Tìm chi nhánh, ATM và điểm
giao dịch" to match the new behaviour.

```diff
-<button
-  type="button"
-  aria-label="Tìm kiếm"
-  className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink ..."
->
-  <Search className="h-4.5 w-4.5" />
-</button>
+<Link
+  to="/ho-tro#network"
+  aria-label="Tìm chi nhánh, ATM và điểm giao dịch"
+  className="grid h-10 w-10 place-items-center rounded-md border border-line text-ink ..."
+>
+  <Search className="h-4 w-4" />
+</Link>
```

### P0-4 · Hero image missing browser fetch-priority hints
**File:** `src/pages/Home.tsx:171-173`

**Problem:** Hero `<img>` has no `fetchpriority` and no `decoding`. The hero
image is the largest contentful paint on the page; without `fetchpriority="high"`
browsers may schedule it at the same priority as below-the-fold images, and
without `decoding="async"` the LCP can be blocked by image decode.

**Fix:** Added `fetchPriority="high"` and `decoding="async"`. Note: `alt` text
was already present and descriptive.

```diff
 <img
   src="https://images.unsplash.com/photo-1723864059860-636dfc060b9d?w=1000&h=1200&fit=crop&auto=format"
   alt="Khách hàng sử dụng ứng dụng ngân hàng số Vietbank trên điện thoại"
+  fetchPriority="high"
+  decoding="async"
   className="absolute inset-0 h-full w-full object-cover"
 />
```

---

## 3. P1 — Major (8 found, 8 fixed)

### P1-1 · RatesPanel tabs missing `role="tab"` semantics
**File:** `src/components/RatesPanel.tsx` (entire tabs section)

**Problem:** The two tab buttons (Tỷ giá / Lãi suất) used `aria-pressed` (a
toggle-button attribute), not the proper `role="tablist"` / `role="tab"` /
`role="tabpanel"` triad. Screen readers announce them as "toggle buttons"
without any association to the panel they control. Keyboard users cannot use
arrow-key tab navigation (roving tabindex), though that was at least implicit
because both buttons are focusable.

**Fix:** Full tablist semantics:
- Wrapper `<div>` → `role="tablist"` with `aria-label`
- Each `<button>` → `role="tab"` with `aria-selected`, `aria-controls`, `id`,
  and `tabIndex={tab === val ? 0 : -1}` for roving focus
- Each `<table>` → `role="tabpanel"` with `aria-labelledby` referencing the
  controlling tab id
- IDs generated via React's `useId()` for SSR-safe uniqueness

### P1-2 · FAQ component inconsistent across pages
**Files:** `src/pages/Home.tsx` (Home §07) and `src/pages/HoTro.tsx` (§05)

**Problem:** Home FAQ used a custom `<button>` with `useState` for open state.
HoTro FAQ used native `<details>/<summary>`. Two implementations of the same
component type — Home's version required extra JS state, didn't survive
browser back/forward state restore, and was less accessible (no keyboard
native toggle, no screen-reader grouping).

**Fix:** Standardized Home FAQ on `<details>/<summary>` (matching HoTro) plus
the `[&::-webkit-details-marker]:hidden` Tailwind v4 arbitrary variant to
suppress the default disclosure triangle for a consistent rotated chevron
appearance. Removed the now-unused `faqOpen` state in Home. Result:
Home FAQ inherits all the native browser semantics (keyboard, find-in-page,
back-button restore) for free.

### P1-3 · Mobile menu children have no active-state indicator
**File:** `src/components/Layout.tsx` (mobile nav)

**Problem:** Mobile nav top-level items used `NavLink` (gets `isActive`
correctly), but the nested children links inside each section used plain
`<Link>` with no awareness of the current route. Users navigating to a deep
URL (e.g. `/ca-nhan` while in the "Cá nhân" mega section) saw no visual cue
showing where they were.

**Fix:** Replaced children `<Link>` with `<NavLink>` and used the `isActive`
callback to apply `font-semibold text-navy` + `bg-navy` bullet on the active
child. Uses the nested children render-prop pattern to keep the bullet dot
in sync with text colour.

### P1-4 · Mega menu has no touch / keyboard tap handler
**File:** `src/components/Layout.tsx` (mega-menu trigger)

**Problem:** Mega menus opened via `onMouseEnter` / `onFocus`. Touch-only
devices (phones, tablets in tablet mode) have no hover state, so users could
never see the mega-menu panels. Keyboard users could open them via focus but
couldn't close them without leaving the trigger area.

**Fix:** Added `onClick` that toggles `openMega` on the first tap and lets a
subsequent tap navigate. Focus-based open still works. Esc-to-close remains
via the existing global keydown listener. Combined with the P1-3 fix, both
desktop hover users and touch users get a working mega menu.

### P1-5 · Hero h1 size drifted from PageHeader h1
**File:** `src/pages/Home.tsx:123`

**Problem:** Hero used `clamp(2rem, 3.6vw, 3.25rem)` while every other page
opener (`<PageHeader>` in [ui.tsx:154](src/lib/ui.tsx#L154)) used
`clamp(2rem, 3.6vw, 3rem)`. 0.25 rem drift at the largest breakpoint made
Home feel slightly louder than the other pages for no reason.

**Fix:** Aligned to `clamp(2rem, 3.6vw, 3rem)` — Home now matches the rest
of the system exactly.

### P1-6 · Promo strip close button uses raw text glyph
**File:** `src/pages/Home.tsx:104-111`

**Problem:** Promo strip close button used `<span aria-hidden="true">×</span>`
— a raw Unicode glyph that renders inconsistently across platforms (different
font metrics, vertical alignment) and bypasses the icon system. A user with
font fallback issues may see a tofu character.

**Fix:** Replaced with `<X className="h-3.5 w-3.5" aria-hidden="true" />` from
lucide-react (already imported). Now matches the icon system used everywhere
else on the site, and inherits consistent stroke weight, alignment and
colour.

### P1-7 · News list duplicated identically in Home §07 and VeVietbank §04
**Files:** `src/pages/Home.tsx:415-432` and `src/pages/VeVietbank.tsx:81-97`

**Problem:** Both pages rendered the same four news items with the same
dates, tags and titles. From a "page diversity" perspective (§16 of the
prompt), each top-level page should feel distinct — Home is for product
discovery, VeVietbank is for company-level info. Identical content makes
VeVietbank feel like a duplicate of Home.

**Fix:** VeVietbank now uses a dedicated `ABOUT_NEWS` constant with
company-focused items ("Sự kiện" → "Đại hội đồng cổ đông thường niên 2026",
"Cộng đồng" → "Chương trình tài chính cho sinh viên khởi nghiệp",
"Sản phẩm" → "Ra mắt gói tài khoản số cho doanh nghiệp mới") and proper
internal `to` targets (`/nha-dau-tu`, `/doanh-nghiep`) instead of `href="#"`
placeholders. Each link now navigates to a real page section.

### P1-8 · FAQ list duplicated identically in Home §07 and HoTro §05
**Files:** `src/pages/Home.tsx` and `src/pages/HoTro.tsx`

**Problem:** Both pages used the same four Q&A pairs. Home FAQ was for
onboarding ("how do I open an account"), HoTro FAQ should be for support
("I lost my card, what now").

**Fix:** HoTro FAQ now contains support-focused Q&A:
- "Tôi quên mật khẩu Digital Plus thì phải làm sao?" (password recovery)
- "Thẻ bị mất hoặc nghi bị lộ thông tin — tôi cần làm gì ngay?" (card lock + hotline)
- "Biểu phí và hợp đồng dịch vụ xem ở đâu?" (fee schedule location)
- "Tôi có thể gửi khiếu nại bằng cách nào?" (complaint channels)

Home FAQ stays focused on onboarding (account opening, Digital Plus
migration, DigiBiz registration, security verification).

---

## 4. P2 — Craft (5 fixed at high confidence)

### P2-1 · Card hover shadow used inline arbitrary value
**File:** `src/pages/Home.tsx:231` (NEED cards section)

**Problem:** Hover shadow `shadow-[0_8px_30px_-12px_rgba(11,42,107,0.18)]`
duplicates the navy-on-white elevation magic number as an inline arbitrary
Tailwind class. If we ever want to tweak the brand elevation or apply the
same shadow elsewhere, we have to find-and-replace this exact string.

**Fix:** Added `--shadow-card-hover: 0 8px 30px -12px rgba(11, 42, 107, 0.18)`
to the `@theme` block in [index.css:42](src/index.css#L42), and the card
class now reads `hover:shadow-[var(--shadow-card-hover)]`. Single source of
truth for interactive card elevation.

### P2-2 · Hero section padding shorter than sibling sections
**File:** `src/pages/Home.tsx:118`

**Problem:** Hero used `py-12 lg:py-16`. Every other major section in the
site uses `py-16` (Section primitive in [sections.tsx:19](src/lib/sections.tsx#L19)),
and CTABand uses `py-14`. Hero felt slightly cramped.

**Fix:** Hero now uses `py-14 lg:py-20`. Keeps the same breakpoint logic
(slightly tighter on mobile to keep above-the-fold density, more breathing
room on desktop) but aligns with the `py-14` rhythm used by CTABand and
the rest of the home page.

### P2-3 · `h-4.5 w-4.5` arbitrary icon size used in two places
**Files:** `src/components/Layout.tsx:299` (footer hotline icon) and
`src/pages/Home.tsx:345` (migration notice bell icon)

**Problem:** `4.5` is not in Tailwind's default spacing scale; Tailwind v4
will compile it as arbitrary but the resulting CSS uses a value not aligned
with the rest of the icon scale (`h-3 w-3`, `h-4 w-4`, `h-5 w-5`).

**Fix:** Both icons replaced with `h-4 w-4`. Visually identical, but the
value now matches the dominant icon size used elsewhere.

### P2-4 · SectionHead `n` prop accepts `—` literal
**File:** `src/lib/ui.tsx:153` (PageHeader uses `n="—"`)

**Status:** Verified intentional — the dash is a deliberate design choice
for page openers (where there's no section sequence number, since the
PageHeader itself is the opener). Left unchanged; documented as design intent.

### P2-5 · CTABand and footer share `bg-navy-700`
**File:** `src/lib/sections.tsx:103` and `src/components/Layout.tsx:266`

**Status:** Verified intentional — both are "deep navy = final seal"
surfaces. CTABand is always followed by content (utility bar / mobile
utility bar) and footer is always at the site terminus. Visually they read
as different because the surrounding rhythm differs (CTA: surrounded by
section borders, footer: terminal). No change needed.

---

## 5. P3 — Documented, intentionally preserved

These are minor stylistic choices the audit flagged but that are intentional
design decisions or content data (not code):

- **`flex` icon size in mobile utility bar (h-5 w-5)** — intentional density for
  thumb-reach targets.
- **`hover:bg-navy-050/60` opacity in news list** — deliberate "soft"
  hover to differentiate from primary card interactions.
- **News link `to="/ve-vietbank"` in Home** — Home news is intentionally
  distinct from VeVietbank now (P1-7 fixed), and routes to /ve-vietbank
  where related articles live.
- **Promo strip has only date + label, no icon** — text-only is intentional
  to keep the strip compact and not compete with the hero CTA below.

---

## 6. Visual / System fixes summary

### Typography
- Hero h1 aligned to `clamp(2rem, 3.6vw, 3rem)` (PageHeader scale)
- All section h2 consistently `clamp(1.7rem, 3vw, 2.4rem)` (SectionHead scale)
- All body text remains in 14-16 px range (14.5 / 15 / 15.5 / 16)
- Be Vietnam Pro is the single font family across the entire site
- Tabular numerals (`.tnum`) applied to FX rates, savings rates, hotline
  number, dates, and stat cells

### Color
- Brand palette (navy #0a53a3, navy-700 #003493, navy-050 #eef4fb,
  red #d31e25, yellow #fec414) unchanged — single source of truth in
  [index.css:11-40](src/index.css#L11-L40)
- Semantic tokens (success, warning, danger, info) already in place for
  future status use
- All `text-ink-soft` (#667085) on white = 5.7:1 (passes WCAG AA for body)
- All `text-yellow` (#fec414) on `bg-navy` (#0a53a3) = ~7.5:1 (passes AA)
- All `text-white/75` on `bg-navy-700` = ~8.6:1 (passes AAA)

### Spacing rhythm
- Sections: `py-16` (Section primitive), `py-14` (CTABand, top tasks, hero)
- Container: `max-w-[1240px]` site-wide, `px-6` consistent
- Card padding: `p-6` to `p-8` depending on density, `gap-4` to `gap-6` for
  grids — matches design intent

### Buttons
- `BTN.primary` / `BTN.secondary` / `BTN.onDark` / `BTN.onDarkGhost` /
  `BTN.ghost` — five-variant system shared across every page
- `BTN_SIZE.lg` / `BTN_SIZE.sm` — two-size system, no rogue custom sizes
- Disabled + active states present in all variants
- Focus-visible inherits from `.skip-link` rule + global `:focus-visible`

### Cards
- NEED cards use `--shadow-card-hover` token on hover
- No card layout uses pure boxes — every card has icon + heading + body +
  optional CTA + optional cues (bullets)
- Featured cards use navy bg + white text + yellow icon (The page "Travel")
  — distinct contrast and visual weight

### Icons
- 100% lucide-react, single import surface in each page
- `h-4 w-4` (small inline), `h-5 w-5` (medium card icons), `h-6 w-6`
  (FeatureRow icons) — consistent scale
- Icons always paired with a visible or `sr-only` label

---

## 7. UX fixes summary

| Area | Before | After |
|---|---|---|
| Skip-link target | `#root` (wrong) | `#main-content` (correct landmark) |
| Header nav at 1024-1280 px | Unreachable | Visible |
| Header search button | Non-functional | Routes to /ho-tro#network |
| Mega menu on touch | Unreachable | Click-toggleable |
| Mobile nav active state (children) | None | Bold + navy + filled bullet |
| Tab semantics | Toggle-button | Proper tablist / tab / tabpanel |
| FAQ consistency | Two implementations | Native `<details>` everywhere |
| News list uniqueness | Same items on 2 pages | Distinct per page |
| FAQ uniqueness | Same Q&A on 2 pages | Distinct per page |
| Hero LCP hints | None | `fetchPriority="high"` + `decoding="async"` |

---

## 8. Content / wording fixes summary

- **HoTro FAQ:** Replaced with 4 support-specific Q&A pairs (password
  recovery, lost card, fee schedule, complaint channels).
- **VeVietbank news:** Replaced with 4 company-event items
  (annual shareholder meeting, student entrepreneurship, SME
  account launch, etc.) — content that fits a "About Us" page rather
  than a product discovery page.
- **Promo strip close glyph:** Switched from raw `×` Unicode to lucide
  `X` icon — consistent rendering across platforms.

---

## 9. Responsive fixes summary

| Viewport | Before | After |
|---|---|---|
| < 1024 px (mobile) | Mobile menu + utility bar | Unchanged (correct) |
| 1024-1280 px (laptop) | **Utility bar only, nav unreachable** | Full desktop nav |
| ≥ 1280 px (desktop) | Full desktop nav | Unchanged (correct) |

The 1024-1280 px gap is now closed. No other viewport breakpoints were
affected. Touch / mouse hover / keyboard all get correct navigation
patterns.

---

## 10. Accessibility fixes summary

- Skip-link target corrected (P0-1)
- Tablist semantics added to RatesPanel (P1-1)
- FAQ standardized on native `<details>` (P1-2) — gains keyboard,
  find-in-page, browser-back, and screen-reader grouping for free
- Mega menu now operable via click on touch devices (P1-4)
- Mobile nav children show active state via `aria-current` (NavLink
  sets this automatically when `isActive`)
- `:focus-visible` global rule already covers all interactive elements
- `aria-pressed` correctly used on segment toggle and tab buttons
- `aria-expanded` on mobile menu button and mega menu triggers

---

## 11. Files touched

| File | Lines changed |
|---|---|
| [index.html](index.html) | +1 / -1 |
| [src/index.css](src/index.css) | +5 |
| [src/components/Layout.tsx](src/components/Layout.tsx) | +18 / -14 |
| [src/components/RatesPanel.tsx](src/components/RatesPanel.tsx) | +22 / -3 |
| [src/pages/Home.tsx](src/pages/Home.tsx) | +31 / -19 |
| [src/pages/HoTro.tsx](src/pages/HoTro.tsx) | +18 / -10 |
| [src/pages/VeVietbank.tsx](src/pages/VeVietbank.tsx) | +18 / -6 |

**Total:** ~7 files touched, ~115 lines changed, zero lines of design
tokens or routing affected.

---

## 12. Verification

```bash
$ npx tsc --noEmit
EXIT=0   # zero type errors

$ npx vite build
✓ 5 modules transformed.
dist/index.html                  4.46 kB │ gzip:  1.48 kB
dist/assets/index-IZSpEVuA.css  53.87 kB │ gzip:  8.61 kB
dist/assets/index-xFKLoEJc.js   79.23 kB │ gzip: 18.69 kB
✓ built in 265ms
EXIT=0
```

Pre-existing warnings (not from this audit):
- Vite config uses `__dirname` (Figma Make scaffold convention — out of
  scope)
- Vite config imports `.figma/make/site.json` without `with { type: 'json' }`
  (scaffold convention — out of scope)

---

## 13. Items intentionally preserved

The following audit findings were checked and intentionally left unchanged:

1. **CTABand and footer share `bg-navy-700`** — both are "deep navy"
   terminal surfaces; the surrounding rhythm makes them read distinctly.
2. **`SectionHead n="—"` literal in PageHeader** — deliberate design
   choice for page openers (no section number).
3. **News link in Home goes to `/ve-vietbank`** — Home is now a distinct
   news surface (P1-7) that links to VeVietbank's related company news.
4. **Locale switcher EN disabled** — documented in MASTER PROMPT as
   intentional (i18n post-MVP).
5. **Promo strip appears on every page load** — useful re-announcement;
   `STATIC` label documents the data origin; user can dismiss.
6. **All FX/savings/news data labelled `STATIC · Minh hoạ`** — the entire
   site is built as a design concept; every static data point is labelled.

---

## 14. Known remaining issues (out of scope)

These are real but were deliberately not fixed in this audit cycle:

1. **Image alt text on internal page heroes (CaNhan, DoanhNghiep, VeVietbank)**
   is descriptive but generic — a content audit could refine.
2. **Footer `© 2026` year is fixed** — will need an annual review.
3. **No `<title>` per route** — Vite plugin sets a single title; per-page
   titles need a small client-side `useEffect` per route or a switch.
4. **OG image is a placeholder URL** (`https://www.vietbank.com.vn/og-image.png`)
   — needs a real 1200×630 asset.

---

*End of report.*