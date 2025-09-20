export function initSlideshow() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".testimonials-dots .dot"));
  if (!slides.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  let interval = setInterval(nextSlide, 6000);

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      showSlide(currentIndex);
      clearInterval(interval);
      interval = setInterval(nextSlide, 6000);
    });
  });

  // Mostrar primero
  showSlide(currentIndex);
}
