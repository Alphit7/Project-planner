import { displayTasks } from "./Display-Tasks.js";

export function sortTasks() {
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  const sortSelect = document.querySelector("#sort__select");
  const selectedOption = sortSelect.value;
  if (selectedOption === "nameAsc") {
    storedTasks.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  } else if (selectedOption === "nameDesc") {
    storedTasks.sort((a, b) => b.name.localeCompare(a.name));
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  } else if (selectedOption === "dateasc") {
    storedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    storedTasks.reverse();
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  } else if (selectedOption === "datedesc") {
    storedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks();
  }
}
