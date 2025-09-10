// divider-parallax.js
export function initDividerParallax() {
  const container = document.querySelector('.divider-container');
  if (!container) return;

  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.1; // velocidad del parallax
    container.style.transform = `translateY(${offset}px)`;
  });
}
