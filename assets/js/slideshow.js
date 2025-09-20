export function initSlideshow() {
  const wrap = document.querySelector(".testimonials__wrap");
  if (!wrap) return;

  const testimonials = Array.from(wrap.children);
  const dotsContainer = document.querySelector(".testimonials__dots");
  const dots = [];
  let currentIndex = 0;

  // Crear dots
  testimonials.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("testimonials__dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showTestimonial(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });


 function showTestimonial(index) {
  currentIndex = index;
  const width = wrap.clientWidth;
  wrap.scrollTo({ left: width * index, behavior: "smooth" });
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
}


  // Loop automático
  setInterval(() => {
    showTestimonial((currentIndex + 1) % testimonials.length);
  }, 6000);

  // Inicializar
  showTestimonial(currentIndex);

  // Swipe móvil
  let startX = 0;
  wrap.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  wrap.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) showTestimonial((currentIndex + 1) % testimonials.length);
    else if (endX - startX > 50) showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
  });
}
