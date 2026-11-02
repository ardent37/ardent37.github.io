/* ============================================================
   CONFIGURACIÓN — lo único que tendrás que tocar
   ============================================================ */
const CONFIG = {
  brand: 'Salty',
  refCode: 'GRAS35',
  turnstileKey: '0x4AAAAAAFwlhM3bSHPedS_a',   // clave pública de Cloudflare Turnstile (comprobación anti-robots del registro)

  // URL del CSV publicado de Google Sheets
  // (Archivo → Compartir → Publicar en la Web → pestaña de productos → CSV).
  // Mientras esté vacía se usan productos de ejemplo.
  dataUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRmR35JwYOSjNTmyIFuODMD8qeoBPNAHn9vk6LUPlH0isNpkYmm1PPYNv-Yb7__F_YPXilIkhFhH1ln/pub?gid=1622828666&single=true&output=csv',

  // Nombres posibles de cada columna en la hoja (sin importar mayúsculas ni tildes).
  columns: {
    name: ['nombre', 'name', 'producto', 'product', 'item', 'titulo', 'title'],
    price: ['precio', 'price', 'pvp', 'coste', 'cost'],
    priceAlt: ['precio usd', 'price usd', 'usd'],   // se usa si no hay precio principal
    link: ['enlace', 'link', 'url', 'usfans', 'usfans link'],
    image: ['imagen', 'image', 'img', 'foto', 'photo', 'picture', 'image url'],
    category: ['categoria', 'category', 'tipo', 'type'],
    section: ['seccion', 'section', 'marca', 'brand'],   // solo se usa en el buscador
    status: ['estado', 'status'],   // las filas "no disponible" no se muestran
  },

  // Nombre que se muestra para cada categoría de la hoja: [nombre en la hoja, español, inglés].
  // Las que no estén aquí salen tal cual. Se compara por el principio del nombre,
  // así "Trending Now 冬" y "Trending Now 夏" van a "Tendencias". El orden de esta lista es el de los botones.
  categoryLabels: [
    ['Trending Now', 'Tendencias', 'Trending', 'Na czasie'],
    ['Update', 'Novedades', 'New in', 'Nowości'],
    ['SHOES', 'Calzado', 'Shoes', 'Obuwie'],
    ['T shirt and shorts', 'Camisetas y shorts', 'T-shirts & shorts', 'Koszulki i szorty'],
    ['Hoodies and Pants', 'Sudaderas y pantalones', 'Hoodies & pants', 'Bluzy i spodnie'],
    ['Coats and Jackets', 'Abrigos y chaquetas', 'Coats & jackets', 'Płaszcze i kurtki'],
    ['Accessories', 'Accesorios', 'Accessories', 'Akcesoria'],
    ['Electronic products', 'Electrónica', 'Electronics', 'Elektronika'],
    ["Women's Spreadsheet", 'Mujer', 'Women', 'Damskie'],
  ],


  currency: '€',     // símbolo si el precio de la hoja es solo un número
  pageSize: 60,      // productos que se pintan por tanda al hacer scroll
  // API de cuentas, importación y hauls (Cloudflare Workers). En local se usa la API de este ordenador; vacío = la función no aparece.
  accountApi: ['localhost', '127.0.0.1'].includes(location.hostname) ? 'http://localhost:8787' : 'https://usfans-api.ardentcone.workers.dev',
  maxTabs: 10,       // al pasarse, se cierra la pestaña inactiva más antigua
};

/* ============================================================
   TEXTOS EN CADA IDIOMA
   ============================================================ */
