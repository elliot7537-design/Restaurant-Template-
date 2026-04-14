/* =========================================================
   Brasa — interactions
   - Language toggle (EN / ES)
   - Scroll reveal via IntersectionObserver
   - Light parallax on floating hero images
   - Year stamp, slider stub
   ========================================================= */

/* ---------- Translations ---------- */
const i18n = {
  en: {
    "brand": "Brasa",
    "nav.menu": "Menu",
    "nav.story": "Story",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.book": "Book a Table",

    "hero.sub": "Modern Mexican · Fire Kitchen",
    "hero.cta": "Make a reservation",

    "welcome.h1": "WELCOME",
    "welcome.h2": "TO BRASA",
    "welcome.p": "Step inside Brasa, a dining room where Mexican heritage meets modern flourish. Smoke, salt and citrus — every dish tells a story of fire and patience.",

    "phil.lead": "The Brasa experience is built on heat, honesty and harvest. Each plate draws on the flavours of Mexico — honoring tradition while reaching forward.",
    "phil.big1": "TRADITION",
    "phil.big2": "MEETS",
    "phil.big3": "MODERN FIRE",

    "room.label": "THE DINING ROOM",

    "chef.name": "CHEF MATEO RIVAS",
    "chef.role": "HEAD CHEF · OWNER",
    "chef.tagline": "Brasa is the vision of Chef Mateo, shaped by his Oaxacan roots and years in some of the world's most respected fire kitchens.",
    "chef.p1": "Each plate at Brasa is a letter home. A slow-cooked barbacoa lamb, a prime ribeye kissed by mesquite, lobster bathed in chile de árbol butter — every bite travels between memory and reinvention.",
    "chef.p2": "Our kitchen is open flame only. No shortcuts, no hiding. Just embers, iron, and the patience of hands that know the fire.",

    "taste.h1": "A TASTE",
    "taste.h2": "OF BRASA",
    "taste.p": "A journey of fire from first bite to last. Prime cuts, coastal catches and wild game — paired with agave and smoke.",
    "taste.cta": "View Full Menu",

    "dish1.n": "PRIME RIBEYE · MESQUITE",
    "dish1.d": "45-day dry-aged, charred over mesquite, smoked salt, grilled spring onion.",
    "dish2.n": "LOBSTER · CHILE DE ÁRBOL",
    "dish2.d": "Whole Baja lobster, chile butter, charred lime, heirloom tortilla.",
    "dish3.n": "QUAIL · MOLE NEGRO",
    "dish3.d": "Roasted quail, 24-ingredient Oaxacan mole, sesame, black garlic.",
    "dish4.n": "LAMB BARBACOA",
    "dish4.d": "Agave-leaf wrapped, ember-pit cooked overnight, salsa borracha.",

    "press1": "\"A cathedral of smoke and spice. Brasa redefines what modern Mexican cuisine can be.\"",
    "press2": "\"Dining at the chef's table was unforgettable. Intimate, primal and delicious.\"",
    "press3": "\"From the first mezcal to the last ember, flawless.\"",

    "faq1.q": "Do I need to book a table in advance?",
    "faq1.a": "We recommend reserving at least 2 weeks ahead, especially for weekends and the chef's counter.",
    "faq2.q": "Where do your ingredients come from?",
    "faq2.a": "We source prime cuts from small ranches in Sonora, lobster from Baja California, and produce from local Mexican farms.",
    "faq3.q": "Do you cater for dietary needs?",
    "faq3.a": "Yes. Vegetarian, gluten-free and allergy-aware menus are available with 24-hour notice.",
    "faq4.q": "Can I host a private event at Brasa?",
    "faq4.a": "Absolutely. The private Ember Room seats up to 18 guests for tasting menus and celebrations.",
    "faq5.q": "Is there parking nearby?",
    "faq5.a": "Valet service is available from 6pm. Secure parking is located one block south.",
    "faq6.q": "What are your opening hours?",
    "faq6.a": "Tuesday to Sunday, 6pm — 11pm. Closed Mondays.",

    "contact.addr": "ADDRESS",
    "contact.phone": "PHONE",
    "contact.email": "EMAIL",
    "contact.hours": "HOURS",
    "contact.hoursv": "Tue — Sun · 6pm – 11pm",
    "contact.book": "BOOK NOW",

    "eve.h1": "AN EVENING",
    "eve.h2": "AT BRASA",
    "eve.p": "An intimate tasting menu of nine courses. Paired mezcal, natural wine, and stories from the fire.",
    "eve.cta": "MAKE A RESERVATION",

    "foot.tag": "Modern Mexican · Fire Kitchen",
    "foot.nav": "NAVIGATE",
    "foot.legal": "LEGAL",
    "foot.priv": "Privacy",
    "foot.tos": "Terms",
    "foot.cookies": "Cookies"
  },

  es: {
    "brand": "Brasa",
    "nav.menu": "Menú",
    "nav.story": "Historia",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.book": "Reservar Mesa",

    "hero.sub": "Cocina Mexicana Moderna · Al Fuego",
    "hero.cta": "Reservar ahora",

    "welcome.h1": "BIENVENIDOS",
    "welcome.h2": "A BRASA",
    "welcome.p": "Entra a Brasa, un comedor donde la herencia mexicana se encuentra con el refinamiento moderno. Humo, sal y cítricos — cada plato cuenta una historia de fuego y paciencia.",

    "phil.lead": "La experiencia Brasa se construye sobre fuego, honestidad y cosecha. Cada plato bebe de los sabores de México — honrando la tradición y mirando hacia adelante.",
    "phil.big1": "TRADICIÓN",
    "phil.big2": "SE ENCUENTRA",
    "phil.big3": "CON EL FUEGO",

    "room.label": "EL COMEDOR",

    "chef.name": "CHEF MATEO RIVAS",
    "chef.role": "CHEF EJECUTIVO · PROPIETARIO",
    "chef.tagline": "Brasa es la visión del Chef Mateo, moldeada por sus raíces oaxaqueñas y años en algunas de las cocinas de fuego más respetadas del mundo.",
    "chef.p1": "Cada plato en Brasa es una carta a casa. Barbacoa de cordero cocida lentamente, ribeye premium besado por mezquite, langosta bañada en mantequilla de chile de árbol — cada bocado viaja entre la memoria y la reinvención.",
    "chef.p2": "Nuestra cocina es solo a fuego abierto. Sin atajos, sin escondites. Solo brasas, hierro y la paciencia de manos que conocen el fuego.",

    "taste.h1": "UN SABOR",
    "taste.h2": "DE BRASA",
    "taste.p": "Un viaje de fuego del primer al último bocado. Cortes premium, mariscos costeros y caza — maridados con agave y humo.",
    "taste.cta": "Ver Menú Completo",

    "dish1.n": "RIBEYE PREMIUM · MEZQUITE",
    "dish1.d": "Añejado en seco 45 días, asado sobre mezquite, sal ahumada, cebolla cambray a la parrilla.",
    "dish2.n": "LANGOSTA · CHILE DE ÁRBOL",
    "dish2.d": "Langosta entera de Baja, mantequilla de chile, lima asada, tortilla de maíz criollo.",
    "dish3.n": "CODORNIZ · MOLE NEGRO",
    "dish3.d": "Codorniz rostizada, mole oaxaqueño de 24 ingredientes, ajonjolí, ajo negro.",
    "dish4.n": "BARBACOA DE CORDERO",
    "dish4.d": "Envuelto en penca de maguey, cocido toda la noche en horno de tierra, salsa borracha.",

    "press1": "\"Una catedral de humo y especias. Brasa redefine lo que puede ser la cocina mexicana moderna.\"",
    "press2": "\"Cenar en la mesa del chef fue inolvidable. Íntimo, primal y delicioso.\"",
    "press3": "\"Desde el primer mezcal hasta la última brasa, impecable.\"",

    "faq1.q": "¿Necesito reservar con anticipación?",
    "faq1.a": "Recomendamos reservar con al menos 2 semanas de anticipación, especialmente para fines de semana y la barra del chef.",
    "faq2.q": "¿De dónde provienen sus ingredientes?",
    "faq2.a": "Nuestros cortes premium vienen de pequeños ranchos de Sonora, la langosta de Baja California y los productos de granjas locales mexicanas.",
    "faq3.q": "¿Atienden necesidades dietéticas especiales?",
    "faq3.a": "Sí. Contamos con menús vegetarianos, sin gluten y para alergias con 24 horas de anticipación.",
    "faq4.q": "¿Puedo organizar un evento privado en Brasa?",
    "faq4.a": "Por supuesto. Nuestro salón privado Ember Room acomoda hasta 18 comensales para menús degustación y celebraciones.",
    "faq5.q": "¿Hay estacionamiento cercano?",
    "faq5.a": "Servicio de valet disponible a partir de las 6pm. Estacionamiento seguro a una cuadra al sur.",
    "faq6.q": "¿Cuál es su horario?",
    "faq6.a": "Martes a domingo, 6pm — 11pm. Cerrado los lunes.",

    "contact.addr": "DIRECCIÓN",
    "contact.phone": "TELÉFONO",
    "contact.email": "CORREO",
    "contact.hours": "HORARIO",
    "contact.hoursv": "Mar — Dom · 6pm – 11pm",
    "contact.book": "RESERVAR",

    "eve.h1": "UNA NOCHE",
    "eve.h2": "EN BRASA",
    "eve.p": "Un menú degustación íntimo de nueve tiempos. Mezcales maridados, vino natural e historias del fuego.",
    "eve.cta": "HACER UNA RESERVACIÓN",

    "foot.tag": "Cocina Mexicana Moderna · Al Fuego",
    "foot.nav": "NAVEGAR",
    "foot.legal": "LEGAL",
    "foot.priv": "Privacidad",
    "foot.tos": "Términos",
    "foot.cookies": "Cookies"
  }
};

