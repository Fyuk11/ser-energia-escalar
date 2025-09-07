import { initNav } from './nav.js';
import { initScrollAnimations } from './animations.js';
import { initSlideshow } from "./slideshow.js";
import { initContactForm } from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollAnimations();
  initSlideshow();
  console.log("Landing loaded ✅");

  // inicializar formulario si existe
  initContactForm();
;
});

