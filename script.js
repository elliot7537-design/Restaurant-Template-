/* =========================================================
   Brasa — interactions
   =========================================================
   Sections:
   1.  Translations (EN / ES)
   2.  Language switching
   3.  Scroll reveal
   4.  Draw-line observer
   5.  Blur-reveal observer
   6.  Text scramble
   7.  Animated counters
   8.  Stroke-to-fill (Philosophy section)
   9.  Evening CTA parallax
   10. Magnetic hover buttons
   11. Room slider
   12. Year stamp
   ========================================================= */

/* ─────────────────────────────────────────────
   1. TRANSLATIONS
   ───────────────────────────────────────────── */
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

    "welcome.eyebrow": "Welcome",
    "welcome.h1": "WELCOME",
    "welcome.h2": "TO BRASA",
    "welcome.p": "Step inside Brasa, a dining room where Mexican heritage meets modern flourish. Smoke, salt and citrus — every dish tells a story of fire and patience.",
    "stat.years": "Years",
    "stat.courses": "Courses",
    "stat.seats": "Seats",

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
    "chef.cta": "Explore the Menu",

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

    "press1": "\u201CA cathedral of smoke and spice. Brasa redefines what modern Mexican cuisine can be.\u201D",
    "press2": "\u201CDining at the chef\u2019s table was unforgettable. Intimate, primal and delicious.\u201D",
    "press3": "\u201CFrom the first mezcal to the last ember, flawless.\u201D",

    "faq1.q": "Do I need to book a table in advance?",
    "faq1.a": "We recommend reserving at least 2 weeks ahead, especially for weekends and the chef\u2019s counter.",
    "faq2.q": "Where do your ingredients come from?",
    "faq2.a": "We source prime cuts from small ranches in Sonora, lobster from Baja California, and produce from local Mexican farms.",
    "faq3.q": "Do you cater for dietary needs?",
    "faq3.a": "Yes. Vegetarian, gluten-free and allergy-aware menus are available with 24-hour notice.",
    "faq4.q": "Can I host a private event at Brasa?",
    "faq4.a": "Absolutely. The private Ember Room seats up to 18 guests for tasting menus and celebrations.",
    "faq5.q": "Is there parking nearby?",
    "faq5.a": "Valet service is available from 6pm. Secure parking is located one block south.",
    "faq6.q": "What are your opening hours?",
    "faq6.a": "Tuesday to Sunday, 6pm \u2014 11pm. Closed Mondays.",

    "contact.addr": "ADDRESS",
    "contact.phone": "PHONE",
    "contact.email": "EMAIL",
    "contact.hours": "HOURS",
    "contact.hoursv": "Tue \u2014 Sun \u00B7 6pm \u2013 11pm",
    "contact.book": "BOOK NOW",

    "eve.h1": "AN EVENING",
    "eve.h2": "AT BRASA",
    "eve.p": "An intimate tasting menu of nine courses. Paired mezcal, natural wine, and stories from the fire.",
    "eve.cta": "MAKE A RESERVATION",

    "foot.tag": "Modern Mexican \u00B7 Fire Kitchen",
    "foot.nav": "NAVIGATE",
    "foot.legal": "LEGAL",
    "foot.priv": "Privacy",
    "foot.tos": "Terms",
    "foot.cookies": "Cookies"
  },

  es: {
    "brand": "Brasa",
    "nav.menu": "Men\u00FA",
    "nav.story": "Historia",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.book": "Reservar Mesa",

    "hero.sub": "Cocina Mexicana Moderna \u00B7 Al Fuego",
    "hero.cta": "Reservar ahora",

    "welcome.eyebrow": "Bienvenidos",
    "welcome.h1": "BIENVENIDOS",
    "welcome.h2": "A BRASA",
    "welcome.p": "Entra a Brasa, un comedor donde la herencia mexicana se encuentra con el refinamiento moderno. Humo, sal y c\u00EDtricos \u2014 cada plato cuenta una historia de fuego y paciencia.",
    "stat.years": "A\u00F1os",
    "stat.courses": "Tiempos",
    "stat.seats": "Asientos",

    "phil.lead": "La experiencia Brasa se construye sobre fuego, honestidad y cosecha. Cada plato bebe de los sabores de M\u00E9xico \u2014 honrando la tradici\u00F3n y mirando hacia adelante.",
    "phil.big1": "TRADICI\u00D3N",
    "phil.big2": "SE ENCUENTRA",
    "phil.big3": "CON EL FUEGO",

    "room.label": "EL COMEDOR",

    "chef.name": "CHEF MATEO RIVAS",
    "chef.role": "CHEF EJECUTIVO \u00B7 PROPIETARIO",
    "chef.tagline": "Brasa es la visi\u00F3n del Chef Mateo, moldeada por sus ra\u00EDces oaxaque\u00F1as y a\u00F1os en algunas de las cocinas de fuego m\u00E1s respetadas del mundo.",
    "chef.p1": "Cada plato en Brasa es una carta a casa. Barbacoa de cordero cocida lentamente, ribeye premium besado por mezquite, langosta ba\u00F1ada en mantequilla de chile de \u00E1rbol \u2014 cada bocado viaja entre la memoria y la reinvenci\u00F3n.",
    "chef.p2": "Nuestra cocina es solo a fuego abierto. Sin atajos, sin escondites. Solo brasas, hierro y la paciencia de manos que conocen el fuego.",
    "chef.cta": "Explorar el Men\u00FA",

    "taste.h1": "UN SABOR",
    "taste.h2": "DE BRASA",
    "taste.p": "Un viaje de fuego del primer al \u00FAltimo bocado. Cortes premium, mariscos costeros y caza \u2014 maridados con agave y humo.",
    "taste.cta": "Ver Men\u00FA Completo",

    "dish1.n": "RIBEYE PREMIUM \u00B7 MEZQUITE",
    "dish1.d": "A\u00F1ejado en seco 45 d\u00EDas, asado sobre mezquite, sal ahumada, cebolla cambray a la parrilla.",
    "dish2.n": "LANGOSTA \u00B7 CHILE DE \u00C1RBOL",
    "dish2.d": "Langosta entera de Baja, mantequilla de chile, lima asada, tortilla de ma\u00EDz criollo.",
    "dish3.n": "CODORNIZ \u00B7 MOLE NEGRO",
    "dish3.d": "Codorniz rostizada, mole oaxaque\u00F1o de 24 ingredientes, ajonjol\u00ED, ajo negro.",
    "dish4.n": "BARBACOA DE CORDERO",
    "dish4.d": "Envuelto en penca de maguey, cocido toda la noche en horno de tierra, salsa borracha.",

    "press1": "\u201CUna catedral de humo y especias. Brasa redefine lo que puede ser la cocina mexicana moderna.\u201D",
    "press2": "\u201CCenar en la mesa del chef fue inolvidable. \u00CDntimo, primal y delicioso.\u201D",
    "press3": "\u201CDesde el primer mezcal hasta la \u00FAltima brasa, impecable.\u201D",

    "faq1.q": "\u00BFNecesito reservar con anticipaci\u00F3n?",
    "faq1.a": "Recomendamos reservar con al menos 2 semanas de anticipaci\u00F3n, especialmente para fines de semana y la barra del chef.",
    "faq2.q": "\u00BFDe d\u00F3nde provienen sus ingredientes?",
    "faq2.a": "Nuestros cortes premium vienen de peque\u00F1os ranchos de Sonora, la langosta de Baja California y los productos de granjas locales mexicanas.",
    "faq3.q": "\u00BFAtienden necesidades diet\u00E9ticas especiales?",
    "faq3.a": "S\u00ED. Contamos con men\u00FAs vegetarianos, sin gluten y para alergias con 24 horas de anticipaci\u00F3n.",
    "faq4.q": "\u00BFPuedo organizar un evento privado en Brasa?",
    "faq4.a": "Por supuesto. Nuestro sal\u00F3n privado Ember Room acomoda hasta 18 comensales para men\u00FAs degustaci\u00F3n y celebraciones.",
    "faq5.q": "\u00BFHay estacionamiento cercano?",
    "faq5.a": "Servicio de valet disponible a partir de las 6pm. Estacionamiento seguro a una cuadra al sur.",
    "faq6.q": "\u00BFCu\u00E1l es su horario?",
    "faq6.a": "Martes a domingo, 6pm \u2014 11pm. Cerrado los lunes.",

    "contact.addr": "DIRECCI\u00D3N",
    "contact.phone": "TEL\u00C9FONO",
    "contact.email": "CORREO",
    "contact.hours": "HORARIO",
    "contact.hoursv": "Mar \u2014 Dom \u00B7 6pm \u2013 11pm",
    "contact.book": "RESERVAR",

    "eve.h1": "UNA NOCHE",
    "eve.h2": "EN BRASA",
    "eve.p": "Un men\u00FA degustaci\u00F3n \u00EDntimo de nueve tiempos. Mezcales maridados, vino natural e historias del fuego.",
    "eve.cta": "HACER UNA RESERVACI\u00D3N",

    "foot.tag": "Cocina Mexicana Moderna \u00B7 Al Fuego",
    "foot.nav": "NAVEGAR",
    "foot.legal": "LEGAL",
    "foot.priv": "Privacidad",
    "foot.tos": "T\u00E9rminos",
    "foot.cookies": "Cookies"
  }
};

