export function initContactForm() {

const form = document.querySelector("form[name='contact']");
const successMessage = document.createElement("div");
successMessage.textContent = "¡Gracias! Tu mensaje fue enviado correctamente.";
successMessage.style.color = "green";
successMessage.style.marginTop = "1rem";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const response = await fetch("/", {
    method: "POST",
    body: new URLSearchParams(formData),
  });
  
  if (response.ok) {
    // Mostramos el mensaje debajo del form
    if (!form.contains(successMessage)) {
      form.appendChild(successMessage);
    }
    form.reset();
  } else {
    alert("❌ Hubo un error al enviar el formulario. Intentá de nuevo.");
  }
})};