const I18N = {
  es: {
    language: 'Idioma',
    products: 'Productos',
    search: 'Busca cualquier producto',
    searchLabel: 'Buscar productos',
    all: 'Todo',
    categories: 'Categorías',
    prevCats: 'Ver categorías anteriores',
    nextCats: 'Ver más categorías',
    sortLabel: 'Ordenar',
    sortDefault: 'Destacados',
    sortPriceAsc: 'Precio ↑',
    sortPriceDesc: 'Precio ↓',
    sortName: 'Nombre A–Z',
    loading: 'Cargando productos…',
    count: '{n} productos',
    count1: '1 producto',
    countOf: '{n} de {total} productos',
    sample: ' · datos de ejemplo',
    loadError: 'No se pudieron cargar los productos.',
    emptyTitle: 'Sin resultados',
    emptyText: 'Prueba con otra palabra o quita el filtro de categoría.',
    showProducts: 'Mostrar productos',
    themeToDark: 'Cambiar a tema oscuro',
    themeToLight: 'Cambiar a tema claro',
    tabsLabel: 'Pestañas',
    newTab: 'Nueva pestaña',
    closeTab: 'Cerrar pestaña',
    homeTitle: 'Registro en {agent}',
    urlPlaceholder: 'Escribe o pega un enlace de USFans, Weidian, Taobao o 1688',
    urlOnlyUsfans: 'Solo se pueden abrir enlaces de USFans, Weidian, Taobao o 1688.',
    urlNoConvert: 'No se puede convertir ese enlace a USFans (el ID del producto está cifrado). Búscalo en USFans.',
    tabUsfans: 'USFans',
    tabProduct: 'Producto',
    openInApp: 'Abrir en la app de {agent}',
    moreOptions: 'Más opciones',
    offerTitle: 'Un 40 % de descuento en tu envío',
    offerText: 'Regístrate ahora en USFans con nuestro código y consigue tu cupón del 40 % de descuento en el envío.',
    offerAccept: 'Obtener mi cupón',
    offerLater: 'Ahora no',
    offerBack: 'Volver a las herramientas',
    offerRegTitle: 'Registro en USFans',
    offerBtnTitle: 'Cupón del 40 % en el envío',
    colsLabel: 'Productos por fila',
    cols2: '2 columnas',
    cols3: '3 columnas',
    cols4: '4 columnas',
    linkLooking: 'Buscando en USFans…',
    linkUnavailable: 'No disponible en USFans',
    goHome: '← Registro',
    openBrowser: 'Abrir en navegador',
    hint: 'Haz clic derecho en un producto para ver más opciones. Si algo no carga o no puedes pagar, ábrela en tu navegador con el icono de la barra de direcciones.',
    openHere: 'Abrir aquí',
    openNewTab: 'Abrir en pestaña nueva',
    openNewTabFocus: 'Abrir en pestaña nueva y verla',
    openInBrowser: 'Abrir en el navegador',
    copyLink: 'Copiar enlace',
    kbdCtrlClick: 'Ctrl+clic',
    reload: 'Recargar',
    duplicate: 'Duplicar',
    closeOthers: 'Cerrar otras pestañas',
    kbdMiddleClick: 'Clic central',
    toolQc: 'Fotos QC',
    qcPlaceholder: 'Pega el enlace del producto',
    qcSearch: 'Buscar QC',
    qcHelp: 'Pega un enlace de Taobao, Weidian, 1688 o de cualquier agente. Las fotos QC son de FinderQC.',
    qcOpenSource: 'Abrir en FinderQC ↗',
    qcShowing: 'Fotos QC de FinderQC · {store} {id}',
    qcInvalidTitle: 'No reconozco ese enlace',
    qcInvalidText: 'Prueba con un enlace de producto de Taobao, Weidian, 1688 o de un agente como USFans, CNFans o KakoBuy.',
    qcEncryptedTitle: 'Este enlace no incluye el ID real del producto',
    qcUsfansTitle: 'Fotos QC de USFans · {n}',
    qcUsfansNote: 'Este enlace usa un código de USFans, así que solo podemos mostrar las fotos QC que tiene USFans de este producto.',
    qcUsfansEmptyTitle: 'USFans aún no tiene fotos QC de este producto',
    qcUsfansEmptyText: 'Nadie lo ha pedido todavía por USFans. Con un enlace con el ID numérico de Taobao (id=1234567890) podemos buscar en todos los agentes.',
    qcLoading: 'Buscando fotos QC…',
    qcErrorTitle: 'No se pudo consultar',
    qcErrorText: 'Inténtalo de nuevo en unos segundos.',
    qcEncryptedText: 'Taobao y algunos agentes ocultan el ID tras un código cifrado que no se puede traducir desde fuera. Abre el producto en Taobao y pega el enlace que tenga el ID numérico (id=1234567890).',
    qcOpenProduct: 'Abrir producto',
    seoTitle: 'Chinaside | Agents, Spreadsheets, QC',
    seoDescription: 'Busca entre miles de productos de Taobao, Weidian y 1688, consulta fotos QC y compra con USFans sin salir de la web.',
    seoH1: 'Agente de compras en China: busca productos, mira fotos QC y compra con USFans',
    viewQc: 'Ver fotos QC',
    coachOpenTitle: '← Pulsa la pestaña',
    coachOpenText: 'para ver los productos y las herramientas.',
    backToUsfans: 'Volver a USFans',
    coachSkip: 'Saltar',
    spreadsheet: 'Spreadsheet',
    resizePanel: 'Arrastra para cambiar el ancho (doble clic: tamaño original)',
    expandPanel: 'Expandir panel',
    restorePanel: 'Volver a mostrar USFans',
    close: 'Cerrar',
    prevPhoto: 'Foto anterior',
    nextPhoto: 'Foto siguiente',
  },
  en: {
    language: 'Language',
    products: 'Products',
    search: 'Search any product',
    searchLabel: 'Search products',
    all: 'All',
    categories: 'Categories',
    prevCats: 'Previous categories',
    nextCats: 'More categories',
    sortLabel: 'Sort',
    sortDefault: 'Featured',
    sortPriceAsc: 'Price ↑',
    sortPriceDesc: 'Price ↓',
    sortName: 'Name A–Z',
    loading: 'Loading products…',
    count: '{n} products',
    count1: '1 product',
    countOf: '{n} of {total} products',
    sample: ' · sample data',
    loadError: 'Products could not be loaded.',
    emptyTitle: 'No results',
    emptyText: 'Try another word or clear the category filter.',
    showProducts: 'Show products',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    tabsLabel: 'Tabs',
    newTab: 'New tab',
    closeTab: 'Close tab',
    homeTitle: 'Sign up on {agent}',
    urlPlaceholder: 'Type or paste a USFans, Weidian, Taobao or 1688 link',
    urlOnlyUsfans: 'Only USFans, Weidian, Taobao or 1688 links can be opened.',
    urlNoConvert: 'That link can’t be converted to USFans (the product ID is encrypted). Look it up on USFans.',
    tabUsfans: 'USFans',
    tabProduct: 'Product',
    openInApp: 'Open in the {agent} app',
    moreOptions: 'More options',
    offerTitle: '40% off your shipping',
    offerText: 'Sign up to USFans now with our code and get your coupon for 40% off shipping.',
    offerAccept: 'Get my coupon',
    offerLater: 'Not now',
    offerBack: 'Back to the tools',
    offerRegTitle: 'Sign up to USFans',
    offerBtnTitle: '40% shipping coupon',
    colsLabel: 'Products per row',
    cols2: '2 columns',
    cols3: '3 columns',
    cols4: '4 columns',
    linkLooking: 'Looking it up on USFans…',
    linkUnavailable: 'Not available on USFans',
    goHome: '← Sign up',
    openBrowser: 'Open in browser',
    hint: 'Right-click a product for more options. If something doesn’t load or you can’t pay, open the page in your browser with the icon in the address bar.',
    openHere: 'Open here',
    openNewTab: 'Open in new tab',
    openNewTabFocus: 'Open in new tab and switch to it',
    openInBrowser: 'Open in browser',
    copyLink: 'Copy link',
    kbdCtrlClick: 'Ctrl+click',
    reload: 'Reload',
    duplicate: 'Duplicate',
    closeOthers: 'Close other tabs',
    kbdMiddleClick: 'Middle click',
    toolQc: 'QC photos',
    qcPlaceholder: 'Paste the product link',
    qcSearch: 'Find QC',
    qcHelp: 'Paste a Taobao, Weidian, 1688 or any agent link. QC photos come from FinderQC.',
    qcOpenSource: 'Open in FinderQC ↗',
    qcShowing: 'QC photos from FinderQC · {store} {id}',
    qcInvalidTitle: 'That link isn’t recognised',
    qcInvalidText: 'Try a product link from Taobao, Weidian, 1688 or an agent such as USFans, CNFans or KakoBuy.',
    qcEncryptedTitle: 'This link doesn’t include the real product ID',
    qcUsfansTitle: 'QC photos from USFans · {n}',
    qcUsfansNote: 'This link uses a USFans code, so we can only show the QC photos USFans has for this product.',
    qcUsfansEmptyTitle: 'USFans has no QC photos for this product yet',
    qcUsfansEmptyText: 'Nobody has ordered it through USFans yet. With a link that has the numeric Taobao ID (id=1234567890) we can search across all agents.',
    qcLoading: 'Looking for QC photos…',
    qcErrorTitle: 'Couldn’t check',
    qcErrorText: 'Please try again in a few seconds.',
    qcEncryptedText: 'Taobao and some agents hide the ID behind an encrypted code that can’t be translated from outside. Open the product on Taobao and paste the link that has the numeric ID (id=1234567890).',
    qcOpenProduct: 'Open product',
    seoTitle: 'Chinaside | Agents, Spreadsheets, QC',
    seoDescription: 'Search thousands of Taobao, Weidian and 1688 products, check QC photos and buy with USFans without leaving the site.',
    seoH1: 'China shopping agent: search products, check QC photos and buy with USFans',
    viewQc: 'View QC photos',
    coachOpenTitle: '← Tap the tab',
    coachOpenText: 'to see the products and tools.',
    backToUsfans: 'Back to USFans',
    coachSkip: 'Skip',
    spreadsheet: 'Spreadsheet',
    resizePanel: 'Drag to resize (double-click: default size)',
    expandPanel: 'Expand panel',
    restorePanel: 'Show USFans again',
    close: 'Close',
    prevPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
  },
  pl: {
    language: 'Język',
    products: 'Produkty',
    search: 'Szukaj dowolnego produktu',
    searchLabel: 'Szukaj produktów',
    all: 'Wszystko',
    categories: 'Kategorie',
    prevCats: 'Poprzednie kategorie',
    nextCats: 'Więcej kategorii',
    sortLabel: 'Sortuj',
    sortDefault: 'Polecane',
    sortPriceAsc: 'Cena ↑',
    sortPriceDesc: 'Cena ↓',
    sortName: 'Nazwa A–Z',
    loading: 'Wczytywanie produktów…',
    count: '{n} produktów',
    count1: '1 produkt',
    countOf: '{n} z {total} produktów',
    sample: ' · dane przykładowe',
    loadError: 'Nie udało się wczytać produktów.',
    emptyTitle: 'Brak wyników',
    emptyText: 'Spróbuj innego słowa lub usuń filtr kategorii.',
    showProducts: 'Pokaż produkty',
    themeToDark: 'Przełącz na ciemny motyw',
    themeToLight: 'Przełącz na jasny motyw',
    tabsLabel: 'Karty',
    newTab: 'Nowa karta',
    closeTab: 'Zamknij kartę',
    homeTitle: 'Zarejestruj się w {agent}',
    urlPlaceholder: 'Wpisz lub wklej link z USFans, Weidian, Taobao lub 1688',
    urlOnlyUsfans: 'Można otwierać tylko linki z USFans, Weidian, Taobao lub 1688.',
    urlNoConvert: 'Tego linku nie da się zamienić na USFans (identyfikator produktu jest zaszyfrowany). Wyszukaj go w USFans.',
    tabUsfans: 'USFans',
    tabProduct: 'Produkt',
    openInApp: 'Otwórz w aplikacji {agent}',
    moreOptions: 'Więcej opcji',
    offerTitle: '40% zniżki na wysyłkę',
    offerText: 'Zarejestruj się teraz w USFans z naszym kodem i odbierz kupon na 40% zniżki na wysyłkę.',
    offerAccept: 'Odbierz kupon',
    offerLater: 'Nie teraz',
    offerBack: 'Wróć do narzędzi',
    offerRegTitle: 'Rejestracja w USFans',
    offerBtnTitle: 'Kupon 40% na wysyłkę',
    colsLabel: 'Produktów w rzędzie',
    cols2: '2 kolumny',
    cols3: '3 kolumny',
    cols4: '4 kolumny',
    linkLooking: 'Szukam w USFans…',
    linkUnavailable: 'Niedostępny w USFans',
    goHome: '← Rejestracja',
    openBrowser: 'Otwórz w przeglądarce',
    hint: 'Kliknij produkt prawym przyciskiem, aby zobaczyć więcej opcji. Jeśli coś się nie wczytuje lub nie możesz zapłacić, otwórz stronę w przeglądarce ikoną na pasku adresu.',
    openHere: 'Otwórz tutaj',
    openNewTab: 'Otwórz w nowej karcie',
    openNewTabFocus: 'Otwórz w nowej karcie i przejdź do niej',
    openInBrowser: 'Otwórz w przeglądarce',
    copyLink: 'Kopiuj link',
    kbdCtrlClick: 'Ctrl+klik',
    reload: 'Odśwież',
    duplicate: 'Duplikuj',
    closeOthers: 'Zamknij pozostałe karty',
    kbdMiddleClick: 'Środkowy przycisk',
    toolQc: 'Zdjęcia QC',
    qcPlaceholder: 'Wklej link do produktu',
    qcSearch: 'Znajdź QC',
    qcHelp: 'Wklej link z Taobao, Weidian, 1688 lub dowolnego agenta. Zdjęcia QC pochodzą z FinderQC.',
    qcOpenSource: 'Otwórz w FinderQC ↗',
    qcShowing: 'Zdjęcia QC z FinderQC · {store} {id}',
    qcInvalidTitle: 'Nie rozpoznajemy tego linku',
    qcInvalidText: 'Spróbuj z linkiem do produktu z Taobao, Weidian, 1688 lub od agenta, np. USFans, CNFans albo KakoBuy.',
    qcEncryptedTitle: 'Ten link nie zawiera prawdziwego identyfikatora produktu',
    qcUsfansTitle: 'Zdjęcia QC z USFans · {n}',
    qcUsfansNote: 'Ten link zawiera kod USFans, więc możemy pokazać tylko zdjęcia QC, które USFans ma dla tego produktu.',
    qcUsfansEmptyTitle: 'USFans nie ma jeszcze zdjęć QC tego produktu',
    qcUsfansEmptyText: 'Nikt jeszcze nie zamówił go przez USFans. Mając link z numerycznym ID z Taobao (id=1234567890), możemy szukać u wszystkich agentów.',
    qcLoading: 'Szukam zdjęć QC…',
    qcErrorTitle: 'Nie udało się sprawdzić',
    qcErrorText: 'Spróbuj ponownie za kilka sekund.',
    qcEncryptedText: 'Taobao i niektórzy agenci ukrywają ID za zaszyfrowanym kodem, którego nie da się odczytać z zewnątrz. Otwórz produkt na Taobao i wklej link z numerycznym ID (id=1234567890).',
    qcOpenProduct: 'Otwórz produkt',
    seoTitle: 'Chinaside | Agents, Spreadsheets, QC',
    seoDescription: 'Przeszukuj tysiące produktów z Taobao, Weidian i 1688, sprawdzaj zdjęcia QC i kupuj z USFans bez wychodzenia ze strony.',
    seoH1: 'Agent zakupowy w Chinach: szukaj produktów, oglądaj zdjęcia QC i kupuj z USFans',
    viewQc: 'Zobacz zdjęcia QC',
    coachOpenTitle: '← Dotknij karty',
    coachOpenText: 'aby zobaczyć produkty i narzędzia.',
    backToUsfans: 'Wróć do USFans',
    coachSkip: 'Pomiń',
    spreadsheet: 'Spreadsheet',
    resizePanel: 'Przeciągnij, aby zmienić rozmiar (dwuklik: domyślny rozmiar)',
    expandPanel: 'Rozwiń panel',
    restorePanel: 'Pokaż ponownie USFans',
    close: 'Zamknij',
    prevPhoto: 'Poprzednie zdjęcie',
    nextPhoto: 'Następne zdjęcie',
  },
};

// Lo fija el <head> (idioma guardado o el del navegador); se cambia con el selector ES | EN
let lang = ['en', 'pl'].includes(document.documentElement.lang) ? document.documentElement.lang : 'es';
const LANG_PATH = { es: '/', en: '/en/', pl: '/pl/' };
const LANG_LOCALE = { es: 'es-ES', en: 'en-GB', pl: 'pl-PL' };
const locale = () => LANG_LOCALE[lang];

