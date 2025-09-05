// nav.js
export function initNav() {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");

  if (!nav || !burger || !navMenu) return;

  const toggleMenu = () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("active");
  };

  // Burger
  burger.addEventListener("click", toggleMenu);

  // Cerrar menu al click en link (mobile)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768 && navMenu.classList.contains("active")) toggleMenu();
    });
  });

  // Cerrar menu al click fuera
  document.addEventListener("click", e => {
    if (window.innerWidth <= 768 && navMenu.classList.contains("active") && !nav.contains(e.target)) {
      toggleMenu();
    }
  });

  // Escape
  document.addEventListener("keydown", e => {
    if (window.innerWidth <= 768 && e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Nav transparente en scroll (desktop)
  const handleNavBackground = () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > 50) nav.classList.add("transparent");
      else nav.classList.remove("transparent");
    } else {
      nav.classList.remove("transparent");
    }
  };

  // Ejecutar al cargar
  handleNavBackground();
  // Ejecutar al hacer scroll
  window.addEventListener("scroll", handleNavBackground);
}
