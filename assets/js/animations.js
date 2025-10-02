// animations.js

// ==========================
// Animaciones al hacer scroll
// ==========================
export function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.animate-on-scroll, .fade-left, .fade-up');

  const elementInView = (el, dividend = 1.25) =>
    el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;

  const displayScrollElement = (el) => el.classList.add('visible');

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 1.2)) displayScrollElement(el);
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation();

  // ==========================
  // Scroll suave
  // ==========================
  // ==========================
  // Scroll suave
  // ==========================
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');

      // Si es externo (http, https, mailto, tel, wa.me), dejamos que se abra normal
      if (/^(https?:|mailto:|tel:)/i.test(href) || href.includes('wa.me')) {
        window.open(href, '_blank'); // abre en nueva pestaña
        return;
      }

      // Si es un anchor interno (#)
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });


  // ==========================
  // Partículas hero premium
  // ==========================
  const heroCanvas = document.getElementById('heroParticles');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    heroCanvas.width = window.innerWidth;
    heroCanvas.height = window.innerHeight;

    const particles = [];
    const PARTICLE_COUNT = 60;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const size = Math.random() * 3 + 2;
      particles.push({
        x: Math.random() * heroCanvas.width,
        y: Math.random() * heroCanvas.height,
        size: size,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.4 - 0.2,
        alpha: Math.random() * 0.3 + 0.4
      });
    }

    function animateHeroParticles() {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 1.5);
        gradient.addColorStop(0, `rgba(255,255,255,${p.alpha})`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = heroCanvas.width;
        if (p.x > heroCanvas.width) p.x = 0;
        if (p.y < 0) p.y = heroCanvas.height;
        if (p.y > heroCanvas.height) p.y = 0;
      });
      requestAnimationFrame(animateHeroParticles);
    }
    animateHeroParticles();

    window.addEventListener('resize', () => {
      heroCanvas.width = window.innerWidth;
      heroCanvas.height = window.innerHeight;
    });
  }

  // ==========================
  // Parallax sutil del hero
  // ==========================
  const heroContent = document.querySelector('.hero-content');
  window.addEventListener('scroll', () => {
    if (heroContent) heroContent.style.transform = `translateY(${window.scrollY * 0.1}px)`;
  });
}

// ==========================
// Animaciones About
// ==========================
export function initAboutAnimations() {
  const aboutContent = document.querySelector(".about__content");
  if (!aboutContent) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutContent.classList.add("visible");
        observer.unobserve(aboutContent);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutContent);
}



// Animación Fade-Up para la sección de equipos
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1.25) =>
  el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;

const displayScrollElement = (el) => el.classList.add('visible');

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.2)) displayScrollElement(el);
  });
};

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();
