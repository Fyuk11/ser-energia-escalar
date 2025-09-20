export function initSlideshow() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".testimonials-dots .dot"));
  if (slides.length === 0) return;

  let currentIndex = 0;

  function updateSlides(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides(currentIndex);
  }

  // Cambio automático cada 6s
  let interval = setInterval(nextSlide, 6000);

  // Click en dots
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      updateSlides(currentIndex);
      clearInterval(interval);
      interval = setInterval(nextSlide, 6000);
    });
  });

  // Mostrar primero
  updateSlides(currentIndex);
}