/* ─────────────────────────────────────────────
   2. LANGUAGE SWITCHING
   ───────────────────────────────────────────── */
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

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem("brasa.lang"); } catch (_) {}
  const browser = (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  setLanguage(saved || browser);
})();

/* ─────────────────────────────────────────────
   3. SCROLL REVEAL
   ───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ─────────────────────────────────────────────
   4. DRAW-LINE
   ───────────────────────────────────────────── */
const drawLineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      drawLineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".draw-line").forEach(el => drawLineObserver.observe(el));

/* ─────────────────────────────────────────────
   5. BLUR-REVEAL
   ───────────────────────────────────────────── */
const blurRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      blurRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".blur-reveal").forEach(el => blurRevealObserver.observe(el));

/* ─────────────────────────────────────────────
   6. TEXT SCRAMBLE
   ───────────────────────────────────────────── */
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ\u00B7\u2014\u2022";
const scrambledEls = new WeakSet();

function scrambleIn(el) {
  if (scrambledEls.has(el)) return;
  scrambledEls.add(el);

  // Collect all text nodes in the element (preserves DOM structure)
  const textNodes = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.trim().length > 0) {
      textNodes.push({ node, original: node.nodeValue });
    }
  }
  if (textNodes.length === 0) return;

  const totalChars = textNodes.reduce((s, t) => s + t.original.replace(/\s/g, "").length, 0);
  let revealedCount = 0;
  const speed = Math.max(18, Math.min(36, Math.round(700 / totalChars)));

  const tick = () => {
    revealedCount += Math.ceil(totalChars / 18);
    let charIdx = 0;

    textNodes.forEach(({ node, original }) => {
      node.nodeValue = original.split("").map((char) => {
        if (/\s/.test(char)) return char;
        const pos = charIdx++;
        if (pos < revealedCount) return char;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join("");
    });

    if (revealedCount < totalChars + totalChars * 0.15) {
      setTimeout(tick, speed);
    } else {
      // Ensure final state is clean
      textNodes.forEach(({ node, original }) => { node.nodeValue = original; });
    }
  };

  // Small delay so it's noticeable
  setTimeout(tick, 80);
}

const scrambleObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrambleIn(entry.target);
      scrambleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".scramble-text").forEach(el => scrambleObserver.observe(el));

