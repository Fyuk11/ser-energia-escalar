// animations.js
export function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.fade-left');

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

  // Scroll suave
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ==========================
  // Partículas hero
  // ==========================
  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const PARTICLE_COUNT = 40;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animateParticles() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      if(p.x < 0) p.x = canvas.width;
      if(p.x > canvas.width) p.x = 0;
      if(p.y < 0) p.y = canvas.height;
      if(p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Parallax sutil del contenido
  const heroContent = document.querySelector('.hero-content');
  window.addEventListener('scroll', () => {
    if(heroContent) {
      heroContent.style.transform = `translateY(${window.scrollY * 0.1}px)`;
    }
  });
}
