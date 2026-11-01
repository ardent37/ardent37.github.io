/* ============================================================
   Cuentas e importación de spreadsheets
   - Acceso con correo y código de 6 dígitos (sin contraseñas); la sesión se recuerda en este navegador.
   - Importar una hoja de Google Sheets pública (solo lectura) y ver sus productos junto a los de la hoja original.
   Usa las funciones de app.js (t, parseProductLink, withRef, setImported, state, norm, parsePrice…).
   ============================================================ */
Object.assign(I18N.es, {
  account: 'Cuenta',
  mineHint: 'Ver solo los productos de mis hojas importadas',
  importTitle: 'Importar una spreadsheet',
  importShort: 'Importar Spreadsheet',
  loginTitle: 'Entra o crea tu cuenta',
  loginText: 'Te enviamos un código por correo. Sin contraseñas.',
  loginEmail: 'Tu correo electrónico',
  loginSend: 'Enviar código',
  loginMarketing: 'Quiero recibir novedades y ofertas por correo (opcional)',
  loginPrivacy: 'Usamos tu correo solo para tu cuenta. Puedes borrarla cuando quieras.',
  loginCodeTitle: 'Revisa tu correo',
  loginCodeText: 'Hemos enviado un código de 6 dígitos a {email}.',
  loginCode: 'Código de 6 dígitos',
  loginVerify: 'Entrar',
  loginResend: 'Reenviar código',
  loginBack: 'Cambiar de correo',
  loginDevCode: 'Modo local: no se envía ningún correo. Tu código es {code}.',
  errBadEmail: 'Ese correo no parece válido.',
  errWait: 'Espera unos segundos antes de pedir otro código.',
  errTooMany: 'Demasiados intentos. Inténtalo más tarde.',
  errBadCode: 'Código incorrecto.',
  errExpired: 'El código ha caducado. Pide uno nuevo.',
  errGeneric: 'Algo ha fallado. Inténtalo de nuevo.',
  errMail: 'No se pudo enviar el correo. Inténtalo más tarde.',
  errNetwork: 'No se puede conectar con el servidor ahora mismo. Algunas operadoras bloquean temporalmente el servicio durante los partidos de fútbol: prueba de nuevo más tarde o con una VPN.',
  accTitle: 'Tu cuenta',
  accNick: 'Tu apodo en hauls compartidos',
  accMarketing: 'Recibir novedades y ofertas por correo',
  accImports: 'Hojas importadas',
  accNoImports: 'Aún no has importado ninguna hoja.',
  accProducts: '{n} productos',
  accDeleteImport: 'Eliminar',
  accSignOut: 'Cerrar sesión',
  accDelete: 'Borrar mi cuenta y mis datos',
  accDeleteConfirm: '¿Seguro? Se borrarán tu cuenta y todas tus hojas importadas. No se puede deshacer.',
  accDeleteImportConfirm: '¿Eliminar esta hoja importada?',
  importModalTitle: 'Importar una spreadsheet',
  importIntro: 'Pega el enlace de una hoja de Google Sheets compartida como «cualquiera con el enlace puede ver». Solo se lee; nunca se modifica. Los productos son privados: solo los verás tú.',
  importUrlPh: 'https://docs.google.com/spreadsheets/d/…',
  importAnalyze: 'Analizar',
  importTabsTitle: 'Pestañas de la hoja',
  importTabsContinue: 'Continuar',
  importScanning: 'Buscando productos…',
  importName: 'Nombre de la hoja',
  importFound: 'Hemos encontrado {n} productos.',
  verifiedProducts: 'Productos verificados',
  sourceAll: 'Usar todas mis spreadsheets',
  sourceAllShort: 'Todas mis spreadsheets',
  confirmAgain: 'Pulsa otra vez para confirmar',
  importedProduct: 'Producto',
  importSaving: 'Guardando…',
  importFoundSkipped: '{n} enlaces no son compatibles y se omitirán.',
  importFoundKnown: '{n} ya están en la hoja original.',
  importStart: 'Importar',
  importProgress: 'Importando {done} de {total}…',
  importDone: 'Listo: {n} productos importados.',
  importUnavailable: '{n} no están disponibles en USFans y se han omitido.',
  importCancel: 'Cancelar',
  importClose: 'Cerrar',
  importCancelled: 'Importación detenida: se han guardado {n} productos.',
  importNone: 'No hemos encontrado enlaces de productos de Taobao, Weidian o 1688 en esa hoja.',
  importBlocked: 'No hemos podido leer los productos de esa hoja. Puede que su propietario haya desactivado la descarga y la copia para los lectores.',
  importPrivate: 'No se puede leer esa hoja. Tiene que estar compartida como «cualquiera con el enlace puede ver».',
  importNotFound: 'No encontramos esa hoja. Revisa el enlace.',
  importBadUrl: 'Pega un enlace de Google Sheets (docs.google.com/spreadsheets/…).',
  importTooBig: 'La hoja es demasiado grande.',
  importMax: 'Has llegado al máximo de hojas importadas. Elimina alguna desde tu cuenta.',
  importMaxProducts: 'Superarías el máximo de productos importados. Elimina alguna hoja desde tu cuenta.',
  importLimited: 'USFans está limitando las consultas. Esperando un momento…',
});
Object.assign(I18N.en, {
  account: 'Account',
  mineHint: 'Show only products from my imported sheets',
  importTitle: 'Import a spreadsheet',
  importShort: 'Import Spreadsheet',
  loginTitle: 'Sign in or create your account',
  loginText: 'We’ll email you a code. No passwords.',
  loginEmail: 'Your email address',
  loginSend: 'Send code',
  loginMarketing: 'I’d like to receive news and offers by email (optional)',
  loginPrivacy: 'We only use your email for your account. You can delete it anytime.',
  loginCodeTitle: 'Check your email',
  loginCodeText: 'We’ve sent a 6-digit code to {email}.',
  loginCode: '6-digit code',
  loginVerify: 'Sign in',
  loginResend: 'Resend code',
  loginBack: 'Use a different email',
  loginDevCode: 'Local mode: no email is sent. Your code is {code}.',
  errBadEmail: 'That email doesn’t look valid.',
  errWait: 'Wait a few seconds before asking for another code.',
  errTooMany: 'Too many attempts. Try again later.',
  errBadCode: 'Wrong code.',
  errExpired: 'The code has expired. Request a new one.',
  errGeneric: 'Something went wrong. Please try again.',
  errMail: 'The email couldn’t be sent. Try again later.',
  errNetwork: 'Can’t reach the server right now. Some ISPs temporarily block the service during football matches: try again later or use a VPN.',
  accTitle: 'Your account',
  accNick: 'Your nickname in shared hauls',
  accMarketing: 'Receive news and offers by email',
  accImports: 'Imported sheets',
  accNoImports: 'You haven’t imported any sheet yet.',
  accProducts: '{n} products',
  accDeleteImport: 'Delete',
  accSignOut: 'Sign out',
  accDelete: 'Delete my account and data',
  accDeleteConfirm: 'Are you sure? Your account and all imported sheets will be deleted. This can’t be undone.',
  accDeleteImportConfirm: 'Delete this imported sheet?',
  importModalTitle: 'Import a spreadsheet',
  importIntro: 'Paste the link of a Google Sheet shared as “anyone with the link can view”. It’s read-only and never modified. Imported products are private: only you will see them.',
  importUrlPh: 'https://docs.google.com/spreadsheets/d/…',
  importAnalyze: 'Analyze',
  importTabsTitle: 'Sheet tabs',
  importTabsContinue: 'Continue',
  importScanning: 'Looking for products…',
  importName: 'Sheet name',
  importFound: 'We found {n} products.',
  verifiedProducts: 'Verified products',
  sourceAll: 'Use all my spreadsheets',
  sourceAllShort: 'All my spreadsheets',
  confirmAgain: 'Tap again to confirm',
  importedProduct: 'Product',
  importSaving: 'Saving…',
  importFoundSkipped: '{n} links aren’t supported and will be skipped.',
  importFoundKnown: '{n} are already in the original sheet.',
  importStart: 'Import',
  importProgress: 'Importing {done} of {total}…',
  importDone: 'Done: {n} products imported.',
  importUnavailable: '{n} aren’t available on USFans and were skipped.',
  importCancel: 'Cancel',
  importClose: 'Close',
  importCancelled: 'Import stopped: {n} products were saved.',
  importNone: 'We couldn’t find Taobao, Weidian or 1688 product links in that sheet.',
  importBlocked: 'We couldn’t read the products in that sheet. Its owner may have turned off downloading and copying for viewers.',
  importPrivate: 'That sheet can’t be read. It must be shared as “anyone with the link can view”.',
  importNotFound: 'We couldn’t find that sheet. Check the link.',
  importBadUrl: 'Paste a Google Sheets link (docs.google.com/spreadsheets/…).',
  importTooBig: 'That sheet is too big.',
  importMax: 'You’ve reached the maximum number of imported sheets. Delete one from your account.',
  importMaxProducts: 'You’d exceed the maximum number of imported products. Delete a sheet from your account.',
  importLimited: 'USFans is limiting requests. Waiting a moment…',
});
Object.assign(I18N.pl, {
  account: 'Konto',
  mineHint: 'Pokaż tylko produkty z moich zaimportowanych arkuszy',
  importTitle: 'Zaimportuj spreadsheet',
  importShort: 'Importuj Spreadsheet',
  loginTitle: 'Zaloguj się lub załóż konto',
  loginText: 'Wyślemy Ci kod e-mailem. Bez haseł.',
  loginEmail: 'Twój adres e-mail',
  loginSend: 'Wyślij kod',
  loginMarketing: 'Chcę otrzymywać nowości i oferty e-mailem (opcjonalnie)',
  loginPrivacy: 'Używamy Twojego e-maila tylko do konta. Możesz go usunąć w każdej chwili.',
  loginCodeTitle: 'Sprawdź swoją skrzynkę',
  loginCodeText: 'Wysłaliśmy 6-cyfrowy kod na adres {email}.',
  loginCode: '6-cyfrowy kod',
  loginVerify: 'Zaloguj się',
  loginResend: 'Wyślij kod ponownie',
  loginBack: 'Użyj innego adresu e-mail',
  loginDevCode: 'Tryb lokalny: e-mail nie jest wysyłany. Twój kod to {code}.',
  errBadEmail: 'Ten adres e-mail wygląda na nieprawidłowy.',
  errWait: 'Poczekaj kilka sekund, zanim poprosisz o kolejny kod.',
  errTooMany: 'Zbyt wiele prób. Spróbuj później.',
  errBadCode: 'Nieprawidłowy kod.',
  errExpired: 'Kod wygasł. Poproś o nowy.',
  errGeneric: 'Coś poszło nie tak. Spróbuj ponownie.',
  errMail: 'Nie udało się wysłać e-maila. Spróbuj później.',
  errNetwork: 'Nie można teraz połączyć się z serwerem. Niektórzy operatorzy w Hiszpanii czasowo blokują usługę podczas meczów piłkarskich: spróbuj później lub użyj VPN.',
  accTitle: 'Twoje konto',
  accNick: 'Twój pseudonim we wspólnych haulach',
  accMarketing: 'Otrzymuj nowości i oferty e-mailem',
  accImports: 'Zaimportowane arkusze',
  accNoImports: 'Nie zaimportowano jeszcze żadnego arkusza.',
  accProducts: '{n} produktów',
  accDeleteImport: 'Usuń',
  accSignOut: 'Wyloguj się',
  accDelete: 'Usuń moje konto i dane',
  accDeleteConfirm: 'Na pewno? Twoje konto i wszystkie zaimportowane arkusze zostaną usunięte. Tej operacji nie można cofnąć.',
  accDeleteImportConfirm: 'Usunąć ten zaimportowany arkusz?',
  importModalTitle: 'Zaimportuj spreadsheet',
  importIntro: 'Wklej link do arkusza Google udostępnionego jako „każdy, kto ma link, może wyświetlać”. Jest tylko do odczytu i nigdy nie jest modyfikowany. Zaimportowane produkty są prywatne: widzisz je tylko Ty.',
  importUrlPh: 'https://docs.google.com/spreadsheets/d/…',
  importAnalyze: 'Analizuj',
  importTabsTitle: 'Karty arkusza',
  importTabsContinue: 'Dalej',
  importScanning: 'Szukam produktów…',
  importName: 'Nazwa arkusza',
  importFound: 'Znaleźliśmy {n} produktów.',
  verifiedProducts: 'Zweryfikowane produkty',
  sourceAll: 'Użyj wszystkich moich spreadsheetów',
  sourceAllShort: 'Wszystkie moje spreadsheety',
  confirmAgain: 'Dotknij ponownie, aby potwierdzić',
  importedProduct: 'Produkt',
  importSaving: 'Zapisywanie…',
  importFoundSkipped: '{n} linków nie jest obsługiwanych i zostanie pominiętych.',
  importFoundKnown: '{n} jest już w oryginalnym arkuszu.',
  importStart: 'Importuj',
  importProgress: 'Importowanie {done} z {total}…',
  importDone: 'Gotowe: zaimportowano {n} produktów.',
  importUnavailable: '{n} jest niedostępnych w USFans i zostało pominiętych.',
  importCancel: 'Anuluj',
  importClose: 'Zamknij',
  importCancelled: 'Import zatrzymany: zapisano {n} produktów.',
  importNone: 'Nie znaleźliśmy w tym arkuszu linków do produktów z Taobao, Weidian ani 1688.',
  importBlocked: 'Nie udało się odczytać produktów z tego arkusza. Jego właściciel mógł wyłączyć pobieranie i kopiowanie dla osób przeglądających.',
  importPrivate: 'Tego arkusza nie da się odczytać. Musi być udostępniony jako „każdy, kto ma link, może wyświetlać”.',
  importNotFound: 'Nie znaleźliśmy tego arkusza. Sprawdź link.',
  importBadUrl: 'Wklej link do Arkuszy Google (docs.google.com/spreadsheets/…).',
  importTooBig: 'Ten arkusz jest za duży.',
  importMax: 'Osiągnięto maksymalną liczbę zaimportowanych arkuszy. Usuń jeden ze swojego konta.',
  importMaxProducts: 'Przekroczysz maksymalną liczbę zaimportowanych produktów. Usuń arkusz ze swojego konta.',
  importLimited: 'USFans ogranicza liczbę zapytań. Chwilę poczekaj…',
});

