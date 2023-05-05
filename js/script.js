import { createTask } from "./Create-Tasks.js";
import { displayTasks } from "./Display-Tasks.js";
import { tasks } from "./collection.js";

window.addEventListener("load", () => {
  if (!tasks) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
  displayTasks();
});
let submit = document.querySelector("#task__submit");
submit.addEventListener("click", createTask);

const sortSelect = document.querySelector("#sort__select");
const selectedOption = sortSelect.value;
function sortTasks() {
  const sortSelect = document.querySelector("#sort__select");
  const selectedOption = sortSelect.value;
  if (selectedOption === "nameAsc") {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  } else if (selectedOption === "nameDesc") {
    tasks.sort((a, b) => b.name.localeCompare(a.name));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  } else if (selectedOption === "dateasc") {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    tasks.reverse();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  } else if (selectedOption === "datedesc") {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}
sortSelect.addEventListener("change", sortTasks);