function t(key, vars = {}) {
  const text = I18N[lang][key] ?? I18N.en[key] ?? I18N.es[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}

/* ============================================================ */

const $ = (id) => document.getElementById(id);
const els = {
  app: $('app'), drawer: $('drawer'), tools: $('tools'),
  search: $('search'), chips: $('chips'), sort: $('sort'), count: $('count'),
  list: $('list'), grid: $('grid'), sentinel: $('sentinel'),
  frames: $('frames'), frameLoading: $('frameLoading'),
  tabs: $('tabs'), newTab: $('newTab'), menu: $('menu'),
  openTab: $('openTab'), openTabIcon: $('openTabIcon'), urlField: $('urlField'), copyUrl: $('copyUrl'), goHome: $('goHome'),
  openDrawer: $('openDrawer'), main: $('main'),
};

const state = {
  all: [], filtered: [], shown: 0,
  query: '', category: '', sort: 'default', activeId: null,
  orig: [], imp: [], source: 'orig', tab: '',   // hoja original, importados, de dónde se ven los productos ('orig', 'all' o el id de una hoja importada) y pestaña elegida
};

const isMobile = () => window.matchMedia('(max-width: 820px)').matches;

/* ---------- Agentes de compra ---------- */
// La web funciona igual con cualquier agente: el agente elegido decide qué web se ve en la ventana y a qué página
// de producto lleva cada tarjeta. Los productos de la hoja guardan el enlace de USFans (tienda + ID), de ahí se saca todo.
const originalUrl = (r) => (r.platform === 2 ? `https://item.taobao.com/item.htm?id=${r.id}`
  : r.platform === 3 ? `https://weidian.com/item.html?itemID=${r.id}`
    : `https://detail.1688.com/offer/${r.id}.html`);
const AGENTS = {
  usfans: {
    name: 'USFans',
    home: 'https://usfans.com/register?ref=GRAS35',   // sin www: misma sesión que los productos
    host: 'usfans.com',
  },
  kakobuy: {
    name: 'KakoBuy',
    home: 'https://www.kakobuy.com/?affcode=envio',
    host: 'kakobuy.com',
    product: (r) => (r.encrypted ? null : `https://item2.kakobuy.com/item/details?url=${encodeURIComponent(originalUrl(r))}&affcode=envio`),
  },
  oopbuy: {
    name: 'OopBuy',
    home: 'https://oopbuy.com/?inviteCode=CPE081W7R',
    host: 'oopbuy.com',
    product: (r) => (r.encrypted ? null : `https://oopbuy.com/product/${{ 2: '1', 3: 'weidian', 1: '0' }[r.platform]}/${r.id}?originKeywordUrl=${encodeURIComponent(encodeURIComponent(originalUrl(r)))}&inviteCode=CPE081W7R`),
    // Enlace que abre la app (servicio allapp.link: abre OopBuy si está instalada y si no, Google Play / App Store)
    app: (r) => (r.encrypted || !{ 2: 'TAOBAO', 3: 'WEIDIAN' }[r.platform] ? null
      : `https://oopbuy.allapp.link/XGKJ/1ZX7wX?utm_source=h5&utm_campaign=open+app&utm_content=open+app&LinkType=0&url=${encodeURIComponent(`/pages/goods/details?channel=${{ 2: 'TAOBAO', 3: 'WEIDIAN' }[r.platform]}&id=${r.id}&inviteCode=CPE081W7R&sourceChannel=35&sourceKey=24`)}`),
  },
  boonbuy: {
    name: 'BoonBuy',
    home: 'https://boonbuy.com/?inviteCode=OOVLUHLZI',
    host: 'boonbuy.com',
    product: (r) => (r.encrypted ? null : `https://boonbuy.com/product/${{ 2: '1', 3: 'weidian', 1: '0' }[r.platform]}/${r.id}?inviteCode=OOVLUHLZI`),
  },
  uidbuy: {
    name: 'UIDBuy',
    home: 'https://www.uidbuy.com/?ref=ENVIO',
    host: 'uidbuy.com',
    // Los IDs cifrados de Taobao se prueban tal cual (usa el mismo sistema que USFans)
    product: (r) => `https://www.uidbuy.com/product/${r.platform}/${r.id}?ref=ENVIO`,
  },
};
let agentId = (() => {
  try {
    const saved = localStorage.getItem('agent');
    return AGENTS[saved] ? saved : 'usfans';
  } catch { return 'usfans'; }
})();
document.documentElement.dataset.agent = agentId;
Object.defineProperty(CONFIG, 'homeUrl', { get: () => AGENTS[agentId].home });
const agentHostOk = (hostname, id = agentId) => {
  const h = hostname.toLowerCase();
  return h === AGENTS[id].host || h.endsWith(`.${AGENTS[id].host}`);
};

/* ---------- Utilidades ---------- */
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

function withRef(url) {
  try {
    const u = new URL(url);
    if (/(^|\.)usfans\.com$/i.test(u.hostname)) {
      // www.usfans.com y usfans.com guardan la sesión por separado: todo va a usfans.com
      // para que la sesión iniciada en el iframe sirva en todas las páginas
      u.hostname = 'usfans.com';
      u.searchParams.set('ref', CONFIG.refCode);
    }
    return u.toString();
  } catch {
    return url;
  }
}

// Enlace de un producto en el agente elegido (null si no se puede construir, p. ej. ID cifrado de Taobao)
function agentProductUrl(r) {
  const a = AGENTS[agentId];
  if (agentId === 'usfans') return withRef(`https://usfans.com/product/${r.platform}/${r.id}`);
  return a.product(r);
}

// Enlace de una tarjeta: el de USFans de la hoja pasa al formato del agente elegido
// (si no se puede convertir, se queda el de USFans)
function agentUrl(link) {
  if (agentId === 'usfans') return withRef(link);
  const r = parseProductLink(link);
  return (r && agentProductUrl(r)) || withRef(link);
}

// Enlace para tocar en el móvil: el que abre la app del agente si lo tiene; si no, el normal
function agentOpenUrl(link) {
  const r = AGENTS[agentId].app && parseProductLink(link);
  return (r && AGENTS[agentId].app(r)) || agentUrl(link);
}
const cardHref = (link) => (isMobile() ? agentOpenUrl(link) : agentUrl(link));

function parsePrice(raw) {
  const m = String(raw ?? '').replace(',', '.').match(/\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : NaN;
}

function formatPrice(raw) {
  const s = String(raw ?? '').trim();
  if (!s) return '';
  if (!/^[\d.,\s]+\s*€?$/.test(s)) return s;
  const n = parsePrice(s);
  return isNaN(n) ? s : n.toLocaleString(locale(), { style: 'currency', currency: 'EUR' });
}

function pickColumn(headers, candidates) {
  const nh = headers.map(norm);
  for (const c of candidates) {
    const i = nh.indexOf(c);
    if (i !== -1) return headers[i];
  }
  for (const c of candidates) {
    const i = nh.findIndex((h) => h.includes(c));
    if (i !== -1) return headers[i];
  }
  return null;
}

/* ---------- Carga de datos ---------- */
function toProducts(rows, headers) {
  const col = {};
  for (const [key, cands] of Object.entries(CONFIG.columns)) col[key] = pickColumn(headers, cands);

  // Un producto puede aparecer en varias pestañas de la hoja: se junta en uno solo con todas sus categorías
  const byLink = new Map();
  for (const r of rows) {
    if (norm(r[col.status]) === 'no disponible') continue;
    const name = String(r[col.name] ?? '').trim();
    const link = String(r[col.link] ?? '').trim();
    if (!name || !link) continue;
    const key = withRef(link);
    const category = categoryKey(String(r[col.category] ?? '').trim());
    const section = String(r[col.section] ?? '').trim();
    const p = byLink.get(key);
    if (p) {
      if (category && !p.categories.includes(category)) p.categories.push(category);
      if (section && !p.sections.includes(section)) p.sections.push(section);
      continue;
    }
    byLink.set(key, {
      name,
      link,
      priceRaw: String(r[col.price] ?? '').trim() || String(r[col.priceAlt] ?? '').trim(),
      image: String(r[col.image] ?? '').trim(),
      categories: category ? [category] : [],
      sections: section ? [section] : [],
    });
  }
  // El id es la posición en la lista final: se usa para encontrar el producto al hacer clic
  return [...byLink.values()].map((p, i) => ({
    ...p,
    id: i,
    price: parsePrice(p.priceRaw),
    // Se busca también por el nombre de la categoría en los dos idiomas
    _n: norm(`${p.name} ${p.categories.map(categoryNames).join(' ')} ${p.sections.join(' ')}`),
  }));
}

// Clave estable de la categoría: el nombre de CONFIG.categoryLabels, o el de la hoja si no está
function categoryKey(raw) {
  const hit = CONFIG.categoryLabels.find(([from]) => norm(raw).startsWith(norm(from)));
  return hit ? hit[0] : raw;
}

function categoryLabel(key) {
  const hit = CONFIG.categoryLabels.find(([from]) => from === key);
  return hit ? (lang === 'es' ? hit[1] : lang === 'pl' ? (hit[3] ?? hit[2]) : hit[2]) : key;
}

function categoryNames(key) {
  const hit = CONFIG.categoryLabels.find(([from]) => from === key);
  return hit ? hit.join(' ') : key;
}

function loadCsv(url) {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true, header: true, skipEmptyLines: true,
      complete: (res) => resolve(toProducts(res.data, res.meta.fields || [])),
      error: reject,
    });
  });
}

function sampleProducts() {
  const cats = ['Calzado', 'Tops', 'Partes de abajo', 'Ropa de abrigo', 'Accesorios', 'Bolsos', 'Joyería'];
  const words = {
    Calzado: ['Zapatillas running', 'Botas montaña', 'Sneakers retro', 'Mocasines piel', 'Zapatillas skate'],
    Tops: ['Camiseta oversize', 'Polo piqué', 'Sudadera capucha', 'Camisa lino', 'Jersey punto'],
    'Partes de abajo': ['Vaqueros baggy', 'Pantalón cargo', 'Shorts nylon', 'Chándal', 'Pantalón pinzas'],
    'Ropa de abrigo': ['Plumífero', 'Chaqueta bomber', 'Cortavientos', 'Abrigo lana', 'Chaleco acolchado'],
    Accesorios: ['Gorra', 'Gafas de sol', 'Cinturón', 'Bufanda', 'Gorro beanie'],
    Bolsos: ['Mochila', 'Bandolera', 'Tote bag', 'Riñonera', 'Bolso mini'],
    Joyería: ['Collar cadena', 'Anillo plata', 'Pulsera', 'Pendientes', 'Reloj'],
  };
  const colors = ['negro', 'blanco', 'gris', 'azul', 'verde', 'beige', 'marrón', 'rojo'];
  const out = [];
  for (let i = 0; i < 1200; i++) {
    const c = cats[i % cats.length];
    const w = words[c][(i * 7) % 5];
    const color = colors[(i * 3) % colors.length];
    const price = (8 + ((i * 37) % 140) + 0.99).toFixed(2);
    out.push({ Nombre: `${w} ${color} #${i + 1}`, Precio: price, Enlace: `https://www.usfans.com/?demo=${i}`, Imagen: '', Categoria: c });
  }
  return toProducts(out, ['Nombre', 'Precio', 'Enlace', 'Imagen', 'Categoria']);
}

/* ---------- Filtrado y pintado ---------- */
// Qué productos se ven: solo los de mi hoja (verificados), los de una hoja importada o todos (los de mi hoja primero)
const inSource = (p) => (state.source === 'orig' ? !p.src : state.source === 'all' ? true : !!p.imps?.[state.source]);
const tabMatch = (p) => (state.source === 'all'
  ? Object.values(p.imps || {}).some((a) => a.includes(state.tab))
  : (p.imps?.[state.source] || []).includes(state.tab));

// Si lo escrito en el buscador es un enlace de USFans, Weidian, Taobao o 1688, se enseña ese producto (con su nombre, precio y foto de USFans)
const linkCache = new Map();

function linkRefOf(text) {
  const raw = String(text || '').trim();
  if (!raw || /\s/.test(raw) || !/[./]/.test(raw)) return null;
  const res = resolveTypedUrl(raw);
  if (!res.url) return null;
  const r = parseProductLink(res.url);
  return r && (!r.encrypted || r.fromUsfans) ? r : null;
}

function linkLookup(text, onUpdate) {
  const r = linkRefOf(text);
  if (!r) return null;
  const key = `${r.platform}/${r.id}`;
  // Si el producto ya está en alguna de mis hojas, se enseña ese (primero la verificada)
  const known = state.all.find((p) => productKeyOf(p.link) === key);
  if (known) return known;
  let p = linkCache.get(key);
  if (!p) {
    p = {
      id: `L${key}`, name: t('linkLooking'), unnamed: true, link: `https://usfans.com/product/${key}`, image: '', priceRaw: '', price: NaN,
      categories: [], sections: [], src: 0, done: false, _n: '',
    };
    linkCache.set(key, p);
  }
  p.onUpdate = onUpdate;
  if (!p.fetching && !p.done && window.Accounts?.lookup) {
    p.fetching = true;
    window.Accounts.lookup(r).then((g) => {
      p.fetching = false;
      if (g && g.status === 'ok') {
        Object.assign(p, { name: g.n || p.name, unnamed: false, image: g.i || '', priceRaw: g.p || '', price: parsePrice(g.p), done: true });
      } else if (g && g.status === 'gone') {
        Object.assign(p, { name: t('linkUnavailable'), done: true });
      }
      p.onUpdate?.();
    }, () => { p.fetching = false; });
  }
  return p;
}