/* ─────────────────────────────────────────────
   7. ANIMATED COUNTERS
   ───────────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  const duration = 1800;
  const start = performance.now();

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function update(now) {
    const progress = Math.min(1, (now - start) / duration);
    el.textContent = Math.round(easeOutCubic(progress) * target);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".stat__n").forEach(el => counterObserver.observe(el));

/* ─────────────────────────────────────────────
   8. PHILOSOPHY — parallax bg + stroke-to-fill
   ───────────────────────────────────────────── */
const philSection   = document.querySelector(".philosophy");
const philBgImg     = document.querySelector(".philosophy__bg-img");
const bigStatement  = document.querySelector(".big-statement");

function updatePhilosophyParallax() {
  if (!philSection || !philBgImg) return;
  const rect = philSection.getBoundingClientRect();
  const wh = window.innerHeight;
  // progress: 0 when section enters bottom, 1 when it leaves top
  const progress = Math.max(0, Math.min(1, -rect.top / (rect.height + wh)));
  // Shift image –40px → +40px as we scroll through the section
  const shift = (progress - 0.5) * 80;
  philBgImg.style.setProperty("--phil-shift", shift.toFixed(1) + "px");
}

function updateStrokeFill() {
  if (!bigStatement) return;
  const rect = bigStatement.getBoundingClientRect();
  const wh = window.innerHeight;

  // progress 0 → element enters viewport bottom
  // progress 1 → element is 20% from top
  const progress = Math.max(0, Math.min(1,
    (wh * 0.85 - rect.top) / (wh * 0.65)
  ));

  bigStatement.style.setProperty("--fill-pct", Math.round(progress * 100) + "%");

  // Fade stroke as fill progresses
  const strokeAlpha = (0.35 * (1 - progress)).toFixed(3);
  bigStatement.style.setProperty(
    "-webkit-text-stroke-color",
    `rgba(243, 231, 228, ${strokeAlpha})`
  );
}

