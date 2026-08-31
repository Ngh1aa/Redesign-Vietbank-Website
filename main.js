/* ==================================================================
   Vietbank Redesign — Static SPA
   Hash-based router + vanilla JS page components
   ================================================================== */

/* ---------- Constants ---------- */
const HOTLINE = "1800 1122";
const HOTLINE_TEL = "tel:18001122";

const FX_RATES = [
  { code: "USD", name: "Đô la Mỹ", buy: "25.410", transfer: "25.440", sell: "25.780" },
  { code: "EUR", name: "Euro", buy: "27.180", transfer: "27.290", sell: "28.510" },
  { code: "JPY", name: "Yên Nhật", buy: "165.20", transfer: "166.90", sell: "174.30" },
  { code: "AUD", name: "Đô la Úc", buy: "16.240", transfer: "16.400", sell: "16.980" },
  { code: "SGD", name: "Đô la Singapore", buy: "18.720", transfer: "18.910", sell: "19.480" },
];

const SAVINGS_RATES = [
  { term: "1 tháng", online: "3.80", counter: "3.60" },
  { term: "3 tháng", online: "4.10", counter: "3.90" },
  { term: "6 tháng", online: "5.30", counter: "5.10" },
  { term: "12 tháng", online: "6.10", counter: "5.90" },
  { term: "24 tháng", online: "6.30", counter: "6.10" },
];

const RATE_STAMP = "STATIC · Số liệu mẫu minh hoạ · Cập nhật 08:30 31/08/2026";

const NAV_LINKS = [
  { label: "Cá nhân", to: "/ca-nhan", caret: true },
  { label: "Doanh nghiệp", to: "/doanh-nghiep", caret: true },
  { label: "Ngân hàng số", to: "/ngan-hang-so", caret: true },
  { label: "Thẻ", to: "/the" },
  { label: "Hỗ trợ", to: "/ho-tro" },
  { label: "Về Vietbank", to: "/ve-vietbank" },
  { label: "Nhà đầu tư", to: "/nha-dau-tu" },
];

/* ---------- Icons (inline SVG) ---------- */
const Icons = {
  search: '<svg class="icon icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  phone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  globe: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  chevronRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  chevronDown: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  trendingUp: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  piggyBank: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h0"/></svg>',
  mapPin: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  fileText: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>',
  logIn: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>',
  smartphone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  arrowRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowUpRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
  calculator: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
  receipt: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>',
  send: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
  bellRing: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  messageCircle: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  shieldCheck: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  lock: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  wallet: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>',
  creditCard: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
  landmark: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
  car: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.2 10.6 16 8 16 8h-3l-1.1 3M14 17H8m8 0v4M8 17v4m-4-2h2m12 0h2M7 12c0-2 1-3 3-3s3 1 3 3-1 3-3 3-3-1-3-3Z"/></svg>',
  home: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  banknote: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>',
  globe2: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  building2: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
  qrCode: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>',
  gift: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="20" y1="22" y2="7"/><line x1="12" x2="12" y1="22"/><line x1="12" x2="12" y2="7"/><path d="M2 7h20"/><path d="M5 7a3 3 0 0 1 5-2 3 3 0 0 1 5 2 3 3 0 0 1-5 2 3 3 0 0 1-5-2"/></svg>',
  plane: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
  target: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  heartHandshake: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 13-1.5-1.5"/><path d="m14 15-1.5-1.5"/><path d="m16 17-1.5-1.5"/></svg>',
  lifeBuoy: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" x2="9.17" y1="4.93" y2="9.17"/><line x1="14.83" x2="19.07" y1="14.83" y2="19.07"/><line x1="14.83" x2="19.07" y1="9.17" y2="4.93"/><line x1="4.93" x2="9.17" y1="19.07" y2="14.83"/></svg>',
};

/* ---------- Logo ---------- */
function Logo({ light = false } = {}) {
  const nameClass = light ? "logo__name--light" : "logo__name--dark";
  const taglineClass = light ? "logo__tagline--light" : "logo__tagline--dark";
  return `
    <a href="${light ? "#/" : "#/"}" class="logo" aria-label="Vietbank — Trang chủ">
      <svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points="50,4 91,27 91,73 50,96 9,73 9,27" fill="var(--color-red)"/>
        <polygon points="50,4 91,27 91,50 50,50" fill="var(--color-yellow)"/>
        <text x="50" y="50" dominant-baseline="central" text-anchor="middle"
              font-family="Be Vietnam Pro, sans-serif" font-weight="700"
              font-size="38" fill="#fff">VB</text>
      </svg>
      <span class="logo__brand">
        <span class="logo__name ${nameClass}">VIETBANK</span>
        <span class="logo__tagline ${taglineClass}">Tăng trưởng · An toàn · Bền vững</span>
      </span>
    </a>
  `;
}

/* ---------- Helper: link href ---------- */
function href(to) {
  return "#" + to;
}

/* ---------- Section helpers ---------- */
function Section({ children, tone = "", id = "" } = {}) {
  const toneClass = tone === "soft" ? "section--soft" : tone === "brand" ? "section--brand" : "";
  return `<section id="${id}" class="section ${toneClass}"><div class="container-app">${children}</div></section>`;
}

function SectionHead({ n, eyebrow, title, lead }) {
  return `
    <div class="section-head">
      ${renderSectionLabel(n, eyebrow)}
      <h2>${title}</h2>
      ${lead ? `<p>${lead}</p>` : ""}
    </div>
  `;
}

function renderSectionLabel(n, text) {
  return `
    <div class="section-label">
      <span class="section-label__n tnum">${n}</span>
      <span class="section-label__line"></span>
      <span class="section-label__text">${text}</span>
    </div>
  `;
}

/* ---------- Buttons ---------- */
function btnPrimary(label, to = "#", size = "lg") {
  return `<a href="${href(to)}" class="btn btn--primary btn--${size}">${label}</a>`;
}
function btnSecondary(label, to = "#", size = "lg") {
  return `<a href="${href(to)}" class="btn btn--secondary btn--${size}">${label}</a>`;
}
function btnOnDark(label, to = "#", size = "lg") {
  return `<a href="${href(to)}" class="btn btn--on-dark btn--${size}">${label}</a>`;
}
function btnOnDarkGhost(label, to = "#", size = "lg") {
  return `<a href="${href(to)}" class="btn btn--on-dark-ghost btn--${size}">${label}</a>`;
}

/* ---------- CTA Band ---------- */
function CTABand({ title, body, primary, secondary }) {
  return `
    <section class="cta-band">
      <div class="cta-band__inner">
        <div>
          <h2>${title}</h2>
          <p>${body}</p>
        </div>
        <div class="cta-band__actions">
          ${btnOnDark(`${primary.label} ${Icons.arrowRight}`, primary.to)}
          ${secondary ? btnOnDarkGhost(secondary.label, secondary.to) : ""}
        </div>
      </div>
    </section>
  `;
}

/* ---------- Stat ---------- */
function Stat({ value, label }) {
  return `
    <div class="stat-cell">
      <div class="stat-cell__value">${value}</div>
      <div class="stat-cell__label">${label}</div>
    </div>
  `;
}

/* ---------- Page Header ---------- */
function PageHeader({ eyebrow, title, lead, crumb }) {
  return `
    <section class="page-header">
      <div class="page-header__inner">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="${href('/')}">Trang chủ</a>
          ${Icons.chevronRight}
          <span class="breadcrumb__current">${crumb}</span>
        </nav>
        ${renderSectionLabel("—", eyebrow)}
        <h1>${title}</h1>
        <p class="page-header__lead">${lead}</p>
      </div>
    </section>
  `;
}

/* ---------- Rates Panel ---------- */
function RatesPanelHTML(initialTab = "fx") {
  const tabs = [
    { val: "fx", lbl: "Tỷ giá ngoại tệ" },
    { val: "savings", lbl: "Lãi suất tiết kiệm" },
  ];
  return `
    <div class="rates-panel" data-tab="${initialTab}">
      <div class="rates-panel__tabs">
        <div class="rates-panel__tablist" role="tablist">
          ${tabs
            .map(
              (t) =>
                `<button class="rates-panel__tab ${t.val === initialTab ? "active" : ""}" data-tab="${t.val}" role="tab" aria-selected="${t.val === initialTab}">${t.lbl}</button>`
            )
            .join("")}
        </div>
      </div>
      <div class="rates-panel__tables">
        ${fxTable()}
        ${savingsTable()}
      </div>
      <div class="rates-panel__footer">
        <span>${RATE_STAMP}</span>
        <div class="rates-panel__links">
          <a href="#">${Icons.calculator} Công cụ tính lãi</a>
          <a href="#">Bảng đầy đủ ${Icons.chevronRight}</a>
        </div>
      </div>
    </div>
  `;
}