function applyFilters() {
  const linked = linkLookup(state.query, () => { if (linkRefOf(state.query)) applyFilters(); });
  if (linked) {
    state.scopeTotal = 1;
    state.filtered = [linked];
    state.shown = 0;
    els.grid.replaceChildren();
    els.list.scrollTop = 0;
    renderCount();
    renderMore();
    return;
  }
  const tokens = norm(state.query).split(/\s+/).filter(Boolean);
  const scope = state.all.filter(inSource);
  state.scopeTotal = scope.length;
  let list = scope.filter((p) =>
    !p.gone &&
    inSource(p) &&
    (!state.tab || tabMatch(p)) &&
    (!state.category || p.categories.includes(state.category)) &&
    tokens.every((t) => p._n.includes(t)));

  const byPrice = (a, b) => (isNaN(a.price) ? Infinity : a.price) - (isNaN(b.price) ? Infinity : b.price);
  if (state.sort === 'price-asc') list = list.slice().sort(byPrice);
  else if (state.sort === 'price-desc') list = list.slice().sort((a, b) => byPrice(b, a));
  else if (state.sort === 'name') list = list.slice().sort((a, b) => a.name.localeCompare(b.name, lang));

  // La hoja original siempre va primero; los productos importados, después
  if (state.source === 'all') list = [...list.filter((p) => !p.src), ...list.filter((p) => p.src)];

  state.filtered = list;
  state.shown = 0;
  els.grid.replaceChildren();
  els.list.scrollTop = 0;

  renderCount();
  if (!list.length) {
    els.grid.innerHTML = `<p class="empty"><strong>${t('emptyTitle')}</strong>${t('emptyText')}</p>`;
    return;
  }
  renderMore();
}

// Une los productos de la hoja original con los importados (sin repetir los que ya estén en la original)
const productKeyOf = (link) => {
  const r = parseProductLink(link);
  return r ? `${r.platform}/${r.id}` : link;
};

function setImported(list) {
  state.imp = list;
  // Los productos de mis hojas que ya están en la original se muestran como los de la original, pero siguen contando para el filtro de cada hoja
  const byKey = new Map(list.map((p) => [productKeyOf(p.link), p]));
  state.orig.forEach((p) => { p.imps = byKey.get(productKeyOf(p.link))?.imps || null; });
  const seen = new Set(state.orig.map((p) => productKeyOf(p.link)));
  const extra = list.filter((p) => !seen.has(productKeyOf(p.link)));
  extra.forEach((p, i) => { p.id = state.orig.length + i; p.src = 1; });
  state.all = state.orig.concat(extra);
  const gone = state.source === 'all' ? !list.length : state.source !== 'orig' && !list.some((p) => p.imps?.[state.source]);
  if (gone) { state.source = 'orig'; state.category = ''; state.tab = ''; }
  if (state.all.length) { renderChips(); applyFilters(); }
}

function renderCount() {
  const n = state.filtered.length;
  const total = state.scopeTotal ?? state.all.length;
  const fmt = (x) => x.toLocaleString(locale());
  els.count.textContent = (n === total ? (n === 1 ? t('count1') : t('count', { n: fmt(n) })) : t('countOf', { n: fmt(n), total: fmt(total) }))
    + (CONFIG.dataUrl ? '' : t('sample'));
}

function cardFor(p) {
  const a = document.createElement('a');
  a.className = 'card' + (p.id === state.activeId ? ' active' : '');
  a.href = cardHref(p.link);
  a.target = '_blank';
  a.rel = 'noopener';
  a.dataset.id = p.id;

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  if (p.image) {
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.alt = '';
    img.src = p.image;
    img.onerror = () => img.classList.add('broken');
    thumb.appendChild(img);
  }

  const meta = document.createElement('div');
  meta.className = 'meta';
  const name = document.createElement('span');
  name.className = 'name';
  if (!p.src && typeof p.id === 'number') {   // viene de mi spreadsheet: el check de verificado va antes del nombre
    const v = document.createElement('span');
    v.className = 'card-verified';
    v.title = t('verifiedProducts');
    v.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="4.6" y="4.6" width="14.8" height="14.8" rx="3.2" fill="#0095f6"/><rect x="4.6" y="4.6" width="14.8" height="14.8" rx="3.2" fill="#0095f6" transform="rotate(45 12 12)"/><path d="m8.4 12.3 2.5 2.5 4.8-5" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    name.append(v, p.name);
  } else {
    name.textContent = p.name;
  }
  meta.appendChild(name);
  const price = formatPrice(p.priceRaw);
  if (price) {
    const pr = document.createElement('span');
    pr.className = 'price';
    pr.textContent = price;
    meta.appendChild(pr);
  }

  a.append(thumb, meta);
  if (p.src === 1 && !p.done) window.Accounts?.watch(a, p);   // importado: la foto y el precio se piden al verlo
  return a;
}

// En el móvil no hay clic derecho: cada tarjeta lleva un botón "⋯" con el mismo menú
function moreButton(p) {
  const b = document.createElement('span');
  b.className = 'card-more';
  b.setAttribute('role', 'button');
  b.setAttribute('aria-label', t('moreOptions'));
  b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="5.5" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="18.5" cy="12" r="1.8" fill="currentColor"/></svg>';
  b.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const r = b.getBoundingClientRect();
    showMenu(r.right - 220, r.bottom + 4, p.name, productMenu(p));
  });
  return b;
}

function renderMore() {
  const next = state.filtered.slice(state.shown, state.shown + CONFIG.pageSize);
  if (!next.length) return;
  const frag = document.createDocumentFragment();
  next.forEach((p) => {
    const card = cardFor(p);
    if (isMobile()) card.querySelector('.thumb')?.append(moreButton(p));
    frag.appendChild(card);
  });
  els.grid.appendChild(frag);
  state.shown += next.length;
}

function renderChips() {
  // Categorías de la hoja original: orden de CONFIG.categoryLabels (Tendencias, Novedades…) y después por número de productos
  const counts = new Map();
  state.orig.forEach((p) => p.categories.forEach((c) => counts.set(c, (counts.get(c) || 0) + 1)));
  const order = CONFIG.categoryLabels.map(([from]) => from);
  const rank = (c) => (order.includes(c) ? order.indexOf(c) : order.length);
  const cats = [...counts.keys()].sort((a, b) => rank(a) - rank(b) || counts.get(b) - counts.get(a));
  // Pestañas de las hojas importadas (solo cuando se ve alguna hoja importada)
  const tabs = state.source === 'orig' ? [] : (window.Accounts?.tabNames(state.source) || []);
  const entries = [
    ...(state.source === 'orig' || state.source === 'all' ? cats.map((c) => ({ kind: 'cat', key: c })) : []),
    ...tabs.map((x) => ({ kind: 'tab', key: x })),
  ];
  els.chips.replaceChildren();
  if (!entries.length) { updateChipArrows(); return; }
  const mk = (label, kind, key) => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = label;
    const on = () => (kind === 'cat' ? state.category === key && !state.tab : kind === 'tab' ? state.tab === key : !state.category && !state.tab);
    b.setAttribute('aria-pressed', String(on()));
    b.onclick = () => {
      state.category = kind === 'cat' ? key : '';
      state.tab = kind === 'tab' ? key : '';
      renderChips();
      applyFilters();
    };
    els.chips.appendChild(b);
  };
  mk(t('all'), 'all', '');
  entries.forEach((e) => mk(e.kind === 'cat' ? categoryLabel(e.key) : e.key, e.kind, e.key));
  updateChipArrows();
}

/* ---------- Desplazamiento de las categorías ---------- */
// Rueda del ratón (vertical → horizontal), arrastrar con el ratón y flechas a los lados
let updateChipArrows = () => {};

function setupChipScroll() {
  const strip = els.chips;
  const box = $('filters');

  updateChipArrows = () => {
    const max = strip.scrollWidth - strip.clientWidth;
    box.classList.toggle('can-prev', strip.scrollLeft > 2);
    box.classList.toggle('can-next', strip.scrollLeft < max - 2);
  };
  const step = () => strip.clientWidth * 0.7;

  $('chipsPrev').onclick = () => strip.scrollBy({ left: -step() });
  $('chipsNext').onclick = () => strip.scrollBy({ left: step() });
  strip.addEventListener('scroll', updateChipArrows, { passive: true });
  window.addEventListener('resize', updateChipArrows);

  strip.addEventListener('wheel', (e) => {
    if (strip.scrollWidth <= strip.clientWidth || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    strip.scrollBy({ left: e.deltaY, behavior: 'auto' });
  }, { passive: false });

  // Arrastrar con el ratón; en pantallas táctiles ya funciona el deslizamiento nativo
  let startX = 0;
  let startLeft = 0;
  let moved = false;
  let pointerId = null;
  strip.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    pointerId = e.pointerId;
    startX = e.clientX;
    startLeft = strip.scrollLeft;
    moved = false;
  });
  strip.addEventListener('pointermove', (e) => {
    if (e.pointerId !== pointerId) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 5) {
      moved = true;
      strip.classList.add('dragging');
      strip.setPointerCapture(pointerId);
    }
    if (moved) strip.scrollLeft = startLeft - dx;
  });
  const end = () => {
    pointerId = null;
    strip.classList.remove('dragging');
  };
  strip.addEventListener('pointerup', end);
  strip.addEventListener('pointercancel', end);
  // Soltar tras arrastrar no debe contar como clic en una categoría
  strip.addEventListener('click', (e) => {
    if (!moved) return;
    e.stopPropagation();
    moved = false;
  }, true);
}

/* ---------- Tema ---------- */
let refreshThemeLabel = () => {};

// Claro por defecto; el oscuro solo si el usuario lo elige (se recuerda en este navegador)
function setupTheme() {
  const btn = $('themeToggle');
  const apply = (dark) => {
    if (dark) document.documentElement.dataset.theme = 'dark';
    else delete document.documentElement.dataset.theme;
    const label = dark ? t('themeToLight') : t('themeToDark');
    btn.title = label;
    btn.setAttribute('aria-label', label);
    btn.setAttribute('aria-pressed', String(dark));
    $('themeColor').content = dark ? '#000000' : '#f5f5f7';
  };
  apply(document.documentElement.dataset.theme === 'dark');
  refreshThemeLabel = () => apply(document.documentElement.dataset.theme === 'dark');
  btn.onclick = () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    apply(dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {
      // Sin almacenamiento (modo privado): el tema dura hasta recargar
    }
  };
}

/* ---------- Pestañas (cada una con su propio iframe) ---------- */
const tabs = [];
let activeTab = null;
let tabSeq = 0;
// La pestaña de registro no guarda título: se muestra en el idioma actual
const HOME_TITLE = '';
const homeTitleText = () => t('homeTitle', { agent: AGENTS[agentId].name });
const tabTitle = (tab) => (tab.url === CONFIG.homeUrl ? homeTitleText() : tab.title);

// Aviso breve en la parte baja de la pantalla
function toastMsg(text) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toastMsg.t);
  toastMsg.t = setTimeout(() => el.classList.remove('show'), 3200);
}

