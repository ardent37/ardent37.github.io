/* ============================================================
   Mis hauls: álbumes de productos favoritos, guardados en la cuenta.
   - Se añaden con clic derecho en cualquier producto, y desde dentro del haul se puede buscar en todas las spreadsheets.
   - Cada haul admite subcarpetas (un solo nivel) y se puede compartir con un enlace de solo lectura.
   Usa Accounts (sesión y API) y las funciones de app.js (cardFor, openProduct, showMenu…).
   ============================================================ */
Object.assign(I18N.es, {
  toolHauls: 'Mis hauls',
  haulsTitle: 'Mis hauls',
  haulsNew: 'Nuevo',
  haulsEmpty: 'Aún no tienes ningún haul. Crea uno para organizar tus productos favoritos.',
  haulsLoginTitle: 'Guarda tus hauls',
  haulsLoginText: 'Inicia sesión para crear álbumes con tus productos favoritos. Se guardan en tu cuenta.',
  haulsLoginBtn: 'Iniciar sesión',
  haulCount: '{n} productos',
  haulCount1: '1 producto',
  haulNoPrice: '{n} sin precio todavía',
  haulNameLabel: 'Nombre del haul',
  haulNamePh: 'Ej: Haul de invierno',
  haulCreate: 'Crear haul',
  haulBack: 'Mis hauls',
  haulSearch: 'Busca productos para añadir…',
  haulEmptyItems: 'Este haul está vacío. Busca productos arriba o añádelos con clic derecho desde la lista.',
  haulNoResults: 'Sin resultados en tus spreadsheets.',
  haulDelete: 'Eliminar haul',
  haulAdd: 'Añadir al haul',
  haulRemove: 'Quitar del haul',
  haulResults: 'Resultados',
  haulProducts: 'Productos',
  haulFolders: 'Subcarpetas',
  addToHaul: 'Añadir a un haul…',
  addToHaulHead: 'Añadir a…',
  newHaulItem: 'Nuevo haul…',
  haulAdded: 'Añadido a «{name}»',
  haulRemoved: 'Quitado de «{name}»',
  haulMaxHauls: 'Has llegado al máximo de hauls.',
  haulMaxItems: 'Este haul está lleno.',
  haulMaxFolders: 'Has llegado al máximo de subcarpetas.',
  haulRename: 'Renombrar',
  folderAdd: 'Añadir subcarpeta',
  folderNew: 'Nueva subcarpeta',
  folderNameLabel: 'Nombre de la subcarpeta',
  folderNamePh: 'Ej: Zapatillas',
  folderCreate: 'Crear subcarpeta',
  folderDelete: 'Eliminar subcarpeta',
  folderDeleteHint: 'Los productos vuelven al haul.',
  folderRoot: 'Sin subcarpeta (el haul)',
  folderMove: 'Mover a…',
  folderIn: 'Añadir a «{name}»',
  shareBtn: 'Compartir',
  shareTitle: 'Compartir este haul',
  shareText: 'Cualquiera con este enlace podrá ver el haul (no podrá modificarlo). Si cambias el haul, el enlace mostrará los cambios.',
  shareCopy: 'Copiar enlace',
  shareCopied: 'Enlace copiado',
  shareSystem: 'Compartir…',
  shareStop: 'Dejar de compartir',
  sharedBadge: 'Haul compartido',
  sharedSave: 'Guardar en mis hauls',
  sharedSaved: 'Guardado en tus hauls',
  sharedGone: 'Este haul ya no está compartido o el enlace no es válido.',
  sharedClose: 'Cerrar',
  shareViewTitle: 'Solo ver',
  shareViewText: 'Cualquiera con este enlace podrá ver el haul, sin poder cambiarlo.',
  shareEditTitle: 'Ver y editar en equipo',
  shareEditText: 'Quien abra este enlace e inicie sesión podrá añadir, quitar y mover productos. Los cambios se ven en los dos lados. Máximo 5 colaboradores, que verán el correo de los demás.',
  shareCreate: 'Crear enlace',
  shareCollab: 'Colaboradores',
  shareYou: '(tú)',
  shareOwner: 'dueño',
  shareRemoveMember: 'Quitar',
  haulLeave: 'Salir del haul',
  haulLeaveDone: 'Has salido del haul',
  haulGone: 'Ya no tienes acceso a ese haul.',
  haulCollab: 'Colaboran: {names}',
  haulSharedBadge: 'Compartido',
  haulSharedWithYou: 'Compartido contigo',
  inviteTitle: 'Te invitan a editar «{name}»',
  inviteText: 'Podrás añadir, quitar y mover productos, y los cambios se verán para todos.',
  inviteEmailNote: 'Los demás colaboradores de este haul verán tu correo electrónico.',
  inviteJoin: 'Unirme al haul',
  inviteGone: 'Esta invitación ya no es válida.',
  inviteMax: 'Este haul ya tiene el máximo de colaboradores.',
  inviteJoined: 'Te has unido a «{name}»',
});
Object.assign(I18N.en, {
  toolHauls: 'My hauls',
  haulsTitle: 'My hauls',
  haulsNew: 'New',
  haulsEmpty: 'You don’t have any hauls yet. Create one to organise your favourite products.',
  haulsLoginTitle: 'Save your hauls',
  haulsLoginText: 'Sign in to create albums with your favourite products. They’re saved to your account.',
  haulsLoginBtn: 'Sign in',
  haulCount: '{n} products',
  haulCount1: '1 product',
  haulNoPrice: '{n} without a price yet',
  haulNameLabel: 'Haul name',
  haulNamePh: 'e.g. Winter haul',
  haulCreate: 'Create haul',
  haulBack: 'My hauls',
  haulSearch: 'Search products to add…',
  haulEmptyItems: 'This haul is empty. Search for products above or add them with a right-click from the list.',
  haulNoResults: 'No results in your spreadsheets.',
  haulDelete: 'Delete haul',
  haulAdd: 'Add to haul',
  haulRemove: 'Remove from haul',
  haulResults: 'Results',
  haulProducts: 'Products',
  haulFolders: 'Subfolders',
  addToHaul: 'Add to a haul…',
  addToHaulHead: 'Add to…',
  newHaulItem: 'New haul…',
  haulAdded: 'Added to “{name}”',
  haulRemoved: 'Removed from “{name}”',
  haulMaxHauls: 'You’ve reached the maximum number of hauls.',
  haulMaxItems: 'This haul is full.',
  haulMaxFolders: 'You’ve reached the maximum number of subfolders.',
  haulRename: 'Rename',
  folderAdd: 'Add subfolder',
  folderNew: 'New subfolder',
  folderNameLabel: 'Subfolder name',
  folderNamePh: 'e.g. Sneakers',
  folderCreate: 'Create subfolder',
  folderDelete: 'Delete subfolder',
  folderDeleteHint: 'Products go back to the haul.',
  folderRoot: 'No subfolder (the haul)',
  folderMove: 'Move to…',
  folderIn: 'Add to “{name}”',
  shareBtn: 'Share',
  shareTitle: 'Share this haul',
  shareText: 'Anyone with this link can view the haul (but not change it). If you change the haul, the link will show the changes.',
  shareCopy: 'Copy link',
  shareCopied: 'Link copied',
  shareSystem: 'Share…',
  shareStop: 'Stop sharing',
  sharedBadge: 'Shared haul',
  sharedSave: 'Save to my hauls',
  sharedSaved: 'Saved to your hauls',
  sharedGone: 'This haul is no longer shared or the link isn’t valid.',
  sharedClose: 'Close',
  shareViewTitle: 'View only',
  shareViewText: 'Anyone with this link can see the haul but not change it.',
  shareEditTitle: 'View and edit as a team',
  shareEditText: 'Anyone who opens this link and signs in can add, remove and move products. Changes show up for everyone. Up to 5 collaborators, who can see each other’s email.',
  shareCreate: 'Create link',
  shareCollab: 'Collaborators',
  shareYou: '(you)',
  shareOwner: 'owner',
  shareRemoveMember: 'Remove',
  haulLeave: 'Leave haul',
  haulLeaveDone: 'You left the haul',
  haulGone: 'You no longer have access to that haul.',
  haulCollab: 'Working on it: {names}',
  haulSharedBadge: 'Shared',
  haulSharedWithYou: 'Shared with you',
  inviteTitle: 'You’re invited to edit “{name}”',
  inviteText: 'You’ll be able to add, remove and move products, and everyone will see the changes.',
  inviteEmailNote: 'The other collaborators of this haul will see your email address.',
  inviteJoin: 'Join the haul',
  inviteGone: 'This invitation is no longer valid.',
  inviteMax: 'This haul already has the maximum number of collaborators.',
  inviteJoined: 'You joined “{name}”',
});
Object.assign(I18N.pl, {
  toolHauls: 'Moje hauly',
  haulsTitle: 'Moje hauly',
  haulsNew: 'Nowy',
  haulsEmpty: 'Nie masz jeszcze żadnych haulów. Utwórz pierwszy, aby uporządkować ulubione produkty.',
  haulsLoginTitle: 'Zapisz swoje hauly',
  haulsLoginText: 'Zaloguj się, aby tworzyć albumy z ulubionymi produktami. Są zapisywane na Twoim koncie.',
  haulsLoginBtn: 'Zaloguj się',
  haulCount: '{n} produktów',
  haulCount1: '1 produkt',
  haulNoPrice: '{n} bez ceny',
  haulNameLabel: 'Nazwa haula',
  haulNamePh: 'np. Zimowy haul',
  haulCreate: 'Utwórz haul',
  haulBack: 'Moje hauly',
  haulSearch: 'Szukaj produktów do dodania…',
  haulEmptyItems: 'Ten haul jest pusty. Wyszukaj produkty powyżej lub dodaj je prawym przyciskiem myszy z listy.',
  haulNoResults: 'Brak wyników w Twoich spreadsheetach.',
  haulDelete: 'Usuń haul',
  haulAdd: 'Dodaj do haula',
  haulRemove: 'Usuń z haula',
  haulResults: 'Wyniki',
  haulProducts: 'Produkty',
  haulFolders: 'Podfoldery',
  addToHaul: 'Dodaj do haula…',
  addToHaulHead: 'Dodaj do…',
  newHaulItem: 'Nowy haul…',
  haulAdded: 'Dodano do „{name}”',
  haulRemoved: 'Usunięto z „{name}”',
  haulMaxHauls: 'Osiągnięto maksymalną liczbę haulów.',
  haulMaxItems: 'Ten haul jest pełny.',
  haulMaxFolders: 'Osiągnięto maksymalną liczbę podfolderów.',
  haulRename: 'Zmień nazwę',
  folderAdd: 'Dodaj podfolder',
  folderNew: 'Nowy podfolder',
  folderNameLabel: 'Nazwa podfolderu',
  folderNamePh: 'np. Buty sportowe',
  folderCreate: 'Utwórz podfolder',
  folderDelete: 'Usuń podfolder',
  folderDeleteHint: 'Produkty wrócą do haula.',
  folderRoot: 'Bez podfolderu (haul)',
  folderMove: 'Przenieś do…',
  folderIn: 'Dodaj do „{name}”',
  shareBtn: 'Udostępnij',
  shareTitle: 'Udostępnij ten haul',
  shareText: 'Każdy, kto ma ten link, może obejrzeć haul (ale nie może go zmieniać). Jeśli zmienisz haul, link pokaże zmiany.',
  shareCopy: 'Kopiuj link',
  shareCopied: 'Skopiowano link',
  shareSystem: 'Udostępnij…',
  shareStop: 'Przestań udostępniać',
  sharedBadge: 'Udostępniony haul',
  sharedSave: 'Zapisz w moich haulach',
  sharedSaved: 'Zapisano w Twoich haulach',
  sharedGone: 'Ten haul nie jest już udostępniany lub link jest nieprawidłowy.',
  sharedClose: 'Zamknij',
  shareViewTitle: 'Tylko podgląd',
  shareViewText: 'Każdy, kto ma ten link, może zobaczyć haul, ale nie może go zmieniać.',
  shareEditTitle: 'Podgląd i wspólna edycja',
  shareEditText: 'Każdy, kto otworzy ten link i się zaloguje, może dodawać, usuwać i przenosić produkty. Zmiany widzą wszyscy. Do 5 współpracowników, którzy widzą nawzajem swoje adresy e-mail.',
  shareCreate: 'Utwórz link',
  shareCollab: 'Współpracownicy',
  shareYou: '(ty)',
  shareOwner: 'właściciel',
  shareRemoveMember: 'Usuń',
  haulLeave: 'Opuść haul',
  haulLeaveDone: 'Opuściłeś(-aś) haul',
  haulGone: 'Nie masz już dostępu do tego haula.',
  haulCollab: 'Pracują nad nim: {names}',
  haulSharedBadge: 'Udostępniony',
  haulSharedWithYou: 'Udostępnione Tobie',
  inviteTitle: 'Zaproszono Cię do edycji „{name}”',
  inviteText: 'Będziesz mógł(-ła) dodawać, usuwać i przenosić produkty, a wszyscy zobaczą zmiany.',
  inviteEmailNote: 'Pozostali współpracownicy tego haula zobaczą Twój adres e-mail.',
  inviteJoin: 'Dołącz do haula',
  inviteGone: 'To zaproszenie jest już nieważne.',
  inviteMax: 'Ten haul ma już maksymalną liczbę współpracowników.',
  inviteJoined: 'Dołączyłeś(-aś) do „{name}”',
});

