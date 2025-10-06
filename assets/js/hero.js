// --- Hero Dropdown ---
export function initHeroDropdown() {
  const holisticWrapper = document.querySelector('.btn-holistic-wrapper');
  if (!holisticWrapper) return;

  const btn = holisticWrapper.querySelector('.btn-holistic');
  if (!btn) return;

  btn.addEventListener('click', () => {
    holisticWrapper.classList.toggle('expanded');
  });
}

// --- Equipos: Toggle de detalles ---
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".equipo-card");

  if (!cards.length) return;

  cards.forEach(card => {
    const btn = card.querySelector(".toggle-btn");
    const details = card.querySelector(".equipo-details");

    if (!btn || !details) return;

    btn.addEventListener("click", () => {
      const isActive = card.classList.toggle("active");
      btn.textContent = isActive ? "Ocultar detalles" : "Ver detalles";
      btn.setAttribute("aria-expanded", isActive);
    });
  });
});
