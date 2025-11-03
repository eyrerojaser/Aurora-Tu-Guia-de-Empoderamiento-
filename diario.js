document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("diario-form");
  const texto = document.getElementById("texto");
  const emoji = document.getElementById("emoji");
  const imagen = document.getElementById("imagen");
  const preview = document.getElementById("preview");

  // Cargar datos guardados si existen
  const hoy = new Date().toISOString().split("T")[0];
  const datosGuardados = JSON.parse(localStorage.getItem(`diario-${hoy}`));
  if (datosGuardados) {
    texto.value = datosGuardados.texto;
    emoji.value = datosGuardados.emoji;
    mostrarPreview(datosGuardados);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const file = imagen.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const data = {
          texto: texto.value,
          emoji: emoji.value,
          imagen: reader.result,
        };
        localStorage.setItem(`diario-${hoy}`, JSON.stringify(data));
        mostrarPreview(data);
      };
      reader.readAsDataURL(file);
    } else {
      const data = {
        texto: texto.value,
        emoji: emoji.value,
        imagen: null,
      };
      localStorage.setItem(`diario-${hoy}`, JSON.stringify(data));
      mostrarPreview(data);
    }
  });

  function mostrarPreview(data) {
    preview.innerHTML = `
      <h2>Tu entrada de hoy:</h2>
      <p><strong>Emoción:</strong> ${data.emoji}</p>
      <p>${data.texto}</p>
      ${data.imagen ? `<img src="${data.imagen}" alt="Imagen subida" style="max-width: 200px; border-radius: 10px;"/>` : ""}
    `;
  }
});
