// steps.js
export function initSteps() {
  const stepCards = document.querySelectorAll(".step-card");

  stepCards.forEach(card => {
    const toggleBtn = card.querySelector(".toggle-btn");
    const extraContent = card.querySelector(".extra-content");

    if (toggleBtn && extraContent) {
      toggleBtn.addEventListener("click", () => {
        // Alterna la clase "open" en la card
        card.classList.toggle("open");

        // Cambia display si estás usando la otra lógica
        if (card.classList.contains("open")) {
          extraContent.style.display = "block";
          toggleBtn.textContent = "Ocultar materiales";
        } else {
          extraContent.style.display = "none";
          toggleBtn.textContent = "Ver materiales";
        }
      });
    }
  });
}
