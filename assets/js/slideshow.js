export function initSlideshow() {
  const slides = Array.from(document.querySelectorAll(".slide.testimonial-card"));
  const dots = Array.from(document.querySelectorAll(".testimonials-dots .dot"));
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  showSlide(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 6000);
}
