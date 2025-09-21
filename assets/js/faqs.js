export function initFaqs() {
  // 🎨 Acordeón FAQ
  const cards = document.querySelectorAll('.faq-card');
  cards.forEach(card => {
    const question = card.querySelector('.faq-question');
    question.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });

  // ✨ Canvas mandalas grandes
  const canvas = document.getElementById('faqsParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const mandalas = [];
  const MANDALA_COUNT = 4; // más mandalas
  const PHI = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < MANDALA_COUNT; i++) {
    const centerX = Math.random() * canvas.width;
    const centerY = Math.random() * canvas.height;
    const radiusBase = 100 + Math.random() * 200; // mandalas más grandes
    const particleCount = 50 + Math.floor(Math.random() * 50);

    const particles = [];
    for (let j = 0; j < particleCount; j++) {
      const angle = j * 2 * Math.PI / PHI;
      const speed = 0.0005 + Math.random() * 0.002;
      const radius = radiusBase * (0.3 + Math.random() * 0.7);
      particles.push({
        angle,
        speed,
        radius,
        size: 1 + Math.random() * 3,
        alpha: 0.05 + Math.random() * 0.2, // opacidad más baja para no tapar texto
      });
    }

    mandalas.push({centerX, centerY, particles});
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mandalas.forEach(mandala => {
      mandala.particles.forEach(p => {
        p.angle += p.speed;

        const x = mandala.centerX + p.radius * Math.cos(p.angle);
        const y = mandala.centerY + p.radius * Math.sin(p.angle);

        // dibujar mini mandala radial
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 3);
        gradient.addColorStop(0, `rgba(10,132,255,${p.alpha})`);
        gradient.addColorStop(1, `rgba(10,132,255,0)`);
        ctx.fillStyle = gradient;
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // líneas radiales sutiles
        ctx.beginPath();
        ctx.moveTo(mandala.centerX, mandala.centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(10,132,255,${p.alpha * 0.1})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      });
    });

    requestAnimationFrame(animate);
  }

  animate();
}