// Lo que se escribe en la barra de direcciones: un enlace de USFans se abre tal cual (con el código de referido),
// y uno de Weidian, Taobao, 1688 o de otro agente se convierte en la página de ese producto en USFans.
function resolveTypedUrl(raw) {
  const text = String(raw || '').trim().replace(/^["'“‘]+|["'”’]+$/g, '');
  if (!text) return { empty: true };
  let u;
  try {
    u = new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(text) ? text : `https://${text}`);
  } catch {
    return { error: 'urlOnlyUsfans' };
  }
  if (!/^https?:$/.test(u.protocol)) return { error: 'urlOnlyUsfans' };
  // Una página del agente elegido se abre tal cual (USFans con mi código de referido)
  if (agentHostOk(u.hostname)) return { url: agentId === 'usfans' ? withRef(u.toString()) : u.toString() };
  const r = parseProductLink(u.toString());
  if (!r) return { error: 'urlOnlyUsfans' };
  if (r.encrypted && agentId !== 'uidbuy') return { error: 'urlNoConvert' };
  const url = agentProductUrl(r);
  return url ? { url, product: true } : { error: 'urlNoConvert' };
}

function setupUrlBar() {
  const field = els.urlField;
  const shown = () => (activeTab ? activeTab.url.replace(/^https?:\/\//, '') : '');
  field.addEventListener('focus', () => field.select());
  field.addEventListener('blur', () => { field.value = shown(); });
  field.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { field.value = shown(); field.blur(); return; }
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const r = resolveTypedUrl(field.value);
    if (r.empty) { field.blur(); return; }
    if (r.error) { toastMsg(t(r.error)); return; }
    navigateTab(activeTab, r.url, t(r.product ? 'tabProduct' : 'tabUsfans'));
    field.blur();
  });
}

function syncActiveUi() {
  els.frameLoading.classList.toggle('done', activeTab.loaded);
  els.openTab.href = activeTab.url;
  els.openTabIcon.href = activeTab.url;
  els.urlField.value = activeTab.url.replace(/^https?:\/\//, '');
  els.urlField.title = activeTab.url;
  els.goHome.hidden = activeTab.url === CONFIG.homeUrl;
}

function createTab(url, title, { activate = true, lazy = false } = {}) {
  if (tabs.length >= CONFIG.maxTabs) {
    const oldest = tabs.find((t) => t !== activeTab);
    if (oldest) closeTab(oldest);
  }
  const iframe = document.createElement('iframe');
  iframe.title = title || homeTitleText();
  iframe.allow = 'clipboard-write; payment';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.hidden = true;
  const tab = { id: ++tabSeq, url, title, iframe, loaded: false, isNew: !activate };
  iframe.addEventListener('load', () => {
    tab.loaded = true;
    if (tab === activeTab) els.frameLoading.classList.add('done');
  });
  if (lazy) tab.lazy = true; // pestaña restaurada: no carga hasta que se abre
  else iframe.src = url;
  els.frames.insertBefore(iframe, els.frameLoading);
  tabs.push(tab);
  if (activate) activateTab(tab);
  else renderTabs();
  return tab;
}

function activateTab(tab) {
  activeTab = tab;
  if (tab.lazy) { tab.lazy = false; tab.iframe.src = tab.url; }
  tabs.forEach((t) => { t.iframe.hidden = t !== tab; });
  syncActiveUi();
  renderTabs();
}

function navigateTab(tab, url, title) {
  Object.assign(tab, { url, title, loaded: false });
  tab.iframe.title = title || homeTitleText();
  tab.iframe.src = url;
  if (tab === activeTab) syncActiveUi();
  renderTabs();
}

function closeTab(tab) {
  const i = tabs.indexOf(tab);
  if (i === -1) return;
  tab.iframe.remove();
  tabs.splice(i, 1);
  if (!tabs.length) createTab(CONFIG.homeUrl, HOME_TITLE);
  else if (tab === activeTab) activateTab(tabs[Math.min(i, tabs.length - 1)]);
  else renderTabs();
}

// Las pestañas abiertas se recuerdan entre visitas (solo la última dirección que abrió esta web, no la navegación interna de USFans)
const tabsKey = () => (agentId === 'usfans' ? 'openTabs' : `openTabs_${agentId}`);

function saveTabs() {
  if (isMobile()) return;
  try {
    localStorage.setItem(tabsKey(), JSON.stringify({ active: tabs.indexOf(activeTab), tabs: tabs.map((x) => ({ url: x.url, title: x.title })) }));
  } catch (e) { /* sin almacenamiento */ }
}

function restoreTabs() {
  try {
    const saved = JSON.parse(localStorage.getItem(tabsKey()) || 'null');
    const ok = (u) => { try { return agentHostOk(new URL(u).hostname); } catch { return false; } };
    const list = (saved?.tabs || []).filter((x) => ok(x.url)).slice(0, CONFIG.maxTabs);
    if (!list.length) return false;
    const idx = Math.min(Math.max(0, saved.active | 0), list.length - 1);
    list.forEach((x, i) => createTab(x.url, x.title || '', { activate: false, lazy: i !== idx }));
    activateTab(tabs[idx]);
    return true;
  } catch (e) { return false; }
}

function renderTabs() {
  saveTabs();
  els.tabs.replaceChildren();
  for (const t of tabs) {
    const el = document.createElement('div');
    el.className = 'tab' + (t.isNew ? ' new' : '');
    el.role = 'tab';
    el.title = tabTitle(t);
    el.setAttribute('aria-selected', String(t === activeTab));
    el.innerHTML = '<span class="tab-dot"></span><span class="tab-title"></span><button class="tab-close">×</button>';
    el.querySelector('.tab-title').textContent = tabTitle(t);
    el.querySelector('.tab-close').setAttribute('aria-label', I18N[lang].closeTab);
    el.onclick = (e) => (e.target.closest('.tab-close') ? closeTab(t) : activateTab(t));
    el.onauxclick = (e) => { if (e.button === 1) { e.preventDefault(); closeTab(t); } };
    el.oncontextmenu = (e) => { e.preventDefault(); showMenu(e.clientX, e.clientY, tabTitle(t), tabMenu(t)); };
    els.tabs.appendChild(el);
    t.isNew = false;
    if (t === activeTab) requestAnimationFrame(() => el.scrollIntoView({ block: 'nearest', inline: 'nearest' }));
  }
}

/* ---------- Menú contextual propio ---------- */
let menuPos = { x: 0, y: 0 };

function showMenu(x, y, heading, items) {
  menuPos = { x, y };
  const m = els.menu;
  m.replaceChildren();
  if (heading) {
    const h = document.createElement('div');
    h.className = 'menu-head';
    h.textContent = heading;
    m.appendChild(h);
  }
  for (const it of items) {
    if (it === '-') {
      m.appendChild(Object.assign(document.createElement('div'), { className: 'menu-sep' }));
      continue;
    }
    const b = document.createElement('button');
    b.className = 'menu-item';
    b.role = 'menuitem';
    b.innerHTML = `<span class="ico">${it.icon || ''}</span><span></span>${it.kbd ? `<span class="kbd">${it.kbd}</span>` : ''}`;
    b.children[1].textContent = it.label;
    b.onclick = () => { hideMenu(); it.action(); };
    m.appendChild(b);
  }
  m.hidden = false;
  const r = m.getBoundingClientRect();
  m.style.left = `${Math.max(8, Math.min(x, innerWidth - r.width - 8))}px`;
  m.style.top = `${Math.max(8, Math.min(y, innerHeight - r.height - 8))}px`;
  m.querySelector('.menu-item')?.focus();
}

function hideMenu() { els.menu.hidden = true; }

function productMenu(p) {
  const url = agentUrl(p.link);
  if (isMobile()) {
    return [
      { icon: '↗', label: t('openInApp', { agent: AGENTS[agentId].name }), action: () => openInApp(agentOpenUrl(p.link)) },
      { icon: '⎘', label: t('copyLink'), action: () => navigator.clipboard?.writeText(url) },
      '-',
      ...(CONFIG.accountApi ? [{ icon: '＋', label: t('addToHaul'), action: () => window.Hauls?.addMenu(p) }] : []),
      { icon: '◎', label: t('viewQc'), action: () => searchQc(p.link) },
    ];
  }
  return [
    { icon: '↵', label: t('openHere'), action: () => openProduct(p) },
    { icon: '⧉', label: t('openNewTab'), kbd: t('kbdCtrlClick'), action: () => openProduct(p, { newTab: true }) },
    { icon: '⇱', label: t('openNewTabFocus'), action: () => openProduct(p, { newTab: true, focus: true }) },
    '-',
    { icon: '↗', label: t('openInBrowser'), action: () => window.open(url, '_blank', 'noopener') },
    { icon: '⎘', label: t('copyLink'), action: () => navigator.clipboard?.writeText(url) },
    '-',
    ...(CONFIG.accountApi ? [{ icon: '＋', label: t('addToHaul'), action: () => window.Hauls?.addMenu(p) }] : []),
    { icon: '◎', label: t('viewQc'), action: () => searchQc(p.link) },
  ];
}

function tabMenu(t) {
  return [
    { icon: '↻', label: I18N[lang].reload, action: () => navigateTab(t, t.url, t.title) },
    { icon: '⧉', label: I18N[lang].duplicate, action: () => createTab(t.url, t.title) },
    { icon: '↗', label: I18N[lang].openInBrowser, action: () => window.open(t.url, '_blank', 'noopener') },
    '-',
    { icon: '✕', label: I18N[lang].closeOthers, action: () => tabs.filter((x) => x !== t).forEach(closeTab) },
    { icon: '✕', label: I18N[lang].closeTab, kbd: I18N[lang].kbdMiddleClick, action: () => closeTab(t) },
  ];
}

/* ---------- Productos → pestañas ---------- */
// Abre un enlace de USFans como si se tocara: con la app instalada, el teléfono abre la app en vez de la web
function openInApp(url) {
  const a = document.createElement('a');
  a.href = url;
  a.rel = 'noopener';
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function openProduct(p, { newTab = false, focus = false } = {}) {
  const url = agentUrl(p.link);
  if (isMobile()) {
    openInApp(agentOpenUrl(p.link));
    if (typeof window.gtag === 'function') window.gtag('event', 'product_click', { item_name: p.name, app: true });
    return;
  }
  if (newTab) createTab(url, p.name, { activate: focus });
  else navigateTab(activeTab, url, p.name);

  state.activeId = p.id;
  els.grid.querySelectorAll('.card.active').forEach((c) => c.classList.remove('active'));
  els.grid.querySelector(`.card[data-id="${p.id}"]`)?.classList.add('active');
  if (isMobile() && (!newTab || focus)) setDrawer(false);
  if (typeof window.gtag === 'function') window.gtag('event', 'product_click', { item_name: p.name, new_tab: newTab });
}

const productFrom = (e) => {
  const card = e.target.closest('.card');
  if (!card) return null;
  const id = card.dataset.id;
  return state.all[+id] ?? state.filtered.find((p) => String(p.id) === id) ?? null;
};

function onProductClick(e) {
  const p = productFrom(e);
  if (!p || e.button !== 0) return;
  if (isMobile()) return; // el enlace de la tarjeta se abre solo (en la app de USFans si está instalada)
  e.preventDefault();
  openProduct(p, { newTab: e.ctrlKey || e.metaKey || e.shiftKey });
}

/* ---------- Panel lateral y pestañas de herramientas ---------- */
// Para añadir una herramienta: añade un <section class="tool" id="tool-xxx"> en index.html y una entrada aquí.
const TOOL_ICONS = {
  hauls: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3.5 8.2A2.2 2.2 0 0 1 5.7 6h3.2c.5 0 1 .2 1.3.6l.8 1c.3.4.8.6 1.3.6h5.9a2.2 2.2 0 0 1 2.2 2.2v6.4a2.2 2.2 0 0 1-2.2 2.2H5.7a2.2 2.2 0 0 1-2.2-2.2z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  products: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="3.5" y="3.5" width="17" height="17" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 9.5h17M3.5 14.5h17M9.5 3.5v17" stroke="currentColor" stroke-width="1.6"/></svg>',
  qc: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M8.5 6l1.2-1.8c.2-.4.6-.7 1.1-.7h2.4c.5 0 .9.3 1.1.7L15.5 6H18a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-8A2.5 2.5 0 0 1 6 6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
};
const TOOLS = [
  { id: 'products', labelKey: 'spreadsheet' },
  { id: 'hauls', labelKey: 'toolHauls' },
  { id: 'qc', labelKey: 'toolQc' },
];
let activeTool = 'products';

// "Mis hauls" solo existe cuando hay cuentas (API configurada)
const visibleTools = () => TOOLS.filter((x) => x.id !== 'hauls' || CONFIG.accountApi);

function renderTools() {
  els.tools.hidden = visibleTools().length < 2;
  els.tools.replaceChildren();
  for (const t of visibleTools()) {
    const b = document.createElement('button');
    b.role = 'tab';
    b.innerHTML = `${TOOL_ICONS[t.id] || ''}<span></span>`;
    b.lastChild.textContent = I18N[lang][t.labelKey];
    b.setAttribute('aria-selected', String(t.id === activeTool));
    b.onclick = () => showTool(t.id);
    els.tools.appendChild(b);
  }
}

function showTool(id) {
  activeTool = id;
  TOOLS.forEach((x) => { $(`tool-${x.id}`).hidden = x.id !== id; });
  els.tools.querySelectorAll('button').forEach((b, i) => b.setAttribute('aria-selected', String(visibleTools()[i].id === id)));
  if (id === 'products') updateChipArrows();
  if (id === 'hauls') window.Hauls?.show();
}

function renderSkeleton(n = 8) {
  els.grid.innerHTML = Array.from({ length: n }, () =>
    '<div class="card skeleton" aria-hidden="true"><div class="thumb"></div><div class="meta"><div class="bar-line"></div><div class="bar-line short"></div></div></div>').join('');
}

function setDrawer(open) {
  if (isMobile()) return; // en móvil solo existe la ventana de herramientas
  applyDrawerState(open);
}

function applyDrawerState(open) {
  els.app.classList.toggle('collapsed', !open);
  if (!open) setExpanded(false);
  coachOnDrawer(open);
}

/* ---------- Deslizar en móvil ---------- */
// Las dos vistas son capas a pantalla completa y el panel de herramientas va SIEMPRE por encima de USFans:
//  - abrir:  el panel entra desde la izquierda sobre USFans (quieto); la lengüeta › va pegada a su borde derecho.
//  - volver: el panel sale hacia la izquierda y deja USFans a la vista; la lengüeta ‹ va pegada a su borde derecho.
// Todo se mueve con un único progreso p (0 = USFans, 1 = panel), calculado en cada fotograma.
const slide = { p: 0, dir: 'open', raf: 0 };
const TAB_W = 26;

function renderSlide(p, dir) {
  slide.p = p;
  slide.dir = dir;
  const w = window.innerWidth;
  const tabL = $('swipeEdge');
  const tabR = $('swipeBack');
  els.drawer.style.transform = `translateX(${(p - 1) * w}px)`;
  els.main.style.transform = 'translateX(0)';
  if (dir === 'open') {
    tabL.style.transform = `translateX(${p * w}px)`;
    tabL.style.visibility = 'visible';
    tabR.style.visibility = 'hidden';
  } else {
    tabR.style.transform = `translateX(${(p - 1) * w}px)`;
    tabR.style.visibility = 'visible';
    tabL.style.visibility = 'hidden';
  }
}

// Posición de reposo. Si ha cambiado de vista, la lengüeta del otro lado asoma deslizándose desde el borde.
function settleSlide(open, changed) {
  const w = window.innerWidth;
  const tabL = $('swipeEdge');
  const tabR = $('swipeBack');
  els.main.style.transform = 'translateX(0)';
  if (open) {
    els.drawer.style.transform = 'translateX(0)';
    tabL.style.visibility = 'hidden';
    tabR.style.visibility = 'visible';
    tabR.style.transform = 'translateX(0)';
    if (changed) tabR.animate([{ transform: `translateX(${TAB_W + 6}px)` }, { transform: 'translateX(0)' }], { duration: 320, easing: 'cubic-bezier(.32,.72,0,1)' });
  } else {
    els.drawer.style.transform = `translateX(${-w}px)`;
    tabR.style.visibility = 'hidden';
    tabL.style.visibility = 'visible';
    tabL.style.transform = 'translateX(0)';
    if (changed) tabL.animate([{ transform: `translateX(${-TAB_W - 6}px)` }, { transform: 'translateX(0)' }], { duration: 320, easing: 'cubic-bezier(.32,.72,0,1)' });
  }
  slide.p = open ? 1 : 0;
  slide.dir = open ? 'close' : 'open';
  applyDrawerState(open);
}

// Anima el progreso hasta el destino con una curva suave; la duración depende de lo que falte por recorrer
function animateSlide(dir, target) {
  cancelAnimationFrame(slide.raf);
  const from = slide.p;
  const wasOpen = !els.app.classList.contains('collapsed');
  const dist = Math.abs(target - from);
  const duration = Math.max(180, 420 * dist);
  const t0 = performance.now();
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const step = (now) => {
    const k = Math.min(1, (now - t0) / duration);
    renderSlide(from + (target - from) * ease(k), dir);
    if (k < 1) {
      slide.raf = requestAnimationFrame(step);
    } else {
      slide.raf = 0;
      const open = target === 1;
      settleSlide(open, open !== wasOpen);
    }
  };
  slide.raf = requestAnimationFrame(step);
}

// Abrir o cerrar con animación (botones, toques en la lengüeta…)
function slideTo(open) {
  const isOpen = !els.app.classList.contains('collapsed');
  if (open === isOpen && !slide.raf) return settleSlide(open, false);
  if (open) {
    if (slide.dir !== 'open') renderSlide(0, 'open');
    animateSlide('open', 1);
  } else {
    if (slide.dir !== 'close') renderSlide(1, 'close');
    animateSlide('close', 0);
  }
}

function resetSlideStyles() {
  [els.drawer, els.main, $('swipeEdge'), $('swipeBack')].forEach((el) => {
    el.style.transform = '';
    el.style.visibility = '';
  });
}

// --- Gestos ---
const drag = { active: false, dir: 'open', x: 0, y: 0, lastX: 0, lastT: 0, v: 0 };

function dragStart(dir, x, y) {
  cancelAnimationFrame(slide.raf);
  slide.raf = 0;
  Object.assign(drag, { active: false, dir, x, y, lastX: x, lastT: performance.now(), v: 0 });
}

function dragActivate() {
  drag.active = true;
  $('coach').classList.add('dragging');
}

function dragMove(x) {
  const w = window.innerWidth;
  const dx = x - drag.x;
  const p = drag.dir === 'open' ? Math.min(1, Math.max(0, dx / w)) : Math.min(1, Math.max(0, 1 + dx / w));
  renderSlide(p, drag.dir);
  const now = performance.now();
  drag.v = (x - drag.lastX) / Math.max(1, now - drag.lastT);
  drag.lastX = x;
  drag.lastT = now;
}

function dragEnd(x) {
  $('coach').classList.remove('dragging');
  if (!drag.active) return;
  drag.active = false;
  const w = window.innerWidth;
  const dx = x - drag.x;
  const open = drag.dir === 'open' ? dx > w * 0.3 || drag.v > 0.35 : !(dx < -w * 0.3 || drag.v < -0.35);
  animateSlide(drag.dir, open ? 1 : 0);
}

function dragCancel() {
  $('coach').classList.remove('dragging');
  if (!drag.active) return;
  drag.active = false;
  animateSlide(drag.dir, drag.dir === 'open' ? 0 : 1);
}

// Lengüetas y guía: solo sirven para deslizar, así que se quedan el puntero desde el primer momento
function bindPullTarget(el, getDir) {
  let id = null;
  el.addEventListener('pointerdown', (e) => {
    if (!isMobile() || (e.pointerType === 'mouse' && e.button !== 0)) return;
    id = e.pointerId;
    try { el.setPointerCapture(id); } catch (err) { /* sin captura */ }
    dragStart(getDir(), e.clientX, e.clientY);
  });
  el.addEventListener('pointermove', (e) => {
    if (e.pointerId !== id) return;
    const dx = e.clientX - drag.x;
    if (!drag.active) {
      if (Math.abs(dx) < 6 || (drag.dir === 'open' ? dx < 0 : dx > 0)) return;
      dragActivate();
    }
    dragMove(e.clientX);
  });
  el.addEventListener('pointerup', (e) => {
    if (e.pointerId !== id) return;
    id = null;
    const moved = drag.active;
    dragEnd(e.clientX);
    // Un toque sin arrastrar en una lengüeta también cambia de vista
    if (!moved && el.classList.contains('pull-tab')) setDrawer(drag.dir === 'open');
  });
  el.addEventListener('pointercancel', (e) => {
    if (e.pointerId !== id) return;
    id = null;
    dragCancel();
  });
}

// Panel: bloqueo de dirección. En los primeros píxeles se decide si el gesto es horizontal
// (trae USFans por encima y se bloquea el scroll) o vertical (scroll normal, nada se mueve).
function bindDrawerSwipe() {
  const drawer = els.drawer;
  const ignore = (t) => t.closest('.chips, input, textarea, select, .lightbox');
  let lock = null; // null = sin decidir, 'x' = deslizar, 'y' = scroll

  drawer.addEventListener('touchstart', (e) => {
    lock = null;
    if (!isMobile() || e.touches.length !== 1 || ignore(e.target)) { lock = 'y'; return; }
    const p = e.touches[0];
    dragStart('close', p.clientX, p.clientY);
  }, { passive: true });

  drawer.addEventListener('touchmove', (e) => {
    if (lock === 'y') return;
    const p = e.touches[0];
    const dx = p.clientX - drag.x;
    const dy = p.clientY - drag.y;
    if (lock === null) {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      if (dx < 0 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        lock = 'x';
        dragActivate();
      } else {
        lock = 'y';
        return;
      }
    }
    e.preventDefault(); // con el gesto horizontal bloqueado, la lista no hace scroll
    dragMove(p.clientX);
  }, { passive: false });

  drawer.addEventListener('touchend', (e) => {
    if (lock === 'x') dragEnd(e.changedTouches[0].clientX);
    lock = null;
  });
  drawer.addEventListener('touchcancel', () => {
    if (lock === 'x') dragCancel();
    lock = null;
  });
}

function setupSwipe() {
  // Desde USFans solo se abre pulsando la pestaña; desde el panel se vuelve pulsando o deslizando
  const openTools = $('swipeEdge');
  openTools.addEventListener('click', () => { if (isMobile()) setDrawer(true); });
  openTools.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDrawer(true); } });
  bindPullTarget($('swipeBack'), () => 'close');
  bindDrawerSwipe();
  // Al girar el móvil o cambiar entre móvil y escritorio, todo vuelve a su sitio
  let wasMobile = isMobile();
  window.addEventListener('resize', () => {
    const mobile = isMobile();
    if (mobile) settleSlide(!els.app.classList.contains('collapsed'), false);
    else if (wasMobile) resetSlideStyles();
    wasMobile = mobile;
  });
}

