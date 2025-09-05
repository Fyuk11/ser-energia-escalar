// main.js
/*document.addEventListener("DOMContentLoaded", () => {
  /* Nav scroll y burger*

  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");

  // Función toggle burger menu
  const toggleMenu = () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("active");
  };

  if (burger) {
    burger.addEventListener("click", toggleMenu);
  }

  // Cerrar menu al click en link (mobile)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768 && navMenu.classList.contains("active")) toggleMenu();
    });
  });

  // Cerrar menu al click fuera (mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && navMenu.classList.contains("active") && !nav.contains(e.target)) {
      toggleMenu();
    }
  });

  // Cerrar con Escape (mobile)
  document.addEventListener("keydown", (e) => {
    if (window.innerWidth <= 768 && e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Nav transparente en scroll (desktop)
  const handleNavBackground = () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > 50) {
        nav.classList.add("transparent");
      } else {
        nav.classList.remove("transparent");
      }
    } else {
      nav.classList.remove("transparent");
    }
  };

  handleNavBackground();
  window.addEventListener("scroll", handleNavBackground);

  console.log("Landing loaded ✅");
});

// Animaciones al hacer scroll
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1.25) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.2)) displayScrollElement(el);
  });
};

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // para elementos ya visibles al cargar
 */


import { initNav } from './nav.js';
import { initScrollAnimations } from './animations.js';
import { initSlideshow } from "./slideshow.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initScrollAnimations();
  initSlideshow();
  console.log("Landing loaded ✅");
});
