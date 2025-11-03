
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const coachResponse = document.getElementById("coachResponse");
    const calendarSection = document.getElementById("calendarSection");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const age = form.querySelector('input[type="number"]').value;
        const reflection = form.querySelector('textarea').value;

        coachResponse.innerHTML = `
            <p>ðŸŒŸ Â¡Gracias ${name}! Aurora estÃ¡ aquÃ­ para apoyarte.</p>
            <p>ðŸ’¬ ReflexiÃ³n registrada: "${reflection}"</p>
            <p>ðŸ§  Consejo AI: Recuerda celebrar cada pequeÃ±a victoria. Â¡Sigue brillando!</p>
        `;
    });

    const calendar = document.getElementById("calendar");
    const notesContainer = document.getElementById("notes");

    function generateCalendar(year, month) {
        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const monthNames = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        let html = `<h3>${monthNames[month]} ${year}</h3><div class="days">`;
        for (let i = 0; i < firstDay; i++) {
            html += "<div></div>";
        }

        for (let d = 1; d <= daysInMonth; d++) {
            html += `<div class="day" data-day="${d}">${d}</div>`;
        }

        html += "</div>";
        calendar.innerHTML = html;

        document.querySelectorAll(".day").forEach(day => {
            day.addEventListener("click", function () {
                const selectedDay = this.getAttribute("data-day");
                const emotion = prompt("Â¿CÃ³mo te sentiste hoy? ðŸ˜ŠðŸ˜¢ðŸ˜ ðŸ˜´ðŸ¤©");
                const note = prompt("Â¿Deseas dejar una nota?");
                if (emotion) {
                    const entry = document.createElement("div");
                    entry.innerHTML = `<strong>${selectedDay}/${month + 1}/${year}</strong>: ${emotion} - ${note}`;
                    notesContainer.appendChild(entry);