/* ---------- Guía de inicio (primera vez en móvil) ---------- */
// Un solo paso: señala la pestaña de la izquierda; al abrir el panel (o al saltar) desaparece.
const coach = { step: 0 };

function coachDone() {
  try { return localStorage.getItem('coachDone') === '1'; } catch (e) { return false; }
}

function finishCoach() {
  coach.step = 0;
  $('coach').hidden = true;
  document.body.classList.remove('coaching');
  try { localStorage.setItem('coachDone', '1'); } catch (e) { /* sin almacenamiento */ }
}

function showCoach() {
  coach.step = 1;
  $('coachTitle').textContent = t('coachOpenTitle');
  $('coachText').textContent = t('coachOpenText');
  $('coach').hidden = false;
  document.body.classList.add('coaching');
}

function coachOnDrawer(open) {
  if (coach.step && open) finishCoach();
}

function startCoach() {
  if (!isMobile() || coachDone()) return;
  $('coachSkip').addEventListener('pointerdown', (e) => e.stopPropagation());
  $('coachSkip').onclick = finishCoach;
  setTimeout(() => {
    if (els.app.classList.contains('collapsed')) showCoach();
  }, 900);
}

/* ---------- Ancho del panel y modo expandido ---------- */
// El ancho elegido se recuerda en este navegador; con doble clic en el divisor se vuelve al de por defecto
const DRAWER_MIN = 320;
const MAIN_MIN = 380;