window.addEventListener("scroll", () => {
  updateStrokeFill();
  updatePhilosophyParallax();
}, { passive: true });
updateStrokeFill();
updatePhilosophyParallax();

/* ─────────────────────────────────────────────
   9. EVENING CTA — parallax
   ───────────────────────────────────────────── */
const eveningBgImg = document.querySelector(".evening__bg-img");

function updateEveningParallax() {
  if (!eveningBgImg) return;
  const section = eveningBgImg.closest(".evening");
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
  const shift = progress * 40; // max 40px shift
  eveningBgImg.style.transform = `scale(1.04) translateY(${shift}px)`;
}

window.addEventListener("scroll", updateEveningParallax, { passive: true });

/* ─────────────────────────────────────────────
   10. DISH CARD — touch/click toggle on mobile
   ───────────────────────────────────────────── */
const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

document.querySelectorAll(".dish-card").forEach(card => {
  card.addEventListener("click", () => {
    if (!isTouchDevice()) return;  // hover handles it on desktop
    const inner = card.querySelector(".dish-card__inner");
    const isFlipped = inner.style.transform === "rotateY(180deg)";
    inner.style.transform = isFlipped ? "" : "rotateY(180deg)";
  });
});

/* ─────────────────────────────────────────────
   12. MAGNETIC HOVER — buttons follow cursor
   ───────────────────────────────────────────── */
document.querySelectorAll(".magnetic-btn").forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.38;
    const dy = (e.clientY - cy) * 0.38;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

/* ─────────────────────────────────────────────
   13. ROOM SLIDER
   ───────────────────────────────────────────── */
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
  if (roomStageImg) {
    roomStageImg.style.opacity = "0";
    setTimeout(() => {
      roomStageImg.src = roomImages[roomIdx];
      roomStageImg.style.opacity = "1";
    }, 200);
  }
  if (roomCounter) roomCounter.textContent = `0${roomIdx + 1} / 0${roomImages.length}`;
}

if (roomStageImg) roomStageImg.style.transition = "opacity 0.3s ease";
document.querySelector(".room__arrow--prev")?.addEventListener("click", () => setRoom(roomIdx - 1));
document.querySelector(".room__arrow--next")?.addEventListener("click", () => setRoom(roomIdx + 1));

/* ─────────────────────────────────────────────
   14. YEAR STAMP
   ───────────────────────────────────────────── */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─────────────────────────────────────────────
   FAQ row stagger helper
   ───────────────────────────────────────────── */
document.querySelectorAll(".faq__row").forEach((row, i) => {
  row.style.setProperty("--row-i", i);
});
