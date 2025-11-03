document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const coachDiv = document.getElementById("coachResponse");
  coachDiv.innerText = "¡Gracias por compartir! Aurora te acompaña en tu camino 💖";
});