function setDrawerWidth(px, save = true) {
  const w = Math.round(Math.max(DRAWER_MIN, Math.min(px, window.innerWidth - MAIN_MIN)));
  document.documentElement.style.setProperty('--drawer-w', `${w}px`);
  updateChipArrows();
  if (save) {
    try { localStorage.setItem('drawerW', String(w)); } catch (e) { /* sin almacenamiento */ }
  }
}

function setExpanded(on) {
  els.app.classList.toggle('expanded', on);
  const btn = $('expandTab');
  const key = on ? 'restorePanel' : 'expandPanel';
  btn.dataset.i18nAttr = `aria-label:${key};title:${key}`;
  btn.setAttribute('aria-label', t(key));
  btn.title = t(key);
  requestAnimationFrame(updateChipArrows);
}

function setupResizer() {
  const handle = $('resizer');
  let saved = null;
  try { saved = Number(localStorage.getItem('drawerW')); } catch (e) { /* sin almacenamiento */ }
  if (saved) setDrawerWidth(saved, false);

  $('expandTab').addEventListener('click', (e) => {
    e.stopPropagation();
    setExpanded(!els.app.classList.contains('expanded'));
  });
  $('expandTab').addEventListener('pointerdown', (e) => e.stopPropagation());

  handle.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || els.app.classList.contains('expanded')) return;
    e.preventDefault();
    handle.setPointerCapture(e.pointerId);
    els.app.classList.add('resizing');
    const left = els.drawer.getBoundingClientRect().left;
    const move = (ev) => setDrawerWidth(ev.clientX - left, false);
    const up = (ev) => {
      handle.removeEventListener('pointermove', move);
      handle.removeEventListener('pointerup', up);
      els.app.classList.remove('resizing');
      setDrawerWidth(ev.clientX - left);
    };
    handle.addEventListener('pointermove', move);
    handle.addEventListener('pointerup', up);
  });
  handle.addEventListener('dblclick', (e) => {
    if (e.target.closest('.expand-tab')) return;
    document.documentElement.style.removeProperty('--drawer-w');
    try { localStorage.removeItem('drawerW'); } catch (err) { /* sin almacenamiento */ }
    updateChipArrows();
  });
  // Con teclado: flechas para cambiar el ancho
  handle.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    setDrawerWidth(els.drawer.getBoundingClientRect().width + (e.key === 'ArrowRight' ? 24 : -24));
  });
  // Si la ventana se estrecha, el panel no puede dejar a USFans sin sitio
  window.addEventListener('resize', () => {
    const current = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--drawer-w'));
    if (document.documentElement.style.getPropertyValue('--drawer-w')) setDrawerWidth(current, false);
  });
}

/* ---------- Fotos QC (FinderQC) ---------- */
// Al buscar, se muestra en un iframe la página de FinderQC con las fotos QC del producto:
//   https://finderqc.com/product/TIENDA/ID/qc   (TIENDA = Weidian, Taobao o Ali1688; ID = el de la tienda)
// Número de tienda en las URL de USFans → nombre que usa FinderQC
const PLATFORMS = [
  { code: 3, name: 'Weidian', finderqc: 'Weidian', test: /weidian|youshop10|koudai/i },
  { code: 1, name: '1688', finderqc: 'Ali1688', test: /1688\.com|ali_?1688|(?:shop_type|platform|source)=1688|\/1688\//i },
  { code: 2, name: 'Taobao', finderqc: 'Taobao', test: /taobao|tmall/i },
];
const platformByCode = (code) => PLATFORMS.find((p) => p.code === code);

// Saca tienda e ID de cualquier enlace: tienda, USFans u otro agente (aunque lleve la URL codificada dentro).
// encrypted = el ID no es numérico (Taobao cifrado o código propio de USFans): no hay forma de traducirlo desde fuera.
function parseProductLink(link) {
  let full = String(link || '').trim();
  const own = full.match(/usfans\.com\/product\/(\d+)\/([\w-]+)/i);
  if (own) return { platform: Number(own[1]), id: own[2], encrypted: !/^\d+$/.test(own[2]), fromUsfans: true };
  const own2 = full.match(/(?:oopbuy|boonbuy)\.com\/product\/(1|0|weidian)\/([\w-]+)/i);
  if (own2) return { platform: { 1: 2, 0: 1, weidian: 3 }[own2[1].toLowerCase()], id: own2[2], encrypted: !/^\d+$/.test(own2[2]) };
  const uid = full.match(/uidbuy\.com\/product\/([123])\/([\w-]+)/i);
  if (uid) return { platform: Number(uid[1]), id: uid[2], encrypted: !/^\d+$/.test(uid[2]) };
  for (let i = 0; i < 3; i++) {
    try {
      const d = decodeURIComponent(full);
      if (d === full) break;
      full = d;
    } catch {
      break;
    }
  }
  const platform = PLATFORMS.find((p) => p.test.test(full));
  if (!platform) return null;
  const m = full.match(/itemid=([\w-]{6,})/i)
    || full.match(/[?&](?:id|item_id|goods_?id|product_?id|offer_?id)=([\w-]{6,})/i)
    || full.match(/offer\/(\d{6,})\.html/i)
    || full.match(/(?:weidian|taobao|tmall|1688)\/(\d{6,})/i);
  if (!m) return null;
  return { platform: platform.code, id: m[1], encrypted: !/^\d+$/.test(m[1]) };
}

const finderqcUrl = ({ platform, id }) =>
  `https://finderqc.com/product/${platformByCode(platform).finderqc}/${encodeURIComponent(id)}/qc`;

const qc = { result: null, product: null, url: '' };

function setupQc() {
  $('qcForm').addEventListener('submit', (e) => {
    e.preventDefault();
    searchQc($('qcInput').value);
  });
  $('qcFrame').addEventListener('load', () => $('qcLoading').classList.add('done'));
}

function searchQc(link) {
  showTool('qc');
  if (isMobile()) setDrawer(true);
  $('qcInput').value = link;
  const product = parseProductLink(link);
  qc.product = product;
  if (!product) {
    qc.result = { state: 'invalid' };
  } else if (product.encrypted && product.fromUsfans) {
    // Código de USFans: solo ellos lo entienden, así que se muestran sus propias fotos QC
    qc.result = { state: 'usfans-loading' };
    $('qcView').hidden = true;
    loadUsfansQc(product);
  } else if (product.encrypted) {
    qc.result = { state: 'encrypted' };
  } else {
    qc.result = { state: 'ok' };
    showQcFrame(finderqcUrl(product));
  }
  rerenderQc();
}

// Fotos QC que USFans tiene del producto (acepta su propio código largo). Se piden a su endpoint público.
const USFANS_WATERMARK = 'watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20';
const usfansImage = (url, width) =>
  `${url.split('?')[0]}?x-oss-process=image/auto-orient,1/${USFANS_WATERMARK}/resize,w_${width}/quality,q_82/format,webp`;

async function loadUsfansQc(product) {
  const mine = product;
  try {
    const res = await fetch(`https://usfans.com/api/goods/estimate-info?goodsId=${encodeURIComponent(product.id)}`);
    if (!res.ok) throw new Error(`USFans ${res.status}`);
    const images = ((await res.json()).data || {}).qcImages || [];
    if (qc.product !== mine) return; // llegó otra búsqueda mientras tanto
    qc.result = images.length ? { state: 'usfans-ok', images } : { state: 'usfans-empty' };
  } catch (e) {
    if (qc.product !== mine) return;
    qc.result = { state: 'usfans-error' };
  }
  rerenderQc();
}

function showQcFrame(url) {
  if (qc.url !== url) {
    qc.url = url;
    $('qcLoading').classList.remove('done');
    $('qcFrame').src = url;
  }
  $('qcOpenSource').href = url;
  $('qcView').hidden = false;
}

function rerenderQc() {
  const box = $('qcResult');
  const r = qc.result;
  if (!r) return box.replaceChildren();
  const msg = (title, text) => { box.innerHTML = `<div class="qc-msg"><strong>${title}</strong>${text}</div>`; };
  box.classList.toggle('scroll', r.state === 'usfans-ok');
  if (r.state === 'usfans-loading') {
    box.innerHTML = `<p class="qc-meta">${t('qcLoading')}</p><div class="qc-grid" style="margin-top:10px">${'<div class="qc-thumb skeleton"></div>'.repeat(6)}</div>`;
    return;
  }
  if (r.state === 'usfans-empty') return msg(t('qcUsfansEmptyTitle'), t('qcUsfansEmptyText'));
  if (r.state === 'usfans-error') return msg(t('qcErrorTitle'), t('qcErrorText'));
  if (r.state === 'usfans-ok') {
    box.innerHTML = `<p class="qc-title">${t('qcUsfansTitle', { n: r.images.length })}</p><p class="qc-meta">${t('qcUsfansNote')}</p><div class="qc-grid" style="margin-top:12px"></div>`;
    const grid = box.querySelector('.qc-grid');
    r.images.forEach((u, i) => {
      const a = document.createElement('a');
      a.className = 'qc-thumb';
      a.href = usfansImage(u, 1600);
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', `QC ${i + 1}`);
      a.innerHTML = '<img loading="lazy" decoding="async" referrerpolicy="no-referrer" alt="">';
      a.firstChild.src = usfansImage(u, 400);
      grid.appendChild(a);
    });
    return;
  }
  if (r.state === 'invalid') {
    $('qcView').hidden = true;
    return msg(t('qcInvalidTitle'), t('qcInvalidText'));
  }
  if (r.state === 'encrypted') {
    $('qcView').hidden = true;
    return msg(t('qcEncryptedTitle'), t('qcEncryptedText'));
  }
  box.replaceChildren();
  const p = qc.product;
  $('qcViewLabel').textContent = t('qcShowing', { store: platformByCode(p.platform).name, id: p.id });
}

/* ---------- Idioma ---------- */
// Cabecera de la página en el idioma activo. Cada idioma tiene su dirección (/ y /en/), y el selector
// cambia los textos al instante y actualiza también la dirección.
function applySeoMeta() {
  const url = `https://cnside.app${LANG_PATH[lang]}`;
  const set = (sel, attr, val) => document.querySelector(sel)?.setAttribute(attr, val);
  document.title = t('seoTitle');
  set('meta[name="description"]', 'content', t('seoDescription'));
  set('meta[property="og:title"]', 'content', t('seoTitle'));
  set('meta[property="og:description"]', 'content', t('seoDescription'));
  set('meta[name="twitter:title"]', 'content', t('seoTitle'));
  set('meta[name="twitter:description"]', 'content', t('seoDescription'));
  set('meta[property="og:locale"]', 'content', lang === 'en' ? 'en_GB' : lang === 'pl' ? 'pl_PL' : 'es_ES');
  set('link[rel="canonical"]', 'href', url);
  set('meta[property="og:url"]', 'content', url);
  const h1 = document.querySelector('.sr-h1');
  if (h1) h1.textContent = t('seoH1');
}

// Textos fijos de la página: data-i18n (texto), data-i18n-html (texto con formato)
// y data-i18n-attr="atributo:clave;atributo:clave"
function applyStaticTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      el.setAttribute(attr, t(key));
    });
  });
  document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
}

