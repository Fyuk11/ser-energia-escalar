// animations.js
export function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.animate-on-scroll');

  const elementInView = (el, dividend = 1.25) =>
    el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;

  const displayScrollElement = (el) => el.classList.add('visible');

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 1.2)) displayScrollElement(el);
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation();
}
