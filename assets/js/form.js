export function initContactForm() {
  const form = document.querySelector("form[name='contact']");
  const successMsg = document.getElementById("form-success");

  if (!form) return; // si la página no tiene form, no hace nada

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      form.reset();
      form.style.display = "none";
      successMsg.style.display = "block";
    } catch (err) {
      alert("❌ Hubo un error al enviar el formulario. Intenta nuevamente.");
    }
  });
}
