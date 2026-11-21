/* =====================================================================
   Ah Boon aircon servicing: website settings
   ---------------------------------------------------------------------
   The ONE file to edit for phone number, messages and prices.
   Change the text or numbers, save, refresh. Keep quotes and commas.
   ===================================================================== */

window.SITE = {
  // Shown on the page
  phoneDisplay: "8256 3821",

  // Country code + number, no spaces or "+". Used for WhatsApp and SMS.
  whatsappNumber: "6582563821",
  smsNumber: "6582563821",

  // Ready-made WhatsApp message, in each language
  messages: {
    en: "Hi Ah Boon, I'd like to make an appointment for aircon servicing.",
    zh: "你好 Ah Boon，我想预约冷气机服务。"
  },

  // Prices in dollars (numbers only)
  prices: {
    service1: 50,      // one-time servicing, 1 fan coil (nett)
    service2: 75,      // 2 fan coils
    service3: 100,     // 3 fan coils
    service4: 125,     // 4 fan coils
    chem9: 150,        // chemical cleaning (dismantled), 9,000 BTU
    chem13: 180,       // 13,000 BTU
    chem18: 220,       // 18,000 BTU
    troubleshoot: 50   // troubleshooting
  },

  address: "Block 335 Woodlands Street 32",
  mapQuery: "Block 335 Woodlands Street 32, Singapore",
  facebook: "https://web.facebook.com/airconsg8"
};
