/* Portada: elegir agente, tema claro/oscuro y reenvío de enlaces antiguos. Sin dependencias. */
(() => {
  const root = document.documentElement;
  const app = document.body.dataset.app || '/app/';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Los enlaces compartidos de antes (?haul=…, ?edit=…) apuntaban a la raíz: ahora van a la app
  try {
    const q = new URLSearchParams(location.search);
    if (q.has('haul') || q.has('edit')) { location.replace(app + location.search + location.hash); return; }
  } catch { /* sin soporte */ }

  // Tema: el mismo ajuste que usa la app
  const themeBtn = document.getElementById('themeToggle');
  themeBtn?.addEventListener('click', () => {
    const dark = root.dataset.theme === 'dark';
    if (dark) delete root.dataset.theme; else root.dataset.theme = 'dark';
    try { localStorage.setItem('theme', dark ? 'light' : 'dark'); } catch { /* sin almacenamiento */ }
    document.getElementById('themeColor')?.setAttribute('content', dark ? '#f5f5f7' : '#000000');
  });
  if (root.dataset.theme === 'dark') document.getElementById('themeColor')?.setAttribute('content', '#000000');

  // Agente: se guarda la elección y se entra en la app (la dirección también lleva ?agent=, por si el navegador no guarda datos)
  const list = document.querySelector('.agents');
  if (!list) return;
  list.querySelectorAll('.agent').forEach((a) => {
    a.addEventListener('click', (ev) => {
      if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      try { localStorage.setItem('agent', a.dataset.agent); } catch { /* sin almacenamiento */ }
      if (reduce) return;
      ev.preventDefault();
      list.classList.add('leaving');
      a.classList.add('picked');
      setTimeout(() => { location.href = a.href; }, 240);
    });
  });
  // Si se vuelve con «atrás», la portada aparece como estaba
  addEventListener('pageshow', () => {
    list.classList.remove('leaving');
    list.querySelectorAll('.picked').forEach((x) => x.classList.remove('picked'));
  });
})();
