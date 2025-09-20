/* export function initSlideshow() {
  const slides = document.querySelectorAll(".slideshow .slide");
  let currentIndex = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }, 5000); // cada 5 segundos
  }
}
*/

export function initSlideshow() {
  const container = document.querySelector(".testimonials-slideshow");
  if (!container) return;

  const slides = container.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Auto cambio cada 5s
  setInterval(nextSlide, 5000);

  // Mostrar primero
  showSlide(currentIndex);
}
