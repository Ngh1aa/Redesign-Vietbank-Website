/*
 * Verified public Vietbank destinations used by the redesign.
 * Research date: 2026-08-31.
 *
 * Keep external system URLs centralized so banking handoffs can be audited
 * independently from presentation code. These are public destinations only;
 * no authentication/API assumptions are made here.
 */

export const OFFICIAL = {
  website: "https://www.vietbank.com.vn/",
  contact: "https://www.vietbank.com.vn/about-vietbank/contact",
  branches: "https://www.vietbank.com.vn/chi-nhanh",
  personalFx: "https://www.vietbank.com.vn/ca-nhan/ho-tro/ty-gia",
  personalRates: "https://www.vietbank.com.vn/ca-nhan/ho-tro/lai-suat",
  documents: "https://www.vietbank.com.vn/quy-dinh-va-bieu-mau/quy-dinh-chung",
  personalForms: "https://www.vietbank.com.vn/quy-dinh-va-bieu-mau/bieu-mau-khach-hang-ca-nhan",
  businessForms: "https://www.vietbank.com.vn/quy-dinh-va-bieu-mau/bieu-mau-khach-hang-to-chuc",
  businessRates: "https://www.vietbank.com.vn/doanh-nghiep/ho-tro/lai-suat",
  businessFees: "https://www.vietbank.com.vn/doanh-nghiep/ho-tro/bieu-phi",
  cards: "https://www.vietbank.com.vn/the/san-pham",
  cardFees: "https://www.vietbank.com.vn/the/ho-tro/bieu-phi",
  cardForms: "https://www.vietbank.com.vn/the/ho-tro/bieu-mau",
  cardPromotions: "https://www.vietbank.com.vn/the/uu-dai/chuong-trinh-khuyen-mai/",
  cardMyStyle: "https://www.vietbank.com.vn/the/san-pham/the-tin-dung-vietbank-my-style",
  cardHappy: "https://www.vietbank.com.vn/the/san-pham/the-mastercard-credit-happy",
  cardLifecare: "https://www.vietbank.com.vn/the/san-pham/the-mastercard-credit-lifecare",
  cardVisaLuxury: "https://www.vietbank.com.vn/the/san-pham/the-tin-dung-vietbank-luxury-platinum",
  cardNapasCredit: "https://www.vietbank.com.vn/the/san-pham/the-tin-dung-noi-dia-vietbank-napas",
  digitalPlus: "https://vbdigitalplus.vietbank.com.vn/",
  digitalPlusMigration:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-chuyen-doi-sang-vietbank-digital-plus-tu-01062026-32489",
  digitalPlusIOS: "https://apps.apple.com/us/app/vietbank-digital-plus/id6746633957",
  digitalPlusAndroid: "https://play.google.com/store/apps/details?hl=vi&id=com.vn.vietbankomni",
  digiBiz: "https://digibiz.vietbank.com.vn/",
  digiBizInfo: "https://www.vietbank.com.vn/doanh-nghiep/san-pham/ngan-hang-so-vietbank-digibiz",
  digitalBankingLegacyGateway: "https://online.vietbank.com.vn/",
  about: "https://www.vietbank.com.vn/ve-VietBank",
  visionValues:
    "https://www.vietbank.com.vn/ve-vietbank/gioi-thieu/tam-nhin-su-menh-gia-tri-cot-loi",
  news: "https://www.vietbank.com.vn/ve-vietbank/tin-tuc",
  investor: "https://www.vietbank.com.vn/nha-dau-tu",
  hoseListing:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/co-phieu-vietbank-chinh-thuc-niem-yet-tren-hose",
  agm2026:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-to-chuc-thanh-cong-dhdcd-thuong-nien-2026-thong-qua-nhieu-muc-tieu-tang-truong-quan-trong",
  voiceBrandname:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-trien-khai-dich-vu-cuoc-goi-hien-thi-thuong-hieu-vietbank-voice-brandname",
} as const

/*
 * First-party public product media. These are STATIC verified assets, not a
 * product API. Text and actions must remain usable if an image is unavailable.
 * Production brand lock should replace remote media with Vietbank-supplied,
 * licensed assets managed by the real CMS/CDN contract.
 */
export const OFFICIAL_MEDIA = {
  logo: "https://www.vietbank.com.vn/img/logo.png",
  cardMyStyle: "https://static.vietbank.com.vn/web/CardWebsite/product/my%20style/my-style2.png",
  cardHappy:
    "https://static.vietbank.com.vn/web/CardWebsite/product/MASTERCARD%20CREDIT%20HAPPY/Master-Card-Credit-Happy-%28Standard%29-3.jpg",
  cardLifecare:
    "https://static.vietbank.com.vn/web/CardWebsite/product/MASTERCARD%20CREDIT%20LIFECARE/Mastercard-Lifecare-Credit-3.jpg",
  cardVisaLuxury: "https://static.vietbank.com.vn/web/CardWebsite/product/Luxury/Platinum-Luxury2.png",
} as const

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noreferrer noopener",
} as const
