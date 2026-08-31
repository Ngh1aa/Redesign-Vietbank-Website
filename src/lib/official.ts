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
  contact: "https://www.vietbank.com.vn/ve-vietbank/lien-he",
  branches: "https://www.vietbank.com.vn/chi-nhanh",
  personalFx: "https://www.vietbank.com.vn/ca-nhan/ho-tro/ty-gia",
  personalRates: "https://www.vietbank.com.vn/ca-nhan/ho-tro/lai-suat",
  personalCalculator: "https://www.vietbank.com.vn/ca-nhan/ho-tro/cong-cu-tinh-toan",
  businessCalculator: "https://www.vietbank.com.vn/doanh-nghiep/ho-tro/cong-cu-tinh-toan",
  invoiceLookupPersonal: "https://www.vietbank.com.vn/tracuuhoadon/ca-nhan",
  invoiceLookupBusiness: "https://www.vietbank.com.vn/tracuuhoadon/doanh-nghiep/thong-tin-khach-hang",
  transactionTrace: "https://www.vietbank.com.vn/tra-soat-giao-dich/thong-tin-khach-hang",
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
  digitalPlusLaunch:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/chinh-thuc-ra-mat-ung-dung-vietbank-digital-plus-32452",
  digitalPlusExperience:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-nang-tam-trai-nghiem-nguoi-dung-voi-nen-tang-ngan-hang-so-vietbank-digital-plus-32466",
  digitalPlusIOS: "https://apps.apple.com/us/app/vietbank-digital-plus/id6746633957",
  digitalPlusAndroid: "https://play.google.com/store/apps/details?hl=vi&id=com.vn.vietbankomni",
  digiBiz: "https://digibiz.vietbank.com.vn/",
  digiBizInfo: "https://www.vietbank.com.vn/doanh-nghiep/san-pham/ngan-hang-so-vietbank-digibiz",
  digiBizLaunch:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-chinh-thuc-ra-mat-nen-tang-so-danh-cho-doanh-nghiep",
  digitalBankingLegacyGateway: "https://online.vietbank.com.vn/",
  about: "https://www.vietbank.com.vn/ve-VietBank",
  visionValues:
    "https://www.vietbank.com.vn/ve-vietbank/gioi-thieu/tam-nhin-su-menh-gia-tri-cot-loi",
  development:
    "https://www.vietbank.com.vn/ve-vietbank/gioi-thieu/qua-trinh-phat-trien",
  news: "https://www.vietbank.com.vn/ve-vietbank/tin-tuc",
  branchLamDongStory:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-khai-truong-chi-nhanh-dau-tien-tai-lam-dong-mo-rong-mang-luoi-len-130-diem-giao-dich",
  investor: "https://www.vietbank.com.vn/nha-dau-tu",
  hoseListing:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/co-phieu-vietbank-chinh-thuc-niem-yet-tren-hose",
  agm2026:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/vietbank-to-chuc-thanh-cong-dhdcd-thuong-nien-2026-thong-qua-nhieu-muc-tieu-tang-truong-quan-trong",
  voiceBrandname:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-trien-khai-dich-vu-cuoc-goi-hien-thi-thuong-hieu-vietbank-voice-brandname",
} as const

/*
 * First-party public Vietbank media only. These are STATIC verified assets,
 * not generated imagery and not a product/content API. Lifestyle/model imagery
 * is rejected even when first-party unless it is clearly documentary coverage
 * of a real Vietbank place/event/team. Text and actions must remain usable if an
 * image is unavailable. Production handoff should replace hotlinks with
 * Vietbank-supplied licensed media managed by the real CMS/CDN.
 */
export const OFFICIAL_MEDIA = {
  logo: "https://www.vietbank.com.vn/img/logo.png",
  digitalPlusLaunch: "https://static.vietbank.com.vn/web/2024-CBTT/mobile_banking_2025-_800_x_600.png",
  digitalPlusEvent: "https://static.vietbank.com.vn/web/Vietbank-Digital-/kh-ca-nhan/2026/Vietbank-digital-plus/_O0A0132_web_ava.png",
  digiBizLaunch: "https://static.vietbank.com.vn/web/2024-CBTT/Ban_sao_cua_KELVINDOTEAM_094337.jpg",
  branchLamDongFacility: "https://static.vietbank.com.vn/web/2024-CBTT/Hinh_4.jpg",
  branchLamDongTeam: "https://static.vietbank.com.vn/web/2024-CBTT/Hinh_5.jpg",
  agm2026Scene: "https://static.vietbank.com.vn/web/Vietbank-Digital-/team_com/VBportal/2026/daihoidongcodong/INSIDE_1.png",
  agm2026Overview: "https://static.vietbank.com.vn/web/Vietbank-Digital-/team_com/VBportal/2026/daihoidongcodong/INSIDE_5.png",
  cardMyStyle: "https://static.vietbank.com.vn/web/CardWebsite/product/my%20style/my-style.png",
  cardHappy:
    "https://static.vietbank.com.vn/web/CardWebsite/product/MASTERCARD%20CREDIT%20HAPPY/Master-Card-Credit-Happy-%28Standard%29-1.png",
  cardLifecare:
    "https://static.vietbank.com.vn/web/CardWebsite/product/MASTERCARD%20CREDIT%20LIFECARE/Mastercard-Lifecare-Credit-1.png",
  cardVisaLuxury: "https://static.vietbank.com.vn/web/CardWebsite/product/Luxury/Platinum-Luxury.png",
} as const

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noreferrer noopener",
} as const
