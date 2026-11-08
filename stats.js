/* ============================================================
   Estadísticas anónimas: cuenta las visitas, cuánta gente sigue en la web y qué productos se abren (y con qué agente).
   Sin cookies y sin guardar la IP ni ningún identificador del navegador (ver «Estadísticas anónimas» en la API).
   No cuenta robots, ni al administrador, ni el trabajo en local.
   ============================================================ */
(() => {
  const noop = { click() {} };
  window.Stats = noop;
  const API = typeof CONFIG !== 'undefined' && CONFIG.accountApi;
  if (!API || ['localhost', '127.0.0.1'].includes(location.hostname) || navigator.webdriver) return;
  try { if (localStorage.getItem('adminToken')) return; } catch { /* sin almacenamiento */ }

  const post = (body) => {
    fetch(`${API}/t`, { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'text/plain' }, keepalive: true, credentials: 'omit' }).catch(() => {});
  };
  const send = (k) => post({ k });

  // Una visita por pestaña y sesión (recargar no cuenta otra)
  try {
    if (!sessionStorage.getItem('stv')) { sessionStorage.setItem('stv', '1'); send('v'); }
  } catch { send('v'); }

  // «Sigo aquí»: cada 5 minutos mientras la pestaña está a la vista y como mucho durante una hora (las peticiones al servidor son limitadas)
  let beats = 0;
  const beat = () => { if (!document.hidden && beats < 12) { beats++; send('h'); } };
  beat();
  setInterval(beat, 300000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && beats === 0) beat(); });

  // Clics en productos: se juntan y se envían por lotes (cada 15 s, o al irse de la página) para gastar pocas peticiones
  const queue = [];
  const seen = new Set();
  let timer = 0;
  const flush = () => {
    clearTimeout(timer);
    timer = 0;
    if (!queue.length) return;
    post({ k: 'c', items: queue.splice(0, 10) });
    if (queue.length) timer = setTimeout(flush, 2000);
  };
  document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); });
  addEventListener('pagehide', flush);

  window.Stats = {
    click(product, agent) {
      if (!/^[123]\/[\w-]{4,80}$/.test(product) || seen.has(product) || seen.size >= 60) return;
      seen.add(product);
      queue.push({ p: product, a: agent });
      if (!timer) timer = setTimeout(flush, 15000);
    },
  };
})();
