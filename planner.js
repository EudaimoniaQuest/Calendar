const days = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const hours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
const plannerGrid = document.getElementById("plannerGrid");

function renderGrid() {
  days.forEach(day => {
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = day;
    plannerGrid.appendChild(header);
  });

  hours.forEach(hour => {
    days.forEach((day, i) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      if (i === 0) {
        cell.textContent = hour;
        cell.className += " header";
      } else {
        cell.textContent = localStorage.getItem(`${day}_${hour}`) || "";
        cell.onclick = () => {
          const text = prompt(`Edit entry for ${day} at ${hour}:`, cell.textContent);
          if (text !== null) {
            localStorage.setItem(`${day}_${hour}`, text);
            cell.textContent = text;
          }
        };
      }
      plannerGrid.appendChild(cell);
    });
  });
}

renderGrid();
