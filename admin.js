/* ============================================================
   Modo administrador (solo para el dueño de la web)
   Esto es solo interfaz: cada acción la vuelve a comprobar el servidor, que solo acepta
   un dispositivo autorizado con un código enviado a su correo. Sin ese token no hay nada que hacer.
   ============================================================ */
const Admin = (() => {
  const API = CONFIG.accountApi;
  const KEY = 'adminToken';
  const NOVEDADES = 'Update'; // así se llama la categoría «Novedades» en la hoja
  let tok = null;
  let active = false;

  const store = {
    get() { try { return localStorage.getItem(KEY); } catch { return null; } },
    set(v) { try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); } catch { /* sin almacenamiento */ } },
  };
  const ui = () => window.Accounts.ui;
  const $id = (id) => document.getElementById(id);

  async function api(path, { method = 'GET', body, raw, type, text = false } = {}) {
    const headers = { 'X-Admin-Token': tok || '' };
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (type) headers['Content-Type'] = type;
    let res;
    try {
      res = await fetch(API + path, { method, headers, body: raw ?? (body !== undefined ? JSON.stringify(body) : undefined) });
    } catch {
      throw Object.assign(new Error('network'), { code: 'network' });
    }
    if (!res.ok) {
      let error = 'server';
      let id;
      try { const j = await res.json(); error = j.error || error; id = j.id; } catch { /* sin cuerpo */ }
      if (res.status === 401) deactivate();
      throw Object.assign(new Error(error), { status: res.status, code: error, id });
    }
    return text ? res.text() : res.json();
  }

  const errText = (e) => ({
    network: 'No hay conexión con el servidor. Prueba de nuevo.',
    unauthorized: 'Este dispositivo ya no está autorizado. Vuelve a activarlo desde tu cuenta.',
    bad_product: 'Algún dato no es válido (revisa el enlace, el nombre y el precio).',
    exists: 'Ese producto ya está añadido: edítalo desde su tarjeta.',
    max_products: 'Has llegado al máximo de productos propios.',
    too_big: 'La imagen es demasiado grande.',
    bad_code: 'Código incorrecto.',
    expired: 'El código ha caducado. Pide otro.',
    too_many: 'Demasiados intentos. Espera un rato.',
    wait: 'Espera unos segundos antes de pedir otro código.',
    mail_failed: 'No se ha podido enviar el correo.',
    forbidden: 'Esta cuenta no tiene permisos de administrador.',
  }[e?.code] || 'Algo ha fallado. Prueba de nuevo.');

  function toast(msg) {
    const n = document.createElement('div');
    n.className = 'adm-toast';
    n.setAttribute('role', 'status');
    n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3200);
  }

  /* ---------- Activar / desactivar ---------- */
  const ICON = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 3.5l7 2.6v5.1c0 4.2-2.9 7.6-7 9.3-4.1-1.7-7-5.1-7-9.3V6.1z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2.2 2.2L15.2 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // La pestaña «Admin» (junto a Fotos QC) solo existe en el navegador de quien tiene el dispositivo autorizado
  function addTab() {
    if (TOOLS.some((x) => x.id === 'admin')) return;
    for (const l of Object.keys(I18N)) I18N[l].toolAdmin = 'Admin';
    TOOL_ICONS.admin = ICON;
    TOOLS.push({ id: 'admin', labelKey: 'toolAdmin' });
    const sec = document.createElement('section');
    sec.className = 'tool';
    sec.id = 'tool-admin';
    sec.setAttribute('role', 'tabpanel');
    sec.hidden = true;
    sec.append(panel());
    $id('tool-qc').after(sec);
    renderTools();
  }

  function removeTab() {
    const i = TOOLS.findIndex((x) => x.id === 'admin');
    if (i === -1) return;
    TOOLS.splice(i, 1);
    $id('tool-admin')?.remove();
    if (activeTool === 'admin') showTool('products');
    renderTools();
  }

  // Lista de herramientas de administrador (por ahora, una; para añadir otra basta una entrada más aquí)
  function panel() {
    const tools = [
      { icon: '<path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>', title: 'Añadir producto', text: 'Pega un enlace: se leen el nombre, la foto y el precio, los editas y sale el primero en Novedades.', run: () => productForm() },
    ];
    const wrap = document.createElement('div');
    wrap.className = 'adm-panel';
    const h = document.createElement('h2');
    h.className = 'tool-title';
    h.textContent = 'Herramientas de administrador';
    const list = document.createElement('div');
    list.className = 'adm-tools';
    for (const t of tools) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'adm-tool';
      b.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${t.icon}</svg><span class="adm-tool-t"></span><span class="adm-tool-d"></span>`;
      b.querySelector('.adm-tool-t').textContent = t.title;
      b.querySelector('.adm-tool-d').textContent = t.text;
      b.onclick = t.run;
      list.append(b);
    }
    wrap.append(h, list, analysis());
    return wrap;
  }

  /* ---------- Análisis: mantenimiento y tráfico ---------- */
  const num = (n) => Number(n || 0).toLocaleString('es-ES');
  const size = (b) => (b >= 1024 ** 3 ? `${(b / 1024 ** 3).toFixed(2)} GB` : `${(b / 1024 ** 2).toFixed(b < 10 * 1024 ** 2 ? 2 : 1)} MB`);
  const RANGES = [['all', 'Siempre'], ['30d', '30 días'], ['7d', '7 días'], ['24h', '24 horas']];
  const RANGE_NAME = { all: 'desde siempre', '30d': 'últimos 30 días', '7d': 'últimos 7 días', '24h': 'últimas 24 horas' };

  function analysis() {
    const { el } = ui();
    let range = 'all';
    let site = '';
    try { range = RANGES.some(([k]) => k === localStorage.getItem('admRange')) ? localStorage.getItem('admRange') : 'all'; } catch { /* sin almacenamiento */ }

    const upd = el('span', { class: 'adm-an-upd', text: 'Cargando…' });
    const onlineN = el('b', { text: '–' });
    const rows = el('div', { class: 'adm-an-rows' });
    const seg = el('div', { class: 'adm-seg', role: 'group', 'aria-label': 'Periodo' });
    const siteSel = el('select', { class: 'adm-sel adm-an-site', 'aria-label': 'Web' });
    const kVisits = el('b', { text: '–' });
    const kUniq = el('b', { text: '–' });
    const kUsers = el('b', { text: '–' });
    const note = el('p', { class: 'adm-an-note' });
    const usersBtn = el('button', { class: 'btn ghost adm-an-mail', type: 'button', text: 'Ver correos', onclick: () => usersModal(range) });
    const kpi = (label, val, extra) => el('div', { class: 'adm-kpi' }, el('span', { class: 'adm-kpi-l', text: label }), val, extra);

    const row = (label, value, ratio) => {
      const r = el('div', { class: 'adm-row' }, el('span', { class: 'adm-row-l', text: label }), el('span', { class: 'adm-row-v', text: value }));
      if (ratio != null) {
        const bar = el('i', { class: `adm-bar${ratio > 0.9 ? ' hot' : ratio > 0.7 ? ' warm' : ''}` });
        bar.style.setProperty('--w', `${Math.max(1, Math.min(100, ratio * 100))}%`);
        r.append(el('span', { class: 'adm-bar-bg' }, bar));
      }
      return r;
    };

    const paint = (d) => {
      const m = d.maintenance;
      onlineN.textContent = num(d.online) + (d.online >= d.onlineMax ? '+' : '');
      rows.replaceChildren(
        row('Base de datos', `${size(m.dbBytes)} / ${size(m.dbLimit)}`, m.dbBytes / m.dbLimit),
        row('Visitas registradas hoy', `${num(m.visitsToday)} / ${num(m.visitsDayMax)}`, m.visitsToday / m.visitsDayMax),
        row('Productos en la caché compartida (hoy)', `${num(m.goodsToday)} / ${num(m.goodsDayMax)}`, m.goodsToday / m.goodsDayMax),
        row('Correos de acceso enviados (hoy)', `${num(m.codesToday)} / ${num(m.codesDayMax)}`, m.codesToday / m.codesDayMax),
        row('Productos propios', num(m.adminProducts)),
        row('Fotos subidas', `${num(m.adminImages)} (${size(m.adminImageBytes)})`),
        row('Productos guardados en la caché', num(m.goods)),
        row('Hauls · hojas importadas', `${num(m.hauls)} · ${num(m.imports)}`),
      );
      kVisits.textContent = num(d.traffic.visits);
      kUniq.textContent = num(d.traffic.uniques);
      kUsers.textContent = num(d.users.inRange);
      usersBtn.hidden = !d.users.inRange;
      const first = d.traffic.first ? new Date(d.traffic.first).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }) : null;
      note.textContent = `${first ? `Hay datos de visitas desde el ${first}; antes de eso no se medía. ` : 'Aún no hay visitas registradas. '}`
        + '«Únicos» son personas distintas por día, sumadas: quien vuelve otro día cuenta otra vez. Nadie queda identificado.';
      const known = [...siteSel.options].map((o) => o.value);
      if (d.sites.some((s) => !known.includes(s)) || !siteSel.options.length) {
        siteSel.replaceChildren(el('option', { value: '', text: 'Todas las webs' }), ...d.sites.map((s) => el('option', { value: s, text: s })));
        siteSel.value = site;
      }
      upd.textContent = `Actualizado ${new Date().toLocaleTimeString('es-ES')}`;
    };

    const load = async () => {
      try { paint(await api(`/admin/stats?range=${range}&site=${encodeURIComponent(site)}`)); } catch { upd.textContent = 'Sin conexión'; }
    };

    const drawSeg = () => seg.replaceChildren(...RANGES.map(([k, label]) => el('button', {
      type: 'button', class: 'adm-seg-b', 'aria-pressed': String(k === range), text: label,
      onclick: () => { range = k; try { localStorage.setItem('admRange', k); } catch { /* sin almacenamiento */ } drawSeg(); load(); },
    })));
    drawSeg();
    siteSel.onchange = () => { site = siteSel.value; load(); };

    const box = el('div', { class: 'adm-an' },
      el('div', { class: 'adm-an-head' }, el('h3', { class: 'adm-an-title', text: 'Análisis' }), upd),
      el('div', { class: 'adm-an-online' }, el('i', { class: 'adm-dot' }), onlineN, el('span', { text: ' usuarios online ahora' })),
      el('h4', { class: 'adm-an-sec', text: 'Mantenimiento' }), rows,
      el('h4', { class: 'adm-an-sec', text: 'Tráfico y usuarios' }),
      el('div', { class: 'adm-an-bar' }, seg, siteSel),
      el('div', { class: 'adm-an-kpis' },
        kpi('Visitas totales', kVisits),
        kpi('Visitantes únicos', kUniq),
        kpi('Usuarios registrados', kUsers, usersBtn)),
      note);

    // Se pide al activar el modo administrador (así ya está listo al abrir la pestaña) y se refresca sola cada 30 s mientras se está mirando
    load();
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) load(); });
    io.observe(box);
    const timer = setInterval(() => {
      if (!box.isConnected) { clearInterval(timer); io.disconnect(); return; }
      if (!document.hidden && box.offsetParent !== null) load();
    }, 30000);
    return box;
  }

  async function usersModal(range) {
    const { el, openModal, closeBtn, heading, errBox, showErr } = ui();
    const err = errBox();
    const list = el('ul', { class: 'acc-list adm-mails' });
    const copy = el('button', { class: 'btn ghost', type: 'button', text: 'Copiar correos', hidden: true });
    openModal(closeBtn(), ...heading('Usuarios registrados', RANGE_NAME[range]), list, err, el('div', { class: 'modal-row spread' }, copy));
    try {
      const r = await api(`/admin/stats/users?range=${range}`);
      list.replaceChildren(...(r.items.length ? r.items.map((u) => el('li', {},
        el('span', { class: 'acc-name' }, el('b', { text: u.email }),
          el('small', { text: `${new Date(u.created_at).toLocaleDateString('es-ES')}${u.marketing ? ' · acepta novedades' : ''}` }))))
        : [el('li', { class: 'acc-empty', text: 'Nadie en este periodo.' })]));
      copy.hidden = !r.items.length;
      copy.onclick = async () => {
        try { await navigator.clipboard.writeText(r.items.map((u) => u.email).join('\n')); copy.textContent = 'Copiados ✓'; } catch { showErr(err, 'No se han podido copiar.'); }
      };
    } catch (e) { showErr(err, errText(e)); }
  }

  function activate() {
    active = true;
    document.documentElement.dataset.admin = '1';
    addTab();
  }

  function deactivate() {
    active = false;
    tok = null;
    store.set(null);
    delete document.documentElement.dataset.admin;
    removeTab();
  }

  async function start() {
    tok = store.get();
    if (!tok || !API) return;
    try {
      await api('/admin/me');
      activate();
    } catch { /* sin conexión: no se activa hasta que haya */ }
  }

  /* ---------- Cuenta: activar este dispositivo, dispositivos, copia ---------- */
  const deviceLabel = () => {
    const ua = navigator.userAgent;
    const br = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Navegador';
    const os = /Windows/.test(ua) ? 'Windows' : /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iOS' : /Mac OS/.test(ua) ? 'macOS' : /Linux/.test(ua) ? 'Linux' : '';
    return `${br}${os ? ` · ${os}` : ''} · ${location.hostname}`;
  };

  function accountSection(me) {
    if (!me?.canAdmin || !window.Accounts?.ui) return [];
    const { el } = ui();
    const box = el('div', { class: 'adm-box' }, el('h3', { class: 'modal-h3', text: 'Modo administrador' }));
    if (!active) {
      box.append(
        el('p', { class: 'modal-note', text: 'Autoriza este dispositivo con un código que te enviaré al correo. Después no tendrás que volver a escribir nada durante 90 días.' }),
        el('button', { class: 'btn modal-btn', type: 'button', text: 'Activar en este dispositivo', onclick: enrollModal }),
      );
      return [box];
    }
    box.append(
      el('p', { class: 'modal-note', text: '✓ Este dispositivo está autorizado.' }),
      el('p', { class: 'modal-note', text: 'Las herramientas están en la pestaña «Admin».' }),
      el('div', { class: 'adm-actions' },
        el('button', { class: 'btn ghost', type: 'button', text: 'Dispositivos', onclick: devicesModal }),
        el('button', { class: 'btn ghost', type: 'button', text: 'Descargar copia (CSV)', onclick: downloadCsv }),
      ),
    );
    return [box];
  }

  function enrollModal() {
    const { el, openModal, closeBtn, heading, errBox, showErr } = ui();
    const err = errBox();
    const code = el('input', { type: 'text', inputmode: 'numeric', autocomplete: 'one-time-code', maxlength: '6', placeholder: 'Código de 6 cifras' });
    const go = el('button', { class: 'btn modal-btn', type: 'submit', text: 'Autorizar este dispositivo' });
    const form = el('form', { class: 'modal-form', novalidate: true }, el('div', { class: 'field' }, code), err, go);
    openModal(closeBtn(), ...heading('Modo administrador', 'Te he enviado un código a tu correo.'), form);
    window.Accounts.api('/admin/enroll/request', { method: 'POST', body: {} }).catch((e) => showErr(err, errText(e)));
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      showErr(err, '');
      go.disabled = true;
      try {
        const r = await window.Accounts.api('/admin/enroll/verify', { method: 'POST', body: { code: code.value, label: deviceLabel() } });
        tok = r.token;
        store.set(tok);
        activate();
        ui().closeModal();
        toast('Modo administrador activado en este dispositivo');
      } catch (e) {
        showErr(err, errText(e));
        go.disabled = false;
      }
    });
  }

  async function devicesModal() {
    const { el, openModal, closeBtn, heading, errBox, showErr } = ui();
    const err = errBox();
    const list = el('ul', { class: 'acc-list' });
    const draw = async () => {
      try {
        const r = await api('/admin/devices');
        list.replaceChildren(...r.items.map((d) => el('li', {},
          el('span', { class: 'acc-name' }, el('b', { text: d.label + (d.current ? ' (este)' : '') }),
            el('small', { text: `Último uso: ${new Date(d.last_seen).toLocaleDateString()}` })),
          el('button', { class: 'btn ghost', type: 'button', text: 'Revocar', onclick: async () => {
            try { await api(`/admin/devices/${d.id}`, { method: 'DELETE' }); if (d.current) { deactivate(); ui().closeModal(); } else draw(); } catch (e) { showErr(err, errText(e)); }
          } }))));
      } catch (e) { showErr(err, errText(e)); }
    };
    const revokeAll = el('button', { class: 'btn ghost danger', type: 'button', text: 'Cerrar todas las sesiones de administrador', onclick: async () => {
      if (revokeAll.dataset.armed !== '1') { revokeAll.dataset.armed = '1'; revokeAll.textContent = 'Pulsa otra vez para confirmar'; return; }
      try { await api('/admin/devices/revoke-all', { method: 'POST', body: {} }); deactivate(); ui().closeModal(); toast('Todas las sesiones de administrador se han cerrado'); } catch (e) { showErr(err, errText(e)); }
    } });
    openModal(closeBtn(), ...heading('Dispositivos autorizados'), list, err, el('div', { class: 'modal-row spread' }, revokeAll));
    draw();
  }

  async function downloadCsv() {
    try {
      const text = await api('/admin/export', { text: true });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([`﻿${text}`], { type: 'text/csv;charset=utf-8' }));
      a.download = 'productos-propios.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    } catch (e) { toast(errText(e)); }
  }

  /* ---------- Leer un producto de USFans (una sola petición) ---------- */
  async function readProduct(r) {
    const res = await fetch(`https://usfans.com/api/goods/info?channel=${r.platform}&goodsId=${encodeURIComponent(r.id)}&refresh=false&queryDelivery=false&activityId=`, { headers: { currency: 'EUR' } });
    const j = await res.json();
    if (!j || j.code !== 200 || !j.data) throw Object.assign(new Error('notfound'), { code: 'notfound' });
    const d = j.data;
    const prices = (d.skuList || []).filter((x) => Number(x.stock) > 0).map((x) => Number(x.convertedDiscountPrice || x.convertedPrice)).filter((x) => x > 0);
    if (!prices.length && Number(d.convertedPrice) > 0) prices.push(Number(d.convertedPrice));
    return {
      name: String(d.titleEn || d.title || '').replace(/\s+/g, ' ').trim(),
      images: (Array.isArray(d.images) ? d.images : []).map((u) => String(u).replace(/^\/\//, 'https://')).filter((u) => /^https:\/\//.test(u)).slice(0, 12),
      price: prices.length ? `${Math.min(...prices).toFixed(2).replace('.', ',')} €` : '',
    };
  }

  // Reduce la foto elegida (800 px, WebP) y la sube: así ocupa unos 40 KB y no hace falta ningún servicio de imágenes
  async function uploadFile(file) {
    const bmp = await createImageBitmap(file);
    const k = Math.min(1, 800 / Math.max(bmp.width, bmp.height));
    const cv = document.createElement('canvas');
    cv.width = Math.max(1, Math.round(bmp.width * k));
    cv.height = Math.max(1, Math.round(bmp.height * k));
    cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height);
    const toBlob = (type, q) => new Promise((res) => cv.toBlob(res, type, q));
    let blob = await toBlob('image/webp', 0.85);
    if (!blob || blob.type !== 'image/webp') blob = await toBlob('image/jpeg', 0.85);
    for (const q of [0.7, 0.55]) if (blob.size > 380 * 1024) blob = await toBlob(blob.type, q);
    const r = await api('/admin/image', { method: 'POST', raw: await blob.arrayBuffer(), type: blob.type });
    return r.url;
  }

  /* ---------- Añadir y editar productos ---------- */
  function productForm(p) {
    const { el, openModal, closeBtn, heading, errBox, showErr } = ui();
    const editing = !!p;
    const err = errBox();
    let image = p?.image || '';
    let canonical = p?.link || '';
    let thumbs = [];

    const linkIn = el('input', { type: 'text', placeholder: 'Pega el enlace del producto (USFans, Weidian, Taobao, 1688…)', autocomplete: 'off', spellcheck: 'false', value: p?.link || '' });
    const readBtn = el('button', { class: 'btn', type: 'button', text: 'Leer' });
    const nameIn = el('input', { type: 'text', maxlength: '200', placeholder: 'Nombre', value: p?.name || '' });
    const priceIn = el('input', { type: 'text', inputmode: 'decimal', placeholder: 'Precio en € (opcional)', value: p?.priceRaw || '' });
    const urlIn = el('input', { type: 'text', placeholder: 'o pega el enlace de otra foto (https://…)', autocomplete: 'off', spellcheck: 'false' });
    const fileIn = el('input', { type: 'file', accept: 'image/*', class: 'adm-file' });
    const strip = el('div', { class: 'adm-strip' });
    const prev = el('div', { class: 'adm-prev' });
    const news = el('input', { type: 'checkbox' });
    news.checked = editing ? (p.categories || []).includes(NOVEDADES) : true;
    const otherCats = [...new Set(state.orig.flatMap((x) => x.categories || []))].filter((c) => c !== NOVEDADES);
    const catSel = el('select', { class: 'adm-sel' }, el('option', { value: '', text: '— sin otra categoría —' }), ...otherCats.map((c) => el('option', { value: c, text: categoryLabel(c) })));
    catSel.value = editing ? ((p.categories || []).find((c) => c !== NOVEDADES) || '') : '';
    const save = el('button', { class: 'btn modal-btn', type: 'submit', text: editing ? 'Guardar cambios' : 'Añadir a la web' });
    const body = el('div', { class: 'adm-body', hidden: !editing });

    const paint = () => {
      prev.replaceChildren();
      if (image && /^https:\/\//.test(image)) {
        const im = document.createElement('img');
        im.alt = '';
        im.referrerPolicy = 'no-referrer';
        im.src = image;
        prev.append(im);
      }
      strip.replaceChildren(...thumbs.map((u) => {
        const b = el('button', { type: 'button', class: `adm-th${u === image ? ' on' : ''}`, 'aria-label': 'Usar esta foto' });
        const im = document.createElement('img');
        im.alt = '';
        im.referrerPolicy = 'no-referrer';
        im.src = u;
        b.append(im);
        b.onclick = () => { image = u; paint(); };
        return b;
      }));
    };

    readBtn.onclick = async () => {
      showErr(err, '');
      const r = linkRefOf(linkIn.value);
      if (!r) return showErr(err, 'Ese enlace no se reconoce como un producto de USFans, Weidian, Taobao o 1688.');
      readBtn.disabled = true;
      readBtn.textContent = 'Leyendo…';
      try {
        const info = await readProduct(r);
        canonical = `https://usfans.com/product/${r.platform}/${r.id}?ref=${CONFIG.refCode}`;
        nameIn.value = info.name;
        priceIn.value = info.price;
        thumbs = info.images;
        image = thumbs[0] || '';
        body.hidden = false;
        paint();
        if (!info.price) showErr(err, 'No he podido leer el precio (puede estar agotado): puedes escribirlo a mano.');
      } catch {
        showErr(err, 'No se ha podido leer ese producto. Puedes rellenar los datos a mano.');
        canonical = `https://usfans.com/product/${r.platform}/${r.id}?ref=${CONFIG.refCode}`;
        body.hidden = false;
        paint();
      } finally {
        readBtn.disabled = false;
        readBtn.textContent = 'Leer';
      }
    };
    linkIn.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); readBtn.click(); } });
    urlIn.addEventListener('change', () => {
      const v = urlIn.value.trim();
      if (!v) return;
      if (!/^https:\/\/\S{4,480}$/.test(v)) return showErr(err, 'El enlace de la foto debe empezar por https://');
      showErr(err, '');
      image = v;
      if (!thumbs.includes(v)) thumbs = [v, ...thumbs];
      paint();
    });
    fileIn.addEventListener('change', async () => {
      const f = fileIn.files?.[0];
      if (!f) return;
      showErr(err, '');
      try {
        image = await uploadFile(f);
        thumbs = [image, ...thumbs.filter((u) => u !== image)];
        paint();
      } catch (e) {
        showErr(err, e.code ? errText(e) : 'No se ha podido usar esa imagen.');
      }
      fileIn.value = '';
    });

    body.append(
      prev, strip,
      el('div', { class: 'adm-photo' }, urlIn, el('label', { class: 'adm-upload' }, 'Subir foto', fileIn)),
      el('label', { class: 'modal-label', text: 'Nombre' }), el('div', { class: 'field' }, nameIn),
      el('label', { class: 'modal-label', text: 'Precio' }), el('div', { class: 'field' }, priceIn),
      el('label', { class: 'adm-check' }, news, ' Salir en Novedades (el primero)'),
      el('label', { class: 'modal-label', text: 'Otra categoría' }), catSel,
    );
    const form = el('form', { class: 'modal-form adm-form', novalidate: true },
      editing ? null : el('div', { class: 'adm-link' }, el('div', { class: 'field' }, linkIn), readBtn),
      body, err, save);
    openModal(closeBtn(), ...heading(editing ? 'Editar producto' : 'Añadir producto'), form);
    if (editing) { thumbs = image ? [image] : []; paint(); } else linkIn.focus();

    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      showErr(err, '');
      if (!canonical) return showErr(err, 'Primero pega el enlace y pulsa «Leer».');
      const categories = [...(news.checked ? [NOVEDADES] : []), ...(catSel.value ? [catSel.value] : [])];
      save.disabled = true;
      try {
        await api(editing ? `/admin/products/${p.adminId}` : '/admin/products', {
          method: editing ? 'PUT' : 'POST',
          body: { link: canonical, name: nameIn.value, image, price: priceIn.value.trim(), categories },
        });
        await refreshExtras();
        ui().closeModal();
        toast(editing ? 'Cambios guardados' : 'Producto añadido');
      } catch (e) {
        showErr(err, errText(e));
        save.disabled = false;
      }
    });
  }

  function removeProduct(p) {
    const { el, openModal, closeBtn, heading, errBox, showErr } = ui();
    const err = errBox();
    const del = el('button', { class: 'btn modal-btn', type: 'button', text: 'Eliminar' });
    openModal(closeBtn(), ...heading('¿Eliminar este producto?', p.name), err, el('div', { class: 'modal-row spread' },
      el('button', { class: 'btn ghost', type: 'button', text: 'Cancelar', onclick: () => ui().closeModal() }), del));
    del.onclick = async () => {
      del.disabled = true;
      try {
        await api(`/admin/products/${p.adminId}`, { method: 'DELETE' });
        await refreshExtras();
        ui().closeModal();
        toast('Producto eliminado');
      } catch (e) { showErr(err, errText(e)); del.disabled = false; }
    };
  }

  // Opciones extra del menú de cada producto (solo los que añadiste tú)
  function menu(p) {
    if (!active || !p?.adminId) return [];
    return ['-',
      { icon: '✎', label: 'Editar producto', action: () => productForm(p) },
      { icon: '✕', label: 'Eliminar producto', action: () => removeProduct(p) }];
  }

  start();
  return { menu, accountSection, active: () => active };
})();
window.Admin = Admin;
