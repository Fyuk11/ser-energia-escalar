// nav.js
export function initNav() {
  const nav = document.querySelector(".nav--white");
  const burger = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");

  if (!nav || !burger || !navMenu) return;

  const toggleMenu = () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("active");
  };

  burger.addEventListener("click", toggleMenu);

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768 && navMenu.classList.contains("active")) toggleMenu();
    });
  });

  document.addEventListener("click", e => {
    if (window.innerWidth <= 768 && navMenu.classList.contains("active") && !nav.contains(e.target)) {
      toggleMenu();
    }
  });

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

  handleNavBackground();
  window.addEventListener("scroll", handleNavBackground);
}
