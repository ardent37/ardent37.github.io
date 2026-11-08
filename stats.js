/* ============================================================
   Estadísticas anónimas: cuenta las visitas y cuánta gente sigue en la web.
   Sin cookies y sin guardar la IP ni ningún identificador del navegador (ver «Estadísticas anónimas» en la API).
   No cuenta robots, ni al administrador, ni el trabajo en local.
   ============================================================ */
(() => {
  const API = typeof CONFIG !== 'undefined' && CONFIG.accountApi;
  if (!API || ['localhost', '127.0.0.1'].includes(location.hostname) || navigator.webdriver) return;
  try { if (localStorage.getItem('adminToken')) return; } catch { /* sin almacenamiento */ }

  const send = (k) => {
    fetch(`${API}/t`, { method: 'POST', body: JSON.stringify({ k }), headers: { 'Content-Type': 'text/plain' }, keepalive: true, credentials: 'omit' }).catch(() => {});
  };

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
})();
