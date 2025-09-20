export function initSlideshow() {
  const container = document.querySelector(".testimonials-slideshow");
  if (!container) return;

  const slides = Array.from(container.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".testimonials-dots .dot"));
  let currentIndex = 0;

  function updateSlides(index) {
    slides.forEach((slide, i) => {
      const offset = i - index;
      slide.style.transform = `translateX(${offset * 100}%) scale(${i === index ? 1 : 0.85})`;
      slide.style.opacity = i === index ? '1' : '0.5';
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides(currentIndex);
  }

  // Auto slide
  let interval = setInterval(nextSlide, 5000);

  // Dots click
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      updateSlides(currentIndex);
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    });
  });

  updateSlides(currentIndex);
}