function setLanguage(next) {
  if (next === lang) return;
  lang = next;
  try {
    localStorage.setItem('lang', lang);
  } catch (e) {
    // Sin almacenamiento (modo privado): el idioma dura hasta recargar
  }
  try {
    history.replaceState(null, '', LANG_PATH[next]);
  } catch (e) {
    // sin historial (archivo local): se queda la misma dirección
  }
  applySeoMeta();
  applyStaticTexts();
  refreshThemeLabel();
  renderTools();
  rerenderQc();
  renderTabs();
  tabs.forEach((tab) => { tab.iframe.title = tabTitle(tab); });
  hideMenu();
  if (state.all.length) {
    // Se repintan categorías, contador y tarjetas (los precios cambian de formato) sin perder el filtro
    renderChips();
    applyFilters();
  }
}

/* ---------- Arranque ---------- */
/* ---------- Móvil: la parte alta de la lista se oculta al bajar y reaparece al subir ---------- */
// Es el patrón de las apps profesionales (Safari, Instagram, Airbnb…): la zona va DENTRO de lo que se desplaza, así que al bajar
// se va con el contenido sin mover nada; al subir un poco se desliza de vuelta por encima, con un fondo translúcido.
// Solo se anima transform (no la altura), por eso no hay tirones. El buscador se queda siempre fijo arriba.
function setupFold() {
  const fold = $('fold');
  const list = els.list;
  list.prepend(fold);
  const fade = document.createElement('div'); // borde superior: los productos se difuminan al llegar al color sólido
  fade.className = 'edge-fade';
  fade.setAttribute('aria-hidden', 'true');
  list.prepend(fade);
  fold.firstElementChild.prepend(document.querySelector('#tool-products > .search-wrap')); // el buscador también se oculta con el bloque
  let last = 0;
  let dir = 0;
  let anchor = 0;
  let hidden = false;
  let samples = []; // [tiempo, posición] de la subida en curso
  const WINDOW_MS = 700;
  const setHidden = (on) => {
    if (hidden === on) return;
    hidden = on;
    fold.classList.toggle('is-hidden', on);
  };
  list.addEventListener('scroll', (e) => {
    const max = Math.max(0, list.scrollHeight - list.clientHeight);
    const y = Math.min(Math.max(0, list.scrollTop), max); // sin el rebote de iOS en los extremos
    const now = e.timeStamp || performance.now();
    const d = y - last;
    if (d !== 0) {
      const nd = d > 0 ? 1 : -1;
      if (nd !== dir) { dir = nd; anchor = last; samples = []; } // el recorrido se cuenta desde el último cambio de dirección
    }
    const travel = Math.abs(y - anchor);
    if (dir < 0) {
      samples.push([now, y]);
      while (samples.length > 1 && now - samples[0][0] > WINDOW_MS) samples.shift();
    }
    if (y <= 2) setHidden(false);
    else if (dir > 0 && travel > 14 && y > fold.offsetHeight) setHidden(true);
    // Reaparece al subir una distancia grande en poco tiempo (media pantalla en 0,7 s), no por subir un poco o muy despacio
    else if (dir < 0 && samples.length > 1 && y !== samples[0][1] && samples[0][1] - y > list.clientHeight * 0.5) setHidden(false);
    fold.classList.toggle('is-floating', y > 2 && !hidden);
    last = y;
  }, { passive: true });
}

/* ---------- Selector de agente ---------- */
function setupAgents() {
  const btn = $('agentBtn');
  const menu = $('agentMenu');
  const label = () => { btn.querySelector('.lbl').textContent = AGENTS[agentId].name; btn.querySelector('.agent-ico').src = `/agents/${agentId}.png`; };
  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  const paint = () => {
    label();
    $('offerBtn').hidden = agentId !== 'usfans';   // el cupón de bienvenida es de USFans
    menu.replaceChildren();
    for (const [id, a] of Object.entries(AGENTS)) {
      const o = document.createElement('button');
      o.type = 'button';
      o.className = 'source-opt';
      o.setAttribute('role', 'option');
      o.setAttribute('aria-selected', String(id === agentId));
      o.innerHTML = '<img class="agent-ico" alt="" width="18" height="18"><span class="lbl"></span><svg class="tick" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      o.querySelector('.agent-ico').src = `/agents/${id}.png`;
      o.querySelector('.lbl').textContent = a.name;
      o.onclick = () => { close(); switchAgent(id); };
      menu.appendChild(o);
    }
  };
  btn.onclick = (e) => {
    e.stopPropagation();
    const open = menu.hidden;
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  };
  document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  paint();
  window.__paintAgents = paint;
}

function switchAgent(id) {
  if (id === agentId || !AGENTS[id]) return;
  agentId = id;
  try { localStorage.setItem('agent', id); } catch { /* sin almacenamiento */ }
  document.documentElement.dataset.agent = id;
  // Las pestañas abiertas eran de otro agente: se cierran y se abre la página de inicio del nuevo
  tabs.forEach((x) => x.iframe.remove());
  tabs.length = 0;
  if (isMobile()) activeTab = createTab(CONFIG.homeUrl, HOME_TITLE, { activate: false, lazy: true });
  else if (!restoreTabs()) createTab(CONFIG.homeUrl, HOME_TITLE);
  window.__paintAgents?.();
  // Los enlaces de las tarjetas que ya están en pantalla pasan al agente nuevo
  els.grid.querySelectorAll('a.card').forEach((a) => {
    const p = productFrom({ target: a });
    if (p) a.href = cardHref(p.link);
  });
  renderTabs();
}

/* ---------- Móvil: cuántas columnas de productos se ven (2, 3 o 4) ---------- */
function setupCols() {
  const sw = $('colsSwitch');
  const grid = els.grid;
  let n = 2;
  try { n = +localStorage.getItem('cols') || 2; } catch { /* sin almacenamiento */ }
  const apply = (v) => {
    n = [2, 3, 4].includes(v) ? v : 2;
    grid.dataset.cols = n;
    sw.querySelectorAll('.cols-btn').forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.cols === n)));
  };
  apply(n);
  sw.addEventListener('click', (e) => {
    const b = e.target.closest('.cols-btn');
    if (!b) return;
    apply(+b.dataset.cols);
    try { localStorage.setItem('cols', String(n)); } catch { /* sin almacenamiento */ }
  });
}

/* ---------- Móvil: oferta de bienvenida y registro en USFans a pantalla completa ---------- */
function setupOffer() {
  const offer = $('offer');
  const reg = $('regView');
  const frame = $('regFrame');
  const seen = () => { try { return localStorage.getItem('offerSeen') === '1'; } catch (e) { return false; } };
  const mark = () => { try { localStorage.setItem('offerSeen', '1'); } catch (e) { /* sin almacenamiento */ } };
  const closeOffer = () => { offer.hidden = true; mark(); };
  const openReg = () => {
    closeOffer();
    frame.src = CONFIG.homeUrl; // página de registro con mi código de afiliado
    reg.classList.add('open');
    reg.setAttribute('aria-hidden', 'false');
    document.body.classList.add('reg-open');
  };
  const closeReg = () => {
    reg.classList.remove('open');
    reg.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('reg-open');
    setTimeout(() => { if (!reg.classList.contains('open')) frame.src = 'about:blank'; }, 450);
  };
  $('offerGo').onclick = openReg;
  $('offerLater').onclick = closeOffer;
  $('regBack').onclick = closeReg;
  $('offerBtn').onclick = openReg;
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (reg.classList.contains('open')) closeReg();
    else if (!offer.hidden) closeOffer();
  });
  // Solo la primera vez (y no si se llega con un enlace de haul compartido)
  const q = new URLSearchParams(location.search);
  if (!seen() && agentId === 'usfans' && !q.has('haul') && !q.has('edit')) setTimeout(() => { offer.hidden = false; }, 700);
}

async function init() {
  applySeoMeta();
  applyStaticTexts();
  // En el móvil el selector enseña solo el idioma elegido y, al pulsarlo, despliega los demás
  const langSw = document.querySelector('.lang-switch');
  const closeLang = () => langSw.classList.remove('open');
  document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => {
    b.onclick = (e) => {
      if (isMobile() && b.getAttribute('aria-pressed') === 'true') {
        e.stopPropagation();
        const open = !langSw.classList.contains('open');
        langSw.classList.toggle('open', open);
        if (open) {
          let n = 0;
          langSw.querySelectorAll('[data-lang][aria-pressed="false"]').forEach((o) => o.style.setProperty('--i', n++));
        }
        return;
      }
      closeLang();
      setLanguage(b.dataset.lang);
    };
  });
  document.addEventListener('click', (e) => { if (!langSw.contains(e.target)) closeLang(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLang(); });
  renderTools();
  setupResizer();
  setupUrlBar();
  if (!isMobile()) setupSwipe();
  setupQc();
  setupTheme();
  setupChipScroll();
  setupAgents();

  if (isMobile()) {
    // En móvil no hay ventana de USFans: la pestaña existe pero no se carga
    els.app.classList.remove('collapsed');
    activeTab = createTab(CONFIG.homeUrl, HOME_TITLE, { activate: false, lazy: true });
    setupOffer();
    setupFold();
    setupCols();
  } else if (!restoreTabs()) {
    createTab(CONFIG.homeUrl, HOME_TITLE);
  }

  els.openDrawer.onclick = () => setDrawer(els.app.classList.contains('collapsed'));
  els.copyUrl.onclick = () => {
    const done = () => {
      els.copyUrl.classList.add('copied');
      setTimeout(() => els.copyUrl.classList.remove('copied'), 1400);
    };
    const url = activeTab.url;
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(url).then(done, () => {});
    else { els.urlField.select(); document.execCommand('copy'); done(); }
  };
  els.goHome.onclick = () => navigateTab(activeTab, CONFIG.homeUrl, HOME_TITLE);
  els.newTab.onclick = () => createTab(CONFIG.homeUrl, HOME_TITLE);

  els.grid.addEventListener('click', onProductClick);
  els.grid.addEventListener('auxclick', (e) => {
    const p = productFrom(e);
    if (p && e.button === 1) { e.preventDefault(); openProduct(p, { newTab: true }); }
  });
  els.grid.addEventListener('contextmenu', (e) => {
    const p = productFrom(e);
    if (!p) return;
    e.preventDefault();
    showMenu(e.clientX, e.clientY, p.name, productMenu(p));
  });

  // Cerrar el menú: clic fuera, Escape, scroll, redimensionar o clic dentro de un iframe (la ventana pierde el foco)
  document.addEventListener('pointerdown', (e) => { if (!els.menu.contains(e.target)) hideMenu(); });
  document.addEventListener('keydown', (e) => {
    if (els.menu.hidden) return;
    if (e.key === 'Escape') hideMenu();
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const items = [...els.menu.querySelectorAll('.menu-item')];
      const i = items.indexOf(document.activeElement);
      items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
    }
  });
  els.list.addEventListener('scroll', hideMenu, { passive: true });
  window.addEventListener('resize', hideMenu);
  window.addEventListener('blur', hideMenu);

  let searchTimer;
  els.search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.query = els.search.value; applyFilters(); }, 120);
  });
  els.sort.onchange = () => { state.sort = els.sort.value; applyFilters(); };

  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) renderMore();
  }, { root: els.list, rootMargin: '600px' }).observe(els.sentinel);

  renderSkeleton();
  try {
    state.all = CONFIG.dataUrl ? await loadCsv(CONFIG.dataUrl) : sampleProducts();
  } catch (err) {
    console.error(err);
    els.count.removeAttribute('data-i18n');
    els.count.textContent = t('loadError');
    return;
  }
  // A partir de aquí el contador lo escribe renderCount(), no applyStaticTexts()
  els.count.removeAttribute('data-i18n');
  state.orig = state.all;
  renderChips();
  applyFilters();
  window.Accounts?.start();
  window.Hauls?.start();
}

document.addEventListener('DOMContentLoaded', init);