/* ---------- Language switching ---------- */
function setLanguage(lang) {
  const dict = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang__btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try { localStorage.setItem("brasa.lang", lang); } catch (_) {}
}

document.querySelectorAll(".lang__btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Init language — remember user preference, fall back to browser
(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("brasa.lang"); } catch (_) {}
  const browser = (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  setLanguage(saved || browser);
})();

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

// Observe standard reveals, clip reveals, and welcome copy (triggers line reveals)
document.querySelectorAll(".reveal, .reveal-clip, .welcome__copy").forEach(el => io.observe(el));

/* ---------- Room slider (swap images) ---------- */
const roomImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=75",
  "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1200&auto=format&fit=crop&q=75",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&auto=format&fit=crop&q=75"
];
let roomIdx = 0;
const roomStageImg = document.querySelector(".room__stage img");
const roomCounter = document.querySelector(".room__label small");
function setRoom(i) {
  roomIdx = (i + roomImages.length) % roomImages.length;
  if (roomStageImg) roomStageImg.src = roomImages[roomIdx];
  if (roomCounter) roomCounter.textContent = `0${roomIdx + 1} / 0${roomImages.length}`;
}
document.querySelector(".room__arrow--prev")?.addEventListener("click", () => setRoom(roomIdx - 1));
document.querySelector(".room__arrow--next")?.addEventListener("click", () => setRoom(roomIdx + 1));

/* ---------- Year ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
