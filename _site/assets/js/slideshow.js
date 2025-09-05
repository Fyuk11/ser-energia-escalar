export function initSlideshow() {
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