const Accounts = (() => {
  const API = CONFIG.accountApi;
  const TOKEN_KEY = 'accToken';
  let me = null;
  let token = null;
  let busy = false; // hay una importación en marcha

  const store = {
    get() { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } },
    set(v) { try { v ? localStorage.setItem(TOKEN_KEY, v) : localStorage.removeItem(TOKEN_KEY); } catch { /* sin almacenamiento */ } },
  };

  /* ---------- API ---------- */
  async function call(path, { method = 'GET', body, text = false } = {}) {
    // Si el servidor no responde (p. ej. bloqueos de operadoras a Cloudflare), el inicio de sesión no se queda colgado
    const ctl = new AbortController();
    const timer = path.startsWith('/auth/') ? setTimeout(() => ctl.abort(), 12000) : 0;
    let res;
    try {
      res = await fetch(API + path, {
        method,
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}) },
        body: body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body),
        signal: ctl.signal,
      });
    } catch {
      throw Object.assign(new Error('network'), { status: 0, code: 'network' });
    } finally {
      clearTimeout(timer);
    }
    if (!res.ok) {
      let error = 'server';
      try { error = (await res.json()).error || error; } catch { /* sin cuerpo */ }
      if (res.status === 401 && token) { token = null; store.set(null); me = null; paintAccount(); }
      throw Object.assign(new Error(error), { status: res.status, code: error });
    }
    return text ? res.text() : res.json();
  }

  /* ---------- Utilidades de interfaz ---------- */
  // Botón que pide una segunda pulsación para confirmar (sustituye a confirm(), que algunos navegadores bloquean)
  function twice(label, action, cls = 'btn ghost') {
    let armed = false;
    let timer = 0;
    const b = el('button', { class: cls, type: 'button', text: label });
    b.onclick = () => {
      if (!armed) {
        armed = true;
        b.textContent = t('confirmAgain');
        b.classList.add('danger');
        timer = setTimeout(() => { armed = false; b.textContent = label; b.classList.remove('danger'); }, 4000);
        return;
      }
      clearTimeout(timer);
      action();
    };
    return b;
  }

  function el(tag, props = {}, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) n.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach((c) => c != null && n.append(c));
    return n;
  }

  const modal = () => $('modal');
  let onClose = null;

  function openModal(...nodes) {
    $('modalCard').replaceChildren(...nodes.filter(Boolean));
    modal().hidden = false;
    document.body.classList.add('modal-open');
    $('modalCard').querySelector('input:not([type=checkbox])')?.focus();
  }

  function closeModal() {
    if (busy) return;
    modal().hidden = true;
    document.body.classList.remove('modal-open');
    $('modalCard').replaceChildren();
    const cb = onClose;
    onClose = null;
    cb?.();
  }

  const heading = (text, sub) => [el('h2', { class: 'modal-title', text }), sub ? el('p', { class: 'modal-sub', text: sub }) : null];
  const errBox = () => el('p', { class: 'modal-err', role: 'alert', hidden: true });
  const showErr = (box, msg) => { box.textContent = msg; box.hidden = !msg; };
  const closeBtn = () => el('button', { class: 'modal-x', type: 'button', 'aria-label': t('importClose'), onclick: closeModal, text: '×' });

  const authError = (e) => ({
    bad_email: t('errBadEmail'), wait: t('errWait'), too_many: t('errTooMany'), bad_code: t('errBadCode'),
    expired: t('errExpired'), mail_failed: t('errMail'), network: t('errNetwork'),
  }[e.code] || t('errGeneric'));

  /* ---------- Inicio de sesión ---------- */
  function loginModal(after) {
    onClose = null;
    const err = errBox();
    const email = el('input', { type: 'email', inputmode: 'email', autocomplete: 'email', placeholder: t('loginEmail'), 'aria-label': t('loginEmail'), required: true });
    const marketing = el('input', { type: 'checkbox' });
    const send = el('button', { class: 'btn modal-btn', type: 'submit', text: t('loginSend') });
    const form = el('form', { class: 'modal-form', novalidate: true },
      el('div', { class: 'field' }, email),
      el('label', { class: 'check' }, marketing, el('span', { text: t('loginMarketing') })),
      err, send,
      el('p', { class: 'modal-note', text: t('loginPrivacy') }));
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      showErr(err, '');
      send.disabled = true;
      try {
        const r = await call('/auth/request', { method: 'POST', body: { email: email.value, marketing: marketing.checked } });
        codeStep(email.value.trim().toLowerCase(), marketing.checked, r.devCode, after);
      } catch (ex) {
        showErr(err, authError(ex));
        send.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('loginTitle'), t('loginText')), form);
  }

  function codeStep(emailValue, marketingValue, devCode, after) {
    const err = errBox();
    const code = el('input', { type: 'text', inputmode: 'numeric', autocomplete: 'one-time-code', maxlength: '6', placeholder: t('loginCode'), 'aria-label': t('loginCode'), class: 'code-input' });
    const verify = el('button', { class: 'btn modal-btn', type: 'submit', text: t('loginVerify') });
    const resend = el('button', { class: 'btn ghost', type: 'button', text: t('loginResend') });
    const back = el('button', { class: 'btn ghost', type: 'button', text: t('loginBack'), onclick: () => loginModal(after) });
    const form = el('form', { class: 'modal-form', novalidate: true },
      el('div', { class: 'field' }, code),
      devCode ? el('p', { class: 'modal-note dev', text: t('loginDevCode', { code: devCode }) }) : null,
      err, verify, el('div', { class: 'modal-row' }, resend, back));
    resend.onclick = async () => {
      showErr(err, '');
      try {
        const r = await call('/auth/request', { method: 'POST', body: { email: emailValue, marketing: marketingValue } });
        codeStep(emailValue, marketingValue, r.devCode, after);
      } catch (ex) { showErr(err, authError(ex)); }
    };
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      showErr(err, '');
      verify.disabled = true;
      try {
        const r = await call('/auth/verify', { method: 'POST', body: { email: emailValue, code: code.value } });
        token = r.token;
        store.set(token);
        modal().hidden = true;
        document.body.classList.remove('modal-open');
        await refreshMe();
        after?.();
      } catch (ex) {
        showErr(err, authError(ex));
        verify.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('loginCodeTitle'), t('loginCodeText', { email: emailValue })), form);
  }

  /* ---------- Sesión y catálogo ---------- */
  /* ---------- Selector de origen de los productos ---------- */
  const VERIFIED = '<svg class="verified" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="4.6" y="4.6" width="14.8" height="14.8" rx="3.2" fill="#0095f6"/><rect x="4.6" y="4.6" width="14.8" height="14.8" rx="3.2" fill="#0095f6" transform="rotate(45 12 12)"/><path d="m8.4 12.3 2.5 2.5 4.8-5" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CHEV = '<svg class="chev" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const STACK = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 4 3.5 8.5 12 13l8.5-4.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/></svg>';
  const TICK = '<svg class="tick" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const sheets = () => (me ? me.imports.filter((i) => i.resolved) : []);

  // Pestañas de la hoja elegida (o de todas): son las "categorías" cuando se ven productos importados
  function tabNames(source) {
    const list = source === 'all' ? sheets() : sheets().filter((i) => i.id === source);
    const names = new Set();
    for (const imp of list) if ((imp.tabs || []).length > 1) imp.tabs.forEach((x) => names.add(x));
    return [...names];
  }

  let sourcePicked = false; // el usuario ya eligió a mano

  function pickSource(value) {
    sourcePicked = true;
    $('sourceMenu').hidden = true;
    $('sourceBtn').setAttribute('aria-expanded', 'false');
    if (state.source === value) return;
    state.source = value;
    state.category = '';
    state.tab = '';
    renderSource();
    renderChips();
    applyFilters();
  }

  function renderSource() {
    const btn = $('sourceBtn');
    const menu = $('sourceMenu');
    const list = sheets();
    if (state.source !== 'orig' && state.source !== 'all' && !list.some((i) => i.id === state.source)) state.source = 'orig';
    if (state.source === 'all' && !list.length) state.source = 'orig';
    const cur = list.find((i) => i.id === state.source);
    const label = state.source === 'orig' ? t('verifiedProducts') : state.source === 'all' ? t('sourceAllShort') : cur.name;
    btn.innerHTML = `${state.source === 'orig' ? VERIFIED : STACK}<span class="lbl"></span>${CHEV}`;
    btn.querySelector('.lbl').textContent = label;
    btn.classList.toggle('single', !list.length);
    btn.disabled = !list.length;
    const opt = (value, text, icon) => {
      const o = el('button', { class: 'source-opt', type: 'button', role: 'option', 'aria-selected': String(state.source === value), onclick: () => pickSource(value) });
      o.innerHTML = `${icon}<span class="lbl"></span>${TICK}`;
      o.querySelector('.lbl').textContent = text;
      return o;
    };
    menu.replaceChildren(
      opt('orig', t('verifiedProducts'), VERIFIED),
      ...list.map((i) => opt(i.id, i.name, STACK)),
      list.length ? el('div', { class: 'source-sep' }) : null,
      list.length ? opt('all', t('sourceAll'), STACK) : null,
    );
    menu.querySelectorAll('.source-sep').forEach((x) => x.setAttribute('role', 'separator'));
  }

  function paintAccount() {
    $('accountBtn').classList.toggle('on', !!me);
    renderSource();
    renderChips();
    window.Hauls?.onSession();
  }

  async function refreshMe() {
    try {
      me = await call('/me');
      token = me.token;
      store.set(token);
    } catch (e) {
      if (e.status === 401) me = null;
      paintAccount();
      return;
    }
    await loadCatalogs();
  }

  // Una foto y un nombre no cambian; el precio se vuelve a pedir si tiene más de una semana
  const PRICE_TTL = 7 * 24 * 3600 * 1000;
  const loadedImports = new Set(); // hojas cuyo catálogo se leyó entero (solo esas se pueden guardar de vuelta)

  const toProduct = (x, imp) => ({
    name: x.n || t('importedProduct'),
    unnamed: !x.n,
    done: !!(x.i && x.p && x.u && Date.now() - x.u < PRICE_TTL), // foto y precio recientes: no hace falta pedirlos
    updated: x.u || 0,
    link: x.l,
    priceRaw: x.p || '',
    image: x.i || '',
    categories: [],
    sections: [imp.name],
    imps: { [imp.id]: x.t || [] },
    price: parsePrice(x.p),
    _n: norm(`${x.n || ''} ${imp.name}`),
  });

  async function loadCatalogs() {
    const byLink = new Map();
    for (const imp of me.imports) {
      if (!imp.resolved) continue;
      try {
        const list = await call(`/imports/${imp.id}/catalog`);
        loadedImports.add(imp.id);
        for (const x of list) {
          if (!x.l) continue;
          const prev = byLink.get(x.l);
          if (prev) { prev.imps[imp.id] = x.t || []; continue; } // el mismo producto en varias hojas
          byLink.set(x.l, toProduct(x, imp));
        }
      } catch { /* esa hoja no se pudo cargar: se sigue con las demás */ }
    }
    setImported([...byLink.values()]);
    // Por defecto se ven todas mis spreadsheets (la verificada primero), hasta que se elija otra cosa
    if (!sourcePicked && byLink.size && state.source === 'orig') {
      state.source = 'all';
      state.category = '';
      state.tab = '';
      renderChips();
      applyFilters();
    }
    paintAccount();
  }

  function signOut() {
    token = null;
    me = null;
    store.set(null);
    sourcePicked = false;
    state.source = 'orig';
    state.category = '';
    state.tab = '';
    setImported([]);
    paintAccount();
    modal().hidden = true;
    document.body.classList.remove('modal-open');
  }

  /* ---------- Cuenta ---------- */
  function accountModal() {
    const err = errBox();
    const list = el('ul', { class: 'acc-list' });
    if (!me.imports.length) list.append(el('li', { class: 'acc-empty', text: t('accNoImports') }));
    for (const imp of me.imports) {
      list.append(el('li', {},
        el('span', { class: 'acc-name' }, el('b', { text: imp.name }), el('small', { text: t('accProducts', { n: (imp.resolved || 0).toLocaleString(locale()) }) })),
        twice(t('accDeleteImport'), async () => {
          try { await call(`/imports/${imp.id}`, { method: 'DELETE' }); await refreshMe(); accountModal(); } catch { showErr(err, t('errGeneric')); }
        })));
    }
    openModal(
      closeBtn(),
      ...heading(t('accTitle'), me.email),
      el('h3', { class: 'modal-h3', text: t('accImports') }), list, err,
      el('div', { class: 'modal-row spread' },
        el('button', { class: 'btn ghost', type: 'button', text: t('accSignOut'), onclick: signOut }),
        twice(t('accDelete'), async () => {
          try { await call('/me', { method: 'DELETE' }); signOut(); } catch { showErr(err, t('errGeneric')); }
        })));
  }

  /* ---------- Importar ---------- */
  const sheetErr = (e) => ({
    bad_url: t('importBadUrl'), blocked: t('importBlocked'), private: t('importPrivate'), not_found: t('importNotFound'), too_big: t('importTooBig'),
    max_imports: t('importMax'), max_products: t('importMaxProducts'), network: t('errNetwork'),
  }[e.code] || t('errGeneric'));

  const URL_RE = /https?:\/\/[^\s"'<>]+/g;

  // Nombre del producto: el texto descriptivo más cercano al enlace dentro de su fila.
  // A igual distancia se prefiere el de la izquierda: es lo más probable que sea el nombre de ese producto.
  const GENERIC = /^(comprar|buy|link|enlace|ver|click|clic|aqu[ií]|here|url|nota|note|foto|photo|imagen|image|item|producto|product)\b[\s\d.:#-]*$/i;

  function pickName(cells, ci) {
    const order = cells.map((_, j) => j).filter((j) => j !== ci)
      .sort((x, y) => Math.abs(x - ci) - Math.abs(y - ci) || x - y);
    const ok = (v) => {
      const x = String(v ?? '').trim();
      return x.length >= 5 && !/https?:\/\//i.test(x) && /\p{L}{2}/u.test(x) && !/^[\p{Sc}\d.,\s%]+$/u.test(x) && !GENERIC.test(x);
    };
    // Texto escrito junto al enlace en la misma celda
    const own = String(cells[ci]).replace(URL_RE, ' ').replace(/[()[\]:]/g, ' ').replace(/\s+/g, ' ').trim();
    if (ok(own)) return own.slice(0, 120);
    for (const j of order) if (ok(cells[j])) return String(cells[j]).trim().slice(0, 120);
    return '';
  }

  // Saca los productos de una fila o lista de textos sin importar cómo esté organizada la hoja
  function collect(cells, found, tabName) {
    cells.forEach((cell, ci) => {
      for (const u of String(cell).match(URL_RE) || []) {
        const r = parseProductLink(u);
        if (!r) continue;
        const key = `${r.platform}/${r.id}`;
        const name = pickName(cells, ci);
        const prev = found.get(key);
        if (prev) {
          if (!prev.name && name) prev.name = name;
          if (tabName) prev.tabs.add(tabName);
          continue;
        }
        found.set(key, { p: r.platform, id: r.id, ok: !r.encrypted || r.fromUsfans, name, tabs: new Set(tabName ? [tabName] : []) });
      }
    });
  }

  const sheetGet = (url, kind, gid) => call(`/sheet?kind=${kind}&url=${encodeURIComponent(url)}${gid ? `&gid=${gid}` : ''}`, { text: true });

  const unescapeJs = (v) => v.replace(/\\x([0-9a-f]{2})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\(.)/g, '$1');

  // Nombre de la hoja y de sus pestañas, a partir de la página de Google
  async function getTabs(url) {
    const html = await sheetGet(url, 'tabs');
    const tabs = [];
    let m;
    const re1 = /items\.push\(\{name:\s*"((?:[^"\\]|\\.)*)"[^}]*?gid:\s*"(-?\d+)"/g;
    while ((m = re1.exec(html))) tabs.push({ gid: m[2], name: unescapeJs(m[1]).trim() || `Hoja ${m[2]}` });
    if (!tabs.length) {
      const re2 = /id="sheet-button-(\d+)"[^>]*>\s*<a[^>]*>([^<]*)<\/a>/g;
      while ((m = re2.exec(html))) tabs.push({ gid: m[1], name: new DOMParser().parseFromString(m[2], 'text/html').body.textContent.trim() || `Hoja ${m[1]}` });
    }
    if (!tabs.length) tabs.push({ gid: (url.match(/gid=(\d+)/) || [])[1] || '0', name: 'Hoja 1' });
    const rawTitle = (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || '';
    const title = new DOMParser().parseFromString(rawTitle, 'text/html').body.textContent.replace(/ - Google (Sheets|Hojas de cálculo|Drive)$/i, '').trim();
    return { title, tabs };
  }

  // Filas de la vista web de una pestaña: texto de cada celda + sus hipervínculos; las celdas combinadas se repiten
  function htmlRows(html, gid, pub) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const scope = (pub && doc.getElementById(gid)) || doc;
    const rows = [];
    const carry = [];
    const realLink = (href) => {
      const g = href.match(/^https?:\/\/(?:www\.)?google\.com\/url\?(?:[^#]*&)?q=([^&]+)/);
      if (g) { try { return decodeURIComponent(g[1]); } catch { return ''; } }
      return /^https?:\/\//.test(href) && !/google\.com|gstatic\.com/.test(href) ? href : '';
    };
    scope.querySelectorAll('table tr').forEach((tr) => {
      if (tr.closest('thead')) return;
      const row = [];
      let col = 0;
      const fill = () => { while (carry[col] && carry[col].left > 0) { row[col] = carry[col].text; carry[col].left--; col++; } };
      for (const td of tr.children) {
        if (td.tagName !== 'TD') continue;
        fill();
        const colspan = Math.min(Number(td.getAttribute('colspan')) || 1, 50);
        const rowspan = Math.min(Number(td.getAttribute('rowspan')) || 1, 200);
        const text = td.textContent.replace(/\s+/g, ' ').trim();
        const links = [...td.querySelectorAll('a[href]')].map((a) => realLink(a.getAttribute('href'))).filter((u) => u && !text.includes(u));
        const cell = [text, ...new Set(links)].filter(Boolean).join(' ');
        for (let k = 0; k < colspan; k++) {
          row[col] = k === 0 ? cell : '';
          if (rowspan > 1) carry[col] = { left: rowspan - 1, text: k === 0 ? cell : '' };
          col++;
        }
      }
      fill();
      if (row.some(Boolean)) rows.push(Array.from(row, (c) => c || ''));
    });
    return rows;
  }

  async function scanTabs(url, tabs) {
    const found = new Map();
    const pub = /\/spreadsheets\/d\/e\//.test(url);
    let pubHtml = null;
    let blocked = 0;
    for (const tab of tabs) {
      let any = false;
      // 1) CSV: lo más rápido (si el propietario no ha bloqueado la descarga)
      try {
        const csv = await sheetGet(url, 'csv', tab.gid);
        for (const row of Papa.parse(csv, { skipEmptyLines: true }).data) collect(row, found, tab.name);
        any = true;
      } catch (ex) {
        if (ex.code !== 'private') throw ex;
      }
      // 2) Vista web de la hoja: trae también los enlaces escondidos tras un texto y los nombres con enlace
      try {
        const html = pub ? (pubHtml ||= await sheetGet(url, 'rows', tab.gid)) : await sheetGet(url, 'rows', tab.gid);
        for (const row of htmlRows(html, tab.gid, pub)) collect(row, found, tab.name);
        any = true;
      } catch (ex) {
        if (ex.code !== 'private') throw ex;
      }
      if (!any) blocked++;
    }
    if (!found.size && blocked) throw Object.assign(new Error('blocked'), { code: 'blocked' });
    return found;
  }

  function importModal() {
    onClose = null;
    const err = errBox();
    const input = el('input', { type: 'url', inputmode: 'url', spellcheck: 'false', placeholder: t('importUrlPh'), 'aria-label': t('importUrlPh') });
    const go = el('button', { class: 'btn modal-btn', type: 'submit', text: t('importAnalyze') });
    const form = el('form', { class: 'modal-form', novalidate: true }, el('div', { class: 'field' }, input), err, go);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      showErr(err, '');
      go.disabled = true;
      try {
        const info = await getTabs(input.value.trim());
        if (info.tabs.length > 1) tabsStep(input.value.trim(), info);
        else scanStep(input.value.trim(), info, info.tabs);
      } catch (ex) {
        showErr(err, sheetErr(ex));
        go.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('importModalTitle'), t('importIntro')), form);
  }

  function tabsStep(url, info) {
    const boxes = info.tabs.map((tab) => {
      const cb = el('input', { type: 'checkbox' });
      cb.checked = true;
      return { tab, cb };
    });
    const next = el('button', { class: 'btn modal-btn', type: 'button', text: t('importTabsContinue') });
    next.onclick = () => {
      const chosen = boxes.filter((b) => b.cb.checked).map((b) => b.tab);
      if (chosen.length) scanStep(url, info, chosen);
    };
    openModal(closeBtn(), ...heading(t('importTabsTitle')),
      el('div', { class: 'modal-form' }, ...boxes.map((b) => el('label', { class: 'check' }, b.cb, el('span', { text: b.tab.name }))), next));
  }

  async function scanStep(url, info, tabs) {
    openModal(closeBtn(), ...heading(t('importScanning')), el('div', { class: 'modal-spin' }, el('span', { class: 'spinner' })));
    let found;
    try {
      found = await scanTabs(url, tabs);
    } catch (ex) {
      importModal();
      const box = $('modalCard').querySelector('.modal-err');
      showErr(box, sheetErr(ex));
      return;
    }
    const known = new Set(state.orig.map((p) => productKeyOf(p.link)));
    const all = [...found.values()];
    const todo = all.filter((x) => x.ok && !known.has(`${x.p}/${x.id}`));
    const skipped = all.filter((x) => !x.ok).length;
    const dup = all.filter((x) => x.ok && known.has(`${x.p}/${x.id}`)).length;
    if (!todo.length) {
      importModal();
      showErr($('modalCard').querySelector('.modal-err'), t('importNone'));
      return;
    }
    const name = el('input', { type: 'text', maxlength: '80', 'aria-label': t('importName') });
    name.value = (info.title || 'Spreadsheet').slice(0, 80);
    const start = el('button', { class: 'btn modal-btn', type: 'button', text: t('importStart') });
    start.onclick = () => runImport(url, name.value.trim() || 'Spreadsheet', todo, tabs.map((x) => x.name));
    openModal(closeBtn(), ...heading(t('importFound', { n: todo.length.toLocaleString(locale()) })),
      el('div', { class: 'modal-form' },
        skipped ? el('p', { class: 'modal-note', text: t('importFoundSkipped', { n: skipped }) }) : null,
        dup ? el('p', { class: 'modal-note', text: t('importFoundKnown', { n: dup }) }) : null,
        el('label', { class: 'modal-label', text: t('importName') }), el('div', { class: 'field' }, name),
        start));
  }

  async function runImport(url, name, items, tabNames) {
    const err = errBox();
    openModal(...heading(t('importSaving')), el('div', { class: 'modal-spin' }, el('span', { class: 'spinner' })), err);
    busy = true;
    try {
      const { id } = await call('/imports', { method: 'POST', body: { name, source: url, total: items.length, tabs: tabNames } });
      // Sin consultar a USFans: se guarda el enlace y el nombre de la hoja; la foto y el precio se piden al verlos
      const list = items.map((x) => ({ n: x.name, l: `https://usfans.com/product/${x.p}/${x.id}`, t: [...x.tabs] }));
      await call(`/imports/${id}/catalog?done=1&count=${list.length}`, { method: 'PUT', body: JSON.stringify(list) });
    } catch (ex) {
      busy = false;
      importModal();
      showErr($('modalCard').querySelector('.modal-err'), sheetErr(ex));
      return;
    }
    busy = false;
    await refreshMe();
    openModal(closeBtn(), ...heading(t('importDone', { n: items.length.toLocaleString(locale()) })),
      el('div', { class: 'modal-form' }, el('button', { class: 'btn modal-btn', type: 'button', text: t('importClose'), onclick: closeModal })));
  }

  /* ---------- Guardar lo cargado en la hoja de la cuenta ---------- */
  const dirty = new Set();   // productos con datos nuevos
  let saveTimer = 0;
  let lastSave = 0;
  const SAVE_EVERY = 90000;

  function markDirty(p) {
    dirty.add(p);
    if (saveTimer) return;
    const wait = Math.max(20000, SAVE_EVERY - (Date.now() - lastSave));
    saveTimer = setTimeout(saveCatalogs, wait);
  }

  async function saveCatalogs() {
    clearTimeout(saveTimer);
    saveTimer = 0;
    if (!dirty.size || !me) return;
    const ids = new Set();
    dirty.forEach((p) => Object.keys(p.imps || {}).forEach((id) => ids.add(id)));
    dirty.clear();
    lastSave = Date.now();
    for (const id of ids) {
      const imp = me.imports.find((i) => i.id === id);
      if (!imp || !loadedImports.has(id)) continue;
      const list = state.imp.filter((p) => p.imps[id]).map((p) => ({
        n: p.unnamed ? '' : p.name, l: p.link, t: p.imps[id], i: p.image || undefined, p: p.priceRaw || undefined, u: p.updated || undefined,
      }));
      if (list.length !== imp.resolved) continue; // el catálogo no coincide: mejor no tocarlo
      try {
        await call(`/imports/${id}/catalog?done=1&count=${list.length}`, { method: 'PUT', body: JSON.stringify(list) });
      } catch { /* se reintentará con los próximos datos */ }
    }
  }

  document.addEventListener('visibilitychange', () => { if (document.hidden && dirty.size) saveCatalogs(); });

  /* ---------- Fotos y precios a demanda ---------- */
  // Solo se piden los productos que aparecen en pantalla, pocos a la vez y con pausas; el servidor guarda en caché lo que ya conoce
  // Cada navegador consulta la API pública de USFans por su cuenta (USFans permite esta web), con pocas peticiones, pausas y una caché
  // de 24 h en este navegador. Los servidores de Cloudflare no sirven: USFans les responde con un control antirrobots.
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const GOODS_API = 'https://usfans.com/api/goods/info';
  const GOODS_TTL = 24 * 3600 * 1000;
  const GOODS_KEY = 'goodsCache';
  const GOODS_MAX_PER_VISIT = 400;
  let goodsMem = null;
  let goodsTimer = 0;
  let goodsCount = 0;

  function goodsLoad() {
    if (goodsMem) return goodsMem;
    try { goodsMem = new Map(JSON.parse(localStorage.getItem(GOODS_KEY) || '[]')); } catch { goodsMem = new Map(); }
    return goodsMem;
  }

  function goodsSave() {
    clearTimeout(goodsTimer);
    goodsTimer = setTimeout(() => {
      try {
        const rows = [...goodsLoad()].sort((a, b) => b[1].ts - a[1].ts).slice(0, 4000); // los más recientes
        localStorage.setItem(GOODS_KEY, JSON.stringify(rows));
      } catch { /* sin almacenamiento */ }
    }, 1500);
  }

  async function fetchGoodsDirect(platform, id) {
    try {
      const r = await fetch(`${GOODS_API}?channel=${platform}&goodsId=${encodeURIComponent(id)}&refresh=false&queryDelivery=false&activityId=`, { headers: { currency: 'EUR' } });
      if (!r.ok) return { status: 'limited' };
      const j = await r.json();
      // Cualquier código distinto de 200 (p. ej. el control antirrobots) no significa que el producto no exista
      if (!j || j.code !== 200) return { status: 'limited' };
      const d = j.data;
      if (!d) return { status: 'empty' };
      const prices = (d.skuList || []).filter((x) => Number(x.stock) > 0)
        .map((x) => Number(x.convertedDiscountPrice || x.convertedPrice)).filter((x) => x > 0);
      if (!prices.length && Number(d.convertedPrice) > 0 && Number(d.stock) > 0) prices.push(Number(d.convertedPrice));
      if (!prices.length) return { status: 'gone' }; // existe pero sin stock
      return {
        status: 'ok',
        n: String(d.titleEn || d.title || '').trim(),
        i: Array.isArray(d.images) && d.images[0] ? String(d.images[0]) : '',
        p: `${Math.min(...prices).toFixed(2).replace('.', ',')} €`,
      };
    } catch {
      return { status: 'error' };
    }
  }

  // Devuelve, para cada producto, su estado (de la caché o consultando a USFans con una pausa entre peticiones)
  async function resolveDirect(list) {
    const cache = goodsLoad();
    const items = [];
    let limited = false;
    let network = 0;
    for (const r of list) {
      const k = `${r.platform}/${r.id}`;
      const hit = cache.get(k);
      if (hit && Date.now() - hit.ts < GOODS_TTL) { items.push({ k, ...hit.v }); continue; }
      if (limited || goodsCount >= GOODS_MAX_PER_VISIT) { items.push({ k, status: 'pending' }); continue; }
      goodsCount++;
      network++;
      const v = await fetchGoodsDirect(r.platform, r.id);
      if (v.status === 'limited') limited = true;
      if (v.status === 'ok' || v.status === 'gone') { cache.set(k, { ts: Date.now(), v }); goodsSave(); }
      items.push({ k, ...v, status: v.status === 'limited' || v.status === 'error' ? 'pending' : v.status });
      await sleep(600);
    }
    return { items, limited, network, capped: goodsCount >= GOODS_MAX_PER_VISIT };
  }

  // Consulta puntual de un producto (para los enlaces escritos en los buscadores)
  async function lookup(r) {
    const res = await resolveDirect([r]);
    return res.items[0];
  }

  const watching = new Map(); // tarjeta → producto
  const lazy = { queue: new Set(), timer: 0, backoff: 0, tries: new Map() };
  const seenIo = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!watching.has(e.target)) continue;
      if (e.isIntersecting) lazy.queue.add(e.target);
      else lazy.queue.delete(e.target);
    }
    pump(0);
  }, { rootMargin: '600px 0px' }); // se adelanta lo que está justo debajo; lo visible tiene prioridad (ver pump)

  function watch(card, p) {
    if (!API || p.done) return;
    watching.set(card, p);
    seenIo.observe(card);
  }

  function pump(delay) {
    if (lazy.timer || !lazy.queue.size) return;
    lazy.timer = setTimeout(async () => {
      lazy.timer = 0;
      lazy.queue.forEach((c) => { if (!c.isConnected) { lazy.queue.delete(c); watching.delete(c); } });
      // Prioridad: lo que se ve, de arriba abajo; primero lo que no tiene foto, después lo que solo hay que refrescar
      const H = window.innerHeight;
      const rank = (c) => {
        const r = c.getBoundingClientRect();
        const visible = r.bottom > 0 && r.top < H;
        return (visible ? 0 : 1e6) + Math.abs(r.top) + (watching.get(c).image ? 5e5 : 0);
      };
      const sorted = [...lazy.queue].sort((a, b) => rank(a) - rank(b));
      // Lo que ya está en la caché de este navegador se pinta de golpe; a la red van pocos cada vez
      const cache = goodsLoad();
      const isCached = (c) => {
        const r = parseProductLink(watching.get(c).link);
        const hit = r && cache.get(`${r.platform}/${r.id}`);
        return !!hit && Date.now() - hit.ts < GOODS_TTL;
      };
      const cards = [...sorted.filter(isCached).slice(0, 30), ...sorted.filter((c) => !isCached(c)).slice(0, 3)];
      if (!cards.length || !me) return;
      const batch = cards.map((c) => ({ c, p: watching.get(c), r: parseProductLink(watching.get(c).link) })).filter((x) => x.r);
      let res;
      try {
        res = await resolveDirect(batch.map((x) => x.r));
      } catch {
        lazy.backoff = Math.min((lazy.backoff || 4000) * 2, 60000);
        return pump(lazy.backoff);
      }
      if (res.capped && !res.items.some((g) => g.status === 'ok')) return; // tope de consultas por visita alcanzado
      lazy.backoff = res.limited ? Math.min((lazy.backoff || 4000) * 2, 60000) : 0;
      res.items.forEach((g, i) => {
        const { c, p, r } = batch[i];
        if (g.status === 'ok') {
          p.image = g.i || p.image;
          p.priceRaw = g.p || p.priceRaw;
          if (p.unnamed) { p.name = g.n; p.unnamed = false; p._n = norm(`${p.name} ${p.sections.join(' ')}`); }
          p.price = parsePrice(p.priceRaw);
          p.done = true;
          p.updated = Date.now();
          fillCard(c, p);
          window.Hauls?.enriched(p);
          markDirty(p);
        } else if (g.status === 'gone') {
          p.gone = true;
          p.done = true;
          c.remove();
        } else if (g.status === 'empty') {
          const k = `${r.platform}/${r.id}`;
          const n = (lazy.tries.get(k) || 0) + 1;
          lazy.tries.set(k, n);
          if (n >= 4) p.done = true; // USFans no devuelve nada de este producto: no se insiste más
        } // 'pending' (USFans limitando o error de red): se reintentará más tarde sin contar como intento
        if (p.done) { lazy.queue.delete(c); watching.delete(c); seenIo.unobserve(c); }
      });
      pump(lazy.backoff || (res.network ? 1000 : 40));
    }, delay);
  }

  function fillCard(card, p) {
    const thumb = card.querySelector('.thumb');
    if (p.image && thumb) {
      const old = thumb.querySelector('img');
      if (!old) {
        const img = document.createElement('img');
        img.decoding = 'async';
        img.referrerPolicy = 'no-referrer';
        img.alt = '';
        img.src = p.image;
        img.onerror = () => img.classList.add('broken');
        thumb.appendChild(img);
      } else if (old.getAttribute('src') !== p.image) {
        old.src = p.image;
      }
    }
    const nameEl = card.querySelector('.name');
    if (nameEl) nameEl.textContent = p.name;
    const meta = card.querySelector('.meta');
    if (meta && p.priceRaw) {
      let pr = meta.querySelector('.price');
      if (!pr) {
        pr = document.createElement('span');
        pr.className = 'price';
        meta.appendChild(pr);
      }
      pr.textContent = formatPrice(p.priceRaw);
    }
  }

  /* ---------- Arranque ---------- */
  function start() {
    if (!API) return;
    $('accountBtn').hidden = false;
    $('sourceBar').hidden = false;
    renderSource();
    $('sourceBtn').onclick = (e) => {
      e.stopPropagation();
      const open = $('sourceMenu').hidden;
      $('sourceMenu').hidden = !open;
      $('sourceBtn').setAttribute('aria-expanded', String(open));
    };
    document.addEventListener('pointerdown', (e) => {
      if (!$('sourceSelect').contains(e.target)) { $('sourceMenu').hidden = true; $('sourceBtn').setAttribute('aria-expanded', 'false'); }
    });
    $('accountBtn').onclick = () => (me ? accountModal() : loginModal());
    $('importBtn').onclick = () => (me ? importModal() : loginModal(importModal));
    modal().addEventListener('pointerdown', (e) => { if (e.target === modal()) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal().hidden) closeModal(); });
    token = store.get();
    if (token) refreshMe();
  }

  return {
    start, watch, tabNames, lookup,
    api: call, isLoggedIn: () => !!me, login: (after) => loginModal(after),
    ui: { el, openModal, closeModal, heading, closeBtn, errBox, showErr },
  };
})();
window.Accounts = Accounts;
