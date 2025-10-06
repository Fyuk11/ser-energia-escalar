// equipos.js
export function initEquipos() {
  const equipoCards = document.querySelectorAll('.equipo-card');

  equipoCards.forEach(card => {
    const toggleBtn = card.querySelector('.equipo-toggle');
    const content = card.querySelector('.equipo-content');

    if (!toggleBtn || !content) return;

    // Inicializar todo cerrado
    content.style.maxHeight = "0px";
    card.classList.remove('open');

    toggleBtn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open');

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        toggleBtn.textContent = "Cerrar detalles";
      } else {
        content.style.maxHeight = "0px";
        toggleBtn.textContent = "Ver detalles";
      }
    });
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