function fxTable() {
  return `
    <div class="rates-table" data-table="fx">
      <table>
        <thead>
          <tr>
            <th>Ngoại tệ</th>
            <th class="right">Mua tiền mặt</th>
            <th class="right">Mua chuyển khoản</th>
            <th class="right">Bán</th>
          </tr>
        </thead>
        <tbody>
          ${FX_RATES.map(
            (r) => `
            <tr>
              <td><span class="code">${r.code}</span><span class="name">${r.name}</span></td>
              <td class="right">${r.buy}</td>
              <td class="right">${r.transfer}</td>
              <td class="right sell">${r.sell}</td>
            </tr>
          `
          ).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function savingsTable() {
  return `
    <div class="rates-table" data-table="savings" style="display:none">
      <table>
        <thead>
          <tr>
            <th>Kỳ hạn</th>
            <th class="right">Trực tuyến (%/năm)</th>
            <th class="right">Tại quầy (%/năm)</th>
          </tr>
        </thead>
        <tbody>
          ${SAVINGS_RATES.map(
            (r) => `
            <tr>
              <td><strong>${r.term}</strong></td>
              <td class="right" style="font-weight:600;color:var(--color-navy)">${r.online}</td>
              <td class="right">${r.counter}</td>
            </tr>
          `
          ).join("")}
        </tbody>
      </table>
    </div>
  `;
}

/* ---------- Layout: Header + Footer ---------- */
let mobileMenuOpen = false;

function renderHeader(currentPath) {
  mobileMenuOpen = false;
  return `
    <div class="header-utility">
      <div class="container-app flex items-center justify-between text-[13px]">
        <div class="flex items-center gap-5 py-2">
          <a class="flex items-center gap-1.5 hover:text-white" href="${href('/ho-tro')}#rates">${Icons.trendingUp} Tỷ giá</a>
          <a class="flex items-center gap-1.5 hover:text-white" href="${href('/ho-tro')}#rates">${Icons.piggyBank} Lãi suất</a>
          <a class="flex items-center gap-1.5 hover:text-white" href="${href('/ho-tro')}#network">${Icons.mapPin} ATM / Chi nhánh</a>
          <a class="flex items-center gap-1.5 hover:text-white" href="${href('/ho-tro')}#docs">${Icons.fileText} Biểu phí & biểu mẫu</a>
        </div>
        <div class="flex items-center gap-5 py-2">
          <a class="flex items-center gap-1.5 font-medium hover:text-white" href="${HOTLINE_TEL}">${Icons.phone} <span style="color:var(--color-yellow)"></span> Hotline ${HOTLINE}</a>
          <button class="flex items-center gap-1.5 text-white/70 hover:text-white" type="button">${Icons.globe} VI <span class="text-white/60">/ EN</span></button>
        </div>
      </div>
    </div>

    <header class="header">
      <div class="header__inner">
        ${Logo()}
        <nav class="header__nav" aria-label="Điều hướng chính">
          ${NAV_LINKS.map((item) => {
            const active = currentPath === item.to || (item.to !== "/" && currentPath.startsWith(item.to));
            return `
              <a class="header__nav-link ${active ? "active" : ""}" href="${href(item.to)}">
                ${item.label}
                ${item.caret ? `<span style="color:var(--color-ink-soft);font-size:14px">${Icons.chevronDown}</span>` : ""}
              </a>
            `;
          }).join("")}
        </nav>
        <div class="header__actions">
          <button aria-label="Tìm kiếm" class="icon-btn" type="button">${Icons.search}</button>
          <a href="${href('/ngan-hang-so')}" class="btn btn--secondary btn--sm hidden md:inline-flex">${Icons.logIn} Đăng nhập</a>
          <a href="${href('/ngan-hang-so')}" class="btn btn--primary btn--sm hidden md:inline-flex digital-plus-btn">${Icons.smartphone} Digital Plus</a>
          <button aria-label="Mở menu" aria-expanded="false" id="mobile-toggle" class="icon-btn mobile-toggle" type="button">${Icons.menu}</button>
        </div>
      </div>
      <div class="mobile-menu" id="mobile-menu" style="display:none">
        <nav class="mobile-menu__inner" aria-label="Điều hướng di động">
          ${NAV_LINKS.map(
            (item) => `
            <a class="mobile-menu__link" href="${href(item.to)}">
              ${item.label}
              <span style="color:var(--color-ink-soft);font-size:16px">${Icons.chevronRight}</span>
            </a>
          `
          ).join("")}
          <div class="mobile-menu__actions">
            <a href="${href('/ngan-hang-so')}" class="btn btn--secondary btn--sm">Đăng nhập</a>
            <a href="${href('/ngan-hang-so')}" class="btn btn--primary btn--sm">Digital Plus</a>
          </div>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const cols = [
    {
      h: "Cá nhân",
      items: [
        ["Tài khoản", "/ca-nhan"],
        ["Tiết kiệm", "/ca-nhan"],
        ["Thẻ", "/the"],
        ["Vay vốn", "/ca-nhan"],
        ["Digital Plus", "/ngan-hang-so"],
      ],
    },
    {
      h: "Doanh nghiệp",
      items: [
        ["Tài khoản DN", "/doanh-nghiep"],
        ["Vay & tài trợ", "/doanh-nghiep"],
        ["Quản lý dòng tiền", "/doanh-nghiep"],
        ["Tài trợ thương mại", "/doanh-nghiep"],
        ["DigiBiz", "/ngan-hang-so"],
      ],
    },
    {
      h: "Vietbank",
      items: [
        ["Về chúng tôi", "/ve-vietbank"],
        ["Nhà đầu tư", "/nha-dau-tu"],
        ["Tin tức", "/ve-vietbank"],
        ["Hỗ trợ", "/ho-tro"],
        ["Liên hệ", "/ho-tro"],
      ],
    },
  ];
  return `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__grid">
          <div>
            ${Logo({ light: true })}
            <p class="mt-4 max-w-xs text-[14px]" style="line-height:1.6">Ngân hàng TMCP Việt Nam Thương Tín — hướng tới ngân hàng bán lẻ uy tín hàng đầu Việt Nam.</p>
            <div class="footer__stock">
              <span style="color:var(--color-yellow);font-size:14px">${Icons.trendingUp}</span>
              <span class="tnum">VBB · Niêm yết HOSE</span>
            </div>
            <a class="footer__hotline" href="${HOTLINE_TEL}">
              <span style="color:var(--color-yellow);font-size:18px">${Icons.phone}</span>
              <span class="label">
                <span class="small">Chăm sóc khách hàng 24/7</span>
                <span class="big">${HOTLINE}</span>
              </span>
            </a>
          </div>
          ${cols
            .map(
              (col) => `
            <div class="footer__col">
              <h2>${col.h}</h2>
              <ul>
                ${col.items.map(([label, to]) => `<li><a href="${href(to)}">${label}</a></li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="footer__bottom">
          <p>© 2026 Vietbank. Thiết kế concept redesign — số liệu minh hoạ (STATIC), không phải dữ liệu giao dịch thật.</p>
          <div class="footer__bottom-links">
            <a href="${href('/ho-tro')}">Điều khoản</a>
            <a href="${href('/ho-tro')}">Bảo mật</a>
            <a href="${href('/ho-tro')}">Sơ đồ trang</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* ---------- Page: Home ---------- */
function renderHome() {
  return `
    <main>
      <!-- HERO + INTENT ROUTER -->
      <section class="hero">
        <div class="hero__inner">
          <div class="hero__copy reveal">
            <div class="hero__badge">
              <span class="hero__badge-dot"></span>
              Chuyển đổi số 2026 · Tăng trưởng — An toàn — Bền vững
            </div>
            <h1>Ngân hàng đồng hành cùng<span class="accent"> mọi quyết định tài chính</span> của bạn.</h1>
            <p class="hero__lead">Từ tài khoản, tiết kiệm, thẻ đến vay vốn và ngân hàng số — Vietbank giúp bạn tìm đúng giải pháp, hiểu rõ chi phí và bắt đầu chỉ trong vài phút.</p>
            <span class="hero__segment-label">Bạn đang cần ngân hàng cho</span>
            <div class="segment-toggle" id="segment-toggle">
              <button type="button" data-segment="ca-nhan" class="active">Cá nhân</button>
              <button type="button" data-segment="doanh-nghiep">Doanh nghiệp</button>
            </div>
            <div class="hero__cta-row" id="hero-cta">
              <a href="${href('/ca-nhan')}" class="btn btn--primary btn--lg" id="hero-primary-cta">Khám phá sản phẩm cá nhân ${Icons.arrowRight}</a>
              <a href="${href('/ho-tro')}" class="btn btn--secondary btn--lg">Được tư vấn miễn phí</a>
            </div>
          </div>
          <div class="hero__visual">
            <img src="https://images.unsplash.com/photo-1723864059860-636dfc060b9d?w=1000&h=1200&fit=crop&auto=format" alt="Khách hàng sử dụng ứng dụng ngân hàng số Vietbank trên điện thoại" />
            <div class="hero__card">
              <div>
                <div class="hero__card-eyebrow">Vietbank Digital Plus</div>
                <div class="hero__card-title">Chuyển tiền 24/7 · Miễn phí</div>
              </div>
              <a href="${href('/ngan-hang-so')}" aria-label="Tìm hiểu Digital Plus" class="grid place-items-center rounded-md" style="width:2.5rem;height:2.5rem;background:var(--color-navy);color:#fff;display:grid;place-items:center;border-radius:0.375px">${Icons.arrowUpRight}</a>
            </div>
          </div>
        </div>
      </section>

      ${renderTopTasks()}
      ${renderNeeds()}
      ${renderRatesSection()}
      ${renderEcosystem()}
      ${renderTrust()}
      ${renderNewsFAQ()}
      ${renderUtilityBand()}
    </main>
  `;
}

function renderTopTasks() {
  const personal = [
    { icon: Icons.wallet, label: "Mở tài khoản", hint: "Trực tuyến trong 5 phút", to: "/ca-nhan" },
    { icon: Icons.piggyBank, label: "Gửi tiết kiệm", hint: "Lãi suất tới 6.3%/năm", to: "/ca-nhan" },
    { icon: Icons.creditCard, label: "Mở thẻ", hint: "Tín dụng & thanh toán", to: "/the" },
    { icon: Icons.landmark, label: "Vay vốn", hint: "Mua nhà · tiêu dùng · ô tô", to: "/ca-nhan" },
    { icon: Icons.send, label: "Chuyển tiền", hint: "24/7 qua Digital Plus", to: "/ngan-hang-so" },
    { icon: Icons.smartphone, label: "Digital Plus", hint: "Ngân hàng số cá nhân", to: "/ngan-hang-so" },
  ];
  const biz = [
    { icon: Icons.building2, label: "Tài khoản DN", hint: "Thanh toán & thu chi hộ", to: "/doanh-nghiep" },
    { icon: Icons.banknote, label: "Vay & tài trợ vốn", hint: "Vốn lưu động linh hoạt", to: "/doanh-nghiep" },
    { icon: Icons.trendingUp, label: "Quản lý dòng tiền", hint: "Thu hộ · chi hộ · payroll", to: "/doanh-nghiep" },
    { icon: Icons.globe2, label: "Tài trợ thương mại", hint: "XNK & chuyển tiền quốc tế", to: "/doanh-nghiep" },
    { icon: Icons.shieldCheck, label: "Bảo lãnh", hint: "Bảo lãnh & ký quỹ", to: "/doanh-nghiep" },
    { icon: Icons.smartphone, label: "DigiBiz", hint: "Ngân hàng số doanh nghiệp", to: "/ngan-hang-so" },
  ];
  return `
    <section class="section section--soft">
      <div class="container-app">
        <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            ${renderSectionLabel("02", 'Tác vụ nhanh — <span id="tasks-label">Cá nhân</span>')}
            <h2 class="mt-3 text-3xl font-semibold" style="letter-spacing:-0.02em">Bạn muốn làm gì hôm nay?</h2>
          </div>
          <a href="${href('/ca-nhan')}" id="tasks-see-all" class="flex items-center gap-1.5 text-[14.5px] font-semibold text-navy hover:underline">
            Xem tất cả dịch vụ ${Icons.chevronRight}
          </a>
        </div>
        <div class="tasks-grid" id="tasks-grid">
          ${personal.map((t) => taskCell(t)).join("")}
        </div>
      </div>
    </section>
  `;
}

function taskCell({ icon, label, hint, to }) {
  return `
    <a href="${href(to)}" class="task-cell">
      <span class="task-cell__icon">${icon}</span>
      <div>
        <div class="task-cell__label">${label}</div>
        <div class="task-cell__hint">${hint}</div>
      </div>
    </a>
  `;
}

const PERSONAL_NEEDS = [
  { tag: "Tài khoản", title: "Tôi muốn mở tài khoản", body: "Tài khoản thanh toán cho chi tiêu hằng ngày, mở online và dùng ngay.", cues: ["Mở online eKYC", "Miễn phí duy trì", "Kết nối Digital Plus"], to: "/ca-nhan" },
  { tag: "Tiết kiệm", title: "Tôi muốn gửi tiết kiệm", body: "Tiết kiệm trực tuyến, kỳ hạn linh hoạt, minh bạch lãi suất.", cues: ["Gửi từ Digital Plus", "Kỳ hạn 1–24 tháng", "Tất toán trước hạn"], to: "/ca-nhan" },
  { tag: "Vay", title: "Tôi cần vay", body: "Vay mua nhà, mua xe, tiêu dùng — biết trước điều kiện và chi phí.", cues: ["Lãi suất minh bạch", "Hồ sơ rõ ràng", "Ước tính khoản trả"], to: "/ca-nhan" },
  { tag: "Thẻ", title: "Tôi muốn mở thẻ", body: "So sánh thẻ theo hoàn tiền, tích điểm và hạn mức phù hợp.", cues: ["Hoàn tiền / tích điểm", "Mở online", "Quản lý trên app"], to: "/the" },
];

const BIZ_NEEDS = [
  { tag: "Vốn", title: "Tôi cần vốn kinh doanh", body: "Vốn lưu động, thấu chi và tài trợ theo chuỗi cung ứng cho SME.", cues: ["Vốn lưu động", "Hạn mức thấu chi", "Tài trợ chuỗi"], to: "/doanh-nghiep" },
  { tag: "Dòng tiền", title: "Tôi muốn quản lý dòng tiền", body: "Thu hộ, chi hộ, trả lương và đối soát tập trung trên DigiBiz.", cues: ["Chi lương hàng loạt", "Thu / chi hộ", "Đối soát tập trung"], to: "/doanh-nghiep" },
  { tag: "Quốc tế", title: "Tôi xuất nhập khẩu", body: "L/C, nhờ thu và chuyển tiền quốc tế với tỷ giá cạnh tranh.", cues: ["L/C & nhờ thu", "Tỷ giá cạnh tranh", "Theo dõi trực tuyến"], to: "/doanh-nghiep" },
  { tag: "Bảo lãnh", title: "Tôi cần bảo lãnh", body: "Bảo lãnh dự thầu, thực hiện hợp đồng và tạm ứng, phát hành nhanh.", cues: ["Phát hành nhanh", "Nhiều loại bảo lãnh", "Theo dõi online"], to: "/doanh-nghiep" },
];

function renderNeeds() {
  return `
    <section class="section">
      <div class="container-app">
        ${renderSectionLabel("03", "Khám phá theo nhu cầu")}
        <h2 class="mt-3 max-w-2xl font-semibold" style="font-size:clamp(1.8rem,3.5vw,2.6rem);line-height:1.15;letter-spacing:-0.02em">Không cần biết thuật ngữ ngân hàng — hãy bắt đầu từ điều bạn cần.</h2>
        <div class="needs-grid" id="needs-grid">
          ${PERSONAL_NEEDS.map((n, i) => needCard(n, i)).join("")}
        </div>
        <p class="mt-6 flex items-center gap-2 text-[13px] text-ink-soft">
          ${Icons.shieldCheck} Mỗi sản phẩm nêu rõ điều kiện, hồ sơ, lãi suất và biểu phí trước khi bạn đăng ký — minh bạch là quyền của bạn.
        </p>
      </div>
    </section>
  `;
}

function needCard(n, i) {
  return `
    <article class="need-card">
      <div>
        <div class="need-card__tag">
          <span class="need-card__tag-pill">${n.tag}</span>
          <span class="need-card__tag-num tnum">0${i + 1}</span>
        </div>
        <h3>${n.title}</h3>
        <p class="need-card__body">${n.body}</p>
        <ul class="need-card__cues">
          ${n.cues.map((c) => `<li>${Icons.check} ${c}</li>`).join("")}
        </ul>
      </div>
      <div class="need-card__actions">
        <a href="${href(n.to)}" class="flex items-center gap-1.5 text-navy hover:underline">Xem sản phẩm ${Icons.arrowRight}</a>
        <a href="${href(n.to)}" class="flex items-center gap-1.5 text-ink-soft hover:text-navy">So sánh lựa chọn</a>
      </div>
    </article>
  `;
}

function renderRatesSection() {
  return `
    <section class="section section--soft">
      <div class="container-app">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <div>
            ${renderSectionLabel("04", "Công cụ ngân hàng")}
            <h2 class="mt-3 text-3xl font-semibold" style="letter-spacing:-0.02em">Tỷ giá &amp; Lãi suất</h2>
          </div>
        </div>
        <div class="mt-6">
          ${RatesPanelHTML("fx")}
        </div>
      </div>
    </section>
  `;
}

function renderEcosystem() {
  return `
    <section class="section">
      <div class="container-app">
        ${renderSectionLabel("05", "Hệ sinh thái ngân hàng số")}
        <h2 class="mt-3 max-w-2xl font-semibold" style="font-size:clamp(1.8rem,3.5vw,2.6rem);line-height:1.15;letter-spacing:-0.02em">Đúng ngân hàng số cho đúng nhu cầu.</h2>
        <div class="ecosystem">
          <div class="ecosystem-card ecosystem-card--dark">
            <div>
              <div class="ecosystem-card__eyebrow">
                <span style="color:var(--color-yellow);font-size:16px">${Icons.smartphone}</span> Cá nhân
              </div>
              <h3>Vietbank Digital Plus</h3>
              <p>Ngân hàng số cho khách hàng cá nhân: chuyển tiền 24/7, mở tiết kiệm, thanh toán QR, quản lý chi tiêu và kiểm soát bảo mật ngay trên điện thoại.</p>
              <ul class="ecosystem-card__features">
                ${["Chuyển tiền miễn phí", "Mở tiết kiệm online", "Thanh toán QR", "Khoá thẻ tức thì"].map((f) => `<li><span class="dot"></span> ${f}</li>`).join("")}
              </ul>
            </div>
            <div class="ecosystem-card__actions">
              ${btnOnDark("Tải Digital Plus", "#", "sm")}
              <a href="${href('/ngan-hang-so')}" class="btn btn--on-dark-ghost btn--sm">Hướng dẫn sử dụng</a>
            </div>
          </div>
          <div class="ecosystem-card ecosystem-card--light">
            <div>
              <div class="ecosystem-card__eyebrow">
                <span style="color:var(--color-navy);font-size:16px">${Icons.building2}</span> Doanh nghiệp
              </div>
              <h3 style="color:var(--color-navy)">Vietbank DigiBiz</h3>
              <p>Ngân hàng số doanh nghiệp: kiểm soát dòng tiền, thu chi hộ, trả lương, phê duyệt nhiều cấp và đối soát — liền mạch giữa web và mobile.</p>
              <ul class="ecosystem-card__features">
                ${["Chi lương hàng loạt", "Thu hộ / chi hộ", "Phê duyệt đa cấp", "Báo cáo dòng tiền"].map((f) => `<li><span class="dot"></span> ${f}</li>`).join("")}
              </ul>
            </div>
            <div class="ecosystem-card__actions">
              ${btnPrimary("Tìm hiểu DigiBiz", "/ngan-hang-so", "sm")}
              <a href="${href('/ngan-hang-so')}" class="btn btn--secondary btn--sm">Đăng nhập DigiBiz</a>
            </div>
          </div>
        </div>
        <div class="ecosystem-notice">
          ${Icons.bellRing}
          <p style="line-height:1.6">Ứng dụng <span class="font-medium">Vietbank Digital</span> đã ngừng hoạt động từ 03/06/2026 và Internet Banking cá nhân dừng từ 18/05/2026. Khách hàng cá nhân vui lòng chuyển sang <span class="font-medium text-navy">Digital Plus</span> — kênh ngân hàng số chính thức. <a href="${href('/ngan-hang-so')}" class="font-semibold text-navy hover:underline">Xem hướng dẫn chuyển đổi</a>.</p>
        </div>
      </div>
    </section>
  `;
}

function renderTrust() {
  return `
    <section class="section section--soft" style="background:var(--color-surface)">
      <div class="container-app">
        <div class="trust-grid">
          <div>
            ${renderSectionLabel("06", "Niềm tin & An toàn")}
            <h2 class="mt-3 font-semibold" style="font-size:clamp(1.8rem,3.5vw,2.6rem);line-height:1.15;letter-spacing:-0.02em">An toàn giao dịch là ưu tiên hàng đầu.</h2>
            <p class="mt-4 max-w-md text-[15.5px]" style="line-height:1.6;color:var(--color-ink-soft)">Vietbank chỉ liên hệ qua các kênh chính thức. Chúng tôi không bao giờ yêu cầu bạn cung cấp mật khẩu, mã OTP hay thông tin đăng nhập qua điện thoại, tin nhắn hay email.</p>
            <div class="trust-actions">
              <a href="${href('/ho-tro')}#security" class="trust-action">
                <span class="trust-action__label">${Icons.shieldCheck} Trung tâm an toàn & phòng chống lừa đảo</span>
                ${Icons.chevronRight}
              </a>
              <a href="${HOTLINE_TEL}" class="trust-action">
                <span class="trust-action__label">${Icons.phone} Hotline chính thức ${HOTLINE}</span>
                ${Icons.chevronRight}
              </a>
            </div>
          </div>
          <div class="trust-card">
            ${[
              { icon: Icons.phone, title: `Một hotline duy nhất — ${HOTLINE}`, body: "Vietbank đã triển khai Voice Brandname; mọi cuộc gọi chính thức đều hiển thị tên thương hiệu. Đây là số hotline duy nhất, giúp bạn nhận diện và chống giả mạo." },
              { icon: Icons.shieldCheck, title: "Kênh chính thức", body: "Website vietbank.com.vn · ứng dụng Digital Plus / DigiBiz · Zalo OA và email chính thức. Vietbank không gửi link đăng nhập hay yêu cầu OTP qua tin nhắn." },
              { icon: Icons.lock, title: "Bảo vệ dữ liệu & tuân thủ", body: "Xác thực sinh trắc học và OTP động trên ứng dụng; chính sách bảo vệ dữ liệu cá nhân và tuân thủ AML/FATCA theo quy định hiện hành." },
            ].map(({ icon, title, body }) => `
              <div class="trust-card__row">
                <div class="icon-wrap">${icon}</div>
                <div>
                  <h3>${title}</h3>
                  <p>${body}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

const NEWS = [
  { tag: "Thông báo", date: "29/08/2026", title: "Nâng cấp hệ thống Digital Plus đêm 02/09 — một số dịch vụ tạm gián đoạn" },
  { tag: "Khuyến mãi", date: "24/08/2026", title: "Hoàn tiền tới 8% cho chủ thẻ tín dụng Vietbank trong quý III" },
  { tag: "Lãi suất", date: "20/08/2026", title: "Cập nhật biểu lãi suất tiết kiệm áp dụng từ ngày 20/08/2026" },
  { tag: "An toàn", date: "18/08/2026", title: "Nhận diện kênh chính thức và Voice Brandname của Vietbank" },
];

const FAQS = [
  { q: "Tôi mở tài khoản online cần những gì?", a: "Bạn cần CCCD gắn chip và một số điện thoại chính chủ. Quá trình định danh eKYC hoàn tất ngay trên Digital Plus, không cần đến quầy." },
  { q: "Digital Plus khác gì với Vietbank Digital cũ?", a: "Digital Plus là ứng dụng ngân hàng số chính thức hiện nay cho khách hàng cá nhân. Ứng dụng Vietbank Digital cũ đã ngừng hoạt động; khách hàng chuyển sang Digital Plus theo hướng dẫn." },
  { q: "Doanh nghiệp đăng ký DigiBiz như thế nào?", a: "Doanh nghiệp đăng ký trực tuyến hoặc tại chi nhánh. Đội ngũ tư vấn sẽ hỗ trợ thiết lập phân quyền phê duyệt và kết nối dịch vụ thu chi hộ." },
  { q: "Làm sao để biết tin nhắn có phải từ Vietbank?", a: `Vietbank không gửi đường link đăng nhập qua SMS/email và không yêu cầu OTP. Khi nghi ngờ, hãy gọi hotline ${HOTLINE} để xác thực.` },
];

function renderNewsFAQ() {
  return `
    <section class="section">
      <div class="container-app news-grid">
        <div>
          <div class="flex items-center justify-between gap-3">
            ${renderSectionLabel("07", "Tin tức & Thông báo")}
            <span class="static-tag">Nội dung minh hoạ</span>
          </div>
          <div class="news-list">
            ${NEWS.map(
              (n) => `
              <a href="${href('/ve-vietbank')}" class="news-row">
                <div class="news-row__date">
                  <span class="tag">${n.tag}</span>
                  <span class="date tnum">${n.date}</span>
                </div>
                <p class="news-row__title">${n.title}</p>
                <span class="news-row__arrow" style="font-size:16px">${Icons.arrowUpRight}</span>
              </a>
            `
            ).join("")}
          </div>
          <a href="${href('/ve-vietbank')}" class="news-see-all">Tất cả tin tức ${Icons.chevronRight}</a>
        </div>
        <div>
          ${renderSectionLabel("—", "Câu hỏi thường gặp")}
          <div class="faq" id="faq">
            ${FAQS.map(
              (item, i) => `
              <div class="faq__item ${i === 0 ? "open" : ""}" data-idx="${i}">
                <button class="faq__btn" type="button" aria-expanded="${i === 0}">
                  ${item.q}
                  <span class="chev" style="font-size:18px">${Icons.chevronDown}</span>
                </button>
                ${i === 0 ? `<p class="faq__body">${item.a}</p>` : ""}
              </div>
            `
            ).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderUtilityBand() {
  const items = [
    { icon: Icons.mapPin, title: "ATM & Điểm giao dịch", body: "Tìm điểm Vietbank gần bạn.", cta: "Mở bản đồ", to: "/ho-tro#network" },
    { icon: Icons.calculator, title: "Công cụ tính toán", body: "Lãi vay, lãi tiết kiệm và khoản trả góp.", cta: "Dùng công cụ", to: "/ho-tro" },
    { icon: Icons.receipt, title: "Biểu phí & Biểu mẫu", body: "Biểu phí dịch vụ và mẫu đơn cần thiết.", cta: "Xem tài liệu", to: "/ho-tro#docs" },
  ];
  return `
    <section class="section section--soft">
      <div class="container-app">
        <div class="utility-band">
          ${items
            .map(
              ({ icon, title, body, cta, to }) => `
            <a href="${href(to)}" class="utility-band__cell">
              <div class="utility-band__icon">${icon}</div>
              <div>
                <h3>${title}</h3>
                <p>${body}</p>
                <span class="cta">${cta} ${Icons.arrowRight}</span>
              </div>
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

/* ---------- Page: Ca Nhan ---------- */
function renderCaNhan() {
  const products = [
    { icon: Icons.wallet, title: "Tài khoản thanh toán", body: "Tài khoản dùng hằng ngày, mở online bằng eKYC và kết nối ngay Digital Plus.", cues: ["Miễn phí duy trì", "Số tài khoản đẹp", "Chuyển tiền 24/7"], to: "/ca-nhan" },
    { icon: Icons.piggyBank, title: "Tiết kiệm", body: "Gửi tiết kiệm trực tuyến với kỳ hạn linh hoạt và lãi suất minh bạch.", cues: ["Kỳ hạn 1–24 tháng", "Lãi suất tới 6.3%/năm", "Tất toán trước hạn"], to: "/ca-nhan" },
    { icon: Icons.creditCard, title: "Thẻ", body: "Thẻ tín dụng và thanh toán với ưu đãi hoàn tiền, tích điểm rõ ràng.", cues: ["Hoàn tiền / tích điểm", "Mở online", "Quản lý trên app"], to: "/the" },
    { icon: Icons.home, title: "Vay mua nhà", body: "Vay mua, xây, sửa nhà — biết trước điều kiện, hồ sơ và lãi suất.", cues: ["Thời hạn tới 25 năm", "Giải ngân linh hoạt", "Ước tính khoản trả"], to: "/ca-nhan" },
    { icon: Icons.car, title: "Vay mua ô tô", body: "Tài trợ mua xe mới và xe đã qua sử dụng, thủ tục nhanh gọn.", cues: ["Tỷ lệ vay cao", "Duyệt nhanh", "Trả góp đều"], to: "/ca-nhan" },
    { icon: Icons.landmark, title: "Vay tiêu dùng", body: "Đáp ứng nhu cầu chi tiêu cá nhân với lãi suất và biểu phí công khai.", cues: ["Hồ sơ đơn giản", "Hạn mức rõ ràng", "Minh bạch chi phí"], to: "/ca-nhan" },
  ];
  return `
    <main>
      ${PageHeader({
        eyebrow: "Khách hàng cá nhân",
        crumb: "Cá nhân",
        title: "Giải pháp tài chính cho từng giai đoạn cuộc sống",
        lead: "Tài khoản, tiết kiệm, thẻ và vay vốn — chọn theo điều bạn cần, hiểu rõ chi phí trước khi đăng ký và bắt đầu ngay trên Digital Plus.",
      })}
      <section class="section">
        <div class="container-app" style="display:grid;gap:2.5rem;align-items:center" class="grid lg:grid-cols-2 items-center gap-10">
          <div class="grid items-center gap-10" style="grid-template-columns:1fr">
            <div class="grid items-center gap-10 lg:grid-cols-2">
              <div>
                ${SectionHead({
                  n: "01",
                  eyebrow: "Sản phẩm nổi bật",
                  title: "Mở tài khoản & Digital Plus trong 5 phút",
                  lead: "Định danh eKYC bằng CCCD gắn chip, không cần đến quầy. Có tài khoản là dùng được ngay chuyển tiền, tiết kiệm và thanh toán QR.",
                })}
                <div class="mt-6 flex flex-wrap gap-3">
                  ${btnPrimary("Mở tài khoản online " + Icons.arrowRight, "/ngan-hang-so")}
                  ${btnSecondary("Đặt lịch tư vấn", "/ho-tro")}
                </div>
              </div>
              <div class="image-block" style="min-height:300px">
                <img src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=900&h=650&fit=crop&auto=format" alt="Khách hàng cá nhân mở tài khoản Vietbank trên điện thoại" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--soft">
        <div class="container-app">
          ${SectionHead({ n: "02", eyebrow: "Danh mục sản phẩm", title: "Chọn theo nhu cầu của bạn" })}
          <div class="feature-list mt-6">
            ${products.map((p) => `
              <a href="${href(p.to)}" class="feature-row">
                <div class="feature-row__icon">${p.icon}</div>
                <div style="flex:1">
                  <h3>${p.title}</h3>
                  <p class="feature-row__body">${p.body}</p>
                  <ul class="feature-row__cues">
                    ${p.cues.map((c) => `<li><span class="dot"></span> ${c}</li>`).join("")}
                  </ul>
                </div>
                <span class="feature-row__cta">Xem chi tiết ${Icons.arrowRight}</span>
              </a>
            `).join("")}
          </div>
        </div>
      </section>
      ${CTABand({
        title: "Không chắc nên bắt đầu từ đâu?",
        body: "Đội ngũ Vietbank sẽ giúp bạn chọn đúng sản phẩm theo mục tiêu tài chính — hoàn toàn miễn phí.",
        primary: { label: "Được tư vấn miễn phí", to: "/ho-tro" },
        secondary: { label: "Tải Digital Plus", to: "/ngan-hang-so" },
      })}
      <section class="section">
        <div class="container-app">
          <div class="ecosystem-notice">
            <span style="font-size:24px;color:var(--color-navy)">${Icons.smartphone}</span>
            <p style="line-height:1.6">Khách hàng cá nhân giao dịch trực tuyến qua <span class="font-semibold text-navy">Digital Plus</span>. Internet Banking cá nhân đã dừng từ 18/05/2026.</p>
          </div>
        </div>
      </section>
    </main>
  `;
}

/* ---------- Page: Doanh Nghiep ---------- */
function renderDoanhNghiep() {
  const solutions = [
    { icon: Icons.building2, title: "Tài khoản doanh nghiệp", body: "Tài khoản thanh toán, thu chi hộ và quản lý số dư tập trung cho doanh nghiệp mọi quy mô.", cues: ["Thu / chi hộ", "Nhiều tài khoản phụ", "Sao kê linh hoạt"], to: "/doanh-nghiep" },
    { icon: Icons.banknote, title: "Vay & tài trợ vốn", body: "Vốn lưu động, hạn mức thấu chi và tài trợ theo chuỗi cung ứng cho SME.", cues: ["Vốn lưu động", "Thấu chi", "Tài trợ chuỗi"], to: "/doanh-nghiep" },
    { icon: Icons.trendingUp, title: "Quản lý dòng tiền", body: "Chi lương, thu hộ, chi hộ và đối soát tự động, kiểm soát trực tuyến trên DigiBiz.", cues: ["Chi lương hàng loạt", "Phê duyệt đa cấp", "Đối soát tập trung"], to: "/ngan-hang-so" },
    { icon: Icons.globe2, title: "Tài trợ thương mại & XNK", body: "L/C, nhờ thu, tài trợ xuất nhập khẩu và chuyển tiền quốc tế với tỷ giá cạnh tranh.", cues: ["L/C & nhờ thu", "Tỷ giá cạnh tranh", "Chuyển tiền quốc tế"], to: "/doanh-nghiep" },
    { icon: Icons.shieldCheck, title: "Bảo lãnh", body: "Bảo lãnh dự thầu, thực hiện hợp đồng và tạm ứng — phát hành nhanh, theo dõi online.", cues: ["Nhiều loại bảo lãnh", "Phát hành nhanh", "Theo dõi trực tuyến"], to: "/doanh-nghiep" },
    { icon: Icons.receipt, title: "Thu ngân sách & hoá đơn", body: "Kết nối thu hộ hoá đơn, thuế và các khoản thu định kỳ theo mô hình vận hành của bạn.", cues: ["Thu hộ hoá đơn", "Kết nối ERP", "Báo cáo định kỳ"], to: "/doanh-nghiep" },
  ];
  return `
    <main>
      ${PageHeader({
        eyebrow: "Khách hàng doanh nghiệp",
        crumb: "Doanh nghiệp",
        title: "Đồng hành cùng doanh nghiệp trên từng dòng tiền",
        lead: "Từ vốn lưu động, quản lý dòng tiền đến tài trợ thương mại — Vietbank thiết kế giải pháp theo cách doanh nghiệp của bạn vận hành.",
      })}
      <section class="section section--soft">
        <div class="container-app">
          ${SectionHead({ n: "01", eyebrow: "Vì sao chọn Vietbank", title: "Giải pháp thực tế cho doanh nghiệp SME" })}
          <div class="stats-row mt-6">
            ${Stat({ value: "1 ngày", label: "Mở tài khoản doanh nghiệp trực tuyến, hồ sơ tối giản" })}
            ${Stat({ value: "Đa cấp", label: "Phê duyệt nhiều cấp và phân quyền theo vai trò trên DigiBiz" })}
            ${Stat({ value: "24/7", label: "Kiểm soát dòng tiền và giao dịch liền mạch web — mobile" })}
          </div>
          <p class="mt-3 text-[12.5px]" style="color:var(--color-ink-soft)">Thông tin minh hoạ cho mục đích thiết kế.</p>
        </div>
      </section>
      <section class="section">
        <div class="container-app">
          ${SectionHead({ n: "02", eyebrow: "Giải pháp theo nhu cầu", title: "Bạn đang cần giải quyết điều gì?" })}
          <div class="feature-list mt-6">
            ${solutions.map((s) => `
              <a href="${href(s.to)}" class="feature-row">
                <div class="feature-row__icon">${s.icon}</div>
                <div style="flex:1">
                  <h3>${s.title}</h3>
                  <p class="feature-row__body">${s.body}</p>
                  <ul class="feature-row__cues">
                    ${s.cues.map((c) => `<li><span class="dot"></span> ${c}</li>`).join("")}
                  </ul>
                </div>
                <span class="feature-row__cta">Xem giải pháp ${Icons.arrowRight}</span>
              </a>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section section--soft">
        <div class="container-app" style="display:grid;gap:2.5rem;align-items:center" class="grid items-center gap-10 lg:grid-cols-2">
          <div class="image-block" style="min-height:300px">
            <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=900&h=650&fit=crop&auto=format" alt="Chủ doanh nghiệp quản lý dòng tiền trên nền tảng DigiBiz" />
          </div>
          <div>
            ${SectionHead({ n: "03", eyebrow: "Ngân hàng số doanh nghiệp", title: "Vietbank DigiBiz — điều hành tài chính chủ động", lead: "Kiểm soát dòng tiền, thu chi hộ, trả lương và phê duyệt nhiều cấp trên một nền tảng, liền mạch giữa web và mobile." })}
            <div class="mt-6 flex flex-wrap gap-3">
              ${btnPrimary("Tìm hiểu DigiBiz " + Icons.arrowRight, "/ngan-hang-so")}
              ${btnSecondary("Liên hệ chuyên viên", "/ho-tro")}
            </div>
          </div>
        </div>
      </section>
      ${CTABand({ title: "Trao đổi cùng chuyên viên doanh nghiệp", body: "Nhận tư vấn giải pháp phù hợp với ngành và quy mô của bạn, kèm ước tính chi phí minh bạch.", primary: { label: "Đặt lịch tư vấn", to: "/ho-tro" }, secondary: { label: "Xem biểu phí", to: "/ho-tro#docs" } })}
    </main>
  `;
}

/* ---------- Page: Ngan Hang So ---------- */
function renderNganHangSo() {
  const plusFeatures = [
    { icon: Icons.send, title: "Chuyển tiền 24/7", body: "Chuyển nhanh Napas 24/7, miễn phí, kèm danh bạ và mẫu giao dịch." },
    { icon: Icons.piggyBank, title: "Tiết kiệm online", body: "Mở và tất toán sổ tiết kiệm ngay trên ứng dụng, lãi suất minh bạch." },
    { icon: Icons.qrCode, title: "Thanh toán QR", body: "Quét QR thanh toán và nạp dịch vụ tiện ích chỉ trong vài chạm." },
    { icon: Icons.lock, title: "Kiểm soát bảo mật", body: "Khoá thẻ tức thì, sinh trắc học và OTP động bảo vệ mọi giao dịch." },
  ];
  const bizFeatures = [
    { icon: Icons.send, title: "Chi lương hàng loạt", body: "Chi lương và thanh toán theo lô, có kiểm soát và đối soát rõ ràng." },
    { icon: Icons.trendingUp, title: "Báo cáo dòng tiền", body: "Theo dõi số dư, dòng tiền vào ra và trạng thái giao dịch theo thời gian thực." },
    { icon: Icons.building2, title: "Phê duyệt đa cấp", body: "Phân quyền theo vai trò và luồng phê duyệt nhiều cấp linh hoạt." },
    { icon: Icons.lock, title: "An toàn doanh nghiệp", body: "Kiểm soát thiết bị, hạn mức và nhật ký hoạt động theo người dùng." },
  ];
  return `
    <main>
      ${PageHeader({ eyebrow: "Ngân hàng số", crumb: "Ngân hàng số", title: "Hai nền tảng số, một trải nghiệm Vietbank", lead: "Digital Plus cho khách hàng cá nhân và DigiBiz cho doanh nghiệp — chọn đúng ứng dụng theo nhu cầu, không phải đoán." })}
      <section class="section">
        <div class="container-app" style="display:grid;gap:1.5rem;grid-template-columns:1fr">
          <div style="display:grid;gap:1.5rem" class="grid lg:grid-cols-2">
            <div class="ecosystem-card ecosystem-card--dark">
              <div>
                <div class="ecosystem-card__eyebrow">
                  <span style="color:var(--color-yellow);font-size:16px">${Icons.smartphone}</span> Cá nhân
                </div>
                <h3 style="font-size:1.875rem">Vietbank Digital Plus</h3>
                <p>Ngân hàng số chính thức cho khách hàng cá nhân, thay thế các ứng dụng cũ đã ngừng hoạt động.</p>
                <div style="margin-top:1.5rem;display:grid;gap:1rem;grid-template-columns:1fr 1fr" class="grid sm:grid-cols-2 gap-4">
                  ${plusFeatures.map(({ icon, title, body }) => `
                    <div>
                      <span style="color:var(--color-yellow);font-size:20px">${icon}</span>
                      <h3 style="font-size:15px;font-weight:600;margin:0.5rem 0 0">${title}</h3>
                      <p style="font-size:13.5px;color:rgba(255,255,255,0.7);line-height:1.6;margin:0.25rem 0 0">${body}</p>
                    </div>
                  `).join("")}
                </div>
              </div>
              <div class="ecosystem-card__actions">
                ${btnOnDark("Tải Digital Plus", "#", "sm")}
                ${btnOnDarkGhost("Hướng dẫn sử dụng", "#", "sm")}
              </div>
            </div>
            <div class="ecosystem-card ecosystem-card--light">
              <div>
                <div class="ecosystem-card__eyebrow">
                  <span style="color:var(--color-navy);font-size:16px">${Icons.building2}</span> Doanh nghiệp
                </div>
                <h3 style="font-size:1.875rem;color:var(--color-navy)">Vietbank DigiBiz</h3>
                <p>Nền tảng số điều hành tài chính doanh nghiệp, liền mạch giữa web và mobile.</p>
                <div style="margin-top:1.5rem;display:grid;gap:1rem;grid-template-columns:1fr 1fr" class="grid sm:grid-cols-2 gap-4">
                  ${bizFeatures.map(({ icon, title, body }) => `
                    <div>
                      <span style="color:var(--color-navy);font-size:20px">${icon}</span>
                      <h3 style="font-size:15px;font-weight:600;margin:0.5rem 0 0">${title}</h3>
                      <p style="font-size:13.5px;color:var(--color-ink-soft);line-height:1.6;margin:0.25rem 0 0">${body}</p>
                    </div>
                  `).join("")}
                </div>
              </div>
              <div class="ecosystem-card__actions">
                ${btnPrimary("Tìm hiểu DigiBiz", "/doanh-nghiep", "sm")}
                ${btnSecondary("Đăng nhập DigiBiz", "#", "sm")}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--soft">
        <div class="container-app">
          ${SectionHead({ n: "01", eyebrow: "Chuyển đổi ứng dụng", title: "Đang dùng ứng dụng cũ? Đây là điều cần biết", lead: "Vietbank đã hợp nhất về hai nền tảng số chính thức. Vui lòng chuyển sang đúng ứng dụng cho nhu cầu của bạn." })}
          <div class="migration-list">
            <div class="migration-item">
              <span class="icon" style="font-size:20px">${Icons.bellRing}</span>
              <p><span class="date tnum">18/05/2026</span> — Internet Banking dành cho khách hàng cá nhân dừng cung cấp — chuyển sang Digital Plus.</p>
            </div>
            <div class="migration-item">
              <span class="icon" style="font-size:20px">${Icons.bellRing}</span>
              <p><span class="date tnum">03/06/2026</span> — Ứng dụng Vietbank Digital cũ ngừng hoạt động — khách hàng cá nhân dùng Digital Plus.</p>
            </div>
          </div>
          <div class="mt-6">
            ${btnSecondary("Xem hướng dẫn chuyển đổi an toàn", "/ho-tro#security")}
          </div>
        </div>
      </section>
      ${CTABand({ title: "Bắt đầu với ngân hàng số Vietbank", body: "Tải Digital Plus cho nhu cầu cá nhân hoặc liên hệ để thiết lập DigiBiz cho doanh nghiệp của bạn.", primary: { label: "Tải Digital Plus", to: "/ngan-hang-so" }, secondary: { label: "Đăng ký DigiBiz", to: "/ho-tro" } })}
    </main>
  `;
}

/* ---------- Page: The ---------- */
function renderThe() {
  const cards = [
    { icon: Icons.gift, name: "Vietbank Cashback", tag: "Hoàn tiền", desc: "Hoàn tiền cho chi tiêu hằng ngày: ăn uống, siêu thị và hoá đơn.", points: ["Hoàn tiền tới 8%", "Miễn phí năm đầu", "Trả góp 0% tại đối tác"], featured: false },
    { icon: Icons.plane, name: "Vietbank Travel", tag: "Du lịch", desc: "Tích dặm và đặc quyền phòng chờ cho người thường xuyên di chuyển.", points: ["Tích dặm mọi chi tiêu", "Phòng chờ sân bay", "Bảo hiểm du lịch"], featured: true },
    { icon: Icons.creditCard, name: "Vietbank Classic", tag: "Cơ bản", desc: "Thẻ tín dụng khởi đầu với điều kiện đơn giản và phí thấp.", points: ["Điều kiện đơn giản", "Phí thường niên thấp", "Quản lý trên app"], featured: false },
  ];
  const benefits = [
    { icon: Icons.shieldCheck, title: "Bảo mật chủ động", body: "Khoá/mở thẻ tức thì và cảnh báo mọi giao dịch trên Digital Plus." },
    { icon: Icons.gift, title: "Ưu đãi đối tác", body: "Giảm giá và trả góp tại mạng lưới đối tác trên toàn quốc." },
    { icon: Icons.creditCard, title: "Quản lý trên app", body: "Theo dõi sao kê, dư nợ và thanh toán ngay trong ứng dụng." },
  ];
  return `
    <main>
      ${PageHeader({ eyebrow: "Thẻ Vietbank", crumb: "Thẻ", title: "Chọn thẻ theo cách bạn chi tiêu", lead: "So sánh thẻ theo hoàn tiền, tích dặm hay chi phí — mọi ưu đãi và biểu phí đều công khai trước khi bạn mở thẻ." })}
      <section class="section">
        <div class="container-app">
          ${SectionHead({ n: "01", eyebrow: "So sánh thẻ", title: "Ba lựa chọn cho ba phong cách chi tiêu" })}
          <div class="card-grid-3 mt-8">
            ${cards.map(({ icon, name, tag, desc, points, featured }) => `
              <div class="compare-card ${featured ? "compare-card--featured" : ""}">
                <div class="compare-card__top">
                  <div class="compare-card__icon">${icon}</div>
                  <span class="compare-card__tag">${tag}</span>
                </div>
                <h3>${name}</h3>
                <p class="compare-card__body">${desc}</p>
                <ul class="compare-card__list">
                  ${points.map((p) => `<li>${Icons.check} ${p}</li>`).join("")}
                </ul>
                <a href="${href('/ho-tro')}" class="btn ${featured ? "btn--on-dark" : "btn--primary"} btn--sm compare-card__cta">Mở thẻ ${name.replace("Vietbank ", "")}</a>
              </div>
            `).join("")}
          </div>
          <p class="mt-4 text-[12.5px]" style="color:var(--color-ink-soft)">Tên thẻ và ưu đãi là nội dung minh hoạ cho mục đích thiết kế.</p>
        </div>
      </section>
      <section class="section section--soft">
        <div class="container-app">
          ${SectionHead({ n: "02", eyebrow: "Quyền lợi chung", title: "An tâm với mọi thẻ Vietbank" })}
          <div class="card-grid-3 mt-6">
            ${benefits.map(({ icon, title, body }) => `
              <div class="value-card">
                <div class="value-card__icon">${icon}</div>
                <h3>${title}</h3>
                <p>${body}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      ${CTABand({ title: "Sẵn sàng mở thẻ?", body: "Đăng ký online và nhận tư vấn chọn thẻ phù hợp với nhu cầu chi tiêu của bạn.", primary: { label: "Đăng ký mở thẻ", to: "/ho-tro" }, secondary: { label: "Xem biểu phí thẻ", to: "/ho-tro#docs" } })}
    </main>
  `;
}

/* ---------- Page: Ho Tro ---------- */
function renderHoTro() {
  return `
    <main>
      ${PageHeader({ eyebrow: "Hỗ trợ khách hàng", crumb: "Hỗ trợ", title: "Chúng tôi luôn sẵn sàng hỗ trợ bạn", lead: "Tra cứu tỷ giá và lãi suất, tìm điểm giao dịch, tải biểu phí — hoặc liên hệ trực tiếp qua hotline và biểu mẫu bên dưới." })}
      <section class="section">
        <div class="container-app">
          ${SectionHead({ n: "01", eyebrow: "Kênh liên hệ", title: "Chọn cách liên hệ phù hợp" })}
          <div class="contact-grid mt-6">
            <a href="${HOTLINE_TEL}" class="contact-card">
              <div class="contact-card__icon">${Icons.phone}</div>
              <h3>Hotline ${HOTLINE}</h3>
              <p>Hỗ trợ 24/7, hiển thị Voice Brandname — số hotline duy nhất.</p>
              <span class="contact-card__cta">Gọi ngay</span>
            </a>
            <a href="mailto:cskh@vietbank.com.vn" class="contact-card">
              <div class="contact-card__icon">${Icons.mail}</div>
              <h3>Email hỗ trợ</h3>
              <p>Gửi yêu cầu chi tiết, phản hồi trong giờ làm việc.</p>
              <span class="contact-card__cta">Gửi email</span>
            </a>
            <a href="#" class="contact-card">
              <div class="contact-card__icon">${Icons.messageCircle}</div>
              <h3>Zalo OA chính thức</h3>
              <p>Nhắn tin với kênh chăm sóc khách hàng chính thức.</p>
              <span class="contact-card__cta">Mở Zalo OA</span>
            </a>
          </div>
        </div>
      </section>
      <section class="section section--soft" id="rates">
        <div class="container-app">
          ${SectionHead({ n: "02", eyebrow: "Công cụ ngân hàng", title: "Tỷ giá & Lãi suất" })}
          <div class="mt-6">${RatesPanelHTML("fx")}</div>
        </div>
      </section>
      <section class="section" id="network">
        <div class="container-app">
          ${SectionHead({ n: "03", eyebrow: "Mạng lưới", title: "ATM & Điểm giao dịch", lead: "Tìm chi nhánh, phòng giao dịch và ATM Vietbank gần bạn." })}
          <div class="grid gap-6 mt-6" style="grid-template-columns:1fr" class="grid lg:grid-cols-[1fr_1.2fr] gap-6 mt-6">
            <div class="branch-search">
              <label for="branch-search">Nhập tỉnh/thành hoặc quận</label>
              <div class="branch-search__row">
                <input id="branch-search" type="text" placeholder="Ví dụ: Quận 1, TP.HCM" />
                <button class="btn btn--primary btn--sm shrink-0" type="button">Tìm</button>
              </div>
              <p class="branch-search__hint">${Icons.mapPin} Kết quả bản đồ là minh hoạ cho mục đích thiết kế.</p>
            </div>
            <div class="map-placeholder">
              <span>${Icons.mapPin} Bản đồ điểm giao dịch (demo)</span>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--soft" id="docs">
        <div class="container-app">
          ${SectionHead({ n: "04", eyebrow: "Tài liệu", title: "Biểu phí & Biểu mẫu" })}
          <div class="doc-list">
            ${["Biểu phí dịch vụ khách hàng cá nhân", "Biểu phí dịch vụ khách hàng doanh nghiệp", "Biểu mẫu mở tài khoản & đăng ký dịch vụ", "Điều khoản và điều kiện sử dụng dịch vụ"].map((d) => `
              <a href="#">
                <span class="icon">${Icons.fileText}</span>
                <span class="label">${d}</span>
                <span class="download">Tải xuống</span>
              </a>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section" id="security">
        <div class="container-app">
          <div class="grid gap-8" style="grid-template-columns:1fr" class="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <div>
              ${SectionHead({ n: "05", eyebrow: "An toàn & phòng chống lừa đảo", title: "Nhận diện kênh chính thức của Vietbank", lead: "Vietbank không bao giờ yêu cầu mật khẩu, OTP hay thông tin đăng nhập qua điện thoại, tin nhắn hay email." })}
              <div class="mt-6">
                <a href="${HOTLINE_TEL}" class="btn btn--primary btn--lg">${Icons.phone} Gọi hotline ${HOTLINE}</a>
              </div>
            </div>
            <div class="trust-card">
              ${[
                { title: "Một hotline duy nhất", body: `Chỉ liên hệ Vietbank qua ${HOTLINE}. Cuộc gọi chính thức hiển thị Voice Brandname.` },
                { title: "Kênh chính thức", body: "vietbank.com.vn · Digital Plus / DigiBiz · Zalo OA và email chính thức." },
                { title: "Không chia sẻ OTP", body: "Tuyệt đối không cung cấp mật khẩu và OTP cho bất kỳ ai, kể cả người tự xưng nhân viên ngân hàng." },
              ].map(({ title, body }) => `
                <div class="trust-card__row">
                  <div class="icon-wrap">${Icons.shieldCheck}</div>
                  <div>
                    <h3>${title}</h3>
                    <p>${body}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>
      <section class="section section--soft" id="contact">
        <div class="container-app">
          <div class="grid gap-10" style="grid-template-columns:1fr" class="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            ${SectionHead({ n: "06", eyebrow: "Gửi yêu cầu", title: "Để lại thông tin, chúng tôi liên hệ lại", lead: "Điền biểu mẫu bên cạnh — chuyên viên Vietbank sẽ phản hồi trong giờ làm việc." })}
            <form class="form" id="contact-form">
              <div class="form__row">
                <div class="form__group">
                  <label for="name">Họ và tên <span class="req">*</span></label>
                  <input id="name" type="text" required placeholder="Nguyễn Văn A" />
                </div>
                <div class="form__group">
                  <label for="phone">Số điện thoại <span class="req">*</span></label>
                  <input id="phone" type="tel" required placeholder="09xx xxx xxx" />
                </div>
              </div>
              <div class="form__group mt-4">
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="ban@email.com" />
              </div>
              <div class="form__group mt-4">
                <label for="topic">Nội dung cần hỗ trợ</label>
                <select id="topic">
                  <option>Mở tài khoản / Digital Plus</option>
                  <option>Thẻ tín dụng</option>
                  <option>Vay vốn</option>
                  <option>Doanh nghiệp / DigiBiz</option>
                  <option>An toàn & bảo mật</option>
                </select>
              </div>
              <div class="form__group mt-4">
                <label for="msg">Lời nhắn</label>
                <textarea id="msg" rows="4" placeholder="Mô tả ngắn gọn nhu cầu của bạn"></textarea>
              </div>
              <div id="form-submit-area" class="form__submit">
                <button type="submit" class="btn btn--primary btn--lg">${Icons.send} Gửi yêu cầu</button>
              </div>
              <p class="form__terms">Bằng việc gửi, bạn đồng ý để Vietbank liên hệ tư vấn. Chúng tôi không yêu cầu OTP hay mật khẩu qua biểu mẫu này.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  `;
}

/* ---------- Page: Ve Vietbank ---------- */
function renderVeVietbank() {
  const values = [
    { icon: Icons.target, title: "Minh bạch", body: "Điều kiện, hồ sơ và biểu phí luôn rõ ràng trước khi khách hàng quyết định." },
    { icon: Icons.shieldCheck, title: "An toàn", body: "Bảo vệ khách hàng bằng công nghệ xác thực và các kênh liên hệ chính thức." },
    { icon: Icons.heartHandshake, title: "Đồng hành", body: "Lấy nhu cầu khách hàng làm trung tâm cho mọi sản phẩm và dịch vụ." },
  ];
  return `
    <main>
      ${PageHeader({ eyebrow: "Về Vietbank", crumb: "Về Vietbank", title: "Ngân hàng TMCP Việt Nam Thương Tín", lead: "Tăng trưởng — An toàn — Bền vững. Vietbank hướng tới trở thành ngân hàng bán lẻ uy tín hàng đầu, đồng hành cùng khách hàng cá nhân và doanh nghiệp trên hành trình tài chính." })}
      <section class="section">
        <div class="container-app grid gap-10 items-center" style="grid-template-columns:1fr" class="grid items-center gap-10 lg:grid-cols-2">
          <div>
            ${SectionHead({ n: "01", eyebrow: "Câu chuyện của chúng tôi", title: "Ngân hàng của sự minh bạch và tin cậy", lead: "Chúng tôi tin rằng dịch vụ tài chính tốt bắt đầu từ sự rõ ràng: điều kiện minh bạch, chi phí công khai và những kênh liên hệ chính thức mà khách hàng có thể tin tưởng." })}
            <p class="mt-4 text-[15px]" style="line-height:1.6;color:var(--color-ink-soft)">Từ mạng lưới chi nhánh đến nền tảng số Digital Plus và DigiBiz, Vietbank không ngừng đầu tư để mỗi giao dịch trở nên đơn giản, an toàn và phù hợp với nhu cầu thực tế của bạn.</p>
          </div>
          <div class="image-block" style="min-height:300px">
            <img src="https://images.unsplash.com/photo-1554469384-e58fbe9b7e9a?w=900&h=650&fit=crop&auto=format" alt="Không gian giao dịch hiện đại của Vietbank" />
          </div>
        </div>
      </section>
      <section class="section section--soft">
        <div class="container-app">
          ${SectionHead({ n: "02", eyebrow: "Giá trị cốt lõi", title: "Điều định hình cách chúng tôi phục vụ" })}
          <div class="card-grid-3 mt-6">
            ${values.map(({ icon, title, body }) => `
              <div class="value-card">
                <div class="value-card__icon">${icon}</div>
                <h3>${title}</h3>
                <p>${body}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container-app">
          ${SectionHead({ n: "03", eyebrow: "Vietbank hôm nay", title: "Một vài con số" })}
          <div class="stats-row mt-6">
            ${Stat({ value: "VBB", label: "Mã cổ phiếu niêm yết trên HOSE" })}
            ${Stat({ value: "2 nền tảng", label: "Digital Plus cho cá nhân · DigiBiz cho doanh nghiệp" })}
            ${Stat({ value: "24/7", label: "Hỗ trợ khách hàng qua hotline chính thức 1800 1122" })}
          </div>
          <p class="mt-3 text-[12.5px]" style="color:var(--color-ink-soft)">Số liệu trình bày mang tính minh hoạ cho mục đích thiết kế.</p>
        </div>
      </section>
      <section class="section section--soft">
        <div class="container-app">
          <div class="flex items-center justify-between gap-3">
            ${SectionHead({ n: "04", eyebrow: "Tin tức & Thông báo", title: "Cập nhật từ Vietbank" })}
            <span class="static-tag">Nội dung minh hoạ</span>
          </div>
          <div class="news-list mt-6">
            ${NEWS.map((n) => `
              <a href="#" class="news-row">
                <div class="news-row__date">
                  <span class="tag">${n.tag}</span>
                  <span class="date tnum">${n.date}</span>
                </div>
                <p class="news-row__title">${n.title}</p>
                <span class="news-row__arrow" style="font-size:16px">${Icons.arrowUpRight}</span>
              </a>
            `).join("")}
          </div>
          <div class="mt-6">
            <a href="${href('/nha-dau-tu')}" class="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-navy hover:underline">Thông tin dành cho nhà đầu tư ${Icons.chevronRight}</a>
          </div>
        </div>
      </section>
      ${CTABand({ title: "Muốn tìm hiểu thêm về Vietbank?", body: "Liên hệ với chúng tôi để được tư vấn sản phẩm, hoặc xem thông tin công bố dành cho nhà đầu tư.", primary: { label: "Liên hệ Vietbank", to: "/ho-tro" }, secondary: { label: "Quan hệ nhà đầu tư", to: "/nha-dau-tu" } })}
    </main>
  `;
}

/* ---------- Page: Nha Dau Tu ---------- */
function renderNhaDauTu() {
  return `
    <main>
      ${PageHeader({ eyebrow: "Quan hệ nhà đầu tư", crumb: "Nhà đầu tư", title: "Thông tin minh bạch cho cổ đông & nhà đầu tư", lead: "Cổ phiếu Vietbank (VBB) niêm yết trên HOSE. Trang này tập hợp công bố thông tin, báo cáo và đầu mối liên hệ dành cho nhà đầu tư." })}
      <section class="section">
        <div class="container-app">
          <div class="ir-header">
            ${SectionHead({ n: "01", eyebrow: "Cổ phiếu VBB", title: "Tổng quan nhanh" })}
            <span class="static-tag">STATIC · Minh hoạ</span>
          </div>
          <div class="stats-row mt-6">
            ${Stat({ value: "VBB", label: "Mã chứng khoán" })}
            ${Stat({ value: "HOSE", label: "Sàn niêm yết" })}
            ${Stat({ value: "15.200", label: "Giá tham chiếu (đ) — số liệu mẫu" })}
            ${Stat({ value: "+1,2%", label: "Thay đổi phiên — số liệu mẫu" })}
          </div>
          <p class="mt-3 text-[12.5px]" style="color:var(--color-ink-soft)">Số liệu trên là nội dung mẫu minh hoạ, không phải dữ liệu thị trường thật. Vui lòng tham chiếu công bố chính thức.</p>
        </div>
      </section>
      <section class="section section--soft">
        <div class="container-app">
          ${SectionHead({ n: "02", eyebrow: "Tài liệu công bố", title: "Báo cáo & Công bố thông tin" })}
          <div class="doc-list mt-6">
            ${[
              { t: "Báo cáo tài chính quý II/2026", d: "31/07/2026" },
              { t: "Báo cáo thường niên 2025", d: "20/04/2026" },
              { t: "Nghị quyết Đại hội đồng cổ đông thường niên 2026", d: "26/04/2026" },
              { t: "Công bố thông tin bất thường — thay đổi nhân sự", d: "12/03/2026" },
            ].map((r) => `
              <a href="#">
                <span class="icon">${Icons.fileText}</span>
                <span class="title">${r.t}</span>
                <span class="date">${r.d}</span>
                <span class="download">Tải PDF</span>
              </a>
            `).join("")}
          </div>
          <p class="mt-3 text-[12.5px]" style="color:var(--color-ink-soft)">Danh mục tài liệu là nội dung minh hoạ cho mục đích thiết kế.</p>
        </div>
      </section>
      <section class="section">
        <div class="container-app grid gap-6" style="grid-template-columns:1fr" class="grid lg:grid-cols-2 gap-6">
          <div class="governance-card">
            <span class="icon-wrap" style="display:grid;place-items:center;width:2.75rem;height:2.75rem;border-radius:0.5rem;background:var(--color-navy-050);color:var(--color-navy)">${Icons.landmark}</span>
            <h2>Quản trị công ty</h2>
            <p>Vietbank thực hiện công bố thông tin theo quy định pháp luật và chuẩn mực quản trị công ty đại chúng, bảo đảm quyền lợi cổ đông và tính minh bạch.</p>
            <ul>
              ${["Điều lệ & quy chế nội bộ", "Cơ cấu Hội đồng quản trị", "Lịch sự kiện cổ đông"].map((i) => `<li>${Icons.trendingUp} ${i}</li>`).join("")}
            </ul>
          </div>
          <div class="governance-card governance-card--dark">
            <div>
              <span style="display:grid;place-items:center;width:2.75rem;height:2.75rem;border-radius:0.5rem;background:rgba(255,255,255,0.15);color:var(--color-yellow)">${Icons.mail}</span>
              <h2>Đầu mối quan hệ nhà đầu tư</h2>
              <p>Mọi thắc mắc về cổ phiếu, công bố thông tin và sự kiện cổ đông, vui lòng liên hệ bộ phận IR.</p>
              <div class="contact-row">
                <div>Email: <span class="name">ir@vietbank.com.vn</span></div>
                <div>Hotline: <span class="name tnum">${HOTLINE}</span></div>
              </div>
            </div>
            <a href="mailto:ir@vietbank.com.vn" class="btn btn--on-dark btn--lg mt-6 w-fit">${Icons.mail} Gửi email cho IR</a>
          </div>
        </div>
      </section>
    </main>
  `;
}

/* ---------- Page: Not Found ---------- */
function renderNotFound() {
  return `
    <main>
      <section class="notfound">
        <div class="notfound__inner">
          <span class="notfound__num">404</span>
          <h1>Không tìm thấy trang bạn cần</h1>
          <p>Trang có thể đã được di chuyển hoặc không còn tồn tại. Bạn có thể quay về trang chủ hoặc liên hệ hỗ trợ.</p>
          <div class="notfound__cta">
            <a href="${href('/')}" class="btn btn--primary btn--lg">${Icons.home} Về trang chủ</a>
            <a href="${href('/ho-tro')}" class="btn btn--secondary btn--lg">${Icons.lifeBuoy} Liên hệ hỗ trợ</a>
          </div>
        </div>
      </section>
    </main>
  `;
}

/* ---------- Router ---------- */
const PAGES = {
  "/": renderHome,
  "/ca-nhan": renderCaNhan,
  "/doanh-nghiep": renderDoanhNghiep,
  "/ngan-hang-so": renderNganHangSo,
  "/the": renderThe,
  "/ho-tro": renderHoTro,
  "/ve-vietbank": renderVeVietbank,
  "/nha-dau-tu": renderNhaDauTu,
};

function currentRoute() {
  let hash = window.location.hash.replace(/^#/, "") || "/";
  // strip query strings and hash fragments from path
  return hash || "/";
}

function navigateTo(to) {
  window.location.hash = to;
}

function render() {
  const path = currentRoute();
  const basePath = path.split("?")[0];
  const renderer = PAGES[basePath] || renderNotFound;
  const root = document.getElementById("root");
  root.innerHTML = renderHeader(basePath) + renderer() + renderFooter();
  // Scroll behavior — handle in-page anchors
  const targetHash = path.includes("#") ? path.split("#")[1] : "";
  if (targetHash) {
    setTimeout(() => {
      const el = document.getElementById(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }, 30);
  } else {
    window.scrollTo(0, 0);
  }
  attachGlobalListeners();
  attachPageSpecificListeners();
}

/* ---------- Global listeners ---------- */
function attachGlobalListeners() {
  const toggle = document.getElementById("mobile-toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.onclick = () => {
      mobileMenuOpen = !mobileMenuOpen;
      menu.style.display = mobileMenuOpen ? "block" : "none";
      toggle.setAttribute("aria-expanded", String(mobileMenuOpen));
      toggle.innerHTML = mobileMenuOpen ? Icons.x : Icons.menu;
      toggle.setAttribute("aria-label", mobileMenuOpen ? "Đóng menu" : "Mở menu");
    };
  }
}

/* ---------- Home page interactivity ---------- */
function setHomeSegment(segment) {
  const isPersonal = segment === "ca-nhan";
  const tasks = [
    { icon: Icons.wallet, label: "Mở tài khoản", hint: "Trực tuyến trong 5 phút", to: "/ca-nhan" },
    { icon: Icons.piggyBank, label: "Gửi tiết kiệm", hint: "Lãi suất tới 6.3%/năm", to: "/ca-nhan" },
    { icon: Icons.creditCard, label: "Mở thẻ", hint: "Tín dụng & thanh toán", to: "/the" },
    { icon: Icons.landmark, label: "Vay vốn", hint: "Mua nhà · tiêu dùng · ô tô", to: "/ca-nhan" },
    { icon: Icons.send, label: "Chuyển tiền", hint: "24/7 qua Digital Plus", to: "/ngan-hang-so" },
    { icon: Icons.smartphone, label: "Digital Plus", hint: "Ngân hàng số cá nhân", to: "/ngan-hang-so" },
  ];
  const biz = [
    { icon: Icons.building2, label: "Tài khoản DN", hint: "Thanh toán & thu chi hộ", to: "/doanh-nghiep" },
    { icon: Icons.banknote, label: "Vay & tài trợ vốn", hint: "Vốn lưu động linh hoạt", to: "/doanh-nghiep" },
    { icon: Icons.trendingUp, label: "Quản lý dòng tiền", hint: "Thu hộ · chi hộ · payroll", to: "/doanh-nghiep" },
    { icon: Icons.globe2, label: "Tài trợ thương mại", hint: "XNK & chuyển tiền quốc tế", to: "/doanh-nghiep" },
    { icon: Icons.shieldCheck, label: "Bảo lãnh", hint: "Bảo lãnh & ký quỹ", to: "/doanh-nghiep" },
    { icon: Icons.smartphone, label: "DigiBiz", hint: "Ngân hàng số doanh nghiệp", to: "/ngan-hang-so" },
  ];
  const data = isPersonal ? tasks : biz;

  const tg = document.getElementById("segment-toggle");
  if (tg) {
    tg.querySelectorAll("button").forEach((b) => {
      b.classList.toggle("active", b.dataset.segment === segment);
    });
  }

  const heroCta = document.getElementById("hero-primary-cta");
  if (heroCta) {
    heroCta.setAttribute("href", "#" + (isPersonal ? "/ca-nhan" : "/doanh-nghiep"));
    heroCta.innerHTML = `Khám phá sản phẩm ${isPersonal ? "cá nhân" : "doanh nghiệp"} ${Icons.arrowRight}`;
  }

  const tasksGrid = document.getElementById("tasks-grid");
  if (tasksGrid) {
    tasksGrid.innerHTML = data.map((t) => taskCell(t)).join("");
  }
  const tasksLabel = document.getElementById("tasks-label");
  if (tasksLabel) tasksLabel.textContent = isPersonal ? "Cá nhân" : "Doanh nghiệp";
  const tasksSeeAll = document.getElementById("tasks-see-all");
  if (tasksSeeAll) tasksSeeAll.setAttribute("href", "#" + (isPersonal ? "/ca-nhan" : "/doanh-nghiep"));

  const needsGrid = document.getElementById("needs-grid");
  if (needsGrid) {
    needsGrid.innerHTML = (isPersonal ? PERSONAL_NEEDS : BIZ_NEEDS).map((n, i) => needCard(n, i)).join("");
  }
}

function attachPageSpecificListeners() {
  const seg = document.getElementById("segment-toggle");
  if (seg) {
    seg.querySelectorAll("button").forEach((b) => {
      b.onclick = () => setHomeSegment(b.dataset.segment);
    });
  }

  // FAQ accordion
  const faq = document.getElementById("faq");
  if (faq) {
    faq.querySelectorAll(".faq__btn").forEach((btn) => {
      btn.onclick = () => {
        const item = btn.closest(".faq__item");
        const wasOpen = item.classList.contains("open");
        // close all
        faq.querySelectorAll(".faq__item").forEach((it) => {
          it.classList.remove("open");
          it.querySelector(".faq__btn").setAttribute("aria-expanded", "false");
          const body = it.querySelector(".faq__body");
          if (body) body.remove();
        });
        if (!wasOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          const data = FAQS[parseInt(item.dataset.idx, 10)];
          const body = document.createElement("p");
          body.className = "faq__body";
          body.textContent = data.a;
          item.appendChild(body);
        }
      };
    });
  }

  // Rates tabs
  document.querySelectorAll(".rates-panel").forEach((panel) => {
    panel.querySelectorAll(".rates-panel__tab").forEach((tab) => {
      tab.onclick = () => {
        const val = tab.dataset.tab;
        panel.dataset.tab = val;
        panel.querySelectorAll(".rates-panel__tab").forEach((t) => {
          const active = t === tab;
          t.classList.toggle("active", active);
          t.setAttribute("aria-selected", String(active));
        });
        panel.querySelectorAll(".rates-table").forEach((tbl) => {
          tbl.style.display = tbl.dataset.table === val ? "block" : "none";
        });
      };
    });
  });

  // Contact form
  const form = document.getElementById("contact-form");
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const area = document.getElementById("form-submit-area");
      area.innerHTML = `<p class="form__notice">${Icons.shieldCheck} Đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm nhất. (Demo — chưa gửi dữ liệu thật.)</p>`;
    };
  }
}

/* ---------- Init ---------- */
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
