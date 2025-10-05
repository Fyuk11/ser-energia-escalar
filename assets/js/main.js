import { initNav } from './nav.js';
import { initScrollAnimations, initAboutAnimations } from './animations.js';
import { initSlideshow } from "./slideshow.js";
import { initFaqs } from './faqs.js';
import { initHeroDropdown } from './hero.js';
import { initSteps } from './steps.js';   // <-- 📌 importamos
import { initEquipos } from './equipos.js';

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollAnimations();
  initSlideshow();
  initAboutAnimations();   // <-- 💡 acá la llamamos
  initFaqs();
  initHeroDropdown ();
  initSteps();  // <-- 📌 la llamamos
  initEquipos();

  console.log("Landing loaded ✅");
});

// main.js
// main.js
// Asegura que siempre al recargar se vaya al inicio
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

// También por si se carga normalmente
window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});
