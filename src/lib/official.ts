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
  documents: "https://www.vietbank.com.vn/quy-dinh-va-bieu-mau/quy-dinh-chung",
  cards: "https://www.vietbank.com.vn/card",
  digitalPlus: "https://vbdigitalplus.vietbank.com.vn/",
  digitalPlusMigration:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-chuyen-doi-sang-vietbank-digital-plus-tu-01062026-32489",
  digitalPlusIOS: "https://apps.apple.com/us/app/vietbank-digital-plus/id6746633957",
  digitalPlusAndroid: "https://play.google.com/store/apps/details?hl=vi&id=com.vn.vietbankomni",
  digiBiz: "https://digibiz.vietbank.com.vn/",
  digiBizInfo: "https://www.vietbank.com.vn/doanh-nghiep/san-pham/ngan-hang-so-vietbank-digibiz",
  digitalBankingLegacyGateway: "https://online.vietbank.com.vn/",
  visionValues:
    "https://www.vietbank.com.vn/ve-vietbank/gioi-thieu/tam-nhin-su-menh-gia-tri-cot-loi",
  voiceBrandname:
    "https://www.vietbank.com.vn/ve-vietbank/tin-tuc/tin-vietbank/thong-bao-trien-khai-dich-vu-cuoc-goi-hien-thi-thuong-hieu-vietbank-voice-brandname",
} as const

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noreferrer noopener",
} as const