const Hauls = (() => {
  const A = () => window.Accounts;
  const root = () => $('tool-hauls');
  const U = () => A().ui;
  let busy = 0; // cambios míos que aún no ha confirmado el servidor
  const api = (path, opts) => {
    const mutating = opts && opts.method && opts.method !== 'GET';
    if (mutating) busy++;
    return A().api(path, opts).finally(() => { if (mutating) busy--; });
  };
  let list = null;      // hauls de la cuenta: { id, name, count, total, unpriced, keys, cover, folders }
  let cur = null;       // haul abierto: { id, name, share, folders, items }
  let folderId = null;  // subcarpeta abierta dentro de cur (null = el haul)
  let shared = null;    // haul compartido que se está viendo (solo lectura): { sid, data }
  let query = '';
  let searchTimer = 0;

  /* ---------- Utilidades ---------- */
  const keyOf = (link) => {
    const r = parseProductLink(link);
    return r ? `${r.platform}/${r.id}` : '';
  };

  // Lo que se guarda de un producto: enlace limpio, nombre, foto y precio tal como se veían
  function snapshot(p) {
    const k = keyOf(p.link);
    if (!k) return null;
    return { k, l: `https://usfans.com/product/${k}`, n: p.unnamed ? '' : p.name, i: p.image || '', p: p.priceRaw || '' };
  }

  const itemProduct = (it, readOnly) => ({
    id: `h${it.k}`, name: it.n || t('importedProduct'), unnamed: !it.n, link: it.l, image: it.i, priceRaw: it.p,
    categories: [], sections: [], src: it.i && it.p ? 0 : 1, done: !!(it.i && it.p), _n: '', haulKey: readOnly ? null : it.k,
  });

  const errText = (e) => ({ max_hauls: t('haulMaxHauls'), max_items: t('haulMaxItems'), max_folders: t('haulMaxFolders') }[e.code] || t('errGeneric'));

  // Icono de varias personas (haul compartido), en el naranja de la web
  const PEOPLE_ICON = () => {
    const w = document.createElement('span');
    w.className = 'people-ico';
    w.innerHTML = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><circle cx="9" cy="8.2" r="3.1" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.4 19c.5-3.3 2.7-5.1 5.6-5.1s5.1 1.8 5.6 5.1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="17.2" cy="9.2" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M16.6 13.9c2.3.1 3.9 1.5 4.4 4.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';
    return w;
  };

  const money = (n) => n.toLocaleString(locale(), { style: 'currency', currency: 'EUR' });
  const countText = (n) => (n === 1 ? t('haulCount1') : t('haulCount', { n }));

  // Suma de los precios que se conocen; si falta alguno se marca con «+» (y el aviso va en el título)
  function totals(items) {
    let total = 0;
    let unpriced = 0;
    for (const it of items) {
      const n = parsePrice(it.p);
      if (Number.isNaN(n)) unpriced++; else total += n;
    }
    return { total: Math.round(total * 100) / 100, unpriced };
  }

  function summary(count, total, unpriced) {
    const el = document.createElement('span');
    el.textContent = count ? `${countText(count)} · ${money(total)}${unpriced ? '+' : ''}` : countText(0);
    if (unpriced) el.title = t('haulNoPrice', { n: unpriced });
    return el;
  }

  function toast(text) {
    let el = $('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('show'), 2200);
  }

  async function load() {
    list = (await api('/hauls')).hauls;
  }

  const spinner = () => U().el('div', { class: 'modal-spin' }, U().el('span', { class: 'spinner' }));

  // Botón que pide una segunda pulsación para confirmar
  function twice(label, action) {
    const b = U().el('button', { class: 'btn ghost', type: 'button', text: label });
    let armed = false;
    b.onclick = () => {
      if (!armed) {
        armed = true;
        b.textContent = t('confirmAgain');
        b.classList.add('danger');
        setTimeout(() => { armed = false; b.textContent = label; b.classList.remove('danger'); }, 4000);
        return;
      }
      action();
    };
    return b;
  }

  /* ---------- Añadir desde el clic derecho ---------- */
  async function addMenu(p) {
    if (!A().isLoggedIn()) return A().login(() => addMenu(p));
    const snap = snapshot(p);
    if (!snap) return;
    try { await load(); } catch { return toast(t('errGeneric')); }
    const items = list.map((h) => ({
      icon: h.keys.includes(snap.k) ? '✓' : '＋',
      label: h.name,
      action: () => pickTarget(h, snap),
    }));
    if (items.length) items.push('-');
    items.push({ icon: '＋', label: t('newHaulItem'), action: () => newHaulModal(snap) });
    showMenu(menuPos.x, menuPos.y, t('addToHaulHead'), items);
  }

  // Si el haul tiene subcarpetas, se pregunta en cuál
  function pickTarget(h, snap) {
    if (h.keys.includes(snap.k) || !h.folders.length) return toggle(h, snap, null);
    const items = [
      { icon: '↰', label: t('folderRoot'), action: () => toggle(h, snap, null) },
      ...h.folders.map((f) => ({ icon: '▸', label: f.name, action: () => toggle(h, snap, f.id) })),
    ];
    showMenu(menuPos.x, menuPos.y, h.name, items);
  }

  async function toggle(h, snap, folder) {
    try {
      if (h.keys.includes(snap.k)) {
        await api(`/hauls/${h.id}/items/${encodeURIComponent(snap.k)}`, { method: 'DELETE' });
        h.keys = h.keys.filter((x) => x !== snap.k);
        h.count--;
        toast(t('haulRemoved', { name: h.name }));
      } else {
        await api(`/hauls/${h.id}/items`, { method: 'POST', body: { items: [snap], folder } });
        h.keys.unshift(snap.k);
        h.count++;
        toast(t('haulAdded', { name: h.name }));
      }
    } catch (e) { toast(errText(e)); }
  }

  /* ---------- Ventanas: nuevo haul, nueva subcarpeta, compartir ---------- */
  function nameModal({ title, label, ph, button, onSubmit }) {
    const { el, openModal, heading, closeBtn, errBox, showErr } = U();
    const err = errBox();
    const input = el('input', { type: 'text', maxlength: '60', placeholder: ph, 'aria-label': label, required: true });
    const go = el('button', { class: 'btn modal-btn', type: 'submit', text: button });
    const form = el('form', { class: 'modal-form', novalidate: true }, el('div', { class: 'field' }, input), err, go);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;
      go.disabled = true;
      try {
        await onSubmit(input.value.trim());
        U().closeModal();
      } catch (ex) {
        showErr(err, errText(ex));
        go.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(title), form);
  }

  function newHaulModal(snap) {
    nameModal({
      title: `${t('haulsNew')} haul`, label: t('haulNameLabel'), ph: t('haulNamePh'), button: t('haulCreate'),
      onSubmit: async (name) => {
        const h = await api('/hauls', { method: 'POST', body: { name } });
        if (snap) await api(`/hauls/${h.id}/items`, { method: 'POST', body: { items: [snap] } });
        await load();
        if (snap) toast(t('haulAdded', { name: h.name }));
        else if (activeTool === 'hauls') await openHaul(h.id);
      },
    });
  }

  function newFolderModal() {
    nameModal({
      title: t('folderNew'), label: t('folderNameLabel'), ph: t('folderNamePh'), button: t('folderCreate'),
      onSubmit: async (name) => {
        const f = await api(`/hauls/${cur.id}/folders`, { method: 'POST', body: { name } });
        cur.folders.push({ id: f.id, name: f.name });
        renderHaul();
      },
    });
  }

  async function shareModal(target) {
    const { el, openModal, heading, closeBtn } = U();
    const base = target && target.id ? target : cur;
    let h;
    try { h = await api(`/hauls/${base.id}`); } catch { return toast(t('errGeneric')); }

    const draw = () => {
      if (cur && cur.id === h.id) { cur.share = h.share; cur.edit = h.edit; cur.members = h.members; paintCollab(); startPolling(); }
      const block = (mode, title, text, code, param) => {
        const box = el('div', { class: 'share-block' }, el('h3', { class: 'share-title', text: title }), el('p', { class: 'modal-note', text }));
        const key = mode === 'edit' ? 'edit' : 'share';
        if (!code) {
          box.append(el('button', {
            class: 'btn ghost share-create', type: 'button', text: `＋ ${t('shareCreate')}`,
            onclick: async () => { try { h[key] = (await api(`/hauls/${h.id}/share?mode=${mode}`, { method: 'POST' }))[key]; draw(); } catch { toast(t('errGeneric')); } },
          }));
          return box;
        }
        const url = `${location.origin}/?${param}=${code}`;
        const field = el('input', { type: 'text', readonly: true, value: url, 'aria-label': title });
        field.addEventListener('focus', () => field.select());
        const copy = el('button', { class: 'btn modal-btn', type: 'button', text: t('shareCopy') });
        copy.onclick = async () => {
          try { await navigator.clipboard.writeText(url); } catch { field.select(); document.execCommand('copy'); }
          copy.textContent = `✓ ${t('shareCopied')}`;
          setTimeout(() => { copy.textContent = t('shareCopy'); }, 1800);
        };
        const stop = twice(t('shareStop'), async () => {
          try { await api(`/hauls/${h.id}/share?mode=${mode}`, { method: 'DELETE' }); h[key] = null; draw(); } catch { toast(t('errGeneric')); }
        });
        const native = navigator.share ? el('button', { class: 'btn ghost', type: 'button', text: t('shareSystem'), onclick: () => navigator.share({ title: h.name, url }).catch(() => {}) }) : null;
        box.append(el('div', { class: 'field' }, field), copy, el('div', { class: 'modal-row spread' }, native || el('span'), stop));
        return box;
      };

      const people = el('ul', { class: 'acc-list' });
      for (const m of h.members) {
        const label = `${m.email}${m.me ? ` ${t('shareYou')}` : ''}${m.owner ? ` · ${t('shareOwner')}` : ''}`;
        const li = el('li', {}, el('span', { class: 'acc-name' }, el('b', { text: label })));
        if (!m.owner && !m.me) {
          li.append(twice(t('shareRemoveMember'), async () => {
            try { await api(`/hauls/${h.id}/members/${m.id}`, { method: 'DELETE' }); h.members = h.members.filter((x) => x.id !== m.id); draw(); } catch { toast(t('errGeneric')); }
          }));
        }
        people.append(li);
      }
      openModal(closeBtn(), ...heading(t('shareTitle'), h.name),
        el('div', { class: 'modal-form' },
          block('view', t('shareViewTitle'), t('shareViewText'), h.share, 'haul'),
          block('edit', t('shareEditTitle'), t('shareEditText'), h.edit, 'edit'),
          h.members.length > 1 ? el('h3', { class: 'modal-h3', text: t('shareCollab') }) : null,
          h.members.length > 1 ? people : null));
    };
    draw();
  }

  /* ---------- Lista de hauls ---------- */
  let pendingOpen = null;

  async function show() {
    if (shared) return renderShared();
    if (!A().isLoggedIn()) return renderLogin();
    root().replaceChildren(spinner());
    try { await load(); } catch { return renderLogin(); }
    if (pendingOpen) { const id = pendingOpen; pendingOpen = null; return openHaul(id); }
    if (cur && !list.some((h) => h.id === cur.id)) { cur = null; folderId = null; }
    if (cur) return openHaul(cur.id, folderId);
    renderList();
  }

  function renderLogin() {
    const { el } = U();
    const b = el('button', { class: 'btn', type: 'button', text: t('haulsLoginBtn'), onclick: () => A().login(show) });
    root().replaceChildren(el('div', { class: 'tool-empty' },
      el('strong', { text: t('haulsLoginTitle') }), el('span', { text: t('haulsLoginText') }), b));
  }

  function mosaic(images, wide) {
    const { el } = U();
    const cover = el('div', { class: `haul-cover${wide ? ' wide' : ''}` });
    for (let i = 0; i < 4; i++) {
      const cell = el('span', { class: 'haul-cell' });
      if (images[i]) {
        const img = el('img', { src: images[i], alt: '', loading: 'lazy', referrerpolicy: 'no-referrer' });
        img.onerror = () => img.remove();
        cell.append(img);
      }
      cover.append(cell);
    }
    return cover;
  }

  function renderList() {
    const { el } = U();
    cur = null;
    folderId = null;
    stopPolling();
    const head = el('div', { class: 'haul-head' },
      el('h2', { class: 'tool-title', text: t('haulsTitle') }),
      el('button', { class: 'btn ghost', type: 'button', text: `＋ ${t('haulsNew')}`, onclick: () => newHaulModal(null) }));
    const grid = el('div', { class: 'haul-grid' });
    for (const hl of list) {
      const isOwner = hl.owner !== false;
      const share = el('button', { class: 'haul-share', type: 'button', title: t('shareBtn'), 'aria-label': t('shareBtn'), onclick: (e) => { e.stopPropagation(); shareModal(hl); } });
      if (!isOwner) share.hidden = true;
      share.innerHTML = '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M12 15V4m0 0L8 8m4-4 4 4M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      const card = el('div', { class: 'haul-card', role: 'button', tabindex: '0', onclick: () => openHaul(hl.id) },
        mosaic(hl.cover, true),
        el('div', { class: 'haul-info' },
          el('div', { class: 'haul-text' },
            el('span', { class: 'haul-name' }, hl.name, (!isOwner || hl.collaborators) ? el('span', { class: 'haul-people', title: isOwner ? t('haulSharedBadge') : t('haulSharedWithYou'), }, PEOPLE_ICON(), hl.collaborators ? document.createTextNode(` ${hl.collaborators + 1}`) : null) : null),
            el('span', { class: 'haul-meta' }, summary(hl.count, hl.total, hl.unpriced))),
          share));
      card.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target === card) { e.preventDefault(); openHaul(hl.id); } });
      grid.append(card);
    }
    root().replaceChildren(head, list.length ? grid : el('p', { class: 'haul-empty', text: t('haulsEmpty') }));
  }

  /* ---------- Sincronización entre colaboradores ---------- */
  // Los cambios no se mandan "enteros": cada acción (añadir, quitar, mover…) es una operación suelta que el servidor aplica sobre
  // los datos de todos. Aquí solo se pregunta cada minuto si la revisión del haul ha cambiado y, si es así, se descarga el estado actual,
  // que ya incluye lo de todos.
  let pollTimer = 0;
  const POLL_MS = 60000;

  function stopPolling() { clearInterval(pollTimer); pollTimer = 0; }

  function startPolling() {
    stopPolling();
    if (!cur || !(cur.owner === false || (cur.members || []).length > 1 || cur.edit)) return; // un haul privado no necesita preguntar
    pollTimer = setInterval(checkRev, POLL_MS);
  }

  async function checkRev() {
    if (!cur || document.hidden || busy > 0 || typeof activeTool === 'undefined' || activeTool !== 'hauls' || shared) return;
    const id = cur.id;
    try {
      const r = await A().api(`/hauls/${id}/rev`);
      if (cur && cur.id === id && r.rev !== cur.rev) await refreshHaul();
    } catch (e) {
      if (e.status === 404 && cur && cur.id === id) { cur = null; folderId = null; stopPolling(); toast(t('haulGone')); show(); }
    }
  }

  async function refreshHaul() {
    const id = cur.id;
    const fresh = await A().api(`/hauls/${id}`);
    if (!cur || cur.id !== id || busy > 0) return; // el usuario acaba de hacer otro cambio: se mirará en la próxima ronda
    cur = fresh;
    if (folderId && !cur.folders.some((f) => f.id === folderId)) { folderId = null; return renderHaul(); }
    const title = document.querySelector('.haul-title');
    if (title && document.activeElement !== title) title.value = folderId ? cur.folders.find((f) => f.id === folderId).name : cur.name;
    paintBody();
    startPolling();
  }

  document.addEventListener('visibilitychange', () => { if (!document.hidden && pollTimer) checkRev(); });

  async function openHaul(id, folder = null) {
    root().replaceChildren(spinner());
    try {
      cur = await api(`/hauls/${id}`);
    } catch { return show(); }
    folderId = cur.folders.some((f) => f.id === folder) ? folder : null;
    query = '';
    renderHaul();
  }

  /* ---------- Dentro de un haul o de una subcarpeta ---------- */
  // Búsqueda en todas las spreadsheets (la verificada y las importadas), sin importar cuál esté elegida en la lista
  function searchAll(q) {
    // Un enlace de USFans, Weidian, Taobao o 1688 enseña ese producto
    const linked = linkLookup(q, () => { if (query === q) paintBody(); });
    if (linked) return [linked];
    const tokens = norm(q).split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    const seen = new Set();
    const out = [];
    for (const p of [...state.orig, ...state.imp]) {
      if (p.gone || !tokens.every((x) => p._n.includes(x))) continue;
      const k = keyOf(p.link);
      if (!k || seen.has(k)) continue;
      seen.add(k);
      out.push(p);
      if (out.length >= 40) break;
    }
    return out;
  }

  const inHaul = (k) => cur.items.some((x) => x.k === k);
  const itemsHere = () => cur.items.filter((x) => (x.f || null) === folderId);
  const folder = () => cur.folders.find((f) => f.id === folderId);

  async function toggleHere(snap, btn) {
    btn.classList.add('busy');
    try {
      if (inHaul(snap.k)) {
        await api(`/hauls/${cur.id}/items/${encodeURIComponent(snap.k)}`, { method: 'DELETE' });
        cur.items = cur.items.filter((x) => x.k !== snap.k);
      } else {
        await api(`/hauls/${cur.id}/items`, { method: 'POST', body: { items: [snap], folder: folderId } });
        cur.items.unshift({ ...snap, f: folderId });
      }
      paintBody();
    } catch (e) { toast(errText(e)); btn.classList.remove('busy'); }
  }

  async function moveItem(k, to) {
    try {
      await api(`/hauls/${cur.id}/items/move`, { method: 'POST', body: { k, folder: to } });
      const it = cur.items.find((x) => x.k === k);
      if (it) it.f = to;
      paintBody();
    } catch (e) { toast(errText(e)); }
  }

  function moveMenu(it, ev) {
    const items = [];
    if (it.f) items.push({ icon: '↰', label: t('folderRoot'), action: () => moveItem(it.k, null) });
    for (const f of cur.folders) if (f.id !== it.f) items.push({ icon: '▸', label: f.name, action: () => moveItem(it.k, f.id) });
    if (items.length) showMenu(ev.clientX, ev.clientY, t('folderMove'), items);
  }

  function actBtn(kind, label, text, onClick) {
    const b = U().el('span', { class: `card-act ${kind}`, role: 'button', tabindex: '0', 'aria-label': label, text });
    const fire = (e) => { e.preventDefault(); e.stopPropagation(); onClick(e, b); };
    b.addEventListener('click', fire);
    b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') fire(e); });
    return b;
  }

  function openCard(card, snap) {
    card.addEventListener('click', (e) => { if (isMobile()) return; e.preventDefault(); openProduct({ id: card.dataset.id, link: snap.l, name: snap.n || t('importedProduct') }); });
    return card;
  }

  function resultCard(p) {
    const snap = snapshot(p);
    if (!snap) return null;
    const card = openCard(cardFor(p), snap);
    const on = inHaul(snap.k);
    const b = actBtn(`toggle${on ? ' on' : ''}`, t(on ? 'haulRemove' : 'haulAdd'), on ? '✓' : '＋', (e, btn) => toggleHere(snap, btn));
    card.append(b);
    return card;
  }

  function itemCard(it) {
    const card = openCard(cardFor(itemProduct(it)), it);
    if (cur.folders.length) {
      const canMove = cur.folders.length > (it.f ? 0 : 0);
      if (canMove) card.append(actBtn('move', t('folderMove'), '▸', (e) => moveMenu(it, e)));
    }
    card.append(actBtn('remove', t('haulRemove'), '×', (e, btn) => toggleHere(it, btn)));
    return card;
  }

  function folderTile(f) {
    const { el } = U();
    const its = cur.items.filter((x) => x.f === f.id);
    const { total, unpriced } = totals(its);
    const tile = el('button', { class: 'card folder-card', type: 'button', onclick: () => { folderId = f.id; query = ''; renderHaul(); } },
      el('div', { class: 'thumb' }, mosaic(its.map((x) => x.i).filter(Boolean))),
      el('div', { class: 'meta' }, el('span', { class: 'name', text: f.name }), el('span', { class: 'price' }, summary(its.length, total, unpriced))));
    return tile;
  }

  function addFolderTile() {
    const { el } = U();
    const tile = el('button', { class: 'card add-card', type: 'button', onclick: newFolderModal },
      el('div', { class: 'thumb' }));
    tile.querySelector('.thumb').innerHTML = '<svg viewBox="0 0 24 24" width="72" height="72" aria-hidden="true"><path d="M3.5 8.2A2.2 2.2 0 0 1 5.7 6h3.2c.5 0 1 .2 1.3.6l.8 1c.3.4.8.6 1.3.6h5.9a2.2 2.2 0 0 1 2.2 2.2v6.4a2.2 2.2 0 0 1-2.2 2.2H5.7a2.2 2.2 0 0 1-2.2-2.2z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M12 11.2v4.6M9.7 13.5h4.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>';
    tile.append(el('div', { class: 'meta' }, el('span', { class: 'name', text: t('folderAdd') })));
    return tile;
  }

  function renderHaul() {
    const { el } = U();
    const inFolder = !!folderId;
    const here = inFolder ? folder() : null;

    const back = el('button', { class: 'haul-back', type: 'button', onclick: () => { if (inFolder) { folderId = null; query = ''; renderHaul(); } else { cur = null; show(); } } });
    back.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    back.append(document.createTextNode(inFolder ? cur.name : t('haulBack')));

    const title = el('input', { class: 'haul-title', type: 'text', value: inFolder ? here.name : cur.name, maxlength: '60', 'aria-label': t('haulRename') });
    title.addEventListener('keydown', (e) => { if (e.key === 'Enter') title.blur(); });
    title.addEventListener('change', async () => {
      const v = title.value.trim();
      const old = inFolder ? here.name : cur.name;
      if (!v) { title.value = old; return; }
      try {
        await api(inFolder ? `/hauls/${cur.id}/folders/${folderId}` : `/hauls/${cur.id}`, { method: 'PUT', body: { name: v } });
        if (inFolder) here.name = v; else cur.name = v;
      } catch { title.value = old; }
    });

    const del = inFolder
      ? twice(t('folderDelete'), async () => {
        try { await api(`/hauls/${cur.id}/folders/${folderId}`, { method: 'DELETE' }); await openHaul(cur.id); } catch { toast(t('errGeneric')); }
      })
      : cur.owner === false
        ? twice(t('haulLeave'), async () => {
          try { await api(`/hauls/${cur.id}/members/me`, { method: 'DELETE' }); cur = null; stopPolling(); toast(t('haulLeaveDone')); show(); } catch { toast(t('errGeneric')); }
        })
        : twice(t('haulDelete'), async () => {
          try { await api(`/hauls/${cur.id}`, { method: 'DELETE' }); cur = null; stopPolling(); show(); } catch { toast(t('errGeneric')); }
        });
    const share = inFolder || cur.owner === false ? null : el('button', { class: 'btn ghost', type: 'button', onclick: () => shareModal(cur) });
    if (share) share.innerHTML = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M12 15V4m0 0L8 8m4-4 4 4M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    if (share) share.append(document.createTextNode(` ${t('shareBtn')}`));

    const search = el('input', { type: 'search', id: 'haulSearch', placeholder: t('haulSearch'), 'aria-label': t('haulSearch'), autocomplete: 'off', spellcheck: 'false' });
    search.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => { query = search.value; paintBody(); }, 150);
    });
    const wrap = el('div', { class: 'search-wrap' }, search);
    wrap.insertAdjacentHTML('afterbegin', '<svg class="search-ico" viewBox="0 0 24 24" width="16" height="16"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>');

    root().replaceChildren(
      el('div', { class: 'haul-bar' }, back, el('span', { class: 'haul-actions' }, share, del)),
      title,
      el('p', { class: 'haul-total', id: 'haulTotal' }),
      el('p', { class: 'haul-collab', id: 'haulCollab', hidden: true }),
      wrap,
      el('div', { class: 'haul-body', id: 'haulBody' }));
    paintBody();
    startPolling();
  }

  // Quién más trabaja en este haul
  function paintCollab() {
    const el = $('haulCollab');
    if (!el || !cur) return;
    el.hidden = (cur.members || []).length < 2;
    el.textContent = el.hidden ? '' : t('haulCollab', { names: cur.members.map((m) => `${m.email}${m.me ? ` ${t('shareYou')}` : ''}`).join(', ') });
  }

  function paintBody() {
    const { el } = U();
    const body = $('haulBody');
    if (!body) return;
    const keep = body.scrollTop;
    body.replaceChildren();

    const scope = folderId ? cur.items.filter((x) => x.f === folderId) : cur.items;
    const { total, unpriced } = totals(scope);
    $('haulTotal').replaceChildren(summary(scope.length, total, unpriced));
    paintCollab();

    if (query.trim()) {
      const results = searchAll(query);
      body.append(el('h3', { class: 'haul-sub', text: t('haulResults') }));
      if (!results.length) body.append(el('p', { class: 'haul-empty', text: t('haulNoResults') }));
      const g = el('div', { class: 'grid' });
      for (const p of results) { const c = resultCard(p); if (c) g.append(c); }
      body.append(g);
    }

    if (!folderId) {
      body.append(el('h3', { class: 'haul-sub', text: t('haulFolders') }));
      const fg = el('div', { class: 'grid' }, addFolderTile(), ...cur.folders.map(folderTile));
      body.append(fg);
    }

    const mine = itemsHere();
    body.append(el('h3', { class: 'haul-sub', text: `${t('haulProducts')} · ${mine.length}` }));
    if (!mine.length) body.append(el('p', { class: 'haul-empty', text: t('haulEmptyItems') }));
    const g = el('div', { class: 'grid' });
    for (const it of mine) g.append(itemCard(it));
    body.append(g);
    body.scrollTop = keep;
  }

  /* ---------- Haul compartido (solo lectura) ---------- */
  async function showShared(sid) {
    shared = { sid, data: null };
    if (typeof setDrawer === 'function') setDrawer(true);
    showTool('hauls');
  }

  async function renderShared() {
    const { el } = U();
    const sh = shared;
    if (!sh.data) {
      root().replaceChildren(spinner());
      try { sh.data = await api(`/shared/${sh.sid}`); } catch { sh.data = { gone: true }; }
    }
    const close = () => { shared = null; try { history.replaceState(null, '', location.pathname); } catch { /* sin historial */ } show(); };
    if (sh.data.gone) {
      return root().replaceChildren(el('div', { class: 'tool-empty' },
        el('strong', { text: t('sharedBadge') }), el('span', { text: t('sharedGone') }),
        el('button', { class: 'btn', type: 'button', text: t('sharedClose'), onclick: close })));
    }
    const d = sh.data;
    const { total, unpriced } = totals(d.items);
    const save = el('button', { class: 'btn', type: 'button', text: t('sharedSave') });
    save.onclick = async () => {
      if (!A().isLoggedIn()) return A().login(() => save.click());
      save.disabled = true;
      try {
        const r = await api(`/shared/${sh.sid}/copy`, { method: 'POST' });
        toast(t('sharedSaved'));
        shared = null;
        try { history.replaceState(null, '', location.pathname); } catch { /* sin historial */ }
        cur = null;
        await load();
        await openHaul(r.id);
      } catch (e) { toast(errText(e)); save.disabled = false; }
    };
    const body = el('div', { class: 'haul-body' });
    const section = (title, its) => {
      if (!its.length) return;
      if (title) body.append(el('h3', { class: 'haul-sub', text: title }));
      const g = el('div', { class: 'grid' });
      for (const it of its) g.append(openCard(cardFor(itemProduct(it, true)), it));
      body.append(g);
    };
    section('', d.items.filter((x) => !x.f));
    for (const f of d.folders) section(f.name, d.items.filter((x) => x.f === f.id));
    root().replaceChildren(
      el('div', { class: 'haul-bar' }, el('span', { class: 'haul-badge', text: t('sharedBadge') }), el('button', { class: 'btn ghost', type: 'button', text: t('sharedClose'), onclick: close })),
      el('h2', { class: 'haul-title static', text: d.name }),
      el('p', { class: 'haul-total' }, summary(d.items.length, total, unpriced)),
      el('div', { class: 'haul-save' }, save),
      body);
  }

  /* ---------- Fotos y precios que se completan al ver el producto ---------- */
  const pending = new Map();
  let flushTimer = 0;
  function enriched(p) {
    if (!p.haulKey || !cur) return;
    const it = cur.items.find((x) => x.k === p.haulKey);
    if (!it) return;
    it.n = p.unnamed ? '' : p.name;
    it.i = p.image || it.i;
    it.p = p.priceRaw || it.p;
    pending.set(it.k, { l: it.l, n: it.n, i: it.i, p: it.p });
    clearTimeout(flushTimer);
    flushTimer = setTimeout(flush, 2500);
  }
  async function flush() {
    if (!cur || !pending.size) return;
    const items = [...pending.values()];
    pending.clear();
    try { await api(`/hauls/${cur.id}/items`, { method: 'POST', body: { items, update: true } }); } catch { /* se reintentará la próxima vez */ }
    if ($('haulTotal')) {
      const scope = folderId ? cur.items.filter((x) => x.f === folderId) : cur.items;
      const { total, unpriced } = totals(scope);
      $('haulTotal').replaceChildren(summary(scope.length, total, unpriced));
    }
  }

  // Al iniciar o cerrar sesión se descarta lo cargado
  function onSession() {
    list = null;
    cur = null;
    folderId = null;
    stopPolling();
    if (typeof activeTool !== 'undefined' && activeTool === 'hauls') show();
  }

  async function joinInvite(code) {
    const { el, openModal, heading, closeBtn, errBox, showErr } = U();
    let info;
    try { info = await A().api(`/invite/${code}`); } catch { return toast(t('inviteGone')); }
    const err = errBox();
    const go = el('button', { class: 'btn modal-btn', type: 'submit', text: t('inviteJoin') });
    const form = el('form', { class: 'modal-form', novalidate: true }, el('p', { class: 'modal-note', text: t('inviteEmailNote') }), err, go);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!A().isLoggedIn()) return A().login(() => joinInvite(code));
      go.disabled = true;
      try {
        const r = await api(`/invite/${code}/join`, { method: 'POST', body: {} });
        U().closeModal();
        try { history.replaceState(null, '', location.pathname); } catch { /* sin historial */ }
        cur = null;
        pendingOpen = r.id;
        if (typeof setDrawer === 'function') setDrawer(true);
        showTool('hauls');
        toast(t('inviteJoined', { name: r.name }));
      } catch (ex) {
        showErr(err, ex.code === 'max_editors' ? t('inviteMax') : t('inviteGone'));
        go.disabled = false;
      }
    });
    openModal(closeBtn(), ...heading(t('inviteTitle', { name: info.name }), t('inviteText')), form);
  }

  // Enlaces compartidos: ?haul=ID (solo ver) y ?edit=CODIGO (invitación a editar)
  function start() {
    if (!CONFIG.accountApi) return;
    const code = new URLSearchParams(location.search).get('edit');
    if (code && /^[\w-]{8,24}$/.test(code)) joinInvite(code);
    const sid = new URLSearchParams(location.search).get('haul');
    if (sid && /^[\w-]{8,24}$/.test(sid)) showShared(sid);
  }

  return { show, addMenu, onSession, enriched, start };
})();
window.Hauls = Hauls;
