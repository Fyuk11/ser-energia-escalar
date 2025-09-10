export function initFaqs() {
  // 🎨 Acordeón
  const cards = document.querySelectorAll('.faq-card');
  cards.forEach(card => {
    const question = card.querySelector('.faq-question');
    question.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });

  // ✨ Partículas de fondo
  const canvas = document.getElementById('faqsParticles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Hacer que canvas cubra la sección
  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particles = [];
  const PARTICLE_COUNT = 50;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const size = Math.random() * 3 + 1;
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      alpha: Math.random() * 0.3 + 0.2
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size*2);
      gradient.addColorStop(0, `rgba(10,132,255,${p.alpha})`);
      gradient.addColorStop(1, `rgba(10,132,255,0)`);
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animateParticles);
  }

  animateParticles();
}
