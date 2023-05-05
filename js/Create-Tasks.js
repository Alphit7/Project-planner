import { displayTasks } from "./Display-Tasks.js";

let taskNameInput = document.querySelector("#task__name");
let taskDescriptionInput = document.querySelector("#task__description");
let taskDateInput = document.querySelector("#task__date");

export function createTask() {
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (
    !taskNameInput.value ||
    !taskDescriptionInput.value ||
    !taskDateInput.value
  ) {
    return;
  }
  const newTask = {
    name: taskNameInput.value.trim(),
    description: taskDescriptionInput.value.trim(),
    dueDate: taskDateInput.value,
    status: "To-Do",
  };
  storedTasks.push(newTask);
  taskNameInput.value = "";
  taskDescriptionInput.value = "";
  taskDateInput.value = "";
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
  displayTasks();
}
