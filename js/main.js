/* Ah Boon aircon servicing: page behaviour. Settings are in config.js. */
(() => {
  const S = window.SITE || {};
  const root = document.documentElement;
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  const applyContacts = () => {
    const lang = root.dataset.lang === 'zh' ? 'zh' : 'en';
    const msg = (S.messages && S.messages[lang]) || '';
    if (S.whatsappNumber) $$('[data-wa]').forEach(a => { a.href = `https://wa.me/${S.whatsappNumber}?text=${encodeURIComponent(msg)}`; });
  };

  if (S.smsNumber) $$('[data-sms]').forEach(a => { a.href = `sms:+${S.smsNumber}`; });
  if (S.phoneDisplay) $$('[data-phone-text]').forEach(el => { el.textContent = S.phoneDisplay; });
  if (S.prices) $$('[data-price]').forEach(el => { const v = S.prices[el.dataset.price]; if (v !== undefined) el.textContent = v; });
  if (S.address) $$('[data-address]').forEach(el => { el.textContent = S.address; });
  if (S.facebook) $$('[data-facebook]').forEach(a => { a.href = S.facebook; });
  if (S.mapQuery) $$('[data-map]').forEach(f => {
    const src = `https://www.google.com/maps?q=${encodeURIComponent(S.mapQuery)}&z=15&output=embed`;
    if (f.getAttribute('src') !== src) f.src = src;
  });

  /* EN / 中文 toggle */
  const setLang = (lang, save) => {
    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-Hans-SG' : 'en-SG';
    $$('[data-set-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.setLang === lang));
    if (save) { try { localStorage.setItem('lang', lang); } catch (e) {} }
    applyContacts();
  };
  $$('[data-set-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.setLang, true)));
  setLang(root.dataset.lang === 'zh' ? 'zh' : 'en', false);
})();
